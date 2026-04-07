import type { LucideIcon } from 'lucide-react';
import { Accessibility, BookOpen, Clapperboard, Globe2, Handshake, ShieldCheck } from 'lucide-react';
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
import HandshakeIcon from '@mui/icons-material/Handshake';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { getImagePath } from '../utils/imagePath';
import { notionStyleAvatarUrl } from '../utils/notionAvatarUrl';

const ORG_PIC = '921950857';
const ORG_OID = 'E10155908';

function ObjectiveIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <Box sx={{ color: 'primary.main', display: 'flex', mb: 1.5 }} aria-hidden>
      <Icon size={28} strokeWidth={1.75} aria-hidden />
    </Box>
  );
}

const coreObjectives: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Intercultural Education & Inclusion',
    description:
      'Fostering intercultural understanding and responsiveness to diversity—cultural, ethnic, linguistic, and social—with pathways to awareness, constructive dialogue, and inclusive non-formal learning.',
    icon: Globe2,
  },
  {
    title: 'Media and Arts Education',
    description:
      'Advancing media literacy and arts-based learning, and popularising responsible use of ICT, IT, and AI in teaching and non-formal education settings.',
    icon: Clapperboard,
  },
  {
    title: 'Digital Inclusion for Marginalised Groups',
    description:
      'Targeted digital literacy and inclusion for young people, people aged 60 and over, migrants, and refugees—so essential skills and online confidence are within reach.',
    icon: Accessibility,
  },
  {
    title: 'Volunteering and Social Cohesion',
    description:
      'Supporting civic engagement and solidarity through participation in European programmes and local initiatives that strengthen social cohesion.',
    icon: Handshake,
  },
  {
    title: 'Lifelong Learning and Vocational Training',
    description:
      'Non-formal educational initiatives that support lifelong learning and vocational skills relevant to personal development and the labour market.',
    icon: BookOpen,
  },
];

const targetAudiences = [
  'Unemployed adults',
  'Youth',
  'Seniors (60+)',
  'Women',
  'Ethnic minorities',
  'Migrants',
  'Refugees',
] as const;

const teamPreview = [
  { name: 'Pavel Smulski', role: 'Leader & Founder' },
  { name: 'Karina Tronche', role: 'Core Team' },
  { name: 'Louise Papadoperakis', role: 'Core Team' },
  { name: 'Alex Smulski', role: 'Core Team' },
] as const;

const partnerNames = [
  'Université Côte d’Azur',
  'Le 109 · Pôle de cultures contemporaines',
  'Le HUBLOT · SCREB · Lycée Pasteur',
  'La Médiathèque Louis Nucéra',
  'Espace Associations Nice',
];

const faqItems = [
  {
    q: 'What is MITRA France?',
    a: 'MITRA FRANCE is a non-governmental, non-profit organisation founded in 2015 in Nice, France. It promotes inclusive education, media and digital literacy, intercultural understanding, and lifelong learning through non-formal education.',
  },
  {
    q: 'Where are you based?',
    a: 'Our headquarters are in Nice, Provence–Alpes–Côte d’Azur, with cooperation across France and Europe—including Erasmus+ partnerships.',
  },
  {
    q: 'Who can take part?',
    a: 'We work with unemployed adults, youth, seniors aged 60 and over, women, ethnic minorities, migrants, and refugees, depending on each programme’s eligibility and funding rules.',
  },
  {
    q: 'How do I get involved?',
    a: 'Use the Contact page to describe your interest—volunteering, training, or partnership—and we will point you to the right programme or colleague.',
  },
  {
    q: 'What are your official identifiers?',
    a: `For transparency in European programmes: Participant Identification Code (PIC) ${ORG_PIC}, Organisation ID (OID) ${ORG_OID}.`,
  },
];

const storyMomentImage = '/photos/583924019_1157903166517688_8756873269993443102_n.jpg';

