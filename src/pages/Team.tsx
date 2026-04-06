import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link as RouterLink } from 'react-router-dom';
import { getImagePath } from '../utils/imagePath';

type TeamMember = {
  name: string;
  role: string;
  /** Short intro: 2–3 sentences on the page */
  teaser: string;
  /** Full bio inside dialog */
  bio: string;
  quote: string;
  expertise: string[];
  portraitPath: string;
  leadership?: boolean;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Pavel Smulski',
    role: 'Leader & Founder',
    leadership: true,
    teaser:
      'Founder of MITRA France with 10+ years in youth work and European education projects. He steers our strategy and Erasmus+ partnerships.',
    bio: 'Founder and leader of MITRA FRANCE, driving our mission and vision forward with over 10 years of experience in youth work and education.',
    quote: 'I believe in the power of digital education to transform communities across Europe.',
    expertise: ['Leadership', 'Strategic Planning', 'Erasmus+ Projects'],
    portraitPath: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
  },
  {
    name: 'Karina Tronche',
    role: 'Core Team',
    leadership: true,
    teaser:
      'Coordinates educational programmes and projects, with a focus on adult education and digital skills.',
    bio: 'Key contributor to our educational programs and project management, specializing in adult education and digital skills training.',
    quote: 'Education is the bridge that connects diverse communities and empowers individuals.',
    expertise: ['Project Management', 'Adult Education', 'Digital Skills'],
    portraitPath: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
  },
  {
    name: 'Louise Papadoperakis',
    role: 'Core Team',
    teaser: 'Intercultural education and community engagement — building bridges between diverse groups.',
    bio: 'Specialist in intercultural education and community engagement, passionate about building bridges between diverse communities.',
    quote: 'Building bridges between cultures is the foundation of a stronger Europe.',
    expertise: ['Intercultural Education', 'Community Engagement', 'Cultural Programs'],
    portraitPath: '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
  },
  {
    name: 'Alex Smulski',
    role: 'Core Team',
    teaser: 'Digital literacy and media education — designing hands-on learning with technology.',
    bio: 'Expert in digital literacy and media education programs, developing innovative approaches to technology-based learning.',
    quote: 'Technology opens doors to learning that were never possible before.',
    expertise: ['Digital Literacy', 'Media Education', 'Technology Training'],
    portraitPath: '/photos/583741041_1157902773184394_5619801435922057517_n.jpg',
  },
];

