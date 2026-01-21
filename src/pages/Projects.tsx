import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from '@mui/icons-material/Language';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import PublicIcon from '@mui/icons-material/Public';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Fab from '@mui/material/Fab';
import { Link as RouterLink } from 'react-router-dom';

const erasmusKA2Projects = [
  {
    title: 'Media literacy in adult education',
    period: '2016-2018',
    status: 'Completed',
    description: 'Promoting media literacy skills among adult learners through innovative teaching methods.',
    participants: '150+',
    impact: 'High',
    focus: 'Adult Education, Media Literacy',
  },
  {
    title: 'Digital Senior Citizen',
    period: '2018-2020',
    status: 'Completed',
    description: 'Empowering senior citizens with essential digital skills for everyday life.',
    participants: '200+',
    impact: 'High',
    focus: 'Digital Literacy, Seniors',
  },
  {
    title: 'Cultural regeneration',
    period: '2018-2020',
    status: 'Completed',
    description: 'Revitalizing cultural heritage through community engagement and education.',
    participants: '120+',
    impact: 'Medium',
    focus: 'Cultural Heritage, Community',
  },
  {
    title: 'Media and information literacy',
    period: '2018-2020',
    status: 'Completed',
    description: 'Developing critical thinking skills to navigate the information landscape.',
    participants: '180+',
    impact: 'High',
    focus: 'Media Literacy, Critical Thinking',
  },
  {
    title: 'Cultural Heritage for Youth',
    period: '2020-2022',
    status: 'Completed',
    description: 'Engaging young people with cultural heritage through modern media and arts.',
    participants: '100+',
    impact: 'High',
    focus: 'Youth, Cultural Heritage, Media',
  },
];

const erasmusKA1Projects = [
  {
    title: 'Multimedia literacy',
    period: '2017',
    status: 'Completed',
    description: 'Training courses on multimedia production and digital storytelling.',
    participants: '50+',
    impact: 'Medium',
    focus: 'Multimedia, Training',
  },
  {
    title: 'Look Sharp: fake news',
    period: '2018',
    status: 'Completed',
    description: 'Addressing the challenge of fake news through media literacy education.',
    participants: '80+',
    impact: 'High',
    focus: 'Media Literacy, Fake News',
  },
  {
    title: 'YouthPass 4 Future',
    period: '2018',
    status: 'Completed',
    description: 'Supporting youth mobility and recognition of non-formal learning.',
    participants: '60+',
    impact: 'Medium',
    focus: 'Youth Mobility, Recognition',
  },
  {
    title: 'Look Sharp: media literacy',
    period: '2022',
    status: 'Completed',
    description: 'Advanced training on media literacy and critical information analysis.',
    participants: '90+',
    impact: 'High',
    focus: 'Advanced Media Literacy',
  },
];

const partnershipProjects = [
  'Positive emotional life',
  'Legends and fairy tales',
  'Slow food – long life',
  'Critical thinking for seniors',
  'Tell your story',
  'Creative reading and writing',
  'Ethno-design in fashion',
];

