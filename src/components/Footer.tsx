import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RadioIcon from '@mui/icons-material/Radio';
import { Link as RouterLink } from 'react-router-dom';

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
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Box
              component="img"
              src="/mitra-fr-logo-menu-1.svg"
              alt="MITRA FRANCE"
              sx={{
                height: { xs: 20, sm: 25 },
                width: 'auto',
                mb: 2,
                maxWidth: '100%',
              }}
            />
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              Empowering Communities Through Education, Media & Culture
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            Pages
          </Typography>
          <Link component={RouterLink} to="/about" color="text.secondary" variant="body2">
            About Us
          </Link>
          <Link component={RouterLink} to="/focus-areas" color="text.secondary" variant="body2">
            Focus Areas
          </Link>
          <Link component={RouterLink} to="/intercultural-education" color="text.secondary" variant="body2">
            Intercultural Education
          </Link>
          <Link component={RouterLink} to="/courses" color="text.secondary" variant="body2">
            Courses
          </Link>
          <Link component={RouterLink} to="/projects" color="text.secondary" variant="body2">
            Projects
          </Link>
          <Link component={RouterLink} to="/team" color="text.secondary" variant="body2">
            Team
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            Resources
          </Typography>
          <Link component={RouterLink} to="/partners" color="text.secondary" variant="body2">
            Partners
          </Link>
          <Link component={RouterLink} to="/events" color="text.secondary" variant="body2">
            Events
          </Link>
          <Link component={RouterLink} to="/gallery" color="text.secondary" variant="body2">
            Gallery
          </Link>
          <Link component={RouterLink} to="/contact" color="text.secondary" variant="body2">
            Contact
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            Contact
          </Typography>
          <Link href="mailto:mitra.france@gmail.com" color="text.secondary" variant="body2">
            Email
          </Link>
          <Link href="tel:+33641092395" color="text.secondary" variant="body2">
            Phone
          </Link>
          <Typography variant="body2" color="text.secondary">
            Nice, France
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
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
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: 'center', color: 'text.secondary' }}
        >
          <IconButton
            color="inherit"
            size="small"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            sx={{ alignSelf: 'center' }}
          >
            <YouTubeIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://el-radio.fr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Web Radio"
            sx={{ alignSelf: 'center' }}
          >
            <RadioIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
