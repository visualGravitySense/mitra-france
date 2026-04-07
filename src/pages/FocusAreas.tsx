import { useEffect, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Link as RouterLink } from 'react-router-dom';
import { getImagePath } from '../utils/imagePath';
import { topicIllustrations } from '../utils/topicIllustrations';

type PanelKey = 'education' | 'media' | 'culture' | 'youth';

interface FocusPanel {
  key: PanelKey;
  label: string;
  /** Hash segments that select this tab (for deep links from other pages) */
  hashIds: string[];
  intro: string;
  bullets: string[];
  image: string;
  learnMoreHref: string;
}

const panels: FocusPanel[] = [
  {
    key: 'education',
    label: 'Education',
    hashIds: ['intercultural', 'adult-education', 'education'],
    intro:
      'Inclusive schooling, intercultural dialogue, and lifelong learning for adults — so everyone can take part, not only the “usual” learners.',
    bullets: [
      'Inclusive classrooms and non-formal groups that welcome mixed backgrounds',
      'Languages, citizenship, and dialogue formats that reduce prejudice',
      'Adult pathways: skills, employability, and confidence for everyday life',
    ],
    image: topicIllustrations.interculturalInclusion,
    learnMoreHref: '/focus-areas#intercultural',
  },
  {
    key: 'media',
    label: 'Media',
    hashIds: ['media-arts', 'media'],
    intro:
      'Media literacy, arts, and creative tools — critical thinking about what we see online and offline, plus space to create.',
    bullets: [
      'Fake news, algorithms, and ethics discussed in plain language',
      'Workshops in image, sound, and storytelling',
      'Creative tech used as expression, not only consumption',
    ],
    image: topicIllustrations.mediaArts,
    learnMoreHref: '/media-arts-education',
  },
  {
    key: 'culture',
    label: 'Culture',
    hashIds: ['volunteering', 'culture'],
    intro:
      'Volunteering and civic energy: people meeting real needs while building trust in the neighbourhood and beyond.',
    bullets: [
      'Structured volunteering with mentoring and feedback',
      'Community events co-loaded with local partners',
      'Room for newcomers, seniors, and mixed-age teams',
    ],
    image: topicIllustrations.volunteer,
    learnMoreHref: '/focus-areas#culture',
  },
  {
    key: 'youth',
    label: 'Youth',
    hashIds: ['digital', 'youth'],
    intro:
      'Digital confidence for young people, seniors, migrants, and others often left behind — practical, not theoretical.',
    bullets: [
      'Safety, devices, and daily apps explained step by step',
      'Tracks for youth / NEETs alongside seniors and families',
      'Pathways toward jobs, studies, and active citizenship online',
    ],
    image: topicIllustrations.digitalInclusion,
    learnMoreHref: '/contact',
  },
];

