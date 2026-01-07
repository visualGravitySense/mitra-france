import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RadioIcon from '@mui/icons-material/Radio';
import ContactMailIcon from '@mui/icons-material/ContactMail';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Container sx={{ py: { xs: 8, sm: 10 } }}>
      <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
        Contact Us
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: 'center', mb: 6, color: 'text.secondary', fontSize: '1.1rem' }}
      >
        Get in touch with us - we'd love to hear from you
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <ContactMailIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                <Typography variant="h5">Send us a Message</Typography>
              </Box>
              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    required
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                  />
                  <TextField
                    required
                    fullWidth
                    type="email"
                    label="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                  />
                  <TextField
                    required
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    variant="outlined"
                  />
                  <TextField
                    required
                    fullWidth
                    multiline
                    rows={6}
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="outlined"
                  />
                  <Button type="submit" variant="contained" color="primary" size="large">
                    Send Message
                  </Button>
                </Stack>
              </form>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack spacing={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <EmailIcon sx={{ color: 'primary.main', mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Email
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <a href="mailto:mitra.france@gmail.com" style={{ color: 'inherit' }}>
                        mitra.france@gmail.com
                      </a>
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <PhoneIcon sx={{ color: 'primary.main', mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Phone
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <a href="tel:+33641092395" style={{ color: 'inherit' }}>
                        +33 6 41 09 23 95
                      </a>
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <LocationOnIcon sx={{ color: 'primary.main', mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Location
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Nice, France
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            <Divider />

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Organization Details
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  <strong>PIC:</strong> 921950857
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>OID:</strong> E10155908
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Follow Us
                </Typography>
                <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                  <Button
                    variant="outlined"
                    startIcon={<FacebookIcon />}
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                  >
                    Facebook
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<YouTubeIcon />}
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                  >
                    YouTube
                  </Button>
                </Stack>
                <Box sx={{ mt: 2 }}>
                  <Button
                    variant="outlined"
                    startIcon={<RadioIcon />}
                    href="https://el-radio.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    fullWidth
                  >
                    el-radio.fr webradio
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
