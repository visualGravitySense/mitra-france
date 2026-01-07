import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
import PublicIcon from '@mui/icons-material/Public';
import { Link as RouterLink } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Pavel Smulski',
    role: 'Leader & Founder',
    description: 'Founder and leader of MITRA FRANCE, driving our mission and vision forward with over 10 years of experience in youth work and education.',
    expertise: ['Leadership', 'Strategic Planning', 'Erasmus+ Projects'],
    years: '10+',
    projects: '20+',
    achievement: 'Erasmus+ Expert',
  },
  {
    name: 'Karina Tronche',
    role: 'Core Team Member',
    description: 'Key contributor to our educational programs and project management, specializing in adult education and digital skills training.',
    expertise: ['Project Management', 'Adult Education', 'Digital Skills'],
    years: '5+',
    projects: '12+',
    achievement: 'Education Specialist',
  },
  {
    name: 'Louise Papadoperakis',
    role: 'Core Team Member',
    description: 'Specialist in intercultural education and community engagement, passionate about building bridges between diverse communities.',
    expertise: ['Intercultural Education', 'Community Engagement', 'Cultural Programs'],
    years: '4+',
    projects: '8+',
    achievement: 'Community Builder',
  },
  {
    name: 'Alex Smulski',
    role: 'Core Team Member',
    description: 'Expert in digital literacy and media education programs, developing innovative approaches to technology-based learning.',
    expertise: ['Digital Literacy', 'Media Education', 'Technology Training'],
    years: '3+',
    projects: '10+',
    achievement: 'Digital Innovation',
  },
];

