import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { Link as RouterLink } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import PaletteIcon from '@mui/icons-material/Palette';
import ComputerIcon from '@mui/icons-material/Computer';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MenuBookIcon from '@mui/icons-material/MenuBook';

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
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
          ...theme.applyStyles('dark', {
            backgroundImage:
              'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
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
                sx={(theme) => ({
                  fontSize: 'inherit',
                  color: 'primary.main',
                  ...theme.applyStyles('dark', {
                    color: 'primary.light',
                  }),
                })}
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
              }}
            >
              We are a non-profit organization based in Nice, France, dedicated to promoting
              intercultural education, media literacy, digital skills, and cultural activities
              for diverse communities including seniors, youth, migrants, and minorities.
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              useFlexGap
              sx={{ pt: 2 }}
            >
              <Button
                component={RouterLink}
                to="/about"
                variant="contained"
                color="primary"
                size="large"
              >
                Learn More
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                variant="outlined"
                color="primary"
                size="large"
              >
                Get Involved
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container sx={{ py: { xs: 8, sm: 10 } }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
          }}
        >
          Our Focus Areas
        </Typography>
        <Grid container spacing={4}>
          {focusAreas.map((area) => (
            <Grid item xs={12} sm={6} md={4} key={area.title}>
              <Card
                component={RouterLink}
                to={area.path}
                sx={{
                  height: '100%',
                  textDecoration: 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>{area.icon}</Box>
                  <Typography variant="h6" gutterBottom>
                    {area.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {area.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
