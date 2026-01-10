import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import FlagIcon from '@mui/icons-material/Flag';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SchoolIcon from '@mui/icons-material/School';

export default function InterculturalEducation() {
  // State for behavior understanding
  const [emotionalState, setEmotionalState] = useState<'curious' | 'interested' | 'committed'>('curious');
  const [satisfactionMetrics, setSatisfactionMetrics] = useState({
    engagement: 0,
    timeOnPage: 0,
    interactions: 0,
  });
  const [userGoal, setUserGoal] = useState<string>('');
  const [goalProgress, setGoalProgress] = useState(0);
  const [shortcutsUnlocked, setShortcutsUnlocked] = useState(false);
  const [habitTriggers, setHabitTriggers] = useState<Array<{ id: string; type: 'visual' | 'time' | 'contextual'; enabled: boolean }>>([
    { id: '1', type: 'visual', enabled: true },
    { id: '2', type: 'time', enabled: false },
    { id: '3', type: 'contextual', enabled: false },
  ]);
  const [socialInfluence, setSocialInfluence] = useState({ peersActive: 1247, topPerformer: 'Maria K.', achievements: 15 });
  const [personalizedContent, setPersonalizedContent] = useState(false);
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
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(237, 41, 57, 0.05) 100%)',
          pt: { xs: 10, sm: 12, md: 14 },
          pb: { xs: 6, sm: 8 },
          mb: 0,
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Chip
              icon={<SchoolIcon />}
              label="Intercultural Education"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
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
              Intercultural Education
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              Promoting inclusive education, cultural diversity, and social integration across communities.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* SUPPORT CONSCIOUS ACTION: Understand and support user behavior change */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.03) 0%, rgba(237, 41, 57, 0.03) 100%)',
          position: 'relative',
          mt: 0,
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<PsychologyIcon />}
              label="Support Conscious Action"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              We Understand Your Behavior
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              We analyze your current behavior patterns to help you make conscious, informed decisions. Our approach is personalized, simple, and backed by behavioral psychology.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* 1. Understand Current Behavior */}
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
                    <PersonSearchIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    1. Understand Your Behavior
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  We analyze your current habits, pain points, and motivations to design better solutions for you.
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
                      Your Current Patterns
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Interactions: {satisfactionMetrics.interactions} | Time: {Math.floor(satisfactionMetrics.timeOnPage / 60)}m | Engagement: {satisfactionMetrics.engagement}%
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'info.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'info.main' }}>
                      Identified Patterns
                    </Typography>
                    <Stack spacing={0.5}>
                      <Typography variant="caption" color="text.secondary">
                        • {satisfactionMetrics.interactions > 3 ? 'Active explorer' : 'New visitor'}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        • {goalProgress > 50 ? 'Goal-oriented' : 'Exploring options'}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        • {shortcutsUnlocked ? 'Prefers shortcuts' : 'Takes regular path'}
                      </Typography>
                    </Stack>
                  </Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    startIcon={<PersonSearchIcon />}
                    onClick={() => {
                      showFeedback('We continuously analyze your behavior to improve your experience.', 'info');
                      setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                    }}
                  >
                    Learn More About Your Patterns
                  </Button>
                </Stack>
              </Card>
            </Grid>

            {/* 2. Set Clear Goals */}
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
                    <FlagIcon sx={{ fontSize: 32, color: 'success.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'success.main' }}>
                    2. Set Clear Goals
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Define specific, measurable, attainable, and relevant goals. Clear goals increase success rates significantly.
                </Typography>
                <Stack spacing={2}>
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
                      SMART Goals Framework
                    </Typography>
                    <Stack spacing={0.5}>
                      <Typography variant="caption" color="text.secondary">
                        <strong>S</strong>pecific: {userGoal ? `Goal: ${userGoal}` : 'Not set'}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        <strong>M</strong>easurable: Progress {goalProgress}%
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        <strong>A</strong>ttainable: {goalProgress > 0 ? 'On track' : 'Ready to start'}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        <strong>R</strong>elevant: {userGoal ? 'Aligned with your needs' : 'Choose your goal'}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        <strong>T</strong>ime-bound: {goalProgress > 0 ? 'In progress' : 'Not started'}
                      </Typography>
                    </Stack>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      backgroundColor: 'rgba(0, 0, 0, 0.02)',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                      Goal Progress
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={goalProgress}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: 'rgba(76, 175, 80, 0.1)',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: 'success.main',
                        },
                      }}
                    />
                    <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                      {goalProgress}% complete
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* 3. Leverage Behavioral Psychology */}
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
                    <PsychologyIcon sx={{ fontSize: 32, color: 'info.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'info.main' }}>
                    3. Behavioral Psychology
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  We apply proven models like Fogg Behavior Model to understand motivation, ability, and triggers.
                </Typography>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'info.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'info.main' }}>
                      Fogg Behavior Model Applied
                    </Typography>
                    <Stack spacing={1}>
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>
                          Motivation: {emotionalState === 'committed' ? 'High' : emotionalState === 'interested' ? 'Medium' : 'Building'}
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={emotionalState === 'committed' ? 90 : emotionalState === 'interested' ? 60 : 30}
                          color="primary"
                          sx={{ height: 4, borderRadius: 2, mt: 0.5 }}
                        />
                      </Box>
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>
                          Ability: {shortcutsUnlocked ? 'High (shortcuts available)' : 'Medium (standard path)'}
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={shortcutsUnlocked ? 80 : 50}
                          color="success"
                          sx={{ height: 4, borderRadius: 2, mt: 0.5 }}
                        />
                      </Box>
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>
                          Triggers: {habitTriggers.filter((t) => t.enabled).length}/3 active
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={(habitTriggers.filter((t) => t.enabled).length / 3) * 100}
                          color="warning"
                          sx={{ height: 4, borderRadius: 2, mt: 0.5 }}
                        />
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* 4. Design for Simplicity */}
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
                    <CheckCircleIcon sx={{ fontSize: 32, color: 'warning.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'warning.main' }}>
                    4. Design for Simplicity
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  We reduce barriers, streamline processes, and minimize cognitive load to make actions easy.
                </Typography>
                <Stack spacing={2}>
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
                      <Typography variant="caption" color="text.secondary">
                        ✓ No prerequisite barriers
                      </Typography>
                    </Stack>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      backgroundColor: 'rgba(0, 0, 0, 0.02)',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                      Process Simplification
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      • Registration: 2 minutes
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      • Clear step-by-step guidance
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      • Minimal cognitive load
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          </Grid>

          {/* 5. Feedback & Reinforcement, 6. Social Influence, 7. Personalize, 8. Iterate */}
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  p: 4,
                  border: '2px solid',
                  borderColor: 'warning.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <CheckCircleIcon sx={{ fontSize: 32, color: 'warning.main' }} />
                  <Typography variant="h6" sx={{ fontWeight: 700, color: 'warning.main' }}>
                    5. Feedback & Reinforcement
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Immediate, clear feedback helps you understand the impact of your actions.
                </Typography>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'warning.main',
                    backgroundColor: 'rgba(255, 152, 0, 0.05)',
                  }}
                >
                  <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 1 }}>
                    Recent Feedback
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {satisfactionMetrics.interactions > 0
                      ? `You've completed ${satisfactionMetrics.interactions} interactions. Great progress!`
                      : 'Start interacting to receive feedback'}
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
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
                  <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    6. Social Influence
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  See what others are achieving. Social proof motivates action.
                </Typography>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'primary.main',
                    backgroundColor: 'rgba(0, 35, 149, 0.05)',
                  }}
                >
                  <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 1 }}>
                    Community Activity
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 700, color: 'primary.main', mb: 0.5 }}>
                    {socialInfluence.peersActive.toLocaleString()}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    active members
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
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
                  <SettingsIcon sx={{ fontSize: 32, color: 'info.main' }} />
                  <Typography variant="h6" sx={{ fontWeight: 700, color: 'info.main' }}>
                    7. Personalize & 8. Iterate
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Your experience is tailored to your preferences. We continuously improve based on your behavior.
                </Typography>
                <Stack spacing={2}>
                  <Button
                    variant={personalizedContent ? 'contained' : 'outlined'}
                    color="info"
                    fullWidth
                    size="small"
                    startIcon={<SettingsIcon />}
                    onClick={() => {
                      setPersonalizedContent(!personalizedContent);
                      showFeedback(
                        personalizedContent ? 'Personalization disabled' : 'Personalization enabled! Content tailored to you.',
                        'info'
                      );
                    }}
                  >
                    {personalizedContent ? 'Personalized' : 'Enable Personalization'}
                  </Button>
                  <Button
                    variant="outlined"
                    color="info"
                    fullWidth
                    size="small"
                    startIcon={<AnalyticsIcon />}
                    onClick={() => {
                      showFeedback('We analyze behavior patterns to continuously improve your experience.', 'info');
                    }}
                  >
                    View Analytics
                  </Button>
                </Stack>
              </Card>
            </Grid>
          </Grid>
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