export default function Team() {
  return (
    <Box>
      {/* MOTIVATION: Hero section with team impact */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(237, 41, 57, 0.05) 100%)',
          py: { xs: 6, sm: 8 },
          mb: { xs: 6, sm: 8 },
        }}
      >
        <Container>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              textAlign: 'center',
              background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Team
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              mb: 4,
              color: 'text.secondary',
              fontSize: '1.1rem',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Meet the passionate individuals who make MITRA FRANCE's mission possible. Our diverse
            team brings together expertise in education, media, digital literacy, and community
            engagement.
          </Typography>

          {/* MOTIVATION: Team statistics */}
          <Grid container spacing={3} sx={{ mt: 4 }}>
            <Grid size={{ xs: 6, sm: 3 }}>
              <Card
                sx={{
                  textAlign: 'center',
                  p: 2,
                  border: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 4px 16px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <PeopleIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 0.5 }}>
                  4
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Core Team Members
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 6, sm: 3 }}>
              <Card
                sx={{
                  textAlign: 'center',
                  p: 2,
                  border: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 4px 16px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <EmojiEventsIcon sx={{ fontSize: 40, color: 'error.main', mb: 1 }} />
                <Typography variant="h4" sx={{ color: 'error.main', fontWeight: 700, mb: 0.5 }}>
                  50+
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Combined Projects
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 6, sm: 3 }}>
              <Card
                sx={{
                  textAlign: 'center',
                  p: 2,
                  border: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 4px 16px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <TrendingUpIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 0.5 }}>
                  22+
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Years Experience
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 6, sm: 3 }}>
              <Card
                sx={{
                  textAlign: 'center',
                  p: 2,
                  border: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 4px 16px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <GroupsIcon sx={{ fontSize: 40, color: 'error.main', mb: 1 }} />
                <Typography variant="h4" sx={{ color: 'error.main', fontWeight: 700, mb: 0.5 }}>
                  15+
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Countries Reached
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container>

        {/* MOTIVATION: Enhanced Leadership section */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 35, 149, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 2,
              }}
            >
              <PersonIcon sx={{ fontSize: 32, color: 'primary.main' }} />
            </Box>
            <Typography variant="h3">Leadership</Typography>
          </Box>
          <Card
            sx={{
              borderLeft: '4px solid',
              borderLeftColor: 'primary.main',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 25px rgba(0, 35, 149, 0.15)',
              },
            }}
          >
            <CardContent sx={{ p: 4 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, sm: 4 }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Avatar
                      sx={{
                        width: 140,
                        height: 140,
                        mx: 'auto',
                        mb: 2,
                        bgcolor: 'primary.main',
                        fontSize: '3.5rem',
                        fontWeight: 700,
                        boxShadow: '0 4px 20px rgba(0, 35, 149, 0.3)',
                      }}
                    >
                      PS
                    </Avatar>
                    {/* MOTIVATION: Achievement badge */}
                    <Chip
                      icon={<StarIcon />}
                      label={teamMembers[0].achievement}
                      sx={{
                        backgroundColor: 'rgba(237, 41, 57, 0.1)',
                        color: 'error.main',
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 8 }}>
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                    Pavel Smulski
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom sx={{ mb: 2 }}>
                    Leader & Founder
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                    Pavel Smulski is the founder and leader of MITRA FRANCE. With a deep commitment
                    to education and cultural exchange, Pavel has been instrumental in establishing
                    the organization and driving its mission to promote intercultural understanding
                    and digital inclusion across diverse communities.
                  </Typography>

                  {/* MOTIVATION: Impact metrics */}
                  <Stack direction="row" spacing={3} sx={{ mb: 3, flexWrap: 'wrap' }}>
                    <Box>
                      <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700 }}>
                        {teamMembers[0].years}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Years Experience
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ color: 'error.main', fontWeight: 700 }}>
                        {teamMembers[0].projects}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Projects Led
                      </Typography>
                    </Box>
                  </Stack>

                  {/* ABILITY: Expertise tags */}
                  <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
                    {teamMembers[0].expertise.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(0, 35, 149, 0.1)',
                          color: 'primary.main',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Stack>

                  {/* PROMPT: Contact CTA */}
                  <Button
                    component="a"
                    href="mailto:mitra.france@gmail.com"
                    variant="outlined"
                    startIcon={<EmailIcon />}
                    sx={{ mt: 2 }}
                  >
                    Contact Pavel
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>

        <Divider sx={{ my: 8 }} />

        {/* ABILITY: Enhanced Core Team section */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                backgroundColor: 'rgba(237, 41, 57, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 2,
              }}
            >
              <GroupsIcon sx={{ fontSize: 32, color: 'error.main' }} />
            </Box>
            <Typography variant="h3">Core Team</Typography>
          </Box>
          <Grid container spacing={4}>
            {teamMembers.slice(1).map((member, index) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={member.name}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    borderTop: '4px solid',
                    borderTopColor: index % 2 === 0 ? 'primary.main' : 'error.main',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: index % 2 === 0
                        ? '0 12px 30px rgba(0, 35, 149, 0.2)'
                        : '0 12px 30px rgba(237, 41, 57, 0.2)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Avatar
                      sx={{
                        width: 110,
                        height: 110,
                        mx: 'auto',
                        mb: 2,
                        bgcolor: index % 2 === 0 ? 'primary.main' : 'error.main',
                        fontSize: '2.8rem',
                        fontWeight: 700,
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                      }}
                    >
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </Avatar>
                    
                    {/* MOTIVATION: Achievement badge */}
                    <Chip
                      icon={<CheckCircleIcon sx={{ fontSize: 16 }} />}
                      label={member.achievement}
                      size="small"
                      sx={{
                        mx: 'auto',
                        mb: 2,
                        backgroundColor: index % 2 === 0 ? 'rgba(0, 35, 149, 0.1)' : 'rgba(237, 41, 57, 0.1)',
                        color: index % 2 === 0 ? 'primary.main' : 'error.main',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                      }}
                    />

                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="primary" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                      {member.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                      {member.description}
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    {/* MOTIVATION: Member stats */}
                    <Stack direction="row" spacing={2} sx={{ mb: 2, justifyContent: 'center' }}>
                      <Box>
                        <Typography variant="caption" color="text.secondary">
                          Experience
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                          {member.years}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="caption" color="text.secondary">
                          Projects
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: 'error.main' }}>
                          {member.projects}
                        </Typography>
                      </Box>
                    </Stack>

                    {/* ABILITY: Expertise tags */}
                    <Stack direction="row" spacing={0.5} sx={{ mb: 2, justifyContent: 'center', flexWrap: 'wrap', gap: 0.5 }}>
                      {member.expertise.slice(0, 2).map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{
                            fontSize: '0.7rem',
                            height: 20,
                            backgroundColor: 'rgba(0, 0, 0, 0.05)',
                          }}
                        />
                      ))}
                    </Stack>

                    {/* PROMPT: Contact button */}
                    <Button
                      component="a"
                      href="mailto:mitra.france@gmail.com"
                      variant="outlined"
                      size="small"
                      startIcon={<EmailIcon />}
                      fullWidth
                      sx={{
                        mt: 'auto',
                        fontSize: '0.85rem',
                      }}
                    >
                      Contact
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 8 }} />

        {/* MOTIVATION: Why join section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 4 }}>
            Why Join Our Team?
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                icon: <GroupsIcon sx={{ fontSize: 40 }} />,
                title: 'Collaborative Environment',
                description: 'Work with passionate professionals from diverse backgrounds and cultures.',
                color: '#002395',
              },
              {
                icon: <SchoolIcon sx={{ fontSize: 40 }} />,
                title: 'Professional Growth',
                description: 'Develop skills through European projects and continuous learning opportunities.',
                color: '#ED2939',
              },
              {
                icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
                title: 'Meaningful Impact',
                description: 'Make a real difference in communities across Europe through education.',
                color: '#0038d6',
              },
              {
                icon: <PublicIcon sx={{ fontSize: 40 }} />,
                title: 'European Network',
                description: 'Connect with partners and opportunities across 15+ European countries.',
                color: '#c91f2f',
              },
            ].map((benefit) => (
              <Grid size={{ xs: 12, sm: 6 }} key={benefit.title}>
                <Card
                  sx={{
                    p: 3,
                    height: '100%',
                    borderLeft: `4px solid ${benefit.color}`,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 8px 20px ${benefit.color}25`,
                    },
                  }}
                >
                  <Box sx={{ color: benefit.color, mb: 2 }}>{benefit.icon}</Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {benefit.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* PROMPT: Strong call-to-action */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.08) 0%, rgba(237, 41, 57, 0.08) 100%)',
            borderRadius: '12px',
            p: 6,
            textAlign: 'center',
            mb: 4,
          }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              backgroundColor: 'rgba(0, 35, 149, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 3,
            }}
          >
            <VolunteerActivismIcon sx={{ fontSize: 40, color: 'primary.main' }} />
          </Box>
          <Typography variant="h3" gutterBottom>
            Join Our Team
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            paragraph
            sx={{ mb: 4, maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}
          >
            We are always looking for passionate individuals who share our commitment to
            education, inclusion, and community empowerment. Whether as a volunteer or team
            member, there are many ways to get involved and make a difference.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ justifyContent: 'center' }}
          >
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 5, py: 1.5, fontSize: '1.1rem', fontWeight: 600 }}
            >
              Apply Now
            </Button>
            <Button
              component={RouterLink}
              to="/events"
              variant="outlined"
              color="primary"
              size="large"
              sx={{
                px: 5,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                },
              }}
            >
              Volunteer Opportunities
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
