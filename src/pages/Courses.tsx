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
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import PublicIcon from '@mui/icons-material/Public';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import BookIcon from '@mui/icons-material/Book';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SecurityIcon from '@mui/icons-material/Security';
import ShareIcon from '@mui/icons-material/Share';
import CloudIcon from '@mui/icons-material/Cloud';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ArticleIcon from '@mui/icons-material/Article';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ChatIcon from '@mui/icons-material/Chat';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import TranslateIcon from '@mui/icons-material/Translate';
import GroupIcon from '@mui/icons-material/Group';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BrushIcon from '@mui/icons-material/Brush';
import CelebrationIcon from '@mui/icons-material/Celebration';
import MicIcon from '@mui/icons-material/Mic';
import { getImagePath } from '../utils/imagePath';

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
              label="Lifelong Learning"
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
              Catalog of Courses & Trainings
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
              Lifelong Learning - Educational programs for personal and professional development. 
              Start your learning journey today and unlock new opportunities.
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
                label="100+ Courses Available"
                sx={{
                  backgroundColor: 'rgba(76, 175, 80, 0.1)',
                  color: 'success.main',
                  fontWeight: 600,
                }}
              />
              <Chip
                icon={<TrendingUpIcon sx={{ color: 'primary.main' }} />}
                label="5000+ Students"
                sx={{
                  backgroundColor: 'rgba(0, 35, 149, 0.1)',
                  color: 'primary.main',
                  fontWeight: 600,
                }}
              />
              <Chip
                icon={<PublicIcon sx={{ color: 'error.main' }} />}
                label="Free Access"
                sx={{
                  backgroundColor: 'rgba(237, 41, 57, 0.1)',
                  color: 'error.main',
                  fontWeight: 600,
                }}
              />
            </Box>
          </Box>

          {/* ABILITY: Make it easy to navigate - Quick course categories */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                mb: 3,
                color: 'text.secondary',
                fontWeight: 600,
                fontSize: '1.2rem',
              }}
            >
              Choose your learning path:
            </Typography>
            <Grid container spacing={3} sx={{ mb: 3 }}>
              {[
                {
                  icon: <SchoolIcon />,
                  label: 'Digital Literacy',
                  count: '25+ courses',
                  photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                  gradient: 'linear-gradient(135deg, rgba(0, 35, 149, 0.7) 0%, rgba(0, 35, 149, 0.5) 100%)',
                },
                {
                  icon: <LanguageIcon />,
                  label: 'Language Learning',
                  count: '30+ courses',
                  photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                  gradient: 'linear-gradient(135deg, rgba(237, 41, 57, 0.7) 0%, rgba(237, 41, 57, 0.5) 100%)',
                },
                {
                  icon: <ComputerIcon />,
                  label: 'Media Literacy',
                  count: '20+ courses',
                  photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                  gradient: 'linear-gradient(135deg, rgba(0, 35, 149, 0.7) 0%, rgba(0, 35, 149, 0.5) 100%)',
                },
                {
                  icon: <PaletteIcon />,
                  label: 'Arts & Culture',
                  count: '25+ courses',
                  photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'),
                  gradient: 'linear-gradient(135deg, rgba(237, 41, 57, 0.7) 0%, rgba(237, 41, 57, 0.5) 100%)',
                },
              ].map((category) => (
                <Grid size={{ xs: 6, sm: 3 }} key={category.label}>
                  <Card
                    sx={{
                      position: 'relative',
                      height: 200,
                      textAlign: 'center',
                      border: '2px solid',
                      borderColor: 'divider',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      transition: 'all 0.4s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 32px rgba(0, 35, 149, 0.3)',
                        borderColor: 'primary.main',
                        '& .category-photo': {
                          transform: 'scale(1.1)',
                          filter: 'brightness(1.1)',
                        },
                        '& .category-count': {
                          fontSize: '1.1rem',
                          fontWeight: 700,
                        },
                      },
                    }}
                  >
                    <Box
                      className="category-photo"
                      component="img"
                      src={category.photo}
                      alt={category.label}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.7) saturate(1.1)',
                        transition: 'all 0.4s ease',
                        zIndex: 0,
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: category.gradient,
                        zIndex: 1,
                      }}
                    />
                    <Box
                      sx={{
                        position: 'relative',
                        zIndex: 2,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 2,
                      }}
                    >
                      <Box sx={{ color: 'white', mb: 1.5, fontSize: 40, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
                        {category.icon}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                        {category.label}
                      </Typography>
                      <Typography
                        className="category-count"
                        variant="body2"
                        sx={{
                          color: 'white',
                          fontWeight: 600,
                          textShadow: '0 1px 4px rgba(0,0,0,0.5)',
                          transition: 'all 0.4s ease',
                        }}
                      >
                        {category.count}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* MOTIVATION: Overall impact stats with visual appeal */}
          <Grid container spacing={3} sx={{ mt: 2, mb: 4 }}>
            {[
              {
                label: 'Active Students',
                value: '5000+',
                color: '#002395',
                avatars: [
                  getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                  getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                  getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                  getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'),
                ],
              },
              {
                label: 'Available Courses',
                value: '100+',
                color: '#ED2939',
                icon: <MenuBookIcon />,
              },
              {
                label: 'Success Rate',
                value: '98%',
                color: '#4CAF50',
                icon: <TrendingUpIcon />,
              },
              {
                label: 'Expert Instructors',
                value: '50+',
                color: '#002395',
                instructorPhoto: getImagePath('/photos/583741041_1157902773184394_5619801435922057517_n.jpg'),
              },
            ].map((stat) => (
              <Grid size={{ xs: 6, sm: 3 }} key={stat.label}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    border: '2px solid',
                    borderColor: `${stat.color}30`,
                    backgroundColor: `${stat.color}08`,
                    borderRadius: '20px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 6px 20px ${stat.color}30`,
                      borderColor: stat.color,
                    },
                  }}
                >
                  {stat.avatars ? (
                    <AvatarGroup
                      max={4}
                      sx={{
                        justifyContent: 'center',
                        mb: 1.5,
                        '& .MuiAvatar-root': {
                          width: 48,
                          height: 48,
                          border: `2px solid ${stat.color}`,
                          boxShadow: `0 2px 8px ${stat.color}30`,
                        },
                      }}
                    >
                      {stat.avatars.map((avatar, idx) => (
                        <Avatar key={idx} src={avatar} alt={`Student ${idx + 1}`} />
                      ))}
                    </AvatarGroup>
                  ) : stat.instructorPhoto ? (
                    <Avatar
                      src={stat.instructorPhoto}
                      alt="Expert Instructor"
                      sx={{
                        width: 64,
                        height: 64,
                        mx: 'auto',
                        mb: 1.5,
                        border: `3px solid ${stat.color}`,
                        boxShadow: `0 4px 12px ${stat.color}30`,
                      }}
                    />
                  ) : (
                    <Box sx={{ color: stat.color, mb: 1.5, fontSize: 48 }}>{stat.icon}</Box>
                  )}
                  <Typography variant="h3" sx={{ color: stat.color, fontWeight: 800, mb: 0.5 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                    {stat.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* PROMPT: Clear call-to-action */}
          <Box
            sx={{
              position: 'relative',
              textAlign: 'center',
              p: 6,
              borderRadius: '24px',
              overflow: 'hidden',
              maxWidth: '900px',
              mx: 'auto',
              mt: 2,
              minHeight: 300,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Background Photo */}
            <Box
              component="img"
              src={getImagePath("/photos/583924019_1157903166517688_8756873269993443102_n.jpg")}
              alt="Learning Environment"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'blur(3px) brightness(0.6) saturate(1.1)',
                zIndex: 0,
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.4) 0%, rgba(237, 41, 57, 0.4) 100%)',
                zIndex: 1,
              }}
            />

            {/* Content */}
            <Box sx={{ position: 'relative', zIndex: 2 }}>
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 800, color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                Ready to Start Learning?
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.95)', textShadow: '0 1px 4px rgba(0,0,0,0.5)', maxWidth: '600px', mx: 'auto' }}>
                Explore our courses below or use smart shortcuts to get instant access. 
                All courses are free and open to everyone.
              </Typography>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ justifyContent: 'center', alignItems: 'center', position: 'relative' }}
              >
                {/* Floating Badge */}
                <Chip
                  label="New course added today!"
                  sx={{
                    position: 'absolute',
                    top: { xs: -40, sm: -50 },
                    right: { xs: 'auto', sm: 0 },
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    py: 2,
                    px: 2,
                    boxShadow: '0 4px 16px rgba(76, 175, 80, 0.5)',
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                      '0%, 100%': {
                        transform: 'scale(1)',
                        boxShadow: '0 4px 16px rgba(76, 175, 80, 0.5)',
                      },
                      '50%': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 6px 24px rgba(76, 175, 80, 0.7)',
                      },
                    },
                  }}
                />
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<BookIcon />}
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => {
                    const element = document.getElementById('courses-catalog');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  sx={{
                    px: 6,
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    borderRadius: '30px',
                    backgroundColor: '#002395',
                    color: 'white',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.5)',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      backgroundColor: '#001a7a',
                      transform: 'translateY(-4px) scale(1.05)',
                      boxShadow: '0 12px 32px rgba(0, 35, 149, 0.7)',
                      '& .MuiButton-endIcon': {
                        transform: 'translateX(6px)',
                      },
                    },
                    '& .MuiButton-endIcon': {
                      transition: 'transform 0.4s ease',
                    },
                  }}
                >
                  Browse Courses
                </Button>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 2,
                    fontSize: '1rem',
                    fontWeight: 600,
                    borderRadius: '25px',
                    borderWidth: 2,
                    borderColor: 'white',
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                      borderWidth: 2,
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Get in Touch
                </Button>
              </Stack>
            </Box>
          </Box>

          {/* Certificates Marquee */}
          <Box sx={{ mt: 6, mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, color: '#0b1b3a', textAlign: 'center' }}>
              Recent Certificates Issued
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 3,
                overflow: 'hidden',
                position: 'relative',
                '&::before, &::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  width: 100,
                  zIndex: 2,
                  pointerEvents: 'none',
                },
                '&::before': {
                  left: 0,
                  background: 'linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, transparent 100%)',
                },
                '&::after': {
                  right: 0,
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 1) 100%)',
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: 3,
                  animation: 'marquee 40s linear infinite',
                  '@keyframes marquee': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                  },
                }}
              >
                {[
                  { photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'), title: 'Digital Skills Certificate' },
                  { photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'), title: 'Erasmus+ Completion' },
                  { photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'), title: 'Media Literacy Diploma' },
                  { photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'), title: 'Language Learning Certificate' },
                  { photo: getImagePath('/photos/571419367_1143811194593552_6930038688628840775_n.jpg'), title: 'Cultural Exchange Award' },
                  { photo: getImagePath('/photos/583489432_1157911303183541_1292926580526900497_n.jpg'), title: 'Community Engagement' },
                ]
                  .concat([
                    { photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'), title: 'Digital Skills Certificate' },
                    { photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'), title: 'Erasmus+ Completion' },
                    { photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'), title: 'Media Literacy Diploma' },
                    { photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'), title: 'Language Learning Certificate' },
                    { photo: getImagePath('/photos/571419367_1143811194593552_6930038688628840775_n.jpg'), title: 'Cultural Exchange Award' },
                    { photo: getImagePath('/photos/583489432_1157911303183541_1292926580526900497_n.jpg'), title: 'Community Engagement' },
                  ])
                  .map((cert, idx) => (
                    <Card
                      key={idx}
                      sx={{
                        minWidth: 200,
                        height: 150,
                        borderRadius: '16px',
                        overflow: 'hidden',
                        position: 'relative',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                        border: '2px solid',
                        borderColor: '#002395',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 24px rgba(0, 35, 149, 0.4)',
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={cert.photo}
                        alt={cert.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'brightness(0.85) saturate(1.1)',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          background: 'linear-gradient(180deg, transparent 0%, rgba(0, 35, 149, 0.95) 100%)',
                          p: 1.5,
                        }}
                      >
                        <Typography variant="caption" sx={{ color: 'white', fontWeight: 700, textShadow: '0 1px 2px rgba(0,0,0,0.5)', fontSize: '0.7rem' }}>
                          {cert.title}
                        </Typography>
                      </Box>
                      {/* MITRA FRANCE Logo Badge */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 8,
                          right: 8,
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          backgroundColor: '#ED2939',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 18,
                          fontWeight: 700,
                          color: 'white',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                        }}
                      >
                        M
                      </Box>
                    </Card>
                  ))}
              </Box>
            </Box>
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
            Free to join • No registration needed • Instant access • Takes 2 minutes
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
          <Box sx={{ mb: 6 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Chip
                icon={<BoltIcon />}
                label="Smart Shortcuts"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  fontSize: '1rem',
                  py: 2,
                  px: 1,
                  backgroundColor: '#FF9800',
                  color: 'white',
                  border: '2px solid #FF9800',
                  boxShadow: '0 4px 12px rgba(255, 152, 0, 0.3)',
                }}
              />
              <Typography variant="h2" sx={{ mb: 3, fontWeight: 800, color: '#0b1b3a' }}>
                Looking for a Faster Path?
              </Typography>

              {/* Interactive Progress Line */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 2,
                  mb: 4,
                  position: 'relative',
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      backgroundColor: '#002395',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: 24,
                      fontWeight: 700,
                      boxShadow: '0 4px 12px rgba(0, 35, 149, 0.3)',
                    }}
                  >
                    ✓
                  </Box>
                  <Typography variant="caption" sx={{ fontWeight: 600, color: '#002395' }}>
                    Choice
                  </Typography>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    height: 2,
                    background: 'repeating-linear-gradient(90deg, #FF9800 0, #FF9800 8px, transparent 8px, transparent 16px)',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: '50%',
                      left: 0,
                      right: 0,
                      height: 2,
                      background: '#FF9800',
                      transform: 'translateY(-50%)',
                      animation: 'progressLine 2s ease-in-out infinite',
                      '@keyframes progressLine': {
                        '0%': { width: '0%' },
                        '100%': { width: '100%' },
                      },
                    },
                  }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      backgroundColor: '#FF9800',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: 24,
                      boxShadow: '0 4px 12px rgba(255, 152, 0, 0.3)',
                    }}
                  >
                    ⚡
                  </Box>
                  <Typography variant="caption" sx={{ fontWeight: 600, color: '#FF9800' }}>
                    Shortcuts
                  </Typography>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    height: 2,
                    background: 'repeating-linear-gradient(90deg, #FF9800 0, #FF9800 8px, transparent 8px, transparent 16px)',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: '50%',
                      left: 0,
                      right: 0,
                      height: 2,
                      background: '#FF9800',
                      transform: 'translateY(-50%)',
                      animation: 'progressLine 2s ease-in-out infinite 0.5s',
                      '@keyframes progressLine': {
                        '0%': { width: '0%' },
                        '100%': { width: '100%' },
                      },
                    },
                  }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      backgroundColor: '#4CAF50',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: 24,
                      fontWeight: 700,
                      boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)',
                    }}
                  >
                    ★
                  </Box>
                  <Typography variant="caption" sx={{ fontWeight: 600, color: '#4CAF50' }}>
                    Success
                  </Typography>
                </Box>
              </Box>

              {/* Text with Infographic */}
              <Grid container spacing={4} alignItems="center" sx={{ mb: 4 }}>
                <Grid size={{ xs: 12, md: 7 }}>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#0b1b3a' }}>
                    We understand that sometimes you need shortcuts to overcome obstacles. These smart shortcuts are intentionally designed to help you progress when you feel stuck.
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 5 }}>
                  {/* Obstacle Overcoming Infographic */}
                  <Box
                    sx={{
                      position: 'relative',
                      height: 200,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      component="svg"
                      viewBox="0 0 300 200"
                      sx={{
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      {/* Ladder/Stairs going up */}
                      <path
                        d="M 50 150 L 50 50 L 100 50 L 100 100 L 150 100 L 150 30 L 200 30 L 200 80 L 250 80 L 250 20"
                        fill="none"
                        stroke="#FF9800"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {/* Arrow through maze */}
                      <path
                        d="M 60 140 Q 100 120, 140 100 T 240 60"
                        fill="none"
                        stroke="#FF9800"
                        strokeWidth="3"
                        strokeDasharray="5 5"
                        markerEnd="url(#arrowhead)"
                      />
                      <defs>
                        <marker
                          id="arrowhead"
                          markerWidth="10"
                          markerHeight="10"
                          refX="9"
                          refY="3"
                          orient="auto"
                        >
                          <polygon points="0 0, 10 3, 0 6" fill="#FF9800" />
                        </marker>
                      </defs>
                      {/* Success icon at top */}
                      <circle cx="250" cy="20" r="15" fill="#4CAF50" />
                      <text x="250" y="26" fontSize="12" fill="white" fontWeight="700" textAnchor="middle">
                        ✓
                      </text>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            {/* Visual Path Cards */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, color: '#0b1b3a', textAlign: 'center' }}>
                Choose Your Learning Path
              </Typography>
              <Grid container spacing={3}>
                {[
                  {
                    title: 'Quick Start',
                    subtitle: 'For Beginners',
                    photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                    description: 'Perfect for those just starting their learning journey',
                    icon: <PlayArrowIcon />,
                  },
                  {
                    title: 'Career Boost',
                    subtitle: 'For Professionals',
                    photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                    description: 'Advance your skills and accelerate your career',
                    icon: <TrendingUpIcon />,
                  },
                  {
                    title: 'Deep Dive',
                    subtitle: 'For Advanced',
                    photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                    description: 'Comprehensive programs for in-depth learning',
                    icon: <SchoolIcon />,
                  },
                ].map((path, idx) => (
                  <Grid size={{ xs: 12, sm: 4 }} key={idx}>
                    <Card
                      sx={{
                        position: 'relative',
                        height: 300,
                        borderRadius: '20px',
                        overflow: 'hidden',
                        border: '2px solid',
                        borderColor: 'divider',
                        transition: 'all 0.4s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 12px 32px rgba(0, 35, 149, 0.3)',
                          borderColor: '#002395',
                          '& .path-photo': {
                            transform: 'scale(1.1)',
                            filter: 'brightness(1.1)',
                          },
                        },
                      }}
                    >
                      <Box
                        className="path-photo"
                        component="img"
                        src={path.photo}
                        alt={path.title}
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'brightness(0.7) saturate(1.1)',
                          transition: 'all 0.4s ease',
                          zIndex: 0,
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.8) 0%, rgba(0, 35, 149, 0.6) 100%)',
                          zIndex: 1,
                        }}
                      />
                      <Box
                        sx={{
                          position: 'relative',
                          zIndex: 2,
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          p: 3,
                          textAlign: 'center',
                        }}
                      >
                        <Box
                          sx={{
                            color: 'white',
                            mb: 2,
                            fontSize: 48,
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                          }}
                        >
                          {path.icon}
                        </Box>
                        <Typography variant="h5" sx={{ fontWeight: 800, color: 'white', mb: 1, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                          {path.title}
                        </Typography>
                        <Chip
                          label={path.subtitle}
                          size="small"
                          sx={{
                            mb: 2,
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(10px)',
                            color: 'white',
                            fontWeight: 600,
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                          }}
                        />
                        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                          {path.description}
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
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
                size="large"
                startIcon={<BoltIcon />}
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
                  px: 6,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  borderRadius: '30px',
                  backgroundColor: '#FF9800',
                  color: 'white',
                  boxShadow: '0 8px 24px rgba(255, 152, 0, 0.5)',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    backgroundColor: '#F57C00',
                    transform: 'translateY(-4px) scale(1.05)',
                    boxShadow: '0 12px 32px rgba(255, 152, 0, 0.7)',
                    '& .MuiButton-startIcon': {
                      transform: 'rotate(15deg)',
                    },
                  },
                  '& .MuiButton-startIcon': {
                    transition: 'transform 0.4s ease',
                  },
                }}
              >
                Explore Shortcuts
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

        {/* Course Categories Detail Section - Z-Pattern Layout */}
        <Box id="courses-catalog" sx={{ mb: 8, scrollMarginTop: '100px' }}>
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 6, fontWeight: 800, color: '#0b1b3a' }}>
            Available Courses & Training Programs
          </Typography>
          
          {[
            {
              title: 'Digital Literacy',
              description: 'Essential digital skills for everyday life. Master the tools and knowledge needed to thrive in the digital age, from basic computer operations to advanced online safety.',
              photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
              curriculum: [
                { icon: <ComputerIcon />, label: 'AI Basics' },
                { icon: <SecurityIcon />, label: 'Cyber Security' },
                { icon: <ShareIcon />, label: 'Social Media Safety' },
                { icon: <CloudIcon />, label: 'Cloud Computing' },
                { icon: <SmartphoneIcon />, label: 'Mobile Skills' },
                { icon: <DataUsageIcon />, label: 'Data Privacy' },
              ],
              instructor: {
                name: 'Karina Tronche',
                photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                role: 'Lead Instructor',
              },
              badges: ['Beginner Friendly', 'Certification Included', 'Free Access'],
              duration: '8 weeks',
              level: 'Beginner',
              color: '#002395',
              photoPosition: 'left',
            },
            {
              title: 'Media Literacy',
              description: 'Critical thinking and information analysis. Learn to navigate the modern media landscape, identify misinformation, and create meaningful digital content.',
              photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
              curriculum: [
                { icon: <VideoLibraryIcon />, label: 'Video Production' },
                { icon: <MicIcon />, label: 'Podcast Creation' },
                { icon: <ArticleIcon />, label: 'Content Writing' },
                { icon: <PhotoCameraIcon />, label: 'Photo Editing' },
                { icon: <AnalyticsIcon />, label: 'Media Analysis' },
                { icon: <PublicIcon />, label: 'Digital Storytelling' },
              ],
              instructor: {
                name: 'Alex Smulski',
                photo: getImagePath('/photos/583741041_1157902773184394_5619801435922057517_n.jpg'),
                role: 'Lead Instructor',
              },
              badges: ['Certification Included', 'Portfolio Building'],
              duration: '6 weeks',
              level: 'Intermediate',
              color: '#ED2939',
              photoPosition: 'right',
            },
            {
              title: 'Language Learning',
              description: 'French language courses for integration. Build confidence in speaking, writing, and understanding French through immersive, practical lessons.',
              photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'),
              curriculum: [
                { icon: <ChatIcon />, label: 'Conversation' },
                { icon: <MenuBookIcon />, label: 'Grammar' },
                { icon: <RecordVoiceOverIcon />, label: 'Pronunciation' },
                { icon: <TranslateIcon />, label: 'Translation' },
                { icon: <GroupIcon />, label: 'Group Practice' },
                { icon: <EmojiEventsIcon />, label: 'Certification Prep' },
              ],
              instructor: {
                name: 'Louise Papadoperakis',
                photo: getImagePath('/photos/571419367_1143811194593552_6930038688628840775_n.jpg'),
                role: 'Lead Instructor',
              },
              badges: ['Beginner Friendly', 'All Levels', 'Free Access'],
              duration: '12 weeks',
              level: 'All Levels',
              color: '#002395',
              photoPosition: 'left',
            },
            {
              title: 'Arts & Culture',
              description: 'Creative expression and cultural heritage. Explore the rich cultural landscape of France and Europe through hands-on workshops and cultural exchanges.',
              photo: getImagePath('/photos/571419367_1143811194593552_6930038688628840775_n.jpg'),
              curriculum: [
                { icon: <PaletteIcon />, label: 'Visual Arts' },
                { icon: <TheaterComedyIcon />, label: 'Theater' },
                { icon: <MusicNoteIcon />, label: 'Music & Dance' },
                { icon: <AccountBalanceIcon />, label: 'Cultural Heritage' },
                { icon: <BrushIcon />, label: 'Creative Workshops' },
                { icon: <CelebrationIcon />, label: 'Cultural Events' },
              ],
              instructor: {
                name: 'Louise Papadoperakis',
                photo: getImagePath('/photos/571419367_1143811194593552_6930038688628840775_n.jpg'),
                role: 'Lead Instructor',
              },
              badges: ['All Levels', 'Free Access', 'Cultural Immersion'],
              duration: '10 weeks',
              level: 'All Levels',
              color: '#ED2939',
              photoPosition: 'right',
            },
          ].map((course, idx) => (
            <Box key={course.title} sx={{ mb: 8 }}>
              <Grid container spacing={4} alignItems="center">
                {/* Photo Column */}
                <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: course.photoPosition === 'left' ? 1 : 2 }}>
                  <Card
                    sx={{
                      position: 'relative',
                      height: { xs: 300, md: 500 },
                      borderRadius: '24px',
                      overflow: 'hidden',
                      border: '2px solid',
                      borderColor: 'divider',
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 12px 32px ${course.color}30`,
                        borderColor: course.color,
                        '& .course-photo': {
                          transform: 'scale(1.05)',
                        },
                      },
                    }}
                  >
                    <Box
                      className="course-photo"
                      component="img"
                      src={course.photo}
                      alt={course.title}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.85) saturate(1.1)',
                        transition: 'all 0.4s ease',
                        zIndex: 0,
                      }}
                    />
                    {/* Gradient Overlay */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(135deg, ${course.color}40 0%, ${course.color}20 100%)`,
                        zIndex: 1,
                      }}
                    />
                    
                    {/* Badges */}
                    <Box sx={{ position: 'absolute', top: 16, left: 16, zIndex: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {course.badges.map((badge, badgeIdx) => (
                        <Chip
                          key={badgeIdx}
                          label={badge}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            backdropFilter: 'blur(10px)',
                            color: course.color,
                            fontWeight: 700,
                            fontSize: '0.75rem',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                            border: `1px solid ${course.color}30`,
                          }}
                        />
                      ))}
                    </Box>

                    {/* Decorative Progress Bar */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 60,
                        background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)',
                        zIndex: 2,
                        display: 'flex',
                        alignItems: 'center',
                        px: 3,
                      }}
                    >
                      <Box sx={{ flex: 1, mr: 2 }}>
                        <Box
                          sx={{
                            height: 4,
                            backgroundColor: 'rgba(255,255,255,0.3)',
                            borderRadius: 2,
                            overflow: 'hidden',
                            position: 'relative',
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '65%',
                              height: '100%',
                              background: `linear-gradient(90deg, ${course.color} 0%, ${course.color}80 100%)`,
                              animation: 'progressBar 2s ease-in-out infinite',
                              '@keyframes progressBar': {
                                '0%, 100%': { width: '60%' },
                                '50%': { width: '70%' },
                              },
                            },
                          }}
                        />
                        <Typography variant="caption" sx={{ color: 'white', mt: 0.5, fontSize: '0.7rem' }}>
                          Course Progress: 65%
                        </Typography>
                      </Box>
                      <PlayArrowIcon sx={{ color: 'white', fontSize: 32 }} />
                    </Box>

                    {/* Instructor Spotlight */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 80,
                        right: 16,
                        zIndex: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '20px',
                        p: 1.5,
                        boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                        border: `2px solid ${course.color}30`,
                      }}
                    >
                      <Avatar
                        src={course.instructor.photo}
                        alt={course.instructor.name}
                        sx={{
                          width: 48,
                          height: 48,
                          border: `2px solid ${course.color}`,
                          boxShadow: `0 2px 8px ${course.color}30`,
                        }}
                      />
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 700, color: course.color, display: 'block' }}>
                          {course.instructor.name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.7rem' }}>
                          {course.instructor.role}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Grid>

                {/* Content Column */}
                <Grid size={{ xs: 12, md: 6 }} order={{ xs: 2, md: course.photoPosition === 'left' ? 2 : 1 }}>
                  <Box sx={{ pl: { xs: 0, md: course.photoPosition === 'right' ? 0 : 4 }, pr: { xs: 0, md: course.photoPosition === 'left' ? 0 : 4 } }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: '#0b1b3a', mb: 2 }}>
                      {course.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#0b1b3a', mb: 3, lineHeight: 1.8, fontSize: '1.05rem' }}>
                      {course.description}
                    </Typography>

                    {/* Curriculum Preview */}
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#0b1b3a', mb: 2 }}>
                        What's Inside?
                      </Typography>
                      <Grid container spacing={2}>
                        {course.curriculum.map((item, itemIdx) => (
                          <Grid size={{ xs: 6, sm: 4 }} key={itemIdx}>
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 1,
                                p: 2,
                                borderRadius: '12px',
                                border: `2px solid ${course.color}20`,
                                backgroundColor: `${course.color}08`,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  borderColor: course.color,
                                  backgroundColor: `${course.color}15`,
                                  transform: 'translateY(-2px)',
                                },
                              }}
                            >
                              <Box
                                sx={{
                                  color: course.color,
                                  fontSize: 32,
                                  filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))',
                                }}
                              >
                                {item.icon}
                              </Box>
                              <Typography variant="caption" sx={{ fontWeight: 600, color: '#0b1b3a', textAlign: 'center', fontSize: '0.75rem' }}>
                                {item.label}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>

                    {/* Course Info */}
                    <Stack direction="row" spacing={2} sx={{ mb: 3, flexWrap: 'wrap' }}>
                      <Chip
                        label={course.duration}
                        sx={{
                          backgroundColor: `${course.color}15`,
                          color: course.color,
                          fontWeight: 700,
                          border: `1px solid ${course.color}30`,
                        }}
                      />
                      <Chip
                        label={course.level}
                        sx={{
                          backgroundColor: `${course.color}15`,
                          color: course.color,
                          fontWeight: 700,
                          border: `1px solid ${course.color}30`,
                        }}
                      />
                    </Stack>

                    {/* CTA Button */}
                    <Button
                      component={RouterLink}
                      to="/contact"
                      variant="contained"
                      size="large"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        px: 4,
                        py: 1.5,
                        fontSize: '1rem',
                        fontWeight: 700,
                        borderRadius: '25px',
                        backgroundColor: course.color,
                        color: 'white',
                        boxShadow: `0 6px 20px ${course.color}40`,
                        transition: 'all 0.4s ease',
                        '&:hover': {
                          backgroundColor: course.color === '#002395' ? '#001a7a' : '#c91e2f',
                          transform: 'translateY(-2px)',
                          boxShadow: `0 8px 24px ${course.color}60`,
                          '& .MuiButton-endIcon': {
                            transform: 'translateX(4px)',
                          },
                        },
                        '& .MuiButton-endIcon': {
                          transition: 'transform 0.4s ease',
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Certification & Practical Impact Section */}
      <Box
        sx={{
          py: { xs: 8, sm: 12 },
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.03) 0%, rgba(237, 41, 57, 0.03) 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container>
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip
              label="Certification & Impact"
              sx={{
                mb: 2,
                fontWeight: 700,
                fontSize: '1rem',
                py: 2,
                px: 1,
                backgroundColor: '#002395',
                color: 'white',
                border: '2px solid #002395',
                boxShadow: '0 4px 12px rgba(0, 35, 149, 0.3)',
              }}
            />
            <Typography variant="h3" sx={{ fontWeight: 800, color: '#0b1b3a', mb: 2 }}>
              Your Certificate, Your Future
            </Typography>
            <Typography variant="body1" sx={{ color: '#0b1b3a', maxWidth: '700px', mx: 'auto', fontSize: '1.1rem', lineHeight: 1.8 }}>
              Earn an official MITRA FRANCE certificate recognized across Europe. Join thousands of graduates who have transformed their careers.
            </Typography>
          </Box>

          {/* 1. Certificate Visualization - 3D Mockup */}
          <Box sx={{ mb: 10, position: 'relative' }}>
            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    position: 'relative',
                    perspective: '1000px',
                    '&:hover .certificate-3d': {
                      transform: 'rotateY(-5deg) rotateX(5deg)',
                    },
                  }}
                >
                  <Card
                    className="certificate-3d"
                    sx={{
                      position: 'relative',
                      height: { xs: 300, md: 450 },
                      borderRadius: '24px',
                      overflow: 'hidden',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
                      border: '3px solid #002395',
                      boxShadow: '0 20px 60px rgba(0, 35, 149, 0.3)',
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.6s ease',
                      p: 4,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    {/* Certificate Header */}
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      <Typography variant="h4" sx={{ fontWeight: 900, color: '#002395', mb: 1, fontSize: { xs: '1.5rem', md: '2rem' } }}>
                        MITRA FRANCE
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#ED2939', mb: 2 }}>
                        Certificate of Completion
                      </Typography>
                      <Box sx={{ height: 2, background: 'linear-gradient(90deg, #002395 0%, #ED2939 100%)', mb: 2 }} />
                    </Box>

                    {/* Certificate Content */}
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', mb: 3 }}>
                      <Typography variant="body1" sx={{ mb: 2, color: '#0b1b3a', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                        This is to certify that
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 800, color: '#002395', mb: 3, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                        [Your Name]
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#0b1b3a', mb: 2, fontSize: { xs: '0.85rem', md: '0.95rem' } }}>
                        has successfully completed the course
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#ED2939', mb: 3, fontSize: { xs: '1rem', md: '1.2rem' } }}>
                        Digital Literacy & Media Education
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#0b1b3a', fontSize: { xs: '0.8rem', md: '0.9rem' } }}>
                        Date: [Completion Date]
                      </Typography>
                    </Box>

                    {/* Certificate Footer - Logos and QR */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mt: 2 }}>
                      <Box>
                        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                          <Box
                            sx={{
                              width: 60,
                              height: 60,
                              borderRadius: '8px',
                              backgroundColor: '#002395',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              fontWeight: 700,
                              fontSize: '1.2rem',
                            }}
                          >
                            MF
                          </Box>
                          <Box
                            sx={{
                              width: 60,
                              height: 60,
                              borderRadius: '8px',
                              backgroundColor: '#ED2939',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              fontWeight: 700,
                              fontSize: '0.9rem',
                              textAlign: 'center',
                            }}
                          >
                            Erasmus+
                          </Box>
                        </Box>
                        <Typography variant="caption" sx={{ color: '#0b1b3a', fontSize: '0.7rem' }}>
                          Official Seal & Signature
                        </Typography>
                      </Box>
                      <Box sx={{ textAlign: 'center' }}>
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            backgroundColor: '#f5f5f5',
                            border: '2px solid #002395',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 1,
                            position: 'relative',
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              inset: 4,
                              border: '1px solid #002395',
                              borderRadius: '4px',
                            },
                          }}
                        >
                          <Box
                            sx={{
                              width: '60%',
                              height: '60%',
                              display: 'grid',
                              gridTemplateColumns: 'repeat(4, 1fr)',
                              gap: 0.5,
                            }}
                          >
                            {Array.from({ length: 16 }).map((_, i) => (
                              <Box
                                key={i}
                                sx={{
                                  backgroundColor: i % 3 === 0 ? '#002395' : 'transparent',
                                  borderRadius: '1px',
                                }}
                              />
                            ))}
                          </Box>
                        </Box>
                        <Typography variant="caption" sx={{ color: '#0b1b3a', fontSize: '0.7rem', fontWeight: 600 }}>
                          QR Verification
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ pl: { xs: 0, md: 4 } }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#0b1b3a', mb: 2 }}>
                    Recognized Across Europe
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#0b1b3a', mb: 3, lineHeight: 1.8 }}>
                    Your MITRA FRANCE certificate is a testament to your commitment to learning and professional growth. 
                    It's recognized by educational institutions, employers, and organizations across Europe.
                  </Typography>
                  <Stack spacing={2}>
                    {[
                      { icon: <CheckCircleIcon />, text: 'Official MITRA FRANCE seal and signature' },
                      { icon: <CheckCircleIcon />, text: 'Erasmus+ partnership recognition' },
                      { icon: <CheckCircleIcon />, text: 'QR code for instant verification' },
                      { icon: <CheckCircleIcon />, text: 'Digital and printable formats' },
                    ].map((item, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ color: '#002395', fontSize: 24 }}>{item.icon}</Box>
                        <Typography variant="body1" sx={{ color: '#0b1b3a' }}>
                          {item.text}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* 2. Success Stories Gallery */}
          <Box sx={{ mb: 10 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#0b1b3a', mb: 4, textAlign: 'center' }}>
              Success Stories in Action
            </Typography>
            <Grid container spacing={3}>
              {[
                {
                  photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                  title: 'Graduate with Certificate',
                  description: 'Celebrating achievement at our office',
                },
                {
                  photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                  title: 'Workshop Completion',
                  description: 'Group photo after successful workshop in Nice',
                },
                {
                  photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                  title: 'LinkedIn Success',
                  description: 'Graduate sharing achievement on LinkedIn',
                },
                {
                  photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'),
                  title: 'Career Advancement',
                  description: 'Using certificate for job applications',
                },
              ].map((story, idx) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                  <Card
                    sx={{
                      position: 'relative',
                      height: 280,
                      borderRadius: '20px',
                      overflow: 'hidden',
                      border: '2px solid',
                      borderColor: 'divider',
                      transition: 'all 0.4s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 32px rgba(0, 35, 149, 0.3)',
                        borderColor: '#002395',
                        '& .story-photo': {
                          transform: 'scale(1.1)',
                        },
                      },
                    }}
                  >
                    <Box
                      className="story-photo"
                      component="img"
                      src={story.photo}
                      alt={story.title}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.85) saturate(1.1)',
                        transition: 'all 0.4s ease',
                        zIndex: 0,
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(180deg, transparent 0%, rgba(0, 35, 149, 0.9) 100%)',
                        zIndex: 1,
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        p: 2.5,
                        zIndex: 2,
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 800, color: 'white', mb: 0.5, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                        {story.title}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.9)', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                        {story.description}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* 3. Where Certificate Helps - Infographic */}
          <Box sx={{ mb: 10 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#0b1b3a', mb: 4, textAlign: 'center' }}>
              Where Your Certificate Makes a Difference
            </Typography>
            <Grid container spacing={4}>
              {[
                {
                  title: 'CV Boost',
                  description: 'Stand out from other candidates with a recognized European certificate',
                  icon: <StarIcon />,
                  photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                  color: '#FF9800',
                },
                {
                  title: 'International Recognition',
                  description: 'Valued by employers and institutions across 15+ European countries',
                  icon: <PublicIcon />,
                  photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                  color: '#002395',
                },
                {
                  title: 'Career Growth',
                  description: 'Open doors to new opportunities and professional advancement',
                  icon: <TrendingUpIcon />,
                  photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                  color: '#ED2939',
                },
              ].map((benefit, idx) => (
                <Grid size={{ xs: 12, md: 4 }} key={idx}>
                  <Card
                    sx={{
                      position: 'relative',
                      height: 350,
                      borderRadius: '24px',
                      overflow: 'hidden',
                      border: '2px solid',
                      borderColor: 'divider',
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 12px 32px ${benefit.color}30`,
                        borderColor: benefit.color,
                        '& .benefit-photo': {
                          transform: 'scale(1.1)',
                        },
                      },
                    }}
                  >
                    <Box
                      className="benefit-photo"
                      component="img"
                      src={benefit.photo}
                      alt={benefit.title}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.6) saturate(1.1)',
                        transition: 'all 0.4s ease',
                        zIndex: 0,
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(135deg, ${benefit.color}80 0%, ${benefit.color}60 100%)`,
                        zIndex: 1,
                      }}
                    />
                    <Box
                      sx={{
                        position: 'relative',
                        zIndex: 2,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 4,
                        textAlign: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 3,
                          boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                          color: benefit.color,
                          fontSize: 40,
                        }}
                      >
                        {benefit.icon}
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 800, color: 'white', mb: 2, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                        {benefit.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.95)', textShadow: '0 1px 4px rgba(0,0,0,0.5)', lineHeight: 1.6 }}>
                        {benefit.description}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* 4. Final CTA - Start Your Journey Today */}
          <Box
            sx={{
              position: 'relative',
              borderRadius: '32px',
              overflow: 'hidden',
              minHeight: 400,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 6,
            }}
          >
            <Box
              component="img"
              src={getImagePath("/photos/583924019_1157903166517688_8756873269993443102_n.jpg")}
              alt="Students Learning"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'blur(2px) brightness(0.5)',
                zIndex: 0,
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.8) 0%, rgba(237, 41, 57, 0.8) 100%)',
                zIndex: 1,
              }}
            />
            <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px' }}>
              <Typography variant="h3" sx={{ fontWeight: 900, color: 'white', mb: 2, textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
                Start Your Journey Today
              </Typography>
              <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.95)', mb: 4, textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>
                Join thousands of students transforming their careers with MITRA FRANCE
              </Typography>
              
              {/* Social Proof */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 4 }}>
                <AvatarGroup
                  max={5}
                  sx={{
                    '& .MuiAvatar-root': {
                      width: 40,
                      height: 40,
                      border: '2px solid white',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                    },
                  }}
                >
                  {[
                    '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
                    '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
                    '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
                    '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
                    '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
                  ].map((photo, idx) => (
                    <Avatar key={idx} src={photo} alt={`Student ${idx + 1}`} />
                  ))}
                </AvatarGroup>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                  Joined by <strong>500+</strong> students this month
                </Typography>
              </Box>

              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 6,
                  py: 2.5,
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  borderRadius: '30px',
                  backgroundColor: 'white',
                  color: '#002395',
                  boxShadow: '0 8px 32px rgba(255, 255, 255, 0.4)',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                    transform: 'translateY(-4px) scale(1.05)',
                    boxShadow: '0 12px 40px rgba(255, 255, 255, 0.6)',
                    '& .MuiButton-endIcon': {
                      transform: 'translateX(6px)',
                    },
                  },
                  '& .MuiButton-endIcon': {
                    transition: 'transform 0.4s ease',
                  },
                }}
              >
                Enroll Now
              </Button>
            </Box>
          </Box>
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