export default function Projects() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      {/* BJ FOGG BEHAVIOR MODEL: MOTIVATION + ABILITY + PROMPTS */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.08) 0%, rgba(237, 41, 57, 0.08) 50%, rgba(0, 35, 149, 0.05) 100%)',
          pt: { xs: 10, sm: 12, md: 14 }, // Отступ сверху, чтобы контент не скрывался под Header
          pb: { xs: 6, sm: 8 },
          mb: { xs: 6, sm: 8 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #002395 0%, #ED2939 100%)',
          },
        }}
      >
        <Container>
          {/* MOTIVATION: Emotional appeal and value proposition */}
          <Grid container spacing={4} alignItems="center" sx={{ mb: 4 }}>
            {/* Left: Text Content */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Chip
                  icon={<EmojiEventsIcon sx={{ color: 'white' }} />}
                  label="European Projects"
                  sx={{
                    mb: 2,
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    py: 2,
                    backgroundColor: '#002395',
                    color: 'white',
                    '& .MuiChip-icon': {
                      color: 'white',
                    },
                  }}
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
                    fontWeight: 900,
                    textShadow: '0 2px 8px rgba(0, 35, 149, 0.1)',
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                  }}
                >
                  Our Projects
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: { xs: 'center', md: 'left' },
                    mb: 3,
                    color: 'text.secondary',
                    fontWeight: 400,
                  }}
                >
                  Discover our European and local projects promoting education, digital literacy, and cultural exchange.
                  Each project creates real impact and positive change in our communities.
                </Typography>
                
                {/* MOTIVATION: Show benefits and value */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    alignItems: 'center',
                    gap: 2,
                    flexWrap: 'wrap',
                    mb: 4,
                  }}
                >
                  <Chip
                    icon={<CheckCircleIcon sx={{ color: 'white' }} />}
                    label="100% Success Rate"
                    sx={{
                      backgroundColor: '#4caf50',
                      color: 'white',
                      fontWeight: 700,
                      '& .MuiChip-icon': {
                        color: 'white',
                      },
                    }}
                  />
                  <Chip
                    icon={<PeopleIcon sx={{ color: 'white' }} />}
                    label="1000+ Participants"
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
                    icon={<PublicIcon sx={{ color: 'white' }} />}
                    label="15+ Countries"
                    sx={{
                      backgroundColor: '#ED2939',
                      color: 'white',
                      fontWeight: 700,
                      '& .MuiChip-icon': {
                        color: 'white',
                      },
                    }}
                  />
                </Box>
              </Box>
            </Grid>

            {/* Right: Photo Collage */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: { xs: '100%', md: 560 },
                  mx: { xs: 'auto', md: 0 },
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                }}
              >
                {/* Central Main Photo */}
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: 300, sm: 400, md: 450 },
                    borderRadius: 4,
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    component="img"
                    src="/photos/583924019_1157903166517688_8756873269993443102_n.jpg"
                    alt="Live learning workshop - Active participants"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.95) saturate(1.1)',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(237, 41, 57, 0.08) 60%, rgba(255,255,255,0) 100%)',
                      pointerEvents: 'none',
                    }}
                  />
                </Box>

                {/* Overlay Preview 1: Digital Skills (Top Left) */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: 16, sm: 24 },
                    left: { xs: 16, sm: 24 },
                    width: { xs: 100, sm: 140 },
                    height: { xs: 80, sm: 110 },
                    borderRadius: 3,
                    overflow: 'hidden',
                    border: '3px solid white',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                    zIndex: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1) translateY(-4px)',
                      boxShadow: '0 12px 32px rgba(0, 35, 149, 0.3)',
                      zIndex: 10,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="/photos/572890197_1142845724690099_2859850866106109617_n.jpg"
                    alt="Digital Skills - People working on computers"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.9) saturate(1.1)',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(180deg, transparent 0%, rgba(0, 35, 149, 0.9) 100%)',
                      p: 1,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'white',
                        fontWeight: 700,
                        fontSize: { xs: '0.65rem', sm: '0.75rem' },
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      Digital Skills
                    </Typography>
                  </Box>
                </Box>

                {/* Overlay Preview 2: Certificates (Top Right) */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: 16, sm: 24 },
                    right: { xs: 16, sm: 24 },
                    width: { xs: 100, sm: 140 },
                    height: { xs: 80, sm: 110 },
                    borderRadius: 3,
                    overflow: 'hidden',
                    border: '3px solid white',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                    zIndex: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1) translateY(-4px)',
                      boxShadow: '0 12px 32px rgba(237, 41, 57, 0.3)',
                      zIndex: 10,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="/photos/583943471_1157911509850187_2575083228465038744_n.jpg"
                    alt="Certificates - Erasmus+ diploma ceremony"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.9) saturate(1.1)',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(180deg, transparent 0%, rgba(237, 41, 57, 0.9) 100%)',
                      p: 1,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'white',
                        fontWeight: 700,
                        fontSize: { xs: '0.65rem', sm: '0.75rem' },
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      Certificates
                    </Typography>
                  </Box>
                </Box>

                {/* Overlay Preview 3: Media & Arts (Bottom Left) */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: { xs: 16, sm: 24 },
                    left: { xs: 16, sm: 24 },
                    width: { xs: 100, sm: 140 },
                    height: { xs: 80, sm: 110 },
                    borderRadius: 3,
                    overflow: 'hidden',
                    border: '3px solid white',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                    zIndex: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1) translateY(-4px)',
                      boxShadow: '0 12px 32px rgba(237, 41, 57, 0.3)',
                      zIndex: 10,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="/photos/573284472_1142846254690046_5985051112828208939_n.jpg"
                    alt="Media & Arts - Creative process or filming"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.9) saturate(1.1)',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(180deg, transparent 0%, rgba(237, 41, 57, 0.9) 100%)',
                      p: 1,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'white',
                        fontWeight: 700,
                        fontSize: { xs: '0.65rem', sm: '0.75rem' },
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      Media & Arts
                    </Typography>
                  </Box>
                </Box>

                {/* Overlay Preview 4: Community (Bottom Right) */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: { xs: 16, sm: 24 },
                    right: { xs: 16, sm: 24 },
                    width: { xs: 120, sm: 160 },
                    height: { xs: 90, sm: 120 },
                    borderRadius: 3,
                    overflow: 'hidden',
                    border: '3px solid white',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                    zIndex: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1) translateY(-4px)',
                      boxShadow: '0 12px 32px rgba(0, 35, 149, 0.3)',
                      zIndex: 10,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="/photos/584326681_1157904053184266_2071216266526493174_n.jpg"
                    alt="Community - Group photo in Nice, France"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.9) saturate(1.1)',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(180deg, transparent 0%, rgba(0, 35, 149, 0.9) 100%)',
                      p: 1.5,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'white',
                        fontWeight: 700,
                        fontSize: { xs: '0.65rem', sm: '0.7rem' },
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                        lineHeight: 1.2,
                        display: 'block',
                      }}
                    >
                      Community
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* MOTIVATION: Project statistics with visual appeal */}
          <Grid container spacing={3} sx={{ mt: 2, mb: 4 }}>
            <Grid size={{ xs: 6, sm: 3 }}>
              <Card
                sx={{
                  position: 'relative',
                  textAlign: 'center',
                  p: 3,
                  border: '2px solid',
                  borderColor: 'primary.main',
                  backgroundColor: 'rgba(0, 35, 149, 0.08)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 6px 20px rgba(0, 35, 149, 0.3)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'url(/photos/583943471_1157911509850187_2575083228465038744_n.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.12,
                    filter: 'blur(8px)',
                    zIndex: 0,
                  },
                }}
              >
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <EmojiEventsIcon sx={{ fontSize: 32, color: 'primary.main', mb: 1 }} />
                  <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 0.5 }}>
                    {erasmusKA2Projects.length + erasmusKA1Projects.length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                    Total Projects
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid size={{ xs: 6, sm: 3 }}>
              <Card
                sx={{
                  position: 'relative',
                  textAlign: 'center',
                  p: 3,
                  border: '2px solid',
                  borderColor: 'success.main',
                  backgroundColor: 'rgba(76, 175, 80, 0.08)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 6px 20px rgba(76, 175, 80, 0.3)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'url(/photos/583924019_1157903166517688_8756873269993443102_n.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.12,
                    filter: 'blur(8px)',
                    zIndex: 0,
                  },
                }}
              >
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <TrendingUpIcon sx={{ fontSize: 32, color: 'success.main', mb: 1 }} />
                  <Typography variant="h4" sx={{ color: 'success.main', fontWeight: 700, mb: 0.5 }}>
                    100%
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                    Success Rate
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid size={{ xs: 6, sm: 3 }}>
              <Card
                sx={{
                  position: 'relative',
                  textAlign: 'center',
                  p: 3,
                  border: '2px solid',
                  borderColor: 'info.main',
                  backgroundColor: 'rgba(0, 56, 214, 0.08)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 6px 20px rgba(0, 56, 214, 0.3)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle, rgba(0, 35, 149, 0.15) 0%, transparent 70%)',
                    zIndex: 0,
                  },
                  '&::after': {
                    content: '"🇫🇷🇩🇪🇮🇹🇪🇸🇵🇱🇬🇷"',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '3rem',
                    opacity: 0.08,
                    zIndex: 0,
                    pointerEvents: 'none',
                  },
                }}
              >
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <PublicIcon sx={{ fontSize: 32, color: 'info.main', mb: 1 }} />
                  <Typography variant="h4" sx={{ color: 'info.main', fontWeight: 700, mb: 0.5 }}>
                    15+
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                    Partner Countries
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid size={{ xs: 6, sm: 3 }}>
              <Card
                sx={{
                  position: 'relative',
                  textAlign: 'center',
                  p: 3,
                  border: '2px solid',
                  borderColor: 'error.main',
                  backgroundColor: 'rgba(237, 41, 57, 0.08)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 6px 20px rgba(237, 41, 57, 0.3)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'url(/photos/584326681_1157904053184266_2071216266526493174_n.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.12,
                    filter: 'blur(8px)',
                    zIndex: 0,
                  },
                }}
              >
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <PeopleIcon sx={{ fontSize: 32, color: 'error.main', mb: 1 }} />
                  <Typography variant="h4" sx={{ color: 'error.main', fontWeight: 700, mb: 0.5 }}>
                    1000+
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                    Participants Reached
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>

          {/* PROMPT: Clear call-to-action with enhanced visual appeal */}
          <Box
            sx={{
              textAlign: 'center',
              p: 4,
              borderRadius: 4,
              background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(237, 41, 57, 0.1) 100%)',
              border: '2px solid',
              borderColor: 'primary.main',
              maxWidth: '700px',
              mx: 'auto',
              mt: 2,
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #002395 0%, #ED2939 100%)',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: -20,
                right: -20,
                width: 200,
                height: 200,
                background: 'radial-gradient(circle, rgba(0, 35, 149, 0.05) 0%, transparent 70%)',
                zIndex: 0,
              },
            }}
          >
            {/* Background Icons */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4,
                opacity: 0.08,
                zIndex: 0,
                pointerEvents: 'none',
              }}
            >
              <SchoolIcon sx={{ fontSize: 48, color: 'primary.main' }} />
              <LanguageIcon sx={{ fontSize: 48, color: 'primary.main' }} />
              <EmojiEventsIcon sx={{ fontSize: 48, color: 'error.main' }} />
            </Box>

            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, color: 'primary.main' }}>
                Ready to Explore?
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.7 }}>
                Use the tabs below to filter projects by type, or scroll down to see all projects. 
                Each project tells a story of impact and positive change.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 5,
                    py: 1.5,
                    fontWeight: 700,
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #002395 0%, #1e88e5 100%)',
                    boxShadow: '0 6px 20px rgba(0, 35, 149, 0.4)',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 24px rgba(0, 35, 149, 0.5)',
                      background: 'linear-gradient(135deg, #001a7a 0%, #1565c0 100%)',
                    },
                  }}
                >
                  Contact Us
                </Button>
                <Button
                  component={RouterLink}
                  to="/partners"
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 5,
                    py: 1.5,
                    fontWeight: 700,
                    borderRadius: 3,
                    borderWidth: 2,
                    borderColor: '#ED2939',
                    color: '#ED2939',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderWidth: 2,
                      borderColor: '#c91f2f',
                      backgroundColor: 'rgba(237, 41, 57, 0.08)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(237, 41, 57, 0.3)',
                    },
                  }}
                >
                  View Partners
                </Button>
              </Stack>
            </Box>
          </Box>

          {/* ABILITY: Show simplicity indicator */}
          <Typography
            variant="caption"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              mt: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.5,
            }}
          >
            <CheckCircleIcon sx={{ fontSize: 16, color: 'success.main' }} />
            Easy to browse • Filter by type • Detailed information available
          </Typography>
        </Container>
      </Box>

      <Container>
        {/* ABILITY: Make it easy to navigate - Enhanced tabs with clear labels */}
        <Box sx={{ mb: 6, mt: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              color: 'text.primary',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            Choose project type:
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              flexWrap: 'wrap',
              mb: 6,
            }}
          >
            {[
              {
                label: 'Erasmus+ KA2',
                sublabel: 'Cooperation',
                icon: <SchoolIcon />,
                color: '#002395',
                value: 0,
              },
              {
                label: 'Erasmus+ KA1',
                sublabel: 'Mobility',
                icon: <LanguageIcon />,
                color: '#ED2939',
                value: 1,
              },
              {
                label: 'Partnership',
                sublabel: 'Projects',
                icon: <PublicIcon />,
                color: '#4caf50',
                value: 2,
              },
            ].map((tab) => (
              <Button
                key={tab.value}
                onClick={() => handleTabChange(null as any, tab.value)}
                sx={{
                  flex: { xs: '1 1 100%', sm: '1 1 calc(33.333% - 16px)', md: '0 1 auto' },
                  minWidth: { xs: '100%', sm: 200, md: 220 },
                  p: 3,
                  borderRadius: 3,
                  textTransform: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                  backgroundColor: tabValue === tab.value ? tab.color : 'rgba(0, 0, 0, 0.02)',
                  color: tabValue === tab.value ? 'white' : 'text.primary',
                  border: `2px solid ${tabValue === tab.value ? tab.color : 'transparent'}`,
                  fontWeight: tabValue === tab.value ? 700 : 600,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: tabValue === tab.value ? `0 8px 24px ${tab.color}40` : 'none',
                  '&:hover': {
                    backgroundColor: tabValue === tab.value ? tab.color : `${tab.color}15`,
                    transform: 'translateY(-4px)',
                    boxShadow: `0 12px 32px ${tab.color}30`,
                    borderColor: tab.color,
                  },
                  '& .MuiButton-startIcon': {
                    margin: 0,
                    '& svg': {
                      fontSize: 32,
                      color: tabValue === tab.value ? 'white' : tab.color,
                    },
                  },
                }}
                startIcon={tab.icon}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'inherit', mb: 0.5 }}>
                    {tab.label}
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: tabValue === tab.value ? 0.95 : 0.7 }}>
                    {tab.sublabel}
                  </Typography>
                </Box>
              </Button>
            ))}
          </Box>
          
          {/* ABILITY: Show simplicity indicator for navigation */}
          <Typography
            variant="caption"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.5,
              mb: 2,
            }}
          >
            <CheckCircleIcon sx={{ fontSize: 16, color: 'success.main' }} />
            Easy navigation • Filter by type • Detailed information available
          </Typography>
        </Box>

        {/* Erasmus+ KA2 Projects */}
        {tabValue === 0 && (
          <Box sx={{ mb: 6 }}>
            {/* Cover Photo for KA2 */}
            <Box
              sx={{
                position: 'relative',
                mb: 6,
                borderRadius: 4,
                overflow: 'hidden',
                height: { xs: 200, sm: 280, md: 320 },
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
              }}
            >
              <Box
                component="img"
                src="/photos/584326681_1157904053184266_2071216266526493174_n.jpg"
                alt="Erasmus+ KA2 - Large group with EU flags"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.85) saturate(1.1)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.7) 0%, rgba(0, 35, 149, 0.5) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  color: 'white',
                  p: 4,
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  <SchoolIcon sx={{ fontSize: 36, color: 'white' }} />
                </Box>
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 1, textAlign: 'center' }}>
                  Erasmus+ KA2 Projects
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.95, textAlign: 'center' }}>
                  Cooperation Partnerships for Innovation
                </Typography>
              </Box>
            </Box>
            <Grid container spacing={3}>
              {erasmusKA2Projects.map((project, idx) => {
                const projectPhotos = [
                  '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
                  '/photos/572890197_1142845724690099_2859850866106109617_n.jpg',
                  '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
                  '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
                  '/photos/573284472_1142846254690046_5985051112828208939_n.jpg',
                ];
                return (
                  <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={project.title}>
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        borderTop: '4px solid',
                        borderTopColor: 'primary.main',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 16px 40px rgba(0, 35, 149, 0.25)',
                          '& .project-photo': {
                            transform: 'scale(1.1)',
                          },
                        },
                      }}
                    >
                      {/* Photo Section - Top Half */}
                      <Box
                        sx={{
                          position: 'relative',
                          height: 200,
                          overflow: 'hidden',
                        }}
                      >
                        <Box
                          component="img"
                          className="project-photo"
                          src={projectPhotos[idx % projectPhotos.length]}
                          alt={`${project.title} - Project event`}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                            filter: 'brightness(0.9) saturate(1.1)',
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(180deg, rgba(0, 35, 149, 0.6) 0%, rgba(0, 35, 149, 0.3) 50%, transparent 100%)',
                          }}
                        />
                        <Stack direction="row" spacing={1} sx={{ position: 'absolute', top: 12, left: 12, flexWrap: 'wrap', gap: 1 }}>
                          <Chip
                            label={project.status}
                            size="small"
                            icon={<CheckCircleIcon sx={{ color: 'white !important' }} />}
                            sx={{
                              backgroundColor: '#4caf50',
                              color: 'white',
                              fontWeight: 700,
                              '& .MuiChip-icon': {
                                color: 'white',
                              },
                            }}
                          />
                          <Chip
                            label={project.period}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(255, 255, 255, 0.9)',
                              color: 'text.primary',
                              fontWeight: 600,
                            }}
                          />
                        </Stack>
                        <Typography
                          variant="h6"
                          sx={{
                            position: 'absolute',
                            bottom: 16,
                            left: 16,
                            right: 16,
                            color: 'white',
                            fontWeight: 800,
                            textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
                            lineHeight: 1.3,
                          }}
                        >
                          {project.title}
                        </Typography>
                      </Box>

                      <CardContent sx={{ flexGrow: 1, p: 3 }}>
                        <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 2, minHeight: '3em', lineHeight: 1.7 }}>
                          {project.description}
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        {/* MOTIVATION: Impact indicators */}
                        <Stack spacing={1.5} sx={{ mb: 2 }}>
                          <Chip
                            icon={<PeopleIcon sx={{ color: 'white' }} />}
                            label={`${project.participants} participants`}
                            size="small"
                            sx={{
                              backgroundColor: '#002395',
                              color: 'white',
                              fontWeight: 700,
                              width: 'fit-content',
                              '& .MuiChip-icon': {
                                color: 'white',
                              },
                            }}
                          />
                          <Chip
                            icon={<TrendingUpIcon sx={{ color: 'white' }} />}
                            label={`Impact: ${project.impact}`}
                            size="small"
                            sx={{
                              backgroundColor: project.impact === 'High' ? '#ED2939' : '#ff9800',
                              color: 'white',
                              fontWeight: 700,
                              width: 'fit-content',
                              '& .MuiChip-icon': {
                                color: 'white',
                              },
                            }}
                          />
                          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                            <InfoIcon sx={{ fontSize: 18, color: 'text.secondary', mt: 0.25 }} />
                            <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                              {project.focus}
                            </Typography>
                          </Box>
                        </Stack>
                        {/* PROMPT: Project-specific CTA */}
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 'auto' }}>
                          <Fab
                            component={RouterLink}
                            to="/project-detail"
                            size="medium"
                            sx={{
                              backgroundColor: '#002395',
                              color: 'white',
                              '&:hover': {
                                backgroundColor: '#001a7a',
                                transform: 'scale(1.1)',
                              },
                            }}
                          >
                            <ArrowForwardIcon />
                          </Fab>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        )}

        {/* Erasmus+ KA1 Projects */}
        {tabValue === 1 && (
          <Box sx={{ mb: 6 }}>
            {/* Cover Photo for KA1 */}
            <Box
              sx={{
                position: 'relative',
                mb: 6,
                borderRadius: 4,
                overflow: 'hidden',
                height: { xs: 200, sm: 280, md: 320 },
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
              }}
            >
              <Box
                component="img"
                src="/photos/583924019_1157903166517688_8756873269993443102_n.jpg"
                alt="Erasmus+ KA1 - Large group with EU flags"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.85) saturate(1.1)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(237, 41, 57, 0.7) 0%, rgba(237, 41, 57, 0.5) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  color: 'white',
                  p: 4,
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  <LanguageIcon sx={{ fontSize: 36, color: 'white' }} />
                </Box>
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 1, textAlign: 'center' }}>
                  Erasmus+ KA1 Projects
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.95, textAlign: 'center' }}>
                  Mobility Projects for Learning and Development
                </Typography>
              </Box>
            </Box>
            <Grid container spacing={3}>
              {erasmusKA1Projects.map((project, idx) => {
                const projectPhotos = [
                  '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
                  '/photos/572890197_1142845724690099_2859850866106109617_n.jpg',
                  '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
                  '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
                ];
                return (
                  <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={project.title}>
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        borderTop: '4px solid',
                        borderTopColor: 'error.main',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 16px 40px rgba(237, 41, 57, 0.25)',
                          '& .project-photo': {
                            transform: 'scale(1.1)',
                          },
                        },
                      }}
                    >
                      {/* Photo Section - Top Half */}
                      <Box
                        sx={{
                          position: 'relative',
                          height: 200,
                          overflow: 'hidden',
                        }}
                      >
                        <Box
                          component="img"
                          className="project-photo"
                          src={projectPhotos[idx % projectPhotos.length]}
                          alt={`${project.title} - Project event`}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                            filter: 'brightness(0.9) saturate(1.1)',
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(180deg, rgba(237, 41, 57, 0.6) 0%, rgba(237, 41, 57, 0.3) 50%, transparent 100%)',
                          }}
                        />
                        <Stack direction="row" spacing={1} sx={{ position: 'absolute', top: 12, left: 12, flexWrap: 'wrap', gap: 1 }}>
                          <Chip
                            label={project.status}
                            size="small"
                            icon={<CheckCircleIcon sx={{ color: 'white !important' }} />}
                            sx={{
                              backgroundColor: '#4caf50',
                              color: 'white',
                              fontWeight: 700,
                              '& .MuiChip-icon': {
                                color: 'white',
                              },
                            }}
                          />
                          <Chip
                            label={project.period}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(255, 255, 255, 0.9)',
                              color: 'text.primary',
                              fontWeight: 600,
                            }}
                          />
                        </Stack>
                        <Typography
                          variant="h6"
                          sx={{
                            position: 'absolute',
                            bottom: 16,
                            left: 16,
                            right: 16,
                            color: 'white',
                            fontWeight: 800,
                            textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
                            lineHeight: 1.3,
                          }}
                        >
                          {project.title}
                        </Typography>
                      </Box>

                      <CardContent sx={{ flexGrow: 1, p: 3 }}>
                        <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 2, minHeight: '3em', lineHeight: 1.7 }}>
                          {project.description}
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        {/* MOTIVATION: Impact indicators */}
                        <Stack spacing={1.5} sx={{ mb: 2 }}>
                          <Chip
                            icon={<PeopleIcon sx={{ color: 'white' }} />}
                            label={`${project.participants} participants`}
                            size="small"
                            sx={{
                              backgroundColor: '#ED2939',
                              color: 'white',
                              fontWeight: 700,
                              width: 'fit-content',
                              '& .MuiChip-icon': {
                                color: 'white',
                              },
                            }}
                          />
                          <Chip
                            icon={<TrendingUpIcon sx={{ color: 'white' }} />}
                            label={`Impact: ${project.impact}`}
                            size="small"
                            sx={{
                              backgroundColor: project.impact === 'High' ? '#ED2939' : '#ff9800',
                              color: 'white',
                              fontWeight: 700,
                              width: 'fit-content',
                              '& .MuiChip-icon': {
                                color: 'white',
                              },
                            }}
                          />
                          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                            <InfoIcon sx={{ fontSize: 18, color: 'text.secondary', mt: 0.25 }} />
                            <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                              {project.focus}
                            </Typography>
                          </Box>
                        </Stack>
                        {/* PROMPT: Project-specific CTA */}
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 'auto' }}>
                          <Fab
                            component={RouterLink}
                            to="/project-detail"
                            size="medium"
                            sx={{
                              backgroundColor: '#ED2939',
                              color: 'white',
                              '&:hover': {
                                backgroundColor: '#c91f2f',
                                transform: 'scale(1.1)',
                              },
                            }}
                          >
                            <ArrowForwardIcon />
                          </Fab>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        )}

        {/* Partnership Projects */}
        {tabValue === 2 && (
          <Box sx={{ mb: 6 }}>
            {/* Cover Photo for Partnership Projects */}
            <Box
              sx={{
                position: 'relative',
                mb: 6,
                borderRadius: 4,
                overflow: 'hidden',
                height: { xs: 200, sm: 280, md: 320 },
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
              }}
            >
              <Box
                component="img"
                src="/photos/572890197_1142845724690099_2859850866106109617_n.jpg"
                alt="Partnership Projects - Collaborative work processes"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.85) saturate(1.1)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.7) 0%, rgba(76, 175, 80, 0.5) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  color: 'white',
                  p: 4,
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  <PublicIcon sx={{ fontSize: 36, color: 'white' }} />
                </Box>
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 1, textAlign: 'center' }}>
                  Partnership Projects
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.95, textAlign: 'center' }}>
                  Collaborative Initiatives with Local and European Partners
                </Typography>
              </Box>
            </Box>
            <Grid container spacing={3}>
              {partnershipProjects.map((project, index) => {
                const partnershipPhotos = [
                  '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
                  '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
                  '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
                  '/photos/572890197_1142845724690099_2859850866106109617_n.jpg',
                  '/photos/573284472_1142846254690046_5985051112828208939_n.jpg',
                  '/photos/583489432_1157911303183541_1292926580526900497_n.jpg',
                  '/photos/583741041_1157902773184394_5619801435922057517_n.jpg',
                ];
                const borderColor = index % 2 === 0 ? '#002395' : '#ED2939';
                return (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project}>
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        borderLeft: '4px solid',
                        borderLeftColor: borderColor,
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          transform: 'translateY(-6px)',
                          boxShadow: `0 12px 32px ${borderColor}30`,
                          '& .partnership-photo': {
                            transform: 'scale(1.1)',
                          },
                        },
                      }}
                    >
                      {/* Photo Section - Top Half */}
                      <Box
                        sx={{
                          position: 'relative',
                          height: 180,
                          overflow: 'hidden',
                        }}
                      >
                        <Box
                          component="img"
                          className="partnership-photo"
                          src={partnershipPhotos[index % partnershipPhotos.length]}
                          alt={`${project} - Partnership project`}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                            filter: 'brightness(0.9) saturate(1.1)',
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            inset: 0,
                            background: `linear-gradient(180deg, ${borderColor}CC 0%, ${borderColor}99 50%, transparent 100%)`,
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 12,
                            right: 12,
                          }}
                        >
                          <Chip
                            label="Active Partnership"
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(255, 255, 255, 0.95)',
                              color: borderColor,
                              fontWeight: 700,
                            }}
                          />
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            position: 'absolute',
                            bottom: 16,
                            left: 16,
                            right: 16,
                            color: 'white',
                            fontWeight: 800,
                            textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
                            lineHeight: 1.3,
                          }}
                        >
                          {project}
                        </Typography>
                      </Box>

                      <CardContent sx={{ flexGrow: 1, p: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                          <Fab
                            component={RouterLink}
                            to="/project-detail"
                            size="medium"
                            sx={{
                              backgroundColor: borderColor,
                              color: 'white',
                              '&:hover': {
                                backgroundColor: borderColor === '#002395' ? '#001a7a' : '#c91f2f',
                                transform: 'scale(1.1)',
                              },
                            }}
                          >
                            <ArrowForwardIcon />
                          </Fab>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        )}

        {/* BJ FOGG MODEL: PROMPT - Strong call-to-action with motivation */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.08) 0%, rgba(237, 41, 57, 0.08) 100%)',
            borderRadius: '16px',
            p: 6,
            textAlign: 'center',
            mt: 6,
            mb: 4,
            border: '2px solid',
            borderColor: 'primary.main',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #002395 0%, #ED2939 100%)',
            },
          }}
        >
          {/* MOTIVATION: Show value and benefits */}
          <Chip
            icon={<EmojiEventsIcon />}
            label="Join Our Network"
            color="primary"
            sx={{ mb: 2, fontWeight: 600, fontSize: '0.95rem', py: 2 }}
          />
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              backgroundColor: 'rgba(0, 35, 149, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 3,
            }}
          >
            <PublicIcon sx={{ fontSize: 40, color: 'primary.main' }} />
          </Box>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
            Interested in Collaborating?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            paragraph
            sx={{ mb: 3, maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}
          >
            We are always open to new partnerships and project collaborations. Join us in creating
            innovative educational projects that make a real difference across Europe.
          </Typography>
          
          {/* MOTIVATION: Show what they'll get */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 3,
              mb: 4,
              flexWrap: 'wrap',
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <CheckCircleIcon sx={{ fontSize: 32, color: 'success.main', mb: 0.5 }} />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>Proven Track Record</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <PeopleIcon sx={{ fontSize: 32, color: 'primary.main', mb: 0.5 }} />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>European Network</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <TrendingUpIcon sx={{ fontSize: 32, color: 'error.main', mb: 0.5 }} />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>Real Impact</Typography>
            </Box>
          </Box>

          {/* PROMPT: Clear, prominent CTAs */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ justifyContent: 'center' }}
          >
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 5,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 700,
                borderRadius: '25px',
                boxShadow: '0 4px 14px rgba(0, 35, 149, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 18px rgba(0, 35, 149, 0.4)',
                },
              }}
            >
              Start Collaboration
            </Button>
            <Button
              component={RouterLink}
              to="/partners"
              variant="outlined"
              color="primary"
              size="large"
              sx={{
                px: 5,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: '25px',
                borderWidth: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderWidth: 2,
                  transform: 'translateY(-2px)',
                },
              }}
            >
              View Our Partners
            </Button>
          </Stack>
          
          {/* ABILITY: Show simplicity */}
          <Typography
            variant="caption"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.5,
              mt: 3,
              color: 'text.secondary',
            }}
          >
            <CheckCircleIcon sx={{ fontSize: 16, color: 'success.main' }} />
            Free consultation • Easy process • Quick response
          </Typography>
        </Box>

        {/* MOTIVATION: Project highlights/featured */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 4, fontWeight: 800, color: '#0b1b3a' }}>
            Featured Success Stories
          </Typography>
          
          {/* Photo Strip - Achievement Gallery */}
          <Box
            sx={{
              mb: 6,
              display: 'flex',
              gap: 2,
              overflowX: 'auto',
              pb: 2,
              '&::-webkit-scrollbar': {
                height: 6,
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'rgba(0,0,0,0.05)',
                borderRadius: 3,
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0, 35, 149, 0.3)',
                borderRadius: 3,
                '&:hover': {
                  backgroundColor: 'rgba(0, 35, 149, 0.5)',
                },
              },
            }}
          >
            {[
              '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
              '/photos/572890197_1142845724690099_2859850866106109617_n.jpg',
              '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
              '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
              '/photos/573284472_1142846254690046_5985051112828208939_n.jpg',
              '/photos/583489432_1157911303183541_1292926580526900497_n.jpg',
            ].map((photo, idx) => (
              <Box
                key={idx}
                sx={{
                  position: 'relative',
                  minWidth: { xs: 120, sm: 150, md: 180 },
                  height: { xs: 80, sm: 100, md: 120 },
                  borderRadius: 2,
                  overflow: 'hidden',
                  flexShrink: 0,
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  filter: 'blur(2px) brightness(0.7)',
                  '&:hover': {
                    filter: 'blur(0px) brightness(1)',
                    transform: 'scale(1.1)',
                    zIndex: 2,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={photo}
                  alt={`Project success ${idx + 1}`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            ))}
          </Box>

          <Grid container spacing={4}>
            {[
              {
                title: 'Digital Senior Citizen',
                highlight: 'Most Successful Project',
                description: 'Reached over 200 seniors, improving their digital skills and quality of life.',
                icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
                color: '#002395',
                photo: '/photos/583489432_1157911303183541_1292926580526900497_n.jpg',
                quote: 'This project changed my perspective on technology',
                stats: '200+ seniors helped',
                statsIcon: <PeopleIcon />,
              },
              {
                title: 'Cultural Heritage for Youth',
                highlight: 'Innovation Award',
                description: 'Recognized for innovative approach to engaging youth with cultural heritage.',
                icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
                color: '#ED2939',
                photo: '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
                quote: 'We discovered our cultural identity through creative expression',
                stats: '100+ youth engaged',
                statsIcon: <PeopleIcon />,
              },
            ].map((story) => (
              <Grid size={{ xs: 12, md: 6 }} key={story.title}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 40px ${story.color}30`,
                      '& .story-photo': {
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                >
                  {/* Photo Section - Top Half */}
                  <Box
                    sx={{
                      position: 'relative',
                      height: { xs: 240, md: 280 },
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      component="img"
                      className="story-photo"
                      src={story.photo}
                      alt={story.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.9) saturate(1.1)',
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    />
                    {/* Gradient Overlay */}
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: `linear-gradient(180deg, ${story.color}80 0%, ${story.color}40 50%, transparent 100%)`,
                      }}
                    />
                    {/* Badge and Icon */}
                    <Box sx={{ position: 'absolute', top: 16, left: 16, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          backdropFilter: 'blur(10px)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                        }}
                      >
                        {story.icon}
                      </Box>
                      <Chip
                        label={story.highlight}
                        size="small"
                        sx={{
                          backgroundColor: story.color,
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '0.75rem',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                        }}
                      />
                    </Box>
                    {/* Stats Infographic on Photo */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 16,
                        right: 16,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        px: 2,
                        py: 1,
                        borderRadius: 3,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                      }}
                    >
                      <Box sx={{ color: story.color }}>{story.statsIcon}</Box>
                      <Typography variant="caption" sx={{ fontWeight: 700, color: story.color, fontSize: '0.8rem' }}>
                        {story.stats}
                      </Typography>
                    </Box>
                    {/* Title on Photo */}
                    <Typography
                      variant="h5"
                      sx={{
                        position: 'absolute',
                        bottom: 16,
                        left: 16,
                        right: 120,
                        color: 'white',
                        fontWeight: 800,
                        textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
                        lineHeight: 1.2,
                      }}
                    >
                      {story.title}
                    </Typography>
                  </Box>

                  {/* Content Section - Bottom Half with Color Background */}
                  <Box
                    sx={{
                      flexGrow: 1,
                      backgroundColor: story.color,
                      p: 3,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography variant="body1" sx={{ color: 'white', mb: 3, lineHeight: 1.7 }}>
                      {story.description}
                    </Typography>
                    
                    {/* Participant Quote */}
                    <Box
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(10px)',
                        p: 2,
                        borderRadius: 2,
                        mb: 3,
                        borderLeft: '3px solid white',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                        <FormatQuoteIcon sx={{ color: 'white', fontSize: 24, opacity: 0.8, mt: 0.5 }} />
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'white',
                            fontStyle: 'italic',
                            lineHeight: 1.6,
                            flex: 1,
                          }}
                        >
                          "{story.quote}"
                        </Typography>
                      </Box>
                    </Box>

                    {/* CTA Button */}
                    <Button
                      component={RouterLink}
                      to="/project-detail"
                      variant="contained"
                      size="medium"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        backgroundColor: 'white',
                        color: story.color,
                        fontWeight: 700,
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          transform: 'translateX(4px)',
                          '& .MuiButton-endIcon': {
                            transform: 'translateX(4px)',
                          },
                        },
                        '& .MuiButton-endIcon': {
                          transition: 'transform 0.3s ease',
                        },
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                      }}
                    >
                      View Project Details
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
