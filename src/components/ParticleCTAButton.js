import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
const ButtonContainer = styled('div')({
    position: 'relative',
    display: 'inline-block',
});
const StyledButton = styled(Button)(({ theme }) => ({
    background: theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, 0.1)'
        : 'white',
    border: 'none',
    padding: '20px 40px',
    borderRadius: '16px',
    cursor: 'pointer',
    boxShadow: theme.shadows[4],
    transition: 'all 0.3s ease',
    position: 'relative',
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '1rem',
    letterSpacing: '0.5px',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: theme.shadows[12],
    },
    '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
    },
}));
const Canvas = styled('canvas')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 10,
    borderRadius: '16px',
});
const ParticleCTAButton = ({ children, onClick, to, particleCount = 150, colors = ['#002395', '#6B8DE3', '#ED2939', '#E8E8E8'], disabled, ...buttonProps }) => {
    const canvasRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const particles = useRef([]);
    const animationId = useRef(undefined);
    const buttonRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        const resizeCanvas = () => {
            if (buttonRef.current) {
                const rect = buttonRef.current.getBoundingClientRect();
                canvas.width = rect.width;
                canvas.height = rect.height;
            }
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationId.current) {
                cancelAnimationFrame(animationId.current);
            }
        };
    }, []);
    const createParticles = () => {
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        particles.current = [];
        for (let i = 0; i < particleCount; i++) {
            particles.current.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height * 0.6 + canvas.height * 0.2,
                vx: (Math.random() - 0.5) * 8,
                vy: (Math.random() - 0.5) * 8,
                radius: Math.random() * 3 + 1,
                color: colors[Math.floor(Math.random() * colors.length)],
                alpha: 1,
                decay: Math.random() * 0.02 + 0.01,
            });
        }
    };
    const animate = () => {
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let allDead = true;
        particles.current.forEach((particle) => {
            if (particle.alpha <= 0)
                return;
            allDead = false;
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vy += 0.15; // gravity
            particle.alpha -= particle.decay;
            ctx.save();
            ctx.globalAlpha = particle.alpha;
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        });
        if (!allDead) {
            animationId.current = requestAnimationFrame(animate);
        }
        else {
            setIsAnimating(false);
        }
    };
    const handleClick = (_e) => {
        if (isAnimating || disabled)
            return;
        setIsAnimating(true);
        createParticles();
        animate();
        setTimeout(() => {
            setIsAnimating(false);
        }, 3000);
        if (onClick) {
            onClick();
        }
    };
    const buttonSx = {
        opacity: isAnimating ? 0.9 : 1,
        transform: isAnimating ? 'scale(0.95)' : 'scale(1)',
        textDecoration: 'none',
        ...(buttonProps.sx || {}),
    };
    return (_jsxs(ButtonContainer, { children: [_jsx(StyledButton, { ref: buttonRef, ...(to ? { component: RouterLink, to } : {}), onClick: handleClick, disabled: disabled || isAnimating, sx: buttonSx, ...buttonProps, children: children }), _jsx(Canvas, { ref: canvasRef })] }));
};
export default ParticleCTAButton;
