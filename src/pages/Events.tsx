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
  },
  {
    title: 'Media Literacy Workshop',
    category: 'Media Literacy',
    icon: <PaletteIcon />,
    description: 'Develop critical thinking skills to navigate the modern media landscape and identify reliable sources.',
  },
  {
    title: 'Creative Writing for Youth',
    category: 'For Youth',
    icon: <PeopleIcon />,
    description: 'Express yourself through creative writing and storytelling workshops.',
  },
  {
    title: 'Digital Photography Basics',
    category: 'Digital Skills',
    icon: <ComputerIcon />,
    description: 'Master the basics of digital photography and photo editing.',
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
              icon={<EventIcon />}
              label="Events & Activities"
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
              Events & Activities
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
              Join our workshops, training courses, and cultural activities. Learn new skills, 
              connect with your community, and make a positive impact.
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
                label="Free Events"
                sx={{
                  backgroundColor: 'rgba(76, 175, 80, 0.1)',
                  color: 'success.main',
                  fontWeight: 600,
                }}
              />
              <Chip
                icon={<TrendingUpIcon sx={{ color: 'primary.main' }} />}
                label="50+ Events Yearly"
                sx={{
                  backgroundColor: 'rgba(0, 35, 149, 0.1)',
                  color: 'primary.main',
                  fontWeight: 600,
                }}
              />
              <Chip
                icon={<PublicIcon sx={{ color: 'error.main' }} />}
                label="Open to Everyone"
                sx={{
                  backgroundColor: 'rgba(237, 41, 57, 0.1)',
                  color: 'error.main',
                  fontWeight: 600,
                }}
              />
            </Box>
          </Box>

          {/* MOTIVATION: Event statistics with visual appeal */}
          <Grid container spacing={3} sx={{ mt: 2, mb: 4 }}>
            {[
              { icon: <EventIcon />, label: 'Upcoming Events', value: '20+', color: 'primary.main' },
              { icon: <SchoolIcon />, label: 'Training Courses', value: '15+', color: 'error.main' },
              { icon: <PeopleIcon />, label: 'Participants', value: '500+', color: 'success.main' },
              { icon: <CalendarTodayIcon />, label: 'Events This Month', value: '8+', color: 'info.main' },
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
                  <Typography variant="h4" sx={{ color: stat.color, fontWeight: 700, mb: 0.5 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* PROMPT: Clear call-to-action */}
          <Box
            sx={{
              textAlign: 'center',
              p: 4,
              borderRadius: 3,
              background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(237, 41, 57, 0.1) 100%)',
              border: '2px solid',
              borderColor: 'primary.main',
              maxWidth: '700px',
              mx: 'auto',
              mt: 2,
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #002395 0%, #ED2939 100%)',
              },
            }}
          >
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 700, color: 'primary.main' }}>
              Ready to Join an Event?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontSize: '1.05rem' }}>
              Browse our events below or contact us to learn more about upcoming activities. 
              All events are free and open to everyone.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
              <Button
                component={RouterLink}
                to="/contact"
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
                Register Now
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                variant="outlined"
                color="primary"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: '25px',
                  borderWidth: 2,
                  fontSize: '1rem',
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
        {/* ABILITY: Enhanced tabs with clear labels */}
        <Box sx={{ mb: 6, mt: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              color: 'text.primary',
              fontWeight: 600,
              textAlign: 'center',
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
              borderBottom: 2,
              borderColor: 'divider',
              mb: 4,
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                minHeight: 72,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(0, 35, 149, 0.05)',
                  transform: 'translateY(-2px)',
                },
              },
              '& .Mui-selected': {
                color: 'primary.main',
                fontWeight: 700,
              },
              '& .MuiTabs-indicator': {
                height: 3,
                borderRadius: '3px 3px 0 0',
              },
            }}
          >
            <Tab label="Workshops" icon={<PaletteIcon />} iconPosition="start" />
            <Tab label="Training Courses" icon={<SchoolIcon />} iconPosition="start" />
            <Tab label="Cultural Activities" icon={<EventIcon />} iconPosition="start" />
            <Tab label="Calendar" icon={<CalendarTodayIcon />} iconPosition="start" />
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
              mb: 2,
            }}
          >
            <CheckCircleIcon sx={{ fontSize: 16, color: 'success.main' }} />
            Easy navigation • Filter by type • Detailed information available
          </Typography>
        </Box>

      <TabPanel value={value} index={0}>
        <Grid container spacing={4}>
          {workshops.map((workshop, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={workshop.title}>
              <Card
                sx={{
                  height: '100%',
                  borderTop: '4px solid',
                  borderTopColor: index % 2 === 0 ? 'primary.main' : 'error.main',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: index % 2 === 0
                      ? '0 12px 30px rgba(0, 35, 149, 0.2)'
                      : '0 12px 30px rgba(237, 41, 57, 0.2)',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      color: index % 2 === 0 ? 'primary.main' : 'error.main',
                      mb: 2,
                      fontSize: 48,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {workshop.icon}
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <Chip
                      label={workshop.category}
                      size="small"
                      sx={{
                        backgroundColor: index % 2 === 0 ? 'rgba(0, 35, 149, 0.1)' : 'rgba(237, 41, 57, 0.1)',
                        color: index % 2 === 0 ? 'primary.main' : 'error.main',
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, textAlign: 'center', mb: 2 }}>
                    {workshop.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mb: 2 }}>
                    {workshop.description}
                  </Typography>
                  {/* PROMPT: Event-specific CTA */}
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="outlined"
                    size="small"
                    fullWidth
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      borderColor: index % 2 === 0 ? 'primary.main' : 'error.main',
                      color: index % 2 === 0 ? 'primary.main' : 'error.main',
                      '&:hover': {
                        borderColor: index % 2 === 0 ? 'primary.dark' : 'error.dark',
                        backgroundColor: index % 2 === 0 ? 'rgba(0, 35, 149, 0.04)' : 'rgba(237, 41, 57, 0.04)',
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
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Card
          sx={{
            borderLeft: '4px solid',
            borderLeftColor: 'error.main',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 25px rgba(237, 41, 57, 0.15)',
            },
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: '12px',
                  backgroundColor: 'rgba(237, 41, 57, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'error.main',
                }}
              >
                <SchoolIcon sx={{ fontSize: 40 }} />
              </Box>
              <Box>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                  Training Courses
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Comprehensive professional development programs
                </Typography>
              </Box>
            </Box>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              We offer comprehensive training courses in various areas including:
            </Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {[
                'Multimedia literacy and production',
                'Media and information literacy',
                'Digital skills for educators',
                'Intercultural communication',
                'Project management for non-profits',
              ].map((item, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                    <CheckCircleIcon sx={{ color: 'success.main', mt: 0.5, fontSize: 20 }} />
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                      {item}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 500, mb: 3 }}>
              Our training courses are designed for educators, community workers, and anyone
              interested in developing their skills. Contact us for more information about
              upcoming courses.
            </Typography>
            {/* PROMPT: Training courses CTA */}
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              color="error"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 600,
                borderRadius: '25px',
                boxShadow: '0 4px 12px rgba(237, 41, 57, 0.3)',
              }}
            >
              Contact Us for Training
            </Button>
          </CardContent>
        </Card>
      </TabPanel>

      <TabPanel value={value} index={2}>
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
                  width: 64,
                  height: 64,
                  borderRadius: '12px',
                  backgroundColor: 'rgba(0, 35, 149, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'primary.main',
                }}
              >
                <PaletteIcon sx={{ fontSize: 40 }} />
              </Box>
              <Box>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                  Cultural Activities
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Celebrating diversity and promoting intercultural understanding
                </Typography>
              </Box>
            </Box>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              We organize various cultural activities throughout the year to celebrate diversity
              and promote intercultural understanding:
            </Typography>
            <Grid container spacing={3} sx={{ mb: 3 }}>
              {[
                {
                  title: 'Cultural Exhibitions',
                  description: 'Showcasing artwork and cultural expressions from diverse communities',
                  color: 'primary.main',
                },
                {
                  title: 'Film Screenings',
                  description: 'Educational film screenings followed by discussions',
                  color: 'error.main',
                },
                {
                  title: 'Cultural Festivals',
                  description: 'Community festivals celebrating different cultures and traditions',
                  color: 'success.main',
                },
                {
                  title: 'Art Workshops',
                  description: 'Hands-on art workshops exploring different artistic traditions',
                  color: 'info.main',
                },
              ].map((activity, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={activity.title}>
                  <Card
                    variant="outlined"
                    sx={{
                      height: '100%',
                      borderTop: `4px solid ${activity.color}`,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 6px 20px ${activity.color}25`,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                        {activity.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {activity.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            {/* PROMPT: Cultural activities CTA */}
            <Button
              component={RouterLink}
              to="/contact"
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
              }}
            >
              Join Cultural Activities
            </Button>
          </CardContent>
        </Card>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Card
          sx={{
            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.08) 0%, rgba(237, 41, 57, 0.08) 100%)',
            border: '2px solid',
            borderColor: 'info.main',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 25px rgba(0, 56, 214, 0.15)',
            },
          }}
        >
          <CardContent sx={{ textAlign: 'center', p: 6 }}>
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 56, 214, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 3,
              }}
            >
              <CalendarTodayIcon sx={{ fontSize: 50, color: 'info.main' }} />
            </Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
              Event Calendar
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 2 }}>
              Check our upcoming events and activities. For the most current schedule and to
              register for events, please contact us directly.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
              We regularly update our calendar with new workshops, training sessions, and
              cultural activities. Follow us on social media or subscribe to our newsletter
              to stay informed about upcoming events.
            </Typography>
            {/* PROMPT: Calendar CTA */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                color="info"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: '25px',
                  boxShadow: '0 4px 12px rgba(0, 56, 214, 0.3)',
                }}
              >
                Contact for Schedule
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                variant="outlined"
                color="info"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: '25px',
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                  },
                }}
              >
                Subscribe to Newsletter
              </Button>
            </Stack>
          </CardContent>
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
