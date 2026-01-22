import { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import LinearProgress from '@mui/material/LinearProgress';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Link as RouterLink } from 'react-router-dom';
import HistoryIcon from '@mui/icons-material/History';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PublicIcon from '@mui/icons-material/Public';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import RouteIcon from '@mui/icons-material/Route';
import CompareIcon from '@mui/icons-material/Compare';
import PaletteIcon from '@mui/icons-material/Palette';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import HandshakeIcon from '@mui/icons-material/Handshake';
import VerifiedIcon from '@mui/icons-material/Verified';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AssignmentIcon from '@mui/icons-material/Assignment';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import FilterListIcon from '@mui/icons-material/FilterList';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PatternIcon from '@mui/icons-material/Pattern';
import NavigationIcon from '@mui/icons-material/Navigation';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function About() {
  // State for goal progress (used in User Journey component)
  const [goalProgress] = useState(0);

  return (
    <Box>
      {/* BJ FOGG BEHAVIOR MODEL: MOTIVATION + ABILITY + PROMPTS */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.08) 0%, rgba(237, 41, 57, 0.08) 50%, rgba(0, 35, 149, 0.05) 100%)',
          pt: { xs: 10, sm: 12, md: 14 }, // Отступ сверху, чтобы контент не скрывался под Header
          pb: { xs: 8, sm: 10 },
          mb: { xs: 6, sm: 8 },
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            // subtle Europe map texture
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 35% 40%, rgba(0, 35, 149, 0.05) 0%, transparent 55%), radial-gradient(circle at 65% 40%, rgba(237, 41, 57, 0.04) 0%, transparent 55%)',
            pointerEvents: 'none',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, rgba(237, 41, 57, 1) 0%, rgba(237, 41, 57, 0) 80%)',
          },
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            {/* Left side: Text content */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={3} sx={{ alignItems: { xs: 'center', md: 'flex-start' } }}>
                {/* MOTIVATION: Emotional appeal and benefits */}
                <Box sx={{ width: '100%' }}>
                  <Chip
                    icon={<EmojiEventsIcon />}
                    label="Trusted Since 2015"
                    color="primary"
                    sx={{ mb: 2, fontWeight: 700, fontSize: '0.95rem', py: 2, px: 2, borderRadius: 999 }}
                  />
                  <Typography
                    variant="h2"
                    sx={{
                      mb: 2,
                      textAlign: { xs: 'center', md: 'left' },
                      background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 800,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    About MITRA FRANCE
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: { xs: 'center', md: 'left' },
                      color: 'text.secondary',
                      fontWeight: 400,
                      mb: 3,
                    }}
                  >
                    Empowering Communities Through Education, Culture & Digital Inclusion Since 2015
                  </Typography>
                  
                  {/* MOTIVATION: Show benefits and value */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: { xs: 'center', md: 'flex-start' },
                      alignItems: 'center',
                      gap: 2,
                      flexWrap: 'wrap',
                      mb: 3,
                    }}
                  >
                    {[
                      {
                        label: '10+ Years of Impact',
                        color: 'success',
                        photo: '/photos/572890197_1142845724690099_2859850866106109617_n.jpg',
                        icon: <CheckCircleIcon />,
                      },
                      {
                        label: '1000+ Lives Changed',
                        color: 'primary',
                        photo: '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
                        icon: <PeopleIcon />,
                      },
                      {
                        label: '15+ European Countries',
                        color: 'error',
                        photo: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
                        icon: <PublicIcon />,
                      },
                    ].map((b) => (
                      <Chip
                        key={b.label}
                        icon={
                          <Box
                            sx={{
                              width: 22,
                              height: 22,
                              borderRadius: '50%',
                              overflow: 'hidden',
                              border: '2px solid white',
                              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                              mr: 0.5,
                              flexShrink: 0,
                            }}
                          >
                            <Box
                              component="img"
                              src={b.photo}
                              alt={b.label}
                              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                          </Box>
                        }
                        label={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                            <Box sx={{ color: `${b.color}.main`, display: 'flex', alignItems: 'center' }}>
                              {b.icon}
                            </Box>
                            <Box component="span" sx={{ fontWeight: 800 }}>
                              {b.label}
                            </Box>
                          </Box>
                        }
                        sx={{
                          borderRadius: 999,
                          py: 0.5,
                          px: 0.75,
                          backgroundColor:
                            b.color === 'success'
                              ? 'rgba(76, 175, 80, 0.10)'
                              : b.color === 'primary'
                                ? 'rgba(0, 35, 149, 0.10)'
                                : 'rgba(237, 41, 57, 0.10)',
                          color: `${b.color}.main`,
                          fontWeight: 800,
                          '& .MuiChip-label': { display: 'flex', alignItems: 'center' },
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                {/* ABILITY: Make it easy to navigate and understand */}
                <Box sx={{ width: '100%' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: { xs: 'center', md: 'left' },
                      mb: 3,
                      color: 'text.secondary',
                      fontWeight: 500,
                    }}
                  >
                    Choose what interests you most:
                  </Typography>
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    sx={{ justifyContent: { xs: 'center', md: 'flex-start' }, flexWrap: 'wrap' }}
                  >
                    {[
                      {
                        href: '#mission',
                        label: 'Our Mission',
                        photo: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
                        icon: <FavoriteIcon />,
                        tint: 'rgba(237, 41, 57, 0.12)',
                        hover: 'rgba(237, 41, 57, 0.16)',
                      },
                      {
                        href: '#history',
                        label: 'Our History',
                        photo: '/photos/573284472_1142846254690046_5985051112828208939_n.jpg',
                        icon: <HistoryIcon />,
                        tint: 'rgba(0, 35, 149, 0.10)',
                        hover: 'rgba(0, 35, 149, 0.14)',
                      },
                      {
                        href: '#achievements',
                        label: 'Achievements',
                        photo: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
                        icon: <EmojiEventsIcon />,
                        tint: 'rgba(46, 125, 50, 0.10)',
                        hover: 'rgba(46, 125, 50, 0.14)',
                      },
                    ].map((t) => (
                      <Button
                        key={t.label}
                        component="a"
                        href={t.href}
                        variant="outlined"
                        size="medium"
                        startIcon={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Avatar
                              src={t.photo}
                              alt={t.label}
                              sx={{
                                width: 22,
                                height: 22,
                                border: '2px solid white',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
                                filter: 'saturate(0.2) contrast(0.95)',
                                transition: 'all 0.25s ease',
                              }}
                            />
                            <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                              {t.icon}
                            </Box>
                          </Box>
                        }
                        sx={{
                          borderRadius: '999px',
                          px: 3.5,
                          py: 1.4,
                          borderWidth: 2,
                          fontWeight: 700,
                          textTransform: 'none',
                          backgroundColor: t.tint,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            borderWidth: 2,
                            backgroundColor: t.hover,
                            transform: 'translateY(-2px)',
                            boxShadow: '0 10px 26px rgba(0, 35, 149, 0.18)',
                            '& .MuiAvatar-root': {
                              filter: 'saturate(1.05) contrast(1.0)',
                            },
                            '& .MuiButton-startIcon': {
                              color: 'primary.main',
                            },
                          },
                        }}
                      >
                        {t.label}
                      </Button>
                    ))}
              <Button
                component={RouterLink}
                to="/team"
                variant="contained"
                size="medium"
                startIcon={<GroupsIcon />}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  borderRadius: '25px',
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 1) 0%, rgba(0, 35, 149, 0.8) 100%)',
                  boxShadow: '0 4px 12px rgba(0, 35, 149, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.9) 0%, rgba(0, 35, 149, 0.7) 100%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 16px rgba(0, 35, 149, 0.4)',
                  },
                }}
              >
                Meet Our Team
              </Button>
                  </Stack>
                </Box>

                {/* PROMPT: Clear call-to-action with urgency */}
                <Box
                  sx={{
                    textAlign: { xs: 'center', md: 'left' },
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    border: '2px solid',
                    borderColor: 'primary.main',
                    width: '100%',
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: 'primary.main' }}>
                    Ready to Learn More?
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Discover our impact, explore our programs, or connect with our team
                  </Typography>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    <Button
                      component={RouterLink}
                      to="/projects"
                      variant="contained"
                      color="primary"
                      size="large"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        px: 4,
                        py: 1.5,
                        fontWeight: 700,
                        borderRadius: '25px',
                        boxShadow: '0 4px 14px rgba(0, 35, 149, 0.3)',
                      }}
                    >
                      Explore Projects
                    </Button>
                    <Button
                      component={RouterLink}
                      to="/contact"
                      variant="outlined"
                      color="primary"
                      size="large"
                      sx={{
                        px: 4,
                        py: 1.5,
                        fontWeight: 600,
                        borderRadius: '25px',
                        borderWidth: 2,
                        '&:hover': {
                          borderWidth: 2,
                        },
                      }}
                    >
                      Get in Touch
                    </Button>
                  </Stack>
                </Box>

                {/* ABILITY: Show simplicity indicator */}
                <Typography
                  variant="caption"
                  sx={{
                    textAlign: { xs: 'center', md: 'left' },
                    color: 'text.secondary',
                    mt: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    gap: 0.5,
                  }}
                >
                  <CheckCircleIcon sx={{ fontSize: 16, color: 'success.main' }} />
                  Easy to navigate • All information in one place • No registration needed
                </Typography>
              </Stack>
            </Grid>

            {/* Right side: Hero image */}
            {/* <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: '400px', md: '600px' },
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0, 35, 149, 0.15)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(237, 41, 57, 0.1) 100%)',
                    zIndex: 1,
                    pointerEvents: 'none',
                  },
                }}
              >
                <Box
                  component="img"
                  src="/illustrations/mitra-image-6.png"
                  alt="MITRA FRANCE About Us"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
              </Box>
            </Grid> */}

            {/* Right side: visual collage (replaces line art) */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 560,
                  mx: { xs: 'auto', md: 'auto' },
                  borderRadius: 6,
                  p: { xs: 1.5, sm: 2 },
                  background: 'rgba(255, 255, 255, 0.6)',
                  border: '1px solid',
                  borderColor: 'rgba(0, 35, 149, 0.12)',
                  boxShadow: '0 18px 60px rgba(0, 0, 0, 0.10)',
                  backdropFilter: 'blur(10px)',
                  overflow: 'hidden',
                }}
              >
                {/* main photo */}
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: 5,
                    overflow: 'hidden',
                    height: { xs: 260, sm: 320, md: 360 },
                    boxShadow: '0 14px 40px rgba(0,0,0,0.12)',
                  }}
                >
                  <Box
                    component="img"
                    src="/illustrations/mitra-image-3.png"
                    alt="MITRA FRANCE community"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.96) saturate(1.05)',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(135deg, rgba(0, 35, 149, 0.20) 0%, rgba(237, 41, 57, 0.14) 60%, rgba(255,255,255,0) 100%)',
                      pointerEvents: 'none',
                    }}
                  />
                </Box>

                {/* floating micro-cards */}
                {[
                  {
                    top: { xs: 18, sm: 26 },
                    right: { xs: 16, sm: 18 },
                    w: { xs: 140, sm: 170 },
                    h: { xs: 96, sm: 112 },
                    src: '/photos/572890197_1142845724690099_2859850866106109617_n.jpg',
                    label: 'Digital Skills',
                    tint: 'rgba(0, 35, 149, 0.85)',
                  },
                  {
                    bottom: { xs: 18, sm: 26 },
                    left: { xs: 16, sm: 18 },
                    w: { xs: 150, sm: 190 },
                    h: { xs: 100, sm: 120 },
                    src: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
                    label: 'Workshops',
                    tint: 'rgba(237, 41, 57, 0.85)',
                  },
                  {
                    bottom: { xs: 20, sm: 30 },
                    right: { xs: 18, sm: 20 },
                    w: { xs: 130, sm: 160 },
                    h: { xs: 92, sm: 106 },
                    src: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
                    label: 'Certificates',
                    tint: 'rgba(46, 125, 50, 0.85)',
                  },
                ].map((c) => (
                  <Box
                    key={c.label}
                    sx={{
                      position: 'absolute',
                      ...c,
                      width: c.w,
                      height: c.h,
                      borderRadius: 4,
                      overflow: 'hidden',
                      border: '3px solid rgba(255,255,255,0.9)',
                      boxShadow: '0 12px 34px rgba(0,0,0,0.14)',
                      transform: 'rotate(-1.5deg)',
                    }}
                  >
                    <Box
                      component="img"
                      src={c.src}
                      alt={c.label}
                      sx={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.95) saturate(1.05)' }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 100%)',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        left: 10,
                        bottom: 10,
                        px: 1.2,
                        py: 0.6,
                        borderRadius: 999,
                        backgroundColor: c.tint,
                        color: 'white',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        letterSpacing: '0.01em',
                      }}
                    >
                      {c.label}
                    </Box>
                  </Box>
                ))}

                {/* small social proof */}
                <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
                  <AvatarGroup
                    max={5}
                    sx={{
                      '& .MuiAvatar-root': {
                        width: 34,
                        height: 34,
                        border: '2px solid white',
                        boxShadow: '0 3px 12px rgba(0,0,0,0.12)',
                      },
                    }}
                  >
                    <Avatar src="/photos/571419367_1143811194593552_6930038688628840775_n.jpg" alt="Participant" />
                    <Avatar src="/photos/572851437_1143811217926883_7725194936764095335_n.jpg" alt="Participant" />
                    <Avatar src="/photos/583489432_1157911303183541_1292926580526900497_n.jpg" alt="Participant" />
                    <Avatar src="/photos/583741041_1157902773184394_5619801435922057517_n.jpg" alt="Participant" />
                  </AvatarGroup>
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', fontWeight: 700 }}>
                      Community-led programs
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 800, color: 'primary.main' }}>
                      Join people across Europe
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container>
        {/* BJ FOGG MODEL: MOTIVATION + ABILITY + PROMPTS - Our Story */}
        <Box
          sx={{
            mb: 8,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -50,
              right: -100,
              width: 400,
              height: 400,
              background: 'radial-gradient(circle, rgba(0, 35, 149, 0.03) 0%, transparent 70%)',
              borderRadius: '50%',
              zIndex: 0,
              pointerEvents: 'none',
            },
          }}
        >
          <Grid container spacing={4} alignItems="center" sx={{ position: 'relative', zIndex: 1 }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Chip
                icon={<LocationOnIcon />}
                label="Based in Nice, France"
                color="primary"
                sx={{ mb: 2, fontWeight: 600 }}
              />
              <Typography variant="h3" gutterBottom sx={{ mb: 3, fontWeight: 700 }}>
                Our Story
              </Typography>
              
              {/* MOTIVATION: Show emotional connection and benefits */}
              <Box
                sx={{
                  mb: 3,
                  p: 3,
                  borderRadius: 3,
                  position: 'relative',
                  overflow: 'hidden',
                  borderLeft: '4px solid',
                  borderColor: 'primary.main',
                  backgroundColor: 'rgba(0, 35, 149, 0.08)',
                  minHeight: 140,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'url(/photos/572890197_1142845724690099_2859850866106109617_n.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.15,
                    filter: 'blur(6px)',
                    zIndex: 0,
                  },
                }}
              >
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                    <AvatarGroup
                      max={3}
                      sx={{
                        '& .MuiAvatar-root': {
                          width: 32,
                          height: 32,
                          border: '2px solid white',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                        },
                      }}
                    >
                      <Avatar src="/photos/571419367_1143811194593552_6930038688628840775_n.jpg" alt="Participant" />
                      <Avatar src="/photos/572851437_1143811217926883_7725194936764095335_n.jpg" alt="Participant" />
                      <Avatar src="/photos/583489432_1157911303183541_1292926580526900497_n.jpg" alt="Participant" />
                    </AvatarGroup>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'primary.main' }}>
                      ✨ Why We Matter
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    We've been transforming lives since 2015, creating opportunities for thousands of people 
                    across Europe through education, culture, and digital inclusion. Our human-centered approach 
                    ensures direct mentor-student connection in every program.
                  </Typography>
                </Box>
              </Box>
              
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 2 }}>
                MITRA FRANCE is a non-profit organization dedicated to fostering intercultural
                understanding, promoting digital literacy, and supporting community engagement
                through education, media, and arts. Since our establishment in 2015, we have been
                committed to creating inclusive learning environments that empower individuals from
                diverse backgrounds.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                Our work spans across various European Union programs, particularly Erasmus+,
                where we collaborate with partners across Europe to develop innovative educational
                projects and promote cultural exchange.
              </Typography>
              
              {/* ABILITY: Make it easy to take next step */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 3 }}>
                <Button
                  component={RouterLink}
                  to="/projects"
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: '25px',
                    boxShadow: '0 4px 12px rgba(0, 35, 149, 0.3)',
                  }}
                >
                  Explore Our Projects
                </Button>
                <Button
                  component={RouterLink}
                  to="/focus-areas"
                  variant="outlined"
                  color="primary"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: '25px',
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                    },
                  }}
                >
                  Our Focus Areas
                </Button>
              </Stack>
              
              {/* PROMPT: Show what they'll get - Visual achievement cards */}
              <Box sx={{ mt: 4 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, color: 'success.main', mb: 2, display: 'block' }}>
                  What you'll discover:
                </Typography>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 4 }}>
                    <Card
                      sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: 3,
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                          '& .achievement-photo': {
                            transform: 'scale(1.1)',
                          },
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          height: 120,
                          overflow: 'hidden',
                        }}
                      >
                        <Box
                          component="img"
                          className="achievement-photo"
                          src="/photos/572890197_1142845724690099_2859850866106109617_n.jpg"
                          alt="Educational program"
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.4s ease',
                            filter: 'brightness(0.9) saturate(1.1)',
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            backgroundColor: 'rgba(0, 35, 149, 0.9)',
                            color: 'white',
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 2,
                            fontSize: '0.75rem',
                            fontWeight: 700,
                          }}
                        >
                          Programs
                        </Box>
                      </Box>
                      <CardContent sx={{ p: 2, textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main', mb: 0.5 }}>
                          50+
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                          Programs
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 4 }}>
                    <Card
                      sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: 3,
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                          '& .achievement-photo': {
                            transform: 'scale(1.1)',
                          },
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          height: 120,
                          overflow: 'hidden',
                          display: 'grid',
                          gridTemplateColumns: 'repeat(3, 1fr)',
                          gridTemplateRows: 'repeat(2, 1fr)',
                          gap: 0,
                        }}
                      >
                        {[
                          { photo: '/photos/573284472_1142846254690046_5985051112828208939_n.jpg', label: 'Nice' },
                          { photo: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg', label: 'Berlin' },
                          { photo: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg', label: 'Rome' },
                          { photo: '/photos/572890197_1142845724690099_2859850866106109617_n.jpg', label: 'Madrid' },
                          { photo: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg', label: 'Warsaw' },
                          { photo: '/photos/583489432_1157911303183541_1292926580526900497_n.jpg', label: 'Athens' },
                        ].map((city, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              position: 'relative',
                              overflow: 'hidden',
                              '&::after': {
                                content: '""',
                                position: 'absolute',
                                inset: 0,
                                background: `linear-gradient(135deg, rgba(0, 35, 149, ${0.2 + idx * 0.05}) 0%, rgba(237, 41, 57, ${0.1 + idx * 0.02}) 100%)`,
                              },
                            }}
                          >
                            <Box
                              component="img"
                              src={city.photo}
                              alt={`${city.label} - European partner city`}
                              sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.8) saturate(1.1)',
                              }}
                            />
                          </Box>
                        ))}
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            backgroundColor: 'rgba(237, 41, 57, 0.9)',
                            color: 'white',
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 2,
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            zIndex: 1,
                          }}
                        >
                          Countries
                        </Box>
                      </Box>
                      <CardContent sx={{ p: 2, textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ fontWeight: 800, color: 'error.main', mb: 0.5 }}>
                          15+
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                          Countries
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 4 }}>
                    <Card
                      sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: 3,
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                          '& .achievement-photo': {
                            transform: 'scale(1.1)',
                          },
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          height: 120,
                          overflow: 'hidden',
                        }}
                      >
                        <Box
                          component="img"
                          className="achievement-photo"
                          src="/photos/583924019_1157903166517688_8756873269993443102_n.jpg"
                          alt="Happy participants"
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.4s ease',
                            filter: 'brightness(0.9) saturate(1.1)',
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            backgroundColor: 'rgba(46, 125, 50, 0.9)',
                            color: 'white',
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 2,
                            fontSize: '0.75rem',
                            fontWeight: 700,
                          }}
                        >
                          Participants
                        </Box>
                      </Box>
                      <CardContent sx={{ p: 2, textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ fontWeight: 800, color: 'success.main', mb: 0.5 }}>
                          1000+
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                          Participants
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              {/* Interactive Photo Timeline */}
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: 400, md: 500 },
                    overflow: 'hidden',
                  }}
                >
                  {[
                    {
                      year: '2015',
                      title: 'The Beginning',
                      description: 'Founded in Nice, France',
                      photo: '/photos/573284472_1142846254690046_5985051112828208939_n.jpg',
                      stats: { label: 'Founded', value: '2015' },
                    },
                    {
                      year: '2016-2018',
                      title: 'Growth',
                      description: 'First Erasmus+ Projects',
                      photo: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
                      stats: { label: 'Projects', value: '20+' },
                    },
                    {
                      year: 'Today',
                      title: 'Impact',
                      description: '1000+ Lives Changed',
                      photo: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
                      stats: { label: 'Lives Changed', value: '1000+' },
                    },
                  ].map((stage, idx) => (
                    <Box
                      key={idx}
                      className={`timeline-stage-${idx}`}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        opacity: idx === 0 ? 1 : 0,
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          opacity: 1,
                          zIndex: 5,
                          '& .timeline-stage-photo': {
                            filter: 'brightness(1) saturate(1.2)',
                            transform: 'scale(1.05)',
                          },
                        },
                      }}
                    >
                      <Box
                        component="img"
                        className="timeline-stage-photo"
                        src={stage.photo}
                        alt={`${stage.title} - ${stage.description}`}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'brightness(0.85) saturate(1.1)',
                          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.85) 0%, rgba(0, 56, 214, 0.75) 100%)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: 'white',
                          p: 4,
                          textAlign: 'center',
                        }}
                      >
                        <Typography
                          variant="h2"
                          sx={{
                            fontWeight: 800,
                            mb: 1,
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                          }}
                        >
                          {stage.year}
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, opacity: 0.95 }}>
                          {stage.title}
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3, opacity: 0.9, maxWidth: '300px' }}>
                          {stage.description}
                        </Typography>
                        <Box
                          sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: 3,
                            p: 2,
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                          }}
                        >
                          <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5 }}>
                            {stage.stats.value}
                          </Typography>
                          <Typography variant="body2" sx={{ opacity: 0.9 }}>
                            {stage.stats.label}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
                {/* Timeline indicators */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 16,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: 1.5,
                    zIndex: 10,
                  }}
                >
                  {[0, 1, 2].map((idx) => (
                    <Box
                      key={idx}
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        backgroundColor: idx === 0 ? 'white' : 'rgba(255, 255, 255, 0.5)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'white',
                          transform: 'scale(1.2)',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

      <Divider sx={{ my: 8 }} />

      {/* BJ FOGG MODEL: ABILITY - Make it easy to understand Mission & Values */}
      <Box id="mission" sx={{ mb: 12, scrollMarginTop: '100px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 6 }}>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              backgroundColor: 'rgba(0, 35, 149, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2,
            }}
          >
            <FavoriteIcon sx={{ fontSize: 32, color: 'primary.main' }} />
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 800 }}>Our Core Values & Mission</Typography>
        </Box>
        
        {/* Z-PATTERN: Block 1 - Digital Inclusion (Photo Left, Text Right) */}
        <Box sx={{ mb: 10 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 6,
                  overflow: 'hidden',
                  height: { xs: 300, sm: 400, md: 450 },
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                  '&:hover': {
                    '& .mission-photo': {
                      transform: 'scale(1.05)',
                    },
                  },
                }}
              >
                <Box
                  component="img"
                  className="mission-photo"
                  src="/photos/572890197_1142845724690099_2859850866106109617_n.jpg"
                  alt="Digital Inclusion - Volunteer helping senior with tablet"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    filter: 'brightness(0.95) saturate(1.1)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%)',
                    p: 3,
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      borderRadius: 3,
                      p: 2,
                      maxWidth: '90%',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.primary', lineHeight: 1.6 }}>
                      "Now i'm in touch with my grandchildren"
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
                      — Program participant : Digital Literacy, 2023
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1.5, display: 'block', fontStyle: 'italic' }}>
                Digital Skills Workshop, Nice, France • 2023
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ pl: { xs: 0, md: 3 } }}>
                <Chip
                  label="Digital Inclusion"
                  color="primary"
                  sx={{ mb: 2, fontWeight: 700, fontSize: '0.9rem' }}
                />
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 800, color: 'text.primary' }}>
                  Empowering Through Technology
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.9, mb: 2 }}>
                  We believe that digital literacy is a fundamental right. Our programs help seniors, migrants, and 
                  underserved communities gain essential digital skills, from basic computer use to online communication 
                  and digital citizenship.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.9, color: 'text.secondary' }}>
                  Through patient, one-on-one support and group workshops, we create safe learning environments where 
                  everyone can thrive at their own pace.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Z-PATTERN: Block 2 - Intercultural Dialogue (Text Left, Photo Right) */}
        <Box sx={{ mb: 10 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ pr: { xs: 0, md: 3 } }}>
                <Chip
                  label="Intercultural Dialogue"
                  color="error"
                  sx={{ mb: 2, fontWeight: 700, fontSize: '0.9rem' }}
                />
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 800, color: 'text.primary' }}>
                  Building Bridges Across Cultures
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.9, mb: 2 }}>
                  Our cultural exchange programs bring together people from diverse backgrounds to share experiences, 
                  traditions, and perspectives. Through workshops, festivals, and collaborative projects, we foster 
                  understanding and celebrate the richness of our multicultural communities.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.9, color: 'text.secondary' }}>
                  From cooking classes to art exhibitions, every activity is designed to create meaningful connections 
                  and break down barriers between cultures.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 6,
                  overflow: 'hidden',
                  height: { xs: 300, sm: 400, md: 450 },
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                  '&:hover': {
                    '& .mission-photo': {
                      transform: 'scale(1.05)',
                    },
                    '& .europe-map': {
                      opacity: 0.3,
                    },
                  },
                }}
              >
                <Box
                  component="img"
                  className="mission-photo"
                  src="/photos/583924019_1157903166517688_8756873269993443102_n.jpg"
                  alt="Intercultural Dialogue - Diverse group working together"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    filter: 'brightness(0.95) saturate(1.1)',
                  }}
                />
                {/* Decorative Europe map overlay */}
                <Box
                  className="europe-map"
                  sx={{
                    position: 'absolute',
                    top: -20,
                    right: -30,
                    width: 300,
                    height: 300,
                    background: 'radial-gradient(circle, rgba(0, 35, 149, 0.15) 0%, transparent 70%)',
                    borderRadius: '50%',
                    opacity: 0.2,
                    transition: 'opacity 0.4s ease',
                    pointerEvents: 'none',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    display: 'flex',
                    gap: 1,
                    flexWrap: 'wrap',
                  }}
                >
                  {['🇫🇷', '🇩🇪', '🇮🇹', '🇪🇸', '🇵🇱'].map((flag, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                      }}
                    >
                      {flag}
                    </Box>
                  ))}
                </Box>
              </Box>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1.5, display: 'block', fontStyle: 'italic' }}>
                Cultural Exchange Workshop, Nice, France • 2024
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Z-PATTERN: Block 3 - European Connectivity (Photo Left, Text Right) */}
        <Box sx={{ mb: 10 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 6,
                  overflow: 'hidden',
                  height: { xs: 300, sm: 400, md: 450 },
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                  '&:hover': {
                    '& .mission-photo': {
                      transform: 'scale(1.05)',
                    },
                  },
                }}
              >
                <Box
                  component="img"
                  className="mission-photo"
                  src="/photos/584326681_1157904053184266_2071216266526493174_n.jpg"
                  alt="European Connectivity - Erasmus+ project meeting"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    filter: 'brightness(0.95) saturate(1.1)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 20,
                    left: 20,
                    backgroundColor: 'rgba(0, 35, 149, 0.9)',
                    color: 'white',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    fontWeight: 700,
                    fontSize: '0.9rem',
                  }}
                >
                  Erasmus+ Project
                </Box>
              </Box>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1.5, display: 'block', fontStyle: 'italic' }}>
                International Forum, Berlin, Germany • 2023
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ pl: { xs: 0, md: 3 } }}>
                <Chip
                  label="European Connectivity"
                  color="info"
                  sx={{ mb: 2, fontWeight: 700, fontSize: '0.9rem' }}
                />
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 800, color: 'text.primary' }}>
                  Connecting Communities Across Europe
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.9, mb: 2 }}>
                  Through Erasmus+ and other European programs, we collaborate with partners across 15+ countries 
                  to develop innovative educational projects. Our international network enables knowledge sharing, 
                  best practices exchange, and joint initiatives that amplify our impact.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.9, color: 'text.secondary' }}>
                  From youth exchanges to adult education partnerships, we're building a stronger, more connected Europe 
                  through education and cultural understanding.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Impact in Images - Horizontal infographic strip */}
        <Box
          sx={{
            mb: 10,
            py: 6,
            px: 4,
            borderRadius: 4,
            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(237, 41, 57, 0.05) 100%)',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
                  <Box
                    sx={{
                      width: 120,
                      height: 80,
                      borderRadius: 3,
                      overflow: 'hidden',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                      filter: 'grayscale(0.3) sepia(0.2)',
                      position: 'relative',
                    }}
                  >
                    <Box
                      component="img"
                      src="/photos/573284472_1142846254690046_5985051112828208939_n.jpg"
                      alt="First project 2015"
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: 120,
                      height: 80,
                      borderRadius: 3,
                      overflow: 'hidden',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                    }}
                  >
                    <Box
                      component="img"
                      src="/photos/583924019_1157903166517688_8756873269993443102_n.jpg"
                      alt="Current project 2024"
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>
                </Box>
                <Typography variant="h3" sx={{ fontWeight: 800, color: 'primary.main', mb: 0.5 }}>
                  10+
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                  Years of Impact
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: 1.5,
                    mb: 2,
                    maxWidth: 300,
                    mx: 'auto',
                  }}
                >
                  {[
                    '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
                    '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
                    '/photos/583489432_1157911303183541_1292926580526900497_n.jpg',
                    '/photos/583741041_1157902773184394_5619801435922057517_n.jpg',
                  ].map((src, idx) => (
                    <Avatar
                      key={idx}
                      src={src}
                      alt="Partner"
                      sx={{
                        width: 56,
                        height: 56,
                        border: '3px solid white',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                      }}
                    />
                  ))}
                </Box>
                <Typography variant="h3" sx={{ fontWeight: 800, color: 'error.main', mb: 0.5 }}>
                  100+
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                  Partners
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 1.5,
                    mb: 2,
                    flexWrap: 'wrap',
                  }}
                >
                  {['🇫🇷', '🇩🇪', '🇮🇹', '🇪🇸', '🇵🇱', '🇬🇷', '🇵🇹', '🇷🇴'].map((flag, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(0, 35, 149, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.8rem',
                        border: '2px solid',
                        borderColor: 'primary.main',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.15) rotate(5deg)',
                          backgroundColor: 'rgba(0, 35, 149, 0.15)',
                        },
                      }}
                    >
                      {flag}
                    </Box>
                  ))}
                </Box>
                <Typography variant="h3" sx={{ fontWeight: 800, color: 'success.main', mb: 0.5 }}>
                  15+
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                  European Countries
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Meet the Faces Behind the Mission */}
        <Box sx={{ mb: 10 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              label="Meet the Team"
              color="primary"
              sx={{ mb: 2, fontWeight: 700, fontSize: '0.9rem' }}
            />
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 800 }}>
              Meet the Faces Behind the Mission
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              For an NGO, the faces of our team are 90% of trust. Meet the passionate people making our mission possible.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                name: 'Project Coordinator',
                role: 'Erasmus+ Programs',
                photo: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
                bio: 'My personal Why: I believe education has the power to transform lives. Every workshop we organize creates new opportunities for people who thought they were left behind.',
                action: 'Speaking at International Forum',
                location: 'Berlin, Germany • 2023',
              },
              {
                name: 'Founder & Director',
                role: 'Digital Inclusion',
                photo: '/photos/572890197_1142845724690099_2859850866106109617_n.jpg',
                bio: 'My personal Why: I started MITRA because I saw how technology could bridge gaps between generations and cultures. Seeing seniors connect with their grandchildren online is my greatest reward.',
                action: 'Field Work with Community',
                location: 'Nice, France • 2024',
              },
              {
                name: 'Cultural Programs Lead',
                role: 'Intercultural Dialogue',
                photo: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
                bio: 'My personal Why: Growing up in a multicultural environment, I learned that understanding different cultures enriches everyone. Our programs create spaces where diversity is celebrated.',
                action: 'Leading Workshop',
                location: 'Nice, France • 2023',
              },
            ].map((member, idx) => (
              <Grid size={{ xs: 12, md: 4 }} key={idx}>
                <Card
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 4,
                    height: '100%',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 16px 48px rgba(0, 0, 0, 0.2)',
                      '& .team-photo': {
                        transform: 'scale(1.1)',
                      },
                      '& .team-bio': {
                        opacity: 1,
                        transform: 'translateY(0)',
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      height: { xs: 280, sm: 320 },
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      component="img"
                      className="team-photo"
                      src={member.photo}
                      alt={`${member.name} - ${member.action}`}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        filter: 'brightness(0.95) saturate(1.1)',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        backgroundColor: 'rgba(0, 35, 149, 0.9)',
                        color: 'white',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 2,
                        fontSize: '0.75rem',
                        fontWeight: 700,
                      }}
                    >
                      Action Shot
                    </Box>
                    <Box
                      className="team-bio"
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.95) 100%)',
                        p: 3,
                        opacity: 0,
                        transform: 'translateY(20px)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      <Typography variant="body2" sx={{ color: 'white', lineHeight: 1.7, fontStyle: 'italic' }}>
                        "{member.bio}"
                      </Typography>
                    </Box>
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5 }}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="primary" sx={{ fontWeight: 600, mb: 1.5 }}>
                      {member.role}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mb: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          backgroundColor: 'success.main',
                          animation: 'pulse 2s infinite',
                          '@keyframes pulse': {
                            '0%, 100%': { opacity: 1, transform: 'scale(1)' },
                            '50%': { opacity: 0.5, transform: 'scale(1.2)' },
                          },
                        }}
                      />
                      <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                        {member.action}
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem', fontStyle: 'italic' }}>
                      {member.location}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* PROMPT: Call to action after mission */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 700,
              borderRadius: 3,
              background: 'linear-gradient(135deg, #002395 0%, #1e88e5 100%)',
              boxShadow: '0 8px 24px rgba(0, 35, 149, 0.3)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 32px rgba(0, 35, 149, 0.4)',
              },
            }}
          >
            Join Our Mission
          </Button>
        </Box>
      </Box>

      <Divider sx={{ my: 8 }} />

      {/* ABILITY: Visual timeline for history */}
      <Box id="history" sx={{ mb: 8, scrollMarginTop: '100px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              backgroundColor: 'rgba(0, 35, 149, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2,
            }}
          >
            <HistoryIcon sx={{ fontSize: 32, color: 'primary.main' }} />
          </Box>
          <Typography variant="h3">Organization History</Typography>
        </Box>

        <Box sx={{ position: 'relative', pl: { xs: 0, md: 4 } }}>
          {/* Timeline line (hidden on mobile) */}
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              left: 28,
              top: 0,
              bottom: 0,
              width: '3px',
              background: 'linear-gradient(to bottom, #002395, #ED2939)',
              borderRadius: '2px',
            }}
          />

          <Stack spacing={6}>
            {[
              {
                year: '2015',
                title: 'Foundation',
                description: 'MITRA FRANCE was established in Nice, France, with a vision to promote intercultural education and digital inclusion.',
                icon: <PublicIcon />,
                color: '#002395',
                photo: '/photos/573284472_1142846254690046_5985051112828208939_n.jpg',
                photoAlt: 'First office in Nice, France - Team founders',
                location: 'Nice, France',
              },
              {
                year: '2016-2018',
                title: 'First Erasmus+ Projects',
                description: 'Began participating in European Union Erasmus+ programs, focusing on adult education and digital literacy.',
                icon: <SchoolIcon />,
                color: '#0038d6',
                photo: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
                photoAlt: 'Erasmus+ project - Participants working together',
                location: 'European Union',
              },
              {
                year: '2018-Present',
                title: 'Expansion & Growth',
                description: 'Expanded programs to include media literacy, cultural activities, and specialized programs for seniors and youth across Europe.',
                icon: <TrendingUpIcon />,
                color: '#ED2939',
                photo: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
                photoAlt: 'Large group event - 1000+ Lives Changed',
                location: 'Across Europe',
              },
            ].map((milestone, index) => (
              <Box
                key={milestone.year}
                sx={{
                  position: 'relative',
                  pl: { xs: 0, md: 8 },
                }}
              >
                {/* Timeline dot */}
                <Box
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    position: 'absolute',
                    left: 20,
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    backgroundColor: milestone.color,
                    border: '3px solid white',
                    boxShadow: '0 0 0 3px rgba(0, 35, 149, 0.1)',
                    zIndex: 1,
                  }}
                />
                
                <Card
                  sx={{
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    borderTop: `4px solid ${milestone.color}`,
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.18)',
                      '& .timeline-photo': {
                        transform: 'scale(1.08)',
                      },
                    },
                  }}
                >
                  <Grid container>
                    {/* Photo Section */}
                    <Grid size={{ xs: 12, md: 5 }}>
                      <Box
                        sx={{
                          position: 'relative',
                          height: { xs: 240, sm: 280, md: '100%' },
                          minHeight: { md: 280 },
                          overflow: 'hidden',
                        }}
                      >
                        <Box
                          component="img"
                          className="timeline-photo"
                          src={milestone.photo}
                          alt={milestone.photoAlt}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                            filter: 'brightness(0.92) saturate(1.1)',
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            inset: 0,
                            background: `linear-gradient(135deg, ${milestone.color}40 0%, transparent 60%)`,
                            pointerEvents: 'none',
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 16,
                            left: 16,
                            backgroundColor: `${milestone.color}E6`,
                            color: 'white',
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            backdropFilter: 'blur(8px)',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                          }}
                        >
                          {milestone.location}
                        </Box>
                      </Box>
                    </Grid>
                    
                    {/* Content Section */}
                    <Grid size={{ xs: 12, md: 7 }}>
                      <CardContent sx={{ p: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, flexWrap: 'wrap', gap: 1.5 }}>
                          <Chip
                            label={milestone.year}
                            sx={{
                              backgroundColor: milestone.color,
                              color: 'white',
                              fontWeight: 700,
                              fontSize: '0.9rem',
                            }}
                          />
                          <Box sx={{ color: milestone.color, display: 'flex', alignItems: 'center' }}>
                            {milestone.icon}
                          </Box>
                        </Box>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 800, mb: 2, color: 'text.primary' }}>
                          {milestone.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.9, fontSize: '1.05rem' }}>
                          {milestone.description}
                        </Typography>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>

      <Divider sx={{ my: 8 }} />

      {/* MOTIVATION: Achievements with visual impact */}
      <Box id="achievements" sx={{ mb: 10, scrollMarginTop: '100px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 6 }}>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              backgroundColor: 'rgba(237, 41, 57, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2,
            }}
          >
            <EmojiEventsIcon sx={{ fontSize: 32, color: 'error.main' }} />
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 800 }}>Achievements & Impact</Typography>
        </Box>

        {/* Full-screen visual achievement cards */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {[
            {
              number: 20,
              suffix: '+',
              title: 'Erasmus+ Projects',
              description: 'Successfully implemented numerous KA1 and KA2 projects focusing on adult education, digital literacy, and cultural heritage.',
              color: '#002395',
              photo: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
              photoAlt: 'Erasmus+ project - Youth group with EU flags',
              linkText: 'View Case Study',
              linkHref: '/projects',
            },
            {
              number: 1000,
              suffix: '+',
              title: 'Community Impact',
              description: 'Reached thousands of participants including seniors, youth, migrants, and refugees through our workshops and training programs.',
              color: '#ED2939',
              photo: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
              photoAlt: 'Community workshop - Active participants interaction',
              linkText: 'See Gallery',
              linkHref: '/projects',
              avatars: [
                '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
                '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
                '/photos/583489432_1157911303183541_1292926580526900497_n.jpg',
                '/photos/583741041_1157902773184394_5619801435922057517_n.jpg',
              ],
            },
            {
              number: 15,
              suffix: '+',
              title: 'Partnership Network',
              description: 'Established strong partnerships with local institutions, European organizations, and educational institutions across France and Europe.',
              color: '#0038d6',
              photo: '/photos/572890197_1142845724690099_2859850866106109617_n.jpg',
              photoAlt: 'Partnership meeting - European network',
              linkText: 'View Partners',
              linkHref: '/partners',
            },
          ].map((achievement, idx) => {
            const [count, setCount] = useState(0);
            const [isVisible, setIsVisible] = useState(false);
            const cardRef = useRef(null);

            useEffect(() => {
              const observer = new IntersectionObserver(
                ([entry]) => {
                  if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    const duration = 2000;
                    const steps = 60;
                    const increment = achievement.number / steps;
                    let current = 0;
                    const timer = setInterval(() => {
                      current += increment;
                      if (current >= achievement.number) {
                        setCount(achievement.number);
                        clearInterval(timer);
                      } else {
                        setCount(Math.floor(current));
                      }
                    }, duration / steps);
                  }
                },
                { threshold: 0.3 }
              );

              if (cardRef.current) {
                observer.observe(cardRef.current);
              }

              return () => {
                if (cardRef.current) {
                  observer.unobserve(cardRef.current);
                }
              };
            }, [isVisible, achievement.number]);

            return (
              <Grid size={{ xs: 12, md: 4 }} key={idx}>
                <Card
                  ref={cardRef}
                  sx={{
                    position: 'relative',
                    height: { xs: 400, md: 500 },
                    overflow: 'hidden',
                    borderRadius: 4,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 16px 48px ${achievement.color}40`,
                      '& .achievement-photo': {
                        transform: 'scale(1.1)',
                        filter: 'brightness(1.05) saturate(1.15)',
                      },
                      '& .glassmorphism': {
                        backdropFilter: 'blur(20px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.25)',
                      },
                    },
                  }}
                >
                  <Box
                    component="img"
                    className="achievement-photo"
                    src={achievement.photo}
                    alt={achievement.photoAlt}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      filter: 'brightness(0.7) saturate(1.1)',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(135deg, ${achievement.color}CC 0%, ${achievement.color}99 50%, ${achievement.color}AA 100%)`,
                    }}
                  />
                  
                  {/* Glassmorphism number */}
                  <Box
                    className="glassmorphism"
                    sx={{
                      position: 'absolute',
                      top: 24,
                      left: 24,
                      right: 24,
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(12px)',
                      borderRadius: 4,
                      p: 3,
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    <Typography
                      variant="h1"
                      sx={{
                        fontWeight: 900,
                        color: 'white',
                        textShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                        fontSize: { xs: '3rem', md: '4.5rem' },
                        lineHeight: 1,
                      }}
                    >
                      {count}{achievement.suffix}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'white',
                        fontWeight: 700,
                        mt: 1,
                        textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      {achievement.title}
                    </Typography>
                  </Box>

                  {/* Avatars for Community Impact */}
                  {achievement.avatars && (
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 24,
                        right: 24,
                        display: 'flex',
                        gap: -1,
                      }}
                    >
                      <AvatarGroup
                        max={4}
                        sx={{
                          '& .MuiAvatar-root': {
                            width: 48,
                            height: 48,
                            border: '3px solid white',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                          },
                        }}
                      >
                        {achievement.avatars.map((avatar, i) => (
                          <Avatar key={i} src={avatar} alt="Participant" />
                        ))}
                      </AvatarGroup>
                    </Box>
                  )}

                  {/* Europe map overlay for Partnerships */}
                  {achievement.color === '#0038d6' && (
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 24,
                        right: 24,
                        width: 120,
                        height: 80,
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 0.5,
                        flexWrap: 'wrap',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                      }}
                    >
                      {['🇫🇷', '🇩🇪', '🇮🇹', '🇪🇸'].map((flag, i) => (
                        <Box key={i} sx={{ fontSize: '1.2rem' }}>
                          {flag}
                        </Box>
                      ))}
                    </Box>
                  )}

                  {/* Content overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.85) 100%)',
                      p: 4,
                      color: 'white',
                    }}
                  >
                    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, opacity: 0.95 }}>
                      {achievement.description}
                    </Typography>
                    <Button
                      component={RouterLink}
                      to={achievement.linkHref}
                      variant="contained"
                      size="small"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                        color: 'white',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.3)',
                          transform: 'translateX(4px)',
                        },
                      }}
                    >
                      {achievement.linkText}
                    </Button>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Visual Evidence - Masonry Grid */}
        <Box sx={{ mb: 6 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Chip
              label="Visual Evidence"
              color="primary"
              sx={{ mb: 2, fontWeight: 700, fontSize: '0.9rem' }}
            />
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
              Stories Behind the Numbers
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
              Real moments from our programs that show the impact we're making together
            </Typography>
          </Box>

          <Grid container spacing={2}>
            {[
              {
                photo: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
                alt: 'Certificate ceremony - Participant receiving certificate',
                title: 'Certificate Ceremony',
                height: { xs: 250, sm: 300, md: 350 },
              },
              {
                photo: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
                alt: 'Volunteer group selfie',
                title: 'Volunteer Team',
                height: { xs: 200, sm: 250, md: 280 },
              },
              {
                photo: '/photos/572890197_1142845724690099_2859850866106109617_n.jpg',
                alt: 'Digital literacy training - Learning digital skills',
                title: 'Digital Skills Training',
                height: { xs: 250, sm: 300, md: 350 },
              },
              {
                photo: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
                alt: 'Cultural festival - Intercultural education event',
                title: 'Cultural Festival',
                height: { xs: 200, sm: 250, md: 280 },
              },
              {
                photo: '/photos/573284472_1142846254690046_5985051112828208939_n.jpg',
                alt: 'Workshop session - Active learning',
                title: 'Workshop Session',
                height: { xs: 250, sm: 300, md: 350 },
              },
              {
                photo: '/photos/583489432_1157911303183541_1292926580526900497_n.jpg',
                alt: 'Community gathering - Participants together',
                title: 'Community Gathering',
                height: { xs: 200, sm: 250, md: 280 },
              },
            ].map((item, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                <Card
                  sx={{
                    position: 'relative',
                    height: item.height,
                    overflow: 'hidden',
                    borderRadius: 3,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.2)',
                      '& .evidence-photo': {
                        transform: 'scale(1.1)',
                      },
                      '& .evidence-overlay': {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  <Box
                    component="img"
                    className="evidence-photo"
                    src={item.photo}
                    alt={item.alt}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      filter: 'brightness(0.9) saturate(1.1)',
                    }}
                  />
                  <Box
                    className="evidence-overlay"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.8) 100%)',
                      display: 'flex',
                      alignItems: 'flex-end',
                      p: 3,
                      opacity: 0.7,
                      transition: 'opacity 0.4s ease',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'white',
                        fontWeight: 700,
                        textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Divider sx={{ my: 8 }} />

      {/* MOTIVATION: Network section with visual storytelling */}
      <Box sx={{ mb: 8 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, flexWrap: 'wrap' }}>
          {/* Youth4Media Logo placeholder - можно заменить на реальный логотип */}
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: '12px',
              backgroundColor: 'rgba(0, 35, 149, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2,
              mb: { xs: 2, md: 0 },
              border: '2px solid rgba(0, 35, 149, 0.2)',
            }}
          >
            <GroupsIcon sx={{ fontSize: 36, color: 'primary.main' }} />
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 700, color: '#002395' }}>
            Youth4Media Network
          </Typography>
        </Box>
        
        <Grid container spacing={4} alignItems="flex-start">
          {/* Left: Visual Storytelling with Photo Collage and Europe Map */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                minHeight: { xs: '500px', md: '600px' },
                borderRadius: 4,
                overflow: 'hidden',
                p: 3,
                background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.03) 0%, rgba(237, 41, 57, 0.03) 100%)',
              }}
            >
              {/* Subtle Europe Map Background */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  opacity: 0.15,
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 150 L100 100 L150 120 L200 80 L250 100 L300 90 L350 110' stroke='%23002395' stroke-width='2' fill='none'/%3E%3Ccircle cx='50' cy='150' r='4' fill='%23ED2939'/%3E%3Ccircle cx='100' cy='100' r='3' fill='%23002395'/%3E%3Ccircle cx='150' cy='120' r='3' fill='%23002395'/%3E%3Ccircle cx='200' cy='80' r='3' fill='%23002395'/%3E%3Ccircle cx='250' cy='100' r='3' fill='%23002395'/%3E%3Ccircle cx='300' cy='90' r='3' fill='%23002395'/%3E%3Ccircle cx='350' cy='110' r='3' fill='%23002395'/%3E%3C/svg%3E")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  zIndex: 0,
                }}
              />
              
              {/* Photo Collage */}
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={2}>
                  {/* Photo 1: Group from different European countries */}
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        height: { xs: '200px', md: '250px' },
                        borderRadius: 3,
                        overflow: 'hidden',
                        boxShadow: '0 8px 24px rgba(0, 35, 149, 0.2)',
                      }}
                    >
                      <Box
                        component="img"
                        src="/photos/583924019_1157903166517688_8756873269993443102_n.jpg"
                        alt="European participants"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'brightness(0.95) saturate(1.1)',
                        }}
                      />
                    </Box>
                  </Grid>
                  {/* Photo 2: Media project collaboration */}
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        height: { xs: '200px', md: '250px' },
                        borderRadius: 3,
                        overflow: 'hidden',
                        boxShadow: '0 8px 24px rgba(237, 41, 57, 0.2)',
                      }}
                    >
                      <Box
                        component="img"
                        src="/photos/571419367_1143811194593552_6930038688628840775_n.jpg"
                        alt="Media collaboration"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'brightness(0.95) saturate(1.1)',
                        }}
                      />
                    </Box>
                  </Grid>
                  {/* Photo 3: Online conference/workshop */}
                  <Grid size={{ xs: 12 }}>
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        height: { xs: '200px', md: '250px' },
                        borderRadius: 3,
                        overflow: 'hidden',
                        boxShadow: '0 8px 24px rgba(0, 35, 149, 0.2)',
                      }}
                    >
                      <Box
                        component="img"
                        src="/photos/583114332_1157911793183492_7408427246397976881_n.jpg"
                        alt="Online workshop"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'brightness(0.95) saturate(1.1)',
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              {/* Text Content Overlay */}
              <Box sx={{ position: 'relative', zIndex: 2, mt: 3 }}>
                <Box
                  sx={{
                    backgroundColor: 'white',
                    p: 3,
                    borderRadius: 3,
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                  }}
                >
                  <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 2, color: '#0b1b3a' }}>
                    MITRA FRANCE is part of the Youth4Media Network, a collaborative platform that
                    connects organizations and individuals working in media literacy, youth engagement,
                    and cultural education across Europe. Through this network, we share best practices,
                    collaborate on projects, and create opportunities for youth to develop media skills
                    and critical thinking.
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3, color: '#0b1b3a' }}>
                    The network enables us to reach a wider audience and participate in cross-border
                    initiatives that promote media literacy and youth empowerment.
                  </Typography>
                  <Stack direction="row" spacing={2} flexWrap="wrap">
                    <Chip
                      label="Media Literacy"
                      icon={<StarIcon />}
                      sx={{
                        backgroundColor: '#002395',
                        color: 'white',
                        fontWeight: 700,
                        '& .MuiChip-icon': {
                          color: 'white',
                        },
                      }}
                    />
                    <Chip
                      label="Youth Engagement"
                      icon={<GroupsIcon />}
                      sx={{
                        backgroundColor: '#002395',
                        color: 'white',
                        fontWeight: 700,
                        '& .MuiChip-icon': {
                          color: 'white',
                        },
                      }}
                    />
                    <Chip
                      label="Cross-Border"
                      icon={<PublicIcon />}
                      sx={{
                        backgroundColor: '#002395',
                        color: 'white',
                        fontWeight: 700,
                        '& .MuiChip-icon': {
                          color: 'white',
                        },
                      }}
                    />
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right: Network Benefits - Card Grid */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 3, color: '#002395' }}>
                Network Benefits
              </Typography>
              <Grid container spacing={3}>
                {[
                  {
                    title: 'Access to European best practices',
                    icon: <StarIcon />,
                    photo: '/photos/583114332_1157911793183492_7408427246397976881_n.jpg',
                  },
                  {
                    title: 'Collaborative project opportunities',
                    icon: <HandshakeIcon />,
                    photo: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
                  },
                  {
                    title: 'Professional development',
                    icon: <TrendingUpIcon />,
                    photo: '/photos/583489432_1157911303183541_1292926580526900497_n.jpg',
                  },
                ].map((benefit, idx) => (
                  <Grid size={{ xs: 12 }} key={idx}>
                    <Card
                      sx={{
                        position: 'relative',
                        height: 180,
                        overflow: 'hidden',
                        borderRadius: 3,
                        cursor: 'pointer',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        backgroundColor: 'white',
                        border: '2px solid rgba(237, 41, 57, 0.1)',
                        '&:hover': {
                          transform: 'translateY(-6px)',
                          boxShadow: '0 12px 32px rgba(237, 41, 57, 0.25)',
                          borderColor: '#ED2939',
                          '& .benefit-bg': {
                            transform: 'scale(1.1)',
                            filter: 'brightness(0.4) blur(0px)',
                          },
                          '& .benefit-content': {
                            transform: 'translateY(-6px)',
                          },
                        },
                      }}
                    >
                      {/* Background image */}
                      <Box
                        className="benefit-bg"
                        component="img"
                        src={benefit.photo}
                        alt={benefit.title}
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'brightness(0.5) blur(3px) saturate(1.1)',
                          transition: 'all 0.4s ease',
                          opacity: 0.3,
                        }}
                      />
                      {/* Content */}
                      <Box
                        className="benefit-content"
                        sx={{
                          position: 'relative',
                          height: '100%',
                          p: 3,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          transition: 'transform 0.4s ease',
                          zIndex: 2,
                        }}
                      >
                        <Box
                          sx={{
                            color: '#ED2939',
                            mb: 2,
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                          }}
                        >
                          {benefit.icon}
                        </Box>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 700,
                            color: '#0b1b3a',
                            textShadow: '0 1px 2px rgba(255,255,255,0.8)',
                          }}
                        >
                          {benefit.title}
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              
              {/* Visit Network Website Button */}
              <Box sx={{ mt: 3 }}>
                <Button
                  variant="outlined"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    borderColor: '#002395',
                    color: '#002395',
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      borderColor: '#002395',
                      backgroundColor: 'rgba(0, 35, 149, 0.08)',
                      transform: 'translateY(-2px)',
                    },
                    width: '100%',
                    py: 1.5,
                    fontWeight: 700,
                    fontSize: '1rem',
                    borderRadius: '25px',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Visit Network Website
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* PROMPT: Strong final CTA - Impact Hub */}
      <Box
        sx={{
          position: 'relative',
          borderRadius: 6,
          overflow: 'hidden',
          mb: 6,
          minHeight: { xs: 600, md: 700 },
        }}
      >
        {/* Community Backdrop - Collage of faces */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 0,
            opacity: 0.4,
          }}
        >
          {[
            '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
            '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
            '/photos/583489432_1157911303183541_1292926580526900497_n.jpg',
            '/photos/583741041_1157902773184394_5619801435922057517_n.jpg',
            '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
            '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
            '/photos/572890197_1142845724690099_2859850866106109617_n.jpg',
            '/photos/573284472_1142846254690046_5985051112828208939_n.jpg',
            '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
            '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
            '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
            '/photos/583489432_1157911303183541_1292926580526900497_n.jpg',
          ].map((photo, idx) => (
            <Box
              key={idx}
              sx={{
                position: 'relative',
                overflow: 'hidden',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(135deg, rgba(0, 35, 149, ${0.1 + idx * 0.02}) 0%, rgba(237, 41, 57, ${0.05 + idx * 0.01}) 100%)`,
                },
              }}
            >
              <Box
                component="img"
                src={photo}
                alt={`Community member ${idx + 1}`}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.85) saturate(1.1)',
                  opacity: 0.6 + (idx % 3) * 0.1,
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Frosted Glass Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.75) 100%)',
            backdropFilter: 'blur(20px)',
            zIndex: 1,
          }}
        />

        {/* Content */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            p: { xs: 4, md: 8 },
            textAlign: 'center',
          }}
        >
          <Typography variant="h2" sx={{ mb: 2, fontWeight: 800, color: 'text.primary' }}>
            Ready to Be Part of Our Story?
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 6, maxWidth: '700px', mx: 'auto', lineHeight: 1.7 }}>
            Join us in creating positive change through education, culture, and digital inclusion. 
            Behind every number, there are real people — and there's a place for you too.
          </Typography>

          {/* Interactive Path Cards */}
          <Grid container spacing={3} sx={{ mb: 6 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  position: 'relative',
                  height: { xs: 280, md: 320 },
                  overflow: 'hidden',
                  borderRadius: 4,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 48px rgba(0, 35, 149, 0.3)',
                    '& .path-photo': {
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                <Box
                  component="img"
                  className="path-photo"
                  src="/photos/583943471_1157911509850187_2575083228465038744_n.jpg"
                  alt="Become a Learner - Participant receiving certificate"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    filter: 'brightness(0.75) saturate(1.1)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.7) 0%, rgba(0, 35, 149, 0.5) 100%)',
                  }}
                />
                <CardContent
                  sx={{
                    position: 'relative',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 4,
                    color: 'white',
                  }}
                >
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 800, textAlign: 'center' }}>
                    Become a Learner
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3, textAlign: 'center', opacity: 0.95 }}>
                    Join our programs and develop new skills in digital literacy, cultural exchange, and more.
                  </Typography>
                  <Button
                    component={RouterLink}
                    to="/programs"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      color: 'primary.main',
                      fontWeight: 700,
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        backgroundColor: 'white',
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    Explore Programs
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  position: 'relative',
                  height: { xs: 280, md: 320 },
                  overflow: 'hidden',
                  borderRadius: 4,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 48px rgba(237, 41, 57, 0.3)',
                    '& .path-photo': {
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                <Box
                  component="img"
                  className="path-photo"
                  src="/photos/583924019_1157903166517688_8756873269993443102_n.jpg"
                  alt="Join as a Volunteer - Volunteer helping at event"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    filter: 'brightness(0.75) saturate(1.1)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(237, 41, 57, 0.7) 0%, rgba(237, 41, 57, 0.5) 100%)',
                  }}
                />
                <CardContent
                  sx={{
                    position: 'relative',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 4,
                    color: 'white',
                  }}
                >
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 800, textAlign: 'center' }}>
                    Join as a Volunteer
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3, textAlign: 'center', opacity: 0.95 }}>
                    Make a difference by helping others learn, grow, and connect in our community.
                  </Typography>
                  <Button
                    component={RouterLink}
                    to="/volunteer"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      color: 'error.main',
                      fontWeight: 700,
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        backgroundColor: 'white',
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    Become a Volunteer
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Main CTA Buttons */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            sx={{ justifyContent: 'center', mb: 4 }}
          >
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 700,
                borderRadius: 3,
                background: 'linear-gradient(135deg, #002395 0%, #1e88e5 100%)',
                boxShadow: '0 8px 24px rgba(0, 35, 149, 0.4)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 32px rgba(0, 35, 149, 0.5)',
                  background: 'linear-gradient(135deg, #001a7a 0%, #1565c0 100%)',
                },
              }}
            >
              Get Involved
            </Button>
            <Button
              component={RouterLink}
              to="/team"
              variant="outlined"
              color="primary"
              size="large"
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 700,
                borderRadius: 3,
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(0, 35, 149, 0.2)',
                },
              }}
            >
              Meet Our Team
            </Button>
          </Stack>

          {/* Social Proof - Avatar Gallery */}
          <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
              <AvatarGroup
                max={5}
                sx={{
                  '& .MuiAvatar-root': {
                    width: { xs: 48, md: 56 },
                    height: { xs: 48, md: 56 },
                    border: '3px solid white',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <Avatar src="/photos/571419367_1143811194593552_6930038688628840775_n.jpg" alt="Member" />
                <Avatar src="/photos/572851437_1143811217926883_7725194936764095335_n.jpg" alt="Member" />
                <Avatar src="/photos/583489432_1157911303183541_1292926580526900497_n.jpg" alt="Member" />
                <Avatar src="/photos/583741041_1157902773184394_5619801435922057517_n.jpg" alt="Member" />
                <Avatar src="/photos/583924019_1157903166517688_8756873269993443102_n.jpg" alt="Member" />
              </AvatarGroup>
              <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                Join <strong style={{ color: '#002395' }}>1,276</strong> active members already creating change
              </Typography>
            </Box>
          </Box>

          {/* Media Footer - Photo Strip */}
          <Box>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 600, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1 }}>
              Moments from Our Community
            </Typography>
            <Grid container spacing={1} sx={{ justifyContent: 'center' }}>
              {[
                {
                  photo: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
                  alt: 'Award ceremony - Recognition event',
                },
                {
                  photo: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
                  alt: 'Youth4Media Network - Collaboration',
                },
                {
                  photo: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
                  alt: 'Cultural exchange - Nice, France',
                },
                {
                  photo: '/photos/572890197_1142845724690099_2859850866106109617_n.jpg',
                  alt: 'Workshop session - Learning together',
                },
                {
                  photo: '/photos/573284472_1142846254690046_5985051112828208939_n.jpg',
                  alt: 'Community gathering - Participants',
                },
                {
                  photo: '/photos/583489432_1157911303183541_1292926580526900497_n.jpg',
                  alt: 'Event celebration - Success moment',
                },
              ].map((item, idx) => (
                <Grid size="auto" key={idx}>
                  <Box
                    component={RouterLink}
                    to="/gallery"
                    sx={{
                      display: 'block',
                      width: { xs: 80, sm: 100, md: 120 },
                      height: { xs: 80, sm: 100, md: 120 },
                      borderRadius: 2,
                      overflow: 'hidden',
                      position: 'relative',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'scale(1.1) translateY(-4px)',
                        boxShadow: '0 12px 32px rgba(0, 35, 149, 0.3)',
                        zIndex: 10,
                        '& .media-photo': {
                          filter: 'brightness(1.1) saturate(1.2)',
                        },
                        '&::after': {
                          opacity: 0,
                        },
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.2) 0%, rgba(237, 41, 57, 0.1) 100%)',
                        transition: 'opacity 0.3s ease',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      className="media-photo"
                      src={item.photo}
                      alt={item.alt}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'filter 0.3s ease',
                        filter: 'brightness(0.9) saturate(1.1)',
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ my: 8 }} />

      {/* UNDERSTANDING THE PRODUCT: Business goals, audience, journey, and brand */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          backgroundColor: 'rgba(0, 35, 149, 0.02)',
          position: 'relative',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<AccountTreeIcon />}
              label="Understanding the Product"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              We Know Our Product Inside Out
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              Every design decision is informed by deep understanding of our business goals, target audience, user journey, and brand identity.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* 1. Business Goals */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <BusinessCenterIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Business Goals
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Our design aligns with clear business objectives to create meaningful impact.
                </Typography>
                <Stack spacing={2}>
                  {[
                    { goal: 'Increase Community Engagement', progress: 85, icon: <PeopleIcon /> },
                    { goal: 'Promote Education & Integration', progress: 90, icon: <SchoolIcon /> },
                    { goal: 'Build Strong Partnerships', progress: 75, icon: <HandshakeIcon /> },
                    { goal: 'Expand European Reach', progress: 70, icon: <PublicIcon /> },
                  ].map((item) => (
                    <Box key={item.goal}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Box sx={{ color: 'primary.main' }}>{item.icon}</Box>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {item.goal}
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                          {item.progress}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={item.progress}
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: 'rgba(0, 35, 149, 0.1)',
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Grid>

            {/* 2. Target Audience */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'success.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(76, 175, 80, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <PeopleOutlineIcon sx={{ fontSize: 32, color: 'success.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'success.main' }}>
                    Target Audience
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  We serve diverse communities with tailored experiences for each group.
                </Typography>
                <Grid container spacing={2}>
                  {[
                    { group: 'Seniors', description: 'Digital literacy & social integration', icon: <PersonIcon />, color: 'primary' },
                    { group: 'Youth', description: 'Education & career development', icon: <PeopleIcon />, color: 'success' },
                    { group: 'Migrants', description: 'Cultural integration & language', icon: <PublicIcon />, color: 'info' },
                    { group: 'Organizations', description: 'Partnerships & collaboration', icon: <BusinessIcon />, color: 'warning' },
                  ].map((audience) => (
                    <Grid size={{ xs: 6 }} key={audience.group}>
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          border: '1px solid',
                          borderColor: 'divider',
                          backgroundColor: 'rgba(0, 0, 0, 0.02)',
                          textAlign: 'center',
                          height: '100%',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            borderColor: `${audience.color}.main`,
                            backgroundColor: `${audience.color}10`,
                          },
                        }}
                      >
                        <Box sx={{ color: `${audience.color}.main`, mb: 1 }}>{audience.icon}</Box>
                        <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                          {audience.group}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                          {audience.description}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Card>
            </Grid>

            {/* 3. User Journey */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'info.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <RouteIcon sx={{ fontSize: 32, color: 'info.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'info.main' }}>
                    User Journey
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  From first contact to achieving goals - we've mapped every step of your journey.
                </Typography>
                <Stepper orientation="vertical" activeStep={goalProgress > 0 ? Math.min(3, Math.floor(goalProgress / 25)) : -1}>
                  {[
                    { label: 'Discovery', description: 'Learn about MITRA France', time: '2 min' },
                    { label: 'Registration', description: 'Join our community', time: '2 min' },
                    { label: 'Engagement', description: 'Participate in programs', time: 'Ongoing' },
                    { label: 'Achievement', description: 'Reach your goals', time: 'Continuous' },
                  ].map((step, index) => (
                    <Step key={step.label}>
                      <StepLabel
                        optional={
                          <Typography variant="caption" color="text.secondary">
                            {step.description} • {step.time}
                          </Typography>
                        }
                      >
                        {step.label}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Card>
            </Grid>

            {/* 4. Competitor Analysis & Differentiation */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'warning.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(255, 152, 0, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <CompareIcon sx={{ fontSize: 32, color: 'warning.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'warning.main' }}>
                    Our Unique Advantages
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  What sets us apart from others in the field.
                </Typography>
                <Stack spacing={2}>
                  {[
                    { advantage: '100% Free Access', description: 'No hidden costs, ever' },
                    { advantage: 'Multilingual Support', description: 'French, English, and more' },
                    { advantage: 'European Network', description: '20+ European projects' },
                    { advantage: '10+ Years Experience', description: 'Proven track record' },
                    { advantage: 'Community-Driven', description: 'Built by and for the community' },
                  ].map((item) => (
                    <Box
                      key={item.advantage}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'warning.main',
                        backgroundColor: 'rgba(255, 152, 0, 0.05)',
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, color: 'warning.main' }}>
                        {item.advantage}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Grid>
          </Grid>

          {/* 5. Brand Consistency */}
          <Box sx={{ mt: 6 }}>
            <Card
              sx={{
                p: 4,
                border: '2px solid',
                borderColor: 'primary.main',
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <PaletteIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                  Brand Consistency
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>
                Our design reflects our brand identity: French Blue (#002395) and French Red (#ED2939) represent our commitment to France and our vibrant community.
              </Typography>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      border: '2px solid',
                      borderColor: 'primary.main',
                      backgroundColor: 'primary.main',
                      color: 'white',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      French Blue
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                      #002395
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.8 }}>
                      Trust, stability, professionalism
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      border: '2px solid',
                      borderColor: 'error.main',
                      backgroundColor: 'error.main',
                      color: 'white',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      French Red
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                      #ED2939
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.8 }}>
                      Energy, passion, community
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      border: '2px solid',
                      borderColor: 'divider',
                      backgroundColor: 'rgba(0, 0, 0, 0.02)',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      Our Values
                    </Typography>
                    <Stack spacing={1} sx={{ mt: 2 }}>
                      <Typography variant="caption" color="text.secondary">
                        • Inclusivity
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        • Education
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        • Community
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        • Innovation
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Box>
        </Container>
      </Box>

      {/* DEPLOY STRONG AUTHORITY ON SUBJECT: Build trust and confidence */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          backgroundColor: 'rgba(0, 35, 149, 0.02)',
          position: 'relative',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<VerifiedIcon />}
              label="Authority & Trust"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Trusted Expertise & Reliable Information
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              We establish authority through reliable content, professional design, social proof, and accessible support.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Reliable Content */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <MenuBookIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Reliable Content
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Accurate, expert-curated information that you can trust.
                </Typography>

                <Stack spacing={2.5}>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <CheckCircleIcon sx={{ fontSize: 20, color: 'success.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'success.main' }}>
                        Accuracy
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      All information is verified, relevant, and regularly updated to ensure accuracy.
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'info.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <SchoolIcon sx={{ fontSize: 20, color: 'info.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'info.main' }}>
                        Expertise
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      Content created and reviewed by subject matter experts to ensure credibility.
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'warning.main',
                      backgroundColor: 'rgba(255, 152, 0, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <FilterListIcon sx={{ fontSize: 20, color: 'warning.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'warning.main' }}>
                        Curation
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      Carefully curated content focused on what matters most to our audience.
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* Design and Aesthetics */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'success.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(76, 175, 80, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <PaletteIcon sx={{ fontSize: 32, color: 'success.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'success.main' }}>
                    Professional Design
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  A well-designed interface that instills confidence through professional aesthetics.
                </Typography>

                <Stack spacing={2.5}>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <AutoAwesomeIcon sx={{ fontSize: 20, color: 'success.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'success.main' }}>
                        Professional Look
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      Carefully chosen fonts, colors, and design elements that resonate with our audience.
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'info.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <PatternIcon sx={{ fontSize: 20, color: 'info.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'info.main' }}>
                        Consistency
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      Consistent layout, colors, and branding create a familiar, trustworthy experience.
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'primary.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <NavigationIcon sx={{ fontSize: 20, color: 'primary.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        Intuitive Navigation
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      Easy-to-use navigation helps you explore content with confidence.
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* Testimonials and Social Proof */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'warning.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(255, 152, 0, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <FormatQuoteIcon sx={{ fontSize: 32, color: 'warning.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'warning.main' }}>
                    Social Proof
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Real testimonials, case studies, and certifications that demonstrate our expertise.
                </Typography>

                <Stack spacing={2.5}>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'warning.main',
                      backgroundColor: 'rgba(255, 152, 0, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                      <StarIcon sx={{ fontSize: 20, color: 'warning.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'warning.main' }}>
                        Testimonials
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>M</Avatar>
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>
                          Marie D.
                        </Typography>
                        <Rating value={5} readOnly size="small" />
                      </Box>
                    </Box>
                    <Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                      "This platform has been incredibly helpful for my integration journey."
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'info.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <AssignmentIcon sx={{ fontSize: 20, color: 'info.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'info.main' }}>
                        Case Studies
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      Detailed case studies showcase our expertise and successful outcomes.
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <WorkspacePremiumIcon sx={{ fontSize: 20, color: 'success.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'success.main' }}>
                        Certifications
                      </Typography>
                    </Box>
                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                      <Chip label="Certified" color="success" size="small" icon={<VerifiedIcon />} />
                      <Chip label="Partner" color="info" size="small" icon={<AccountBalanceIcon />} />
                    </Stack>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* Accessibility and Support */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'info.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <AccessibilityIcon sx={{ fontSize: 32, color: 'info.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'info.main' }}>
                    Accessibility & Support
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Accessible to everyone with comprehensive support options.
                </Typography>

                <Stack spacing={2.5}>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'info.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <AccessibilityIcon sx={{ fontSize: 20, color: 'info.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'info.main' }}>
                        Accessibility Standards
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      Content meets WCAG accessibility standards, ensuring everyone can access our resources.
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap' }}>
                      <Chip label="WCAG AA" size="small" color="info" />
                      <Chip label="Screen Reader" size="small" color="info" />
                      <Chip label="Keyboard Nav" size="small" color="info" />
                    </Stack>
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <SupportAgentIcon sx={{ fontSize: 20, color: 'success.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'success.main' }}>
                        Customer Support
                      </Typography>
                    </Box>
                    <Stack spacing={1}>
                      <Button variant="outlined" color="success" size="small" fullWidth startIcon={<MenuBookIcon />}>
                        Help Center
                      </Button>
                      <Button variant="outlined" color="success" size="small" fullWidth startIcon={<ContactMailIcon />}>
                        Contact Support
                      </Button>
                    </Stack>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* BE AUTHENTIC AND PERSONAL: Genuine connection with users */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(0, 35, 149, 0.02) 50%, rgba(76, 175, 80, 0.02) 100%)',
          position: 'relative',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<FavoriteIcon />}
              label="Authentic & Personal"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Genuine, Truthful & Relatable
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              We believe in being authentic and personal. Our design is genuine, truthful, and relatable, creating a positive connection with every user.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Authentic Storytelling */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(244, 67, 54, 0.1) 0%, rgba(244, 67, 54, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <EmojiEmotionsIcon sx={{ fontSize: 32, color: 'error.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    Authentic Storytelling
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Real stories from real people. We share genuine experiences that resonate with our community.
                </Typography>

                <Box
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: 'rgba(244, 67, 54, 0.05)',
                    border: '1px solid',
                    borderColor: 'error.main',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Avatar sx={{ width: 48, height: 48, bgcolor: 'error.main' }}>A</Avatar>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Ahmed, 28
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Software Developer from Morocco
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', lineHeight: 1.7 }}>
                    "I found a community here that understands my journey. The programs are practical and the support is real. This isn't just a website - it's a genuine connection."
                  </Typography>
                </Box>
              </Card>
            </Grid>

            {/* Personal Connection */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <PersonIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    Personal Connection
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  We see you as an individual, not just a user. Every interaction is designed to feel personal and meaningful.
                </Typography>

                <Stack spacing={2}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                      border: '1px solid',
                      borderColor: 'primary.main',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'primary.main' }}>
                      Personalized Recommendations
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Content tailored to your interests, background, and goals
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                      border: '1px solid',
                      borderColor: 'success.main',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'success.main' }}>
                      Your Journey Matters
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      We celebrate your progress and support your unique path
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* Truthful Communication */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <CheckCircleIcon sx={{ fontSize: 32, color: 'success.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    Truthful Communication
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  We communicate honestly and transparently. No false promises, just genuine commitment to your success.
                </Typography>

                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleIcon sx={{ fontSize: 20, color: 'success.main' }} />
                    <Typography variant="body2" color="text.secondary">
                      Clear expectations about what we offer
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleIcon sx={{ fontSize: 20, color: 'success.main' }} />
                    <Typography variant="body2" color="text.secondary">
                      Transparent about limitations and challenges
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleIcon sx={{ fontSize: 20, color: 'success.main' }} />
                    <Typography variant="body2" color="text.secondary">
                      Honest feedback and real results
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* Relatable Content */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ConnectWithoutContactIcon sx={{ fontSize: 32, color: 'warning.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    Relatable Content
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Content that speaks to your experiences, challenges, and aspirations. We understand because we've been there too.
                </Typography>

                <Stack spacing={2}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(255, 152, 0, 0.05)',
                      border: '1px solid',
                      borderColor: 'warning.main',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, color: 'warning.main' }}>
                      Real Scenarios
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Examples from actual community members
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                      border: '1px solid',
                      borderColor: 'primary.main',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, color: 'primary.main' }}>
                      Common Challenges
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      We address the real issues you face
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                      border: '1px solid',
                      borderColor: 'success.main',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, color: 'success.main' }}>
                      Shared Success
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Celebrate achievements together as a community
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          </Grid>

          {/* Call to Action */}
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
              Join Our Authentic Community
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: '600px', mx: 'auto' }}>
              Be part of a genuine community where your story matters and your journey is supported.
            </Typography>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              size="large"
              sx={{
                background: 'linear-gradient(135deg, rgba(0, 35, 149, 1) 0%, rgba(0, 35, 149, 0.8) 100%)',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                boxShadow: '0 4px 12px rgba(0, 35, 149, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.9) 0%, rgba(0, 35, 149, 0.7) 100%)',
                  boxShadow: '0 6px 16px rgba(0, 35, 149, 0.4)',
                },
              }}
            >
              Start Your Journey
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Link to UX Principles page */}
      <Box
        sx={{
          py: { xs: 4, sm: 6 },
          backgroundColor: 'rgba(0, 35, 149, 0.02)',
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Interested in our UX design principles?
          </Typography>
          <Button
            component={RouterLink}
            to="/ux-principles"
            variant="outlined"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            sx={{ px: 4 }}
          >
            Explore UX Principles
          </Button>
        </Container>
      </Box>
    </Container>
    </Box>
  );
}
