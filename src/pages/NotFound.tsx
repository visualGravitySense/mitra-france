import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SpeedIcon from '@mui/icons-material/Speed';
import { keyframes } from '@mui/material/styles';

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const pulseAnimation = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
`;

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.03) 0%, rgba(237, 41, 57, 0.03) 100%)',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 12, sm: 14, md: 16 },
        pb: { xs: 6, sm: 8 },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(0, 35, 149, 0.05) 0%, transparent 70%)',
          animation: `${pulseAnimation} 4s ease-in-out infinite`,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-50%',
          right: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(237, 41, 57, 0.05) 0%, transparent 70%)',
          animation: `${pulseAnimation} 4s ease-in-out infinite 2s`,
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center' }}>
          {/* 404 Number with background image */}
          <Box
            sx={{
              position: 'relative',
              mb: 4,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: { xs: '500px', sm: '700px', md: '900px' },
                height: { xs: '500px', sm: '700px', md: '900px' },
                borderRadius: '50%',
                backgroundImage: 'url(/404.png)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                opacity: 0.25,
                mixBlendMode: 'overlay',
                zIndex: 0,
                pointerEvents: 'none',
                overflow: 'hidden',
              },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                position: 'relative',
                zIndex: 1,
                fontSize: { xs: '120px', sm: '180px', md: '240px' },
                fontWeight: 900,
                lineHeight: 1,
                background: 'linear-gradient(135deg, #002395 0%, #ED2939 50%, #002395 100%)',
                backgroundSize: '200% 200%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: `${gradientAnimation} 3s ease infinite`,
                textShadow: '0 0 40px rgba(0, 35, 149, 0.3)',
                mb: 2,
              }}
            >
              404
            </Typography>
          </Box>

          {/* Error Icon */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 120,
              height: 120,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(237, 41, 57, 0.1) 100%)',
              mb: 4,
              animation: `${pulseAnimation} 2s ease-in-out infinite`,
            }}
          >
            <ErrorOutlineIcon
              sx={{
                fontSize: 64,
                color: 'primary.main',
                animation: `${floatAnimation} 2s ease-in-out infinite`,
              }}
            />
          </Box>

          {/* Title */}
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
              background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Page Not Found
          </Typography>

          {/* MOTIVATION: Reassuring and positive message */}
          <Box sx={{ mb: 4 }}>
            <Chip
              icon={<CheckCircleIcon />}
              label="Don't worry, we've got you covered!"
              color="success"
              sx={{ mb: 2, fontSize: '0.9rem', py: 2.5, px: 1 }}
            />
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              The page you're looking for doesn't exist, but we can help you find what you need quickly and easily.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
                fontStyle: 'italic',
              }}
            >
              ✓ Free access • ✓ No registration needed • ✓ Takes 2 seconds
            </Typography>
          </Box>

          {/* ABILITY: Make actions simple and clear */}
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontWeight: 600,
                color: 'text.primary',
                textAlign: 'center',
              }}
            >
              Choose the easiest path for you:
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ justifyContent: 'center', mb: 3 }}
            >
              {/* PROMPT: Primary CTA - Most visible and clear */}
              <Button
                component={RouterLink}
                to="/"
                variant="contained"
                size="large"
                startIcon={<HomeIcon />}
                sx={{
                  px: 5,
                  py: 2,
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #002395 0%, #0038d6 100%)',
                  boxShadow: '0 6px 25px rgba(0, 35, 149, 0.4)',
                  borderRadius: 3,
                  textTransform: 'none',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #0038d6 0%, #002395 100%)',
                    boxShadow: '0 8px 30px rgba(0, 35, 149, 0.5)',
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Go to Homepage
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<ArrowBackIcon />}
                onClick={() => window.history.back()}
                sx={{
                  px: 5,
                  py: 2,
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  borderWidth: 2,
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  borderRadius: 3,
                  textTransform: 'none',
                  '&:hover': {
                    borderWidth: 2,
                    borderColor: 'primary.dark',
                    backgroundColor: 'rgba(0, 35, 149, 0.08)',
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Go Back
              </Button>
            </Stack>
            
            {/* ABILITY: Show it's simple with visual indicator */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                color: 'success.main',
                mb: 2,
              }}
            >
              <SpeedIcon sx={{ fontSize: 20 }} />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                One click • Instant access • No barriers
              </Typography>
            </Box>
          </Box>

          {/* PROMPT: Visual cues for quick navigation */}
          <Card
            sx={{
              mt: 8,
              p: 4,
              borderRadius: 3,
              background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.08) 0%, rgba(237, 41, 57, 0.08) 100%)',
              border: '2px solid',
              borderColor: 'primary.main',
              boxShadow: '0 8px 30px rgba(0, 35, 149, 0.15)',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 3 }}>
              <LightbulbIcon sx={{ fontSize: 28, color: 'warning.main' }} />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Quick Navigation
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                mb: 3,
                color: 'text.secondary',
                textAlign: 'center',
                maxWidth: '500px',
                mx: 'auto',
              }}
            >
              {/* MOTIVATION: Show value of these links */}
              These popular pages might have what you're looking for. Click any link to explore instantly.
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ justifyContent: 'center', flexWrap: 'wrap' }}
            >
              {[
                { label: 'About Us', path: '/about', icon: '👥' },
                { label: 'Focus Areas', path: '/focus-areas', icon: '🎯' },
                { label: 'Programs & workshops', path: '/programs-workshops', icon: '📚' },
                { label: 'Programs & workshops', path: '/programs-workshops', icon: '🚀' },
                { label: 'Events', path: '/events', icon: '📅' },
                { label: 'Contact', path: '/contact', icon: '✉️' },
              ].map((link) => (
                <Button
                  key={link.path}
                  component={RouterLink}
                  to={link.path}
                  variant="contained"
                  size="medium"
                  sx={{
                    px: 3,
                    py: 1.5,
                    fontWeight: 600,
                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                    color: 'primary.main',
                    border: '1px solid',
                    borderColor: 'primary.main',
                    borderRadius: 2,
                    textTransform: 'none',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #002395 0%, #0038d6 100%)',
                      color: 'white',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 15px rgba(0, 35, 149, 0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box component="span" sx={{ mr: 1, fontSize: '1.2rem' }}>
                    {link.icon}
                  </Box>
                  {link.label}
                </Button>
              ))}
            </Stack>
          </Card>

          {/* PROMPT: Additional helpful suggestion */}
          <Card
            sx={{
              mt: 4,
              p: 3,
              borderRadius: 2,
              backgroundColor: 'rgba(0, 35, 149, 0.03)',
              border: '1px dashed',
              borderColor: 'divider',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                flexWrap: 'wrap',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <SearchIcon sx={{ fontSize: 24, color: 'primary.main' }} />
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  Need help finding something?
                </Typography>
              </Box>
              <Button
                component={RouterLink}
                to="/contact"
                variant="text"
                size="small"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 35, 149, 0.08)',
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
