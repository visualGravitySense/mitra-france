import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import PaletteIcon from '@mui/icons-material/Palette';
import ComputerIcon from '@mui/icons-material/Computer';
import ElderlyIcon from '@mui/icons-material/Elderly';
import PeopleIcon from '@mui/icons-material/People';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PublicIcon from '@mui/icons-material/Public';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';
import { getImagePath } from '../utils/imagePath';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import BoltIcon from '@mui/icons-material/Bolt';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import MuseumIcon from '@mui/icons-material/Museum';
import MicIcon from '@mui/icons-material/Mic';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Fab from '@mui/material/Fab';
import BookOnlineIcon from '@mui/icons-material/BookOnline';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`events-tabpanel-${index}`}
      aria-labelledby={`events-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

const workshops = [
  {
    title: 'Digital Skills for Seniors',
    category: 'For Seniors',
    icon: <ElderlyIcon />,
    description: 'Learn essential digital skills for everyday life - from using smartphones to online banking.',
    photo: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
    date: 'February 15, 2024',
    time: '10:00 AM - 12:00 PM',
    location: 'Le 109, Nice',
    status: 'upcoming',
  },
  {
    title: 'Media Literacy Workshop',
    category: 'Media Literacy',
    icon: <PaletteIcon />,
    description: 'Develop critical thinking skills to navigate the modern media landscape and identify reliable sources.',
    photo: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
    date: 'February 20, 2024',
    time: '2:00 PM - 4:00 PM',
    location: 'Villa Ephrussi, Nice',
    status: 'upcoming',
  },
  {
    title: 'Creative Writing for Youth',
    category: 'For Youth',
    icon: <PeopleIcon />,
    description: 'Express yourself through creative writing and storytelling workshops.',
    photo: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
    date: 'January 28, 2024',
    time: '3:00 PM - 5:00 PM',
    location: 'Le HUBLOT, Nice',
    status: 'past',
  },
  {
    title: 'Digital Photography Basics',
    category: 'Digital Skills',
    icon: <ComputerIcon />,
    description: 'Master the basics of digital photography and photo editing.',
    photo: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
    date: 'January 20, 2024',
    time: '10:00 AM - 1:00 PM',
    location: 'Le 109, Nice',
    status: 'past',
  },
];

export default function Events() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      {/* BJ FOGG BEHAVIOR MODEL: MOTIVATION + ABILITY + PROMPTS */}
      <Box
        sx={{
          pt: { xs: 10, sm: 12, md: 14 },
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
            zIndex: 2,
          },
        }}
      >
        {/* Dynamic Photo Collage Background */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gridTemplateRows: { xs: 'repeat(3, 1fr)', md: 'repeat(2, 1fr)' },
            gap: 0,
            zIndex: 0,
          }}
        >
          {[
            '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
            '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
            '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
            '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
          ].map((photo, idx) => (
            <Box
              key={idx}
              component="img"
              src={getImagePath(photo)}
              alt={`Event ${idx + 1}`}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.4) saturate(1.1)',
                opacity: 0.7,
                transition: 'opacity 0.4s ease',
                '&:hover': {
                  opacity: 0.9,
                },
              }}
            />
          ))}
        </Box>
        {/* Gradient Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, transparent 0%, rgba(0, 35, 149, 0.85) 100%)',
            zIndex: 1,
          }}
        />

        <Container sx={{ position: 'relative', zIndex: 2 }}>
          {/* MOTIVATION: Emotional appeal and value proposition */}
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ mb: 4 }}>
                <Chip
                  icon={<EventIcon />}
                  label="Events & Activities"
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
                <Typography
                  variant="h2"
                  sx={{
                    mb: 2,
                    background: 'linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.9) 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 900,
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                    textShadow: '0 2px 12px rgba(0,0,0,0.3)',
                  }}
                >
                  Events & Activities
                </Typography>
                <Box
                  sx={{
                    width: 100,
                    height: 4,
                    background: 'linear-gradient(90deg, #ED2939 0%, #ED2939 100%)',
                    mb: 3,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    mb: 3,
                    color: 'rgba(255, 255, 255, 0.95)',
                    fontWeight: 500,
                    lineHeight: 1.8,
                    textShadow: '0 1px 6px rgba(0,0,0,0.5)',
                  }}
                >
                  Join our workshops, training courses, and cultural activities. Learn new skills, 
                  connect with your community, and make a positive impact.
                </Typography>
                
                {/* MOTIVATION: Show benefits and value */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 2,
                    flexWrap: 'wrap',
                    mb: 4,
                  }}
                >
                  <Chip
                    icon={<CheckCircleIcon sx={{ color: '#4CAF50' }} />}
                    label="Free Events"
                    sx={{
                      backgroundColor: 'rgba(76, 175, 80, 0.2)',
                      backdropFilter: 'blur(10px)',
                      color: 'white',
                      fontWeight: 700,
                      border: '1px solid rgba(76, 175, 80, 0.5)',
                    }}
                  />
                  <Chip
                    icon={<TrendingUpIcon sx={{ color: '#002395' }} />}
                    label="50+ Events Yearly"
                    sx={{
                      backgroundColor: 'rgba(0, 35, 149, 0.2)',
                      backdropFilter: 'blur(10px)',
                      color: 'white',
                      fontWeight: 700,
                      border: '1px solid rgba(0, 35, 149, 0.5)',
                    }}
                  />
                  <Chip
                    icon={<PublicIcon sx={{ color: '#ED2939' }} />}
                    label="Open to Everyone"
                    sx={{
                      backgroundColor: 'rgba(237, 41, 57, 0.2)',
                      backdropFilter: 'blur(10px)',
                      color: 'white',
                      fontWeight: 700,
                      border: '1px solid rgba(237, 41, 57, 0.5)',
                    }}
                  />
                </Box>
              </Box>
            </Grid>

            {/* Featured Event Badge */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: '24px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '3px solid #ED2939',
                  boxShadow: '0 12px 40px rgba(237, 41, 57, 0.4)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    boxShadow: '0 16px 48px rgba(237, 41, 57, 0.6)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={getImagePath("/photos/583924019_1157903166517688_8756873269993443102_n.jpg")}
                  alt="Next Event"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '60%',
                    objectFit: 'cover',
                    filter: 'brightness(0.7) saturate(1.1)',
                    zIndex: 0,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '60%',
                    background: 'linear-gradient(180deg, transparent 0%, rgba(237, 41, 57, 0.6) 100%)',
                    zIndex: 1,
                  }}
                />
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  <Chip
                    label="Next Event"
                    sx={{
                      mb: 2,
                      backgroundColor: '#ED2939',
                      color: 'white',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      py: 1,
                    }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: 800, color: 'white', mb: 1, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                    Media Workshop
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 2, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                    January 28, 2024
                  </Typography>
                  <Box
                    sx={{
                      mt: 2,
                      p: 2,
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <Typography variant="caption" sx={{ color: '#0b1b3a', fontWeight: 600, display: 'block', mb: 0.5 }}>
                      Location: Le 109, Nice
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#0b1b3a', fontSize: '0.75rem' }}>
                      Join us for an interactive media literacy workshop
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>

          {/* MOTIVATION: Event statistics with visual appeal - Live Preview Cards */}
          <Grid container spacing={3} sx={{ mt: 4, mb: 6 }}>
            {[
              {
                icon: <CalendarTodayIcon />,
                label: 'Upcoming Events',
                value: '20+',
                color: '#002395',
                photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
              },
              {
                icon: <SchoolIcon />,
                label: 'Training Courses',
                value: '15+',
                color: '#ED2939',
                photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
              },
              {
                icon: <PeopleIcon />,
                label: 'Participants',
                value: '500+',
                color: '#4CAF50',
                photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
              },
              {
                icon: <NotificationsActiveIcon />,
                label: 'Events This Month',
                value: '8+',
                color: '#ED2939',
                photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'),
              },
            ].map((stat) => (
              <Grid size={{ xs: 6, sm: 3 }} key={stat.label}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    border: '3px solid',
                    borderColor: stat.color,
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                    minHeight: 180,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 32px ${stat.color}40`,
                      borderColor: stat.color,
                      '& .stat-photo': {
                        transform: 'scale(1.15)',
                        opacity: 0.25,
                      },
                    },
                  }}
                >
                  {/* Background Photo */}
                  <Box
                    className="stat-photo"
                    component="img"
                    src={getImagePath(stat.photo)}
                    alt={stat.label}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.15,
                      filter: 'blur(8px) grayscale(0.5)',
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
                      background: `linear-gradient(135deg, ${stat.color}15 0%, transparent 100%)`,
                      zIndex: 1,
                    }}
                  />
                  <Box sx={{ position: 'relative', zIndex: 2 }}>
                    <Box
                      sx={{
                        color: stat.color,
                        mb: 1.5,
                        fontSize: 40,
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Typography variant="h3" sx={{ color: stat.color, fontWeight: 800, mb: 0.5, textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: '#0b1b3a' }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* PROMPT: Clear call-to-action */}
          <Box
            sx={{
              textAlign: 'center',
              p: 5,
              borderRadius: '32px',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '3px solid',
              borderColor: '#002395',
              maxWidth: '900px',
              mx: 'auto',
              mt: 4,
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 12px 40px rgba(0, 35, 149, 0.3)',
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
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 800, color: '#002395' }}>
              Ready to Join an Event?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', color: '#0b1b3a', lineHeight: 1.8 }}>
              Browse our events below or contact us to learn more about upcoming activities. 
              All events are free and open to everyone.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ justifyContent: 'center', alignItems: 'center', mb: 3 }}>
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                size="large"
                startIcon={<BoltIcon />}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 6,
                  py: 2.5,
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  borderRadius: '30px',
                  background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                  color: 'white',
                  boxShadow: '0 8px 32px rgba(0, 35, 149, 0.5)',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #ED2939 0%, #002395 100%)',
                    transform: 'translateY(-4px) scale(1.05)',
                    boxShadow: '0 12px 40px rgba(0, 35, 149, 0.7)',
                    '& .MuiButton-endIcon': {
                      transform: 'translateX(6px)',
                    },
                  },
                  '& .MuiButton-endIcon': {
                    transition: 'transform 0.4s ease',
                  },
                }}
              >
                Register Now
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                variant="outlined"
                size="large"
                sx={{
                  px: 5,
                  py: 2.5,
                  fontWeight: 700,
                  fontSize: '1rem',
                  borderRadius: '30px',
                  borderWidth: 3,
                  borderColor: '#002395',
                  color: '#002395',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    borderWidth: 3,
                    backgroundColor: 'rgba(0, 35, 149, 0.1)',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.3)',
                  },
                }}
              >
                Contact Us
              </Button>
            </Stack>
            {/* Social Proof with Avatars */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                pt: 3,
                borderTop: '1px solid',
                borderColor: 'divider',
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
                  '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
                  '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
                  '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
                  '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
                  '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
                ].map((photo, idx) => (
                  <Avatar key={idx} src={photo} alt={`Participant ${idx + 1}`} />
                ))}
              </AvatarGroup>
              <Typography variant="body2" sx={{ color: '#0b1b3a', fontWeight: 700, fontSize: '0.95rem' }}>
                Joined by <strong>500+</strong> active members
              </Typography>
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
            Free to join • No registration needed • Open to everyone
          </Typography>
        </Container>
      </Box>

      <Container>
        {/* ABILITY: Enhanced tabs with clear labels - Graphical Tabs */}
        <Box sx={{ mb: 6, mt: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: 'text.primary',
              fontWeight: 800,
              textAlign: 'center',
              fontSize: { xs: '1.5rem', md: '2rem' },
            }}
          >
            Choose event type:
          </Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="events tabs"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              mb: 4,
              '& .MuiTabs-indicator': {
                display: 'none',
              },
            }}
          >
            {[
              {
                label: 'Workshops',
                icon: <LightbulbIcon />,
                photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                color: '#002395',
              },
              {
                label: 'Training Courses',
                icon: <SchoolIcon />,
                photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                color: '#ED2939',
              },
              {
                label: 'Cultural Activities',
                icon: <MuseumIcon />,
                photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                color: '#002395',
              },
              {
                label: 'Calendar',
                icon: <CalendarTodayIcon />,
                photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'),
                color: '#4CAF50',
              },
            ].map((tab, index) => (
              <Tab
                key={tab.label}
                label={tab.label}
                icon={tab.icon}
                iconPosition="start"
                sx={{
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: '1rem',
                  minHeight: 100,
                  minWidth: { xs: 160, sm: 200 },
                  position: 'relative',
                  borderRadius: '20px',
                  mx: 1,
                  mb: 2,
                  overflow: 'hidden',
                  background: value === index ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: value === index ? `3px solid ${tab.color}` : '2px solid transparent',
                  boxShadow: value === index
                    ? `0 8px 24px ${tab.color}40`
                    : '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    transform: 'translateY(-4px)',
                    boxShadow: `0 12px 32px ${tab.color}30`,
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: value === index ? '4px' : '0px',
                    background: '#ED2939',
                    transition: 'height 0.3s ease',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${getImagePath(tab.photo)})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: value === index ? 0.2 : 0.1,
                    filter: value === index ? 'blur(4px) saturate(1.2)' : 'blur(8px) grayscale(0.8)',
                    zIndex: 0,
                    transition: 'all 0.4s ease',
                  },
                  '& .MuiTab-iconWrapper': {
                    position: 'relative',
                    zIndex: 2,
                    color: value === index ? tab.color : '#666',
                    transition: 'color 0.3s ease',
                  },
                  '& .MuiTab-label': {
                    position: 'relative',
                    zIndex: 2,
                    color: value === index ? tab.color : '#666',
                    fontWeight: value === index ? 800 : 600,
                    transition: 'all 0.3s ease',
                  },
                }}
              />
            ))}
          </Tabs>
          
          {/* ABILITY: Show simplicity indicator for navigation */}
          <Typography
            variant="caption"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.5,
              mb: 4,
            }}
          >
            <CheckCircleIcon sx={{ fontSize: 16, color: 'success.main' }} />
            Easy navigation • Filter by type • Detailed information available
          </Typography>
        </Box>

      <TabPanel value={value} index={0}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, lg: 9 }}>
            <Grid container spacing={4}>
              {workshops.map((workshop, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 6 }} key={workshop.title}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      position: 'relative',
                      border: '2px solid',
                      borderColor: workshop.status === 'upcoming' ? '#4CAF50' : 'transparent',
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 48px rgba(0, 0, 0, 0.2)',
                        '& .event-photo': {
                          transform: 'scale(1.1)',
                        },
                      },
                    }}
                  >
                    {/* Photo Section (60% of card) */}
                    <Box
                      sx={{
                        position: 'relative',
                        height: 280,
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        className="event-photo"
                        component="img"
                        src={getImagePath(workshop.photo)}
                        alt={workshop.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.6s ease',
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
                          background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)',
                        }}
                      />
                      {/* Status Badge */}
                      <Chip
                        label={workshop.status === 'upcoming' ? 'Upcoming' : 'Past Event'}
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          backgroundColor: workshop.status === 'upcoming' ? '#4CAF50' : '#666',
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '0.75rem',
                          zIndex: 2,
                        }}
                      />
                      {/* Date & Time Badge */}
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 16,
                          left: 16,
                          right: 16,
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: '12px',
                          p: 1.5,
                          zIndex: 2,
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                          <AccessTimeIcon sx={{ fontSize: 18, color: '#002395' }} />
                          <Typography variant="caption" sx={{ fontWeight: 700, color: '#002395' }}>
                            {workshop.date} • {workshop.time}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <LocationOnIcon sx={{ fontSize: 18, color: '#ED2939' }} />
                          <Typography variant="caption" sx={{ color: '#0b1b3a' }}>
                            {workshop.location}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    {/* Content Section (40% of card) */}
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1.5 }}>
                        <Chip
                          label={workshop.category}
                          size="small"
                          sx={{
                            backgroundColor: index % 2 === 0 ? 'rgba(0, 35, 149, 0.1)' : 'rgba(237, 41, 57, 0.1)',
                            color: index % 2 === 0 ? '#002395' : '#ED2939',
                            fontWeight: 700,
                            fontSize: '0.85rem',
                          }}
                        />
                      </Box>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 800, mb: 1.5, color: '#0b1b3a' }}>
                        {workshop.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#666', mb: 2.5, lineHeight: 1.6 }}>
                        {workshop.description}
                      </Typography>
                      {/* PROMPT: Event-specific CTA */}
                      <Button
                        component={RouterLink}
                        to="/contact"
                        variant="contained"
                        size="medium"
                        fullWidth
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          backgroundColor: index % 2 === 0 ? '#002395' : '#ED2939',
                          color: 'white',
                          fontWeight: 700,
                          borderRadius: '12px',
                          py: 1.5,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: index % 2 === 0 ? '#001a6b' : '#c91e2d',
                            transform: 'translateX(4px)',
                            '& .MuiButton-endIcon': {
                              transform: 'translateX(4px)',
                            },
                          },
                          '& .MuiButton-endIcon': {
                            transition: 'transform 0.3s ease',
                          },
                        }}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            {/* Event Highlights Gallery */}
            <Box sx={{ mt: 6, mb: 4 }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 800, color: '#0b1b3a' }}>
                Moments from past events
              </Typography>
              <ImageList
                sx={{
                  width: '100%',
                  height: 200,
                  gridAutoFlow: 'column',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr)) !important',
                  gridAutoColumns: 'minmax(150px, 1fr)',
                  gap: 2,
                }}
                cols={6}
                rowHeight={200}
              >
                {[
                  '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
                  '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
                  '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
                  '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
                  '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
                  '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
                ].map((photo, idx) => (
                  <ImageListItem key={idx}>
                    <Box
                      component="img"
                      src={getImagePath(photo)}
                      alt={`Event moment ${idx + 1}`}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '16px',
                        transition: 'all 0.4s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'scale(1.1)',
                          boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                        },
                      }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Grid>
          {/* Featured Event Sidebar (Desktop only) */}
          <Grid size={{ xs: 12, lg: 3 }}>
            <Card
              sx={{
                position: 'sticky',
                top: 100,
                borderRadius: '24px',
                overflow: 'hidden',
                border: '3px solid #ED2939',
                boxShadow: '0 12px 40px rgba(237, 41, 57, 0.3)',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: 300,
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src={getImagePath("/photos/583924019_1157903166517688_8756873269993443102_n.jpg")}
                  alt="Most Popular Event"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 100%)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 3,
                    zIndex: 2,
                  }}
                >
                  <Chip
                    label="Most Popular This Month"
                    sx={{
                      mb: 2,
                      backgroundColor: '#ED2939',
                      color: 'white',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                    }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: 800, color: 'white', mb: 1, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                    Media Workshop
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', mb: 2, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                    Join us for an interactive media literacy workshop
                  </Typography>
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="contained"
                    fullWidth
                    startIcon={<BookOnlineIcon />}
                    sx={{
                      backgroundColor: '#ED2939',
                      color: 'white',
                      fontWeight: 800,
                      py: 1.5,
                      borderRadius: '12px',
                      boxShadow: '0 4px 16px rgba(237, 41, 57, 0.5)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: '#c91e2d',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(237, 41, 57, 0.7)',
                      },
                    }}
                  >
                    Book a Spot
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <Grid container spacing={4}>
              {[
                {
                  title: 'Multimedia Literacy & Production',
                  description: 'Comprehensive training in multimedia production, video editing, and digital storytelling.',
                  photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                  date: 'March 5, 2024',
                  time: '9:00 AM - 5:00 PM',
                  location: 'Le 109, Nice',
                  status: 'upcoming',
                  instructorPhoto: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                  instructorName: 'Alex Smulski',
                },
                {
                  title: 'Digital Skills for Educators',
                  description: 'Learn how to integrate digital tools into your teaching practice and engage students effectively.',
                  photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                  date: 'March 12, 2024',
                  time: '9:00 AM - 5:00 PM',
                  location: 'Villa Ephrussi, Nice',
                  status: 'upcoming',
                  instructorPhoto: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                  instructorName: 'Karina Tronche',
                },
                {
                  title: 'Intercultural Communication',
                  description: 'Develop skills to work effectively across cultures and build inclusive communities.',
                  photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'),
                  date: 'February 8, 2024',
                  time: '10:00 AM - 4:00 PM',
                  location: 'Le HUBLOT, Nice',
                  status: 'past',
                  instructorPhoto: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                  instructorName: 'Louise Papadoperakis',
                },
                {
                  title: 'Project Management for Non-Profits',
                  description: 'Master project management techniques tailored for non-profit organizations.',
                  photo: getImagePath('/photos/571419367_1143811194593552_6930038688628840775_n.jpg'),
                  date: 'January 25, 2024',
                  time: '9:00 AM - 5:00 PM',
                  location: 'Le 109, Nice',
                  status: 'past',
                  instructorPhoto: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'),
                  instructorName: 'Pavel Smulski',
                },
              ].map((course, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 6 }} key={course.title}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      position: 'relative',
                      border: '2px solid',
                      borderColor: course.status === 'upcoming' ? '#4CAF50' : 'transparent',
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 48px rgba(0, 0, 0, 0.2)',
                        '& .event-photo': {
                          transform: 'scale(1.1)',
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        height: 280,
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        className="event-photo"
                        component="img"
                        src={getImagePath(course.photo)}
                        alt={course.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.6s ease',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)',
                        }}
                      />
                      <Chip
                        label={course.status === 'upcoming' ? 'Upcoming' : 'Past Event'}
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          backgroundColor: course.status === 'upcoming' ? '#4CAF50' : '#666',
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '0.75rem',
                          zIndex: 2,
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 16,
                          left: 16,
                          right: 16,
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: '12px',
                          p: 1.5,
                          zIndex: 2,
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                          <AccessTimeIcon sx={{ fontSize: 18, color: '#ED2939' }} />
                          <Typography variant="caption" sx={{ fontWeight: 700, color: '#ED2939' }}>
                            {course.date} • {course.time}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <LocationOnIcon sx={{ fontSize: 18, color: '#ED2939' }} />
                          <Typography variant="caption" sx={{ color: '#0b1b3a' }}>
                            {course.location}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <CardContent sx={{ p: 3 }}>
                      {/* Instructor Photo */}
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <Avatar
                          src={course.instructorPhoto}
                          alt={course.instructorName}
                          sx={{
                            width: 56,
                            height: 56,
                            border: '3px solid #ED2939',
                            boxShadow: '0 4px 12px rgba(237, 41, 57, 0.3)',
                          }}
                        />
                        <Box>
                          <Typography variant="caption" sx={{ color: '#666', fontSize: '0.75rem', display: 'block' }}>
                            Lead Instructor
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: '#0b1b3a' }}>
                            {course.instructorName}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 800, mb: 1.5, color: '#0b1b3a' }}>
                        {course.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#666', mb: 2.5, lineHeight: 1.6 }}>
                        {course.description}
                      </Typography>
                      <Button
                        component={RouterLink}
                        to="/contact"
                        variant="contained"
                        size="medium"
                        fullWidth
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          backgroundColor: '#ED2939',
                          color: 'white',
                          fontWeight: 700,
                          borderRadius: '12px',
                          py: 1.5,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: '#c91e2d',
                            transform: 'translateX(4px)',
                            '& .MuiButton-endIcon': {
                              transform: 'translateX(4px)',
                            },
                          },
                          '& .MuiButton-endIcon': {
                            transition: 'transform 0.3s ease',
                          },
                        }}
                      >
                        Contact for Training
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            {/* Event Highlights Gallery */}
            <Box sx={{ mt: 6, mb: 4 }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 800, color: '#0b1b3a' }}>
                Moments from past events
              </Typography>
              <ImageList
                sx={{
                  width: '100%',
                  height: 200,
                  gridAutoFlow: 'column',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr)) !important',
                  gridAutoColumns: 'minmax(150px, 1fr)',
                  gap: 2,
                }}
                cols={6}
                rowHeight={200}
              >
                {[
                  '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
                  '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
                  '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
                  '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
                  '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
                  '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
                ].map((photo, idx) => (
                  <ImageListItem key={idx}>
                    <Box
                      component="img"
                      src={getImagePath(photo)}
                      alt={`Event moment ${idx + 1}`}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '16px',
                        transition: 'all 0.4s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'scale(1.1)',
                          boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                        },
                      }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Grid>
          {/* Dynamic Collage: Certificates & Learning Process */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Box
              sx={{
                position: 'sticky',
                top: 100,
                borderRadius: '24px',
                overflow: 'hidden',
                border: '3px solid #ED2939',
                boxShadow: '0 12px 40px rgba(237, 41, 57, 0.3)',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                p: 3,
              }}
            >
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 800, color: '#0b1b3a', textAlign: 'center' }}>
                Training Results & Certificates
              </Typography>
              <Grid container spacing={2}>
                {[
                  { photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'), label: 'Certificate Ceremony' },
                  { photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'), label: 'Learning Process' },
                  { photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'), label: 'Group Training' },
                  { photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'), label: 'Skills Development' },
                ].map((item, idx) => (
                  <Grid size={{ xs: 6 }} key={idx}>
                    <Box
                      sx={{
                        position: 'relative',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        aspectRatio: '1',
                        transition: 'all 0.4s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={getImagePath(item.photo)}
                        alt={item.label}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)',
                          p: 1.5,
                        }}
                      >
                        <Typography variant="caption" sx={{ color: 'white', fontWeight: 700, fontSize: '0.7rem' }}>
                          {item.label}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Box sx={{ mt: 3, p: 2, borderRadius: '12px', backgroundColor: 'rgba(237, 41, 57, 0.1)', textAlign: 'center' }}>
                <Typography variant="body2" sx={{ color: '#0b1b3a', fontWeight: 700, mb: 0.5 }}>
                  100+ Certificates Issued
                </Typography>
                <Typography variant="caption" sx={{ color: '#666' }}>
                  Join our successful graduates
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, lg: 9 }}>
            <Grid container spacing={3}>
              {[
                {
                  title: 'Cultural Exhibitions',
                  description: 'Showcasing artwork and cultural expressions from diverse communities',
                  photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                  date: 'March 15, 2024',
                  time: '2:00 PM - 6:00 PM',
                  location: 'Villa Ephrussi, Nice',
                  status: 'upcoming',
                },
                {
                  title: 'Film Screenings',
                  description: 'Educational film screenings followed by discussions',
                  photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'),
                  date: 'March 20, 2024',
                  time: '7:00 PM - 9:00 PM',
                  location: 'Le 109, Nice',
                  status: 'upcoming',
                },
                {
                  title: 'Cultural Festivals',
                  description: 'Community festivals celebrating different cultures and traditions',
                  photo: getImagePath('/photos/571419367_1143811194593552_6930038688628840775_n.jpg'),
                  date: 'February 10, 2024',
                  time: '10:00 AM - 6:00 PM',
                  location: 'Le HUBLOT, Nice',
                  status: 'past',
                },
                {
                  title: 'Art Workshops',
                  description: 'Hands-on art workshops exploring different artistic traditions',
                  photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                  date: 'January 30, 2024',
                  time: '3:00 PM - 5:00 PM',
                  location: 'Le 109, Nice',
                  status: 'past',
                },
              ].map((activity, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={activity.title}>
                  <Card
                    sx={{
                      position: 'relative',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      height: 400,
                      border: '2px solid',
                      borderColor: activity.status === 'upcoming' ? '#4CAF50' : 'transparent',
                      transition: 'all 0.4s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 48px rgba(0, 0, 0, 0.3)',
                        '& .activity-photo': {
                          transform: 'scale(1.1)',
                        },
                      },
                    }}
                  >
                    <Box
                      className="activity-photo"
                      component="img"
                      src={getImagePath(activity.photo)}
                      alt={activity.title}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.6s ease',
                      }}
                    />
                    {/* Dark Gradient from Bottom to Top */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)',
                      }}
                    />
                    {/* Status Badge */}
                    <Chip
                      label={activity.status === 'upcoming' ? 'Upcoming' : 'Past Event'}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        backgroundColor: activity.status === 'upcoming' ? '#4CAF50' : '#666',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        zIndex: 2,
                      }}
                    />
                    {/* Text Overlay */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        p: 4,
                        zIndex: 2,
                      }}
                    >
                      <Typography variant="h5" sx={{ fontWeight: 800, color: 'white', mb: 1.5, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                        {activity.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', mb: 2, lineHeight: 1.6, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                        {activity.description}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2, flexWrap: 'wrap' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <AccessTimeIcon sx={{ fontSize: 18, color: 'white' }} />
                          <Typography variant="caption" sx={{ color: 'white', fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                            {activity.date} • {activity.time}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <LocationOnIcon sx={{ fontSize: 18, color: 'white' }} />
                          <Typography variant="caption" sx={{ color: 'white', fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                            {activity.location}
                          </Typography>
                        </Box>
                      </Box>
                      <Button
                        component={RouterLink}
                        to="/contact"
                        variant="contained"
                        size="medium"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          backgroundColor: '#002395',
                          color: 'white',
                          fontWeight: 700,
                          borderRadius: '12px',
                          py: 1.5,
                          px: 3,
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 16px rgba(0, 35, 149, 0.5)',
                          '&:hover': {
                            backgroundColor: '#001a6b',
                            transform: 'translateX(4px)',
                            boxShadow: '0 6px 20px rgba(0, 35, 149, 0.7)',
                            '& .MuiButton-endIcon': {
                              transform: 'translateX(4px)',
                            },
                          },
                          '& .MuiButton-endIcon': {
                            transition: 'transform 0.3s ease',
                          },
                        }}
                      >
                        Join Cultural Activities
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
            {/* Event Highlights Gallery */}
            <Box sx={{ mt: 6, mb: 4 }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 800, color: '#0b1b3a' }}>
                Moments from past events
              </Typography>
              <ImageList
                sx={{
                  width: '100%',
                  height: 200,
                  gridAutoFlow: 'column',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr)) !important',
                  gridAutoColumns: 'minmax(150px, 1fr)',
                  gap: 2,
                }}
                cols={6}
                rowHeight={200}
              >
                {[
                  '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
                  '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
                  '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
                  '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
                  '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
                  '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
                ].map((photo, idx) => (
                  <ImageListItem key={idx}>
                    <Box
                      component="img"
                      src={getImagePath(photo)}
                      alt={`Event moment ${idx + 1}`}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '16px',
                        transition: 'all 0.4s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'scale(1.1)',
                          boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                        },
                      }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Grid>
          {/* Featured Event Sidebar */}
          <Grid size={{ xs: 12, lg: 3 }}>
            <Card
              sx={{
                position: 'sticky',
                top: 100,
                borderRadius: '24px',
                overflow: 'hidden',
                border: '3px solid #002395',
                boxShadow: '0 12px 40px rgba(0, 35, 149, 0.3)',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: 300,
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src={getImagePath("/photos/583943471_1157911509850187_2575083228465038744_n.jpg")}
                  alt="Most Popular Event"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 100%)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 3,
                    zIndex: 2,
                  }}
                >
                  <Chip
                    label="Most Popular This Month"
                    sx={{
                      mb: 2,
                      backgroundColor: '#002395',
                      color: 'white',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                    }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: 800, color: 'white', mb: 1, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                    Cultural Exhibition
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', mb: 2, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                    Celebrating diversity and intercultural understanding
                  </Typography>
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="contained"
                    fullWidth
                    startIcon={<BookOnlineIcon />}
                    sx={{
                      backgroundColor: '#002395',
                      color: 'white',
                      fontWeight: 800,
                      py: 1.5,
                      borderRadius: '12px',
                      boxShadow: '0 4px 16px rgba(0, 35, 149, 0.5)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: '#001a6b',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(0, 35, 149, 0.7)',
                      },
                    }}
                  >
                    Book a Spot
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Card
          sx={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '3px solid #002395',
            boxShadow: '0 12px 40px rgba(0, 35, 149, 0.3)',
            minHeight: 500,
          }}
        >
          {/* Background Image - Atmosphere of Event */}
          <Box
            component="img"
            src={getImagePath("/photos/583924019_1157903166517688_8756873269993443102_n.jpg")}
            alt="Event Atmosphere"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.3) blur(2px)',
              zIndex: 0,
            }}
          />
          {/* Glassmorphism Overlay */}
          <Box
            sx={{
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              zIndex: 1,
            }}
          >
            <CardContent sx={{ textAlign: 'center', p: 6 }}>
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 35, 149, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3,
                  border: '3px solid #002395',
                  boxShadow: '0 8px 24px rgba(0, 35, 149, 0.3)',
                }}
              >
                <CalendarTodayIcon sx={{ fontSize: 60, color: '#002395' }} />
              </Box>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 800, mb: 2, color: '#0b1b3a' }}>
                Event Calendar
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.15rem', lineHeight: 1.8, mb: 2, color: '#0b1b3a', maxWidth: '700px', mx: 'auto' }}>
                Check our upcoming events and activities. For the most current schedule and to
                register for events, please contact us directly.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4, color: '#666', maxWidth: '700px', mx: 'auto' }}>
                We regularly update our calendar with new workshops, training sessions, and
                cultural activities. Follow us on social media or subscribe to our newsletter
                to stay informed about upcoming events.
              </Typography>
              {/* PROMPT: Calendar CTA */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ justifyContent: 'center', maxWidth: '600px', mx: 'auto' }}>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 5,
                    py: 2,
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    borderRadius: '30px',
                    background: 'linear-gradient(135deg, #002395 0%, #001a6b 100%)',
                    color: 'white',
                    boxShadow: '0 8px 32px rgba(0, 35, 149, 0.5)',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #001a6b 0%, #002395 100%)',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(0, 35, 149, 0.7)',
                      '& .MuiButton-endIcon': {
                        transform: 'translateX(6px)',
                      },
                    },
                    '& .MuiButton-endIcon': {
                      transition: 'transform 0.4s ease',
                    },
                  }}
                >
                  Contact for Schedule
                </Button>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 5,
                    py: 2,
                    fontWeight: 700,
                    fontSize: '1rem',
                    borderRadius: '30px',
                    borderWidth: 3,
                    borderColor: '#002395',
                    color: '#002395',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      borderWidth: 3,
                      backgroundColor: 'rgba(0, 35, 149, 0.1)',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(0, 35, 149, 0.3)',
                    },
                  }}
                >
                  Subscribe to Newsletter
                </Button>
              </Stack>
            </CardContent>
          </Box>
        </Card>
      </TabPanel>

      {/* BJ FOGG MODEL: PROMPT - Strong call-to-action with enhanced motivation */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.08) 0%, rgba(237, 41, 57, 0.08) 100%)',
          borderRadius: '16px',
          p: 6,
          textAlign: 'center',
          mt: 8,
          mb: 4,
          border: '2px solid',
          borderColor: 'primary.main',
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
        {/* MOTIVATION: Show value and benefits */}
        <Chip
          icon={<EventIcon />}
          label="Join Our Events"
          color="primary"
          sx={{ mb: 2, fontWeight: 600, fontSize: '0.95rem', py: 2 }}
        />
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 35, 149, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mb: 3,
          }}
        >
          <EmojiEventsIcon sx={{ fontSize: 40, color: 'primary.main' }} />
        </Box>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
          Don't Miss Out!
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          paragraph
          sx={{ mb: 4, maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}
        >
          Join our community of learners and changemakers. Participate in workshops, training courses,
          and cultural activities that make a real difference.
        </Typography>
        
        {/* MOTIVATION: Show what they'll get */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 3,
            mb: 4,
            flexWrap: 'wrap',
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <CheckCircleIcon sx={{ fontSize: 32, color: 'success.main', mb: 0.5 }} />
            <Typography variant="body2" sx={{ fontWeight: 600 }}>Free Events</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <PeopleIcon sx={{ fontSize: 32, color: 'primary.main', mb: 0.5 }} />
            <Typography variant="body2" sx={{ fontWeight: 600 }}>Community Building</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <TrendingUpIcon sx={{ fontSize: 32, color: 'error.main', mb: 0.5 }} />
            <Typography variant="body2" sx={{ fontWeight: 600 }}>Skill Development</Typography>
          </Box>
        </Box>

        {/* PROMPT: Clear, prominent CTAs */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ justifyContent: 'center' }}
        >
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 5,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 700,
              borderRadius: '25px',
              boxShadow: '0 4px 14px rgba(0, 35, 149, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 18px rgba(0, 35, 149, 0.4)',
              },
            }}
          >
            Register for Events
          </Button>
          <Button
            component={RouterLink}
            to="/contact"
            variant="outlined"
            color="primary"
            size="large"
            sx={{
              px: 5,
              py: 1.5,
              fontSize: '1.1rem',
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
            Contact Us
          </Button>
        </Stack>
        
        {/* ABILITY: Show simplicity */}
        <Typography
          variant="caption"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0.5,
            mt: 3,
            color: 'text.secondary',
          }}
        >
          <CheckCircleIcon sx={{ fontSize: 16, color: 'success.main' }} />
          Free to join • No registration needed • Quick response
        </Typography>
      </Box>
      </Container>
    </Box>
  );
}
