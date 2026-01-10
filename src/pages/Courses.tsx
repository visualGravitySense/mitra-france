import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Link as RouterLink } from 'react-router-dom';
import BoltIcon from '@mui/icons-material/Bolt';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SpeedIcon from '@mui/icons-material/Speed';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ComputerIcon from '@mui/icons-material/Computer';
import LanguageIcon from '@mui/icons-material/Language';
import PaletteIcon from '@mui/icons-material/Palette';

export default function Courses() {
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

  const [shortcutsUnlocked, setShortcutsUnlocked] = useState(false);
  const [shortcutsUsed, setShortcutsUsed] = useState(0);
  const [showShortcutsInfo, setShowShortcutsInfo] = useState(false);

  const showFeedback = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    setActionFeedback({ open: true, message, type });
  };

  return (
    <Box>
      {/* Hero Section */}
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
            Catalog of courses and trainings
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
            Lifelong Learning - Образовательные программы для личностного и профессионального развития
          </Typography>
        </Container>
      </Box>

      <Container>
        {/* CHEATING: Smart Shortcuts - Alternative paths to success */}
        <Box
          sx={{
            py: { xs: 8, sm: 10 },
            background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.05) 0%, rgba(237, 41, 57, 0.05) 100%)',
            position: 'relative',
            overflow: 'hidden',
            mb: 8,
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<BoltIcon />}
              label="Smart Shortcuts"
              color="warning"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Looking for a Faster Path?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem', mb: 2 }}>
              We understand that sometimes you need shortcuts to overcome obstacles. These smart shortcuts are intentionally designed to help you progress when you feel stuck.
            </Typography>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                p: 2,
                borderRadius: 2,
                backgroundColor: 'rgba(255, 152, 0, 0.1)',
                border: '1px solid',
                borderColor: 'warning.main',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 152, 0, 0.15)',
                },
              }}
              onClick={() => setShowShortcutsInfo(!showShortcutsInfo)}
            >
              <InfoOutlinedIcon sx={{ fontSize: 20, color: 'warning.main' }} />
              <Typography variant="caption" sx={{ fontWeight: 600, color: 'warning.main' }}>
                Why we offer shortcuts
              </Typography>
            </Box>
            {showShortcutsInfo && (
              <Box
                sx={{
                  mt: 3,
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid',
                  borderColor: 'warning.main',
                  maxWidth: '600px',
                  mx: 'auto',
                  textAlign: 'left',
                }}
              >
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  <strong>Our Philosophy:</strong> We intentionally design shortcuts to help you overcome limitations and feel progress when you're stuck. 
                  These aren't loopholes to exploit—they're alternative paths we've created to enhance your experience. 
                  Use them when you need a boost, but remember: the regular path still offers the most rewarding journey.
                </Typography>
              </Box>
            )}
          </Box>

          {!shortcutsUnlocked ? (
            <Card
              sx={{
                p: 6,
                textAlign: 'center',
                border: '2px dashed',
                borderColor: 'divider',
                borderRadius: 3,
                backgroundColor: 'rgba(0, 0, 0, 0.02)',
              }}
            >
              <LockOpenIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2, opacity: 0.5 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                Unlock Smart Shortcuts
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: '500px', mx: 'auto' }}>
                Shortcuts are available but limited. Unlock them by completing at least one interaction on the page, or use them when you feel stuck.
              </Typography>
              <Button
                variant="contained"
                color="warning"
                size="large"
                startIcon={<VpnKeyIcon />}
                onClick={() => {
                  if (satisfactionMetrics.interactions >= 1 || shortcutsUsed === 0) {
                    setShortcutsUnlocked(true);
                    showFeedback('Shortcuts unlocked! Use them wisely.', 'success');
                    setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                  } else {
                    showFeedback('Complete at least one action to unlock shortcuts', 'warning');
                  }
                }}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  borderRadius: 3,
                }}
              >
                Unlock Shortcuts
              </Button>
            </Card>
          ) : (
            <Grid container spacing={4}>
              {[
                {
                  title: 'Skip Registration Wait',
                  description: 'Get instant access without waiting for approval. Perfect when you want to explore immediately.',
                  icon: <SpeedIcon />,
                  action: 'Get Instant Access',
                  path: '/contact',
                  limitation: 'Available once per user',
                  color: 'primary',
                },
                {
                  title: 'Fast-Track Program Entry',
                  description: 'Join programs directly without prerequisites. Ideal when you have relevant experience.',
                  icon: <BoltIcon />,
                  action: 'Fast-Track Join',
                  path: '/focus-areas',
                  limitation: 'Limited to 2 programs',
                  color: 'success',
                },
                {
                  title: 'Priority Event Access',
                  description: 'Get early access to popular events. Use when events fill up quickly.',
                  icon: <StarIcon />,
                  action: 'Request Priority',
                  path: '/events',
                  limitation: '3 uses per month',
                  color: 'warning',
                },
                {
                  title: 'Extended Trial Period',
                  description: 'Get extra time to explore before committing. Helpful when you need more time to decide.',
                  icon: <AccessTimeIcon />,
                  action: 'Extend Trial',
                  path: '/about',
                  limitation: 'One-time use',
                  color: 'info',
                },
              ].map((shortcut) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={shortcut.title}>
                  <Card
                    sx={{
                      p: 3,
                      height: '100%',
                      border: '2px solid',
                      borderColor: `${shortcut.color}.main`,
                      borderRadius: 3,
                      background: `linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, rgba(255, 255, 255, 1) 100%)`,
                      position: 'relative',
                      overflow: 'visible',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 8px 24px ${shortcut.color}30`,
                      },
                      '&::before': {
                        content: '"SHORTCUT"',
                        position: 'absolute',
                        top: -12,
                        right: 16,
                        px: 1,
                        py: 0.5,
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        color: `${shortcut.color}.main`,
                        backgroundColor: 'white',
                        border: `2px solid ${shortcut.color}`,
                        borderRadius: 1,
                        letterSpacing: '0.5px',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        background: `linear-gradient(135deg, ${shortcut.color === 'primary' ? 'rgba(0, 35, 149, 0.1)' : shortcut.color === 'success' ? 'rgba(76, 175, 80, 0.1)' : shortcut.color === 'warning' ? 'rgba(255, 152, 0, 0.1)' : 'rgba(0, 35, 149, 0.1)'} 0%, ${shortcut.color === 'primary' ? 'rgba(0, 35, 149, 0.2)' : shortcut.color === 'success' ? 'rgba(76, 175, 80, 0.2)' : shortcut.color === 'warning' ? 'rgba(255, 152, 0, 0.2)' : 'rgba(0, 35, 149, 0.2)'} 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        mt: 1,
                      }}
                    >
                      <Box sx={{ color: `${shortcut.color}.main` }}>{shortcut.icon}</Box>
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mb: 1 }}>
                      {shortcut.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6, minHeight: '3em' }}>
                      {shortcut.description}
                    </Typography>
                    <Chip
                      label={shortcut.limitation}
                      size="small"
                      sx={{
                        mb: 2,
                        fontSize: '0.7rem',
                        height: 24,
                        backgroundColor: `${shortcut.color}15`,
                        color: `${shortcut.color}.main`,
                        fontWeight: 600,
                      }}
                    />
                    <Button
                      component={RouterLink}
                      to={shortcut.path}
                      variant="outlined"
                      color={shortcut.color as 'primary' | 'success' | 'warning' | 'info'}
                      fullWidth
                      size="small"
                      onClick={() => {
                        setShortcutsUsed(shortcutsUsed + 1);
                        showFeedback(`Using shortcut: ${shortcut.title}. Remember, shortcuts are limited!`, 'info');
                        if (shortcutsUsed >= 5) {
                          showFeedback('You\'ve used many shortcuts. Consider trying the regular path for a more rewarding experience.', 'warning');
                        }
                      }}
                      sx={{
                        fontWeight: 600,
                        borderWidth: 2,
                      }}
                    >
                      {shortcut.action}
                    </Button>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          {/* Balance and Monitoring Info */}
          {shortcutsUnlocked && (
            <Box sx={{ mt: 6, textAlign: 'center' }}>
              <Card
                sx={{
                  p: 4,
                  border: '2px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'rgba(0, 0, 0, 0.02)',
                  maxWidth: '800px',
                  mx: 'auto',
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
                  ⚖️ Balance is Key
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
                  Shortcuts used: <strong>{shortcutsUsed}</strong> | Regular interactions: <strong>{satisfactionMetrics.interactions}</strong>
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  Remember: Shortcuts help you overcome obstacles, but the regular path offers deeper learning and more meaningful connections. 
                  Use shortcuts when stuck, but don't miss out on the full experience!
                </Typography>
              </Card>
            </Box>
          )}
        </Box>

        {/* Courses Catalog Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 4, fontWeight: 700 }}>
            Available Courses & Training Programs
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                icon: <SchoolIcon sx={{ fontSize: 48 }} />,
                title: 'Digital Literacy',
                description: 'Essential digital skills for everyday life',
                category: 'Basic Skills',
                duration: '8 weeks',
                level: 'Beginner',
              },
              {
                icon: <LanguageIcon sx={{ fontSize: 48 }} />,
                title: 'Language Learning',
                description: 'French language courses for integration',
                category: 'Language',
                duration: '12 weeks',
                level: 'All Levels',
              },
              {
                icon: <ComputerIcon sx={{ fontSize: 48 }} />,
                title: 'Media Literacy',
                description: 'Critical thinking and information analysis',
                category: 'Media',
                duration: '6 weeks',
                level: 'Intermediate',
              },
              {
                icon: <PaletteIcon sx={{ fontSize: 48 }} />,
                title: 'Arts & Culture',
                description: 'Creative expression and cultural heritage',
                category: 'Arts',
                duration: '10 weeks',
                level: 'All Levels',
              },
            ].map((course) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={course.title}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 12px 30px rgba(0, 35, 149, 0.2)',
                    },
                  }}
                >
                  <Box sx={{ p: 3, textAlign: 'center' }}>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>{course.icon}</Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      {course.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: '3em' }}>
                      {course.description}
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mb: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                      <Chip label={course.category} size="small" color="primary" />
                      <Chip label={course.duration} size="small" variant="outlined" />
                    </Stack>
                    <Button
                      component={RouterLink}
                      to="/contact"
                      variant="outlined"
                      fullWidth
                      endIcon={<ArrowForwardIcon />}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
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
