import { useState, type ReactNode } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link as RouterLink } from 'react-router-dom';
import ParticleCTAButton from '../components/ParticleCTAButton';
import { getImagePath } from '../utils/imagePath';
import { getMitraLogoSrc, mitraLogoThemeFilter } from '../utils/mitraLogo';
import SchoolIcon from '@mui/icons-material/School';
import PaletteIcon from '@mui/icons-material/Palette';
import ComputerIcon from '@mui/icons-material/Computer';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GroupIcon from '@mui/icons-material/Group';
import PublicIcon from '@mui/icons-material/Public';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HandshakeIcon from '@mui/icons-material/Handshake';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const focusAreas = [
  {
    icon: <SchoolIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Intercultural Education',
    description: 'Inclusive education, cultural diversity, and social integration.',
    path: '/intercultural-education',
  },
  {
    icon: <PaletteIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Media & Arts',
    description: 'Media literacy, arts education, and creative technologies.',
    path: '/media-arts-education',
  },
  {
    icon: <ComputerIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Digital Literacy',
    description: 'Digital skills for seniors, youth, migrants, and minorities.',
    path: '/focus-areas#digital',
  },
  {
    icon: <VolunteerActivismIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Volunteering',
    description: 'Community participation and active citizenship.',
    path: '/focus-areas#volunteering',
  },
  {
    icon: <MenuBookIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Adult Education',
    description: 'Lifelong learning for personal and professional growth.',
    path: '/programs-workshops',
  },
];

const impactStats = [
  { value: '20+', label: 'European projects', icon: <EmojiEventsIcon fontSize="small" /> },
  { value: '10+', label: 'Years of action', icon: <PublicIcon fontSize="small" /> },
  { value: '1000+', label: 'People reached', icon: <GroupIcon fontSize="small" /> },
];

type ActivityKind = 'project' | 'event';

interface HomeActivityItem {
  kind: ActivityKind;
  title: string;
  description: string;
  meta: string;
  link: string;
}

const featuredActivities: HomeActivityItem[] = [
  {
    kind: 'project',
    title: 'Media literacy in adult education',
    description: 'Innovative teaching methods for adult learners across Europe.',
    meta: 'Erasmus+ KA2 · 2016–2018',
    link: '/programs-workshops',
  },
  {
    kind: 'project',
    title: 'Digital Senior Citizen',
    description: 'Essential digital skills for everyday life for older adults.',
    meta: 'Erasmus+ KA2 · 2018–2020',
    link: '/programs-workshops',
  },
  {
    kind: 'project',
    title: 'Cultural Heritage for Youth',
    description: 'Heritage engagement through media, arts, and community.',
    meta: 'Erasmus+ KA2 · 2020–2022',
    link: '/programs-workshops',
  },
  {
    kind: 'event',
    title: 'Digital Skills for Seniors',
    description: 'Workshop: smartphones, safe browsing, and useful apps.',
    meta: 'Nice · Feb 15, 2024',
    link: '/events',
  },
  {
    kind: 'event',
    title: 'Media Literacy Workshop',
    description: 'Critical thinking and reliable sources in the media landscape.',
    meta: 'Nice · Feb 20, 2024',
    link: '/events',
  },
  {
    kind: 'event',
    title: 'Creative Writing for Youth',
    description: 'Storytelling and creative expression for young people.',
    meta: 'Nice · Jan 28, 2024',
    link: '/events',
  },
];

const partnerNames = [
  'Université Côte d’Azur',
  'Le 109 · Pôle de cultures contemporaines',
  'Le HUBLOT · SCREB · Lycée Pasteur',
  'La Médiathèque Louis Nucéra',
  'Espace Associations Nice',
];

function ActivityTabPanel({
  value,
  index,
  children,
}: {
  value: number;
  index: number;
  children: ReactNode;
}) {
  if (value !== index) return null;
  return <Box sx={{ pt: 3 }}>{children}</Box>;
}

