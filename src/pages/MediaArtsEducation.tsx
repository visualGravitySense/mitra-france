import { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import RuleIcon from '@mui/icons-material/Rule';
import RefreshIcon from '@mui/icons-material/Refresh';
import FeedbackIcon from '@mui/icons-material/Feedback';
import PaletteIcon from '@mui/icons-material/Palette';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SchoolIcon from '@mui/icons-material/School';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PeopleIcon from '@mui/icons-material/People';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function MediaArtsEducation() {
  // State for persona selection
  const [selectedPersona, setSelectedPersona] = useState<'senior' | 'youth' | 'migrant'>('senior');
  // State for metrics
  const [satisfactionMetrics, setSatisfactionMetrics] = useState({
    engagement: 0,
    timeOnPage: 0,
    interactions: 0,
  });
  const [userCommitments, setUserCommitments] = useState<string[]>([]);
  const [behaviorGoals, setBehaviorGoals] = useState<Array<{ id: string; goal: string; progress: number; target: number }>>([]);
  const [actionFeedback, setActionFeedback] = useState<{ open: boolean; message: string; type: 'success' | 'info' | 'warning' }>({
    open: false,
    message: '',
    type: 'success',
  });

  const showFeedback = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    setActionFeedback({ open: true, message, type });
  };

  const handleCloseFeedback = () => {
    setActionFeedback({ ...actionFeedback, open: false });
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(237, 41, 57, 0.05) 0%, rgba(0, 35, 149, 0.05) 100%)',
          pt: { xs: 10, sm: 12, md: 14 },
          pb: { xs: 6, sm: 8 },
          mb: 0,
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Chip
              icon={<PaletteIcon />}
              label="Media & Arts Education"
              color="error"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                fontWeight: 700,
                background: 'linear-gradient(135deg, #ED2939 0%, #002395 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Media & Arts Education
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem', mb: 4 }}>
              Fostering media literacy, arts education, and creative technologies for personal and professional development.
            </Typography>
            
            {/* FOGG MODEL: Motivation + Ability + Prompts - Quick Action Buttons */}
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2} 
              justifyContent="center" 
              sx={{ mb: 4 }}
            >
              <Button
                component={Link}
                to="/courses"
                variant="contained"
                size="large"
                startIcon={<SchoolIcon />}
                endIcon={<ArrowForwardIcon />}
                onClick={() => {
                  setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                }}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  background: 'linear-gradient(135deg, #ED2939 0%, #002395 100%)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 16px rgba(0, 35, 149, 0.3)',
                  },
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
              >
                Start Learning Now
              </Button>
              <Button
                component={Link}
                to="/programs-workshops"
                variant="outlined"
                size="large"
                startIcon={<PlayArrowIcon />}
                onClick={() => {
                  setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                }}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
              >
                Explore Programs
              </Button>
            </Stack>

            {/* FOGG MODEL: Social Proof - Motivation Element */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap', mt: 4 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 0.5 }}>
                  1,200+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Active Learners
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'success.main', mb: 0.5 }}>
                  95%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Satisfaction Rate
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'warning.main', mb: 0.5 }}>
                  Free
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  All Programs
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* FOGG MODEL: Motivation Section - Benefits & Value Proposition */}
      <Box
        sx={{
          py: { xs: 6, sm: 8 },
          background: 'linear-gradient(135deg, rgba(237, 41, 57, 0.03) 0%, rgba(0, 35, 149, 0.03) 100%)',
          mt: 0,
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
              Why Choose Our Programs?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              Discover the immediate benefits and long-term value of joining our Media & Arts Education community.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                icon: <TrendingUpIcon />,
                title: 'Career Advancement',
                description: 'Build skills that employers value. 78% of our graduates report career improvements within 6 months.',
                color: 'primary',
              },
              {
                icon: <PeopleIcon />,
                title: 'Community Connection',
                description: 'Join a supportive network of learners, creators, and professionals who share your passion.',
                color: 'success',
              },
              {
                icon: <AccessTimeIcon />,
                title: 'Flexible Learning',
                description: 'Learn at your own pace, on your schedule. No deadlines, no pressure - just progress.',
                color: 'info',
              },
              {
                icon: <StarIcon />,
                title: 'Expert Guidance',
                description: 'Learn from industry professionals and experienced educators who are passionate about your success.',
                color: 'warning',
              },
            ].map((benefit, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card
                  sx={{
                    p: 3,
                    height: '100%',
                    textAlign: 'center',
                    border: '2px solid',
                    borderColor: `${benefit.color}.main`,
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.95) 100%)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 24px rgba(0, 0, 0, 0.15)`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 2,
                      background: `linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(237, 41, 57, 0.1) 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <Box sx={{ color: `${benefit.color}.main`, fontSize: 32 }}>
                      {benefit.icon}
                    </Box>
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {benefit.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* FOGG MODEL: Prompt - Clear CTA after benefits */}
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              component={Link}
              to="/courses"
              variant="contained"
              size="large"
              startIcon={<CheckCircleIcon />}
              endIcon={<ArrowForwardIcon />}
              onClick={() => {
                setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
              }}
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #ED2939 0%, #002395 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 12px 24px rgba(0, 35, 149, 0.4)',
                },
                transition: 'all 0.3s ease',
                textDecoration: 'none',
              }}
            >
              Get Started Today - It's Free!
            </Button>
          </Box>
        </Container>
      </Box>

      {/* FOGG MODEL: Ability Section - Make it Easy to Act */}
      <Box
        sx={{
          py: { xs: 6, sm: 8 },
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(237, 41, 57, 0.05) 100%)',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
              Get Started in 3 Simple Steps
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              We've made it incredibly easy to begin your learning journey. No complicated forms, no long wait times.
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            {[
              {
                step: '1',
                title: 'Choose Your Program',
                description: 'Browse our programs and pick one that matches your interests. Takes less than 2 minutes.',
                icon: <SchoolIcon />,
                color: 'primary',
              },
              {
                step: '2',
                title: 'Quick Registration',
                description: 'Simple sign-up process. Just your name and email - that\'s it! No credit card required.',
                icon: <CheckCircleIcon />,
                color: 'success',
              },
              {
                step: '3',
                title: 'Start Learning',
                description: 'Access your program immediately. Learn at your own pace, whenever you want.',
                icon: <PlayArrowIcon />,
                color: 'info',
              },
            ].map((item, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card
                  sx={{
                    p: 4,
                    height: '100%',
                    textAlign: 'center',
                    border: '2px solid',
                    borderColor: `${item.color}.main`,
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.95) 100%)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 24px rgba(0, 0, 0, 0.15)`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(237, 41, 57, 0.1) 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      fontSize: 24,
                      fontWeight: 700,
                      color: `${item.color}.main`,
                    }}
                  >
                    {item.step}
                  </Box>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      background: `linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(237, 41, 57, 0.1) 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <Box sx={{ color: `${item.color}.main`, fontSize: 28 }}>
                      {item.icon}
                    </Box>
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {item.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* FOGG MODEL: Prompt - Clear call to action after showing ease */}
          <Box sx={{ textAlign: 'center' }}>
            <Button
              component={Link}
              to="/programs-workshops"
              variant="contained"
              size="large"
              startIcon={<ArrowForwardIcon />}
              onClick={() => {
                setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
              }}
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #ED2939 0%, #002395 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 12px 24px rgba(0, 35, 149, 0.4)',
                },
                transition: 'all 0.3s ease',
                textDecoration: 'none',
              }}
            >
              Browse All Programs
            </Button>
          </Box>
        </Container>
      </Box>

      {/* CONCEPTUAL DESIGN: The Big Idea - Vision and Framework */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.03) 0%, rgba(237, 41, 57, 0.03) 100%)',
          position: 'relative',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<LightbulbIcon />}
              label="Conceptual Design"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Our Design Vision
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              Every element of our platform is built on a solid conceptual foundation. We've defined the problem, understood our users, and created a coherent vision that guides every design decision.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* 1. Problem Definition */}
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
                    <LightbulbIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    1. Problem Definition
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  We identified the core challenges facing our communities and designed solutions to address them.
                </Typography>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'error.main',
                      backgroundColor: 'rgba(237, 41, 57, 0.05)',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 700, mb: 1, color: 'error.main' }}>
                      The Challenge
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      Many people in our communities face barriers to education, digital literacy, and social integration. They need accessible, free resources to grow and connect.
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
                    <Typography variant="body2" sx={{ fontWeight: 700, mb: 1, color: 'success.main' }}>
                      Our Solution
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      A comprehensive platform offering free education, digital skills training, cultural activities, and community support - all designed to break down barriers and create opportunities.
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
                    <Typography variant="body2" sx={{ fontWeight: 700, mb: 1, color: 'primary.main' }}>
                      Design Goal
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      Create an intuitive, accessible, and engaging experience that makes it easy for anyone to find and access the resources they need.
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* 2. User Personas and Scenarios */}
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
                    <PersonPinIcon sx={{ fontSize: 32, color: 'success.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'success.main' }}>
                    2. User Personas & Scenarios
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  We've developed detailed personas representing our target users and scenarios showing how they interact with our platform.
                </Typography>
                <Tabs value={selectedPersona} onChange={(_, value) => value && setSelectedPersona(value)} sx={{ mb: 3 }}>
                  <Tab label="Senior" value="senior" />
                  <Tab label="Youth" value="youth" />
                  <Tab label="Migrant" value="migrant" />
                </Tabs>
                <Box sx={{ minHeight: '200px' }}>
                  {selectedPersona === 'senior' && (
                    <Box>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                        Marie, 68, Retired Teacher
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                        <strong>Goal:</strong> Learn digital skills to stay connected with family
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                        <strong>Scenario:</strong> Marie visits our site, finds the Digital Literacy program, registers in 2 minutes, and starts learning at her own pace.
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                        <Chip label="Digital Literacy Program" color="primary" size="small" />
                        <Chip label="Self-Paced Learning" color="info" size="small" />
                      </Stack>
                      {/* FOGG MODEL: Prompt - Easy action button */}
                      <Button
                        component={Link}
                        to="/courses"
                        variant="outlined"
                        size="small"
                        startIcon={<SchoolIcon />}
                        onClick={() => {
                          setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                        }}
                        sx={{ mt: 1, textDecoration: 'none' }}
                      >
                        View Program
                      </Button>
                    </Box>
                  )}
                  {selectedPersona === 'youth' && (
                    <Box>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                        Ahmed, 22, University Student
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                        <strong>Goal:</strong> Build skills and network for career development
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                        <strong>Scenario:</strong> Ahmed explores our programs, joins a Media & Arts workshop, connects with peers, and gains valuable experience for his portfolio.
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                        <Chip label="Media & Arts" color="primary" size="small" />
                        <Chip label="Networking" color="success" size="small" />
                      </Stack>
                      {/* FOGG MODEL: Prompt - Easy action button */}
                      <Button
                        component={Link}
                        to="/programs-workshops"
                        variant="outlined"
                        size="small"
                        startIcon={<PeopleIcon />}
                        onClick={() => {
                          setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                        }}
                        sx={{ mt: 1, textDecoration: 'none' }}
                      >
                        Join Workshop
                      </Button>
                    </Box>
                  )}
                  {selectedPersona === 'migrant' && (
                    <Box>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                        Sofia, 35, New to France
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                        <strong>Goal:</strong> Integrate into French society and learn the language
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                        <strong>Scenario:</strong> Sofia discovers our Intercultural Education programs, attends cultural events, practices French, and builds a supportive community.
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                        <Chip label="Intercultural Education" color="primary" size="small" />
                        <Chip label="Language Support" color="warning" size="small" />
                      </Stack>
                      {/* FOGG MODEL: Prompt - Easy action button */}
                      <Button
                        component={Link}
                        to="/intercultural-education"
                        variant="outlined"
                        size="small"
                        startIcon={<SchoolIcon />}
                        onClick={() => {
                          setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                        }}
                        sx={{ mt: 1, textDecoration: 'none' }}
                      >
                        Explore Programs
                      </Button>
                    </Box>
                  )}
                </Box>
              </Card>
            </Grid>

            {/* 3. Information Architecture */}
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
                    <ArchitectureIcon sx={{ fontSize: 32, color: 'info.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'info.main' }}>
                    3. Information Architecture
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Our content is organized in a clear, logical structure that makes navigation intuitive.
                </Typography>
                <Stack spacing={2}>
                  {[
                    { level: 'Home', items: ['Overview', 'Quick Actions', 'Focus Areas'] },
                    { level: 'Programs', items: ['Education', 'Digital Skills', 'Arts & Media'] },
                    { level: 'Community', items: ['Events', 'Volunteering', 'Partners'] },
                    { level: 'Support', items: ['Contact', 'Resources', 'FAQ'] },
                  ].map((section) => (
                    <Box
                      key={section.level}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'info.main',
                        backgroundColor: 'rgba(0, 35, 149, 0.05)',
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 700, mb: 1, color: 'info.main' }}>
                        {section.level}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap">
                        {section.items.map((item) => (
                          <Chip key={item} label={item} size="small" sx={{ fontSize: '0.7rem' }} />
                        ))}
                      </Stack>
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Grid>

            {/* 4. Design Principles */}
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
                    <RuleIcon sx={{ fontSize: 32, color: 'warning.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'warning.main' }}>
                    4. Design Principles
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  High-level principles that guide every design decision and ensure consistency.
                </Typography>
                <Stack spacing={2}>
                  {[
                    { principle: 'Accessibility First', description: 'Design for everyone, regardless of ability or background', benefit: 'Everyone can participate' },
                    { principle: 'Simplicity', description: 'Reduce complexity, remove barriers, make it easy', benefit: 'No learning curve' },
                    { principle: 'Transparency', description: 'Clear information, honest communication, no hidden costs', benefit: '100% free, always' },
                    { principle: 'Community Focus', description: 'People-first approach, build connections, foster belonging', benefit: 'Join 1,200+ members' },
                    { principle: 'Continuous Improvement', description: 'Iterate based on feedback, evolve with user needs', benefit: 'Your voice matters' },
                  ].map((item) => (
                    <Box
                      key={item.principle}
                      sx={{
                        p: 2.5,
                        borderRadius: 2,
                        border: '2px solid',
                        borderColor: 'warning.main',
                        backgroundColor: 'rgba(255, 152, 0, 0.05)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 152, 0, 0.1)',
                          transform: 'translateX(4px)',
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: 'warning.main' }}>
                          {item.principle}
                        </Typography>
                        <Chip 
                          label={item.benefit} 
                          size="small" 
                          color="warning" 
                          variant="outlined"
                          sx={{ fontSize: '0.65rem', height: 20 }}
                        />
                      </Box>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', lineHeight: 1.6 }}>
                        {item.description}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Grid>
          </Grid>

          {/* 5. Iteration */}
          <Box sx={{ mt: 6 }}>
            <Card
              sx={{
                p: 4,
                border: '2px solid',
                borderColor: 'info.main',
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <RefreshIcon sx={{ fontSize: 32, color: 'info.main' }} />
                <Typography variant="h5" sx={{ fontWeight: 700, color: 'info.main' }}>
                  5. Continuous Iteration
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>
                We continuously refine our design based on user feedback, testing, and stakeholder input. Our iterative approach ensures the platform evolves to meet changing needs.
              </Typography>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'info.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: 700, color: 'info.main', mb: 1 }}>
                      {satisfactionMetrics.interactions}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      User Interactions Tracked
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: 700, color: 'success.main', mb: 1 }}>
                      {userCommitments.length + behaviorGoals.length}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Goals & Commitments
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'warning.main',
                      backgroundColor: 'rgba(255, 152, 0, 0.05)',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: 700, color: 'warning.main', mb: 1 }}>
                      Ongoing
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Design Improvements
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              {/* FOGG MODEL: Multiple Prompts - Different action options */}
              <Box sx={{ mt: 4 }}>
                <Card
                  sx={{
                    p: 4,
                    background: 'linear-gradient(135deg, rgba(237, 41, 57, 0.05) 0%, rgba(0, 35, 149, 0.05) 100%)',
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 2, 
                      fontWeight: 700,
                      color: 'error.main',
                      textAlign: 'center',
                    }}
                  >
                    Ready to get involved?
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={{ 
                      mb: 4, 
                      textAlign: 'center',
                      maxWidth: '600px',
                      mx: 'auto',
                    }}
                  >
                    Explore our programs, join events, or contact us to learn more about this focus area.
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Button
                        component={Link}
                        to="/media-arts-education"
                        variant="contained"
                        color="error"
                        fullWidth
                        endIcon={<ArrowForwardIcon />}
                        onClick={() => {
                          setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                        }}
                        sx={{ 
                          px: 4, 
                          py: 1.5,
                          fontSize: '1rem',
                          fontWeight: 600,
                          textDecoration: 'none',
                          background: 'linear-gradient(135deg, #ED2939 0%, #C21807 100%)',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #C21807 0%, #ED2939 100%)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 16px rgba(237, 41, 57, 0.3)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        View Projects
                      </Button>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Button
                        component={Link}
                        to="/events"
                        variant="outlined"
                        color="error"
                        fullWidth
                        onClick={() => {
                          setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                        }}
                        sx={{ 
                          px: 4, 
                          py: 1.5,
                          fontSize: '1rem',
                          fontWeight: 600,
                          textDecoration: 'none',
                          borderWidth: 2,
                          borderColor: 'error.main',
                          color: 'error.main',
                          '&:hover': {
                            borderWidth: 2,
                            borderColor: 'error.dark',
                            backgroundColor: 'rgba(237, 41, 57, 0.05)',
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        Join Events
                      </Button>
                    </Grid>
                  </Grid>
                </Card>
              </Box>
            </Card>
          </Box>
        </Container>
      </Box>

      {/* Feedback Snackbar */}
      <Snackbar
        open={actionFeedback.open}
        autoHideDuration={4000}
        onClose={handleCloseFeedback}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseFeedback} severity={actionFeedback.type} sx={{ width: '100%' }}>
          {actionFeedback.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
