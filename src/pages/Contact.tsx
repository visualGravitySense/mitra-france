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
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import BusinessIcon from '@mui/icons-material/Business';
import HandshakeIcon from '@mui/icons-material/Handshake';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import InputAdornment from '@mui/material/InputAdornment';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import TramIcon from '@mui/icons-material/Tram';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import { Link as RouterLink } from 'react-router-dom';
import { getImagePath } from '../utils/imagePath';

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
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -8,
                        left: { xs: '50%', md: 0 },
                        transform: { xs: 'translateX(-50%)', md: 'none' },
                        width: '80px',
                        height: '3px',
                        background: '#ED2939',
                        borderRadius: '2px',
                      },
                    }}
                  >
                    Contact Us
                  </Typography>
                  
                  {/* We Speak Your Language Block */}
                  <Box sx={{ mb: 3, textAlign: { xs: 'center', md: 'left' } }}>
                    <Stack direction="row" spacing={1} sx={{ mb: 1, justifyContent: { xs: 'center', md: 'flex-start' }, flexWrap: 'wrap' }}>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary', mr: 1 }}>
                        Our team can support you in 5+ languages:
                      </Typography>
                      <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                        <Chip label="🇫🇷" size="small" sx={{ fontSize: '1.2rem', height: 28 }} />
                        <Chip label="🇬🇧" size="small" sx={{ fontSize: '1.2rem', height: 28 }} />
                        <Chip label="🇺🇦" size="small" sx={{ fontSize: '1.2rem', height: 28 }} />
                        <Chip label="🇪🇸" size="small" sx={{ fontSize: '1.2rem', height: 28 }} />
                        <Chip label="🇩🇪" size="small" sx={{ fontSize: '1.2rem', height: 28 }} />
                      </Stack>
                    </Stack>
                  </Box>
                  
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

            {/* Right side: Emotional Background with Team Photo */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: '400px', md: '600px' },
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0, 35, 149, 0.15)',
                }}
              >
                {/* Background Photo - Team or Communication Process */}
                <Box
                  component="img"
                  src={getImagePath("/illustrations/mitra-image-5.png")}
                  alt="MITRA FRANCE Team"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                    filter: 'brightness(0.85) saturate(1.1)',
                  }}
                />
                {/* Gradient Overlay - от прозрачного к белому слева */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 30%, rgba(255, 255, 255, 0.3) 60%, transparent 100%)',
                    zIndex: 1,
                    pointerEvents: 'none',
                  }}
                />
                {/* Subtle overlay for depth */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(237, 41, 57, 0.05) 100%)',
                    zIndex: 0,
                    pointerEvents: 'none',
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
              position: 'relative',
              borderLeft: '4px solid',
              borderLeftColor: '#002395',
              transition: 'transform 0.3s ease',
              overflow: 'hidden',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 25px rgba(0, 35, 149, 0.15)',
              },
            }}
          >
            {/* Background Image - Office/Work Process */}
            <Box
              component="img"
              src={getImagePath("/photos/584326681_1157904053184266_2071216266526493174_n.jpg")}
              alt="MITRA FRANCE Office"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.15,
                filter: 'blur(3px) brightness(0.9)',
                zIndex: 0,
              }}
            />
            {/* Overlay for readability */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.98) 100%)',
                zIndex: 1,
              }}
            />
            <CardContent sx={{ p: 4, position: 'relative', zIndex: 2 }}>
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
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon sx={{ color: 'text.secondary' }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        paddingLeft: '14px',
                        '& fieldset': {
                          borderWidth: 2,
                        },
                      },
                      '& .MuiInputBase-input': {
                        padding: '16px 14px',
                      },
                    }}
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
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon sx={{ color: 'text.secondary' }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        paddingLeft: '14px',
                        '& fieldset': {
                          borderWidth: 2,
                        },
                      },
                      '& .MuiInputBase-input': {
                        padding: '16px 14px',
                      },
                    }}
                  />
                  <TextField
                    required
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EditIcon sx={{ color: 'text.secondary' }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        paddingLeft: '14px',
                        '& fieldset': {
                          borderWidth: 2,
                        },
                      },
                      '& .MuiInputBase-input': {
                        padding: '16px 14px',
                      },
                    }}
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
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1.5 }}>
                          <EditIcon sx={{ color: 'text.secondary' }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        paddingLeft: '14px',
                        '& fieldset': {
                          borderWidth: 2,
                        },
                      },
                      '& .MuiInputBase-input': {
                        padding: '16px 14px',
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      backgroundColor: '#002395',
                      color: 'white',
                      px: 4,
                      py: 2,
                      fontWeight: 700,
                      borderRadius: '25px',
                      boxShadow: '0 4px 12px rgba(0, 35, 149, 0.3)',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: '#ED2939',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 16px rgba(237, 41, 57, 0.4)',
                        '& .MuiButton-endIcon': {
                          transform: 'translateX(4px)',
                        },
                      },
                      '& .MuiButton-endIcon': {
                        transition: 'transform 0.3s ease',
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
            {/* Visit Our Office Card */}
            <Card
              sx={{
                position: 'relative',
                height: 200,
                overflow: 'hidden',
                borderRadius: 3,
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 12px 32px rgba(0, 35, 149, 0.25)',
                  '& .office-bg': {
                    transform: 'scale(1.1)',
                    filter: 'brightness(0.6) blur(0px)',
                  },
                },
              }}
              onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Nice+France', '_blank')}
            >
              {/* Background Photo */}
              <Box
                className="office-bg"
                component="img"
                src={getImagePath("/photos/583741041_1157902773184394_5619801435922057517_n.jpg")}
                alt="Nice, France"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.5) blur(2px) saturate(1.1)',
                  transition: 'all 0.4s ease',
                }}
              />
              {/* Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.8) 0%, rgba(0, 35, 149, 0.6) 100%)',
                }}
              />
              {/* Content */}
              <Box
                sx={{
                  position: 'relative',
                  height: '100%',
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  zIndex: 2,
                }}
              >
                <Box sx={{ color: 'white', mb: 2, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
                  <LocationOnIcon sx={{ fontSize: 32 }} />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                    Visit Our Office
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white', textShadow: '0 1px 3px rgba(0,0,0,0.5)', mb: 1 }}>
                    Nice, France
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.5)', fontStyle: 'italic' }}>
                    Click to open in Google Maps
                  </Typography>
                </Box>
              </Box>
            </Card>

            {/* Social Media Connect Card */}
            <Card
              sx={{
                position: 'relative',
                height: 200,
                overflow: 'hidden',
                borderRadius: 3,
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 12px 32px rgba(237, 41, 57, 0.25)',
                  '& .social-bg': {
                    transform: 'scale(1.1)',
                    filter: 'brightness(0.6) blur(0px)',
                  },
                },
              }}
            >
              {/* Background Photo - Collage of avatars */}
              <Box
                className="social-bg"
                component="img"
                src={getImagePath("/photos/583943471_1157911509850187_2575083228465038744_n.jpg")}
                alt="Community"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.5) blur(2px) saturate(1.1)',
                  transition: 'all 0.4s ease',
                }}
              />
              {/* Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(237, 41, 57, 0.8) 0%, rgba(237, 41, 57, 0.6) 100%)',
                }}
              />
              {/* Content */}
              <Box
                sx={{
                  position: 'relative',
                  height: '100%',
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  zIndex: 2,
                }}
              >
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                    Social Media Connect
                  </Typography>
                  <AvatarGroup max={4} sx={{ mb: 2 }}>
                    <Avatar src={getImagePath("/photos/583924019_1157903166517688_8756873269993443102_n.jpg")} />
                    <Avatar src={getImagePath("/photos/571419367_1143811194593552_6930038688628840775_n.jpg")} />
                    <Avatar src={getImagePath("/photos/572851437_1143811217926883_7725194936764095335_n.jpg")} />
                    <Avatar src={getImagePath("/photos/583489432_1157911303183541_1292926580526900497_n.jpg")} />
                  </AvatarGroup>
                </Box>
                <Stack direction="row" spacing={1.5}>
                  <Button
                    component="a"
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    sx={{
                      backgroundColor: '#E4405F',
                      color: 'white',
                      minWidth: 40,
                      '&:hover': { backgroundColor: '#C13584' },
                    }}
                  >
                    <InstagramIcon />
                  </Button>
                  <Button
                    component="a"
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    sx={{
                      backgroundColor: '#0077B5',
                      color: 'white',
                      minWidth: 40,
                      '&:hover': { backgroundColor: '#005885' },
                    }}
                  >
                    <LinkedInIcon />
                  </Button>
                  <Button
                    component="a"
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    sx={{
                      backgroundColor: '#1877F2',
                      color: 'white',
                      minWidth: 40,
                      '&:hover': { backgroundColor: '#1565C0' },
                    }}
                  >
                    <FacebookIcon />
                  </Button>
                </Stack>
              </Box>
            </Card>

            {/* Partnership Inquiry Card */}
            <Card
              sx={{
                position: 'relative',
                height: 200,
                overflow: 'hidden',
                borderRadius: 3,
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 12px 32px rgba(0, 35, 149, 0.25)',
                  '& .partnership-bg': {
                    transform: 'scale(1.1)',
                    filter: 'brightness(0.6) blur(0px)',
                  },
                },
              }}
              onClick={() => {
                const formElement = document.getElementById('contact-form');
                if (formElement) {
                  formElement.scrollIntoView({ behavior: 'smooth' });
                  setFormData((prev) => ({ ...prev, subject: 'Partnership Inquiry' }));
                }
              }}
            >
              {/* Background Photo */}
              <Box
                className="partnership-bg"
                component="img"
                src={getImagePath("/photos/572851437_1143811217926883_7725194936764095335_n.jpg")}
                alt="Partnership"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.5) blur(2px) saturate(1.1)',
                  transition: 'all 0.4s ease',
                }}
              />
              {/* Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.8) 0%, rgba(0, 35, 149, 0.6) 100%)',
                }}
              />
              {/* Content */}
              <Box
                sx={{
                  position: 'relative',
                  height: '100%',
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  zIndex: 2,
                }}
              >
                <Box sx={{ color: 'white', mb: 2, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
                  <HandshakeIcon sx={{ fontSize: 32 }} />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                    Partnership Inquiry
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white', textShadow: '0 1px 3px rgba(0,0,0,0.5)', mb: 1 }}>
                    Interested in collaborating?
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.5)', fontStyle: 'italic' }}>
                    Click to fill partnership form
                  </Typography>
                </Box>
              </Box>
            </Card>

            <Divider />

            {/* Email Card with Background */}
            <Card
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderTop: '4px solid',
                borderTopColor: '#002395',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 6px 20px rgba(0, 35, 149, 0.15)',
                  '& .email-bg': {
                    transform: 'scale(1.1)',
                    filter: 'brightness(0.4) blur(0px)',
                  },
                },
              }}
            >
              {/* Background Image - Team at computers */}
              <Box
                className="email-bg"
                component="img"
                src={getImagePath("/photos/583924019_1157903166517688_8756873269993443102_n.jpg")}
                alt="Team working"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.5) blur(4px) saturate(1.1)',
                  transition: 'all 0.4s ease',
                  zIndex: 0,
                }}
              />
              {/* Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.7) 0%, rgba(0, 35, 149, 0.5) 100%)',
                  zIndex: 1,
                }}
              />
              <CardContent sx={{ p: 3, position: 'relative', zIndex: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      mr: 2,
                    }}
                  >
                    <EmailIcon />
                  </Box>
                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                      Email
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'white', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                      <a href="mailto:mitra.france@gmail.com" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>
                        mitra.france@gmail.com
                      </a>
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {/* Phone Card with Background */}
            <Card
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderTop: '4px solid',
                borderTopColor: '#ED2939',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 6px 20px rgba(237, 41, 57, 0.15)',
                  '& .phone-bg': {
                    transform: 'scale(1.1)',
                    filter: 'brightness(0.4) blur(0px)',
                  },
                },
              }}
            >
              {/* Background Image - Office interior */}
              <Box
                className="phone-bg"
                component="img"
                src={getImagePath("/photos/583741041_1157902773184394_5619801435922057517_n.jpg")}
                alt="Office interior"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.5) blur(4px) saturate(1.1)',
                  transition: 'all 0.4s ease',
                  zIndex: 0,
                }}
              />
              {/* Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(237, 41, 57, 0.7) 0%, rgba(237, 41, 57, 0.5) 100%)',
                  zIndex: 1,
                }}
              />
              <CardContent sx={{ p: 3, position: 'relative', zIndex: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      mr: 2,
                    }}
                  >
                    <PhoneIcon />
                  </Box>
                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                      Phone
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'white', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                      <a href="tel:+33641092395" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>
                        +33 6 41 09 23 95
                      </a>
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {/* Location Card with Map */}
            <Card
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderTop: '4px solid',
                borderTopColor: '#4CAF50',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 6px 20px rgba(76, 175, 80, 0.15)',
                  '& .location-map': {
                    opacity: 1,
                  },
                },
              }}
              onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Nice+France', '_blank')}
            >
              {/* Static Map Placeholder */}
              <Box
                className="location-map"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.05) 100%)',
                  backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(76, 175, 80, 0.2) 2px, transparent 2px)',
                  backgroundSize: '40px 40px',
                  opacity: 0.5,
                  transition: 'opacity 0.3s ease',
                  zIndex: 0,
                }}
              />
              {/* On hover - show real map preview */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'url(https://maps.googleapis.com/maps/api/staticmap?center=Nice,France&zoom=13&size=400x200&key=YOUR_API_KEY)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  zIndex: 1,
                  '&:hover': {
                    opacity: 0.3,
                  },
                }}
              />
              <CardContent sx={{ p: 3, position: 'relative', zIndex: 2 }}>
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
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#0b1b3a' }}>
                      Location
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Nice, France
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic', display: 'block', mt: 0.5 }}>
                      Click to open in Google Maps
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

            {/* Follow Us Card - Modernized */}
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                  Follow Us
                </Typography>
                <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 3 }}>
                  <Button
                    variant="contained"
                    startIcon={<FacebookIcon />}
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="medium"
                    sx={{
                      backgroundColor: '#1877F2',
                      color: 'white',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: '#1565C0',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(24, 119, 242, 0.4)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Facebook
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="medium"
                    sx={{
                      backgroundColor: '#FF0000',
                      color: 'white',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: '#CC0000',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(255, 0, 0, 0.4)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    YouTube
                  </Button>
                </Stack>
                <Box sx={{ mb: 3 }}>
                  <Button
                    variant="outlined"
                    startIcon={<RadioIcon />}
                    href="https://el-radio.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="medium"
                    fullWidth
                    sx={{
                      borderColor: '#666',
                      color: '#666',
                      fontWeight: 600,
                      '&:hover': {
                        borderColor: '#333',
                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    el-radio.fr webradio
                  </Button>
                </Box>
                
                {/* Photo Strip from Instagram/Gallery */}
                <Box>
                  <Typography variant="caption" color="text.secondary" sx={{ mb: 1.5, display: 'block', fontWeight: 600 }}>
                    Latest from our community
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 1.5,
                      overflowX: 'auto',
                      pb: 1,
                      '&::-webkit-scrollbar': {
                        height: 4,
                      },
                      '&::-webkit-scrollbar-track': {
                        backgroundColor: 'rgba(0,0,0,0.05)',
                        borderRadius: 2,
                      },
                      '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(0, 35, 149, 0.3)',
                        borderRadius: 2,
                      },
                    }}
                  >
                    {[
                      '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
                      '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
                      '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
                      '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
                    ].map((photo, idx) => (
                      <Box
                        key={idx}
                        component="a"
                        href="/gallery"
                        sx={{
                          minWidth: 80,
                          height: 80,
                          borderRadius: 2,
                          overflow: 'hidden',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.1)',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                          },
                        }}
                      >
                        <Box
                          component="img"
                          src={photo}
                          alt={`Community photo ${idx + 1}`}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'brightness(0.95) saturate(1.1)',
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>

      <Divider sx={{ my: 8 }} />

      {/* Our Presence & Locations */}
      <Box sx={{ mb: 8 }}>
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<LocationOnIcon />}
              label="Global Presence"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 2, 
                fontWeight: 800, 
                color: '#0b1b3a',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '3px',
                  background: '#ED2939',
                  borderRadius: '2px',
                },
              }}
            >
              Our Presence & Locations
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              Discover our headquarters in Nice and our partner network across Europe
            </Typography>
          </Box>

          {/* Interactive Map Section */}
          <Box sx={{ mb: 8 }}>
            <Card
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 4,
                background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                border: '2px solid',
                borderColor: 'primary.main',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, color: '#0b1b3a', textAlign: 'center' }}>
                Interactive Map of Our Presence
              </Typography>
              
              {/* Simplified Europe Map with City Points */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: 400, sm: 500, md: 600 },
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.08) 0%, rgba(0, 35, 149, 0.03) 100%)',
                  borderRadius: 3,
                  overflow: 'hidden',
                  border: '2px solid',
                  borderColor: '#002395',
                  boxShadow: 'inset 0 2px 8px rgba(0, 35, 149, 0.1)',
                }}
              >
                {/* Background Map Pattern - Enhanced */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(0, 35, 149, 0.15) 2px, transparent 2px)',
                    backgroundSize: '60px 60px',
                    opacity: 0.4,
                  }}
                />
                {/* Additional subtle grid pattern */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `
                      linear-gradient(rgba(0, 35, 149, 0.03) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0, 35, 149, 0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                    opacity: 0.5,
                  }}
                />
                
                {/* City Points with Hover Photos */}
                {[
                  {
                    city: 'Nice',
                    country: 'France',
                    x: 45,
                    y: 60,
                    isHeadquarters: true,
                    photo: '/photos/583741041_1157902773184394_5619801435922057517_n.jpg',
                    description: 'Our headquarters in the heart of the French Riviera',
                  },
                  {
                    city: 'Berlin',
                    country: 'Germany',
                    x: 55,
                    y: 35,
                    isHeadquarters: false,
                    photo: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
                    description: 'Erasmus+ project collaboration',
                  },
                  {
                    city: 'Kyiv',
                    country: 'Ukraine',
                    x: 65,
                    y: 30,
                    isHeadquarters: false,
                    photo: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
                    description: 'Digital literacy programs',
                  },
                  {
                    city: 'Madrid',
                    country: 'Spain',
                    x: 25,
                    y: 55,
                    isHeadquarters: false,
                    photo: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
                    description: 'Cultural exchange initiatives',
                  },
                ].map((location, idx) => (
                  <Tooltip
                    key={idx}
                    title={
                      <Box sx={{ p: 1 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, color: 'white' }}>
                          {location.city}, {location.country}
                        </Typography>
                        <Box
                          component="img"
                          src={location.photo}
                          alt={location.city}
                          sx={{
                            width: 150,
                            height: 100,
                            objectFit: 'cover',
                            borderRadius: 2,
                            mb: 1,
                            border: '2px solid white',
                          }}
                        />
                        <Typography variant="caption" sx={{ color: 'white', display: 'block' }}>
                          {location.description}
                        </Typography>
                      </Box>
                    }
                    arrow
                    placement="top"
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        left: `${location.x}%`,
                        top: `${location.y}%`,
                        transform: 'translate(-50%, -50%)',
                        zIndex: 2,
                      }}
                    >
                      {/* Pulsating ring effect */}
                      <Box
                        sx={{
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: location.isHeadquarters ? 40 : 32,
                          height: location.isHeadquarters ? 40 : 32,
                          borderRadius: '50%',
                          backgroundColor: location.isHeadquarters ? 'rgba(237, 41, 57, 0.2)' : 'rgba(0, 35, 149, 0.2)',
                          animation: 'pulse 2s infinite',
                          '@keyframes pulse': {
                            '0%': {
                              transform: 'translate(-50%, -50%) scale(1)',
                              opacity: 1,
                            },
                            '100%': {
                              transform: 'translate(-50%, -50%) scale(2)',
                              opacity: 0,
                            },
                          },
                        }}
                      />
                      {/* Main point */}
                      <Box
                        sx={{
                          position: 'relative',
                          width: location.isHeadquarters ? 24 : 18,
                          height: location.isHeadquarters ? 24 : 18,
                          borderRadius: '50%',
                          backgroundColor: location.isHeadquarters ? '#ED2939' : '#002395',
                          border: '3px solid white',
                          boxShadow: `0 4px 12px ${location.isHeadquarters ? 'rgba(237, 41, 57, 0.4)' : 'rgba(0, 35, 149, 0.4)'}`,
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.4)',
                            boxShadow: `0 6px 20px ${location.isHeadquarters ? 'rgba(237, 41, 57, 0.6)' : 'rgba(0, 35, 149, 0.6)'}`,
                          },
                        }}
                      >
                        {/* Inner glow */}
                        <Box
                          sx={{
                            position: 'absolute',
                            inset: 2,
                            borderRadius: '50%',
                            background: `radial-gradient(circle, ${location.isHeadquarters ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)'} 0%, transparent 70%)`,
                          }}
                        />
                      </Box>
                      {/* HQ Label */}
                      {location.isHeadquarters && (
                        <Box
                          sx={{
                            position: 'absolute',
                            top: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            mt: 1,
                            whiteSpace: 'nowrap',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            color: '#002395',
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            px: 1,
                            py: 0.5,
                            borderRadius: 1,
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            textShadow: 'none',
                          }}
                        >
                          HQ
                        </Box>
                      )}
                    </Box>
                  </Tooltip>
                ))}
              </Box>
            </Card>
          </Box>

          {/* Inside Our Hub - Office Gallery */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, color: '#0b1b3a', textAlign: 'center' }}>
              Inside Our Hub
            </Typography>
            <ImageList
              variant="quilted"
              cols={4}
              rowHeight={200}
              gap={16}
              sx={{ mb: 4 }}
            >
              {[
                {
                  img: '/photos/583741041_1157902773184394_5619801435922057517_n.jpg',
                  title: 'Where the magic happens',
                  rows: 2,
                  cols: 2,
                },
                {
                  img: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
                  title: 'Team collaboration space',
                  rows: 1,
                  cols: 1,
                },
                {
                  img: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
                  title: 'Digital literacy workshops',
                  rows: 1,
                  cols: 1,
                },
                {
                  img: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
                  title: 'Creative workspace',
                  rows: 1,
                  cols: 2,
                },
              ].map((item, idx) => (
                <ImageListItem
                  key={idx}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      boxShadow: '0 8px 24px rgba(0, 35, 149, 0.3)',
                      '& .photo-overlay': {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={item.img}
                    alt={item.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.9) saturate(1.05)',
                    }}
                  />
                  <Box
                    className="photo-overlay"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%)',
                      p: 2,
                      opacity: 0.8,
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        fontStyle: 'italic',
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </ImageListItem>
              ))}
            </ImageList>
          </Box>

          {/* Key Contacts Cards */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, color: '#0b1b3a', textAlign: 'center' }}>
              Key Contacts
            </Typography>
            <Grid container spacing={3}>
              {[
                {
                  name: 'Anna',
                  role: 'Project Coordinator',
                  email: 'anna@mitra-france.org',
                  photo: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
                  color: '#002395',
                },
                {
                  name: 'Marie',
                  role: 'Digital Literacy Lead',
                  email: 'marie@mitra-france.org',
                  photo: '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
                  color: '#ED2939',
                },
                {
                  name: 'Sophie',
                  role: 'Partnership Manager',
                  email: 'sophie@mitra-france.org',
                  photo: '/photos/583489432_1157911303183541_1292926580526900497_n.jpg',
                  color: '#002395',
                },
              ].map((contact, idx) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                  <Card
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      textAlign: 'center',
                      border: '2px solid',
                      borderColor: `${contact.color}30`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: `0 12px 32px ${contact.color}30`,
                        borderColor: contact.color,
                      },
                    }}
                  >
                    <Avatar
                      src={contact.photo}
                      alt={contact.name}
                      sx={{
                        width: 120,
                        height: 120,
                        mx: 'auto',
                        mb: 2,
                        border: `4px solid ${contact.color}`,
                        boxShadow: `0 4px 12px ${contact.color}30`,
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, color: '#0b1b3a' }}>
                      {contact.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {contact.role}
                    </Typography>
                    <Button
                      component="a"
                      href={`mailto:${contact.email}?subject=Contact from MITRA FRANCE website`}
                      variant="outlined"
                      size="small"
                      sx={{
                        borderColor: contact.color,
                        color: contact.color,
                        fontWeight: 600,
                        '&:hover': {
                          borderColor: contact.color,
                          backgroundColor: `${contact.color}10`,
                        },
                      }}
                    >
                      Write to {contact.name}
                    </Button>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* How to Reach Us - Transportation */}
          <Box>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, color: '#0b1b3a', textAlign: 'center' }}>
              How to Reach Us
            </Typography>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: '2px solid',
                    borderColor: '#ED293930',
                    height: '100%',
                    display: 'flex',
                    gap: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(237, 41, 57, 0.2)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      minWidth: 120,
                      height: 120,
                      borderRadius: 2,
                      overflow: 'hidden',
                      flexShrink: 0,
                    }}
                  >
                    <Box
                      component="img"
                      src="/photos/583741041_1157902773184394_5619801435922057517_n.jpg"
                      alt="Tram stop"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.9) saturate(1.1)',
                      }}
                    />
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <TramIcon sx={{ color: '#ED2939', fontSize: 28 }} />
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#0b1b3a' }}>
                        By Tram
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      Take tram line 1 to <strong>Garibaldi</strong> station
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Walk 5 minutes from the station
                    </Typography>
                  </Box>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: '2px solid',
                    borderColor: '#ED293930',
                    height: '100%',
                    display: 'flex',
                    gap: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(237, 41, 57, 0.2)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      minWidth: 120,
                      height: 120,
                      borderRadius: 2,
                      overflow: 'hidden',
                      flexShrink: 0,
                    }}
                  >
                    <Box
                      component="img"
                      src="/photos/584326681_1157904053184266_2071216266526493174_n.jpg"
                      alt="Bus stop"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.9) saturate(1.1)',
                      }}
                    />
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <DirectionsBusIcon sx={{ color: '#ED2939', fontSize: 28 }} />
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#0b1b3a' }}>
                        By Bus
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      Bus lines <strong>12, 23, 38</strong> stop nearby
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Check schedules at nice.fr
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

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
