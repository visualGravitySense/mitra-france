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
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Chip
              icon={<EmojiEventsIcon />}
              label="European Projects"
              color="primary"
              sx={{ mb: 2, fontWeight: 600, fontSize: '0.95rem', py: 2 }}
            />
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                textAlign: 'center',
                background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
              }}
            >
              Our Projects
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                mb: 3,
                color: 'text.secondary',
                fontWeight: 400,
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              Discover our European and local projects promoting education, digital literacy, and cultural exchange.
              Each project creates real impact and positive change in our communities.
            </Typography>
            
            {/* MOTIVATION: Show benefits and value */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
                flexWrap: 'wrap',
                mb: 4,
              }}
            >
              <Chip
                icon={<CheckCircleIcon sx={{ color: 'success.main' }} />}
                label="100% Success Rate"
                sx={{
                  backgroundColor: 'rgba(76, 175, 80, 0.1)',
                  color: 'success.main',
                  fontWeight: 600,
                }}
              />
              <Chip
                icon={<PeopleIcon sx={{ color: 'primary.main' }} />}
                label="1000+ Participants"
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

          {/* MOTIVATION: Project statistics with visual appeal */}
          <Grid container spacing={3} sx={{ mt: 2, mb: 4 }}>
            <Grid size={{ xs: 6, sm: 3 }}>
              <Card
                sx={{
                  textAlign: 'center',
                  p: 3,
                  border: '2px solid',
                  borderColor: 'primary.main',
                  backgroundColor: 'rgba(0, 35, 149, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 6px 20px rgba(0, 35, 149, 0.3)',
                  },
                }}
              >
                <EmojiEventsIcon sx={{ fontSize: 32, color: 'primary.main', mb: 1 }} />
                <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 0.5 }}>
                  {erasmusKA2Projects.length + erasmusKA1Projects.length}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                  Total Projects
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 6, sm: 3 }}>
              <Card
                sx={{
                  textAlign: 'center',
                  p: 3,
                  border: '2px solid',
                  borderColor: 'success.main',
                  backgroundColor: 'rgba(76, 175, 80, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 6px 20px rgba(76, 175, 80, 0.3)',
                  },
                }}
              >
                <TrendingUpIcon sx={{ fontSize: 32, color: 'success.main', mb: 1 }} />
                <Typography variant="h4" sx={{ color: 'success.main', fontWeight: 700, mb: 0.5 }}>
                  100%
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                  Success Rate
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 6, sm: 3 }}>
              <Card
                sx={{
                  textAlign: 'center',
                  p: 3,
                  border: '2px solid',
                  borderColor: 'info.main',
                  backgroundColor: 'rgba(0, 56, 214, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 6px 20px rgba(0, 56, 214, 0.3)',
                  },
                }}
              >
                <PublicIcon sx={{ fontSize: 32, color: 'info.main', mb: 1 }} />
                <Typography variant="h4" sx={{ color: 'info.main', fontWeight: 700, mb: 0.5 }}>
                  15+
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                  Partner Countries
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 6, sm: 3 }}>
              <Card
                sx={{
                  textAlign: 'center',
                  p: 3,
                  border: '2px solid',
                  borderColor: 'error.main',
                  backgroundColor: 'rgba(237, 41, 57, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 6px 20px rgba(237, 41, 57, 0.3)',
                  },
                }}
              >
                <PeopleIcon sx={{ fontSize: 32, color: 'error.main', mb: 1 }} />
                <Typography variant="h4" sx={{ color: 'error.main', fontWeight: 700, mb: 0.5 }}>
                  1000+
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                  Participants Reached
                </Typography>
              </Card>
            </Grid>
          </Grid>

          {/* PROMPT: Clear call-to-action with enhanced visual appeal */}
          <Box
            sx={{
              textAlign: 'center',
              p: 4,
              borderRadius: 3,
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
            }}
          >
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 700, color: 'primary.main' }}>
              Ready to Explore?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontSize: '1.05rem' }}>
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
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: '25px',
                  boxShadow: '0 4px 12px rgba(0, 35, 149, 0.3)',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 16px rgba(0, 35, 149, 0.4)',
                  },
                }}
              >
                Contact Us
              </Button>
              <Button
                component={RouterLink}
                to="/partners"
                variant="outlined"
                color="primary"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: '25px',
                  borderWidth: 2,
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderWidth: 2,
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                View Partners
              </Button>
            </Stack>
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
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              borderBottom: 2,
              borderColor: 'divider',
              mb: 4,
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                minHeight: 72,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(0, 35, 149, 0.05)',
                  transform: 'translateY(-2px)',
                },
              },
              '& .Mui-selected': {
                color: 'primary.main',
                fontWeight: 700,
              },
              '& .MuiTabs-indicator': {
                height: 3,
                borderRadius: '3px 3px 0 0',
              },
            }}
          >
            <Tab label="Erasmus+ KA2 (Cooperation)" icon={<SchoolIcon />} iconPosition="start" />
            <Tab label="Erasmus+ KA1 (Mobility)" icon={<LanguageIcon />} iconPosition="start" />
            <Tab label="Partnership Projects" icon={<PublicIcon />} iconPosition="start" />
          </Tabs>
          
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
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 2 }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '12px',
                  backgroundColor: 'rgba(0, 35, 149, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'primary.main',
                }}
              >
                <SchoolIcon />
              </Box>
              <Box>
                <Typography variant="h3">Erasmus+ KA2 Projects</Typography>
                <Typography variant="body2" color="text.secondary">
                  Cooperation Partnerships for Innovation
                </Typography>
              </Box>
            </Box>
            <Grid container spacing={3}>
              {erasmusKA2Projects.map((project) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={project.title}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderTop: '4px solid',
                      borderTopColor: 'primary.main',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: '0 12px 30px rgba(0, 35, 149, 0.2)',
                      },
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                        <Chip
                          label={project.status}
                          size="small"
                          icon={<CheckCircleIcon />}
                          sx={{
                            backgroundColor: '#4caf50',
                            color: 'white',
                            fontWeight: 600,
                          }}
                        />
                        <Chip label={project.period} size="small" variant="outlined" />
                      </Stack>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 1.5 }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 2, minHeight: '3em' }}>
                        {project.description}
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      {/* MOTIVATION: Impact indicators */}
                      <Stack spacing={1.5} sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <PeopleIcon sx={{ fontSize: 18, color: 'primary.main' }} />
                          <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                            <strong>{project.participants}</strong> participants
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <TrendingUpIcon sx={{ fontSize: 18, color: 'error.main' }} />
                          <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                            Impact: <strong>{project.impact}</strong>
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                          <InfoIcon sx={{ fontSize: 18, color: 'text.secondary', mt: 0.25 }} />
                          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                            {project.focus}
                          </Typography>
                        </Box>
                      </Stack>
                      {/* PROMPT: Project-specific CTA */}
                      <Button
                        component={RouterLink}
                        to="/project-detail"
                        variant="outlined"
                        size="small"
                        endIcon={<ArrowForwardIcon />}
                        fullWidth
                        sx={{ mt: 'auto' }}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* Erasmus+ KA1 Projects */}
        {tabValue === 1 && (
          <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 2 }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '12px',
                  backgroundColor: 'rgba(237, 41, 57, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'error.main',
                }}
              >
                <LanguageIcon />
              </Box>
              <Box>
                <Typography variant="h3">Erasmus+ KA1 Projects</Typography>
                <Typography variant="body2" color="text.secondary">
                  Mobility Projects for Learning and Development
                </Typography>
              </Box>
            </Box>
            <Grid container spacing={3}>
              {erasmusKA1Projects.map((project) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={project.title}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderTop: '4px solid',
                      borderTopColor: 'error.main',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: '0 12px 30px rgba(237, 41, 57, 0.2)',
                      },
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                        <Chip
                          label={project.status}
                          size="small"
                          icon={<CheckCircleIcon />}
                          sx={{
                            backgroundColor: '#4caf50',
                            color: 'white',
                            fontWeight: 600,
                          }}
                        />
                        <Chip label={project.period} size="small" variant="outlined" />
                      </Stack>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 1.5 }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 2, minHeight: '3em' }}>
                        {project.description}
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      {/* MOTIVATION: Impact indicators */}
                      <Stack spacing={1.5} sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <PeopleIcon sx={{ fontSize: 18, color: 'error.main' }} />
                          <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                            <strong>{project.participants}</strong> participants
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <TrendingUpIcon sx={{ fontSize: 18, color: 'error.main' }} />
                          <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                            Impact: <strong>{project.impact}</strong>
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                          <InfoIcon sx={{ fontSize: 18, color: 'text.secondary', mt: 0.25 }} />
                          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                            {project.focus}
                          </Typography>
                        </Box>
                      </Stack>
                      {/* PROMPT: Project-specific CTA */}
                      <Button
                        component={RouterLink}
                        to="/project-detail"
                        variant="outlined"
                        size="small"
                        endIcon={<ArrowForwardIcon />}
                        fullWidth
                        sx={{
                          mt: 'auto',
                          borderColor: 'error.main',
                          color: 'error.main',
                          '&:hover': {
                            borderColor: 'error.dark',
                            backgroundColor: 'rgba(237, 41, 57, 0.04)',
                          },
                        }}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* Partnership Projects */}
        {tabValue === 2 && (
          <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 2 }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '12px',
                  backgroundColor: 'rgba(0, 56, 214, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0038d6',
                }}
              >
                <PublicIcon />
              </Box>
              <Box>
                <Typography variant="h3">Partnership Projects</Typography>
                <Typography variant="body2" color="text.secondary">
                  Collaborative Initiatives with Local and European Partners
                </Typography>
              </Box>
            </Box>
            <Grid container spacing={3}>
              {partnershipProjects.map((project, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project}>
                  <Card
                    sx={{
                      height: '100%',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      borderLeft: '4px solid',
                      borderLeftColor: index % 2 === 0 ? 'primary.main' : 'error.main',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <EmojiEventsIcon
                          sx={{
                            color: index % 2 === 0 ? 'primary.main' : 'error.main',
                            fontSize: 28,
                            mt: 0.5,
                          }}
                        />
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                            {project}
                          </Typography>
                          <Chip
                            label="Active Partnership"
                            size="small"
                            sx={{
                              backgroundColor: index % 2 === 0 ? 'rgba(0, 35, 149, 0.1)' : 'rgba(237, 41, 57, 0.1)',
                              color: index % 2 === 0 ? 'primary.main' : 'error.main',
                              fontWeight: 600,
                            }}
                          />
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
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
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 4 }}>
            Featured Success Stories
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: 'Digital Senior Citizen',
                highlight: 'Most Successful Project',
                description: 'Reached over 200 seniors, improving their digital skills and quality of life.',
                icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
                color: '#002395',
              },
              {
                title: 'Cultural Heritage for Youth',
                highlight: 'Innovation Award',
                description: 'Recognized for innovative approach to engaging youth with cultural heritage.',
                icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
                color: '#ED2939',
              },
            ].map((story) => (
              <Grid size={{ xs: 12, md: 6 }} key={story.title}>
                <Card
                  sx={{
                    background: `linear-gradient(135deg, ${story.color}15 0%, ${story.color}08 100%)`,
                    borderLeft: `4px solid ${story.color}`,
                    p: 4,
                    height: '100%',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 8px 25px ${story.color}25`,
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                    <Box sx={{ color: story.color }}>{story.icon}</Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Chip
                        label={story.highlight}
                        size="small"
                        sx={{
                          backgroundColor: story.color,
                          color: 'white',
                          fontWeight: 600,
                          mb: 2,
                        }}
                      />
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 1 }}>
                        {story.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                        {story.description}
                      </Typography>
                      <Button
                        component={RouterLink}
                        to="/project-detail"
                        variant="outlined"
                        size="small"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          borderColor: story.color,
                          color: story.color,
                          '&:hover': {
                            borderColor: story.color,
                            backgroundColor: `${story.color}10`,
                          },
                        }}
                      >
                        View Project Details
                      </Button>
                    </Box>
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
