import { useState } from 'react';
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
          py: { xs: 6, sm: 8 },
          mb: { xs: 6, sm: 8 },
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
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              Fostering media literacy, arts education, and creative technologies for personal and professional development.
            </Typography>
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
                      <Chip label="Digital Literacy Program" color="primary" size="small" sx={{ mr: 1 }} />
                      <Chip label="Self-Paced Learning" color="info" size="small" />
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
                      <Chip label="Media & Arts" color="primary" size="small" sx={{ mr: 1 }} />
                      <Chip label="Networking" color="success" size="small" />
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
                      <Chip label="Intercultural Education" color="primary" size="small" sx={{ mr: 1 }} />
                      <Chip label="Language Support" color="warning" size="small" />
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
                    { principle: 'Accessibility First', description: 'Design for everyone, regardless of ability or background' },
                    { principle: 'Simplicity', description: 'Reduce complexity, remove barriers, make it easy' },
                    { principle: 'Transparency', description: 'Clear information, honest communication, no hidden costs' },
                    { principle: 'Community Focus', description: 'People-first approach, build connections, foster belonging' },
                    { principle: 'Continuous Improvement', description: 'Iterate based on feedback, evolve with user needs' },
                  ].map((item) => (
                    <Box
                      key={item.principle}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'warning.main',
                        backgroundColor: 'rgba(255, 152, 0, 0.05)',
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5, color: 'warning.main' }}>
                        {item.principle}
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
              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Button
                  variant="outlined"
                  color="info"
                  startIcon={<FeedbackIcon />}
                  onClick={() => {
                    showFeedback('Your feedback drives our design improvements. Thank you!', 'success');
                    setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                  }}
                  sx={{ px: 4 }}
                >
                  Share Your Feedback
                </Button>
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
