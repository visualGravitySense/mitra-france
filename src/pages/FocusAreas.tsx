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
      {/* MOTIVATION: Hero section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(237, 41, 57, 0.05) 100%)',
          py: { xs: 6, sm: 8 },
          mb: { xs: 6, sm: 8 },
        }}
      >
        <Container>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              textAlign: 'center',
              background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Focus Areas
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              mb: 4,
              color: 'text.secondary',
              fontSize: '1.1rem',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            We work across five main areas to promote education, inclusion, and community empowerment.
            Each area offers unique opportunities to make a difference and create positive change.
          </Typography>

          {/* ABILITY: Quick navigation tabs */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
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

          {/* MOTIVATION: Overall impact stats */}
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {[
              { icon: <PeopleIcon />, label: 'Total Participants', value: '2200+' },
              { icon: <EmojiEventsIcon />, label: 'Active Projects', value: '36+' },
              { icon: <TrendingUpIcon />, label: 'Success Rate', value: '95%' },
              { icon: <PublicIcon />, label: 'Countries Reached', value: '15+' },
            ].map((stat) => (
              <Grid size={{ xs: 6, sm: 3 }} key={stat.label}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 2,
                    border: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 4px 16px rgba(0, 35, 149, 0.15)',
                    },
                  }}
                >
                  <Box sx={{ color: 'primary.main', mb: 1 }}>{stat.icon}</Box>
                  <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 700, mb: 0.5 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
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

                    {/* PROMPT: Clear CTA */}
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 3 }}>
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
                          },
                          px: 4,
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
                          },
                          px: 4,
                        }}
                      >
                        Join Events
                      </Button>
                    </Stack>
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

        {/* PROMPT: Final strong CTA */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(237, 41, 57, 0.05) 100%)',
            borderRadius: '12px',
            p: 6,
            textAlign: 'center',
            mt: 6,
            mb: 4,
          }}
        >
          <Typography variant="h3" gutterBottom>
            Ready to Get Involved?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
            Choose a focus area that interests you and start making a difference today. We offer
            various opportunities to get involved, from workshops to full programs.
          </Typography>
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
              sx={{ px: 5, py: 1.5, fontSize: '1.1rem', fontWeight: 600 }}
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
                borderWidth: 2,
                borderColor: '#ED2939',
                color: '#ED2939',
                '&:hover': {
                  borderWidth: 2,
                  borderColor: '#c91f2f',
                  backgroundColor: 'rgba(237, 41, 57, 0.04)',
                },
              }}
            >
              View Events
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