const atmospherePhotos = [
  { src: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg', caption: 'Workshop' },
  { src: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg', caption: 'Training' },
  { src: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg', caption: 'Team session' },
  { src: '/photos/571419367_1143811194593552_6930038688628840775_n.jpg', caption: 'Community' },
  { src: '/photos/583489432_1157911303183541_1292926580526900497_n.jpg', caption: 'Project work' },
];

export default function Team() {
  const [dialogMember, setDialogMember] = useState<TeamMember | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const leaders = teamMembers.filter((m) => m.leadership);
  const carouselLen = atmospherePhotos.length;

  const goCarousel = (delta: number) => {
    setCarouselIndex((i) => (i + delta + carouselLen) % carouselLen);
  };

  return (
    <Box component="main">
      {/* Header — no stat blocks, no photo strip */}
      <Box sx={{ pt: { xs: 12, sm: 14, md: 16 }, pb: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '1.85rem', md: '2.35rem' },
              fontWeight: 800,
              textAlign: 'center',
              mb: 2,
            }}
          >
            The people behind MITRA France
          </Typography>
          <Typography color="text.secondary" sx={{ textAlign: 'center', lineHeight: 1.75, maxWidth: 560, mx: 'auto' }}>
            A small core team and many collaborators in Nice and across Europe. Tap a photo to read more.
          </Typography>
        </Container>
      </Box>

      {/* Leadership — 1–2 compact rows */}
      <Container sx={{ pb: { xs: 5, md: 7 } }}>
        <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 1, display: 'block', mb: 2 }}>
          Leadership
        </Typography>
        <Grid container spacing={3}>
          {leaders.map((member) => (
            <Grid key={member.name} size={{ xs: 12, md: 6 }}>
              <Card variant="outlined" sx={{ borderRadius: 2, height: '100%' }}>
                <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} alignItems={{ xs: 'center', sm: 'flex-start' }}>
                    <Avatar
                      src={getImagePath(member.portraitPath)}
                      alt={member.name}
                      sx={{ width: 96, height: 96 }}
                    />
                    <Stack spacing={1} sx={{ flex: 1, textAlign: { xs: 'center', sm: 'left' } }}>
                      <Box>
                        <Typography variant="subtitle1" fontWeight={800}>
                          {member.name}
                        </Typography>
                        <Typography variant="body2" color="primary.main" fontWeight={600}>
                          {member.role}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', lineHeight: 1.6 }}>
                        “{member.quote}”
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                        {member.teaser}
                      </Typography>
                      <Button size="small" variant="text" onClick={() => setDialogMember(member)} sx={{ alignSelf: { xs: 'center', sm: 'flex-start' } }}>
                        Read full bio
                      </Button>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Full team grid — avatars only */}
      <Box sx={{ bgcolor: 'action.hover', py: { xs: 6, md: 8 } }}>
        <Container>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.6rem' }, fontWeight: 700, mb: 3 }}>
            Core team
          </Typography>
          <Grid container spacing={2}>
            {teamMembers.map((member) => (
              <Grid key={member.name} size={{ xs: 6, sm: 4, md: 3 }}>
                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: 2,
                    cursor: 'pointer',
                    transition: 'box-shadow 0.2s, border-color 0.2s',
                    '&:hover': { boxShadow: 2, borderColor: 'primary.main' },
                  }}
                  onClick={() => setDialogMember(member)}
                >
                  <CardContent sx={{ py: 2.5, px: 2, textAlign: 'center' }}>
                    <Avatar
                      src={getImagePath(member.portraitPath)}
                      alt={member.name}
                      sx={{ width: 72, height: 72, mx: 'auto', mb: 1.5 }}
                    />
                    <Typography variant="body2" fontWeight={700}>
                      {member.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" display="block">
                      {member.role}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Atmosphere carousel */}
      <Container sx={{ py: { xs: 6, md: 8 } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.6rem' }, fontWeight: 700, mb: 0.5 }}>
          Moments from our work
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          A few snapshots — not a full gallery.
        </Typography>
        <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden', maxWidth: 720, mx: 'auto' }}>
          <Box
            component="img"
            src={getImagePath(atmospherePhotos[carouselIndex].src)}
            alt={atmospherePhotos[carouselIndex].caption}
            sx={{ width: '100%', height: { xs: 220, sm: 320 }, objectFit: 'cover', display: 'block' }}
          />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              px: 0.5,
              pointerEvents: 'none',
              '& .MuiIconButton-root': { pointerEvents: 'auto' },
            }}
          >
            <IconButton onClick={() => goCarousel(-1)} aria-label="Previous photo" sx={{ bgcolor: 'background.paper', opacity: 0.92 }}>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton onClick={() => goCarousel(1)} aria-label="Next photo" sx={{ bgcolor: 'background.paper', opacity: 0.92 }}>
              <ChevronRightIcon />
            </IconButton>
          </Stack>
          <Box sx={{ py: 1.5, textAlign: 'center', bgcolor: 'background.paper' }}>
            <Typography variant="body2" color="text.secondary">
              {atmospherePhotos[carouselIndex].caption} ({carouselIndex + 1} / {carouselLen})
            </Typography>
            <Stack direction="row" spacing={0.75} justifyContent="center" sx={{ mt: 1 }}>
              {atmospherePhotos.map((_, i) => (
                <Box
                  key={i}
                  onClick={() => setCarouselIndex(i)}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: i === carouselIndex ? 'primary.main' : 'action.disabledBackground',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>

      {/* Bio dialog */}
      <Dialog open={dialogMember !== null} onClose={() => setDialogMember(null)} maxWidth="sm" fullWidth scroll="body">
        {dialogMember && (
          <>
            <DialogTitle sx={{ pr: 6 }}>
              <Typography component="span" variant="h6" fontWeight={800}>
                {dialogMember.name}
              </Typography>
              <Typography variant="body2" color="primary" fontWeight={600}>
                {dialogMember.role}
              </Typography>
              <IconButton aria-label="Close" onClick={() => setDialogMember(null)} sx={{ position: 'absolute', right: 8, top: 8 }}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 2 }}>
                <Avatar src={getImagePath(dialogMember.portraitPath)} alt="" sx={{ width: 100, height: 100 }} />
                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', lineHeight: 1.7 }}>
                  “{dialogMember.quote}”
                </Typography>
              </Stack>
              <Typography variant="body2" sx={{ lineHeight: 1.8, mb: 2 }}>
                {dialogMember.bio}
              </Typography>
              <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1 }}>
                Focus areas
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={0.75}>
                {dialogMember.expertise.map((tag) => (
                  <Chip key={tag} label={tag} size="small" variant="outlined" />
                ))}
              </Stack>
            </DialogContent>
          </>
        )}
      </Dialog>

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
              Want to work or volunteer with us?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tell us what you do and how you can contribute — we will follow up from Nice.
            </Typography>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 4, py: 1.35, fontWeight: 700, borderRadius: 2 }}
            >
              Become part of the team
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
