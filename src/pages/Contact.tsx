import { useState, type ReactNode } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Link from '@mui/material/Link';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RadioIcon from '@mui/icons-material/Radio';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { getImagePath } from '../utils/imagePath';

const MAPS_QUERY = 'https://www.google.com/maps/search/?api=1&query=Nice+France';
const MAP_EMBED_SRC =
  'https://maps.google.com/maps?q=Nice+France&t=&z=13&ie=UTF8&iwloc=&output=embed';

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com', icon: <InstagramIcon sx={{ fontSize: 20 }} /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: <LinkedInIcon sx={{ fontSize: 20 }} /> },
  { label: 'Facebook', href: 'https://www.facebook.com', icon: <FacebookIcon sx={{ fontSize: 20 }} /> },
  { label: 'YouTube', href: 'https://www.youtube.com', icon: <YouTubeIcon sx={{ fontSize: 20 }} /> },
  {
    label: 'el-radio.fr',
    href: 'https://el-radio.fr',
    icon: <RadioIcon sx={{ fontSize: 20 }} />,
  },
] as const;

function ContactRow({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ py: 1.25 }}>
      <Box sx={{ color: 'text.secondary', pt: 0.25, display: 'flex' }}>{icon}</Box>
      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 600, mb: 0.25 }}>
          {title}
        </Typography>
        <Box sx={{ color: 'text.primary' }}>{children}</Box>
      </Box>
    </Stack>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [snack, setSnack] = useState<{ open: boolean; message: string }>({ open: false, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSnack({ open: true, message: 'Thank you! We will get back to you as soon as we can.' });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box>
      <Box
        sx={{
          pt: { xs: 10, md: 12 },
          pb: { xs: 4, md: 5 },
          borderBottom: 1,
          borderColor: 'divider',
          background:
            'linear-gradient(180deg, rgba(0, 35, 149, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ letterSpacing: 1.2, color: 'primary.main', fontWeight: 700 }}>
                MITRA France
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 700, mb: 2, color: '#0b1b3a' }}>
                Contact us
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 480, lineHeight: 1.7 }}>
                One short message is enough. Tell us what you need — we will reply by email.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0, 35, 149, 0.12)',
                  height: { xs: 260, sm: 320 },
                }}
              >
                <Box
                  component="img"
                  src={getImagePath('/illustrations/mitra-image-5.png')}
                  alt="MITRA France team"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: '#0b1b3a' }}>
              Send a message
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Required fields are marked. We read every message.
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                maxWidth: 560,
                p: { xs: 0, sm: 3 },
                borderRadius: 2,
                border: { xs: 'none', sm: '1px solid' },
                borderColor: 'divider',
              }}
            >
              <Stack spacing={2.5}>
                <TextField required fullWidth label="Your name" name="name" value={formData.name} onChange={handleChange} />
                <TextField
                  required
                  fullWidth
                  type="email"
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  required
                  fullWidth
                  multiline
                  minRows={5}
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                <Button type="submit" variant="contained" size="large" sx={{ alignSelf: 'flex-start', px: 4 }}>
                  Send
                </Button>
              </Stack>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#0b1b3a' }}>
              Reach us
            </Typography>
            <Stack divider={<Divider flexItem />} sx={{ mb: 2 }}>
              <ContactRow icon={<LocationOnIcon />} title="Address">
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Box
                    component="img"
                    src={getImagePath('/photos/583741041_1157902773184394_5619801435922057517_n.jpg')}
                    alt=""
                    sx={{
                      width: 88,
                      height: 66,
                      objectFit: 'cover',
                      borderRadius: 1,
                      flexShrink: 0,
                      display: { xs: 'none', sm: 'block' },
                    }}
                  />
                  <Box>
                    <Typography variant="body2">Nice, France</Typography>
                    <Link href={MAPS_QUERY} target="_blank" rel="noopener noreferrer" variant="body2" sx={{ mt: 0.5, display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
                      Open in Google Maps
                      <OpenInNewIcon sx={{ fontSize: 16 }} />
                    </Link>
                  </Box>
                </Stack>
              </ContactRow>
              <ContactRow icon={<PhoneIcon />} title="Phone">
                <Link href="tel:+33641092395" variant="body2">
                  +33 6 41 09 23 95
                </Link>
              </ContactRow>
              <ContactRow icon={<EmailIcon />} title="Email">
                <Link href="mailto:mitra.france@gmail.com" variant="body2">
                  mitra.france@gmail.com
                </Link>
              </ContactRow>
            </Stack>

            <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 600, mb: 1 }}>
              Social
            </Typography>
            <Stack spacing={0.5} sx={{ mb: 3 }}>
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    py: 0.75,
                    color: 'text.primary',
                  }}
                >
                  {item.icon}
                  {item.label}
                  <OpenInNewIcon sx={{ fontSize: 14, color: 'text.secondary', ml: 0.25 }} />
                </Link>
              ))}
            </Stack>

            <Typography variant="body2" color="text.secondary" component="div">
              <strong>PIC:</strong> 921950857
              <br />
              <strong>OID:</strong> E10155908
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'grey.50', py: { xs: 3, md: 4 }, borderTop: 1, borderColor: 'divider' }}>
        <Container>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#0b1b3a' }}>
            Where we are
          </Typography>
          <Box
            sx={{
              borderRadius: 2,
              overflow: 'hidden',
              border: '1px solid',
              borderColor: 'divider',
              height: { xs: 280, md: 360 },
              bgcolor: 'background.paper',
            }}
          >
            <Box
              component="iframe"
              title="Map — Nice, France"
              src={MAP_EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sx={{
                border: 0,
                width: '100%',
                height: '100%',
                display: 'block',
              }}
            />
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1.5 }}>
            Map data © Google.{' '}
            <Link href={MAPS_QUERY} target="_blank" rel="noopener noreferrer">
              View larger map
            </Link>
          </Typography>
        </Container>
      </Box>

      <Snackbar open={snack.open} autoHideDuration={5000} onClose={() => setSnack((s) => ({ ...s, open: false }))} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity="success" onClose={() => setSnack((s) => ({ ...s, open: false }))} variant="filled">
          {snack.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