export default function About() {
  return (
    <Box component="main">
      {/* Hero */}
      <Box
        component="section"
        aria-labelledby="about-hero-heading"
        sx={{
          pt: { xs: 12, sm: 14, md: 16 },
          pb: { xs: 6, md: 10 },
          background: 'linear-gradient(180deg, rgba(0, 35, 149, 0.05) 0%, transparent 100%)',
        }}
      >
        <Container>
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
                <Chip icon={<LocationOnIcon sx={{ fontSize: 18 }} />} label="Nice, France"
                  size="small"
                  variant="outlined"
                  sx={{ fontWeight: 600, borderRadius: 1 }}
                />
                <Chip label="Founded 2015" size="small" variant="outlined" sx={{ fontWeight: 600, borderRadius: 1 }} />
              </Stack>
              <Typography
                variant="overline"
                sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 1.2, display: 'block' }}
              >
                MITRA FRANCE
              </Typography>
              <Typography
                id="about-hero-heading"
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '1.65rem', sm: '2rem', md: '2.35rem' },
                  fontWeight: 800,
                  lineHeight: 1.25,
                  mt: 1,
                  mb: 2,
                  color: 'text.primary',
                }}
              >
                Non-profit organization dedicated to inclusive education, media literacy, and lifelong learning since
                2015.
              </Typography>
              <Typography
                color="text.secondary"
                component="p"
                sx={{ lineHeight: 1.8, maxWidth: 560, fontSize: '1.0625rem' }}
              >
                We are an NGO rooted in <strong>Nice</strong>, combining local anchoring with European cooperation. Our
                work spans intercultural education, creative and digital media, inclusion for marginalised communities,
                volunteering, and non-formal pathways for lifelong learning—always with clarity, rigour, and respect for
                participants.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src={getImagePath('/illustrations/mitra-image-4.png')}
                alt="MITRA France participants and facilitators during an outdoor group activity on the French Riviera"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  maxHeight: { xs: 320, md: 400 },
                  objectFit: 'cover',
                  boxShadow: '0 8px 32px rgba(0, 35, 149, 0.12)',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Core objectives — 3 + 2 grid */}
      <Container
        component="section"
        aria-labelledby="objectives-heading"
        sx={{ py: { xs: 6, md: 9 } }}
      >
        <Typography
          id="objectives-heading"
          variant="h2"
          component="h2"
          sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700, mb: 1, textAlign: 'center' }}
        >
          Core objectives
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 4, md: 5 }, lineHeight: 1.75 }}
        >
          Five strategic priorities guide our programmes, partnerships, and European projects.
        </Typography>
        <Grid container spacing={3}>
          {coreObjectives.map((obj, index) => (
            <Grid key={obj.title} size={{ xs: 12, sm: 6, md: index < 3 ? 4 : 6 }}>
              <Card
                variant="outlined"
                sx={{
                  height: '100%',
                  borderRadius: 2,
                  borderColor: 'divider',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                  '&:hover': { borderColor: 'primary.main', boxShadow: 1 },
                }}
              >
                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                  <ObjectiveIcon icon={obj.icon} />
                  <Typography variant="subtitle1" component="h3" fontWeight={700} gutterBottom sx={{ lineHeight: 1.35 }}>
                    {index + 1}. {obj.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {obj.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Target audiences */}
      <Box
        component="section"
        aria-labelledby="audiences-heading"
        sx={{ bgcolor: 'action.hover', py: { xs: 6, md: 8 } }}
      >
        <Container>
          <Typography
            id="audiences-heading"
            variant="h2"
            component="h2"
            sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700, mb: 1 }}
          >
            Who we serve
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 560, lineHeight: 1.75 }}>
            Our non-formal activities are designed with—and for—people who are often underserved by mainstream provision.
            Specific cohorts depend on each call; the groups below reflect our organisational focus.
          </Typography>
          <Stack
            component="ul"
            aria-label="Target audiences"
            direction="row"
            flexWrap="wrap"
            useFlexGap
            spacing={1.25}
            sx={{ listStyle: 'none', p: 0, m: 0 }}
          >
            {targetAudiences.map((label) => (
              <Box component="li" key={label} sx={{ m: 0 }}>
                <Chip
                  label={label}
                  sx={{
                    fontWeight: 600,
                    borderRadius: 1,
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                />
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Story moment — single factual visual, no marketing timeline */}
      <Container sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700, mb: 2 }}>
              In practice
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Workshops, training, and cooperation agreements translate our objectives into concrete activities—in schools,
              libraries, cultural venues, and international consortia—always underpinned by transparency and professional
              standards.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={getImagePath(storyMomentImage)}
              alt="Facilitators and participants during a MITRA France learning session"
              sx={{
                width: '100%',
                borderRadius: 2,
                maxHeight: 280,
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Team */}
      <Box sx={{ bgcolor: 'action.hover', py: { xs: 6, md: 8 } }}>
        <Container>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700, mb: 1 }}>
            Coordination team
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 4, maxWidth: 560 }}>
            Core contacts for programmes. Avatars are illustrative; for official matters, use the details in Transparency
            or the Contact page.
          </Typography>
          <Grid container spacing={3}>
            {teamPreview.map((member) => (
              <Grid key={member.name} size={{ xs: 6, md: 3 }}>
                <Stack spacing={1.5} alignItems="center" textAlign="center">
                  <Avatar
                    src={notionStyleAvatarUrl(member.name)}
                    alt=""
                    variant="circular"
                    sx={{
                      width: 88,
                      height: 88,
                      bgcolor: 'grey.100',
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  />
                  <Typography fontWeight={700} component="p">
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" component="p">
                    {member.role}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} justifyContent="center" alignItems="center" sx={{ mt: 3 }}>
            <Button component={RouterLink} to="/team" variant="outlined" endIcon={<ArrowForwardIcon />}>
              Team &amp; Volunteers
            </Button>
            <Button component={RouterLink} to="/contact" variant="text" endIcon={<ArrowForwardIcon />}>
              Contact the team
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Partners */}
      <Container sx={{ py: { xs: 6, md: 8 } }}>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
          <HandshakeIcon color="primary" aria-hidden />
          <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700 }}>
            Institutional partners (examples)
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, maxWidth: 640, lineHeight: 1.75 }}>
          We cooperate with universities, cultural institutions, schools, libraries, and civic hubs in Nice and the
          wider region.
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {partnerNames.map((name) => (
            <Chip key={name} label={name} variant="outlined" size="small" sx={{ borderRadius: 1 }} />
          ))}
        </Box>
        <Button component={RouterLink} to="/partners" sx={{ mt: 2 }} size="small" endIcon={<ArrowForwardIcon />}>
          Partners & collaborations
        </Button>
      </Container>

      {/* Transparency */}
      <Box
        component="section"
        aria-labelledby="transparency-heading"
        sx={{
          py: { xs: 6, md: 8 },
          borderTop: 1,
          borderBottom: 1,
          borderColor: 'divider',
          bgcolor: 'background.default',
        }}
      >
        <Container>
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2, color: 'primary.main' }}>
            <Box component="span" sx={{ display: 'flex' }} aria-hidden>
              <ShieldCheck size={26} strokeWidth={1.75} />
            </Box>
            <Typography id="transparency-heading" variant="h2" component="h2" sx={{ fontSize: { xs: '1.35rem', md: '1.5rem' }, fontWeight: 700 }}>
              Transparency
            </Typography>
          </Stack>
          <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 720, lineHeight: 1.75 }}>
            MITRA FRANCE is registered and active in <strong>Nice, France</strong>. For European programmes and reporting,
            our organisation uses the following official identifiers:
          </Typography>
          <Box
            component="dl"
            sx={{
              display: 'grid',
              gap: 2,
              maxWidth: 480,
              m: 0,
            }}
          >
            <Typography component="dt" variant="body2" sx={{ fontWeight: 700, color: 'text.secondary' }}>
              Participant Identification Code (PIC)
            </Typography>
            <Typography component="dd" variant="body1" sx={{ m: 0, fontWeight: 600 }}>
              {ORG_PIC}
            </Typography>
            <Typography component="dt" variant="body2" sx={{ fontWeight: 700, color: 'text.secondary' }}>
              Organisation ID (OID)
            </Typography>
            <Typography component="dd" variant="body1" sx={{ m: 0, fontWeight: 600 }}>
              {ORG_OID}
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* FAQ */}
      <Container component="section" aria-labelledby="faq-heading" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography id="faq-heading" variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700, mb: 3 }}>
          Frequently asked questions
        </Typography>
        <Box sx={{ maxWidth: 720 }}>
          {faqItems.map((item) => (
            <Accordion
              key={item.q}
              disableGutters
              elevation={0}
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
                mb: 1,
                '&:before': { display: 'none' },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight={600} component="span">
                  {item.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary" component="p" sx={{ lineHeight: 1.75 }}>
                  {item.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>

      {/* CTA */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.06) 0%, rgba(237, 41, 57, 0.04) 100%)',
        }}
      >
        <Container maxWidth="sm">
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography variant="h5" component="h2" fontWeight={800}>
              Collaborate or request information
            </Typography>
            <Typography color="text.secondary" component="p">
              Send a short message through our contact form—we respond with clear next steps.
            </Typography>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 4, py: 1.25, fontWeight: 700, borderRadius: 2 }}
            >
              Contact
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
