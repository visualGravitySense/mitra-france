import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import PersonIcon from '@mui/icons-material/Person';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { Link as RouterLink } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Pavel Smulski',
    role: 'Leader',
    description: 'Founder and leader of MITRA FRANCE, driving our mission and vision forward.',
  },
  {
    name: 'Karina Tronche',
    role: 'Core Team Member',
    description: 'Key contributor to our educational programs and project management.',
  },
  {
    name: 'Louise Papadoperakis',
    role: 'Core Team Member',
    description: 'Specialist in intercultural education and community engagement.',
  },
  {
    name: 'Alex Smulski',
    role: 'Core Team Member',
    description: 'Expert in digital literacy and media education programs.',
  },
];

export default function Team() {
  return (
    <Container sx={{ py: { xs: 8, sm: 10 } }}>
      <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
        Our Team
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: 'center', mb: 6, color: 'text.secondary', fontSize: '1.1rem' }}
      >
        Meet the dedicated individuals who make MITRA FRANCE's mission possible
      </Typography>

      <Box sx={{ mb: 8 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <PersonIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
          <Typography variant="h4">Leadership</Typography>
        </Box>
        <Card>
          <CardContent sx={{ p: 4 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} sm={4}>
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    mx: 'auto',
                    bgcolor: 'primary.main',
                    fontSize: '3rem',
                  }}
                >
                  PS
                </Avatar>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography variant="h5" gutterBottom>
                  Pavel Smulski
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  Leader & Founder
                </Typography>
                <Typography variant="body1" paragraph>
                  Pavel Smulski is the founder and leader of MITRA FRANCE. With a deep commitment
                  to education and cultural exchange, Pavel has been instrumental in establishing
                  the organization and driving its mission to promote intercultural understanding
                  and digital inclusion across diverse communities.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      <Divider sx={{ my: 8 }} />

      <Box sx={{ mb: 8 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <PersonIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
          <Typography variant="h4">Core Team</Typography>
        </Box>
        <Grid container spacing={4}>
          {teamMembers.slice(1).map((member) => (
            <Grid item xs={12} sm={6} md={3} key={member.name}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent sx={{ p: 3 }}>
                  <Avatar
                    sx={{
                      width: 100,
                      height: 100,
                      mx: 'auto',
                      mb: 2,
                      bgcolor: 'primary.main',
                      fontSize: '2.5rem',
                    }}
                  >
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </Avatar>
                  <Typography variant="h6" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="primary" gutterBottom>
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 8 }} />

      <Box>
        <Card
          sx={{
            background: (theme) =>
              theme.palette.mode === 'light'
                ? 'linear-gradient(135deg, rgba(25, 118, 210, 0.1), rgba(66, 165, 245, 0.1))'
                : 'linear-gradient(135deg, rgba(25, 118, 210, 0.2), rgba(66, 165, 245, 0.2))',
          }}
        >
          <CardContent sx={{ textAlign: 'center', p: 4 }}>
            <VolunteerActivismIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              Join Our Team
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              We are always looking for passionate individuals who share our commitment to
              education, inclusion, and community empowerment. Whether as a volunteer or team
              member, there are many ways to get involved.
            </Typography>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              color="primary"
              size="large"
            >
              Get Involved
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
