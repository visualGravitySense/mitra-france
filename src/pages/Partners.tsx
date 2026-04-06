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

const collaborations: CollaborationCard[] = [
  {
    id: '1',
    title: 'Media literacy in adult education',
    summary: 'European cooperation on media literacy with adult educators and NGOs.',
    category: 'europe',
    meta: 'Erasmus+ KA2 · 2016–2018',
    image: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
    link: '/projects',
  },
  {
    id: '2',
    title: 'Digital Senior Citizen',
    summary: 'Digital skills for older adults — workshops and peer learning.',
    category: 'education',
    meta: 'Erasmus+ KA2 · 2018–2020',
    image: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
    link: '/projects',
  },
  {
    id: '3',
    title: 'Cultural Heritage for Youth',
    summary: 'Heritage, media and youth participation across partner countries.',
    category: 'culture',
    meta: 'Erasmus+ KA2 · 2020–2022',
    image: '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
    link: '/projects',
  },
  {
    id: '4',
    title: 'Le 109: Pôle de cultures',
    summary: 'Digital literacy workshops and cultural programming in Nice.',
    category: 'local',
    meta: 'Nice, France',
    image: '/photos/583741041_1157902773184394_5619801435922057517_n.jpg',
    link: '/contact',
  },
  {
    id: '5',
    title: "Université Côte d'Azur",
    summary: 'Academic partnership for research and student mobilities.',
    category: 'education',
    meta: 'University · PACA',
    image: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
    link: '/contact',
  },
  {
    id: '6',
    title: 'Villa Ephrussi de Rothschild',
    summary: 'Heritage education visits and cultural learning paths.',
    category: 'culture',
    meta: 'Saint-Jean-Cap-Ferrat',
    image: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
    link: '/contact',
  },
];

const categoryFilterLabels: { value: CollabCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'europe', label: 'EU & Erasmus' },
  { value: 'local', label: 'Local Nice' },
  { value: 'education', label: 'Education' },
  { value: 'culture', label: 'Culture' },
];

const networkNodes = [
  { name: 'Nice · HQ', role: 'MITRA France' },
  { name: 'Erasmus+', role: 'Mobility & KA projects' },
  { name: 'Youth4Media', role: 'Media network' },
  { name: 'ALDA', role: 'Local democracy' },
  { name: 'Anna Lindh', role: 'Euro-Med dialogue' },
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
      {/* Hero — один баннер */}
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
            <Typography color="text.secondary" sx={{ maxWidth: 600, lineHeight: 1.75 }}>
              We work with cultural venues, schools and universities, and European networks — so programmes stay
              grounded in Nice and open to Europe.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
              <Button component={RouterLink} to="/contact" variant="contained" size="large" endIcon={<ArrowForwardIcon />}>
                Propose a partnership
              </Button>
              <Button component={RouterLink} to="/projects" variant="outlined" size="large">
                Full project list
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Фильтр + сетка */}
      <Container sx={{ py: { xs: 5, md: 7 } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.65rem' }, fontWeight: 700, mb: 1 }}>
          Highlights
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 560 }}>
          Filter by type — each card links to more detail on projects or contact.
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
                    {item.link === '/projects' ? 'Projects' : 'Contact'}
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

      {/* Международная сеть — без второй галереи */}
      <Box sx={{ bgcolor: 'action.hover', py: { xs: 6, md: 8 } }}>
        <Container>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
            <PublicIcon color="primary" />
            <Typography variant="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.65rem' }, fontWeight: 700 }}>
              International network
            </Typography>
          </Stack>
          <Typography color="text.secondary" sx={{ mb: 4, maxWidth: 640, lineHeight: 1.75 }}>
            MITRA France sits in Nice and plugs into EU programmes and civil-society networks — so partnerships are not
            one-off events but lasting cooperation.
          </Typography>

          <Card variant="outlined" sx={{ borderRadius: 2, overflow: 'hidden' }}>
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Stack spacing={1} alignItems="center" textAlign="center" sx={{ p: 2 }}>
                    <LocationOnIcon color="primary" sx={{ fontSize: 36 }} />
                    <Typography fontWeight={800}>Nice</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Coordination & local anchor
                    </Typography>
                  </Stack>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1.5 }}>
                    Member / partner frames (examples)
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {networkNodes.slice(1).map((n) => (
                      <Chip
                        key={n.name}
                        label={`${n.name} — ${n.role}`}
                        variant="outlined"
                        size="small"
                        sx={{ borderRadius: 1 }}
                      />
                    ))}
                  </Box>
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                    Exact memberships evolve with active projects; ask us for the current list when you get in touch.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Короткий CTA — без формы */}
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="sm">
          <Stack spacing={2} alignItems="center" textAlign="center">
            <SchoolIcon sx={{ fontSize: 36, color: 'primary.main' }} />
            <Typography variant="h5" fontWeight={800}>
              Want to run a project with us?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              One message is enough — we’ll suggest the right programme officer or partnership route.
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
