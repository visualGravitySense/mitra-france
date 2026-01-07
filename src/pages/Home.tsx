import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { Link as RouterLink } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import PaletteIcon from '@mui/icons-material/Palette';
import ComputerIcon from '@mui/icons-material/Computer';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleIcon from '@mui/icons-material/People';
import PublicIcon from '@mui/icons-material/Public';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const focusAreas = [
  {
    icon: <SchoolIcon sx={{ fontSize: 48 }} />,
    title: 'Intercultural Education',
    description: 'Promoting inclusive education, cultural diversity, and social integration.',
    path: '/focus-areas#intercultural',
  },
  {
    icon: <PaletteIcon sx={{ fontSize: 48 }} />,
    title: 'Media & Arts',
    description: 'Fostering media literacy, arts education, and creative technologies.',
    path: '/focus-areas#media-arts',
  },
  {
    icon: <ComputerIcon sx={{ fontSize: 48 }} />,
    title: 'Digital Literacy',
    description: 'Empowering seniors, youth, migrants, and minorities through digital skills.',
    path: '/focus-areas#digital',
  },
  {
    icon: <VolunteerActivismIcon sx={{ fontSize: 48 }} />,
    title: 'Volunteering',
    description: 'Building community through active participation and engagement.',
    path: '/focus-areas#volunteering',
  },
  {
    icon: <MenuBookIcon sx={{ fontSize: 48 }} />,
    title: 'Adult Education',
    description: 'Lifelong learning opportunities for personal and professional development.',
    path: '/focus-areas#adult-education',
  },
];

