import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Avatar from '@mui/material/Avatar';
import { Link as RouterLink } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PublicIcon from '@mui/icons-material/Public';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import HandshakeIcon from '@mui/icons-material/Handshake';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { getImagePath } from '../utils/imagePath';

const values = [
  {
    icon: <PublicIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Europe & inclusion',
    text: 'We build bridges across cultures through Erasmus+ and local cooperation.',
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Learning for all',
    text: 'Education that works for youth, adults, seniors, and underserved groups.',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Community first',
    text: 'Programs are co-designed with partners and participants, not imposed.',
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Care & respect',
    text: 'Safe spaces, accessibility, and honest communication in everything we do.',
  },
];

const milestones = [
  { year: '2015', label: 'Founded in Nice', detail: 'MITRA France starts as a non-profit focused on education and mobility.' },
  { year: '2016–2022', label: 'Erasmus+ growth', detail: 'KA1 and KA2 projects on media literacy, digital skills, and heritage.' },
  { year: 'Today', label: 'Local + European', detail: 'Workshops, partnerships, and projects linking the Riviera with Europe.' },
];

const teamPreview = [
  {
    name: 'Pavel Smulski',
    role: 'Leader & Founder',
    photo: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
  },
  {
    name: 'Karina Tronche',
    role: 'Core Team',
    photo: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
  },
  {
    name: 'Louise Papadoperakis',
    role: 'Core Team',
    photo: '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
  },
  {
    name: 'Alex Smulski',
    role: 'Core Team',
    photo: '/photos/583741041_1157902773184394_5619801435922057517_n.jpg',
  },
];

const partnerNames = [
  "Université Côte d'Azur",
  'Le 109: Pôle de cultures',
  'Villa Ephrussi de Rothschild',
  'Médiathèque Louis Nucéra',
  'Le HUBLOT Theater',
  'Espace Associations',
];

const faqItems = [
  {
    q: 'What is MITRA France?',
    a: 'A French non-profit based in Nice. We run educational and cultural activities — often within Erasmus+ — on intercultural learning, media literacy, digital inclusion, and community engagement.',
  },
  {
    q: 'Who do you work with?',
    a: 'Schools and universities, cultural venues, libraries, associations, and volunteers. Participants range from young people to seniors, including migrants and minority communities.',
  },
  {
    q: 'How can I take part?',
    a: 'Browse projects and events, then reach out via Contact. We will tell you about open calls, volunteering, and partnership opportunities.',
  },
  {
    q: 'Do you accept new partners?',
    a: 'Yes. We regularly collaborate on European and local initiatives. Use the contact form with a short description of your organisation and idea.',
  },
  {
    q: 'Where are you based?',
    a: 'We are rooted in Nice and the Provence–Alpes–Côte d’Azur region, with partners across Europe.',
  },
];

const galleryImages = [
  '/photos/572890197_1142845724690099_2859850866106109617_n.jpg',
  '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
  '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
  '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
];

