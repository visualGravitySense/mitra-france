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
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';
import { getImagePath } from '../utils/imagePath';

type ProgramFormat = 'workshop' | 'longterm';
type Delivery = 'online' | 'offline' | 'hybrid';

type ListFilter = 'all' | 'workshop' | 'longterm' | 'online' | 'offline';

interface ProgramItem {
  id: string;
  title: string;
  dateLabel: string;
  time?: string;
  location: string;
  blurb: string;
  format: ProgramFormat;
  delivery: Delivery;
  image: string;
  status: 'upcoming' | 'past';
}

const programs: ProgramItem[] = [
  {
    id: '1',
    title: 'Digital Skills for Seniors',
    dateLabel: '15 February 2024',
    time: '10:00–12:00',
    location: 'Le 109, Nice',
    blurb: 'Smartphones, safe browsing, and everyday apps — small groups, patient pace.',
    format: 'workshop',
    delivery: 'offline',
    image: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
    status: 'upcoming',
  },
  {
    id: '2',
    title: 'Media Literacy Workshop',
    dateLabel: '20 February 2024',
    time: '14:00–16:00',
    location: 'Villa Ephrussi, Nice area',
    blurb: 'Sources, bias, and practical checks before you share news or video.',
    format: 'workshop',
    delivery: 'offline',
    image: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
    status: 'upcoming',
  },
  {
    id: '3',
    title: 'Intercultural cohort (EU project cycle)',
    dateLabel: 'Sep 2024 – Jun 2025',
    time: 'Sessions twice monthly',
    location: 'Nice + online sync',
    blurb: 'Long-form group for organisations and active citizens working across borders.',
    format: 'longterm',
    delivery: 'hybrid',
    image: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
    status: 'upcoming',
  },
  {
    id: '4',
    title: 'Creative writing for youth',
    dateLabel: '28 January 2024',
    time: '15:00–17:00',
    location: 'Le HUBLOT, Nice',
    blurb: 'Short fiction and storytelling — confidence on the page and in performance.',
    format: 'workshop',
    delivery: 'offline',
    image: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
    status: 'past',
  },
  {
    id: '5',
    title: 'Open digital drop-in',
    dateLabel: 'First Thursday monthly',
    time: '17:30–19:00',
    location: 'Online (link after signup)',
    blurb: 'Bring your device and questions — librarians and trainers on rotation.',
    format: 'workshop',
    delivery: 'online',
    image: '/photos/583741041_1157902773184394_5619801435922057517_n.jpg',
    status: 'upcoming',
  },
  {
    id: '6',
    title: 'Photography basics intensive',
    dateLabel: '20 January 2024',
    time: '10:00–13:00',
    location: 'Le 109, Nice',
    blurb: 'Composition, light, and simple editing for community reporters.',
    format: 'workshop',
    delivery: 'offline',
    image: '/photos/583489432_1157911303183541_1292926580526900497_n.jpg',
    status: 'past',
  },
];

const filterOptions: { value: ListFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'workshop', label: 'Workshops' },
  { value: 'longterm', label: 'Long-term' },
  { value: 'online', label: 'Online' },
  { value: 'offline', label: 'On-site' },
];

function matchesFilter(item: ProgramItem, f: ListFilter): boolean {
  if (f === 'all') return true;
  if (f === 'workshop') return item.format === 'workshop';
  if (f === 'longterm') return item.format === 'longterm';
  if (f === 'online') return item.delivery === 'online' || item.delivery === 'hybrid';
  if (f === 'offline') return item.delivery === 'offline' || item.delivery === 'hybrid';
  return true;
}

const heroSidePhotos = [
  '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
  '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
  '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
];

