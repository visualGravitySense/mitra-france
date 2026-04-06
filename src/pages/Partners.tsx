import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PublicIcon from '@mui/icons-material/Public';
import { Link as RouterLink } from 'react-router-dom';
import { getImagePath } from '../utils/imagePath';

type CollabCategory = 'all' | 'europe' | 'local' | 'education' | 'culture';

interface CollaborationCard {
  id: string;
  title: string;
  summary: string;
  category: Exclude<CollabCategory, 'all'>;
  meta: string;
  image: string;
  link: string;
}

const ORG_PIC = '921950857';
const ORG_OID = 'E10155908';

const erasmusPartnerCountries = [
  'Poland',
  'Lithuania',
  'Latvia',
  'Estonia',
  'Bulgaria',
  'Romania',
  'Turkey',
  'Italy',
  'Spain',
];

const collaborations: CollaborationCard[] = [
  {
    id: 'obj-1',
    title: 'Intercultural Education & Inclusion',
    summary:
      'Non-formal education that fosters intercultural understanding and social inclusion — addressing cultural, ethnic, linguistic, and social diversity in learning settings.',
    category: 'education',
    meta: 'Core objective',
    image: '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
    link: '/programs-workshops',
  },
  {
    id: 'obj-2',
    title: 'Media and Arts Education',
    summary:
      'Media literacy, arts education, and creative use of digital tools — including responsible IT practice and AI awareness in non-formal learning.',
    category: 'culture',
    meta: 'Core objective',
    image: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
    link: '/programs-workshops',
  },
  {
    id: 'obj-3',
    title: 'Digital Inclusion for Marginalised Groups',
    summary:
      'Digital inclusion with a focus on youth, people aged 60 and over, and unemployed adults — practical skills and confidence for everyday and civic life.',
    category: 'education',
    meta: 'Core objective',
    image: '/photos/583489432_1157911303183541_1292926580526900497_n.jpg',
    link: '/contact',
  },
  {
    id: 'loc-uca',
    title: 'Université Côte d’Azur',
    summary:
      'Research, teaching, and non-formal education initiatives that connect university communities with civil-society projects in the PACA region.',
    category: 'local',
    meta: 'Nice, France · Local partner',
    image: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
    link: '/contact',
  },
  {
    id: 'loc-109',
    title: 'Le 109 (Pôle de cultures contemporaines)',
    summary:
      'Contemporary culture and creative programmes that support youth, artists, and audiences through workshops and cultural mediation.',
    category: 'local',
    meta: 'Nice, France · Local partner',
    image: '/photos/583741041_1157902773184394_5619801435922057517_n.jpg',
    link: '/contact',
  },
  {
    id: 'loc-schools',
    title: 'Le HUBLOT · SCREB · Lycée Pasteur',
    summary:
      'Schools and cultural venues in the network: cooperation on media education, heritage, and inclusive activities for learners and educators.',
    category: 'local',
    meta: 'Nice area · Local partners',
    image: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
    link: '/contact',
  },
  {
    id: 'loc-mediatheque',
    title: 'La Médiathèque Louis Nucéra',
    summary:
      'Public learning space for digital and media literacy, reading, and community-led cultural events open to diverse publics.',
    category: 'local',
    meta: 'Nice, France · Local partner',
    image: '/photos/572890197_1142845724690099_2859850866106109617_n.jpg',
    link: '/contact',
  },
  {
    id: 'loc-espace',
    title: 'Espace Associations Nice',
    summary:
      'Hub for associations: coordination, visibility, and joint actions that strengthen social inclusion and citizen participation.',
    category: 'local',
    meta: 'Nice, France · Local partner',
    image: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
    link: '/contact',
  },
  {
    id: 'eu-erasmus',
    title: 'Erasmus+ international cooperation',
    summary: `Structured Erasmus+ partnerships connecting MITRA France with organisations across ${erasmusPartnerCountries.join(
      ', ',
    )}.`,
    category: 'europe',
    meta: 'Erasmus+ · European partnerships',
    image: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
    link: '/programs-workshops',
  },
];

const categoryFilterLabels: { value: CollabCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'europe', label: 'EU & Erasmus+' },
  { value: 'local', label: 'Local Nice' },
  { value: 'education', label: 'Education & inclusion' },
  { value: 'culture', label: 'Media & culture' },
];

const INITIAL_VISIBLE = 3;
const LOAD_STEP = 3;

