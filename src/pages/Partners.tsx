import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CastleIcon from '@mui/icons-material/Castle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import PublicIcon from '@mui/icons-material/Public';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';

const localPartners = [
  { name: 'Le 109: Pôle de cultures', type: 'Cultural Center', icon: <LocationOnIcon /> },
  { name: 'Le HUBLOT Theater', type: 'Theater', icon: <TheaterComedyIcon /> },
  { name: 'Espace Associations', type: 'Community Space', icon: <LocationOnIcon /> },
  { name: 'SCREB', type: 'Organization', icon: <LocationOnIcon /> },
  { name: 'Médiathèque Louis Nucéra', type: 'Library', icon: <LibraryBooksIcon /> },
  { name: 'Villa Ephrussi de Rothschild', type: 'Museum', icon: <CastleIcon /> },
];

const educationalInstitutions = [
  { name: "Université Côte d'Azur", type: 'University', icon: <SchoolIcon /> },
  { name: 'Lycée Pasteur', type: 'High School', icon: <SchoolIcon /> },
  { name: 'Community Las Planas', type: 'Community Center', icon: <LocationOnIcon /> },
];

export default function Partners() {
  return (
    <Box>
      {/* BJ FOGG BEHAVIOR MODEL: MOTIVATION + ABILITY + PROMPTS */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.08) 0%, rgba(237, 41, 57, 0.08) 50%, rgba(0, 35, 149, 0.05) 100%)',
          pt: { xs: 10, sm: 12, md: 14 }, // Отступ сверху, чтобы контент не скрывался под Header
          pb: { xs: 6, sm: 8 },
          mb: { xs: 6, sm: 8 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #002395 0%, #ED2939 100%)',
          },
        }}
      >
        <Container>
          {/* MOTIVATION: Emotional appeal and value proposition */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Chip
              icon={<HandshakeIcon />}
              label="Our Network"
              color="primary"
              sx={{ mb: 2, fontWeight: 600, fontSize: '0.95rem', py: 2 }}
            />
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                textAlign: 'center',
                background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
              }}
            >
              Our Partners
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                mb: 3,
                color: 'text.secondary',
                fontWeight: 400,
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              We collaborate with local organizations, educational institutions, and European partners to
              create meaningful impact and drive positive change across communities.
            </Typography>
            
            {/* MOTIVATION: Show benefits and value */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
                flexWrap: 'wrap',
                mb: 4,
              }}
            >
              <Chip
                icon={<CheckCircleIcon sx={{ color: 'success.main' }} />}
                label="9+ Local Partners"
                sx={{
                  backgroundColor: 'rgba(76, 175, 80, 0.1)',
                  color: 'success.main',
                  fontWeight: 600,
                }}
              />
              <Chip
                icon={<TrendingUpIcon sx={{ color: 'primary.main' }} />}
                label="15+ European Countries"
                sx={{
                  backgroundColor: 'rgba(0, 35, 149, 0.1)',
                  color: 'primary.main',
                  fontWeight: 600,
                }}
              />
              <Chip
                icon={<PublicIcon sx={{ color: 'error.main' }} />}
                label="50+ Projects"
                sx={{
                  backgroundColor: 'rgba(237, 41, 57, 0.1)',
                  color: 'error.main',
                  fontWeight: 600,
                }}
              />
            </Box>
          </Box>

          {/* MOTIVATION: Partner statistics with visual appeal */}
          <Grid container spacing={3} sx={{ mt: 2, mb: 4 }}>
            {[
              { icon: <HandshakeIcon />, label: 'Local Partners', value: '9+', color: 'primary.main' },
              { icon: <SchoolIcon />, label: 'Educational Institutions', value: '3+', color: 'error.main' },
              { icon: <PublicIcon />, label: 'European Network', value: '15+', color: 'success.main' },
              { icon: <EmojiEventsIcon />, label: 'Active Collaborations', value: '50+', color: 'info.main' },
            ].map((stat) => (
              <Grid size={{ xs: 6, sm: 3 }} key={stat.label}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    border: '2px solid',
                    borderColor: `${stat.color}30`,
                    backgroundColor: `${stat.color}08`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 6px 20px ${stat.color}30`,
                      borderColor: stat.color,
                    },
                  }}
                >
                  <Box sx={{ color: stat.color, mb: 1.5 }}>{stat.icon}</Box>
                  <Typography variant="h4" sx={{ color: stat.color, fontWeight: 700, mb: 0.5 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* PROMPT: Clear call-to-action */}
          <Box
            sx={{
              textAlign: 'center',
              p: 4,
              borderRadius: 3,
              background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(237, 41, 57, 0.1) 100%)',
              border: '2px solid',
              borderColor: 'primary.main',
              maxWidth: '700px',
              mx: 'auto',
              mt: 2,
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #002395 0%, #ED2939 100%)',
              },
            }}
          >
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 700, color: 'primary.main' }}>
              Interested in Partnership?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontSize: '1.05rem' }}>
              We're always open to new partnerships and collaborations. Join our network and create meaningful impact together.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: '25px',
                  boxShadow: '0 4px 12px rgba(0, 35, 149, 0.3)',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 16px rgba(0, 35, 149, 0.4)',
                  },
                }}
              >
                Become a Partner
              </Button>
              <Button
                component={RouterLink}
                to="/projects"
                variant="outlined"
                color="primary"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: '25px',
                  borderWidth: 2,
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderWidth: 2,
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                View Projects
              </Button>
            </Stack>
          </Box>

          {/* ABILITY: Show simplicity indicator */}
          <Typography
            variant="caption"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              mt: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.5,
            }}
          >
            <CheckCircleIcon sx={{ fontSize: 16, color: 'success.main' }} />
            Easy to connect • Open to collaboration • Quick response
          </Typography>
        </Container>
      </Box>

      <Container>

      {/* ABILITY: Enhanced Local Partners section */}
      <Box sx={{ mb: 8 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 2 }}>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: '12px',
              backgroundColor: 'rgba(0, 35, 149, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'primary.main',
            }}
          >
            <LocationOnIcon sx={{ fontSize: 32 }} />
          </Box>
          <Box>
            <Typography variant="h3" sx={{ fontWeight: 600 }}>
              Local Partners
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our trusted local collaborators in Nice and the Côte d'Azur region
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={3}>
          {localPartners.map((partner, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={partner.name}>
              <Card
                sx={{
                  height: '100%',
                  borderTop: '4px solid',
                  borderTopColor: index % 2 === 0 ? 'primary.main' : 'error.main',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: index % 2 === 0
                      ? '0 12px 30px rgba(0, 35, 149, 0.2)'
                      : '0 12px 30px rgba(237, 41, 57, 0.2)',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      color: index % 2 === 0 ? 'primary.main' : 'error.main',
                      mb: 2,
                      fontSize: 48,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {partner.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, textAlign: 'center' }}>
                    {partner.name}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Chip
                      label={partner.type}
                      size="small"
                      sx={{
                        backgroundColor: index % 2 === 0 ? 'rgba(0, 35, 149, 0.1)' : 'rgba(237, 41, 57, 0.1)',
                        color: index % 2 === 0 ? 'primary.main' : 'error.main',
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 8 }} />

      {/* ABILITY: Enhanced Educational Institutions section */}
      <Box sx={{ mb: 8 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 2 }}>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: '12px',
              backgroundColor: 'rgba(237, 41, 57, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'error.main',
            }}
          >
            <SchoolIcon sx={{ fontSize: 32 }} />
          </Box>
          <Box>
            <Typography variant="h3" sx={{ fontWeight: 600 }}>
              Educational Institutions
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Academic partners supporting our educational programs
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={3}>
          {educationalInstitutions.map((institution, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={institution.name}>
              <Card
                sx={{
                  height: '100%',
                  borderTop: '4px solid',
                  borderTopColor: index % 2 === 0 ? 'error.main' : 'primary.main',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: index % 2 === 0
                      ? '0 12px 30px rgba(237, 41, 57, 0.2)'
                      : '0 12px 30px rgba(0, 35, 149, 0.2)',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      color: index % 2 === 0 ? 'error.main' : 'primary.main',
                      mb: 2,
                      fontSize: 48,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {institution.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, textAlign: 'center' }}>
                    {institution.name}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Chip
                      label={institution.type}
                      size="small"
                      sx={{
                        backgroundColor: index % 2 === 0 ? 'rgba(237, 41, 57, 0.1)' : 'rgba(0, 35, 149, 0.1)',
                        color: index % 2 === 0 ? 'error.main' : 'primary.main',
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 8 }} />

      {/* MOTIVATION: Enhanced European Partners section */}
      <Box sx={{ mb: 8 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 2 }}>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: '12px',
              backgroundColor: 'rgba(0, 56, 214, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0038d6',
            }}
          >
            <PublicIcon sx={{ fontSize: 32 }} />
          </Box>
          <Box>
            <Typography variant="h3" sx={{ fontWeight: 600 }}>
              European Partners
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our extensive network across 15+ European countries
            </Typography>
          </Box>
        </Box>
        <Card
          sx={{
            borderLeft: '4px solid',
            borderLeftColor: 'info.main',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 25px rgba(0, 56, 214, 0.15)',
            },
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              Through our participation in Erasmus+ programs, we collaborate with organizations
              across Europe. Our European network includes:
            </Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {[
                'Educational institutions and training organizations',
                'Non-profit organizations focused on adult education and digital literacy',
                'Cultural and media organizations promoting media literacy',
                'Youth organizations and community centers',
              ].map((item, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                    <CheckCircleIcon sx={{ color: 'success.main', mt: 0.5, fontSize: 20 }} />
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                      {item}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 500 }}>
              These partnerships enable us to exchange best practices, develop innovative projects,
              and create opportunities for cross-cultural learning and collaboration.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* BJ FOGG MODEL: PROMPT - Strong call-to-action with enhanced motivation */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.08) 0%, rgba(237, 41, 57, 0.08) 100%)',
          borderRadius: '16px',
          p: 6,
          textAlign: 'center',
          mb: 4,
          border: '2px solid',
          borderColor: 'primary.main',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #002395 0%, #ED2939 100%)',
          },
        }}
      >
        {/* MOTIVATION: Show value and benefits */}
        <Chip
          icon={<HandshakeIcon />}
          label="Become a Partner"
          color="primary"
          sx={{ mb: 2, fontWeight: 600, fontSize: '0.95rem', py: 2 }}
        />
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
          <HandshakeIcon sx={{ fontSize: 40, color: 'primary.main' }} />
        </Box>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
          Ready to Partner With Us?
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          paragraph
          sx={{ mb: 4, maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}
        >
          Join our network of partners and collaborate on innovative projects that create real impact
          across Europe. Together, we can achieve more.
        </Typography>
        
        {/* MOTIVATION: Show what they'll get */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 3,
            mb: 4,
            flexWrap: 'wrap',
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <CheckCircleIcon sx={{ fontSize: 32, color: 'success.main', mb: 0.5 }} />
            <Typography variant="body2" sx={{ fontWeight: 600 }}>Proven Track Record</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <PeopleIcon sx={{ fontSize: 32, color: 'primary.main', mb: 0.5 }} />
            <Typography variant="body2" sx={{ fontWeight: 600 }}>European Network</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <TrendingUpIcon sx={{ fontSize: 32, color: 'error.main', mb: 0.5 }} />
            <Typography variant="body2" sx={{ fontWeight: 600 }}>Real Impact</Typography>
          </Box>
        </Box>

        {/* PROMPT: Clear, prominent CTAs */}
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
            sx={{
              px: 5,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 700,
              borderRadius: '25px',
              boxShadow: '0 4px 14px rgba(0, 35, 149, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 18px rgba(0, 35, 149, 0.4)',
              },
            }}
          >
            Start Partnership
          </Button>
          <Button
            component={RouterLink}
            to="/projects"
            variant="outlined"
            color="primary"
            size="large"
            sx={{
              px: 5,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: '25px',
              borderWidth: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                borderWidth: 2,
                transform: 'translateY(-2px)',
              },
            }}
          >
            View Our Projects
          </Button>
        </Stack>
        
        {/* ABILITY: Show simplicity */}
        <Typography
          variant="caption"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0.5,
            mt: 3,
            color: 'text.secondary',
          }}
        >
          <CheckCircleIcon sx={{ fontSize: 16, color: 'success.main' }} />
          Free consultation • Easy process • Quick response
        </Typography>
      </Box>
      </Container>
    </Box>
  );
}
