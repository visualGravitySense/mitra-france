import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { useTheme } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RadioIcon from '@mui/icons-material/Radio';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link as RouterLink } from 'react-router-dom';
import { getImagePath } from '../utils/imagePath';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <Link component={RouterLink} to="/" color="text.secondary">
        MITRA FRANCE
      </Link>
      {' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const theme = useTheme();
  
  // Select logo based on theme mode
  // Dark mode uses light logo (light logo on dark background)
  // Light mode uses dark logo (dark logo on light background)
  const logoPath = theme.palette.mode === 'dark' 
    ? '/mit-fr-light-1.svg' 
    : '/mit-fr-dark-1.svg';
  
  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, sm: 10 },
        pb: { xs: 5, sm: 6 },
        background:
          'radial-gradient(circle at 15% 20%, rgba(0, 35, 149, 0.06) 0%, transparent 55%), radial-gradient(circle at 85% 20%, rgba(237, 41, 57, 0.05) 0%, transparent 55%), linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250, 248, 255, 0.95) 100%)',
        borderTop: '1px solid',
        borderColor: 'divider',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${getImagePath('/photos/571419367_1143811194593552_6930038688628840775_n.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.06,
          filter: 'saturate(1.05) brightness(1.1)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 7 },
          textAlign: { xs: 'left', md: 'left' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            width: '100%',
            justifyContent: 'space-between',
            gap: { xs: 4, sm: 3, md: 4 },
          }}
        >
          {/* Brand / trust */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2.5,
              minWidth: { xs: '100%', sm: '44%' },
              pr: { md: 2 },
            }}
          >
            <Box sx={{ width: { xs: '100%', sm: '92%', md: '80%' } }}>
              <Box
                component="img"
                src={logoPath}
                alt="MITRA FRANCE"
                sx={{
                  height: { xs: 22, sm: 26 },
                  width: 'auto',
                  mb: 1.5,
                  maxWidth: '100%',
                }}
              />
              <Typography
                variant="body1"
                sx={{ color: 'text.primary', mb: 1.5, fontWeight: 600, lineHeight: 1.7 }}
              >
                Empowering Communities Through Education, Media & Culture
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Real people. Real projects. Real impact — across France and Europe.
              </Typography>
            </Box>

            <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
              <Chip
                size="small"
                icon={<LocationOnIcon />}
                label="Nice, France"
                sx={{
                  fontWeight: 700,
                  borderRadius: 999,
                  backgroundColor: 'rgba(0, 35, 149, 0.06)',
                  color: 'primary.main',
                  '& .MuiChip-icon': { color: 'primary.main' },
                }}
              />
              <Chip
                size="small"
                label="Erasmus+ projects"
                sx={{
                  fontWeight: 700,
                  borderRadius: 999,
                  backgroundColor: 'rgba(237, 41, 57, 0.06)',
                  color: 'error.main',
                }}
              />
              <Chip
                size="small"
                label="Community-led"
                sx={{
                  fontWeight: 700,
                  borderRadius: 999,
                  backgroundColor: 'rgba(46, 125, 50, 0.06)',
                  color: 'success.main',
                }}
              />
            </Stack>

            {/* Mini gallery for trust (real photos) */}
            <Box
              sx={{
                p: 2,
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'divider',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(10px)',
                maxWidth: { xs: '100%', sm: '92%', md: '80%' },
              }}
            >
              <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', display: 'block', mb: 1 }}>
                People & moments from our community
              </Typography>
              <Stack direction="row" alignItems="center" spacing={2} useFlexGap sx={{ flexWrap: 'wrap' }}>
                <AvatarGroup
                  max={6}
                  sx={{
                    '& .MuiAvatar-root': {
                      border: '3px solid white',
                      boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
                    },
                  }}
                >
                  <Avatar src="/photos/571419367_1143811194593552_6930038688628840775_n.jpg" alt="Community" />
                  <Avatar src="/photos/572890197_1142845724690099_2859850866106109617_n.jpg" alt="Workshop" />
                  <Avatar src="/photos/583924019_1157903166517688_8756873269993443102_n.jpg" alt="Event" />
                  <Avatar src="/photos/584326681_1157904053184266_2071216266526493174_n.jpg" alt="Project" />
                </AvatarGroup>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  Join events, workshops, and exchange programs — and meet people like you.
                </Typography>
              </Stack>
            </Box>
          </Box>

          {/* Link columns */}
          {(
            [
              {
                title: 'Pages',
                links: [
                  { to: '/about', label: 'About Us' },
                  { to: '/focus-areas', label: 'Focus Areas' },
                  { to: '/intercultural-education', label: 'Intercultural Education' },
                  { to: '/courses', label: 'Courses' },
                  { to: '/projects', label: 'Projects' },
                  { to: '/team', label: 'Team' },
                ],
              },
              {
                title: 'Resources',
                links: [
                  { to: '/partners', label: 'Partners' },
                  { to: '/events', label: 'Events' },
                  { to: '/gallery', label: 'Gallery' },
                  { to: '/contact', label: 'Contact' },
                ],
              },
              {
                title: 'Contact',
                links: [
                  { href: 'mailto:mitra.france@gmail.com', label: 'Email' },
                  { href: 'tel:+33641092395', label: 'Phone' },
                ],
                extra: <Typography variant="body2" color="text.secondary">Nice, France</Typography>,
              },
            ] as Array<{
              title: string;
              links: Array<{ to?: string; href?: string; label: string }>;
              extra?: React.ReactNode;
            }>
          ).map((col) => (
            <Box
              key={col.title}
              sx={{
                display: { xs: 'none', sm: 'flex' },
                flexDirection: 'column',
                gap: 1,
                minWidth: { sm: '140px', md: '180px' },
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 800, mb: 0.5 }}>
                {col.title}
              </Typography>
              {col.links.map((l) =>
                'to' in l ? (
                  <Link
                    key={l.label}
                    component={RouterLink}
                    to={l.to}
                    color="text.secondary"
                    variant="body2"
                    sx={{
                      textDecoration: 'none',
                      width: 'fit-content',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        color: 'primary.main',
                        transform: 'translateX(2px)',
                      },
                    }}
                  >
                    {l.label}
                  </Link>
                ) : (
                  <Link
                    key={l.label}
                    href={l.href}
                    color="text.secondary"
                    variant="body2"
                    sx={{
                      textDecoration: 'none',
                      width: 'fit-content',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        color: 'primary.main',
                        transform: 'translateX(2px)',
                      },
                    }}
                  >
                    {l.label}
                  </Link>
                ),
              )}
              {col.extra ?? null}
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            pt: { xs: 4, sm: 6 },
            width: '100%',
            borderTop: '1px solid',
            borderColor: 'divider',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'center', sm: 'flex-start' },
            gap: 2,
          }}
        >
          <div>
            <Copyright />
          </div>
          <Stack direction="row" spacing={1} useFlexGap sx={{ justifyContent: 'center', color: 'text.secondary' }}>
            {[
              { href: 'https://www.facebook.com', label: 'Facebook', icon: <FacebookIcon /> },
              { href: 'https://www.youtube.com', label: 'YouTube', icon: <YouTubeIcon /> },
              { href: 'https://el-radio.fr', label: 'Web Radio', icon: <RadioIcon /> },
            ].map((s) => (
              <IconButton
                key={s.label}
                color="inherit"
                size="small"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                sx={{
                  alignSelf: 'center',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    color: 'primary.main',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 18px rgba(0, 35, 149, 0.18)',
                    backgroundColor: 'rgba(0, 35, 149, 0.06)',
                  },
                }}
              >
                {s.icon}
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