export default function Partners() {
  const [category, setCategory] = useState<CollabCategory>('all');
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filtered = useMemo(
    () => (category === 'all' ? collaborations : collaborations.filter((c) => c.category === category)),
    [category],
  );

  const visible = filtered.slice(0, visibleCount);
  const canLoadMore = visibleCount < filtered.length;

  const handleCategory = (_: React.MouseEvent<HTMLElement>, value: CollabCategory | null) => {
    if (value == null) return;
    setCategory(value);
    setVisibleCount(INITIAL_VISIBLE);
  };

  return (
    <Box component="main">
      <Box
        sx={{
          pt: { xs: 12, sm: 14, md: 16 },
          pb: { xs: 6, md: 8 },
          background: 'linear-gradient(180deg, rgba(0, 35, 149, 0.07) 0%, transparent 100%)',
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={2} alignItems="center" textAlign="center">
            <HandshakeIcon sx={{ fontSize: 40, color: 'primary.main', opacity: 0.9 }} />
            <Typography variant="h1" sx={{ fontSize: { xs: '1.85rem', md: '2.35rem' }, fontWeight: 800 }}>
              Our partners & collaborations
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 640, lineHeight: 1.75 }}>
              MITRA France was founded in <strong>2015</strong> in <strong>Nice</strong>. We are dedicated to{' '}
              <strong>inclusive education</strong>, <strong>media and digital literacy</strong>, and{' '}
              <strong>intercultural understanding</strong> through <strong>non-formal education</strong> and{' '}
              <strong>social inclusion</strong>. We anchor programmes locally and open them to European cooperation.
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center" useFlexGap sx={{ pt: 0.5 }}>
              <Chip label={`PIC ${ORG_PIC}`} size="small" variant="outlined" sx={{ fontWeight: 600 }} />
              <Chip label={`OID ${ORG_OID}`} size="small" variant="outlined" sx={{ fontWeight: 600 }} />
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
              <Button component={RouterLink} to="/contact" variant="contained" size="large" endIcon={<ArrowForwardIcon />}>
                Propose a partnership
              </Button>
              <Button component={RouterLink} to="/programs-workshops" variant="outlined" size="large">
                Programs & workshops
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container sx={{ py: { xs: 5, md: 7 } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.65rem' }, fontWeight: 700, mb: 1 }}>
          Highlights
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 640 }}>
          Three strategic pillars, trusted local institutions in Nice, and Erasmus+ cooperation — filter by focus, then
          follow a link to programmes or contact.
        </Typography>

        <Box sx={{ mb: 3, overflowX: 'auto', pb: 0.5 }}>
          <ToggleButtonGroup
            value={category}
            exclusive
            onChange={handleCategory}
            size="small"
            sx={{
              flexWrap: 'wrap',
              gap: 0.5,
              '& .MuiToggleButton-root': { textTransform: 'none', borderRadius: '8px !important', px: 1.5 },
            }}
          >
            {categoryFilterLabels.map((opt) => (
              <ToggleButton key={opt.value} value={opt.value}>
                {opt.label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>

        <Grid container spacing={2}>
          {visible.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                variant="outlined"
                sx={{
                  height: '100%',
                  borderRadius: 2,
                  transition: 'box-shadow 0.2s, border-color 0.2s',
                  '&:hover': { boxShadow: 2, borderColor: 'primary.main' },
                }}
              >
                <Box
                  component="img"
                  src={getImagePath(item.image)}
                  alt=""
                  sx={{ width: '100%', height: 160, objectFit: 'cover' }}
                />
                <CardContent sx={{ p: 2 }}>
                  <Chip
                    size="small"
                    label={categoryFilterLabels.find((c) => c.value === item.category)?.label ?? item.category}
                    sx={{ mb: 1 }}
                    variant="outlined"
                  />
                  <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, lineHeight: 1.6 }}>
                    {item.summary}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1.5 }}>
                    {item.meta}
                  </Typography>
                  <Button component={RouterLink} to={item.link} size="small" endIcon={<ArrowForwardIcon />}>
                    {item.link === '/programs-workshops' ? 'Programmes' : 'Contact'}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filtered.length === 0 && (
          <Typography color="text.secondary" sx={{ py: 4, textAlign: 'center' }}>
            Nothing in this category — try “All”.
          </Typography>
        )}

        {canLoadMore && (
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Button variant="outlined" onClick={() => setVisibleCount((n) => Math.min(n + LOAD_STEP, filtered.length))}>
              Load more
            </Button>
          </Box>
        )}
      </Container>

      <Box sx={{ bgcolor: 'action.hover', py: { xs: 6, md: 8 } }}>
        <Container>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
            <PublicIcon color="primary" />
            <Typography variant="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.65rem' }, fontWeight: 700 }}>
              International scope — Erasmus+
            </Typography>
          </Stack>
          <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 720, lineHeight: 1.75 }}>
            Within <strong>Erasmus+</strong>, we work with partners in higher education, youth, adult learning, and
            non-formal settings. Our cooperation spans{' '}
            <strong>
              Poland, Lithuania, Latvia, Estonia, Bulgaria, Romania, Turkey, Italy, and Spain
            </strong>
            — alongside our French Riviera home base in Nice.
          </Typography>

          <Card variant="outlined" sx={{ borderRadius: 2, overflow: 'hidden' }}>
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Stack spacing={1} alignItems="center" textAlign="center" sx={{ p: 2 }}>
                    <LocationOnIcon color="primary" sx={{ fontSize: 36 }} />
                    <Typography fontWeight={800}>Nice, France</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Headquarters and local ecosystem — universities, libraries, schools, and associations.
                    </Typography>
                  </Stack>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1.5 }}>
                    Erasmus+ partner countries (examples in active projects)
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {erasmusPartnerCountries.map((country) => (
                      <Chip key={country} label={country} variant="outlined" size="small" sx={{ borderRadius: 1 }} />
                    ))}
                  </Box>
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                    Consortium composition changes with each call; write to us for the list tied to a specific proposal or
                    mobility.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="sm">
          <Stack spacing={2} alignItems="center" textAlign="center">
            <SchoolIcon sx={{ fontSize: 36, color: 'primary.main' }} />
            <Typography variant="h5" fontWeight={800}>
              Want to run a project with us?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              One message is enough — we will suggest the right programme officer or partnership route under Erasmus+ or
              local cooperation.
            </Typography>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ mt: 1, px: 4, fontWeight: 700, borderRadius: 2 }}
            >
              Go to contact
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
