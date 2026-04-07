import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import { Camera, GraduationCap, Languages, Radio, Users } from 'lucide-react';
import { notionStyleAvatarUrl } from '../utils/notionAvatarUrl';

const fontStack = '"Inter", system-ui, -apple-system, sans-serif';

/** Outer ring and inner illustration — identical for all four profiles */
const AVATAR_RING_PX = 120;
const AVATAR_IMG_PX = 96;

function SectionIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <Box
      sx={{
        color: 'primary.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 44,
        borderRadius: 1.5,
        bgcolor: 'rgba(0, 35, 149, 0.06)',
        flexShrink: 0,
      }}
      aria-hidden
    >
      <Icon size={22} strokeWidth={1.75} />
    </Box>
  );
}

const impactAreas = [
  'Workshops for Seniors',
  'Youth Training',
  'Media Activism',
  'Digital Literacy',
  'Cultural Outings',
] as const;

type CoreMember = {
  name: string;
  role: string;
  bio: string;
  accent?: 'radio' | 'camera';
};

const coreTeam: CoreMember[] = [
  {
    name: 'Pavel Smulski',
    role: 'Leader & Coordinator',
    bio:
      'Holds a Master’s from Université Côte d’Azur (Nice). A media literacy expert since 2010, he connects research-informed practice with action on the ground as an international project coordinator—steering Erasmus+ and cooperation initiatives across multiple regions.',
  },
  {
    name: 'Karina Tronche',
    role: 'Digital Communication Expert',
    bio:
      'Holds a linguistics degree in Nice. She is expert in bridging language, message, and audience—shaping clear narratives for diverse publics—and leads digital communication outputs from planning through publication.',
  },
  {
    name: 'Louise Papadoperakis',
    role: 'Communications & Content Manager',
    bio:
      'Brings 15 years of professional experience and deep familiarity with European Union projects—funding cycles, reporting, and partner alignment. She stewards MITRA’s voice and channels, including ongoing work with the webradio el-radio.fr.',
    accent: 'radio',
  },
  {
    name: 'Alex Smulski',
    role: 'Methodology Consultant',
    bio:
      'Holds a Master’s from Exeter College (University of Oxford). A professional photographer, he strengthens methodology, documentation, and learning design—particularly alongside migrants, refugees, and other at-risk groups—so impact is visible, ethical, and shared.',
    accent: 'camera',
  },
];

/** Same Notion-style avatars as the About page (`notionStyleAvatarUrl` + full name as seed). */
function TeamAvatarIllustration({ name }: { name: string }) {
  return (
    <Box
      sx={{
        width: AVATAR_RING_PX,
        height: AVATAR_RING_PX,
        borderRadius: '50%',
        bgcolor: 'rgba(0, 35, 149, 0.07)',
        backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 40%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        border: '1px solid',
        borderColor: 'rgba(0, 35, 149, 0.12)',
        boxSizing: 'border-box',
      }}
    >
      <Box
        component="img"
        src={notionStyleAvatarUrl(name)}
        alt=""
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        sx={{ width: AVATAR_IMG_PX, height: AVATAR_IMG_PX, objectFit: 'contain', display: 'block' }}
      />
    </Box>
  );
}

function MemberAccent({ accent }: { accent: 'radio' | 'camera' }) {
  if (accent === 'radio') {
    return (
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1.25 }}>
        <Box sx={{ color: 'primary.main', display: 'flex', flexShrink: 0 }} aria-hidden>
          <Radio size={18} strokeWidth={1.75} />
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>
          Webradio:{' '}
          <Link href="https://el-radio.fr" target="_blank" rel="noopener noreferrer" color="primary" fontWeight={600}>
            el-radio.fr
          </Link>
        </Typography>
      </Stack>
    );
  }
  return (
    <Stack direction="row" spacing={1} alignItems="flex-start" sx={{ mt: 1.25 }}>
      <Box sx={{ color: 'primary.main', display: 'flex', flexShrink: 0, mt: 0.25 }} aria-hidden>
        <Camera size={18} strokeWidth={1.75} />
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>
        Photography and visual documentation for programmes, inclusion work, and outreach.
      </Typography>
    </Stack>
  );
}