export default function About() {
  return (
    <Box component="main">
      {/* Hero */}
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
              <Typography
                variant="overline"
                sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 1 }}
              >
                About us
              </Typography>
              <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 800, mt: 1, mb: 2 }}>
                MITRA France connects people through education, media, and culture — from Nice across Europe.
              </Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.75, maxWidth: 520 }}>
                We are a non-profit team of educators and project leaders. Our work strengthens inclusion, digital skills,
                and intercultural dialogue — in classrooms, cultural spaces, and international projects.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src={getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg')}
                alt="MITRA France community activity"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  maxHeight: 380,
                  objectFit: 'cover',
                  boxShadow: '0 12px 40px rgba(0, 35, 149, 0.18)',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Values — one compact row */}
      <Container sx={{ py: { xs: 5, md: 7 } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700, mb: 3, textAlign: 'center' }}>
          What we stand for
        </Typography>
        <Grid container spacing={2}>
          {values.map((v) => (
            <Grid key={v.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card variant="outlined" sx={{ height: '100%', borderRadius: 2 }}>
                <CardContent sx={{ p: 2, textAlign: { xs: 'left', md: 'center' } }}>
                  <Box sx={{ mb: 1.5, display: 'flex', justifyContent: { xs: 'flex-start', md: 'center' } }}>{v.icon}</Box>
                  <Typography variant="subtitle2" fontWeight={700} gutterBottom>
                    {v.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {v.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Story: one block + short timeline */}
      <Box sx={{ bgcolor: 'action.hover', py: { xs: 6, md: 8 } }}>
        <Container>
          <Grid container spacing={4} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700, mb: 2 }}>
                Our story
              </Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
                MITRA grew from a simple idea: learning and culture should be open, practical, and welcoming. Over the
                years we have combined European cooperation with strong local roots — so participants gain skills they
                use in daily life, not just on paper.
              </Typography>
              <Stack spacing={2}>
                {milestones.map((m) => (
                  <Box
                    key={m.year}
                    sx={{
                      pl: 2,
                      borderLeft: '3px solid',
                      borderColor: 'primary.main',
                    }}
                  >
                    <Typography variant="caption" color="primary" fontWeight={700}>
                      {m.year}
                    </Typography>
                    <Typography variant="subtitle2" fontWeight={700}>
                      {m.label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {m.detail}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
                Moments from our work
              </Typography>
              <Grid container spacing={1.5}>
                {galleryImages.map((src) => (
                  <Grid key={src} size={{ xs: 6 }}>
                    <Box
                      component="img"
                      src={getImagePath(src)}
                      alt=""
                      sx={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 1.5 }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Team */}
      <Container sx={{ py: { xs: 6, md: 8 } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700, mb: 1 }}>
          Core team
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 4, maxWidth: 560 }}>
          The people steering programmes day to day. More profiles and roles are on the full team page.
        </Typography>
        <Grid container spacing={3}>
          {teamPreview.map((member) => (
            <Grid key={member.name} size={{ xs: 6, md: 3 }}>
              <Stack spacing={1.5} alignItems="center" textAlign="center">
                <Avatar src={getImagePath(member.photo)} alt={member.name} sx={{ width: 88, height: 88 }} />
                <Typography fontWeight={700}>{member.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.role}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Button component={RouterLink} to="/team" variant="text" endIcon={<ArrowForwardIcon />}>
            Meet the full team
          </Button>
        </Box>
      </Container>

      {/* Trust */}
      <Box sx={{ bgcolor: 'action.hover', py: { xs: 6, md: 8 } }}>
        <Container>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Card variant="outlined" sx={{ borderRadius: 2, height: '100%' }}>
                <CardContent>
                  <FormatQuoteIcon color="primary" sx={{ fontSize: 32, mb: 1, opacity: 0.85 }} />
                  <Typography sx={{ fontStyle: 'italic', lineHeight: 1.7, mb: 2 }}>
                    Clear programmes, responsive coordination, and real attention to diverse groups — that is what
                    partners remember about MITRA.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    — Institutional partner, southeastern France
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                <HandshakeIcon color="primary" />
                <Typography variant="h6" fontWeight={700}>
                  Partners we work with
                </Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Universities, cultural centres, and civic spaces — the backbone of our activities on the ground.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {partnerNames.map((name) => (
                  <Chip key={name} label={name} variant="outlined" size="small" sx={{ borderRadius: 1 }} />
                ))}
              </Box>
              <Button component={RouterLink} to="/partners" sx={{ mt: 2 }} size="small" endIcon={<ArrowForwardIcon />}>
                Partner directory
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FAQ — short */}
      <Container sx={{ py: { xs: 6, md: 8 } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700, mb: 3 }}>
          Common questions
        </Typography>
        <Box sx={{ maxWidth: 720 }}>
          {faqItems.map((item) => (
            <Accordion key={item.q} disableGutters elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1, mb: 1, '&:before': { display: 'none' } }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight={600}>{item.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
                  {item.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>

      {/* Single CTA */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.08) 0%, rgba(237, 41, 57, 0.06) 100%)',
        }}
      >
        <Container maxWidth="sm">
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography variant="h5" fontWeight={800}>
              Want to collaborate or join an activity?
            </Typography>
            <Typography color="text.secondary">
              One message is enough — we will get back to you with next steps.
            </Typography>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 4, py: 1.25, fontWeight: 700, borderRadius: 2 }}
            >
              Contact us
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
