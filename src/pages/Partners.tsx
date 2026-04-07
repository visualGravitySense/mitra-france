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
import type { LucideIcon } from 'lucide-react';
import { Landmark, Library, MapPin, School } from 'lucide-react';
import { IllustrationCardMedia } from '../components/IllustrationCardMedia.tsx';
import { topicIllustrations } from '../utils/topicIllustrations';

type CollabCategory = 'all' | 'europe' | 'local' | 'education' | 'culture';

interface CollaborationCard {
  id: string;
  title: string;
  summary: string;
  category: Exclude<CollabCategory, 'all'>;
  meta: string;
  illustration: string;
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

const localNicePartners: { title: string; detail?: string }[] = [
  { title: 'Le 109', detail: 'Pôle de cultures contemporaines' },
  { title: 'Le HUBLOT' },
  { title: 'Local Theater & Art Gallery partners' },
  { title: 'Espace Associations' },
  { title: 'Community activity for children and parents in Las Planas' },
];

const institutionalAcademicPartners: { name: string; formerName?: string }[] = [
  {
    name: 'Université Côte d’Azur',
    formerName: 'Formerly Université de Nice Sophia Antipolis',
  },
  { name: 'Lycée Pasteur' },
  { name: 'SCREB' },
];

const culturalVenuesExhibitions: {
  name: string;
  description: string;
  icon: 'library' | 'landmark';
}[] = [
  {
    name: 'La Médiathèque Louis Nucéra',
    description:
      'The largest library in Nice — a flagship public venue that has hosted exhibitions highlighting volunteer work and civic engagement.',
    icon: 'library',
  },
  {
    name: 'Bibliothèque l’Ariane Léonard de Vinci',
    description:
      'Focus on volunteer action in Nice and across Europe, with programming that connects local readers and communities to European solidarity.',
    icon: 'library',
  },
  {
    name: 'Villa Ephrussi de Rothschild',
    description: 'A prestigious cultural site on the Côte d’Azur and a landmark setting for heritage, gardens, and the arts.',
    icon: 'landmark',
  },
];

const partnerNetworkCardSx = {
  height: '100%',
  p: 2,
  borderRadius: 1.5,
  border: '1px solid',
  borderColor: 'divider',
  bgcolor: '#fff',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    borderColor: 'rgba(0, 35, 149, 0.22)',
    boxShadow: '0 6px 20px rgba(0, 35, 149, 0.08)',
  },
} as const;

function NetworkIconTile({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <Box
      sx={{
        flexShrink: 0,
        width: 44,
        height: 44,
        borderRadius: 1.25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'rgba(0, 35, 149, 0.07)',
        color: 'primary.main',
      }}
      aria-hidden
    >
      <Icon size={22} strokeWidth={1.75} />
    </Box>
  );
}

