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
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InputAdornment from '@mui/material/InputAdornment';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Link as RouterLink } from 'react-router-dom';
import { getImagePath } from '../utils/imagePath';

type EventKind = 'all' | 'workshop' | 'training' | 'conference';

interface EventItem {
  id: string;
  title: string;
  kind: Exclude<EventKind, 'all'>;
  categoryLabel: string;
  description: string;
  photo: string;
  date: string;
  time: string;
  location: string;
  status: 'upcoming' | 'past';
}

const eventList: EventItem[] = [
  {
    id: '1',
    title: 'Digital Skills for Seniors',
    kind: 'workshop',
    categoryLabel: 'Seniors',
    description: 'Smartphones, safe browsing, and useful apps — step by step.',
    photo: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
    date: '15 February 2024',
    time: '10:00–12:00',
    location: 'Le 109, Nice',
    status: 'upcoming',
  },
  {
    id: '2',
    title: 'Media Literacy Workshop',
    kind: 'workshop',
    categoryLabel: 'Media',
    description: 'Sources, bias, and what to check before you share.',
    photo: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
    date: '20 February 2024',
    time: '14:00–16:00',
    location: 'Villa Ephrussi, Nice area',
    status: 'upcoming',
  },
  {
    id: '3',
    title: 'Creative Writing for Youth',
    kind: 'training',
    categoryLabel: 'Youth',
    description: 'Short fiction and storytelling in a supportive group.',
    photo: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
    date: '28 January 2024',
    time: '15:00–17:00',
    location: 'Le HUBLOT, Nice',
    status: 'past',
  },
  {
    id: '4',
    title: 'Digital Photography Basics',
    kind: 'training',
    categoryLabel: 'Digital',
    description: 'Composition, light, and simple editing for beginners.',
    photo: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
    date: '20 January 2024',
    time: '10:00–13:00',
    location: 'Le 109, Nice',
    status: 'past',
  },
  {
    id: '5',
    title: 'Civic dialogue & Erasmus+ info morning',
    kind: 'conference',
    categoryLabel: 'Conference',
    description: 'Short talks, Q&A, and networking for schools and NGOs.',
    photo: '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
    date: '8 March 2024',
    time: '09:30–12:30',
    location: 'Nice (venue TBC)',
    status: 'upcoming',
  },
];

const kindFilters: { value: EventKind; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'workshop', label: 'Workshops' },
  { value: 'training', label: 'Training' },
  { value: 'conference', label: 'Conferences' },
];

const heroBg = '/photos/584326681_1157904053184266_2071216266526493174_n.jpg';

