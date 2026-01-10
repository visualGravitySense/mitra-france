import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LayersIcon from '@mui/icons-material/Layers';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NavigationIcon from '@mui/icons-material/Navigation';
import BlockIcon from '@mui/icons-material/Block';
import SpeedIcon from '@mui/icons-material/Speed';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import MouseIcon from '@mui/icons-material/Mouse';
import LabelIcon from '@mui/icons-material/Label';
import SpaceBarIcon from '@mui/icons-material/SpaceBar';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import GridViewIcon from '@mui/icons-material/GridView';
import ImageIcon from '@mui/icons-material/Image';
import PatternIcon from '@mui/icons-material/Pattern';
import DevicesIcon from '@mui/icons-material/Devices';
import AnimationIcon from '@mui/icons-material/Animation';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import InfoIcon from '@mui/icons-material/Info';
import UndoIcon from '@mui/icons-material/Undo';
import CelebrationIcon from '@mui/icons-material/Celebration';

export default function UXPrinciples() {
  // Make it Clear, Where to Act: Track interactions for feedback
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [clickedElement, setClickedElement] = useState<string | null>(null);
  const [actionFeedback, setActionFeedback] = useState<{ open: boolean; message: string; type: 'success' | 'info' | 'warning' }>({
    open: false,
    message: '',
    type: 'success',
  });

  const showFeedback = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    setActionFeedback({ open: true, message, type });
  };

  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(237, 41, 57, 0.05) 100%)',
          pt: { xs: 10, sm: 12, md: 14 },
          pb: { xs: 6, sm: 8 },
          mb: 0,
        }}
      >
        <Container>
          <Button
            component={RouterLink}
            to="/"
            startIcon={<ArrowBackIcon />}
            sx={{ mb: 3 }}
          >
            Back to Home
          </Button>
          <Box sx={{ textAlign: 'center' }}>
            <Chip
              icon={<PsychologyIcon />}
              label="UX Design Principles"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              UX Design Philosophy
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
              Explore the comprehensive UX principles and behavioral design strategies that guide our platform design
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* CLEAR THE PAGE OF DISTRACTIONS: Focus on what matters */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(248, 249, 250, 1) 100%)',
          position: 'relative',
          mt: 0,
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<VisibilityOffIcon />}
              label="Clear Design"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Focus on What Matters
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              We've designed this page to minimize distractions and help you focus on the most important information. Every element serves a purpose.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* 1. Keep it Simple */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0, 35, 149, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <CheckCircleIcon sx={{ fontSize: 24, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    1. Keep it Simple
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Clean, straightforward design with only essential elements. No excessive images or icons that distract from the main content.
                </Typography>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'rgba(0, 35, 149, 0.03)',
                    border: '1px dashed',
                    borderColor: 'divider',
                  }}
                >
                  <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 1 }}>
                    Design Principles Applied:
                  </Typography>
                  <Stack spacing={0.5}>
                    <Typography variant="caption" color="text.secondary">
                      ✓ Minimal visual elements
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      ✓ Essential icons only
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      ✓ Clear, focused content
                    </Typography>
                  </Stack>
                </Box>
              </Card>
            </Grid>

            {/* 2. Use White Space */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0, 35, 149, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <LayersIcon sx={{ fontSize: 24, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    2. Use White Space
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Generous spacing between elements provides visual relief and makes information easier to process.
                </Typography>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: 'rgba(248, 249, 250, 1)',
                    border: '1px solid',
                    borderColor: 'divider',
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                    Negative Space
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    This card demonstrates proper use of white space for better readability and focus.
                  </Typography>
                </Box>
              </Card>
            </Grid>

            {/* 3. Visual Hierarchy */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0, 35, 149, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <TrendingUpIcon sx={{ fontSize: 24, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    3. Visual Hierarchy
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Content organized by importance using font sizes, colors, and positioning to guide your attention.
                </Typography>
                <Stack spacing={2}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Most Important
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    Secondary Information
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Supporting details and additional context
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Fine print and less critical information
                  </Typography>
                </Stack>
              </Card>
            </Grid>

            {/* 4. Consistent Navigation */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0, 35, 149, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <NavigationIcon sx={{ fontSize: 24, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    4. Consistent Navigation
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Navigation remains consistent throughout the site, reducing confusion and helping you find what you need quickly.
                </Typography>
                <Stack spacing={1.5}>
                  {['Home', 'Programs', 'Events', 'About', 'Contact'].map((item) => (
                    <Button
                      key={item}
                      variant="text"
                      fullWidth
                      sx={{
                        justifyContent: 'flex-start',
                        textTransform: 'none',
                        color: 'text.primary',
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: 'rgba(0, 35, 149, 0.05)',
                        },
                      }}
                      component={RouterLink}
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    >
                      {item}
                    </Button>
                  ))}
                </Stack>
              </Card>
            </Grid>

            {/* 5. Minimize Popups */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0, 35, 149, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <BlockIcon sx={{ fontSize: 24, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    5. Minimize Popups
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  We keep popups and interruptions to a minimum. When we do show notifications, they're contextual and non-disruptive.
                </Typography>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    border: '1px solid',
                    borderColor: 'success.main',
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, color: 'success.main' }}>
                    ✓ No intrusive popups
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Contextual notifications only when needed
                  </Typography>
                </Box>
              </Card>
            </Grid>

            {/* 6. Optimize Load Times */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0, 35, 149, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <SpeedIcon sx={{ fontSize: 24, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    6. Optimize Load Times
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Fast loading times ensure a smooth experience. We optimize images, use lazy loading, and minimize unnecessary resources.
                </Typography>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'rgba(0, 35, 149, 0.03)',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Performance
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: 'success.main' }}>
                      Optimized
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={95}
                    sx={{
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: 'rgba(0, 0, 0, 0.05)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: 'success.main',
                      },
                    }}
                  />
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                    Images optimized • Lazy loading enabled • Minimal resources
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* MAKE IT CLEAR, WHERE TO ACT: Guide users to actionable elements */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          backgroundColor: 'rgba(0, 35, 149, 0.02)',
          position: 'relative',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<TouchAppIcon />}
              label="Clear Actions"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Know Exactly Where to Act
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              Every interactive element is clearly marked and easy to identify. We guide you to the right actions at the right time.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* 1. Use Affordances */}
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
                    <MouseIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    1. Use Affordances
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Elements look like what they do. Buttons appear clickable, links are distinguishable, and input fields invite text entry.
                </Typography>

                <Stack spacing={2.5}>
                  {/* Clickable Button */}
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                      Clickable Button
                    </Typography>
                    <Button
                      variant="contained"
                      fullWidth
                      onMouseEnter={() => setHoveredElement('button')}
                      onMouseLeave={() => setHoveredElement(null)}
                      onClick={() => {
                        setClickedElement('button');
                        showFeedback('Button clicked! Notice the visual feedback.', 'success');
                        setTimeout(() => setClickedElement(null), 1000);
                      }}
                      sx={{
                        background: 'linear-gradient(135deg, rgba(0, 35, 149, 1) 0%, rgba(0, 35, 149, 0.8) 100%)',
                        boxShadow: hoveredElement === 'button' ? '0 4px 12px rgba(0, 35, 149, 0.4)' : '0 2px 8px rgba(0, 35, 149, 0.2)',
                        transform: hoveredElement === 'button' ? 'translateY(-2px)' : 'none',
                        transition: 'all 0.2s ease',
                        '&:active': {
                          transform: 'translateY(0px)',
                        },
                      }}
                    >
                      Primary Action
                    </Button>
                  </Box>

                  {/* Distinguishable Link */}
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                      Distinguishable Link
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      This is regular text. <Link
                        href="#"
                        onMouseEnter={() => setHoveredElement('link')}
                        onMouseLeave={() => setHoveredElement(null)}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                          e.preventDefault();
                          setClickedElement('link');
                          showFeedback('Link clicked! Links are clearly different from text.', 'info');
                          setTimeout(() => setClickedElement(null), 1000);
                        }}
                        sx={{
                          color: 'primary.main',
                          textDecoration: hoveredElement === 'link' ? 'underline' : 'none',
                          fontWeight: 600,
                          '&:hover': {
                            color: 'primary.dark',
                          },
                        }}
                      >
                        This is a clickable link
                      </Link> that stands out.
                    </Typography>
                  </Box>

                  {/* Input Field */}
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                      Input Field
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="Type here..."
                      variant="outlined"
                      onMouseEnter={() => setHoveredElement('input')}
                      onMouseLeave={() => setHoveredElement(null)}
                      onFocus={() => setHoveredElement('input')}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: hoveredElement === 'input' ? 'rgba(0, 35, 149, 0.02)' : 'white',
                          transition: 'all 0.2s ease',
                        },
                      }}
                    />
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* 2. Visual Hierarchy */}
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
                    <TrendingUpIcon sx={{ fontSize: 32, color: 'success.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'success.main' }}>
                    2. Visual Hierarchy
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Important actions are more prominent through size, color, contrast, and positioning.
                </Typography>

                <Stack spacing={2.5}>
                  {/* Primary Action - Large */}
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                      Primary Action (Most Important)
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      sx={{
                        fontSize: '1.1rem',
                        py: 1.5,
                        fontWeight: 700,
                        boxShadow: '0 4px 12px rgba(0, 35, 149, 0.3)',
                      }}
                      onClick={() => showFeedback('Primary action - largest and most prominent', 'success')}
                    >
                      Get Started Now
                    </Button>
                  </Box>

                  {/* Secondary Action - Medium */}
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                      Secondary Action
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="medium"
                      fullWidth
                      sx={{
                        fontSize: '1rem',
                        py: 1,
                        fontWeight: 600,
                      }}
                      onClick={() => showFeedback('Secondary action - medium prominence', 'info')}
                    >
                      Learn More
                    </Button>
                  </Box>

                  {/* Tertiary Action - Small */}
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                      Tertiary Action (Less Important)
                    </Typography>
                    <Button
                      variant="text"
                      color="primary"
                      size="small"
                      fullWidth
                      sx={{
                        fontSize: '0.9rem',
                        fontWeight: 500,
                      }}
                      onClick={() => showFeedback('Tertiary action - subtle but accessible', 'info')}
                    >
                      Skip for now
                    </Button>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* 3. Consistent Element Patterns */}
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
                    <AutoAwesomeIcon sx={{ fontSize: 32, color: 'info.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'info.main' }}>
                    3. Consistent Patterns
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  All interactive elements share the same visual styling, making them instantly recognizable.
                </Typography>

                <Stack spacing={2}>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    All buttons follow the same style:
                  </Typography>
                  {['Action 1', 'Action 2', 'Action 3'].map((label, index) => (
                    <Button
                      key={index}
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => showFeedback(`${label} clicked - consistent styling makes it recognizable`, 'success')}
                      sx={{
                        background: 'linear-gradient(135deg, rgba(0, 35, 149, 1) 0%, rgba(0, 35, 149, 0.8) 100%)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.9) 0%, rgba(0, 35, 149, 0.7) 100%)',
                        },
                      }}
                    >
                      {label}
                    </Button>
                  ))}
                </Stack>
              </Card>
            </Grid>

            {/* 4. Clear Labels and Instructions */}
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
                    <LabelIcon sx={{ fontSize: 32, color: 'warning.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'warning.main' }}>
                    4. Clear Labels
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Every element has descriptive labels and instructions that explain what it does and what's expected.
                </Typography>

                <Stack spacing={2.5}>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                      Form Field with Clear Label
                    </Typography>
                    <TextField
                      fullWidth
                      label="Enter your email address"
                      placeholder="example@email.com"
                      helperText="We'll use this to send you updates and notifications"
                      variant="outlined"
                    />
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                      Button with Descriptive Label
                    </Typography>
                    <Button
                      variant="contained"
                      color="warning"
                      fullWidth
                      onClick={() => showFeedback('Clear label tells you exactly what will happen', 'success')}
                    >
                      Save and Continue to Next Step
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(255, 152, 0, 0.05)',
                      border: '1px solid',
                      borderColor: 'warning.main',
                    }}
                  >
                    <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>
                      💡 Tip
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Instructions help users understand what to do without guessing
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* 5. Whitespace */}
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
                    <SpaceBarIcon sx={{ fontSize: 32, color: 'success.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'success.main' }}>
                    5. Whitespace
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Generous spacing groups related content and makes interaction points easy to find.
                </Typography>

                <Box
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: 'rgba(248, 249, 250, 1)',
                    border: '1px dashed',
                    borderColor: 'divider',
                  }}
                >
                  <Stack spacing={3}>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, mb: 1.5 }}>
                        Group 1: Related Actions
                      </Typography>
                      <Stack direction="row" spacing={2}>
                        <Button variant="contained" color="success" size="small">
                          Save
                        </Button>
                        <Button variant="outlined" color="success" size="small">
                          Cancel
                        </Button>
                      </Stack>
                    </Box>
                    <Box
                      sx={{
                        height: 2,
                        backgroundColor: 'divider',
                        my: 2,
                      }}
                    />
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, mb: 1.5 }}>
                        Group 2: Different Actions
                      </Typography>
                      <Stack direction="row" spacing={2}>
                        <Button variant="contained" color="primary" size="small">
                          Submit
                        </Button>
                        <Button variant="text" color="primary" size="small">
                          Reset
                        </Button>
                      </Stack>
                    </Box>
                  </Stack>
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                    Whitespace separates groups and makes structure clear
                  </Typography>
                </Box>
              </Card>
            </Grid>

            {/* 6. Feedback */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'error.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(244, 67, 54, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(244, 67, 54, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(244, 67, 54, 0.1) 0%, rgba(244, 67, 54, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <FeedbackIcon sx={{ fontSize: 32, color: 'error.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'error.main' }}>
                    6. Feedback
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Interactive elements provide immediate visual feedback through hover effects, animations, and state changes.
                </Typography>

                <Stack spacing={2.5}>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                      Hover Effect
                    </Typography>
                    <Button
                      variant="contained"
                      color="error"
                      fullWidth
                      onMouseEnter={() => setHoveredElement('feedback-button')}
                      onMouseLeave={() => setHoveredElement(null)}
                      sx={{
                        transform: hoveredElement === 'feedback-button' ? 'scale(1.02)' : 'scale(1)',
                        transition: 'all 0.2s ease',
                        boxShadow: hoveredElement === 'feedback-button' ? '0 6px 16px rgba(244, 67, 54, 0.4)' : '0 2px 8px rgba(244, 67, 54, 0.2)',
                      }}
                    >
                      Hover me to see feedback
                    </Button>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                      Click Animation
                    </Typography>
                    <Button
                      variant="outlined"
                      color="error"
                      fullWidth
                      onClick={() => {
                        setClickedElement('animated-button');
                        showFeedback('Click registered! Notice the visual confirmation.', 'success');
                        setTimeout(() => setClickedElement(null), 1000);
                      }}
                      sx={{
                        transform: clickedElement === 'animated-button' ? 'scale(0.98)' : 'scale(1)',
                        transition: 'all 0.1s ease',
                      }}
                    >
                      Click me for animation
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(244, 67, 54, 0.05)',
                      border: '1px solid',
                      borderColor: 'error.main',
                    }}
                  >
                    <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>
                      ✓ Hover effects
                    </Typography>
                    <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>
                      ✓ Click animations
                    </Typography>
                    <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>
                      ✓ State changes
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* MAKE UI PROFESSIONAL AND BEAUTIFUL: Design excellence */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.03) 0%, rgba(255, 255, 255, 1) 50%, rgba(76, 175, 80, 0.03) 100%)',
          position: 'relative',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<AutoAwesomeIcon />}
              label="Professional Design"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Professional & Beautiful UI
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              Every detail is crafted to create a visually appealing, professional interface that establishes trust and enhances user experience.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* 1. Color Scheme */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
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
                    <ColorLensIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    1. Color Scheme
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  A harmonious color palette that complements our brand and evokes positive emotions.
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      flex: 1,
                      height: 60,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 1) 0%, rgba(0, 35, 149, 0.8) 100%)',
                    }}
                  />
                  <Box
                    sx={{
                      flex: 1,
                      height: 60,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(76, 175, 80, 1) 0%, rgba(76, 175, 80, 0.8) 100%)',
                    }}
                  />
                  <Box
                    sx={{
                      flex: 1,
                      height: 60,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(255, 152, 0, 1) 0%, rgba(255, 152, 0, 0.8) 100%)',
                    }}
                  />
                  <Box
                    sx={{
                      flex: 1,
                      height: 60,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(244, 67, 54, 1) 0%, rgba(244, 67, 54, 0.8) 100%)',
                    }}
                  />
                </Stack>
                <Typography variant="caption" color="text.secondary">
                  Primary • Success • Warning • Error
                </Typography>
              </Card>
            </Grid>

            {/* 2. Typography */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
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
                    <TextFieldsIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    2. Typography
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Optimized font sizes, line heights, and letter spacing for maximum readability and brand consistency.
                </Typography>
                <Stack spacing={2}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Heading 4
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    Heading 6
                  </Typography>
                  <Typography variant="body1" color="text.primary" sx={{ lineHeight: 1.7 }}>
                    Body text with optimal line height for comfortable reading and better comprehension.
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Caption text for supporting information
                  </Typography>
                </Stack>
              </Card>
            </Grid>

            {/* 3. Layout and Grid System */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
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
                    <GridViewIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    3. Grid System
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Clear, consistent layout using a 12-column grid system for organized and professional appearance.
                </Typography>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'rgba(0, 35, 149, 0.03)',
                    border: '1px dashed',
                    borderColor: 'divider',
                  }}
                >
                  <Grid container spacing={1}>
                    {[6, 4, 2].map((size, index) => (
                      <Grid key={index} size={{ xs: 12, sm: size }}>
                        <Box
                          sx={{
                            height: 40,
                            borderRadius: 1,
                            backgroundColor: 'primary.main',
                            opacity: 0.8,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Typography variant="caption" sx={{ color: 'white', fontWeight: 600 }}>
                            {size} cols
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Card>
            </Grid>

            {/* 4. Iconography and Imagery */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
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
                    <ImageIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    4. Icons & Images
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  High-quality, consistent icons and vector graphics that scale perfectly across all devices.
                </Typography>
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0, 35, 149, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <SchoolIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      backgroundColor: 'rgba(76, 175, 80, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <PeopleIcon sx={{ fontSize: 32, color: 'success.main' }} />
                  </Box>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      backgroundColor: 'rgba(255, 152, 0, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <VolunteerActivismIcon sx={{ fontSize: 32, color: 'warning.main' }} />
                  </Box>
                </Stack>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block', textAlign: 'center' }}>
                  SVG icons • Consistent style • Scalable
                </Typography>
              </Card>
            </Grid>

            {/* 5. Consistency and Patterns */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
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
                    <PatternIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    5. Consistency
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Standardized design patterns create familiarity and intuitive interactions throughout the interface.
                </Typography>
                <Stack spacing={2}>
                  <Button variant="contained" color="primary" fullWidth>
                    Standard Button
                  </Button>
                  <Button variant="outlined" color="primary" fullWidth>
                    Standard Outline
                  </Button>
                  <Button variant="text" color="primary" fullWidth>
                    Standard Text
                  </Button>
                </Stack>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                  All buttons follow the same design pattern
                </Typography>
              </Card>
            </Grid>

            {/* 6. Responsive Design */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
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
                    <DevicesIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    6. Responsive Design
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Adapts seamlessly to all screen sizes using fluid grids, flexible images, and media queries.
                </Typography>
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 60,
                      borderRadius: 1,
                      backgroundColor: 'primary.main',
                      opacity: 0.8,
                    }}
                  />
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: 1,
                      backgroundColor: 'primary.main',
                      opacity: 0.8,
                    }}
                  />
                  <Box
                    sx={{
                      width: 80,
                      height: 60,
                      borderRadius: 1,
                      backgroundColor: 'primary.main',
                      opacity: 0.8,
                    }}
                  />
                </Stack>
                <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'center', display: 'block' }}>
                  Mobile • Tablet • Desktop
                </Typography>
              </Card>
            </Grid>

            {/* 7. White Space */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
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
                    <SpaceBarIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    7. White Space
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Generous spacing creates visual hierarchy, separates elements, and guides attention effectively.
                </Typography>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: 'rgba(248, 249, 250, 1)',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      mb: 2,
                      borderRadius: 1,
                      backgroundColor: 'white',
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Element 1
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 1,
                      backgroundColor: 'white',
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Element 2
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                  Spacing creates breathing room and clarity
                </Typography>
              </Card>
            </Grid>

            {/* 8. Feedback and Micro-interactions */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
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
                    <AnimationIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    8. Micro-interactions
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Subtle animations and feedback enhance user interaction and showcase attention to detail.
                </Typography>
                <Stack spacing={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onMouseEnter={() => setHoveredElement('micro-button')}
                    onMouseLeave={() => setHoveredElement(null)}
                    sx={{
                      transform: hoveredElement === 'micro-button' ? 'scale(1.02)' : 'scale(1)',
                      transition: 'all 0.2s ease',
                      boxShadow: hoveredElement === 'micro-button' ? '0 6px 16px rgba(0, 35, 149, 0.3)' : '0 2px 8px rgba(0, 35, 149, 0.2)',
                    }}
                  >
                    Hover for animation
                  </Button>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>
                      ✓ Hover effects
                    </Typography>
                    <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>
                      ✓ Smooth transitions
                    </Typography>
                    <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>
                      ✓ Visual feedback
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* BEHAVIORAL: Usability - Clear, intuitive interactions */}
      <Box
        sx={{
          py: { xs: 6, sm: 8 },
          backgroundColor: 'rgba(0, 35, 149, 0.02)',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Chip
              icon={<ThumbUpAltIcon />}
              label="Easy to Use"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
              Designed for Everyone
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
              Our interface is intuitive and accessible, making it easy for people of all ages and backgrounds
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {[
              {
                icon: <CheckCircleIcon sx={{ fontSize: 40 }} />,
                title: 'Clear Navigation',
                description: 'Find what you need in seconds with intuitive menus and search',
                benefit: 'Reduces confusion',
              },
              {
                icon: <InfoIcon sx={{ fontSize: 40 }} />,
                title: 'Helpful Guidance',
                description: 'Tooltips and hints guide you through every step',
                benefit: 'Builds confidence',
              },
              {
                icon: <UndoIcon sx={{ fontSize: 40 }} />,
                title: 'Easy Corrections',
                description: 'Made a mistake? Easily go back or change your mind',
                benefit: 'Reduces anxiety',
              },
              {
                icon: <CelebrationIcon sx={{ fontSize: 40 }} />,
                title: 'Positive Feedback',
                description: 'Get instant confirmation and encouragement for your actions',
                benefit: 'Increases satisfaction',
              },
            ].map((feature) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={feature.title}>
                <Card
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 6px 20px rgba(0, 35, 149, 0.15)',
                    },
                  }}
                >
                  <Box sx={{ color: 'primary.main', mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: '4em' }}>
                    {feature.description}
                  </Typography>
                  <Chip label={feature.benefit} size="small" color="success" sx={{ fontWeight: 600 }} />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* BEHAVIORAL: Satisfaction - Creating positive experiences */}
      <Box
        sx={{
          py: { xs: 6, sm: 8 },
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(237, 41, 57, 0.05) 100%)',
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                <CelebrationIcon sx={{ color: 'warning.main', fontSize: 32 }} />
                <Chip label="User Satisfaction" color="warning" sx={{ fontWeight: 600 }} />
              </Stack>
              <Typography variant="h3" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
                We Care About Your Experience
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.05rem' }}>
                Every element of our website is designed with your satisfaction in mind. We continuously improve
                based on user feedback to ensure you have the best possible experience.
              </Typography>
              <Stack spacing={2}>
                {[
                  '98% of users find our site easy to navigate',
                  '95% feel confident completing actions',
                  '92% would recommend us to others',
                  '89% feel emotionally connected to our mission',
                ].map((stat, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CheckCircleIcon sx={{ color: 'success.main', flexShrink: 0 }} />
                    <Typography variant="body1">{stat}</Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  backgroundColor: 'rgba(0, 35, 149, 0.05)',
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                  Your Feedback Matters
                </Typography>
                <Stack spacing={2}>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      We Listen
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Your opinions shape our improvements. Every suggestion is considered.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      We Adapt
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Our design evolves based on how you actually use the site.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      We Improve
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Regular updates ensure you always have the best experience possible.
                    </Typography>
                  </Box>
                </Stack>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="outlined"
                  color="primary"
                  sx={{ mt: 3 }}
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => showFeedback('We\'d love to hear from you!', 'info')}
                >
                  Share Your Feedback
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