export default function Home() {
  return (
    <Box>
      <Box
        id="hero"
        sx={(theme) => ({
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 35, 149, 0.08), transparent)',
          backgroundColor: '#f8f9fa', // Light Gray background
          ...theme.applyStyles('dark', {
            backgroundImage:
              'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 35, 149, 0.2), transparent)',
            backgroundColor: '#1a1a1a',
          }),
        })}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
          }}
        >
          <Stack
            spacing={2}
            useFlexGap
            sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
          >
            <Typography
              variant="h1"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                fontSize: 'clamp(3rem, 10vw, 3.5rem)',
                textAlign: 'center',
              }}
            >
              MITRA&nbsp;
              <Typography
                component="span"
                variant="h1"
                sx={{
                  fontSize: 'inherit',
                  background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                FRANCE
              </Typography>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                color: 'text.secondary',
                fontWeight: 400,
              }}
            >
              Empowering Communities Through Education, Media & Culture
            </Typography>
            <Typography
              sx={{
                textAlign: 'center',
                color: 'text.secondary',
                width: { sm: '100%', md: '80%' },
                mt: 2,
                fontSize: '1.1rem',
                lineHeight: 1.8,
              }}
            >
              We are a non-profit organization based in Nice, France, dedicated to promoting
              intercultural education, media literacy, digital skills, and cultural activities
              for diverse communities including seniors, youth, migrants, and minorities.
            </Typography>

            {/* PROMPT: Clear, immediate action buttons */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              useFlexGap
              sx={{ pt: 3, width: { xs: '100%', sm: 'auto' } }}
            >
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
                  fontSize: '1.1rem',
                  fontWeight: 600,
                }}
              >
                Join Us Today
              </Button>
              <Button
                component={RouterLink}
                to="/about"
                variant="outlined"
                color="primary"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                    backgroundColor: 'rgba(0, 35, 149, 0.04)',
                  },
                }}
              >
                Learn More
              </Button>
            </Stack>

            {/* MOTIVATION: Trust signals and social proof */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={4}
              sx={{
                mt: 6,
                pt: 4,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 700, mb: 0.5 }}>
                  10+
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                  Years of Impact
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 700, mb: 0.5 }}>
                  20+
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                  European Projects
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 700, mb: 0.5 }}>
                  1000+
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                  Lives Impacted
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 700, mb: 0.5 }}>
                  15+
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                  Partner Organizations
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* ABILITY: Clear value proposition section */}
      <Box
        sx={{
          backgroundColor: 'rgba(0, 35, 149, 0.03)',
          py: { xs: 6, sm: 8 },
          mt: { xs: 6, sm: 8 },
        }}
      >
        <Container>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
            }}
          >
            Why Choose MITRA FRANCE?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              mb: 5,
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            We make it easy to get involved and create meaningful change in your community
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                icon: <CheckCircleIcon sx={{ fontSize: 40 }} />,
                title: 'Easy to Join',
                description: 'Simple registration process. No complex requirements.',
              },
              {
                icon: <PeopleIcon sx={{ fontSize: 40 }} />,
                title: 'Inclusive Community',
                description: 'Welcome to all - seniors, youth, migrants, everyone belongs.',
              },
              {
                icon: <PublicIcon sx={{ fontSize: 40 }} />,
                title: 'European Network',
                description: 'Connect with partners across Europe through Erasmus+ projects.',
              },
              {
                icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
                title: 'Proven Impact',
                description: 'Track record of successful programs and positive outcomes.',
              },
            ].map((benefit) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={benefit.title}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                    border: 'none',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 4px 16px rgba(0, 35, 149, 0.15)',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  <Box sx={{ color: 'primary.main', mb: 2, display: 'flex', justifyContent: 'center' }}>
                    {benefit.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {benefit.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Focus Areas with improved ABILITY */}
      <Container sx={{ py: { xs: 8, sm: 10 } }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 2,
          }}
        >
          Our Focus Areas
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mb: 6,
            maxWidth: '700px',
            mx: 'auto',
          }}
        >
          Explore how we make a difference across five key areas of community empowerment
        </Typography>
        <Grid container spacing={4}>
          {focusAreas.map((area, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={area.title}>
              <Card
                component={RouterLink}
                to={area.path}
                sx={{
                  height: '100%',
                  textDecoration: 'none',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  borderRadius: '12px',
                  position: 'relative',
                  overflow: 'visible',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                    '& .action-indicator': {
                      opacity: 1,
                      transform: 'translateX(4px)',
                    },
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {area.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 1.5 }}>
                    {area.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: '3em' }}>
                    {area.description}
                  </Typography>
                  {/* PROMPT: Visual cue for action */}
                  <Box
                    className="action-indicator"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.main',
                      opacity: 0.6,
                      transition: 'all 0.3s ease',
                      mt: 1,
                    }}
                  >
                    <Typography variant="caption" sx={{ fontWeight: 600, mr: 0.5 }}>
                      Learn more
                    </Typography>
                    <ArrowForwardIcon sx={{ fontSize: 16 }} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* MOTIVATION: Social proof and testimonials section */}
      <Box
        sx={{
          backgroundColor: 'rgba(237, 41, 57, 0.03)',
          py: { xs: 6, sm: 8 },
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Chip
                icon={<EmojiEventsIcon />}
                label="Trusted Partner"
                color="primary"
                sx={{ mb: 2, fontWeight: 600 }}
              />
              <Typography variant="h3" gutterBottom sx={{ mb: 2 }}>
                Making Real Impact Across Europe
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                Since 2015, MITRA FRANCE has been at the forefront of promoting intercultural
                understanding and digital inclusion. Our programs have reached thousands of
                participants through successful European partnerships and innovative educational
                initiatives.
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap">
                <Chip
                  label="Erasmus+ Certified"
                  sx={{ fontWeight: 600, backgroundColor: '#002395', color: 'white' }}
                />
                <Chip
                  label="Youth4Media Network"
                  sx={{ fontWeight: 600, backgroundColor: '#ED2939', color: 'white' }}
                />
                <Chip
                  label="EU Recognized"
                  sx={{ fontWeight: 600 }}
                />
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Grid container spacing={3}>
                {[
                  { icon: <SchoolIcon />, text: 'Educational Excellence', count: '50+ Programs' },
                  { icon: <PeopleIcon />, text: 'Community Reach', count: '1000+ Participants' },
                  { icon: <PublicIcon />, text: 'European Network', count: '15+ Countries' },
                  { icon: <EmojiEventsIcon />, text: 'Awards & Recognition', count: 'Multiple Projects' },
                ].map((item, index) => (
                  <Grid size={{ xs: 6 }} key={index}>
                    <Card
                      sx={{
                        p: 2.5,
                        textAlign: 'center',
                        height: '100%',
                        border: '1px solid',
                        borderColor: 'divider',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: 'primary.main',
                          boxShadow: '0 4px 12px rgba(0, 35, 149, 0.15)',
                        },
                      }}
                    >
                      <Box sx={{ color: 'primary.main', mb: 1 }}>{item.icon}</Box>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem', mb: 0.5 }}>
                        {item.text}
                      </Typography>
                      <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700 }}>
                        {item.count}
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* PROMPT: Final strong call-to-action */}
      <Container sx={{ py: { xs: 8, sm: 10 }, textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
          Ready to Make a Difference?
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: '600px', mx: 'auto', fontSize: '1.1rem' }}
        >
          Join our community today and be part of positive change. It only takes a moment to get started.
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ justifyContent: 'center', alignItems: 'center' }}
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
              fontWeight: 600,
            }}
          >
            Get Started Now
          </Button>
          <Button
            component={RouterLink}
            to="/events"
            variant="outlined"
            color="error"
            size="large"
            sx={{
              px: 5,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderWidth: 2,
              borderColor: '#ED2939',
              color: '#ED2939',
              '&:hover': {
                borderWidth: 2,
                borderColor: '#c91f2f',
                backgroundColor: 'rgba(237, 41, 57, 0.04)',
              },
            }}
          >
            View Upcoming Events
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
