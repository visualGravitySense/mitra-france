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
import HandshakeIcon from '@mui/icons-material/Handshake';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WorkIcon from '@mui/icons-material/Work';
import TabletIcon from '@mui/icons-material/Tablet';
import CodeIcon from '@mui/icons-material/Code';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { cloneElement } from 'react';

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
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
    const element = document.getElementById(newValue);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Photo mapping for focus areas
  const areaPhotos = {
    intercultural: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg', // Cultural Exchange - people with flags
    'media-arts': '/photos/571419367_1143811194593552_6930038688628840775_n.jpg', // Creative Pursuits - creative process
    digital: '/photos/583114332_1157911793183492_7408427246397976881_n.jpg', // Education - student with tablet
    volunteering: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg', // Community Service - volunteers
    'adult-education': '/photos/583489432_1157911303183541_1292926580526900497_n.jpg', // Lifelong Learning - senior learning
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
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -8,
                        left: { xs: '50%', md: 0 },
                        transform: { xs: 'translateX(-50%)', md: 'none' },
                        width: '80px',
                        height: '3px',
                        background: '#ED2939',
                        borderRadius: '2px',
                      },
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
                        backgroundColor: 'rgba(76, 175, 80, 0.15)',
                        color: 'success.main',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        py: 2.5,
                        boxShadow: '0 2px 8px rgba(76, 175, 80, 0.2)',
                        border: '1px solid rgba(76, 175, 80, 0.3)',
                      }}
                    />
                    <Chip
                      icon={<TrendingUpIcon sx={{ color: 'primary.main' }} />}
                      label="36+ Active Projects"
                      sx={{
                        backgroundColor: 'rgba(0, 35, 149, 0.15)',
                        color: 'primary.main',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        py: 2.5,
                        boxShadow: '0 2px 8px rgba(0, 35, 149, 0.2)',
                        border: '1px solid rgba(0, 35, 149, 0.3)',
                      }}
                    />
                    <Chip
                      icon={<PublicIcon sx={{ color: 'error.main' }} />}
                      label="15+ Countries"
                      sx={{
                        backgroundColor: 'rgba(237, 41, 57, 0.15)',
                        color: 'error.main',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        py: 2.5,
                        boxShadow: '0 2px 8px rgba(237, 41, 57, 0.2)',
                        border: '1px solid rgba(237, 41, 57, 0.3)',
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
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 2,
                      flexWrap: 'wrap',
                      justifyContent: { xs: 'center', md: 'flex-start' },
                    }}
                  >
                    {focusAreas.map((area) => (
                      <Card
                        key={area.id}
                        onMouseEnter={() => setHoveredArea(area.id)}
                        onMouseLeave={() => setHoveredArea(null)}
                        onClick={() => handleTabChange(null as any, area.id)}
                        sx={{
                          position: 'relative',
                          width: { xs: 'calc(50% - 8px)', sm: 140, md: 160 },
                          height: 140,
                          borderRadius: '50%',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          border: `3px solid ${selectedTab === area.id ? area.color : 'transparent'}`,
                          boxShadow: selectedTab === area.id
                            ? `0 8px 24px ${area.color}40`
                            : hoveredArea === area.id
                            ? `0 6px 20px ${area.color}30`
                            : '0 2px 8px rgba(0,0,0,0.1)',
                          transform: hoveredArea === area.id || selectedTab === area.id ? 'scale(1.1) translateY(-4px)' : 'scale(1)',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `linear-gradient(135deg, ${area.color}40 0%, ${area.color}60 100%)`,
                            zIndex: 1,
                            opacity: hoveredArea === area.id || selectedTab === area.id ? 0.7 : 0.5,
                            transition: 'opacity 0.3s ease',
                          },
                        }}
                      >
                        <Box
                          component="img"
                          src={areaPhotos[area.id as keyof typeof areaPhotos]}
                          alt={area.title}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'brightness(0.85) saturate(1.1)',
                            transition: 'transform 0.4s ease, filter 0.3s ease',
                            transform: hoveredArea === area.id || selectedTab === area.id ? 'scale(1.15)' : 'scale(1)',
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 2,
                            textAlign: 'center',
                            color: 'white',
                            width: '100%',
                          }}
                        >
                          <Box
                            sx={{
                              mb: 0.5,
                              display: 'flex',
                              justifyContent: 'center',
                              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                            }}
                          >
                            {cloneElement(area.icon, { sx: { fontSize: 32, color: 'white' } })}
                          </Box>
                          <Typography
                            variant="caption"
                            sx={{
                              fontWeight: 700,
                              fontSize: '0.7rem',
                              textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                              px: 1,
                              display: 'block',
                            }}
                          >
                            {area.title.split(' ')[0]}
                          </Typography>
                        </Box>
                      </Card>
                    ))}
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

            {/* Right side: Interactive Photo Collage */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: '500px', md: '650px' },
                  borderRadius: 4,
                  overflow: 'visible',
                }}
              >
                {/* Interactive Photo Collage - 5 organic blobs */}
                {[
                  {
                    id: 'intercultural',
                    photo: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
                    label: 'Cultural Exchange',
                    position: { top: '5%', left: '10%', width: '35%', height: '30%' },
                    color: '#002395',
                  },
                  {
                    id: 'media-arts',
                    photo: '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
                    label: 'Creative Pursuits',
                    position: { top: '15%', right: '5%', width: '40%', height: '35%' },
                    color: '#ED2939',
                  },
                  {
                    id: 'volunteering',
                    photo: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
                    label: 'Community Service',
                    position: { bottom: '25%', left: '5%', width: '38%', height: '32%' },
                    color: '#c91f2f',
                  },
                  {
                    id: 'digital',
                    photo: '/photos/583114332_1157911793183492_7408427246397976881_n.jpg',
                    label: 'Education',
                    position: { top: '50%', right: '10%', width: '35%', height: '28%' },
                    color: '#0038d6',
                  },
                  {
                    id: 'adult-education',
                    photo: '/photos/583489432_1157911303183541_1292926580526900497_n.jpg',
                    label: 'Lifelong Learning',
                    position: { bottom: '5%', right: '15%', width: '32%', height: '30%' },
                    color: '#001a70',
                  },
                ].map((blob) => (
                  <Box
                    key={blob.id}
                    onMouseEnter={() => setHoveredArea(blob.id)}
                    onMouseLeave={() => setHoveredArea(null)}
                    sx={{
                      position: 'absolute',
                      ...blob.position,
                      borderRadius: '50% 40% 60% 30% / 50% 60% 40% 50%',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      zIndex: hoveredArea === blob.id ? 10 : 1,
                      transform: hoveredArea === blob.id ? 'scale(1.25) translateZ(0)' : 'scale(1)',
                      boxShadow: hoveredArea === blob.id
                        ? `0 12px 40px ${blob.color}50`
                        : '0 4px 16px rgba(0,0,0,0.2)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(135deg, ${blob.color}60 0%, ${blob.color}80 100%)`,
                        zIndex: 1,
                        opacity: hoveredArea === blob.id ? 0.4 : 0.6,
                        transition: 'opacity 0.3s ease',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={blob.photo}
                      alt={blob.label}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.9) saturate(1.1)',
                        transition: 'transform 0.5s ease, filter 0.3s ease',
                        transform: hoveredArea === blob.id ? 'scale(1.1)' : 'scale(1)',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: `linear-gradient(to top, ${blob.color} 0%, transparent 100%)`,
                        zIndex: 2,
                        p: 1.5,
                        opacity: hoveredArea === blob.id ? 1 : 0.8,
                        transition: 'opacity 0.3s ease',
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '0.75rem',
                          textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                          display: 'block',
                        }}
                      >
                        {blob.label}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>

          {/* MOTIVATION: Overall impact stats with visual appeal - moved below split layout */}
          <Grid container spacing={3} sx={{ mt: 4, mb: 4 }}>
            {[
              {
                icon: <PeopleIcon />,
                label: 'Total Participants',
                value: '2200+',
                color: '#002395',
                bgPhoto: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg', // Large group event
              },
              {
                icon: <EmojiEventsIcon />,
                label: 'Active Projects',
                value: '36+',
                color: '#ED2939',
                bgPhoto: '/photos/572890197_1142845724690099_2859850866106109617_n.jpg', // Project activity
              },
              {
                icon: <TrendingUpIcon />,
                label: 'Success Rate',
                value: '95%',
                color: '#4caf50',
                bgPhoto: '/photos/574604314_1146960820945256_3308026953512837589_n.jpg', // Success/achievement
              },
              {
                icon: <PublicIcon />,
                label: 'Countries Reached',
                value: '15+',
                color: '#0038d6',
                bgPhoto: '/photos/583741041_1157902773184394_5619801435922057517_n.jpg', // International/Europe
              },
            ].map((stat) => (
              <Grid size={{ xs: 6, sm: 3 }} key={stat.label}>
                <Card
                  sx={{
                    position: 'relative',
                    textAlign: 'center',
                    p: 3,
                    minHeight: 180,
                    overflow: 'hidden',
                    border: '2px solid',
                    borderColor: `${stat.color}40`,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: `0 12px 32px ${stat.color}40`,
                      borderColor: stat.color,
                      '& .stat-bg': {
                        transform: 'scale(1.15)',
                        filter: 'brightness(0.4) blur(2px)',
                      },
                      '& .stat-content': {
                        transform: 'scale(1.05)',
                      },
                    },
                  }}
                >
                  {/* Background image with overlay */}
                  <Box
                    className="stat-bg"
                    component="img"
                    src={stat.bgPhoto}
                    alt={stat.label}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.3) blur(3px) saturate(1.2)',
                      transition: 'all 0.4s ease',
                      zIndex: 0,
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, ${stat.color}80 0%, ${stat.color}95 100%)`,
                      zIndex: 1,
                    }}
                  />
                  {/* Content */}
                  <Box
                    className="stat-content"
                    sx={{
                      position: 'relative',
                      zIndex: 2,
                      transition: 'transform 0.4s ease',
                    }}
                  >
                    <Box sx={{ color: 'white', mb: 1.5, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
                      {stat.icon}
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{
                        color: 'white',
                        fontWeight: 800,
                        mb: 0.5,
                        textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        textShadow: '0 1px 4px rgba(0,0,0,0.5)',
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
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
              <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                {area.id === 'intercultural' ? (
                  // Special Media-First layout for Intercultural Education
                  <>
                    {/* Header with stats */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 5, flexWrap: 'wrap' }}>
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
                        <Typography variant="h3" sx={{ mb: 2, fontWeight: 700, color: '#0b1b3a' }}>
                          {area.title}
                        </Typography>
                        {/* Enhanced stats badges with brand colors */}
                        <Stack direction="row" spacing={2} flexWrap="wrap">
                          <Chip
                            icon={<PeopleIcon />}
                            label={area.impact}
                            size="medium"
                            sx={{
                              backgroundColor: '#002395',
                              color: 'white',
                              fontWeight: 700,
                              fontSize: '0.9rem',
                              py: 2.5,
                              boxShadow: '0 2px 8px rgba(0, 35, 149, 0.3)',
                            }}
                          />
                          <Chip
                            icon={<EmojiEventsIcon />}
                            label={area.projects}
                            size="medium"
                            sx={{
                              backgroundColor: '#ED2939',
                              color: 'white',
                              fontWeight: 700,
                              fontSize: '0.9rem',
                              py: 2.5,
                              boxShadow: '0 2px 8px rgba(237, 41, 57, 0.3)',
                            }}
                          />
                        </Stack>
                      </Box>
                    </Box>

                    {/* Media-First Layout: 60/40 split */}
                    <Grid container spacing={5} sx={{ mb: 5 }}>
                      {/* Left: Photo Collage (60%) */}
                      <Grid size={{ xs: 12, md: 7 }}>
                        <Box
                          sx={{
                            position: 'relative',
                            width: '100%',
                            height: { xs: '400px', md: '500px' },
                            borderRadius: 4,
                            overflow: 'hidden',
                          }}
                        >
                          {/* Photo 1: Group workshop - Main large photo */}
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '65%',
                              height: '70%',
                              borderRadius: '12px 0 0 0',
                              overflow: 'hidden',
                              zIndex: 3,
                              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                            }}
                          >
                            <Box
                              component="img"
                              src="/photos/583924019_1157903166517688_8756873269993443102_n.jpg"
                              alt="Youth workshop"
                              sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.9) saturate(1.1)',
                              }}
                            />
                          </Box>
                          {/* Photo 2: Discussion/communication - Overlapping */}
                          <Box
                            sx={{
                              position: 'absolute',
                              top: '15%',
                              right: 0,
                              width: '50%',
                              height: '55%',
                              borderRadius: '0 12px 0 0',
                              overflow: 'hidden',
                              zIndex: 2,
                              boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                              transform: 'rotate(-2deg)',
                            }}
                          >
                            <Box
                              component="img"
                              src="/photos/571419367_1143811194593552_6930038688628840775_n.jpg"
                              alt="Cultural discussion"
                              sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.9) saturate(1.1)',
                              }}
                            />
                          </Box>
                          {/* Photo 3: Group photo with cultural landmark - Bottom */}
                          <Box
                            sx={{
                              position: 'absolute',
                              bottom: 0,
                              left: '20%',
                              width: '60%',
                              height: '35%',
                              borderRadius: '0 0 12px 12px',
                              overflow: 'hidden',
                              zIndex: 1,
                              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                              transform: 'rotate(1deg)',
                            }}
                          >
                            <Box
                              component="img"
                              src="/photos/572851437_1143811217926883_7725194936764095335_n.jpg"
                              alt="Group cultural event"
                              sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.9) saturate(1.1)',
                              }}
                            />
                          </Box>
                        </Box>
                      </Grid>

                      {/* Right: Content (40%) */}
                      <Grid size={{ xs: 12, md: 5 }}>
                        <Box sx={{ pl: { xs: 0, md: 2 } }}>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{
                              fontSize: '1.15rem',
                              lineHeight: 1.9,
                              mb: 4,
                              color: '#0b1b3a',
                              fontWeight: 400,
                            }}
                          >
                            {area.description}
                          </Typography>

                          {/* Key Benefits with modern icons */}
                          <Box sx={{ mb: 4 }}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mb: 3, color: '#0b1b3a' }}>
                              Key Benefits:
                            </Typography>
                            <Stack spacing={2.5}>
                              {[
                                { benefit: area.benefits[0], icon: <HandshakeIcon /> },
                                { benefit: area.benefits[1], icon: <Diversity3Icon /> },
                                { benefit: area.benefits[2], icon: <ConnectWithoutContactIcon /> },
                              ].map((item, idx) => (
                                <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                  <Box
                                    sx={{
                                      backgroundColor: area.color,
                                      color: 'white',
                                      borderRadius: '50%',
                                      width: 40,
                                      height: 40,
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      mr: 2,
                                      flexShrink: 0,
                                      boxShadow: `0 4px 12px ${area.color}40`,
                                    }}
                                  >
                                    {item.icon}
                                  </Box>
                                  <Typography
                                    variant="body1"
                                    sx={{
                                      color: '#0b1b3a',
                                      fontWeight: 500,
                                      fontSize: '1.05rem',
                                      pt: 0.5,
                                    }}
                                  >
                                    {item.benefit}
                                  </Typography>
                                </Box>
                              ))}
                            </Stack>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>

                    {/* What We Offer - Visualized with background images */}
                    <Box sx={{ mb: 5 }}>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 3, color: '#0b1b3a' }}>
                        What We Offer:
                      </Typography>
                      <Grid container spacing={3}>
                        {[
                          {
                            subArea: area.subAreas[0],
                            photo: '/photos/583114332_1157911793183492_7408427246397976881_n.jpg',
                          },
                          {
                            subArea: area.subAreas[1],
                            photo: '/photos/583741041_1157902773184394_5619801435922057517_n.jpg',
                          },
                          {
                            subArea: area.subAreas[2],
                            photo: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
                          },
                        ].map((item, idx) => (
                          <Grid size={{ xs: 12, sm: 4 }} key={idx}>
                            <Card
                              sx={{
                                position: 'relative',
                                height: 200,
                                overflow: 'hidden',
                                borderRadius: 3,
                                cursor: 'pointer',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                '&:hover': {
                                  transform: 'translateY(-8px)',
                                  boxShadow: `0 12px 32px ${area.color}40`,
                                  '& .offer-bg': {
                                    transform: 'scale(1.1)',
                                    filter: 'brightness(0.5) blur(0px)',
                                  },
                                  '& .offer-content': {
                                    transform: 'translateY(-8px)',
                                  },
                                },
                              }}
                            >
                              {/* Background image */}
                              <Box
                                className="offer-bg"
                                component="img"
                                src={item.photo}
                                alt={item.subArea.title}
                                sx={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover',
                                  filter: 'brightness(0.4) blur(2px) saturate(1.2)',
                                  transition: 'all 0.4s ease',
                                }}
                              />
                              {/* Overlay */}
                              <Box
                                sx={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  background: `linear-gradient(135deg, ${area.color}80 0%, ${area.color}95 100%)`,
                                }}
                              />
                              {/* Content */}
                              <Box
                                className="offer-content"
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
                                <Box sx={{ color: 'white', mb: 2, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
                                  {item.subArea.icon}
                                </Box>
                                <Box>
                                  <Typography
                                    variant="subtitle1"
                                    sx={{
                                      fontWeight: 700,
                                      mb: 1,
                                      color: 'white',
                                      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                                    }}
                                  >
                                    {item.subArea.title}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    sx={{
                                      color: 'white',
                                      textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                                      lineHeight: 1.6,
                                    }}
                                  >
                                    {item.subArea.description}
                                  </Typography>
                                </Box>
                              </Box>
                            </Card>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>

                    {/* CTA with full-screen atmospheric photo */}
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        minHeight: { xs: '400px', md: '500px' },
                        borderRadius: 4,
                        overflow: 'hidden',
                        mt: 5,
                        mb: 2,
                      }}
                    >
                      {/* Background photo with parallax effect */}
                      <Box
                        component="img"
                        src="/photos/584326681_1157904053184266_2071216266526493174_n.jpg"
                        alt="Community engagement"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '120%',
                          objectFit: 'cover',
                          filter: 'brightness(0.5) saturate(1.1)',
                          transform: 'translateY(0)',
                          transition: 'transform 0.6s ease-out',
                          '&:hover': {
                            transform: 'translateY(-5%)',
                          },
                        }}
                      />
                      {/* Dark overlay */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.75) 0%, rgba(237, 41, 57, 0.75) 100%)',
                        }}
                      />
                      {/* Content centered */}
                      <Box
                        sx={{
                          position: 'relative',
                          height: '100%',
                          minHeight: { xs: '400px', md: '500px' },
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          p: 5,
                          textAlign: 'center',
                          zIndex: 2,
                        }}
                      >
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 800,
                            mb: 2,
                            color: 'white',
                            textShadow: '0 4px 12px rgba(0,0,0,0.5)',
                          }}
                        >
                          Ready to get involved?
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            mb: 4,
                            color: 'white',
                            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                            maxWidth: '600px',
                            fontWeight: 400,
                          }}
                        >
                          Explore our programs, join events, or contact us to learn more about this focus area.
                        </Typography>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                          <Button
                            component={RouterLink}
                            to="/intercultural-education"
                            variant="contained"
                            size="large"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                              backgroundColor: '#002395',
                              color: 'white',
                              '&:hover': {
                                backgroundColor: '#0038d6',
                                transform: 'translateY(-4px)',
                                boxShadow: '0 8px 24px rgba(0, 35, 149, 0.5)',
                              },
                              px: 5,
                              py: 2,
                              fontWeight: 700,
                              fontSize: '1.1rem',
                              borderRadius: '30px',
                              boxShadow: '0 4px 16px rgba(0, 35, 149, 0.4)',
                              transition: 'all 0.3s ease',
                            }}
                          >
                            Learn More
                          </Button>
                          <Button
                            component={RouterLink}
                            to="/intercultural-education"
                            variant="outlined"
                            size="large"
                            sx={{
                              borderColor: 'white',
                              color: 'white',
                              borderWidth: 3,
                              '&:hover': {
                                borderWidth: 3,
                                borderColor: 'white',
                                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                transform: 'translateY(-4px)',
                              },
                              px: 5,
                              py: 2,
                              fontWeight: 700,
                              fontSize: '1.1rem',
                              borderRadius: '30px',
                              transition: 'all 0.3s ease',
                            }}
                          >
                            Explore Behavior Insights
                          </Button>
                        </Stack>
                      </Box>
                    </Box>
                  </>
                ) : area.id === 'media-arts' ? (
                  // Special Creative Gallery layout for Media & Arts
                  <>
                    {/* Header with enhanced stats badges */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 5, flexWrap: 'wrap' }}>
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
                        <Typography variant="h3" sx={{ mb: 2, fontWeight: 700, color: '#0b1b3a' }}>
                          {area.title}
                        </Typography>
                        {/* Enhanced stats badges with French Red gradient */}
                        <Stack direction="row" spacing={2} flexWrap="wrap">
                          <Chip
                            icon={<PeopleIcon />}
                            label={area.impact}
                            size="medium"
                            sx={{
                              background: 'linear-gradient(135deg, #ED2939 0%, #c91f2f 100%)',
                              color: 'white',
                              fontWeight: 700,
                              fontSize: '0.9rem',
                              py: 2.5,
                              boxShadow: '0 4px 12px rgba(237, 41, 57, 0.4)',
                            }}
                          />
                          <Chip
                            icon={<EmojiEventsIcon />}
                            label={area.projects}
                            size="medium"
                            sx={{
                              background: 'linear-gradient(135deg, #ED2939 0%, #c91f2f 100%)',
                              color: 'white',
                              fontWeight: 700,
                              fontSize: '0.9rem',
                              py: 2.5,
                              boxShadow: '0 4px 12px rgba(237, 41, 57, 0.4)',
                            }}
                          />
                        </Stack>
                      </Box>
                    </Box>

                    {/* Creative Gallery Layout: Asymmetric grid with torn edges */}
                    <Grid container spacing={4} sx={{ mb: 5 }}>
                      {/* Left: Creative Photo Collage (60%) */}
                      <Grid size={{ xs: 12, md: 7 }}>
                        <Box
                          sx={{
                            position: 'relative',
                            width: '100%',
                            height: { xs: '450px', md: '550px' },
                            borderRadius: 4,
                            overflow: 'visible',
                          }}
                        >
                          {/* Main featured photo with video preview */}
                          <Box
                            sx={{
                              position: 'relative',
                              width: '100%',
                              height: '65%',
                              borderRadius: '16px 16px 0 0',
                              overflow: 'hidden',
                              mb: 2,
                              boxShadow: '0 8px 24px rgba(237, 41, 57, 0.2)',
                              clipPath: 'polygon(0 0, 100% 0, 100% 95%, 98% 100%, 0 100%)',
                            }}
                          >
                            <Box
                              component="img"
                              src="/photos/571419367_1143811194593552_6930038688628840775_n.jpg"
                              alt="Creative workshop"
                              className="main-media-photo"
                              sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.9) saturate(1.2)',
                                transition: 'all 0.5s ease',
                              }}
                            />
                            {/* Video preview overlay with Play button */}
                            <Box
                              sx={{
                                position: 'absolute',
                                bottom: 16,
                                right: 16,
                                zIndex: 3,
                              }}
                            >
                              <Button
                                variant="contained"
                                startIcon={<PlayArrowIcon />}
                                sx={{
                                  backgroundColor: '#ED2939',
                                  color: 'white',
                                  borderRadius: '50px',
                                  px: 3,
                                  py: 1.5,
                                  fontWeight: 700,
                                  boxShadow: '0 4px 16px rgba(237, 41, 57, 0.5)',
                                  '&:hover': {
                                    backgroundColor: '#c91f2f',
                                    transform: 'scale(1.1)',
                                    boxShadow: '0 6px 20px rgba(237, 41, 57, 0.6)',
                                  },
                                  transition: 'all 0.3s ease',
                                }}
                              >
                                Watch Showreel
                              </Button>
                            </Box>
                          </Box>

                          {/* Secondary photos grid with torn edges */}
                          <Grid container spacing={2}>
                            <Grid size={{ xs: 6 }}>
                              <Box
                                sx={{
                                  position: 'relative',
                                  width: '100%',
                                  height: { xs: '140px', md: '180px' },
                                  borderRadius: 2,
                                  overflow: 'hidden',
                                  boxShadow: '0 4px 16px rgba(237, 41, 57, 0.15)',
                                  clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 5% 100%)',
                                }}
                              >
                                <Box
                                  component="img"
                                  src="/photos/572890197_1142845724690099_2859850866106109617_n.jpg"
                                  alt="Art exhibition"
                                  sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'brightness(0.9) saturate(1.1)',
                                  }}
                                />
                              </Box>
                            </Grid>
                            <Grid size={{ xs: 6 }}>
                              <Box
                                sx={{
                                  position: 'relative',
                                  width: '100%',
                                  height: { xs: '140px', md: '180px' },
                                  borderRadius: 2,
                                  overflow: 'hidden',
                                  boxShadow: '0 4px 16px rgba(237, 41, 57, 0.15)',
                                  clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)',
                                }}
                              >
                                <Box
                                  component="img"
                                  src="/photos/574604314_1146960820945256_3308026953512837589_n.jpg"
                                  alt="Digital content creation"
                                  sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'brightness(0.9) saturate(1.1)',
                                  }}
                                />
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Grid>

                      {/* Right: Content (40%) */}
                      <Grid size={{ xs: 12, md: 5 }}>
                        <Box sx={{ pl: { xs: 0, md: 2 } }}>
                          {/* Description with white background for readability */}
                          <Box
                            sx={{
                              backgroundColor: 'white',
                              p: 3,
                              borderRadius: 3,
                              mb: 4,
                              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                            }}
                          >
                            <Typography
                              variant="body1"
                              sx={{
                                fontSize: '1.15rem',
                                lineHeight: 1.9,
                                color: '#0b1b3a',
                                fontWeight: 400,
                              }}
                            >
                              {area.description}
                            </Typography>
                          </Box>

                          {/* Key Benefits */}
                          <Box sx={{ mb: 4 }}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mb: 3, color: '#0b1b3a' }}>
                              Key Benefits:
                            </Typography>
                            <Stack spacing={2.5}>
                              {area.benefits.map((benefit, idx) => (
                                <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                  <Box
                                    sx={{
                                      backgroundColor: area.color,
                                      color: 'white',
                                      borderRadius: '50%',
                                      width: 40,
                                      height: 40,
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      mr: 2,
                                      flexShrink: 0,
                                      boxShadow: `0 4px 12px ${area.color}40`,
                                    }}
                                  >
                                    <CheckCircleIcon />
                                  </Box>
                                  <Typography
                                    variant="body1"
                                    sx={{
                                      color: '#0b1b3a',
                                      fontWeight: 500,
                                      fontSize: '1.05rem',
                                      pt: 0.5,
                                    }}
                                  >
                                    {benefit}
                                  </Typography>
                                </Box>
                              ))}
                            </Stack>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>

                    {/* What We Offer - Interactive preview cards */}
                    <Box sx={{ mb: 5 }}>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 3, color: '#0b1b3a' }}>
                        What We Offer:
                      </Typography>
                      <Grid container spacing={3}>
                        {[
                          {
                            subArea: area.subAreas[0],
                            photo: '/photos/583114332_1157911793183492_7408427246397976881_n.jpg',
                            hoverPhoto: '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
                          },
                          {
                            subArea: area.subAreas[1],
                            photo: '/photos/572890197_1142845724690099_2859850866106109617_n.jpg',
                            hoverPhoto: '/photos/574604314_1146960820945256_3308026953512837589_n.jpg',
                          },
                          {
                            subArea: area.subAreas[2],
                            photo: '/photos/574604314_1146960820945256_3308026953512837589_n.jpg',
                            hoverPhoto: '/photos/583114332_1157911793183492_7408427246397976881_n.jpg',
                          },
                        ].map((item, idx) => (
                          <Grid size={{ xs: 12, sm: 4 }} key={idx}>
                            <Card
                              onMouseEnter={() => {
                                const mainPhoto = document.querySelector('.main-media-photo');
                                if (mainPhoto) {
                                  (mainPhoto as HTMLImageElement).src = item.hoverPhoto;
                                }
                              }}
                              onMouseLeave={() => {
                                const mainPhoto = document.querySelector('.main-media-photo');
                                if (mainPhoto) {
                                  (mainPhoto as HTMLImageElement).src = '/photos/571419367_1143811194593552_6930038688628840775_n.jpg';
                                }
                              }}
                              sx={{
                                position: 'relative',
                                height: 220,
                                overflow: 'hidden',
                                borderRadius: 3,
                                cursor: 'pointer',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                '&:hover': {
                                  transform: 'translateY(-8px)',
                                  boxShadow: `0 12px 32px ${area.color}40`,
                                  '& .offer-bg': {
                                    transform: 'scale(1.1)',
                                    filter: 'brightness(0.5) blur(0px)',
                                  },
                                  '& .offer-content': {
                                    transform: 'translateY(-8px)',
                                  },
                                },
                              }}
                            >
                              {/* Background image */}
                              <Box
                                className="offer-bg"
                                component="img"
                                src={item.photo}
                                alt={item.subArea.title}
                                sx={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover',
                                  filter: 'brightness(0.4) blur(2px) saturate(1.2)',
                                  transition: 'all 0.4s ease',
                                }}
                              />
                              {/* Overlay */}
                              <Box
                                sx={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  background: `linear-gradient(135deg, ${area.color}80 0%, ${area.color}95 100%)`,
                                }}
                              />
                              {/* Content */}
                              <Box
                                className="offer-content"
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
                                <Box sx={{ color: 'white', mb: 2, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
                                  {item.subArea.icon}
                                </Box>
                                <Box>
                                  <Typography
                                    variant="subtitle1"
                                    sx={{
                                      fontWeight: 700,
                                      mb: 1,
                                      color: 'white',
                                      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                                    }}
                                  >
                                    {item.subArea.title}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    sx={{
                                      color: 'white',
                                      textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                                      lineHeight: 1.6,
                                    }}
                                  >
                                    {item.subArea.description}
                                  </Typography>
                                </Box>
                              </Box>
                            </Card>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>

                    {/* CTA with enhanced button animation */}
                    <Box
                      sx={{
                        mt: 5,
                        p: 4,
                        borderRadius: 3,
                        backgroundColor: 'white',
                        border: `3px solid ${area.color}`,
                        boxShadow: `0 4px 16px ${area.color}20`,
                      }}
                    >
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: area.color }}>
                        Ready to get involved?
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        Explore our programs, join events, or contact us to learn more about this focus area.
                      </Typography>
                      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <Button
                          component={RouterLink}
                          to="/projects"
                          variant="contained"
                          size="large"
                          endIcon={<ArrowForwardIcon />}
                          sx={{
                            backgroundColor: area.color,
                            color: 'white',
                            '&:hover': {
                              backgroundColor: '#c91f2f',
                              transform: 'translateY(-4px)',
                              boxShadow: `0 8px 24px ${area.color}50`,
                              '& .MuiButton-endIcon': {
                                transform: 'translateX(4px)',
                              },
                            },
                            px: 5,
                            py: 2,
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            borderRadius: '30px',
                            boxShadow: `0 4px 16px ${area.color}40`,
                            transition: 'all 0.3s ease',
                            '& .MuiButton-endIcon': {
                              transition: 'transform 0.3s ease',
                            },
                          }}
                        >
                          View Projects
                        </Button>
                        <Button
                          component={RouterLink}
                          to="/events"
                          variant="outlined"
                          size="large"
                          sx={{
                            borderColor: area.color,
                            color: area.color,
                            borderWidth: 3,
                            '&:hover': {
                              borderWidth: 3,
                              borderColor: area.color,
                              backgroundColor: `${area.color}08`,
                              transform: 'translateY(-4px)',
                            },
                            px: 5,
                            py: 2,
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            borderRadius: '30px',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          Join Events
                        </Button>
                      </Stack>
                    </Box>
                  </>
                ) : area.id === 'digital' ? (
                  // Special Tech Center layout for Digital Literacy
                  <>
                    {/* Header with enhanced stats badges */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 5, flexWrap: 'wrap' }}>
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: '12px',
                          backgroundColor: `${area.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#002395',
                          mr: 2,
                          mb: { xs: 2, md: 0 },
                        }}
                      >
                        {area.icon}
                      </Box>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h3" sx={{ mb: 2, fontWeight: 700, color: '#002395' }}>
                          {area.title}
                        </Typography>
                        {/* Enhanced stats badges with French Blue */}
                        <Stack direction="row" spacing={2} flexWrap="wrap">
                          <Chip
                            icon={<PeopleIcon />}
                            label={area.impact}
                            size="medium"
                            sx={{
                              backgroundColor: '#002395',
                              color: 'white',
                              fontWeight: 700,
                              fontSize: '0.9rem',
                              py: 2.5,
                              boxShadow: '0 4px 12px rgba(0, 35, 149, 0.4)',
                            }}
                          />
                          <Chip
                            icon={<EmojiEventsIcon />}
                            label={area.projects}
                            size="medium"
                            sx={{
                              backgroundColor: '#002395',
                              color: 'white',
                              fontWeight: 700,
                              fontSize: '0.9rem',
                              py: 2.5,
                              boxShadow: '0 4px 12px rgba(0, 35, 149, 0.4)',
                            }}
                          />
                        </Stack>
                      </Box>
                    </Box>

                    {/* Tech Center Layout: Overlapping photos with digital elements */}
                    <Grid container spacing={4} sx={{ mb: 5 }}>
                      {/* Left: Tech Photo Composition (60%) */}
                      <Grid size={{ xs: 12, md: 7 }}>
                        <Box
                          sx={{
                            position: 'relative',
                            width: '100%',
                            height: { xs: '450px', md: '550px' },
                            borderRadius: 4,
                            overflow: 'visible',
                            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(0, 56, 214, 0.05) 100%)',
                            p: 2,
                          }}
                        >
                          {/* Digital grid pattern background */}
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              backgroundImage: `
                                linear-gradient(rgba(0, 35, 149, 0.03) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(0, 35, 149, 0.03) 1px, transparent 1px)
                              `,
                              backgroundSize: '20px 20px',
                              borderRadius: 4,
                              zIndex: 0,
                            }}
                          />
                          {/* Digital noise dots */}
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: 'radial-gradient(circle, rgba(0, 35, 149, 0.1) 1px, transparent 1px)',
                              backgroundSize: '30px 30px',
                              borderRadius: 4,
                              zIndex: 0,
                            }}
                          />

                          {/* Photo 1: Seniors with tablet (main, larger) */}
                          <Box
                            sx={{
                              position: 'relative',
                              width: '70%',
                              height: '60%',
                              borderRadius: 3,
                              overflow: 'hidden',
                              zIndex: 2,
                              boxShadow: '0 8px 24px rgba(0, 35, 149, 0.25)',
                              transform: 'rotate(-2deg)',
                            }}
                          >
                            <Box
                              component="img"
                              src="/photos/583489432_1157911303183541_1292926580526900497_n.jpg"
                              alt="Seniors learning digital skills"
                              sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.9) saturate(1.1)',
                              }}
                            />
                          </Box>

                          {/* Photo 2: Youth workshop (overlapping, smaller) */}
                          <Box
                            sx={{
                              position: 'absolute',
                              bottom: '10%',
                              right: '5%',
                              width: '55%',
                              height: '50%',
                              borderRadius: 3,
                              overflow: 'hidden',
                              zIndex: 3,
                              boxShadow: '0 8px 24px rgba(0, 35, 149, 0.3)',
                              transform: 'rotate(3deg)',
                            }}
                          >
                            <Box
                              component="img"
                              src="/photos/583114332_1157911793183492_7408427246397976881_n.jpg"
                              alt="Youth digital workshop"
                              sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.9) saturate(1.1)',
                              }}
                            />
                          </Box>
                        </Box>
                      </Grid>

                      {/* Right: Content (40%) */}
                      <Grid size={{ xs: 12, md: 5 }}>
                        <Box sx={{ pl: { xs: 0, md: 2 } }}>
                          {/* Description with white background for readability */}
                          <Box
                            sx={{
                              backgroundColor: 'white',
                              p: 3,
                              borderRadius: 3,
                              mb: 4,
                              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                            }}
                          >
                            <Typography
                              variant="body1"
                              sx={{
                                fontSize: '1.15rem',
                                lineHeight: 1.9,
                                color: '#0b1b3a',
                                fontWeight: 400,
                              }}
                            >
                              {area.description}
                            </Typography>
                          </Box>

                          {/* Key Benefits with modern icons */}
                          <Box sx={{ mb: 4 }}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mb: 3, color: '#002395' }}>
                              Key Benefits:
                            </Typography>
                            <Stack spacing={2.5}>
                              {[
                                { benefit: area.benefits[0], icon: <AccountTreeIcon /> },
                                { benefit: area.benefits[1], icon: <FavoriteIcon /> },
                                { benefit: area.benefits[2], icon: <WorkIcon /> },
                              ].map((item, idx) => (
                                <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                  <Box
                                    sx={{
                                      backgroundColor: '#002395',
                                      color: 'white',
                                      borderRadius: '50%',
                                      width: 40,
                                      height: 40,
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      mr: 2,
                                      flexShrink: 0,
                                      boxShadow: '0 4px 12px rgba(0, 35, 149, 0.4)',
                                    }}
                                  >
                                    {item.icon}
                                  </Box>
                                  <Typography
                                    variant="body1"
                                    sx={{
                                      color: '#0b1b3a',
                                      fontWeight: 500,
                                      fontSize: '1.05rem',
                                      pt: 0.5,
                                    }}
                                  >
                                    {item.benefit}
                                  </Typography>
                                </Box>
                              ))}
                            </Stack>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>

                    {/* What We Offer - Interactive cards with photo backgrounds */}
                    <Box sx={{ mb: 5 }}>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 3, color: '#002395' }}>
                        What We Offer:
                      </Typography>
                      <Grid container spacing={3}>
                        {[
                          {
                            subArea: area.subAreas[0],
                            photo: '/photos/583489432_1157911303183541_1292926580526900497_n.jpg',
                            icon: <TabletIcon />,
                          },
                          {
                            subArea: area.subAreas[1],
                            photo: '/photos/583114332_1157911793183492_7408427246397976881_n.jpg',
                            icon: <CodeIcon />,
                          },
                          {
                            subArea: area.subAreas[2],
                            photo: '/photos/583741041_1157902773184394_5619801435922057517_n.jpg',
                            icon: <PublicIcon />,
                          },
                          {
                            subArea: area.subAreas[3],
                            photo: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
                            icon: <FavoriteIcon />,
                          },
                        ].map((item, idx) => (
                          <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                            <Card
                              sx={{
                                position: 'relative',
                                height: 200,
                                overflow: 'hidden',
                                borderRadius: 3,
                                cursor: 'pointer',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                '&:hover': {
                                  transform: 'translateY(-8px)',
                                  boxShadow: '0 12px 32px rgba(0, 35, 149, 0.4)',
                                  '& .offer-bg': {
                                    transform: 'scale(1.1)',
                                    filter: 'brightness(0.5) blur(0px)',
                                  },
                                  '& .offer-content': {
                                    transform: 'translateY(-8px)',
                                  },
                                },
                              }}
                            >
                              {/* Background image */}
                              <Box
                                className="offer-bg"
                                component="img"
                                src={item.photo}
                                alt={item.subArea.title}
                                sx={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover',
                                  filter: 'brightness(0.4) blur(2px) saturate(1.2)',
                                  transition: 'all 0.4s ease',
                                }}
                              />
                              {/* Overlay */}
                              <Box
                                sx={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.8) 0%, rgba(0, 35, 149, 0.95) 100%)',
                                }}
                              />
                              {/* Content */}
                              <Box
                                className="offer-content"
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
                                <Box sx={{ color: 'white', mb: 2, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
                                  {item.icon}
                                </Box>
                                <Box>
                                  <Typography
                                    variant="subtitle1"
                                    sx={{
                                      fontWeight: 700,
                                      mb: 1,
                                      color: 'white',
                                      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                                    }}
                                  >
                                    {item.subArea.title}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    sx={{
                                      color: 'white',
                                      textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                                      lineHeight: 1.6,
                                    }}
                                  >
                                    {item.subArea.description}
                                  </Typography>
                                </Box>
                              </Box>
                            </Card>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>

                    {/* Interactive CTA block with light blue glow */}
                    <Box
                      sx={{
                        mt: 5,
                        p: 4,
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.08) 0%, rgba(0, 56, 214, 0.08) 100%)',
                        border: `2px solid rgba(0, 35, 149, 0.2)`,
                        boxShadow: `
                          0 4px 16px rgba(0, 35, 149, 0.15),
                          inset 0 0 40px rgba(0, 35, 149, 0.05)
                        `,
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: -50,
                          right: -50,
                          width: 200,
                          height: 200,
                          background: 'radial-gradient(circle, rgba(0, 35, 149, 0.1) 0%, transparent 70%)',
                          borderRadius: '50%',
                        },
                      }}
                    >
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: '#002395' }}>
                        Ready to get involved?
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        Explore our programs, join events, or contact us to learn more about this focus area.
                      </Typography>
                      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <Button
                          component={RouterLink}
                          to="/projects"
                          variant="contained"
                          size="large"
                          endIcon={<ArrowForwardIcon />}
                          sx={{
                            backgroundColor: '#002395',
                            color: 'white',
                            '&:hover': {
                              backgroundColor: '#0038d6',
                              transform: 'translateY(-4px)',
                              boxShadow: '0 8px 24px rgba(0, 35, 149, 0.5)',
                            },
                            px: 5,
                            py: 2,
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            borderRadius: '30px',
                            boxShadow: '0 4px 16px rgba(0, 35, 149, 0.4)',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          View Projects
                        </Button>
                        <Button
                          component={RouterLink}
                          to="/events"
                          variant="outlined"
                          size="large"
                          sx={{
                            borderColor: '#002395',
                            color: '#002395',
                            borderWidth: 3,
                            '&:hover': {
                              borderWidth: 3,
                              borderColor: '#002395',
                              backgroundColor: 'rgba(0, 35, 149, 0.08)',
                              transform: 'translateY(-4px)',
                            },
                            px: 5,
                            py: 2,
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            borderRadius: '30px',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          Join Events
                        </Button>
                      </Stack>
                    </Box>
                  </>
                ) : area.id === 'volunteering' ? (
                  // Special Community Wall layout for Volunteering
                  <>
                    {/* Header with enhanced stats badges */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 5, flexWrap: 'wrap' }}>
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
                        <Typography variant="h3" sx={{ mb: 2, fontWeight: 700, color: '#0b1b3a' }}>
                          {area.title}
                        </Typography>
                        {/* Enhanced stats badges with French Red */}
                        <Stack direction="row" spacing={2} flexWrap="wrap">
                          <Chip
                            icon={<PeopleIcon />}
                            label={area.impact}
                            size="medium"
                            sx={{
                              backgroundColor: '#ED2939',
                              color: 'white',
                              fontWeight: 700,
                              fontSize: '0.9rem',
                              py: 2.5,
                              boxShadow: '0 4px 12px rgba(237, 41, 57, 0.4)',
                            }}
                          />
                          <Chip
                            icon={<EmojiEventsIcon />}
                            label={area.projects}
                            size="medium"
                            sx={{
                              backgroundColor: '#ED2939',
                              color: 'white',
                              fontWeight: 700,
                              fontSize: '0.9rem',
                              py: 2.5,
                              boxShadow: '0 4px 12px rgba(237, 41, 57, 0.4)',
                            }}
                          />
                        </Stack>
                      </Box>
                    </Box>

                    {/* Community Wall Layout: Vertical grid of photos */}
                    <Grid container spacing={4} sx={{ mb: 5 }}>
                      {/* Left: Community Photo Gallery (60%) */}
                      <Grid size={{ xs: 12, md: 7 }}>
                        <Stack spacing={2}>
                          {/* Photo 1: Group of volunteers */}
                          <Box
                            sx={{
                              position: 'relative',
                              width: '100%',
                              height: { xs: '200px', md: '240px' },
                              borderRadius: 4,
                              overflow: 'hidden',
                              boxShadow: '0 8px 24px rgba(237, 41, 57, 0.2)',
                            }}
                          >
                            <Box
                              component="img"
                              src="/photos/572851437_1143811217926883_7725194936764095335_n.jpg"
                              alt="Group of volunteers"
                              sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.95) saturate(1.1)',
                              }}
                            />
                          </Box>
                          {/* Photo 2: Volunteer helping someone */}
                          <Box
                            sx={{
                              position: 'relative',
                              width: '100%',
                              height: { xs: '200px', md: '240px' },
                              borderRadius: 4,
                              overflow: 'hidden',
                              boxShadow: '0 8px 24px rgba(237, 41, 57, 0.2)',
                            }}
                          >
                            <Box
                              component="img"
                              src="/photos/583489432_1157911303183541_1292926580526900497_n.jpg"
                              alt="Volunteer helping"
                              sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.95) saturate(1.1)',
                              }}
                            />
                          </Box>
                          {/* Photo 3: Team discussion */}
                          <Box
                            sx={{
                              position: 'relative',
                              width: '100%',
                              height: { xs: '200px', md: '240px' },
                              borderRadius: 4,
                              overflow: 'hidden',
                              boxShadow: '0 8px 24px rgba(237, 41, 57, 0.2)',
                            }}
                          >
                            <Box
                              component="img"
                              src="/photos/571419367_1143811194593552_6930038688628840775_n.jpg"
                              alt="Team discussion"
                              sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.95) saturate(1.1)',
                              }}
                            />
                          </Box>
                        </Stack>
                      </Grid>

                      {/* Right: Content (40%) */}
                      <Grid size={{ xs: 12, md: 5 }}>
                        <Box sx={{ pl: { xs: 0, md: 2 } }}>
                          {/* Description with white background for readability */}
                          <Box
                            sx={{
                              backgroundColor: 'white',
                              p: 3,
                              borderRadius: 3,
                              mb: 4,
                              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                            }}
                          >
                            <Typography
                              variant="body1"
                              sx={{
                                fontSize: '1.15rem',
                                lineHeight: 1.9,
                                color: '#0b1b3a',
                                fontWeight: 400,
                              }}
                            >
                              {area.description}
                            </Typography>
                          </Box>

                          {/* Key Benefits with expressive icons */}
                          <Box sx={{ mb: 4 }}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mb: 3, color: '#0b1b3a' }}>
                              Key Benefits:
                            </Typography>
                            <Stack spacing={2.5}>
                              {[
                                { benefit: area.benefits[0], icon: <ThumbUpIcon /> },
                                { benefit: area.benefits[1], icon: <TrendingUpIcon /> },
                                { benefit: area.benefits[2], icon: <ConnectWithoutContactIcon /> },
                              ].map((item, idx) => (
                                <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                  <Box
                                    sx={{
                                      backgroundColor: area.color,
                                      color: 'white',
                                      borderRadius: '50%',
                                      width: 40,
                                      height: 40,
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      mr: 2,
                                      flexShrink: 0,
                                      boxShadow: `0 4px 12px ${area.color}40`,
                                    }}
                                  >
                                    {item.icon}
                                  </Box>
                                  <Typography
                                    variant="body1"
                                    sx={{
                                      color: '#0b1b3a',
                                      fontWeight: 500,
                                      fontSize: '1.05rem',
                                      pt: 0.5,
                                    }}
                                  >
                                    {item.benefit}
                                  </Typography>
                                </Box>
                              ))}
                            </Stack>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>

                    {/* What We Offer - Interactive cards with thematic photos */}
                    <Box sx={{ mb: 5 }}>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 3, color: '#0b1b3a' }}>
                        What We Offer:
                      </Typography>
                      <Grid container spacing={3}>
                        {[
                          {
                            subArea: area.subAreas[0],
                            photo: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
                            icon: <GroupsIcon />,
                          },
                          {
                            subArea: area.subAreas[1],
                            photo: '/photos/572890197_1142845724690099_2859850866106109617_n.jpg',
                            icon: <LightbulbIcon />,
                          },
                          {
                            subArea: area.subAreas[2],
                            photo: '/photos/583741041_1157902773184394_5619801435922057517_n.jpg',
                            icon: <FavoriteIcon />,
                          },
                        ].map((item, idx) => (
                          <Grid size={{ xs: 12, sm: 4 }} key={idx}>
                            <Card
                              sx={{
                                position: 'relative',
                                height: 220,
                                overflow: 'hidden',
                                borderRadius: 3,
                                cursor: 'pointer',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                '&:hover': {
                                  transform: 'translateY(-8px)',
                                  boxShadow: `0 12px 32px ${area.color}40`,
                                  '& .offer-bg': {
                                    transform: 'scale(1.1)',
                                    filter: 'brightness(0.5) blur(0px)',
                                  },
                                  '& .offer-content': {
                                    transform: 'translateY(-8px)',
                                  },
                                },
                              }}
                            >
                              {/* Background image */}
                              <Box
                                className="offer-bg"
                                component="img"
                                src={item.photo}
                                alt={item.subArea.title}
                                sx={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover',
                                  filter: 'brightness(0.4) blur(2px) saturate(1.2)',
                                  transition: 'all 0.4s ease',
                                }}
                              />
                              {/* Overlay */}
                              <Box
                                sx={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  background: `linear-gradient(135deg, ${area.color}80 0%, ${area.color}95 100%)`,
                                }}
                              />
                              {/* Content */}
                              <Box
                                className="offer-content"
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
                                <Box sx={{ color: 'white', mb: 2, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
                                  {item.icon}
                                </Box>
                                <Box>
                                  <Typography
                                    variant="subtitle1"
                                    sx={{
                                      fontWeight: 700,
                                      mb: 1,
                                      color: 'white',
                                      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                                    }}
                                  >
                                    {item.subArea.title}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    sx={{
                                      color: 'white',
                                      textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                                      lineHeight: 1.6,
                                    }}
                                  >
                                    {item.subArea.description}
                                  </Typography>
                                </Box>
                              </Box>
                            </Card>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>

                    {/* Emotional CTA block with engaging photo background */}
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        minHeight: { xs: '400px', md: '500px' },
                        borderRadius: 4,
                        overflow: 'hidden',
                        mt: 5,
                        mb: 2,
                      }}
                    >
                      {/* Background photo with warm filter */}
                      <Box
                        component="img"
                        src="/photos/584326681_1157904053184266_2071216266526493174_n.jpg"
                        alt="Happy volunteers"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '120%',
                          objectFit: 'cover',
                          filter: 'brightness(0.6) saturate(1.2)',
                        }}
                      />
                      {/* Warm overlay with red accents */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(135deg, rgba(237, 41, 57, 0.75) 0%, rgba(201, 31, 47, 0.85) 100%)',
                        }}
                      />
                      {/* Content centered */}
                      <Box
                        sx={{
                          position: 'relative',
                          height: '100%',
                          minHeight: { xs: '400px', md: '500px' },
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          p: 5,
                          textAlign: 'center',
                          zIndex: 2,
                        }}
                      >
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 800,
                            mb: 2,
                            color: 'white',
                            textShadow: '0 4px 12px rgba(0,0,0,0.5)',
                          }}
                        >
                          Ready to get involved?
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            mb: 4,
                            color: 'white',
                            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                            maxWidth: '600px',
                            fontWeight: 400,
                          }}
                        >
                          Explore our programs, join events, or contact us to learn more about this focus area.
                        </Typography>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                          <Button
                            component={RouterLink}
                            to="/projects"
                            variant="contained"
                            size="large"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                              backgroundColor: '#ED2939',
                              color: 'white',
                              '&:hover': {
                                backgroundColor: '#c91f2f',
                                transform: 'translateY(-4px)',
                                boxShadow: '0 8px 24px rgba(237, 41, 57, 0.5)',
                              },
                              px: 5,
                              py: 2,
                              fontWeight: 700,
                              fontSize: '1.1rem',
                              borderRadius: '30px',
                              boxShadow: '0 4px 16px rgba(237, 41, 57, 0.4)',
                              transition: 'all 0.3s ease',
                            }}
                          >
                            View Projects
                          </Button>
                          <Button
                            component={RouterLink}
                            to="/events"
                            variant="outlined"
                            size="large"
                            sx={{
                              borderColor: 'white',
                              color: 'white',
                              borderWidth: 3,
                              '&:hover': {
                                borderWidth: 3,
                                borderColor: 'white',
                                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                transform: 'translateY(-4px)',
                              },
                              px: 5,
                              py: 2,
                              fontWeight: 700,
                              fontSize: '1.1rem',
                              borderRadius: '30px',
                              transition: 'all 0.3s ease',
                            }}
                          >
                            Join Events
                          </Button>
                        </Stack>
                      </Box>
                    </Box>
                  </>
                ) : area.id === 'adult-education' ? (
                  // Special Learning Gallery layout for Adult Education
                  <>
                    {/* Header with enhanced stats badges */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 5, flexWrap: 'wrap' }}>
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: '12px',
                          backgroundColor: `${area.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#002395',
                          mr: 2,
                          mb: { xs: 2, md: 0 },
                        }}
                      >
                        {area.icon}
                      </Box>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h3" sx={{ mb: 2, fontWeight: 700, color: '#002395' }}>
                          {area.title}
                        </Typography>
                        {/* Enhanced stats badges with French Blue */}
                        <Stack direction="row" spacing={2} flexWrap="wrap">
                          <Chip
                            icon={<PeopleIcon />}
                            label={area.impact}
                            size="medium"
                            sx={{
                              backgroundColor: '#002395',
                              color: 'white',
                              fontWeight: 700,
                              fontSize: '0.9rem',
                              py: 2.5,
                              boxShadow: '0 4px 12px rgba(0, 35, 149, 0.4)',
                            }}
                          />
                          <Chip
                            icon={<EmojiEventsIcon />}
                            label={area.projects}
                            size="medium"
                            sx={{
                              backgroundColor: '#002395',
                              color: 'white',
                              fontWeight: 700,
                              fontSize: '0.9rem',
                              py: 2.5,
                              boxShadow: '0 4px 12px rgba(0, 35, 149, 0.4)',
                            }}
                          />
                        </Stack>
                      </Box>
                    </Box>

                    {/* Learning Gallery Layout: Vertical grid of photos */}
                    <Grid container spacing={4} sx={{ mb: 5 }}>
                      {/* Left: Learning Photo Gallery (60%) */}
                      <Grid size={{ xs: 12, md: 7 }}>
                        <Stack spacing={2}>
                          {/* Photo 1: Adult learners in class */}
                          <Box
                            sx={{
                              position: 'relative',
                              width: '100%',
                              height: { xs: '200px', md: '240px' },
                              borderRadius: 4,
                              overflow: 'hidden',
                              boxShadow: '0 8px 24px rgba(0, 35, 149, 0.2)',
                            }}
                          >
                            <Box
                              component="img"
                              src="/photos/583114332_1157911793183492_7408427246397976881_n.jpg"
                              alt="Adult learners in class"
                              sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.95) saturate(1.1)',
                              }}
                            />
                          </Box>
                          {/* Photo 2: Language learning */}
                          <Box
                            sx={{
                              position: 'relative',
                              width: '100%',
                              height: { xs: '200px', md: '240px' },
                              borderRadius: 4,
                              overflow: 'hidden',
                              boxShadow: '0 8px 24px rgba(0, 35, 149, 0.2)',
                            }}
                          >
                            <Box
                              component="img"
                              src="/photos/583741041_1157902773184394_5619801435922057517_n.jpg"
                              alt="Language learning"
                              sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.95) saturate(1.1)',
                              }}
                            />
                          </Box>
                          {/* Photo 3: Professional development */}
                          <Box
                            sx={{
                              position: 'relative',
                              width: '100%',
                              height: { xs: '200px', md: '240px' },
                              borderRadius: 4,
                              overflow: 'hidden',
                              boxShadow: '0 8px 24px rgba(0, 35, 149, 0.2)',
                            }}
                          >
                            <Box
                              component="img"
                              src="/photos/583489432_1157911303183541_1292926580526900497_n.jpg"
                              alt="Professional development"
                              sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.95) saturate(1.1)',
                              }}
                            />
                          </Box>
                        </Stack>
                      </Grid>

                      {/* Right: Content (40%) */}
                      <Grid size={{ xs: 12, md: 5 }}>
                        <Box sx={{ pl: { xs: 0, md: 2 } }}>
                          {/* Description with white background for readability */}
                          <Box
                            sx={{
                              backgroundColor: 'white',
                              p: 3,
                              borderRadius: 3,
                              mb: 4,
                              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                            }}
                          >
                            <Typography
                              variant="body1"
                              sx={{
                                fontSize: '1.15rem',
                                lineHeight: 1.9,
                                color: '#0b1b3a',
                                fontWeight: 400,
                              }}
                            >
                              {area.description}
                            </Typography>
                          </Box>

                          {/* Key Benefits with expressive icons */}
                          <Box sx={{ mb: 4 }}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mb: 3, color: '#002395' }}>
                              Key Benefits:
                            </Typography>
                            <Stack spacing={2.5}>
                              {[
                                { benefit: area.benefits[0], icon: <MenuBookIcon /> },
                                { benefit: area.benefits[1], icon: <WorkIcon /> },
                                { benefit: area.benefits[2], icon: <TrendingUpIcon /> },
                              ].map((item, idx) => (
                                <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                  <Box
                                    sx={{
                                      backgroundColor: '#002395',
                                      color: 'white',
                                      borderRadius: '50%',
                                      width: 40,
                                      height: 40,
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      mr: 2,
                                      flexShrink: 0,
                                      boxShadow: '0 4px 12px rgba(0, 35, 149, 0.4)',
                                    }}
                                  >
                                    {item.icon}
                                  </Box>
                                  <Typography
                                    variant="body1"
                                    sx={{
                                      color: '#0b1b3a',
                                      fontWeight: 500,
                                      fontSize: '1.05rem',
                                      pt: 0.5,
                                    }}
                                  >
                                    {item.benefit}
                                  </Typography>
                                </Box>
                              ))}
                            </Stack>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>

                    {/* What We Offer - Interactive cards with thematic photos */}
                    <Box sx={{ mb: 5 }}>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 3, color: '#002395' }}>
                        What We Offer:
                      </Typography>
                      <Grid container spacing={3}>
                        {[
                          {
                            subArea: area.subAreas[0],
                            photo: '/photos/583114332_1157911793183492_7408427246397976881_n.jpg',
                            icon: <SchoolIcon />,
                          },
                          {
                            subArea: area.subAreas[1],
                            photo: '/photos/583741041_1157902773184394_5619801435922057517_n.jpg',
                            icon: <LanguageIcon />,
                          },
                          {
                            subArea: area.subAreas[2],
                            photo: '/photos/583489432_1157911303183541_1292926580526900497_n.jpg',
                            icon: <ComputerIcon />,
                          },
                        ].map((item, idx) => (
                          <Grid size={{ xs: 12, sm: 4 }} key={idx}>
                            <Card
                              sx={{
                                position: 'relative',
                                height: 220,
                                overflow: 'hidden',
                                borderRadius: 3,
                                cursor: 'pointer',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                '&:hover': {
                                  transform: 'translateY(-8px)',
                                  boxShadow: '0 12px 32px rgba(0, 35, 149, 0.4)',
                                  '& .offer-bg': {
                                    transform: 'scale(1.1)',
                                    filter: 'brightness(0.5) blur(0px)',
                                  },
                                  '& .offer-content': {
                                    transform: 'translateY(-8px)',
                                  },
                                },
                              }}
                            >
                              {/* Background image */}
                              <Box
                                className="offer-bg"
                                component="img"
                                src={item.photo}
                                alt={item.subArea.title}
                                sx={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover',
                                  filter: 'brightness(0.4) blur(2px) saturate(1.2)',
                                  transition: 'all 0.4s ease',
                                }}
                              />
                              {/* Overlay */}
                              <Box
                                sx={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.8) 0%, rgba(0, 35, 149, 0.95) 100%)',
                                }}
                              />
                              {/* Content */}
                              <Box
                                className="offer-content"
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
                                <Box sx={{ color: 'white', mb: 2, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
                                  {item.icon}
                                </Box>
                                <Box>
                                  <Typography
                                    variant="subtitle1"
                                    sx={{
                                      fontWeight: 700,
                                      mb: 1,
                                      color: 'white',
                                      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                                    }}
                                  >
                                    {item.subArea.title}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    sx={{
                                      color: 'white',
                                      textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                                      lineHeight: 1.6,
                                    }}
                                  >
                                    {item.subArea.description}
                                  </Typography>
                                </Box>
                              </Box>
                            </Card>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>

                    {/* Motivating CTA block with learning photo background */}
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        minHeight: { xs: '400px', md: '500px' },
                        borderRadius: 4,
                        overflow: 'hidden',
                        mt: 5,
                        mb: 2,
                      }}
                    >
                      {/* Background photo */}
                      <Box
                        component="img"
                        src="/photos/583924019_1157903166517688_8756873269993443102_n.jpg"
                        alt="Adult learners"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '120%',
                          objectFit: 'cover',
                          filter: 'brightness(0.6) saturate(1.1)',
                        }}
                      />
                      {/* Blue overlay */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.75) 0%, rgba(0, 56, 214, 0.85) 100%)',
                        }}
                      />
                      {/* Content centered */}
                      <Box
                        sx={{
                          position: 'relative',
                          height: '100%',
                          minHeight: { xs: '400px', md: '500px' },
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          p: 5,
                          textAlign: 'center',
                          zIndex: 2,
                        }}
                      >
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 800,
                            mb: 2,
                            color: 'white',
                            textShadow: '0 4px 12px rgba(0,0,0,0.5)',
                          }}
                        >
                          Ready to get involved?
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            mb: 4,
                            color: 'white',
                            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                            maxWidth: '600px',
                            fontWeight: 400,
                          }}
                        >
                          Explore our programs, join events, or contact us to learn more about this focus area.
                        </Typography>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                          <Button
                            component={RouterLink}
                            to="/projects"
                            variant="contained"
                            size="large"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                              backgroundColor: '#002395',
                              color: 'white',
                              '&:hover': {
                                backgroundColor: '#0038d6',
                                transform: 'translateY(-4px)',
                                boxShadow: '0 8px 24px rgba(0, 35, 149, 0.5)',
                              },
                              px: 5,
                              py: 2,
                              fontWeight: 700,
                              fontSize: '1.1rem',
                              borderRadius: '30px',
                              boxShadow: '0 4px 16px rgba(0, 35, 149, 0.4)',
                              transition: 'all 0.3s ease',
                            }}
                          >
                            View Projects
                          </Button>
                          <Button
                            component={RouterLink}
                            to="/events"
                            variant="outlined"
                            size="large"
                            sx={{
                              borderColor: 'white',
                              color: 'white',
                              borderWidth: 3,
                              '&:hover': {
                                borderWidth: 3,
                                borderColor: 'white',
                                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                transform: 'translateY(-4px)',
                              },
                              px: 5,
                              py: 2,
                              fontWeight: 700,
                              fontSize: '1.1rem',
                              borderRadius: '30px',
                              transition: 'all 0.3s ease',
                            }}
                          >
                            Join Events
                          </Button>
                        </Stack>
                      </Box>
                    </Box>
                  </>
                ) : (
                  // Standard layout for other areas
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
                          <Button
                            component={RouterLink}
                            to="/events"
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
                            Join Events
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
                )}
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