function tabIndexFromHash(hash: string): number {
  const key = hash.replace(/^#/, '').toLowerCase();
  const i = panels.findIndex((p) => p.hashIds.includes(key));
  return i >= 0 ? i : 0;
}

export default function FocusAreas() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [tab, setTab] = useState(0);

  useEffect(() => {
    setTab(tabIndexFromHash(window.location.hash));
    const onHash = () => setTab(tabIndexFromHash(window.location.hash));
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const tabList = useMemo(
    () =>
      panels.map((p, i) => (
        <Tab
          key={p.key}
          label={p.label}
          id={`focus-tab-${i}`}
          aria-controls={`focus-panel-${i}`}
          sx={{ textTransform: 'none', fontWeight: 600, alignItems: isMdUp ? 'flex-start' : 'center', textAlign: isMdUp ? 'left' : 'center' }}
        />
      )),
    [isMdUp],
  );

  const handleTabChange = (_: React.SyntheticEvent, value: number) => {
    setTab(value);
    const p = panels[value];
    if (p.hashIds[0]) {
      window.history.replaceState(null, '', `#${p.hashIds[0]}`);
    }
  };

  return (
    <Box component="main">
      {/* Короткий hero — без цветных плашек */}
      <Box
        sx={{
          pt: { xs: 12, sm: 14, md: 16 },
          pb: { xs: 4, md: 5 },
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 800, mb: 1.5 }}>
            Our key focus areas
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 640, lineHeight: 1.75 }}>
            One page, four lenses — pick a strand to see how we work. No repeated templates, just what matters for each
            audience.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={0} sx={{ flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
          <Grid
            size={{ xs: 12, md: 3 }}
            sx={{
              borderRight: { md: isMdUp ? '1px solid' : 'none' },
              borderColor: 'divider',
            }}
          >
            <Tabs
              orientation={isMdUp ? 'vertical' : 'horizontal'}
              variant={isMdUp ? 'standard' : 'scrollable'}
              scrollButtons={isMdUp ? false : 'auto'}
              value={tab}
              onChange={handleTabChange}
              aria-label="Focus areas"
              sx={{
                ...(isMdUp
                  ? {
                      '& .MuiTabs-indicator': { left: 0, width: 3 },
                    }
                  : {
                      borderBottom: 1,
                      borderColor: 'divider',
                      mb: 2,
                    }),
              }}
            >
              {tabList}
            </Tabs>
          </Grid>
          <Grid size={{ xs: 12, md: 9 }} sx={{ pl: { md: 4 }, pt: { xs: 2, md: 0 } }}>
            <Box role="tabpanel" id={`focus-panel-${tab}`} aria-labelledby={`focus-tab-${tab}`}>
              <Grid container spacing={3} alignItems="flex-start">
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                    sx={{
                      width: '100%',
                      borderRadius: 2,
                      maxHeight: 320,
                      minHeight: { xs: 200, md: 240 },
                      bgcolor: 'rgba(0, 35, 149, 0.06)',
                      border: '1px solid',
                      borderColor: 'divider',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      p: { xs: 1, sm: 1.5 },
                      boxSizing: 'border-box',
                    }}
                  >
                    <Box
                      component="img"
                      src={getImagePath(panels[tab].image)}
                      alt={`Illustration — ${panels[tab].label} focus area`}
                      sx={{
                        width: '100%',
                        height: '100%',
                        maxHeight: 300,
                        objectFit: 'contain',
                        objectPosition: 'center',
                        display: 'block',
                      }}
                    />
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography variant="overline" color="primary" sx={{ fontWeight: 700, letterSpacing: 0.5 }}>
                    {panels[tab].label}
                  </Typography>
                  <Typography variant="h2" sx={{ fontSize: { xs: '1.35rem', md: '1.5rem' }, fontWeight: 700, mt: 0.5, mb: 2 }}>
                    What we do here
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.75, mb: 2 }}>
                    {panels[tab].intro}
                  </Typography>
                  <Box
                    component="ul"
                    sx={{ m: 0, pl: 2.5, color: 'text.secondary', '& li': { mb: 1, lineHeight: 1.65 } }}
                  >
                    {panels[tab].bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </Box>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    <Box
                      component={RouterLink}
                      to={panels[tab].learnMoreHref}
                      color="primary"
                      sx={{ fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                    >
                      Related page →
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Доверие — одна строка + цифра */}
      <Box sx={{ bgcolor: 'action.hover', py: { xs: 4, md: 5 } }}>
        <Container maxWidth="md">
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems={{ xs: 'flex-start', sm: 'center' }}>
            <FormatQuoteIcon color="primary" sx={{ fontSize: 36, flexShrink: 0, opacity: 0.85 }} />
            <Box>
              <Typography sx={{ fontStyle: 'italic', lineHeight: 1.7, mb: 1 }}>
                Participants often say the mix of European projects and Nice-based partners makes the learning feel both
                serious and close to home.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>1000+ people</strong> engaged across programmes — schools, associations, and open workshops.
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Один компактный финальный CTA */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 5 } }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          sx={{
            py: 2,
            px: { xs: 0, sm: 2 },
            borderTop: '1px solid',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography variant="body1" sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            Ready to join a workshop, propose a collaboration, or ask which strand fits you?
          </Typography>
          <Button component={RouterLink} to="/contact" variant="contained" endIcon={<ArrowForwardIcon />} sx={{ flexShrink: 0 }}>
            Contact us
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