export default function Events() {
  const [kind, setKind] = useState<EventKind>('all');
  const [query, setQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const filtered = useMemo(() => {
    let list = eventList;
    if (kind !== 'all') list = list.filter((e) => e.kind === kind);
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q) ||
          e.location.toLowerCase().includes(q) ||
          e.categoryLabel.toLowerCase().includes(q),
      );
    }
    return list;
  }, [kind, query]);

  const upcomingDates = useMemo(
    () =>
      eventList
        .filter((e) => e.status === 'upcoming')
        .map((e) => ({ id: e.id, date: e.date, title: e.title })),
    [],
  );

  const handleKind = (_: React.MouseEvent<HTMLElement>, value: EventKind | null) => {
    if (value != null) setKind(value);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <Box component="main">
      <Box
        sx={{
          position: 'relative',
          pt: { xs: 12, md: 14 },
          pb: { xs: 6, md: 8 },
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${getImagePath(heroBg)})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&::after': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(0,26,60,0.85) 0%, rgba(0,26,60,0.55) 55%, rgba(0,26,60,0.35) 100%)',
            },
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '1.85rem', md: '2.4rem' },
              fontWeight: 800,
              color: 'common.white',
              textShadow: '0 2px 12px rgba(0,0,0,0.35)',
              mb: 1.5,
              maxWidth: 560,
            }}
          >
            Our upcoming events
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.92)',
              maxWidth: 520,
              lineHeight: 1.7,
              textShadow: '0 1px 8px rgba(0,0,0,0.35)',
            }}
          >
            Dates, places, and how to register — filter by format or search by keyword.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 5 } }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Stack spacing={2} sx={{ mb: 3 }}>
              <TextField
                size="small"
                fullWidth
                placeholder="Search title, topic, place…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="action" fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
              <Box sx={{ overflowX: 'auto' }}>
                <ToggleButtonGroup
                  value={kind}
                  exclusive
                  onChange={handleKind}
                  size="small"
                  sx={{
                    flexWrap: 'wrap',
                    gap: 0.5,
                    '& .MuiToggleButton-root': { textTransform: 'none', borderRadius: '999px !important', px: 1.5 },
                  }}
                >
                  {kindFilters.map((opt) => (
                    <ToggleButton key={opt.value} value={opt.value}>
                      {opt.label}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Box>
            </Stack>

            <Grid container spacing={2}>
              {filtered.map((ev) => (
                <Grid key={ev.id} size={{ xs: 12, sm: 6 }}>
                  <Card variant="outlined" sx={{ borderRadius: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Box
                      component="img"
                      src={getImagePath(ev.photo)}
                      alt=""
                      sx={{
                        width: '100%',
                        height: 120,
                        objectFit: 'cover',
                        flexShrink: 0,
                      }}
                    />
                    <CardContent sx={{ pt: 1.5, pb: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap sx={{ mb: 1 }}>
                        <Chip size="small" label={ev.categoryLabel} variant="outlined" />
                        {ev.status === 'past' && <Chip size="small" label="Past" />}
                      </Stack>
                      <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 1, lineHeight: 1.3 }}>
                        {ev.title}
                      </Typography>
                      <Stack spacing={0.25} sx={{ mb: 1, typography: 'caption', color: 'text.secondary' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontWeight: 600, color: 'primary.main' }}>
                          <CalendarTodayIcon sx={{ fontSize: 14 }} />
                          {ev.date}
                          <AccessTimeIcon sx={{ fontSize: 14, ml: 1 }} />
                          {ev.time}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.5 }}>
                          <LocationOnIcon sx={{ fontSize: 14, mt: '2px' }} />
                          {ev.location}
                        </Box>
                      </Stack>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mb: 2,
                          flexGrow: 1,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          lineHeight: 1.5,
                        }}
                      >
                        {ev.description}
                      </Typography>
                      <Button
                        component={RouterLink}
                        to="/contact"
                        variant={ev.status === 'upcoming' ? 'contained' : 'outlined'}
                        size="small"
                        endIcon={<ArrowForwardIcon />}
                        sx={{ alignSelf: 'flex-start' }}
                      >
                        {ev.status === 'upcoming' ? 'Register' : 'Ask next dates'}
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {filtered.length === 0 && (
              <Typography color="text.secondary" sx={{ py: 4 }}>
                No events match — try another filter or search.
              </Typography>
            )}
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card variant="outlined" sx={{ borderRadius: 2, position: { md: 'sticky' }, top: { md: 96 } }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={700} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CalendarTodayIcon color="primary" fontSize="small" />
                  Coming up
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Quick view of scheduled items — confirm details when you register.
                </Typography>
                <Stack spacing={1.5}>
                  {upcomingDates.map((row) => (
                    <Box
                      key={row.id}
                      sx={{ py: 1, borderBottom: '1px solid', borderColor: 'divider', '&:last-of-type': { borderBottom: 'none' } }}
                    >
                      <Typography variant="caption" color="primary" fontWeight={700}>
                        {row.date}
                      </Typography>
                      <Typography variant="body2" fontWeight={600}>
                        {row.title}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
                <Button component={RouterLink} to="/gallery" size="small" sx={{ mt: 2 }} endIcon={<ArrowForwardIcon />}>
                  Photos in Gallery
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'action.hover', py: { xs: 5, md: 6 } }}>
        <Container maxWidth="sm">
          <Typography variant="subtitle1" fontWeight={700} gutterBottom align="center">
            Hear about new events first
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 2 }}>
            Leave your email — we send dates and openings (no spam).
          </Typography>
          <Box component="form" onSubmit={handleSubscribe}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
              <TextField
                fullWidth
                size="small"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
              <Button type="submit" variant="contained" sx={{ flexShrink: 0 }}>
                OK
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Snackbar open={subscribed} autoHideDuration={4000} onClose={() => setSubscribed(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={() => setSubscribed(false)} severity="success" variant="filled" sx={{ width: '100%' }}>
          Thanks — we’ll keep you posted.
        </Alert>
      </Snackbar>
    </Box>
  );
}