const collaborations: CollaborationCard[] = [
  {
    id: 'obj-1',
    title: 'Intercultural Education & Inclusion',
    summary:
      'Non-formal education that fosters intercultural understanding and social inclusion — addressing cultural, ethnic, linguistic, and social diversity in learning settings.',
    category: 'education',
    meta: 'Core objective',
    illustration: topicIllustrations.interculturalInclusion,
    link: '/focus-areas',
  },
  {
    id: 'obj-2',
    title: 'Media and Arts Education',
    summary:
      'Media literacy, arts education, and creative use of digital tools — including responsible IT practice and AI awareness in non-formal learning.',
    category: 'culture',
    meta: 'Core objective',
    illustration: topicIllustrations.mediaArts,
    link: '/focus-areas',
  },
  {
    id: 'obj-3',
    title: 'Digital Inclusion for Marginalised Groups',
    summary:
      'Digital inclusion with a focus on youth, people aged 60 and over, and unemployed adults — practical skills and confidence for everyday and civic life.',
    category: 'education',
    meta: 'Core objective',
    illustration: topicIllustrations.digitalInclusion,
    link: '/contact',
  },
  {
    id: 'loc-uca',
    title: 'Université Côte d’Azur',
    summary:
      'Research, teaching, and non-formal education initiatives that connect university communities with civil-society projects in the PACA region.',
    category: 'local',
    meta: 'Nice, France · Local partner',
    illustration: topicIllustrations.organization,
    link: '/contact',
  },
  {
    id: 'loc-109',
    title: 'Le 109 (Pôle de cultures contemporaines)',
    summary:
      'Contemporary culture and creative programmes that support youth, artists, and audiences through workshops and cultural mediation.',
    category: 'local',
    meta: 'Nice, France · Local partner',
    illustration: topicIllustrations.galleryCulture,
    link: '/contact',
  },
  {
    id: 'loc-schools',
    title: 'Le HUBLOT · SCREB · Lycée Pasteur',
    summary:
      'Schools and cultural venues in the network: cooperation on media education, heritage, and inclusive activities for learners and educators.',
    category: 'local',
    meta: 'Nice area · Local partners',
    illustration: topicIllustrations.programs,
    link: '/contact',
  },
  {
    id: 'loc-mediatheque',
    title: 'La Médiathèque Louis Nucéra',
    summary:
      'Public learning space for digital and media literacy, reading, and community-led cultural events open to diverse publics.',
    category: 'local',
    meta: 'Nice, France · Local partner',
    illustration: topicIllustrations.learnMore,
    link: '/contact',
  },
  {
    id: 'loc-espace',
    title: 'Espace Associations Nice',
    summary:
      'Hub for associations: coordination, visibility, and joint actions that strengthen social inclusion and citizen participation.',
    category: 'local',
    meta: 'Nice, France · Local partner',
    illustration: topicIllustrations.volunteer,
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
    illustration: topicIllustrations.countries,
    link: '/focus-areas',
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
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }} alignItems="center" justifyContent="center">
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  fontWeight: 800,
                  py: 1.35,
                  px: 3,
                  borderRadius: 2,
                  boxShadow: '0 4px 14px rgba(0, 35, 149, 0.28)',
                  '&:hover': { boxShadow: '0 6px 20px rgba(0, 35, 149, 0.34)' },
                }}
              >
                Propose a partnership
              </Button>
              <Button component={RouterLink} to="/focus-areas" variant="outlined" size="large" sx={{ fontWeight: 600 }}>
                Focus areas
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Local partnerships — minimal block aligned with International scope */}
      <Box component="section" aria-labelledby="local-collab-heading" sx={{ py: { xs: 5, md: 7 } }}>
        <Container>
          <Stack direction="row" spacing={1.25} alignItems="center" sx={{ mb: 2 }}>
            <Box
              sx={{
                color: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-hidden
            >
              <MapPin size={26} strokeWidth={1.75} />
            </Box>
            <Typography
              id="local-collab-heading"
              variant="h2"
              sx={{ fontSize: { xs: '1.4rem', md: '1.65rem' }, fontWeight: 700 }}
            >
              Local collaborations in{" "}
              <Box component="span" sx={{ whiteSpace: 'nowrap' }}>
                Nice
              </Box>
            </Typography>
          </Stack>
          <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 720, lineHeight: 1.75 }}>
            MITRA FRANCE actively collaborates with local cultural and social institutions to foster community engagement and
            inclusion.
          </Typography>

          <Card variant="outlined" sx={{ borderRadius: 2, overflow: 'hidden' }}>
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Grid container spacing={2}>
                {localNicePartners.map((partner) => (
                  <Grid key={partner.title} size={{ xs: 12, sm: 6, md: 4 }}>
                    <Stack
                      direction="row"
                      spacing={1.5}
                      alignItems="flex-start"
                      sx={{
                        height: '100%',
                        p: 1.75,
                        borderRadius: 1.5,
                        border: '1px solid',
                        borderColor: 'divider',
                        bgcolor: 'background.paper',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                        '&:hover': {
                          borderColor: 'rgba(0, 35, 149, 0.25)',
                          boxShadow: '0 4px 16px rgba(0, 35, 149, 0.07)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          flexShrink: 0,
                          width: 40,
                          height: 40,
                          borderRadius: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: 'rgba(0, 35, 149, 0.06)',
                          color: 'primary.main',
                        }}
                        aria-hidden
                      >
                        <MapPin size={20} strokeWidth={1.75} />
                      </Box>
                      <Box sx={{ minWidth: 0 }}>
                        <Stack direction="row" alignItems="center" flexWrap="wrap" gap={0.75} sx={{ mb: partner.detail ? 0.5 : 0 }}>
                          <Typography variant="subtitle2" fontWeight={700} sx={{ lineHeight: 1.35 }}>
                            {partner.title}
                          </Typography>
                          <Chip label="Nice" size="small" variant="outlined" sx={{ height: 22, fontWeight: 600, fontSize: '0.7rem' }} />
                        </Stack>
                        {partner.detail ? (
                          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.55 }}>
                            {partner.detail}
                          </Typography>
                        ) : null}
                      </Box>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>

          <Stack direction="row" justifyContent="center" sx={{ mt: 3 }}>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ fontWeight: 800, borderRadius: 2, px: 3, py: 1.15, textTransform: 'none' }}
            >
              Propose a partnership
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Institutional & cultural network — academic authority & flagship venues */}
      <Box
        component="section"
        aria-labelledby="institutional-cultural-network-heading"
        sx={{
          py: { xs: 6, md: 8 },
          bgcolor: 'rgba(0, 35, 149, 0.03)',
          borderTop: '1px solid',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            id="institutional-cultural-network-heading"
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '1.85rem' },
              fontWeight: 800,
              letterSpacing: '-0.02em',
              mb: 1.5,
            }}
          >
            Institutional &amp; cultural network
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 4, maxWidth: 800, lineHeight: 1.75, fontSize: { xs: '1rem', md: '1.05rem' } }}>
            These <strong>universities, schools, libraries, and landmark sites</strong> anchor MITRA FRANCE’s legitimacy in{' '}
            <strong>Nice</strong>: they signal strong <strong>local academic and institutional support</strong> for our NGO’s
            educational mission, European cooperation, and community outreach.
          </Typography>

          <Stack spacing={4}>
            <Box component="div">
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                <NetworkIconTile icon={School} />
                <Typography component="h3" variant="h3" sx={{ fontSize: { xs: '1.15rem', md: '1.3rem' }, fontWeight: 800 }}>
                  Institutional &amp; academic partners
                </Typography>
              </Stack>
              <Grid container spacing={2}>
                {institutionalAcademicPartners.map((org) => (
                  <Grid key={org.name} size={{ xs: 12, sm: 6, md: 4 }}>
                    <Stack direction="row" spacing={1.75} alignItems="flex-start" sx={partnerNetworkCardSx}>
                      <NetworkIconTile icon={School} />
                      <Box sx={{ minWidth: 0 }}>
                        <Stack direction="row" alignItems="center" flexWrap="wrap" gap={0.75} sx={{ mb: org.formerName ? 0.75 : 0 }}>
                          <Typography
                            component="span"
                            sx={{ fontWeight: 800, fontSize: '1.0625rem', lineHeight: 1.35, color: 'text.primary' }}
                          >
                            {org.name}
                          </Typography>
                          <Chip label="Institutional" size="small" sx={{ height: 22, fontWeight: 700, fontSize: '0.68rem' }} />
                        </Stack>
                        {org.formerName ? (
                          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                            {org.formerName}
                          </Typography>
                        ) : null}
                      </Box>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box component="div">
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                <NetworkIconTile icon={Library} />
                <Typography component="h3" variant="h3" sx={{ fontSize: { xs: '1.15rem', md: '1.3rem' }, fontWeight: 800 }}>
                  Cultural venues &amp; exhibitions
                </Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, maxWidth: 720, lineHeight: 1.7 }}>
                For our partner <strong>libraries</strong>, programming often centres on{' '}
                <strong>hosting exhibitions and promoting volunteer engagement</strong> in the local community — and on linking
                Nice to wider European voluntary and civic networks.
              </Typography>
              <Grid container spacing={2}>
                {culturalVenuesExhibitions.map((venue) => {
                  const Icon = venue.icon === 'library' ? Library : Landmark;
                  return (
                    <Grid key={venue.name} size={{ xs: 12, md: 4 }}>
                      <Stack direction="row" spacing={1.75} alignItems="flex-start" sx={partnerNetworkCardSx}>
                        <NetworkIconTile icon={Icon} />
                        <Box sx={{ minWidth: 0 }}>
                          <Stack direction="row" alignItems="center" flexWrap="wrap" gap={0.75} sx={{ mb: 1 }}>
                            <Typography
                              component="span"
                              sx={{ fontWeight: 800, fontSize: '1.0625rem', lineHeight: 1.35, color: 'text.primary' }}
                            >
                              {venue.name}
                            </Typography>
                            <Chip
                              label={venue.icon === 'library' ? 'Library' : 'Heritage'}
                              size="small"
                              variant="outlined"
                              sx={{ height: 22, fontWeight: 700, fontSize: '0.68rem' }}
                            />
                          </Stack>
                          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.68 }}>
                            {venue.description}
                          </Typography>
                          {venue.icon === 'library' ? (
                            <Typography variant="caption" color="text.secondary" sx={{ mt: 1.25, display: 'block', lineHeight: 1.5 }}>
                              Hosting exhibitions and promoting volunteer engagement in the local community.
                            </Typography>
                          ) : null}
                        </Box>
                      </Stack>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
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
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.2s, border-color 0.2s',
                  '&:hover': { boxShadow: 2, borderColor: 'primary.main' },
                }}
              >
                <IllustrationCardMedia src={item.illustration} alt="" />
                <CardContent sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
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
                    {item.link === '/focus-areas' ? 'Focus areas' : 'Contact'}
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
            non-formal settings — alongside our headquarters in <strong>Nice, France</strong>. Below are the countries where we
            cooperate through European projects and mobilities.
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
                  <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 0.75 }}>
                    Partner countries — Erasmus+
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, lineHeight: 1.6 }}>
                    Poland, Lithuania, Latvia, Estonia, Bulgaria, Romania, Turkey, Italy, and Spain.
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {erasmusPartnerCountries.map((country) => (
                      <Chip key={country} label={country} variant="outlined" size="small" sx={{ borderRadius: 1, fontWeight: 600 }} />
                    ))}
                  </Box>
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block', lineHeight: 1.5 }}>
                    Exact consortium partners depend on each project or mobility; contact us for details tied to a specific
                    initiative.
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
              sx={{ mt: 1, px: 4, py: 1.15, fontWeight: 800, borderRadius: 2, textTransform: 'none' }}
            >
              Propose a partnership
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