export default function ProgramsWorkshops() {
  const [filter, setFilter] = useState<ListFilter>('all');

  const visible = useMemo(() => programs.filter((p) => matchesFilter(p, filter)), [filter]);

  const calendarHighlights = useMemo(() => {
    return programs
      .filter((p) => p.status === 'upcoming')
      .slice(0, 4)
      .map((p) => ({ id: p.id, date: p.dateLabel, title: p.title }));
  }, []);

  const handleFilter = (_: React.MouseEvent<HTMLElement>, value: ListFilter | null) => {
    if (value != null) setFilter(value);
  };

  return (
    <Box component="main">
      <Box
        sx={{
          pt: { xs: 12, sm: 14, md: 16 },
          pb: { xs: 6, md: 8 },
          background: 'linear-gradient(180deg, rgba(0, 35, 149, 0.06) 0%, transparent 100%)',
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h1" sx={{ fontSize: { xs: '1.85rem', md: '2.35rem' }, fontWeight: 800, mb: 2 }}>
                Programs & workshops
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.75, maxWidth: 520 }}>
                One-off workshops and longer cohorts in Nice and online. Check dates below and register for the next
                session.
              </Typography>
              <Button
                component="a"
                href="#programs-list"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{ fontWeight: 700, borderRadius: 2 }}
              >
                View schedule
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={1.5}>
                {heroSidePhotos.map((src, i) => (
                  <Box
                    key={src}
                    component="img"
                    src={getImagePath(src)}
                    alt=""
                    sx={{
                      width: '100%',
                      height: i === 1 ? 200 : 140,
                      objectFit: 'cover',
                      borderRadius: 2,
                      boxShadow: '0 8px 24px rgba(0,35,149,0.15)',
                    }}
                  />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container id="programs-list" maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.35rem', md: '1.5rem' }, fontWeight: 700, mb: 2 }}>
              Upcoming & recent
            </Typography>
            <Box sx={{ mb: 3, overflowX: 'auto' }}>
              <ToggleButtonGroup
                value={filter}
                exclusive
                onChange={handleFilter}
                size="small"
                sx={{ flexWrap: 'wrap', gap: 0.5, '& .MuiToggleButton-root': { borderRadius: '8px !important', textTransform: 'none' } }}
              >
                {filterOptions.map((opt) => (
                  <ToggleButton key={opt.value} value={opt.value}>
                    {opt.label}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Box>

            <Stack spacing={2}>
              {visible.map((p) => (
                <Card key={p.id} variant="outlined" sx={{ borderRadius: 2 }}>
                  <Grid container>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <Box
                        component="img"
                        src={getImagePath(p.image)}
                        alt=""
                        sx={{ width: '100%', height: { xs: 180, sm: '100%' }, minHeight: 160, objectFit: 'cover' }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 8 }}>
                      <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 1 }}>
                          <Chip size="small" label={p.format === 'workshop' ? 'Workshop' : 'Program'} variant="outlined" />
                          <Chip
                            size="small"
                            label={p.delivery === 'hybrid' ? 'Hybrid' : p.delivery === 'online' ? 'Online' : 'On-site'}
                            color={p.delivery === 'online' ? 'primary' : 'default'}
                            variant={p.delivery === 'online' ? 'filled' : 'outlined'}
                          />
                          {p.status === 'past' && <Chip size="small" label="Past" />}
                        </Stack>
                        <Typography variant="h6" fontWeight={700} gutterBottom>
                          {p.title}
                        </Typography>
                        <Stack spacing={0.5} sx={{ mb: 1.5, color: 'text.secondary' }}>
                          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <CalendarTodayIcon sx={{ fontSize: 16 }} />
                            {p.dateLabel}
                            {p.time && (
                              <>
                                <AccessTimeIcon sx={{ fontSize: 16, ml: 1 }} />
                                {p.time}
                              </>
                            )}
                          </Typography>
                          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.5 }}>
                            <LocationOnIcon sx={{ fontSize: 16, mt: '2px' }} />
                            {p.location}
                          </Typography>
                        </Stack>
                        <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, lineHeight: 1.65, mb: 2 }}>
                          {p.blurb}
                        </Typography>
                        <Button
                          component={RouterLink}
                          to="/contact"
                          variant={p.status === 'upcoming' ? 'contained' : 'outlined'}
                          size="small"
                          endIcon={<ArrowForwardIcon />}
                          sx={{ alignSelf: 'flex-start' }}
                        >
                          {p.status === 'upcoming' ? 'Sign up' : 'Ask about the next date'}
                        </Button>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
              ))}
            </Stack>
            {visible.length === 0 && (
              <Typography color="text.secondary" sx={{ py: 4 }}>
                Nothing in this filter — try “All”.
              </Typography>
            )}
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card variant="outlined" sx={{ borderRadius: 2, position: { md: 'sticky' }, top: { md: 96 } }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={700} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CalendarTodayIcon color="primary" fontSize="small" />
                  Next dates
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Snapshot of upcoming sessions (confirm with us when you register).
                </Typography>
                <Stack spacing={1.5}>
                  {calendarHighlights.map((row) => (
                    <Box
                      key={row.id}
                      sx={{
                        py: 1,
                        borderBottom: '1px solid',
                        borderColor: 'divider',
                        '&:last-of-type': { borderBottom: 'none', pb: 0 },
                      }}
                    >
                      <Typography variant="caption" color="primary" fontWeight={700}>
                        {row.date}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {row.title}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
                <Button component={RouterLink} to="/events" size="small" sx={{ mt: 2 }} endIcon={<ArrowForwardIcon />}>
                  Full events page
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
