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
import { Link as RouterLink } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FlagIcon from '@mui/icons-material/Flag';
import BarChartIcon from '@mui/icons-material/BarChart';
import HandshakeIcon from '@mui/icons-material/Handshake';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

export default function ProjectDetail() {
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

  const [userCommitments, setUserCommitments] = useState<string[]>([]);
  const [remindersEnabled, setRemindersEnabled] = useState(false);

  const showFeedback = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    setActionFeedback({ open: true, message, type });
  };

  return (
    <Box>
      {/* BEHAVIOR CHANGE STRATEGIES: Support lasting behavior change */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          backgroundColor: 'rgba(0, 35, 149, 0.03)',
          position: 'relative',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<AssignmentIcon />}
              label="Behavior Change Strategies"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Make Lasting Changes
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              We provide proven strategies to help you adopt new behaviors and achieve your goals. Start your journey today.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Goal Setting */}
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
                    Set Your Goals
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Define clear, achievable goals to guide your journey. Research shows that setting specific goals increases success rates by 42%.
                </Typography>
                <Stack spacing={2}>
                  {[
                    { id: '1', goal: 'Join a program this month', progress: 0, target: 1 },
                    { id: '2', goal: 'Attend 3 events', progress: 0, target: 3 },
                    { id: '3', goal: 'Complete a course', progress: 0, target: 1 },
                  ].map((goalItem) => (
                    <Box
                      key={goalItem.id}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'divider',
                        backgroundColor: 'rgba(0, 35, 149, 0.02)',
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {goalItem.goal}
                        </Typography>
                        <Chip
                          label={`${goalItem.progress}/${goalItem.target}`}
                          size="small"
                          color="primary"
                          sx={{ fontWeight: 700 }}
                        />
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={(goalItem.progress / goalItem.target) * 100}
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: 'rgba(0, 35, 149, 0.1)',
                        }}
                      />
                    </Box>
                  ))}
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    startIcon={<FlagIcon />}
                    onClick={() => {
                      showFeedback('Goal setting feature coming soon!', 'info');
                      setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                    }}
                    sx={{ mt: 2 }}
                  >
                    Set New Goal
                  </Button>
                </Stack>
              </Card>
            </Grid>

            {/* Progress Tracking */}
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
                    <BarChartIcon sx={{ fontSize: 32, color: 'info.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'info.main' }}>
                    Track Your Progress
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Monitor your journey with visual progress indicators. Seeing your progress motivates continued action.
                </Typography>
                <Stack spacing={3}>
                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Overall Engagement
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        {satisfactionMetrics.interactions}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={Math.min(satisfactionMetrics.interactions * 10, 100)}
                      sx={{
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: 'rgba(0, 35, 149, 0.1)',
                        '& .MuiLinearProgress-bar': {
                          background: 'linear-gradient(90deg, #002395 0%, #ED2939 100%)',
                        },
                      }}
                    />
                  </Box>
                  <Grid container spacing={2}>
                    {[
                      { label: 'Programs Joined', value: 0, total: 5, color: 'primary' },
                      { label: 'Events Attended', value: 0, total: 10, color: 'success' },
                      { label: 'Skills Learned', value: 0, total: 8, color: 'warning' },
                    ].map((stat) => (
                      <Grid size={{ xs: 12 }} key={stat.label}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            border: '1px solid',
                            borderColor: 'divider',
                            backgroundColor: 'rgba(0, 35, 149, 0.02)',
                          }}
                        >
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="caption" sx={{ fontWeight: 600 }}>
                              {stat.label}
                            </Typography>
                            <Typography variant="caption" sx={{ fontWeight: 700, color: `${stat.color}.main` }}>
                              {stat.value}/{stat.total}
                            </Typography>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={(stat.value / stat.total) * 100}
                            color={stat.color as 'primary' | 'success' | 'warning'}
                            sx={{ height: 6, borderRadius: 3 }}
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Stack>
              </Card>
            </Grid>

            {/* Commitment Devices */}
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
                    <HandshakeIcon sx={{ fontSize: 32, color: 'success.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'success.main' }}>
                    Make a Commitment
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Public commitments increase accountability and success rates. Share your commitment to stay motivated.
                </Typography>
                <Stack spacing={2}>
                  {userCommitments.length === 0 ? (
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        border: '2px dashed',
                        borderColor: 'divider',
                        textAlign: 'center',
                      }}
                    >
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        No commitments yet. Make your first commitment to get started!
                      </Typography>
                    </Box>
                  ) : (
                    userCommitments.map((commitment, index) => (
                      <Box
                        key={index}
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          border: '1px solid',
                          borderColor: 'success.main',
                          backgroundColor: 'rgba(76, 175, 80, 0.05)',
                        }}
                      >
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {commitment}
                        </Typography>
                      </Box>
                    ))
                  )}
                  <Button
                    variant="contained"
                    color="success"
                    fullWidth
                    startIcon={<HandshakeIcon />}
                    onClick={() => {
                      const newCommitment = 'I commit to joining a program this month';
                      setUserCommitments([...userCommitments, newCommitment]);
                      showFeedback('Commitment saved! You can do this!', 'success');
                      setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                    }}
                    sx={{ mt: 2 }}
                  >
                    Make a Commitment
                  </Button>
                </Stack>
              </Card>
            </Grid>

            {/* Rewards and Incentives */}
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
                    Earn Rewards
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Celebrate your achievements with badges and rewards. Rewards reinforce positive behaviors and motivate continued progress.
                </Typography>
                <Grid container spacing={2}>
                  {[
                    { name: 'First Steps', icon: <FlagIcon />, earned: false, description: 'Complete registration' },
                    { name: 'Active Member', icon: <PeopleIcon />, earned: false, description: 'Join your first event' },
                    { name: 'Learner', icon: <SchoolIcon />, earned: false, description: 'Complete a course' },
                    { name: 'Community Hero', icon: <VolunteerActivismIcon />, earned: false, description: 'Volunteer 10 hours' },
                  ].map((badge) => (
                    <Grid size={{ xs: 6 }} key={badge.name}>
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          border: '2px solid',
                          borderColor: badge.earned ? 'warning.main' : 'divider',
                          backgroundColor: badge.earned ? 'rgba(255, 152, 0, 0.1)' : 'rgba(0, 0, 0, 0.02)',
                          textAlign: 'center',
                          opacity: badge.earned ? 1 : 0.6,
                        }}
                      >
                        <Box sx={{ color: badge.earned ? 'warning.main' : 'text.secondary', mb: 1 }}>
                          {badge.icon}
                        </Box>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>
                          {badge.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                          {badge.description}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                <Button
                  variant="outlined"
                  color="warning"
                  fullWidth
                  startIcon={<EmojiEventsIcon />}
                  onClick={() => {
                    showFeedback('Keep progressing to unlock rewards!', 'info');
                  }}
                  sx={{ mt: 3 }}
                >
                  View All Rewards
                </Button>
              </Card>
            </Grid>
          </Grid>

          {/* Reminders and Social Support */}
          <Grid container spacing={4} sx={{ mt: 2 }}>
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
                  <NotificationsIcon sx={{ fontSize: 32, color: 'info.main' }} />
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'info.main' }}>
                    Set Reminders
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Get timely reminders to help you stay on track. Regular prompts increase behavior adherence by 65%.
                </Typography>
                <Button
                  variant={remindersEnabled ? 'contained' : 'outlined'}
                  color="info"
                  fullWidth
                  startIcon={<NotificationsIcon />}
                  onClick={() => {
                    setRemindersEnabled(!remindersEnabled);
                    showFeedback(
                      remindersEnabled ? 'Reminders disabled' : "Reminders enabled! We'll help you stay on track.",
                      remindersEnabled ? 'info' : 'success'
                    );
                  }}
                >
                  {remindersEnabled ? 'Reminders Enabled' : 'Enable Reminders'}
                </Button>
              </Card>
            </Grid>
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
                  <GroupAddIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Social Support
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Connect with others on similar journeys. Social support increases success rates and makes the journey more enjoyable.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<GroupAddIcon />}
                  component={RouterLink}
                  to="/contact"
                  onClick={() => showFeedback('Connecting you with the community...', 'info')}
                >
                  Join Support Group
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

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
