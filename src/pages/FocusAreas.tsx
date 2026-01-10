import React, { useState } from 'react';
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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link as RouterLink } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import PaletteIcon from '@mui/icons-material/Palette';
import ComputerIcon from '@mui/icons-material/Computer';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupsIcon from '@mui/icons-material/Groups';
import LanguageIcon from '@mui/icons-material/Language';
import PublicIcon from '@mui/icons-material/Public';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import BrushIcon from '@mui/icons-material/Brush';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ElderlyIcon from '@mui/icons-material/Elderly';
import PeopleIcon from '@mui/icons-material/People';
import WcIcon from '@mui/icons-material/Wc';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const focusAreas = [
  {
    id: 'intercultural',
    title: 'Intercultural Education',
    icon: <SchoolIcon sx={{ fontSize: 48 }} />,
    description:
      'Promoting inclusive education, cultural diversity, and social integration across communities.',
    impact: '500+ participants',
    projects: '8+ projects',
    color: '#002395',
    gradient: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 56, 214, 0.1) 100%)',
    benefits: [
      'Foster understanding between cultures',
      'Create inclusive learning spaces',
      'Promote social cohesion',
    ],
    subAreas: [
      { icon: <GroupsIcon />, title: 'Inclusive Education', description: 'Creating learning environments accessible to all' },
      { icon: <LanguageIcon />, title: 'Cultural Diversity', description: 'Celebrating and understanding different cultures' },
      { icon: <PublicIcon />, title: 'Social Integration', description: 'Building bridges between diverse communities' },
    ],
  },
  {
    id: 'media-arts',
    title: 'Media & Arts',
    icon: <PaletteIcon sx={{ fontSize: 48 }} />,
    description:
      'Fostering media literacy, arts education, and creative technologies for personal and professional development.',
    impact: '300+ participants',
    projects: '6+ projects',
    color: '#ED2939',
    gradient: 'linear-gradient(135deg, rgba(237, 41, 57, 0.1) 0%, rgba(201, 31, 47, 0.1) 100%)',
    benefits: [
      'Develop critical media thinking',
      'Express creativity through arts',
      'Learn creative technologies',
    ],
    subAreas: [
      { icon: <VideoLibraryIcon />, title: 'Media Literacy', description: 'Developing critical thinking about media content' },
      { icon: <BrushIcon />, title: 'Arts Education', description: 'Exploring creativity through various artistic forms' },
      { icon: <SmartphoneIcon />, title: 'Creative Technologies', description: 'Using technology as a tool for artistic expression' },
    ],
  },
  {
    id: 'digital',
    title: 'Digital Literacy',
    icon: <ComputerIcon sx={{ fontSize: 48 }} />,
    description:
      'Empowering individuals through digital skills training, especially for vulnerable groups.',
    impact: '800+ participants',
    projects: '10+ projects',
    color: '#0038d6',
    gradient: 'linear-gradient(135deg, rgba(0, 56, 214, 0.1) 0%, rgba(0, 35, 149, 0.1) 100%)',
    benefits: [
      'Bridge the digital divide',
      'Empower vulnerable groups',
      'Enhance employability',
    ],
    subAreas: [
      { icon: <ElderlyIcon />, title: 'Programs for Seniors 60+', description: 'Digital skills workshops for senior citizens' },
      { icon: <PeopleIcon />, title: 'Youth & NEETs', description: 'Digital training for young people and NEETs' },
      { icon: <GroupsIcon />, title: 'Migrants & Refugees', description: 'Digital inclusion programs for newcomers' },
      { icon: <WcIcon />, title: 'Women & Minorities', description: 'Empowering women and minorities through digital skills' },
    ],
  },
  {
    id: 'volunteering',
    title: 'Volunteering',
    icon: <VolunteerActivismIcon sx={{ fontSize: 48 }} />,
    description:
      'Building stronger communities through active volunteering and civic engagement.',
    impact: '200+ volunteers',
    projects: '5+ programs',
    color: '#c91f2f',
    gradient: 'linear-gradient(135deg, rgba(201, 31, 47, 0.1) 0%, rgba(237, 41, 57, 0.1) 100%)',
    benefits: [
      'Make a real community impact',
      'Develop new skills',
      'Build meaningful connections',
    ],
    subAreas: [
      { icon: <GroupsIcon />, title: 'Community Engagement', description: 'Connecting volunteers with community needs' },
      { icon: <PeopleIcon />, title: 'Skill Sharing', description: 'Volunteers sharing knowledge and expertise' },
      { icon: <PublicIcon />, title: 'Inclusive Volunteering', description: 'Opportunities for all community members' },
    ],
  },
  {
    id: 'adult-education',
    title: 'Adult Education',
    icon: <MenuBookIcon sx={{ fontSize: 48 }} />,
    description:
      'Providing lifelong learning opportunities for personal growth and professional development.',
    impact: '400+ learners',
    projects: '7+ courses',
    color: '#001a70',
    gradient: 'linear-gradient(135deg, rgba(0, 26, 112, 0.1) 0%, rgba(0, 35, 149, 0.1) 100%)',
    benefits: [
      'Lifelong learning opportunities',
      'Professional development',
      'Personal growth',
    ],
    subAreas: [
      { icon: <SchoolIcon />, title: 'Skills Development', description: 'Professional and personal skill building' },
      { icon: <LanguageIcon />, title: 'Language Learning', description: 'Language courses and cultural immersion' },
      { icon: <ComputerIcon />, title: 'Digital Skills', description: 'Technology training for adults' },
    ],
  },
];

