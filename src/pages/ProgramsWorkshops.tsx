import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Link as RouterLink } from 'react-router-dom';
import LoopIcon from '@mui/icons-material/Loop';
import FlagIcon from '@mui/icons-material/Flag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import FeedbackIcon from '@mui/icons-material/Feedback';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SchoolIcon from '@mui/icons-material/School';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function ProgramsWorkshops() {
  const [actionFeedback, setActionFeedback] = useState<{ open: boolean; message: string; type: 'success' | 'info' | 'warning' }>({
    open: false,
    message: '',
    type: 'success',
  });

  const [satisfactionMetrics, setSatisfactionMetrics] = useState({ 
    engagement: 0, 
    timeOnPage: 0,
    interactions: 0 
  });

  const [userGoal, setUserGoal] = useState<string>('');
  const [habitStreak, setHabitStreak] = useState(0);
  const [habitTriggers, setHabitTriggers] = useState<Array<{ id: string; type: 'visual' | 'time' | 'contextual'; enabled: boolean }>>([
    { id: '1', type: 'visual', enabled: true },
    { id: '2', type: 'time', enabled: false },
    { id: '3', type: 'contextual', enabled: false },
  ]);
  const [socialInfluence, setSocialInfluence] = useState({ peersActive: 1247, topPerformer: 'Maria K.', achievements: 15 });

  const showFeedback = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    setActionFeedback({ open: true, message, type });
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(237, 41, 57, 0.05) 100%)',
          pt: { xs: 10, sm: 12, md: 14 },
          pb: { xs: 6, sm: 8 },
          mb: 0,
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center' }}>
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
              Programs & Workshops
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
              Comprehensive educational programs and interactive workshops for personal and professional development
            </Typography>
            
            {/* FOGG MODEL: Motivation + Ability + Prompts - Quick Action Buttons */}
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2} 
              justifyContent="center" 
              sx={{ mb: 4 }}
            >
              <Button
                component={RouterLink}
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
                  background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #ED2939 0%, #002395 100%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 16px rgba(0, 35, 149, 0.3)',
                  },
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
              >
                Browse Programs
              </Button>
              <Button
                component={RouterLink}
                to="/events"
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
                View Workshops
              </Button>
            </Stack>

            {/* FOGG MODEL: Social Proof - Motivation Element */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap', mt: 4 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 0.5 }}>
                  {socialInfluence.peersActive.toLocaleString()}+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Active Participants
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'success.main', mb: 0.5 }}>
                  50+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Programs Available
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
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.03) 0%, rgba(237, 41, 57, 0.03) 100%)',
          mt: 0,
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
              Why Join Our Programs & Workshops?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              Discover the immediate benefits and long-term value of participating in our educational programs and workshops.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                icon: <SchoolIcon />,
                title: 'Expert-Led Learning',
                description: 'Learn from industry professionals and experienced educators. 89% of participants rate our instructors as excellent.',
                color: 'primary',
              },
              {
                icon: <PeopleIcon />,
                title: 'Community Building',
                description: 'Connect with like-minded learners, build your network, and grow together in a supportive environment.',
                color: 'success',
              },
              {
                icon: <AccessTimeIcon />,
                title: 'Flexible Schedule',
                description: 'Choose from various time slots and formats. Learn at your own pace with both live and self-paced options.',
                color: 'info',
              },
              {
                icon: <StarIcon />,
                title: 'Practical Skills',
                description: 'Gain hands-on experience and real-world skills that you can apply immediately in your career or personal projects.',
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
              component={RouterLink}
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
                background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #ED2939 0%, #002395 100%)',
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
                description: 'Browse our programs and workshops. Pick one that matches your interests. Takes less than 2 minutes.',
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
              component={RouterLink}
              to="/courses"
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
                background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #ED2939 0%, #002395 100%)',
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

      <Container>
        {/* HABIT FORMATION: Make or Change Habits - Lasting behavior change */}
        <Box
          sx={{
            py: { xs: 8, sm: 10 },
            backgroundColor: 'rgba(0, 35, 149, 0.02)',
            position: 'relative',
            mb: 8,
            mt: 0,
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<LoopIcon />}
              label="Habit Formation"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Build Lasting Habits
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              Transform one-time actions into lasting behaviors. We help you identify goals, overcome barriers, and form habits that stick.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* 1. Identify Goals and Barriers */}
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
                    <FlagIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    1. Identify Goals & Barriers
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Start by defining your goal and identifying obstacles. Understanding barriers helps us design solutions that work for you.
                </Typography>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      backgroundColor: 'rgba(0, 35, 149, 0.02)',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                      Your Goal
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {userGoal ? `Selected: ${userGoal}` : 'Not set yet. Choose a goal above to get started.'}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'success.main' }}>
                      Barriers Removed
                    </Typography>
                    <Stack spacing={0.5}>
                      <Typography variant="caption" color="text.secondary">
                        ✓ No cost barriers
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        ✓ No complexity barriers
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        ✓ No commitment barriers
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* 2. Utilize Triggers */}
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
                    <NotificationsNoneIcon sx={{ fontSize: 32, color: 'info.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'info.main' }}>
                    2. Utilize Triggers
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Triggers remind you to take action. Choose the types that work best for you: visual, time-based, or contextual.
                </Typography>
                <Stack spacing={2}>
                  {habitTriggers.map((trigger) => (
                    <Box
                      key={trigger.id}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        border: '2px solid',
                        borderColor: trigger.enabled ? 'info.main' : 'divider',
                        backgroundColor: trigger.enabled ? 'rgba(0, 35, 149, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {trigger.type === 'visual' ? 'Visual Triggers' : trigger.type === 'time' ? 'Time-Based Reminders' : 'Contextual Prompts'}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {trigger.type === 'visual'
                            ? 'Buttons, badges, and visual cues'
                            : trigger.type === 'time'
                              ? 'Daily or weekly reminders'
                              : 'Location or activity-based prompts'}
                        </Typography>
                      </Box>
                      <Button
                        variant={trigger.enabled ? 'contained' : 'outlined'}
                        color="info"
                        size="small"
                        onClick={() => {
                          setHabitTriggers(
                            habitTriggers.map((t) => (t.id === trigger.id ? { ...t, enabled: !t.enabled } : t))
                          );
                          showFeedback(
                            trigger.enabled ? `${trigger.type} triggers disabled` : `${trigger.type} triggers enabled`,
                            'info'
                          );
                        }}
                      >
                        {trigger.enabled ? 'On' : 'Off'}
                      </Button>
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Grid>

            {/* 3. Simplify the Process */}
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
                    <CheckCircleIcon sx={{ fontSize: 32, color: 'success.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'success.main' }}>
                    3. Simplify the Process
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Break complex goals into small, manageable steps. Each step completed builds momentum toward your habit.
                </Typography>
                <Stack spacing={2}>
                  {[
                    { id: '1', step: 'Register (2 minutes)', completed: false },
                    { id: '2', step: 'Complete profile (5 minutes)', completed: false },
                    { id: '3', step: 'Join first event', completed: false },
                    { id: '4', step: 'Attend regularly', completed: false },
                  ].map((stepItem) => (
                    <Box
                      key={stepItem.id}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: stepItem.completed ? 'success.main' : 'divider',
                        backgroundColor: stepItem.completed ? 'rgba(76, 175, 80, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            backgroundColor: stepItem.completed ? 'success.main' : 'divider',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                          }}
                        >
                          {stepItem.completed ? '✓' : stepItem.id}
                        </Box>
                        <Typography variant="body2" sx={{ fontWeight: stepItem.completed ? 600 : 400 }}>
                          {stepItem.step}
                        </Typography>
                      </Box>
                      {!stepItem.completed && (
                        <Button
                          size="small"
                          variant="outlined"
                          color="success"
                          onClick={() => {
                            showFeedback(`Step ${stepItem.id} completed! Keep going!`, 'success');
                            setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                          }}
                        >
                          Start
                        </Button>
                      )}
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Grid>

            {/* 4. Feedback and Rewards */}
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
                    <EmojiEventsIcon sx={{ fontSize: 32, color: 'warning.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'warning.main' }}>
                    4. Feedback & Rewards
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Immediate feedback and rewards reinforce positive behaviors. Celebrate every step forward!
                </Typography>
                <Stack spacing={3}>
                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Current Streak
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'warning.main' }}>
                        {habitStreak} days
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={Math.min((habitStreak / 30) * 100, 100)}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: 'rgba(255, 152, 0, 0.1)',
                        '& .MuiLinearProgress-bar': {
                          background: 'linear-gradient(90deg, #FF9800 0%, #ED2939 100%)',
                        },
                      }}
                    />
                  </Box>
                  <Grid container spacing={2}>
                    {[
                      { name: 'First Step', earned: satisfactionMetrics.interactions > 0, points: 10 },
                      { name: 'Week Warrior', earned: habitStreak >= 7, points: 50 },
                      { name: 'Month Master', earned: habitStreak >= 30, points: 200 },
                    ].map((reward) => (
                      <Grid size={{ xs: 4 }} key={reward.name}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            border: '2px solid',
                            borderColor: reward.earned ? 'warning.main' : 'divider',
                            backgroundColor: reward.earned ? 'rgba(255, 152, 0, 0.1)' : 'rgba(0, 0, 0, 0.02)',
                            textAlign: 'center',
                            opacity: reward.earned ? 1 : 0.6,
                          }}
                        >
                          <EmojiEventsIcon
                            sx={{
                              fontSize: 32,
                              color: reward.earned ? 'warning.main' : 'text.secondary',
                              mb: 1,
                            }}
                          />
                          <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>
                            {reward.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                            {reward.points} pts
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Stack>
              </Card>
            </Grid>
          </Grid>

          {/* 5. Social Influence & 6. Iterate and Improve */}
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid size={{ xs: 12, md: 6 }}>
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
                  <GroupsIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    5. Leverage Social Influence
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  See what others are achieving. Social influence motivates and creates a sense of community.
                </Typography>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      backgroundColor: 'rgba(0, 35, 149, 0.02)',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                      Active Community
                    </Typography>
                    <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700 }}>
                      {socialInfluence.peersActive.toLocaleString()}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      people building habits right now
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'success.main' }}>
                      Top Performer
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>
                      {socialInfluence.topPerformer}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {socialInfluence.achievements} achievements unlocked
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    startIcon={<GroupsIcon />}
                    endIcon={<ArrowForwardIcon />}
                    component={RouterLink}
                    to="/contact"
                    onClick={() => {
                      showFeedback('Connecting you with the community...', 'info');
                      setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                    }}
                    sx={{
                      fontWeight: 600,
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0, 35, 149, 0.3)',
                      },
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                    }}
                  >
                    Join Community
                  </Button>
                </Stack>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
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
                  <FeedbackIcon sx={{ fontSize: 32, color: 'info.main' }} />
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'info.main' }}>
                    6. Iterate & Improve
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Your feedback helps us improve. Share your experience and help us make habit formation easier for everyone.
                </Typography>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      backgroundColor: 'rgba(0, 35, 149, 0.02)',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                      Your Progress
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      Interactions: <strong>{satisfactionMetrics.interactions}</strong>
                    </Typography>
                    <Typography variant="body1">
                      Time on page: <strong>{Math.floor(satisfactionMetrics.timeOnPage / 60)}m</strong>
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="info"
                    fullWidth
                    startIcon={<FeedbackIcon />}
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => {
                      showFeedback('Thank you for your feedback! We use it to improve.', 'success');
                      setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                    }}
                    sx={{
                      fontWeight: 600,
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0, 35, 149, 0.3)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Share Feedback
                  </Button>
                  <Button
                    variant="outlined"
                    color="info"
                    fullWidth
                    startIcon={<TrendingUpIcon />}
                    onClick={() => {
                      showFeedback('We continuously improve based on user behavior and feedback.', 'info');
                      setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                    }}
                    sx={{
                      fontWeight: 600,
                      '&:hover': {
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    How We Improve
                  </Button>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Feedback Snackbar */}
      <Snackbar
        open={actionFeedback.open}
        autoHideDuration={4000}
        onClose={() => setActionFeedback({ ...actionFeedback, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setActionFeedback({ ...actionFeedback, open: false })}
          severity={actionFeedback.type}
          sx={{ width: '100%' }}
        >
          {actionFeedback.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
