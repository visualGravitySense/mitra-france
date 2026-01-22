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
import CircularProgress from '@mui/material/CircularProgress';
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
import ComputerIcon from '@mui/icons-material/Computer';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LanguageIcon from '@mui/icons-material/Language';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PublicIcon from '@mui/icons-material/Public';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import MicIcon from '@mui/icons-material/Mic';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { getImagePath } from '../utils/imagePath';

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
  const [activeCategory, setActiveCategory] = useState('digital');

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
          pb: { xs: 8, sm: 10 },
          mb: 0,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            {/* Left Column - Text Content */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    mb: 2,
                    background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 800,
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  }}
                >
                  Programs & Workshops
                </Typography>
                <Box
                  sx={{
                    width: 80,
                    height: 3,
                    background: 'linear-gradient(90deg, #ED2939 0%, #ED2939 100%)',
                    mb: 3,
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: '#0b1b3a',
                    fontSize: '1.15rem',
                    lineHeight: 1.8,
                  }}
                >
                  Comprehensive educational programs and interactive workshops for personal and professional development
                </Typography>

                {/* Interactive Category Badges */}
                <Box sx={{ mb: 4 }}>
                  <Grid container spacing={2}>
                    {[
                      {
                        id: 'digital',
                        label: 'Digital',
                        icon: <ComputerIcon />,
                        photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                        badge: null,
                      },
                      {
                        id: 'media',
                        label: 'Media',
                        icon: <VideoLibraryIcon />,
                        photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                        badge: 'LIVE NOW',
                      },
                      {
                        id: 'inclusion',
                        label: 'Inclusion',
                        icon: <Diversity3Icon />,
                        photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                        badge: null,
                      },
                      {
                        id: 'language',
                        label: 'Language',
                        icon: <LanguageIcon />,
                        photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'),
                        badge: 'NEW',
                      },
                    ].map((category) => (
                      <Grid size={{ xs: 6, sm: 3 }} key={category.id}>
                        <Card
                          onClick={() => setActiveCategory(category.id)}
                          sx={{
                            position: 'relative',
                            p: 2,
                            borderRadius: '16px',
                            border: '2px solid',
                            borderColor: activeCategory === category.id ? '#002395' : 'divider',
                            backgroundColor: activeCategory === category.id ? '#00239508' : 'white',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            overflow: 'hidden',
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              boxShadow: '0 8px 24px rgba(0, 35, 149, 0.2)',
                              borderColor: '#002395',
                            },
                          }}
                        >
                          {category.badge && (
                            <Chip
                              label={category.badge}
                              size="small"
                              sx={{
                                position: 'absolute',
                                top: 8,
                                right: 8,
                                backgroundColor: '#ED2939',
                                color: 'white',
                                fontWeight: 700,
                                fontSize: '0.7rem',
                                height: 20,
                                zIndex: 2,
                              }}
                            />
                          )}
                          <Box
                            component="img"
                            src={category.photo}
                            alt={category.label}
                            sx={{
                              width: '100%',
                              height: 80,
                              objectFit: 'cover',
                              borderRadius: '12px',
                              mb: 1.5,
                              filter: activeCategory === category.id ? 'brightness(1)' : 'brightness(0.7)',
                              transition: 'all 0.3s ease',
                            }}
                          />
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box sx={{ color: activeCategory === category.id ? '#002395' : 'text.secondary' }}>
                              {category.icon}
                            </Box>
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: 700,
                                color: activeCategory === category.id ? '#002395' : 'text.primary',
                              }}
                            >
                              {category.label}
                            </Typography>
                          </Box>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                {/* CTA Button with Micro-text */}
                <Box>
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
                      px: 6,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      borderRadius: '30px',
                      background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                      color: 'white',
                      boxShadow: '0 8px 24px rgba(0, 35, 149, 0.4)',
                      mb: 2,
                      '&:hover': {
                        background: 'linear-gradient(135deg, #ED2939 0%, #002395 100%)',
                        transform: 'translateY(-4px) scale(1.02)',
                        boxShadow: '0 12px 32px rgba(0, 35, 149, 0.5)',
                        '& .MuiButton-endIcon': {
                          transform: 'translateX(6px)',
                        },
                      },
                      transition: 'all 0.4s ease',
                      '& .MuiButton-endIcon': {
                        transition: 'transform 0.4s ease',
                      },
                    }}
                  >
                    Join a Workshop
                  </Button>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 1 }}>
                    <LocalFireDepartmentIcon sx={{ color: '#ED2939', fontSize: 20 }} />
                    <Typography variant="caption" sx={{ color: '#0b1b3a', fontWeight: 600 }}>
                      Next workshop: Jan 25th in Nice
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Right Column - Kaleidoscope of Activities (Masonry Style) */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 400, md: 600 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Masonry Grid of Photos */}
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gridTemplateRows: 'repeat(2, 1fr)',
                    gap: 2,
                  }}
                >
                  {[
                    {
                      photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                      title: 'Workshop',
                      icon: <MicIcon />,
                      position: { gridColumn: '1', gridRow: '1' },
                    },
                    {
                      photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                      title: 'Discussion',
                      icon: <GroupsIcon />,
                      position: { gridColumn: '2', gridRow: '1 / 3' },
                    },
                    {
                      photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                      title: 'Field Trip',
                      icon: <CameraAltIcon />,
                      position: { gridColumn: '1', gridRow: '2' },
                    },
                  ].map((item, idx) => (
                    <Card
                      key={idx}
                      sx={{
                        position: 'relative',
                        borderRadius: '30px',
                        overflow: 'hidden',
                        border: '2px solid',
                        borderColor: 'divider',
                        transition: 'all 0.4s ease',
                        cursor: 'pointer',
                        ...item.position,
                        '&:hover': {
                          transform: 'translateY(-8px) scale(1.02)',
                          boxShadow: '0 12px 32px rgba(0, 35, 149, 0.3)',
                          borderColor: '#002395',
                          zIndex: 2,
                          '& .activity-photo': {
                            transform: 'scale(1.1)',
                          },
                        },
                      }}
                    >
                      <Box
                        className="activity-photo"
                        component="img"
                        src={item.photo}
                        alt={item.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'brightness(0.8) saturate(1.1)',
                          transition: 'all 0.4s ease',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(180deg, transparent 0%, rgba(0, 35, 149, 0.7) 100%)',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 16,
                          left: 16,
                          right: 16,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                        }}
                      >
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#002395',
                            fontSize: 24,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 800, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                          {item.title}
                        </Typography>
                      </Box>
                    </Card>
                  ))}
                </Box>

                {/* Floating Graphic Elements */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    backgroundColor: '#002395',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: 28,
                    fontWeight: 700,
                    boxShadow: '0 4px 16px rgba(0, 35, 149, 0.4)',
                    zIndex: 3,
                    animation: 'float 3s ease-in-out infinite',
                    '@keyframes float': {
                      '0%, 100%': { transform: 'translateY(0px)' },
                      '50%': { transform: 'translateY(-10px)' },
                    },
                  }}
                >
                  EU
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 40,
                    left: 20,
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    backgroundColor: '#ED2939',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: 24,
                    boxShadow: '0 4px 16px rgba(237, 41, 57, 0.4)',
                    zIndex: 3,
                    animation: 'float 3s ease-in-out infinite 1.5s',
                    '@keyframes float': {
                      '0%, 100%': { transform: 'translateY(0px)' },
                      '50%': { transform: 'translateY(-10px)' },
                    },
                  }}
                >
                  <MicIcon />
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* Impact Highlights Bar */}
          <Box
            sx={{
              mt: 6,
              pt: 4,
              borderTop: '1px solid',
              borderColor: 'divider',
              display: 'flex',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              gap: 4,
            }}
          >
            {[
              {
                icon: <CalendarTodayIcon />,
                value: '150+',
                label: 'Workshops yearly',
                color: '#002395',
              },
              {
                icon: <PeopleIcon />,
                value: '2000+',
                label: 'Participants',
                color: '#ED2939',
              },
              {
                icon: <PublicIcon />,
                value: '12',
                label: 'Countries Involved',
                color: '#002395',
              },
            ].map((stat, idx) => (
              <Box
                key={idx}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  p: 2,
                  borderRadius: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: `2px solid ${stat.color}30`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 8px 24px ${stat.color}30`,
                    borderColor: stat.color,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    backgroundColor: `${stat.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: stat.color,
                    fontSize: 28,
                  }}
                >
                  {stat.icon}
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: stat.color, mb: 0.5, lineHeight: 1 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#0b1b3a', fontWeight: 600 }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* FOGG MODEL: Motivation Section - Benefits & Value Proposition */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          position: 'relative',
          mt: 0,
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(0, 35, 149, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(237, 41, 57, 0.03) 0%, transparent 50%),
              repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0, 35, 149, 0.01) 10px, rgba(0, 35, 149, 0.01) 20px)
            `,
            opacity: 0.5,
            zIndex: 0,
          },
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 800, color: '#0b1b3a' }}>
              Why Join Our Programs & Workshops?
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem', color: '#0b1b3a', lineHeight: 1.8 }}>
              Discover the immediate benefits and long-term value of participating in our educational programs and workshops.
            </Typography>
          </Box>

          <Box sx={{ position: 'relative', mb: 8 }}>
            <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
              {[
                {
                  icon: <SchoolIcon />,
                  title: 'Expert-Led Learning',
                  description: 'Learn from industry professionals and experienced educators. 89% of participants rate our instructors as excellent.',
                  photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                  color: '#002395',
                  borderColor: '#002395',
                  number: '01',
                  height: { xs: 'auto', md: 420 },
                  offset: { xs: 0, md: 0 },
                  testimonials: [
                    { name: 'Anna', country: 'Poland', photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg') },
                    { name: 'Leo', country: 'France', photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg') },
                    { name: 'Maria', country: 'Spain', photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg') },
                  ],
                },
                {
                  icon: <PeopleIcon />,
                  title: 'Community Building',
                  description: 'Connect with like-minded learners, build your network, and grow together in a supportive environment.',
                  photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                  color: '#4CAF50',
                  borderColor: '#4CAF50',
                  number: '02',
                  height: { xs: 'auto', md: 380 },
                  offset: { xs: 0, md: 20 },
                  testimonials: [
                    { name: 'Sophie', country: 'France', photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg') },
                    { name: 'David', country: 'Germany', photo: getImagePath('/photos/571419367_1143811194593552_6930038688628840775_n.jpg') },
                  ],
                },
                {
                  icon: <AccessTimeIcon />,
                  title: 'Flexible Schedule',
                  description: 'Choose from various time slots and formats. Learn at your own pace with both live and self-paced options.',
                  photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                  color: '#2196F3',
                  borderColor: '#2196F3',
                  number: '03',
                  height: { xs: 'auto', md: 400 },
                  offset: { xs: 0, md: -15 },
                  testimonials: [
                    { name: 'Emma', country: 'UK', photo: getImagePath('/photos/583489432_1157911303183541_1292926580526900497_n.jpg') },
                    { name: 'Lucas', country: 'Italy', photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg') },
                    { name: 'Nina', country: 'Netherlands', photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg') },
                  ],
                },
                {
                  icon: <StarIcon />,
                  title: 'Practical Skills',
                  description: 'Gain hands-on experience and real-world skills that you can apply immediately in your career or personal projects.',
                  photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'),
                  color: '#FF9800',
                  borderColor: '#FF9800',
                  number: '04',
                  height: { xs: 'auto', md: 360 },
                  offset: { xs: 0, md: 10 },
                  testimonials: [
                    { name: 'Tom', country: 'Belgium', photo: getImagePath('/photos/571419367_1143811194593552_6930038688628840775_n.jpg') },
                    { name: 'Sara', country: 'Sweden', photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg') },
                  ],
                },
              ].map((benefit, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                  <Card
                    sx={{
                      position: 'relative',
                      p: 3,
                      height: benefit.height,
                      textAlign: 'center',
                      border: '3px solid',
                      borderColor: benefit.borderColor,
                      borderRadius: '24px',
                      background: 'white',
                      transition: 'all 0.4s ease',
                      transform: { xs: 'translateY(0)', md: `translateY(${benefit.offset.md}px)` },
                      '&:hover': {
                        transform: { xs: 'translateY(-8px)', md: `translateY(${benefit.offset.md - 8}px)` },
                        boxShadow: `0 16px 40px ${benefit.color}30`,
                        borderColor: benefit.color,
                        zIndex: 2,
                      },
                      '&::before': {
                        content: `"${benefit.number}"`,
                        position: 'absolute',
                        top: -20,
                        left: -20,
                        fontSize: '120px',
                        fontWeight: 900,
                        color: `${benefit.color}08`,
                        lineHeight: 1,
                        zIndex: 0,
                        pointerEvents: 'none',
                      },
                    }}
                  >
                    {/* Photo-Icon Background */}
                    <Box
                      sx={{
                        position: 'relative',
                        width: 100,
                        height: 100,
                        borderRadius: '50%',
                        mx: 'auto',
                        mb: 3,
                        overflow: 'hidden',
                        border: `3px solid ${benefit.borderColor}`,
                        boxShadow: `0 8px 24px ${benefit.color}30`,
                        zIndex: 1,
                      }}
                    >
                      <Box
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
                          filter: 'blur(4px) brightness(0.7)',
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
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          zIndex: 1,
                          color: 'white',
                          fontSize: 48,
                          filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))',
                        }}
                      >
                        {benefit.icon}
                      </Box>
                    </Box>

                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: '#0b1b3a', position: 'relative', zIndex: 1 }}>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 1.7, color: '#0b1b3a', mb: 3, position: 'relative', zIndex: 1 }}>
                      {benefit.description}
                    </Typography>

                    {/* Social Proof Strip */}
                    <Box sx={{ mt: 'auto', position: 'relative', zIndex: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
                        <AvatarGroup
                          max={3}
                          sx={{
                            '& .MuiAvatar-root': {
                              width: 32,
                              height: 32,
                              border: `2px solid ${benefit.borderColor}`,
                              fontSize: '0.75rem',
                            },
                          }}
                        >
                          {benefit.testimonials.map((testimonial, idx) => (
                            <Avatar key={idx} src={testimonial.photo} alt={testimonial.name} />
                          ))}
                        </AvatarGroup>
                        <Typography variant="caption" sx={{ color: '#0b1b3a', fontSize: '0.7rem', fontWeight: 600 }}>
                          {benefit.testimonials.map((t) => `${t.name}, ${t.country}`).join(' • ')}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* FOGG MODEL: Prompt - Clear CTA after benefits */}
          <Box sx={{ textAlign: 'center', mt: 8 }}>
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
                px: 8,
                py: 2.5,
                fontSize: '1.2rem',
                fontWeight: 800,
                borderRadius: '35px',
                background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                color: 'white',
                boxShadow: '0 8px 32px rgba(0, 35, 149, 0.4)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                  transition: 'left 0.5s ease',
                },
                '&:hover': {
                  background: 'linear-gradient(135deg, #ED2939 0%, #002395 100%)',
                  transform: 'translateY(-4px) scale(1.05)',
                  boxShadow: '0 16px 48px rgba(0, 35, 149, 0.6)',
                  animation: 'pulse 2s infinite',
                  '&::before': {
                    left: '100%',
                  },
                  '& .MuiButton-endIcon': {
                    transform: 'translateX(8px)',
                  },
                },
                '@keyframes pulse': {
                  '0%, 100%': {
                    boxShadow: '0 16px 48px rgba(0, 35, 149, 0.6)',
                  },
                  '50%': {
                    boxShadow: '0 16px 48px rgba(237, 41, 57, 0.8)',
                  },
                },
                transition: 'all 0.4s ease',
                '& .MuiButton-endIcon': {
                  transition: 'transform 0.4s ease',
                },
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
          py: { xs: 8, sm: 10 },
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.08) 0%, rgba(237, 41, 57, 0.08) 100%)',
          position: 'relative',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 800, color: '#0b1b3a' }}>
              Get Started in 3 Simple Steps
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem', color: '#0b1b3a', lineHeight: 1.8 }}>
              We've made it incredibly easy to begin your learning journey. No complicated forms, no long wait times.
            </Typography>
          </Box>

          {/* Steps with Progress Line */}
          <Box sx={{ position: 'relative', mb: 8 }}>
            {/* Progress Line (behind cards) */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: { xs: 0, md: '16.66%' },
                right: { xs: 0, md: '16.66%' },
                height: 4,
                transform: 'translateY(-50%)',
                zIndex: 0,
                display: { xs: 'none', md: 'block' },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '100%',
                  background: 'repeating-linear-gradient(90deg, #002395 0, #002395 8px, transparent 8px, transparent 16px)',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '100%',
                  background: 'linear-gradient(90deg, #002395 0%, #ED2939 100%)',
                  opacity: 0.3,
                },
              }}
            />

            <Grid container spacing={4}>
              {[
                {
                  step: '1',
                  title: 'Choose Your Program',
                  description: 'Browse our programs and workshops. Pick one that matches your interests. Takes less than 2 minutes.',
                  icon: <SchoolIcon />,
                  color: '#002395',
                  photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                },
                {
                  step: '2',
                  title: 'Quick Registration',
                  description: 'Simple sign-up process. Just your name and email - that\'s it! No credit card required.',
                  icon: <CheckCircleIcon />,
                  color: '#4CAF50',
                  photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                },
                {
                  step: '3',
                  title: 'Start Learning',
                  description: 'Access your program immediately. Learn at your own pace, whenever you want.',
                  icon: <PlayArrowIcon />,
                  color: '#2196F3',
                  photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                },
              ].map((item, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <Card
                    sx={{
                      p: 4,
                      height: '100%',
                      textAlign: 'center',
                      border: '3px solid',
                      borderColor: item.color,
                      borderRadius: '24px',
                      background: 'white',
                      transition: 'all 0.4s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 1,
                      '&:hover': {
                        transform: 'translateY(-12px)',
                        boxShadow: `0 16px 40px ${item.color}40`,
                        borderColor: item.color,
                      },
                    }}
                  >
                    {/* Background Photo */}
                    <Box
                      component="img"
                      src={item.photo}
                      alt={item.title}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.12,
                        filter: 'blur(2px) grayscale(0.3)',
                        zIndex: 0,
                      }}
                    />

                    {/* Glassmorphism Number Circle */}
                    <Box
                      sx={{
                        position: 'relative',
                        zIndex: 2,
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        mx: 'auto',
                        mb: 3,
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                        border: `3px solid ${item.color}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 36,
                        fontWeight: 900,
                        color: item.color,
                        boxShadow: `0 8px 24px ${item.color}30`,
                      }}
                    >
                      {item.step}
                    </Box>

                    {/* Icon with 3D Effect */}
                    <Box
                      sx={{
                        position: 'relative',
                        zIndex: 2,
                        width: 72,
                        height: 72,
                        borderRadius: '50%',
                        mx: 'auto',
                        mb: 3,
                        background: `linear-gradient(135deg, ${item.color}15 0%, ${item.color}25 100%)`,
                        border: `2px solid ${item.color}40`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 4px 16px ${item.color}20`,
                        transition: 'all 0.4s ease',
                        '&:hover': {
                          transform: 'scale(1.1) rotate(5deg)',
                          boxShadow: `0 8px 24px ${item.color}40`,
                        },
                      }}
                    >
                      <Box sx={{ color: item.color, fontSize: 36, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}>
                        {item.icon}
                      </Box>
                    </Box>

                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: '#0b1b3a', position: 'relative', zIndex: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 1.7, color: '#0b1b3a', position: 'relative', zIndex: 2 }}>
                      {item.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* FOGG MODEL: Prompt - Clear call to action after showing ease */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
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
                px: 8,
                py: 2.5,
                fontSize: '1.2rem',
                fontWeight: 800,
                borderRadius: '35px',
                background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                color: 'white',
                boxShadow: '0 12px 40px rgba(0, 35, 149, 0.5)',
                transition: 'all 0.4s ease',
                '&:hover': {
                  background: 'linear-gradient(135deg, #ED2939 0%, #002395 100%)',
                  transform: 'translateY(-6px) scale(1.05)',
                  boxShadow: '0 16px 48px rgba(0, 35, 149, 0.7)',
                  '& .MuiButton-startIcon': {
                    transform: 'translateX(6px)',
                  },
                },
                '& .MuiButton-startIcon': {
                  transition: 'transform 0.4s ease',
                },
              }}
            >
              Browse All Programs
            </Button>
          </Box>

          {/* Social Proof Strip */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              p: 3,
              borderRadius: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '2px solid',
              borderColor: 'divider',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            <AvatarGroup
              max={5}
              sx={{
                '& .MuiAvatar-root': {
                  width: 40,
                  height: 40,
                  border: '2px solid #002395',
                  boxShadow: '0 2px 8px rgba(0, 35, 149, 0.3)',
                },
              }}
            >
              {[
                getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'),
                getImagePath('/photos/571419367_1143811194593552_6930038688628840775_n.jpg'),
              ].map((photo, idx) => (
                <Avatar key={idx} src={photo} alt={`Participant ${idx + 1}`} />
              ))}
            </AvatarGroup>
            <Typography variant="body2" sx={{ color: '#0b1b3a', fontWeight: 700, fontSize: '0.95rem' }}>
              Join <strong>1,247+</strong> active participants
            </Typography>
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
                  border: '3px solid',
                  borderColor: '#002395',
                  borderRadius: '24px',
                  background: 'white',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 40px rgba(0, 35, 149, 0.3)',
                    borderColor: '#002395',
                    '& .card-photo': {
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                {/* Background Photo */}
                <Box
                  className="card-photo"
                  component="img"
                  src={getImagePath("/photos/583924019_1157903166517688_8756873269993443102_n.jpg")}
                  alt="Identify Goals"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.12,
                    filter: 'blur(3px) grayscale(0.4)',
                    zIndex: 0,
                    transition: 'all 0.4s ease',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, transparent 100%)',
                    zIndex: 1,
                  }}
                />
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 2,
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        border: '3px solid #002395',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 24px rgba(0, 35, 149, 0.3)',
                      }}
                    >
                      <FlagIcon sx={{ fontSize: 36, color: '#002395' }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#002395' }}>
                      1. Identify Goals & Barriers
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.7, color: '#0b1b3a', fontWeight: 500 }}>
                    Start by defining your goal and identifying obstacles. Understanding barriers helps us design solutions that work for you.
                  </Typography>
                  <Stack spacing={2}>
                    <Box
                      sx={{
                        p: 2.5,
                        borderRadius: '16px',
                        border: '2px solid',
                        borderColor: 'divider',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 700, mb: 1, color: '#0b1b3a' }}>
                        Your Goal
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#0b1b3a' }}>
                        {userGoal ? `Selected: ${userGoal}` : 'Not set yet. Choose a goal above to get started.'}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        p: 2.5,
                        borderRadius: '16px',
                        border: '2px solid',
                        borderColor: '#4CAF50',
                        backgroundColor: 'rgba(76, 175, 80, 0.1)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 700, mb: 1, color: '#4CAF50' }}>
                        Barriers Removed
                      </Typography>
                      <Stack spacing={0.5}>
                        <Typography variant="caption" sx={{ color: '#0b1b3a', fontWeight: 600 }}>
                          ✓ No cost barriers
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#0b1b3a', fontWeight: 600 }}>
                          ✓ No complexity barriers
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#0b1b3a', fontWeight: 600 }}>
                          ✓ No commitment barriers
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>
                </Box>
              </Card>
            </Grid>

            {/* 2. Utilize Triggers */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '3px solid',
                  borderColor: '#2196F3',
                  borderRadius: '24px',
                  background: 'white',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 40px rgba(33, 150, 243, 0.3)',
                    borderColor: '#2196F3',
                    '& .card-photo': {
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                {/* Background Photo */}
                <Box
                  className="card-photo"
                  component="img"
                  src={getImagePath("/photos/584326681_1157904053184266_2071216266526493174_n.jpg")}
                  alt="Utilize Triggers"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.12,
                    filter: 'blur(3px) grayscale(0.4)',
                    zIndex: 0,
                    transition: 'all 0.4s ease',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.05) 0%, transparent 100%)',
                    zIndex: 1,
                  }}
                />
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 2,
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        border: '3px solid #2196F3',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 24px rgba(33, 150, 243, 0.3)',
                      }}
                    >
                      <NotificationsNoneIcon sx={{ fontSize: 36, color: '#2196F3' }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#2196F3' }}>
                      2. Utilize Triggers
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.7, color: '#0b1b3a', fontWeight: 500 }}>
                    Triggers remind you to take action. Choose the types that work best for you: visual, time-based, or contextual.
                  </Typography>
                  <Stack spacing={2}>
                    {habitTriggers.map((trigger) => (
                      <Box
                        key={trigger.id}
                        sx={{
                          p: 2.5,
                          borderRadius: '16px',
                          border: '2px solid',
                          borderColor: trigger.enabled ? '#2196F3' : 'divider',
                          backgroundColor: trigger.enabled ? 'rgba(33, 150, 243, 0.1)' : 'rgba(255, 255, 255, 0.9)',
                          backdropFilter: 'blur(10px)',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: '#0b1b3a' }}>
                            {trigger.type === 'visual' ? 'Visual Triggers' : trigger.type === 'time' ? 'Time-Based Reminders' : 'Contextual Prompts'}
                          </Typography>
                          <Typography variant="caption" sx={{ color: '#0b1b3a' }}>
                            {trigger.type === 'visual'
                              ? 'Buttons, badges, and visual cues'
                              : trigger.type === 'time'
                                ? 'Daily or weekly reminders'
                                : 'Location or activity-based prompts'}
                          </Typography>
                        </Box>
                        <Button
                          variant={trigger.enabled ? 'contained' : 'outlined'}
                          sx={{
                            backgroundColor: trigger.enabled ? '#2196F3' : 'transparent',
                            borderColor: '#2196F3',
                            color: trigger.enabled ? 'white' : '#2196F3',
                            '&:hover': {
                              backgroundColor: trigger.enabled ? '#1976D2' : 'rgba(33, 150, 243, 0.1)',
                            },
                          }}
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
                </Box>
              </Card>
            </Grid>

            {/* 3. Simplify the Process */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '3px solid',
                  borderColor: '#4CAF50',
                  borderRadius: '24px',
                  background: 'white',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 40px rgba(76, 175, 80, 0.3)',
                    borderColor: '#4CAF50',
                    '& .card-photo': {
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                {/* Background Photo */}
                <Box
                  className="card-photo"
                  component="img"
                  src={getImagePath("/photos/583943471_1157911509850187_2575083228465038744_n.jpg")}
                  alt="Simplify the Process"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.12,
                    filter: 'blur(3px) grayscale(0.4)',
                    zIndex: 0,
                    transition: 'all 0.4s ease',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, transparent 100%)',
                    zIndex: 1,
                  }}
                />
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 2,
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        border: '3px solid #4CAF50',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 24px rgba(76, 175, 80, 0.3)',
                      }}
                    >
                      <CheckCircleIcon sx={{ fontSize: 36, color: '#4CAF50' }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#4CAF50' }}>
                      3. Simplify the Process
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.7, color: '#0b1b3a', fontWeight: 500 }}>
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
                          p: 2.5,
                          borderRadius: '16px',
                          border: '2px solid',
                          borderColor: stepItem.completed ? '#4CAF50' : 'divider',
                          backgroundColor: stepItem.completed ? 'rgba(76, 175, 80, 0.1)' : 'rgba(255, 255, 255, 0.9)',
                          backdropFilter: 'blur(10px)',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box
                            sx={{
                              width: 36,
                              height: 36,
                              borderRadius: '50%',
                              backgroundColor: stepItem.completed ? '#4CAF50' : '#e0e0e0',
                              color: 'white',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 700,
                              fontSize: '1rem',
                            }}
                          >
                            {stepItem.completed ? '✓' : stepItem.id}
                          </Box>
                          <Typography variant="body2" sx={{ fontWeight: stepItem.completed ? 700 : 500, color: '#0b1b3a' }}>
                            {stepItem.step}
                          </Typography>
                        </Box>
                        {!stepItem.completed && (
                          <Button
                            size="small"
                            variant="outlined"
                            sx={{
                              borderColor: '#4CAF50',
                              color: '#4CAF50',
                              '&:hover': {
                                backgroundColor: 'rgba(76, 175, 80, 0.1)',
                                borderColor: '#4CAF50',
                              },
                            }}
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
                </Box>
              </Card>
            </Grid>

            {/* 4. Feedback and Rewards */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '3px solid',
                  borderColor: '#FF9800',
                  borderRadius: '24px',
                  background: 'white',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 40px rgba(255, 152, 0, 0.3)',
                    borderColor: '#FF9800',
                    '& .card-photo': {
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                {/* Background Photo */}
                <Box
                  className="card-photo"
                  component="img"
                  src="/photos/572851437_1143811217926883_7725194936764095335_n.jpg"
                  alt="Feedback & Rewards"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.12,
                    filter: 'blur(3px) grayscale(0.4)',
                    zIndex: 0,
                    transition: 'all 0.4s ease',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.05) 0%, transparent 100%)',
                    zIndex: 1,
                  }}
                />
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 2,
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        border: '3px solid #FF9800',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 24px rgba(255, 152, 0, 0.3)',
                      }}
                    >
                      <EmojiEventsIcon sx={{ fontSize: 36, color: '#FF9800' }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#FF9800' }}>
                      4. Feedback & Rewards
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.7, color: '#0b1b3a', fontWeight: 500 }}>
                    Immediate feedback and rewards reinforce positive behaviors. Celebrate every step forward!
                  </Typography>
                  <Stack spacing={3}>
                    <Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: '#0b1b3a' }}>
                          Current Streak
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 800, color: '#FF9800' }}>
                          {habitStreak} days
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={Math.min((habitStreak / 30) * 100, 100)}
                        sx={{
                          height: 10,
                          borderRadius: 5,
                          backgroundColor: 'rgba(255, 152, 0, 0.15)',
                          '& .MuiLinearProgress-bar': {
                            background: 'linear-gradient(90deg, #FF9800 0%, #ED2939 100%)',
                            borderRadius: 5,
                          },
                        }}
                      />
                    </Box>
                    <Grid container spacing={2}>
                      {[
                        { name: 'First Step', earned: satisfactionMetrics.interactions > 0, points: 10, gradient: 'linear-gradient(135deg, #CD7F32 0%, #B8860B 100%)' },
                        { name: 'Week Warrior', earned: habitStreak >= 7, points: 50, gradient: 'linear-gradient(135deg, #C0C0C0 0%, #A8A8A8 100%)' },
                        { name: 'Month Master', earned: habitStreak >= 30, points: 200, gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)' },
                      ].map((reward, idx) => (
                        <Grid size={{ xs: 4 }} key={reward.name}>
                          <Box
                            sx={{
                              p: 2.5,
                              borderRadius: '16px',
                              border: '3px solid',
                              borderColor: reward.earned ? (idx === 2 ? '#FFD700' : idx === 1 ? '#C0C0C0' : '#CD7F32') : 'divider',
                              background: reward.earned ? reward.gradient : 'rgba(255, 255, 255, 0.9)',
                              backdropFilter: 'blur(10px)',
                              textAlign: 'center',
                              opacity: reward.earned ? 1 : 0.6,
                              position: 'relative',
                              transition: 'all 0.4s ease',
                              '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: reward.earned ? (idx === 2 ? '0 12px 32px rgba(255, 215, 0, 0.6)' : '0 8px 24px rgba(0,0,0,0.2)') : '0 4px 12px rgba(0,0,0,0.1)',
                              },
                            }}
                          >
                            {idx === 2 && reward.earned && (
                              <Box
                                sx={{
                                  position: 'absolute',
                                  top: -8,
                                  left: '50%',
                                  transform: 'translateX(-50%)',
                                  width: '120%',
                                  height: '120%',
                                  borderRadius: '50%',
                                  background: 'radial-gradient(circle, rgba(255, 215, 0, 0.4) 0%, transparent 70%)',
                                  animation: 'glow 2s ease-in-out infinite',
                                  '@keyframes glow': {
                                    '0%, 100%': { opacity: 0.6 },
                                    '50%': { opacity: 1 },
                                  },
                                  zIndex: 0,
                                }}
                              />
                            )}
                            <Box sx={{ position: 'relative', zIndex: 1 }}>
                              <EmojiEventsIcon
                                sx={{
                                  fontSize: 40,
                                  color: reward.earned ? 'white' : '#9e9e9e',
                                  mb: 1,
                                  filter: reward.earned ? 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' : 'none',
                                }}
                              />
                              <Typography variant="caption" sx={{ fontWeight: 700, display: 'block', color: reward.earned ? 'white' : '#0b1b3a' }}>
                                {reward.name}
                              </Typography>
                              <Typography variant="caption" sx={{ fontSize: '0.7rem', color: reward.earned ? 'rgba(255,255,255,0.9)' : '#0b1b3a', fontWeight: 600 }}>
                                {reward.points} pts
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                    {/* Student Photo with Certificate */}
                    <Box
                      sx={{
                        mt: 2,
                        position: 'relative',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        height: 120,
                      }}
                    >
                      <Box
                        component="img"
                        src={getImagePath("/photos/583924019_1157903166517688_8756873269993443102_n.jpg")}
                        alt="Student with Certificate"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'brightness(0.9) saturate(1.1)',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(180deg, transparent 0%, rgba(255, 152, 0, 0.8) 100%)',
                          display: 'flex',
                          alignItems: 'flex-end',
                          p: 2,
                        }}
                      >
                        <Typography variant="caption" sx={{ color: 'white', fontWeight: 700, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                          🎉 Celebrating achievement with certificate ceremony
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Box>
              </Card>
            </Grid>
          </Grid>

          {/* 5. Social Influence & 6. Iterate and Improve */}
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  border: '3px solid',
                  borderColor: '#002395',
                  borderRadius: '24px',
                  background: 'white',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 40px rgba(0, 35, 149, 0.3)',
                    borderColor: '#002395',
                    '& .card-photo': {
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                {/* Background Photo */}
                <Box
                  className="card-photo"
                  component="img"
                  src="/photos/584326681_1157904053184266_2071216266526493174_n.jpg"
                  alt="Social Influence"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.12,
                    filter: 'blur(3px) grayscale(0.4)',
                    zIndex: 0,
                    transition: 'all 0.4s ease',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, transparent 100%)',
                    zIndex: 1,
                  }}
                />
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 2,
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        border: '3px solid #002395',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 24px rgba(0, 35, 149, 0.3)',
                      }}
                    >
                      <GroupsIcon sx={{ fontSize: 36, color: '#002395' }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#002395' }}>
                      5. Leverage Social Influence
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.7, color: '#0b1b3a', fontWeight: 500 }}>
                    See what others are achieving. Social influence motivates and creates a sense of community.
                  </Typography>
                  <Stack spacing={2}>
                    <Box
                      sx={{
                        p: 2.5,
                        borderRadius: '16px',
                        border: '2px solid',
                        borderColor: 'divider',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 700, mb: 1, color: '#0b1b3a' }}>
                        Active Community
                      </Typography>
                      <Typography variant="h4" sx={{ color: '#002395', fontWeight: 800 }}>
                        {socialInfluence.peersActive.toLocaleString()}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#0b1b3a' }}>
                        people building habits right now
                      </Typography>
                    </Box>
                    {/* Top Performer with Photo */}
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: '16px',
                        border: '2px solid',
                        borderColor: '#4CAF50',
                        backgroundColor: 'rgba(76, 175, 80, 0.1)',
                        backdropFilter: 'blur(10px)',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <Avatar
                          src={getImagePath("/photos/583943471_1157911509850187_2575083228465038744_n.jpg")}
                          alt={socialInfluence.topPerformer}
                          sx={{
                            width: 64,
                            height: 64,
                            border: '3px solid #4CAF50',
                            boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)',
                          }}
                        />
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5, color: '#4CAF50' }}>
                            Top Performer
                          </Typography>
                          <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5, color: '#0b1b3a' }}>
                            {socialInfluence.topPerformer}
                          </Typography>
                          <Typography variant="caption" sx={{ color: '#0b1b3a', fontWeight: 600 }}>
                            {socialInfluence.achievements} achievements unlocked
                          </Typography>
                        </Box>
                      </Box>
                      {/* Skills Cloud */}
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                        {[ComputerIcon, VideoLibraryIcon, LanguageIcon, SchoolIcon, MicIcon].map((Icon, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              width: 36,
                              height: 36,
                              borderRadius: '50%',
                              backgroundColor: 'rgba(255, 255, 255, 0.9)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#002395',
                              fontSize: 18,
                              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            }}
                          >
                            <Icon />
                          </Box>
                        ))}
                      </Box>
                    </Box>
                    <Button
                      variant="contained"
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
                        fontWeight: 700,
                        py: 1.5,
                        borderRadius: '16px',
                        backgroundColor: '#002395',
                        '&:hover': {
                          backgroundColor: '#001a7a',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 24px rgba(0, 35, 149, 0.4)',
                        },
                        transition: 'all 0.3s ease',
                        textDecoration: 'none',
                      }}
                    >
                      Join Community
                    </Button>
                  </Stack>
                </Box>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  border: '3px solid',
                  borderColor: '#2196F3',
                  borderRadius: '24px',
                  background: 'white',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 40px rgba(33, 150, 243, 0.3)',
                    borderColor: '#2196F3',
                    '& .card-photo': {
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                {/* Background Photo */}
                <Box
                  className="card-photo"
                  component="img"
                  src="/photos/571419367_1143811194593552_6930038688628840775_n.jpg"
                  alt="Iterate & Improve"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.12,
                    filter: 'blur(3px) grayscale(0.4)',
                    zIndex: 0,
                    transition: 'all 0.4s ease',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.05) 0%, transparent 100%)',
                    zIndex: 1,
                  }}
                />
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 2,
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        border: '3px solid #2196F3',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 24px rgba(33, 150, 243, 0.3)',
                      }}
                    >
                      <FeedbackIcon sx={{ fontSize: 36, color: '#2196F3' }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#2196F3' }}>
                      6. Iterate & Improve
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.7, color: '#0b1b3a', fontWeight: 500 }}>
                    Your feedback helps us improve. Share your experience and help us make habit formation easier for everyone.
                  </Typography>
                  <Stack spacing={2}>
                    {/* Interactive Progress Tracker */}
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: '16px',
                        border: '2px solid',
                        borderColor: 'divider',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        component="img"
                        src={getImagePath("/photos/583924019_1157903166517688_8756873269993443102_n.jpg")}
                        alt="Learning Platform"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          opacity: 0.08,
                          filter: 'blur(2px)',
                          zIndex: 0,
                        }}
                      />
                      <Box sx={{ position: 'relative', zIndex: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 700, mb: 2, color: '#0b1b3a' }}>
                          Your Progress
                        </Typography>
                        <Box sx={{ mb: 3 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: '#0b1b3a' }}>
                              Interactions
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 800, color: '#002395' }}>
                              {satisfactionMetrics.interactions}
                            </Typography>
                          </Box>
                          <Box sx={{ position: 'relative', height: 12, borderRadius: 6, backgroundColor: 'rgba(0, 35, 149, 0.1)', overflow: 'hidden' }}>
                            <Box
                              sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: '100%',
                                width: `${Math.min((satisfactionMetrics.interactions / 10) * 100, 100)}%`,
                                background: 'linear-gradient(90deg, #002395 0%, #ED2939 100%)',
                                borderRadius: 6,
                                transition: 'width 0.5s ease',
                              }}
                            />
                          </Box>
                        </Box>
                        <Box>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: '#0b1b3a' }}>
                              Time on page
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 800, color: '#ED2939' }}>
                              {Math.floor(satisfactionMetrics.timeOnPage / 60)}m
                            </Typography>
                          </Box>
                          <Box sx={{ position: 'relative', height: 12, borderRadius: 6, backgroundColor: 'rgba(237, 41, 57, 0.1)', overflow: 'hidden' }}>
                            <Box
                              sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: '100%',
                                width: `${Math.min((satisfactionMetrics.timeOnPage / 300) * 100, 100)}%`,
                                background: 'linear-gradient(90deg, #ED2939 0%, #FF9800 100%)',
                                borderRadius: 6,
                                transition: 'width 0.5s ease',
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Button
                      variant="contained"
                      fullWidth
                      startIcon={<FeedbackIcon />}
                      endIcon={<ArrowForwardIcon />}
                      onClick={() => {
                        showFeedback('Thank you for your feedback! We use it to improve.', 'success');
                        setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                      }}
                      sx={{
                        fontWeight: 700,
                        py: 1.5,
                        borderRadius: '16px',
                        backgroundColor: '#2196F3',
                        '&:hover': {
                          backgroundColor: '#1976D2',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 24px rgba(33, 150, 243, 0.4)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Share Feedback
                    </Button>
                    <Button
                      variant="outlined"
                      fullWidth
                      startIcon={<TrendingUpIcon />}
                      onClick={() => {
                        showFeedback('We continuously improve based on user behavior and feedback.', 'info');
                        setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                      }}
                      sx={{
                        fontWeight: 600,
                        py: 1.5,
                        borderRadius: '16px',
                        borderColor: '#2196F3',
                        color: '#2196F3',
                        '&:hover': {
                          borderColor: '#1976D2',
                          backgroundColor: 'rgba(33, 150, 243, 0.1)',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      How We Improve
                    </Button>
                  </Stack>
                </Box>
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