export default function FocusAreas() {
  const [selectedTab, setSelectedTab] = useState<string | false>(false);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
    const element = document.getElementById(newValue);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
          <Grid container spacing={4} alignItems="center">
            {/* Left side: Text content */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={3} sx={{ alignItems: { xs: 'center', md: 'flex-start' } }}>
                {/* MOTIVATION: Emotional appeal and value proposition */}
                <Box sx={{ width: '100%' }}>
                  <Chip
                    icon={<EmojiEventsIcon />}
                    label="5 Focus Areas"
                    color="primary"
                    sx={{ mb: 2, fontWeight: 600, fontSize: '0.95rem', py: 2 }}
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
                      fontWeight: 700,
                    }}
                  >
                    Our Focus Areas
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
                    We work across five main areas to promote education, inclusion, and community empowerment.
                    Each area offers unique opportunities to make a difference and create positive change.
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
                    <Chip
                      icon={<CheckCircleIcon sx={{ color: 'success.main' }} />}
                      label="2200+ Participants"
                      sx={{
                        backgroundColor: 'rgba(76, 175, 80, 0.1)',
                        color: 'success.main',
                        fontWeight: 600,
                      }}
                    />
                    <Chip
                      icon={<TrendingUpIcon sx={{ color: 'primary.main' }} />}
                      label="36+ Active Projects"
                      sx={{
                        backgroundColor: 'rgba(0, 35, 149, 0.1)',
                        color: 'primary.main',
                        fontWeight: 600,
                      }}
                    />
                    <Chip
                      icon={<PublicIcon sx={{ color: 'error.main' }} />}
                      label="15+ Countries"
                      sx={{
                        backgroundColor: 'rgba(237, 41, 57, 0.1)',
                        color: 'error.main',
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                </Box>

                {/* ABILITY: Make it easy to navigate - Quick navigation tabs */}
                <Box sx={{ width: '100%' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: { xs: 'center', md: 'left' },
                      mb: 2,
                      color: 'text.secondary',
                      fontWeight: 500,
                    }}
                  >
                    Choose what interests you:
                  </Typography>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                      value={selectedTab}
                      onChange={handleTabChange}
                      variant="scrollable"
                      scrollButtons="auto"
                      sx={{
                        '& .MuiTab-root': {
                          textTransform: 'none',
                          fontWeight: 600,
                          minHeight: 64,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 35, 149, 0.05)',
                          },
                        },
                        '& .Mui-selected': {
                          color: 'primary.main',
                        },
                      }}
                    >
                      {focusAreas.map((area) => (
                        <Tab
                          key={area.id}
                          label={area.title}
                          value={area.id}
                          icon={React.cloneElement(area.icon, { sx: { fontSize: 24 } })}
                          iconPosition="top"
                        />
                      ))}
                    </Tabs>
                  </Box>
                </Box>

                {/* PROMPT: Clear call-to-action */}
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
                    Ready to Explore?
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Click on any focus area above or scroll down to learn more about each program
                  </Typography>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    <Button
                      component={RouterLink}
                      to="/projects"
                      variant="contained"
                      color="primary"
                      size="medium"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        px: 4,
                        py: 1.5,
                        fontWeight: 600,
                        borderRadius: '25px',
                        boxShadow: '0 4px 12px rgba(0, 35, 149, 0.3)',
                      }}
                    >
                      View All Projects
                    </Button>
                    <Button
                      component={RouterLink}
                      to="/contact"
                      variant="outlined"
                      color="primary"
                      size="medium"
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
                  Easy to explore • All information in one place • No registration needed
                </Typography>
              </Stack>
            </Grid>

            {/* Right side: Hero image */}
            <Grid size={{ xs: 12, md: 6 }}>
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
                  src="/focus-areas.jpg"
                  alt="MITRA FRANCE Focus Areas"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          {/* MOTIVATION: Overall impact stats with visual appeal - moved below split layout */}
          <Grid container spacing={3} sx={{ mt: 4, mb: 4 }}>
            {[
              { icon: <PeopleIcon />, label: 'Total Participants', value: '2200+', color: 'primary.main' },
              { icon: <EmojiEventsIcon />, label: 'Active Projects', value: '36+', color: 'error.main' },
              { icon: <TrendingUpIcon />, label: 'Success Rate', value: '95%', color: 'success.main' },
              { icon: <PublicIcon />, label: 'Countries Reached', value: '15+', color: 'info.main' },
            ].map((stat) => (
              <Grid size={{ xs: 6, sm: 3 }} key={stat.label}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    border: '2px solid',
                    borderColor: `${stat.color}30`,
                    backgroundColor: `${stat.color}08`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 6px 20px ${stat.color}30`,
                      borderColor: stat.color,
                    },
                  }}
                >
                  <Box sx={{ color: stat.color, mb: 1.5 }}>{stat.icon}</Box>
                  <Typography variant="h4" sx={{ color: stat.color, fontWeight: 700, mb: 0.5 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container>

        {focusAreas.map((area) => (
          <Box
            key={area.id}
            id={area.id}
            sx={{
              mb: 8,
              scrollMarginTop: '120px',
            }}
          >
            <Card
              sx={{
                background: area.gradient,
                borderLeft: `4px solid ${area.color}`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: `0 8px 25px ${area.color}20`,
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Grid container spacing={4} alignItems="flex-start">
                  <Grid size={{ xs: 12, md: 8 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexWrap: 'wrap' }}>
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: '12px',
                          backgroundColor: `${area.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: area.color,
                          mr: 2,
                          mb: { xs: 2, md: 0 },
                        }}
                      >
                        {area.icon}
                      </Box>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h3" sx={{ mb: 1, fontWeight: 600 }}>
                          {area.title}
                        </Typography>
                        {/* MOTIVATION: Impact stats */}
                        <Stack direction="row" spacing={2} flexWrap="wrap">
                          <Chip
                            icon={<PeopleIcon />}
                            label={area.impact}
                            size="small"
                            sx={{ backgroundColor: `${area.color}15`, color: area.color, fontWeight: 600 }}
                          />
                          <Chip
                            icon={<EmojiEventsIcon />}
                            label={area.projects}
                            size="small"
                            sx={{ backgroundColor: `${area.color}15`, color: area.color, fontWeight: 600 }}
                          />
                        </Stack>
                      </Box>
                    </Box>

                    <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                      {area.description}
                    </Typography>

                    {/* MOTIVATION: Key benefits */}
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                        Key Benefits:
                      </Typography>
                      <Stack spacing={1.5}>
                        {area.benefits.map((benefit) => (
                          <Box key={benefit} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <CheckCircleIcon
                              sx={{
                                color: area.color,
                                mr: 1.5,
                                mt: 0.5,
                                fontSize: 20,
                              }}
                            />
                            <Typography variant="body1">{benefit}</Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Box>

                    {/* PROMPT: Clear, prominent CTA with motivation */}
                    <Box
                      sx={{
                        mt: 4,
                        p: 2.5,
                        borderRadius: 2,
                        backgroundColor: `${area.color}08`,
                        border: `2px solid ${area.color}30`,
                      }}
                    >
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: area.color }}>
                        Ready to get involved?
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Explore our programs, join events, or contact us to learn more about this focus area.
                      </Typography>
                      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        {area.id === 'intercultural' ? (
                          <Button
                            component={RouterLink}
                            to="/intercultural-education"
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                              backgroundColor: area.color,
                              '&:hover': {
                                backgroundColor: area.color,
                                opacity: 0.9,
                                transform: 'translateY(-2px)',
                                boxShadow: `0 6px 16px ${area.color}40`,
                              },
                              px: 4,
                              py: 1.5,
                              fontWeight: 600,
                              borderRadius: '25px',
                              boxShadow: `0 4px 12px ${area.color}30`,
                              transition: 'all 0.3s ease',
                            }}
                          >
                            Learn More
                          </Button>
                        ) : (
                          <Button
                            component={RouterLink}
                            to="/projects"
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                              backgroundColor: area.color,
                              '&:hover': {
                                backgroundColor: area.color,
                                opacity: 0.9,
                                transform: 'translateY(-2px)',
                                boxShadow: `0 6px 16px ${area.color}40`,
                              },
                              px: 4,
                              py: 1.5,
                              fontWeight: 600,
                              borderRadius: '25px',
                              boxShadow: `0 4px 12px ${area.color}30`,
                              transition: 'all 0.3s ease',
                            }}
                          >
                            View Projects
                          </Button>
                        )}
                        <Button
                          component={RouterLink}
                          to={area.id === 'intercultural' ? '/intercultural-education' : '/events'}
                          variant="outlined"
                          sx={{
                            borderColor: area.color,
                            color: area.color,
                            borderWidth: 2,
                            '&:hover': {
                              borderWidth: 2,
                              borderColor: area.color,
                              backgroundColor: `${area.color}08`,
                              transform: 'translateY(-2px)',
                            },
                            px: 4,
                            py: 1.5,
                            fontWeight: 600,
                            borderRadius: '25px',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {area.id === 'intercultural' ? 'Explore Behavior Insights' : 'Join Events'}
                        </Button>
                      </Stack>
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12, md: 4 }}>
                    <Card
                      sx={{
                        backgroundColor: 'white',
                        border: `2px solid ${area.color}30`,
                        p: 3,
                        position: 'sticky',
                        top: 100,
                      }}
                    >
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                        What We Offer:
                      </Typography>
                      <Divider sx={{ mb: 2 }} />
                      <Stack spacing={2}>
                        {area.subAreas.map((subArea) => (
                          <Box
                            key={subArea.title}
                            sx={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              p: 2,
                              borderRadius: '8px',
                              transition: 'background 0.3s ease',
                              '&:hover': {
                                backgroundColor: `${area.color}08`,
                              },
                            }}
                          >
                            <Box
                              sx={{
                                color: area.color,
                                mr: 1.5,
                                mt: 0.5,
                              }}
                            >
                              {subArea.icon}
                            </Box>
                            <Box>
                              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                                {subArea.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {subArea.description}
                              </Typography>
                            </Box>
                          </Box>
                        ))}
                      </Stack>
                    </Card>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        ))}

        {/* BJ FOGG MODEL: PROMPT - Final strong CTA with motivation */}
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
            label="Join Our Community"
            color="primary"
            sx={{ mb: 2, fontWeight: 600, fontSize: '0.95rem', py: 2 }}
          />
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
            Ready to Get Involved?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: '600px', mx: 'auto', fontSize: '1.1rem' }}>
            Choose a focus area that interests you and start making a difference today. We offer
            various opportunities to get involved, from workshops to full programs.
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
              <Typography variant="body2" sx={{ fontWeight: 600 }}>Free Access</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <PeopleIcon sx={{ fontSize: 32, color: 'primary.main', mb: 0.5 }} />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>Community Support</Typography>
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
              Contact Us
            </Button>
            <Button
              component={RouterLink}
              to="/events"
              variant="outlined"
              color="error"
              size="large"
              sx={{
                px: 5,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: '25px',
                borderWidth: 2,
                borderColor: '#ED2939',
                color: '#ED2939',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderWidth: 2,
                  borderColor: '#c91f2f',
                  backgroundColor: 'rgba(237, 41, 57, 0.04)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              View Events
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
            No commitment required • Easy to join • Instant access
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
