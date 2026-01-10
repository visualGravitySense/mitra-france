import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Rating from '@mui/material/Rating';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RadioIcon from '@mui/icons-material/Radio';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import PaletteIcon from '@mui/icons-material/Palette';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import RateReviewIcon from '@mui/icons-material/RateReview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PublicIcon from '@mui/icons-material/Public';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link as RouterLink } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Tell User & Ask User: Track user feedback and interactions
  const [userRating, setUserRating] = useState<number | null>(null);
  const [userFeedback, setUserFeedback] = useState('');
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [liveActivity, setLiveActivity] = useState({ count: 1247, recent: 3 });
  const [satisfactionMetrics, setSatisfactionMetrics] = useState({
    engagement: 0,
    timeOnPage: 0,
    interactions: 0,
  });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log('Form submitted:', formData);
    showFeedback('Thank you for your message! We will get back to you soon.', 'success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
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
                    icon={<ContactMailIcon />}
                    label="Get in Touch"
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
                    }}
                  >
                    Contact Us
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
                    Get in touch with us - we'd love to hear from you. Whether you have questions, 
                    want to collaborate, or just want to say hello, we're here to help.
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
                      label="Quick Response"
                      sx={{
                        backgroundColor: 'rgba(76, 175, 80, 0.1)',
                        color: 'success.main',
                        fontWeight: 600,
                      }}
                    />
                    <Chip
                      icon={<AccessTimeIcon sx={{ color: 'primary.main' }} />}
                      label="24h Response Time"
                      sx={{
                        backgroundColor: 'rgba(0, 35, 149, 0.1)',
                        color: 'primary.main',
                        fontWeight: 600,
                      }}
                    />
                    <Chip
                      icon={<PublicIcon sx={{ color: 'error.main' }} />}
                      label="Multiple Ways to Reach"
                      sx={{
                        backgroundColor: 'rgba(237, 41, 57, 0.1)',
                        color: 'error.main',
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                </Box>

                {/* PROMPT: Clear call-to-action */}
                <Box
                  sx={{
                    textAlign: { xs: 'center', md: 'left' },
                    p: 3,
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(237, 41, 57, 0.1) 100%)',
                    border: '2px solid',
                    borderColor: 'primary.main',
                    width: '100%',
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 700, color: 'primary.main' }}>
                    Ready to Connect?
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Fill out the form below, send us an email, or give us a call. 
                    We're here to help and answer any questions you may have.
                  </Typography>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      startIcon={<ContactMailIcon />}
                      onClick={() => {
                        const formElement = document.getElementById('contact-form');
                        formElement?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      sx={{
                        px: 3,
                        py: 1.5,
                        fontWeight: 600,
                        borderRadius: '25px',
                        boxShadow: '0 4px 12px rgba(0, 35, 149, 0.3)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 6px 16px rgba(0, 35, 149, 0.4)',
                        },
                      }}
                    >
                      Fill Out Form
                    </Button>
                    <Button
                      component="a"
                      href="mailto:mitra.france@gmail.com"
                      variant="outlined"
                      color="primary"
                      size="medium"
                      startIcon={<EmailIcon />}
                      sx={{
                        px: 3,
                        py: 1.5,
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
                      Send Email
                    </Button>
                  </Stack>
                </Box>

                {/* ABILITY: Show simplicity indicator */}
                <Typography
                  variant="caption"
                  sx={{
                    textAlign: { xs: 'center', md: 'left' },
                    color: 'text.secondary',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    gap: 0.5,
                  }}
                >
                  <CheckCircleIcon sx={{ fontSize: 16, color: 'success.main' }} />
                  Easy to contact • Quick response • Multiple ways to reach us
                </Typography>
              </Stack>
            </Grid>

            {/* Right side: Hero image */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: '400px', md: '600px' },
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0, 35, 149, 0.15)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(237, 41, 57, 0.1) 100%)',
                    zIndex: 1,
                    pointerEvents: 'none',
                  },
                }}
              >
                <Box
                  component="img"
                  src="/illustrations/contact.jpg"
                  alt="MITRA FRANCE Contact"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          {/* MOTIVATION: Contact statistics with visual appeal - moved below split layout */}
          <Grid container spacing={3} sx={{ mt: 4, mb: 4 }}>
            {[
              { icon: <EmailIcon />, label: 'Email Responses', value: '24h', color: 'primary.main' },
              { icon: <PhoneIcon />, label: 'Phone Support', value: 'Available', color: 'error.main' },
              { icon: <LocationOnIcon />, label: 'Location', value: 'Nice, France', color: 'success.main' },
              { icon: <EmojiEventsIcon />, label: 'Satisfaction Rate', value: '98%', color: 'info.main' },
            ].map((stat) => (
              <Grid size={{ xs: 6, sm: 3 }} key={stat.label}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    border: '2px solid',
                    borderColor: `${stat.color}30`,
                    backgroundColor: `${stat.color}08`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 6px 20px ${stat.color}30`,
                      borderColor: stat.color,
                    },
                  }}
                >
                  <Box sx={{ color: stat.color, mb: 1.5 }}>{stat.icon}</Box>
                  <Typography variant="h6" sx={{ color: stat.color, fontWeight: 700, mb: 0.5 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container>

      <Grid container spacing={4} id="contact-form" sx={{ scrollMarginTop: '100px' }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Card
            sx={{
              borderLeft: '4px solid',
              borderLeftColor: 'primary.main',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 25px rgba(0, 35, 149, 0.15)',
              },
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '12px',
                    backgroundColor: 'rgba(0, 35, 149, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'primary.main',
                  }}
                >
                  <ContactMailIcon sx={{ fontSize: 32 }} />
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    Send us a Message
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Fill out the form below and we'll get back to you as soon as possible
                  </Typography>
                </Box>
              </Box>
              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    required
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                  />
                  <TextField
                    required
                    fullWidth
                    type="email"
                    label="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                  />
                  <TextField
                    required
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    variant="outlined"
                  />
                  <TextField
                    required
                    fullWidth
                    multiline
                    rows={6}
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="outlined"
                  />
                  <Button
                    type="submit"
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
                    Send Message
                  </Button>
                </Stack>
              </form>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Stack spacing={3}>
            <Card
              sx={{
                borderTop: '4px solid',
                borderTopColor: 'primary.main',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 6px 20px rgba(0, 35, 149, 0.15)',
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
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
                      mr: 2,
                    }}
                  >
                    <EmailIcon />
                  </Box>
                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      Email
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <a href="mailto:mitra.france@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                        mitra.france@gmail.com
                      </a>
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            <Card
              sx={{
                borderTop: '4px solid',
                borderTopColor: 'error.main',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 6px 20px rgba(237, 41, 57, 0.15)',
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
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
                      mr: 2,
                    }}
                  >
                    <PhoneIcon />
                  </Box>
                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      Phone
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <a href="tel:+33641092395" style={{ color: 'inherit', textDecoration: 'none' }}>
                        +33 6 41 09 23 95
                      </a>
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            <Card
              sx={{
                borderTop: '4px solid',
                borderTopColor: 'success.main',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 6px 20px rgba(76, 175, 80, 0.15)',
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      backgroundColor: 'rgba(76, 175, 80, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'success.main',
                      mr: 2,
                    }}
                  >
                    <LocationOnIcon />
                  </Box>
                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      Location
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Nice, France
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            <Divider />

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Organization Details
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  <strong>PIC:</strong> 921950857
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>OID:</strong> E10155908
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Follow Us
                </Typography>
                <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                  <Button
                    variant="outlined"
                    startIcon={<FacebookIcon />}
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                  >
                    Facebook
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<YouTubeIcon />}
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                  >
                    YouTube
                  </Button>
                </Stack>
                <Box sx={{ mt: 2 }}>
                  <Button
                    variant="outlined"
                    startIcon={<RadioIcon />}
                    href="https://el-radio.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    fullWidth
                  >
                    el-radio.fr webradio
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>

      <Divider sx={{ my: 8 }} />

      {/* TELL USER & ASK USER: Effective communication and engagement */}
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
              icon={<QuestionAnswerIcon />}
              label="Tell User & Ask User"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Clear Communication, Active Engagement
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              We tell you what actions are available and ask for your input to create a personalized, engaging experience.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Tell User Section */}
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
                    <AnnouncementIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Tell User
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  We provide clear, concise information through visual cues, helpful microcopy, and timely notifications.
                </Typography>

                <Stack spacing={3}>
                  {/* Visual Cues */}
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'primary.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                      <PaletteIcon sx={{ fontSize: 20, color: 'primary.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        Visual Cues
                      </Typography>
                    </Box>
                    <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 1 }}>
                      <Chip icon={<CheckCircleIcon />} label="Success" color="success" size="small" />
                      <Chip icon={<InfoIcon />} label="Info" color="info" size="small" />
                      <Chip icon={<WarningIcon />} label="Warning" color="warning" size="small" />
                      <Chip icon={<ErrorOutlineIcon />} label="Error" color="error" size="small" />
                    </Stack>
                    <Typography variant="caption" color="text.secondary">
                      Colors, icons, and typography signal important elements and guide your attention
                    </Typography>
                  </Box>

                  {/* Microcopy */}
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'info.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                      <TextFieldsIcon sx={{ fontSize: 20, color: 'info.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'info.main' }}>
                        Microcopy
                      </Typography>
                    </Box>
                    <Stack spacing={1}>
                      <Tooltip title="This button will take you to the registration form">
                        <Button variant="outlined" size="small" fullWidth>
                          Register Now
                        </Button>
                      </Tooltip>
                      <Tooltip title="Learn more about our programs and services">
                        <Button variant="outlined" size="small" fullWidth>
                          Learn More
                        </Button>
                      </Tooltip>
                    </Stack>
                    <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                      Short, helpful text guides you to take appropriate actions
                    </Typography>
                  </Box>

                  {/* Notifications */}
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                      <NotificationsIcon sx={{ fontSize: 20, color: 'success.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'success.main' }}>
                        Notifications
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 1,
                        backgroundColor: 'rgba(76, 175, 80, 0.1)',
                        border: '1px solid',
                        borderColor: 'success.main',
                      }}
                    >
                      <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>
                        Live Update
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {liveActivity.recent} people joined in the last hour
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                      Real-time updates keep you informed about system status
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* Ask User Section */}
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
                    <QuestionAnswerIcon sx={{ fontSize: 32, color: 'success.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'success.main' }}>
                    Ask User
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  We ask for your input to create a personalized experience and gather valuable feedback.
                </Typography>

                <Stack spacing={3}>
                  {/* Interactive Elements */}
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                      <TouchAppIcon sx={{ fontSize: 20, color: 'success.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'success.main' }}>
                        Interactive Elements
                      </Typography>
                    </Box>
                    <Stack spacing={1.5}>
                      <Button
                        variant="outlined"
                        color="success"
                        fullWidth
                        onClick={() => {
                          setShowFeedbackForm(!showFeedbackForm);
                          showFeedback('Interactive elements engage you with the interface', 'info');
                        }}
                      >
                        {showFeedbackForm ? 'Hide Form' : 'Show Feedback Form'}
                      </Button>
                      <Accordion expanded={showFeedbackForm} onChange={() => setShowFeedbackForm(!showFeedbackForm)}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            Progressive Disclosure
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography variant="caption" color="text.secondary">
                            Click to reveal more information. This technique reduces cognitive load.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </Stack>
                  </Box>

                  {/* Feedback Mechanisms */}
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'warning.main',
                      backgroundColor: 'rgba(255, 152, 0, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                      <RateReviewIcon sx={{ fontSize: 20, color: 'warning.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'warning.main' }}>
                        Feedback Mechanisms
                      </Typography>
                    </Box>
                    <Stack spacing={2}>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                          Rate Your Experience
                        </Typography>
                        <Rating
                          value={userRating}
                          onChange={(_, newValue) => {
                            setUserRating(newValue);
                            showFeedback(
                              newValue ? `Thank you for your ${newValue}-star rating!` : 'Rating removed',
                              'success'
                            );
                            setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                          }}
                          size="large"
                        />
                      </Box>
                      {showFeedbackForm && (
                        <Box>
                          <TextField
                            fullWidth
                            multiline
                            rows={3}
                            placeholder="Share your thoughts, suggestions, or report issues..."
                            value={userFeedback}
                            onChange={(e) => setUserFeedback(e.target.value)}
                            sx={{ mb: 1 }}
                          />
                          <Button
                            variant="contained"
                            color="warning"
                            fullWidth
                            onClick={() => {
                              if (userFeedback.trim()) {
                                showFeedback('Thank you for your feedback! We value your input.', 'success');
                                setUserFeedback('');
                                setShowFeedbackForm(false);
                                setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                              } else {
                                showFeedback('Please enter your feedback', 'warning');
                              }
                            }}
                          >
                            Submit Feedback
                          </Button>
                        </Box>
                      )}
                    </Stack>
                  </Box>

                  {/* Forms and Surveys */}
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'info.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                      <AssignmentIcon sx={{ fontSize: 20, color: 'info.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'info.main' }}>
                        Quick Survey
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ mb: 2, fontWeight: 600 }}>
                      What brings you here today?
                    </Typography>
                    <Stack spacing={1}>
                      {['Learn new skills', 'Connect with community', 'Find volunteer opportunities', 'Explore programs'].map(
                        (option) => (
                          <Button
                            key={option}
                            variant="outlined"
                            size="small"
                            fullWidth
                            onClick={() => {
                              showFeedback(`You selected: ${option}. We'll personalize your experience!`, 'info');
                              setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                            }}
                            sx={{ justifyContent: 'flex-start', textTransform: 'none' }}
                          >
                            {option}
                          </Button>
                        )
                      )}
                    </Stack>
                  </Box>
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
    </Container>
    </Box>
  );
}