export default function Team() {
  return (
    <Box
      component="main"
      sx={{
        fontFamily: fontStack,
        bgcolor: '#ffffff',
        color: 'text.primary',
      }}
    >
      {/* Leadership & community */}
      <Box
        component="section"
        aria-labelledby="team-hero-title"
        sx={{ pt: { xs: 11, sm: 13, md: 15 }, pb: { xs: 5, md: 7 } }}
      >
        <Container maxWidth="md">
          <Stack spacing={3}>
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={1.5} flexWrap="wrap" useFlexGap>
              <SectionIcon icon={Users} />
              <Typography
                id="team-hero-title"
                variant="h1"
                sx={{
                  fontFamily: fontStack,
                  fontSize: { xs: '1.65rem', sm: '1.9rem', md: '2.15rem' },
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  textAlign: { xs: 'center', sm: 'left' },
                }}
              >
                Our Team &amp; Network
              </Typography>
            </Stack>

            <Typography
              sx={{
                fontFamily: fontStack,
                fontSize: { xs: '1.02rem', md: '1.06rem' },
                lineHeight: 1.75,
                color: 'text.secondary',
                textAlign: { xs: 'center', md: 'left' },
                maxWidth: 720,
                mx: { xs: 'auto', md: 0 },
              }}
            >
              MITRA FRANCE is led by a three-member board and supported by over 50 active volunteers. We bring together
              professionals from diverse backgrounds: artists, journalists, programmers, and educators.
            </Typography>

            <Divider sx={{ borderColor: 'rgba(0,0,0,0.08)' }} />

            <Typography
              sx={{
                fontFamily: fontStack,
                fontSize: { xs: '0.98rem', md: '1.02rem' },
                lineHeight: 1.75,
                color: 'text.secondary',
              }}
            >
              In Nice we work alongside Chechen-, Russian-, and Arabic-speaking community leaders to strengthen inclusion,
              mutual understanding, and access to learning and cultural life.
            </Typography>

            <Box
              sx={{
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'grey.50',
                px: { xs: 2, sm: 2.5 },
                py: { xs: 2, sm: 2.25 },
              }}
            >
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} alignItems={{ xs: 'flex-start', sm: 'center' }}>
                <SectionIcon icon={Languages} />
                <Box>
                  <Typography fontWeight={700} sx={{ fontFamily: fontStack, mb: 0.5 }}>
                    Languages &amp; reach
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, fontFamily: fontStack }}>
                    Our team works routinely in French and English, with Russian, Arabic, Hebrew, and additional languages
                    in the mix—so we can accompany diverse communities with clarity and respect, locally and internationally.
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Core team */}
      <Box component="section" aria-labelledby="core-team-title" sx={{ py: { xs: 6, md: 8 }, bgcolor: '#fafafa' }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            sx={{ mb: 1 }}
          >
            <SectionIcon icon={GraduationCap} />
            <Box>
              <Typography
                id="core-team-title"
                variant="h2"
                sx={{
                  fontFamily: fontStack,
                  fontSize: { xs: '1.35rem', md: '1.55rem' },
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                }}
              >
                Core team — the experts
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontFamily: fontStack, mt: 0.5, maxWidth: 640 }}>
                Expert-led NGO with a strong local footprint in Nice and trusted partnerships across Europe and beyond.
              </Typography>
            </Box>
          </Stack>

          <Divider sx={{ my: 3, borderColor: 'rgba(0,0,0,0.08)' }} />

          <Grid container spacing={{ xs: 2.5, md: 3 }}>
            {coreTeam.map((member) => (
              <Grid key={member.name} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: '#fff',
                    boxShadow: 'none',
                    transition: 'box-shadow 0.22s ease, border-color 0.22s ease, transform 0.22s ease',
                    '&:hover': {
                      borderColor: 'rgba(0, 35, 149, 0.28)',
                      boxShadow: '0 10px 28px rgba(0, 35, 149, 0.1)',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 2.25, sm: 2.5 } }}>
                    <Stack spacing={2} alignItems="center">
                      <TeamAvatarIllustration name={member.name} />
                      <Box sx={{ width: '100%', textAlign: 'center' }}>
                        <Typography
                          component="h3"
                          sx={{ fontFamily: fontStack, fontWeight: 700, fontSize: '1.05rem', mb: 0.35 }}
                        >
                          {member.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="primary"
                          fontWeight={600}
                          sx={{ fontFamily: fontStack, mb: 1.25 }}
                        >
                          {member.role}
                        </Typography>
                        <Divider sx={{ borderColor: 'rgba(0,0,0,0.06)', mb: 1.25 }} />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            fontFamily: fontStack,
                            lineHeight: 1.72,
                            textAlign: 'left',
                          }}
                        >
                          {member.bio}
                        </Typography>
                        {member.accent ? (
                          <Box sx={{ mt: 0.5, '& .MuiTypography-root': { textAlign: 'left' } }}>
                            <MemberAccent accent={member.accent} />
                          </Box>
                        ) : null}
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Impact areas */}
      <Box component="section" aria-labelledby="impact-areas-title" sx={{ py: { xs: 5, md: 6 } }}>
        <Container maxWidth="lg">
          <Typography
            id="impact-areas-title"
            variant="h2"
            sx={{
              fontFamily: fontStack,
              fontSize: { xs: '1.15rem', md: '1.3rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Our impact areas
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontFamily: fontStack, mb: 2, maxWidth: 560 }}>
            What our staff and volunteers deliver week to week — concrete formats that translate values into practice.
          </Typography>
          <Stack
            direction="row"
            component="ul"
            flexWrap="wrap"
            useFlexGap
            spacing={1}
            sx={{ listStyle: 'none', p: 0, m: 0, gap: 1 }}
          >
            {impactAreas.map((label) => (
              <Box component="li" key={label}>
                <Chip
                  label={label}
                  size="small"
                  variant="outlined"
                  sx={{
                    fontFamily: fontStack,
                    fontWeight: 600,
                    fontSize: '0.8125rem',
                    height: 32,
                    borderRadius: 1.5,
                    borderColor: 'rgba(0, 35, 149, 0.2)',
                    bgcolor: 'rgba(0, 35, 149, 0.03)',
                  }}
                />
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        component="aside"
        sx={{
          py: { xs: 6, md: 8 },
          borderTop: '1px solid',
          borderColor: 'divider',
          bgcolor: '#fafafa',
        }}
      >
        <Container maxWidth="sm">
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography variant="h5" fontWeight={700} sx={{ fontFamily: fontStack }}>
              Volunteer or collaborate
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: fontStack, lineHeight: 1.7 }}>
              Tell us how you would like to contribute — from workshops to communications or field support — and we will
              connect you from Nice.
            </Typography>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 3.5, py: 1.25, fontWeight: 700, borderRadius: 2, fontFamily: fontStack, textTransform: 'none' }}
            >
              Contact the team
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