export default function Home() {
  const theme = useTheme();
  const [activityTab, setActivityTab] = useState(0);

  const filterActivities = (tab: number) => {
    if (tab === 0) return featuredActivities;
    if (tab === 1) return featuredActivities.filter((a) => a.kind === 'project');
    return featuredActivities.filter((a) => a.kind === 'event');
  };

  return (
    <Box component="main">
      {/* Hero */}
      <Box
        id="hero"
        sx={(theme) => ({
          width: '100%',
          position: 'relative',
          backgroundImage: [
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 35, 149, 0.12), transparent)',
            'radial-gradient(ellipse 60% 40% at 80% 20%, rgba(237, 41, 57, 0.08), transparent)',
            'linear-gradient(180deg, rgba(248, 249, 250, 0) 0%, rgba(248, 249, 250, 1) 100%)',
          ].join(', '),
          backgroundColor: '#f8f9fa',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.03) 0%, rgba(237, 41, 57, 0.03) 100%)',
            pointerEvents: 'none',
          },
          ...theme.applyStyles('dark', {
            backgroundColor: '#1a1a1a',
            backgroundImage: [
              'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 35, 149, 0.25), transparent)',
              'radial-gradient(ellipse 60% 40% at 80% 20%, rgba(237, 41, 57, 0.15), transparent)',
            ].join(', '),
          }),
        })}
      >
        <Container sx={{ pt: { xs: 14, sm: 18 }, pb: { xs: 6, sm: 10 } }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2} useFlexGap sx={{ alignItems: { xs: 'center', md: 'flex-start' } }}>
                <Box
                  component="img"
                  src={getMitraLogoSrc()}
                  alt="MITRA FRANCE"
                  sx={{
                    display: 'block',
                    flexShrink: 0,
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '100%',
                    maxHeight: { xs: 48, sm: 56, md: 64 },
                    objectFit: 'contain',
                    objectPosition: { xs: 'center', md: 'left' },
                    alignSelf: { xs: 'center', md: 'flex-start' },
                    ...mitraLogoThemeFilter(theme),
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: { xs: 'center', md: 'left' },
                    color: 'text.secondary',
                    fontWeight: 400,
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                  }}
                >
                  Empowering communities through education, media & culture
                </Typography>
                <Typography
                  sx={{
                    textAlign: { xs: 'center', md: 'left' },
                    color: 'text.secondary',
                    maxWidth: 560,
                    lineHeight: 1.75,
                  }}
                >
                  Non-profit in Nice — intercultural education, media literacy, digital inclusion, and cultural
                  activities with seniors, youth, migrants, and minorities across Europe.
                </Typography>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  sx={{ pt: 1, width: '100%', justifyContent: { xs: 'center', md: 'flex-start' } }}
                >
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ px: 4, py: 1.25, fontWeight: 700, borderRadius: 2 }}
                  >
                    Get involved
                  </Button>
                  <Button component={RouterLink} to="/about" variant="outlined" size="large" sx={{ px: 4, py: 1.25, borderRadius: 2 }}>
                    About us
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <Grid container spacing={2} sx={{ maxWidth: 520, position: 'relative', zIndex: 1 }}>
                  {['/illustrations/mitra-image-5.png', '/illustrations/mitra-image-10.jpg', '/illustrations/mitra-image-6.png', '/illustrations/mitra-image-9.jpg'].map(
                    (src, index) => (
                      <Grid key={src} size={{ xs: 6 }}>
                        <Box
                          component="img"
                          src={getImagePath(src)}
                          alt=""
                          loading="lazy"
                          sx={{
                            width: '100%',
                            height: { xs: 130, sm: 150, md: 170 },
                            objectFit: 'cover',
                            borderRadius: 2,
                            boxShadow: '0 8px 24px rgba(0, 35, 149, 0.2)',
                            transform: index % 2 === 0 ? 'translateY(6px)' : 'translateY(-6px)',
                          }}
                        />
                      </Grid>
                    ),
                  )}
                </Grid>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: { xs: -8, md: 8 },
                    right: { xs: 4, md: 16 },
                    px: 2,
                    py: 1.5,
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    boxShadow: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.25,
                    zIndex: 2,
                  }}
                >
                  <GroupIcon color="primary" />
                  <Box>
                    <Typography variant="subtitle2" fontWeight={700}>
                      Erasmus+ & local partners
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Projects, workshops, mobilities
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Intercultural education & inclusion */}
      <Container sx={{ py: { xs: 6, md: 8 } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
          Intercultural Education & Inclusion
        </Typography>
        <Box
          sx={{
            maxWidth: 800,
            borderTop: '3px solid',
            borderColor: 'error.main',
            pt: 2,
          }}
        >
          <Stack spacing={2}>
            <Typography color="text.secondary" sx={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
              MITRA FRANCE fosters intercultural understanding and responsiveness to social, ethnic, linguistic, and
              cultural diversity through non-formal educational approaches.
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
              Its mission is to create awareness among individuals about their societal roles and to instill skills
              enabling positive and constructive action.
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
              The organisation aims to develop innovative educational methods that address diversity and promote
              inclusive education.
            </Typography>
          </Stack>
        </Box>
      </Container>

      {/* Focus areas + single stats row */}
      <Box sx={{ bgcolor: 'action.hover', py: { xs: 6, md: 8 } }}>
        <Container>
          <Grid container spacing={3} alignItems="stretch">
            <Grid size={{ xs: 12, lg: 7 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2rem' }, fontWeight: 700, mb: 3 }}>
                Focus areas
              </Typography>
              <Grid container spacing={2}>
                {focusAreas.map((area) => (
                  <Grid key={area.title} size={{ xs: 12, sm: 6 }}>
                    <Card
                      component={RouterLink}
                      to={area.path}
                      variant="outlined"
                      sx={{
                        height: '100%',
                        borderRadius: 2,
                        textDecoration: 'none',
                        color: 'inherit',
                        display: 'block',
                        transition: 'box-shadow 0.2s, border-color 0.2s',
                        '&:hover': { boxShadow: 2, borderColor: 'primary.main' },
                      }}
                    >
                      <CardContent sx={{ p: 2.5 }}>
                        <Stack direction="row" spacing={2} alignItems="flex-start">
                          <Box sx={{ flexShrink: 0 }}>{area.icon}</Box>
                          <Box>
                            <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                              {area.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {area.description}
                            </Typography>
                            <Typography variant="caption" color="primary.main" fontWeight={600} sx={{ mt: 1, display: 'inline-block' }}>
                              Learn more →
                            </Typography>
                          </Box>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, lg: 5 }}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 2,
                  background: (theme) =>
                    theme.palette.mode === 'dark'
                      ? 'linear-gradient(145deg, rgba(0,35,149,0.2), rgba(237,41,57,0.12))'
                      : 'linear-gradient(145deg, rgba(0,35,149,0.06), rgba(237,41,57,0.06))',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    At a glance
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Numbers reflect our long-term commitment to European cooperation and local impact.
                  </Typography>
                  <Stack spacing={2.5}>
                    {impactStats.map((s) => (
                      <Stack key={s.label} direction="row" spacing={2} alignItems="center">
                        <Box
                          sx={{
                            width: 44,
                            height: 44,
                            borderRadius: 1.5,
                            bgcolor: 'background.paper',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'primary.main',
                            boxShadow: 1,
                          }}
                        >
                          {s.icon}
                        </Box>
                        <Box>
                          <Typography variant="h5" fontWeight={800}>
                            {s.value}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {s.label}
                          </Typography>
                        </Box>
                      </Stack>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our activities — tabs */}
      <Container sx={{ py: { xs: 6, md:8 } }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ xs: 'flex-start', sm: 'center' }} justifyContent="space-between" sx={{ mb: 1 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2rem' }, fontWeight: 700 }}>
            Our activities
          </Typography>
          <Button component={RouterLink} to="/programs-workshops" size="small" endIcon={<ArrowForwardIcon />}>
            Programs & workshops
          </Button>
        </Stack>
        <Typography color="text.secondary" sx={{ mb: 2, maxWidth: 640 }}>
          Highlighted Erasmus+ work and upcoming or recent events. Switch tabs to filter.
        </Typography>
        <Tabs
          value={activityTab}
          onChange={(_, v) => setActivityTab(v)}
          sx={{ borderBottom: 1, borderColor: 'divider' }}
          variant="scrollable"
          allowScrollButtonsMobile
        >
          <Tab label="All" id="activities-tab-0" />
          <Tab label="Projects" id="activities-tab-1" />
          <Tab label="Events" id="activities-tab-2" />
        </Tabs>
        {[0, 1, 2].map((tabIndex) => (
          <ActivityTabPanel key={tabIndex} value={activityTab} index={tabIndex}>
            <Grid container spacing={2}>
              {filterActivities(tabIndex).map((item) => (
                <Grid key={`${item.kind}-${item.title}`} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Card variant="outlined" sx={{ height: '100%', borderRadius: 2 }}>
                    <CardContent sx={{ p: 2.5, height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <Chip
                        size="small"
                        label={item.kind === 'project' ? 'Project' : 'Event'}
                        color={item.kind === 'project' ? 'primary' : 'secondary'}
                        sx={{ alignSelf: 'flex-start', mb: 1.5 }}
                      />
                      <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, mb: 2 }}>
                        {item.description}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 2 }}>
                        {item.meta}
                      </Typography>
                      <Button component={RouterLink} to={item.link} size="small" endIcon={<ArrowForwardIcon />}>
                        {item.kind === 'project' ? 'See programmes' : 'See events'}
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </ActivityTabPanel>
        ))}
      </Container>

      {/* Social proof: quote + partners */}
      <Box sx={{ bgcolor: 'action.hover', py: { xs: 6, md: 8 } }}>
        <Container>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Card variant="outlined" sx={{ borderRadius: 2, height: '100%', p: 1 }}>
                <CardContent>
                  <FormatQuoteIcon color="primary" sx={{ fontSize: 36, mb: 1, opacity: 0.8 }} />
                  <Typography sx={{ fontStyle: 'italic', lineHeight: 1.7, mb: 2 }}>
                    Working with MITRA means practical learning that respects different backgrounds — exactly what our
                    participants need.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    — Partner educator, Nice region
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                <HandshakeIcon color="primary" />
                <Typography variant="h6" fontWeight={700}>
                  Partners & friends
                </Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                We collaborate with universities, cultural venues, libraries, and associations. Explore the full network
                on the partners page.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {partnerNames.map((name) => (
                  <Chip key={name} label={name} variant="outlined" size="small" sx={{ borderRadius: 1 }} />
                ))}
              </Box>
              <Button component={RouterLink} to="/partners" sx={{ mt: 2 }} endIcon={<ArrowForwardIcon />}>
                All partners
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Single final CTA */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.08) 0%, rgba(237, 41, 57, 0.06) 100%)',
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 800 }}>
              Ready to learn, create, or partner with us?
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 520 }}>
              Tell us whether you want to join an activity, volunteer, or explore Erasmus+ cooperation — we will point you
              to the right contact.
            </Typography>
            <ParticleCTAButton
              to="/contact"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              particleCount={120}
              colors={['#002395', '#0038d6', '#6B8DE3', '#ED2939', '#FFFFFF']}
              sx={{
                px: 5,
                py: 1.5,
                fontWeight: 700,
                borderRadius: 2,
                background: 'linear-gradient(135deg, #002395 0%, #0038d6 100%)',
              }}
            >
              Contact MITRA France
            </ParticleCTAButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
