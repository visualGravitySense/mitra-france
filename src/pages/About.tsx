import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { Link as RouterLink } from 'react-router-dom';
import HistoryIcon from '@mui/icons-material/History';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PublicIcon from '@mui/icons-material/Public';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function About() {
  return (
    <Box>
      {/* MOTIVATION: Hero section with emotional appeal */}
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
            About MITRA FRANCE
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              fontWeight: 400,
              mb: 4,
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Empowering Communities Through Education, Culture & Digital Inclusion Since 2015
          </Typography>
          
          {/* PROMPT: Quick navigation to key sections */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ justifyContent: 'center', flexWrap: 'wrap', mt: 4 }}
          >
            <Button
              component="a"
              href="#mission"
              variant="outlined"
              size="small"
              sx={{ borderRadius: '20px', px: 3 }}
            >
              Our Mission
            </Button>
            <Button
              component="a"
              href="#history"
              variant="outlined"
              size="small"
              sx={{ borderRadius: '20px', px: 3 }}
            >
              Our History
            </Button>
            <Button
              component="a"
              href="#achievements"
              variant="outlined"
              size="small"
              sx={{ borderRadius: '20px', px: 3 }}
            >
              Achievements
            </Button>
            <Button
              component={RouterLink}
              to="/team"
              variant="contained"
              size="small"
              endIcon={<ArrowForwardIcon />}
              sx={{ borderRadius: '20px', px: 3 }}
            >
              Meet Our Team
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container>
        {/* MOTIVATION: Compelling story with visual impact */}
        <Box sx={{ mb: 8 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Chip
                icon={<LocationOnIcon />}
                label="Based in Nice, France"
                color="primary"
                sx={{ mb: 2 }}
              />
              <Typography variant="h3" gutterBottom sx={{ mb: 3 }}>
                Our Story
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 2 }}>
                MITRA FRANCE is a non-profit organization dedicated to fostering intercultural
                understanding, promoting digital literacy, and supporting community engagement
                through education, media, and arts. Since our establishment in 2015, we have been
                committed to creating inclusive learning environments that empower individuals from
                diverse backgrounds.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                Our work spans across various European Union programs, particularly Erasmus+,
                where we collaborate with partners across Europe to develop innovative educational
                projects and promote cultural exchange.
              </Typography>
              
              {/* PROMPT: Quick action */}
              <Button
                component={RouterLink}
                to="/projects"
                variant="outlined"
                color="primary"
                endIcon={<ArrowForwardIcon />}
                sx={{ mt: 2 }}
              >
                Explore Our Projects
              </Button>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, #002395 0%, #0038d6 100%)',
                  color: 'white',
                  p: 4,
                  textAlign: 'center',
                }}
              >
                <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
                  2015
                </Typography>
                <Typography variant="h6" sx={{ mb: 2, opacity: 0.9 }}>
                  Founded in Nice, France
                </Typography>
                <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.3)' }} />
                <Stack spacing={2} sx={{ mt: 3 }}>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                      10+
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      Years of Impact
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                      1000+
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      Lives Changed
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Box>

      <Divider sx={{ my: 8 }} />

      {/* ABILITY: Clear, scannable Mission & Values section */}
      <Box id="mission" sx={{ mb: 8, scrollMarginTop: '100px' }}>
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
            <FavoriteIcon sx={{ fontSize: 32, color: 'primary.main' }} />
          </Box>
          <Typography variant="h3">Mission & Values</Typography>
        </Box>
        
        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
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
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <StarIcon sx={{ color: 'primary.main', mr: 1 }} />
                  <Typography variant="h5" color="primary" sx={{ fontWeight: 600 }}>
                    Our Mission
                  </Typography>
                </Box>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  To promote intercultural education, digital literacy, and cultural integration
                  through innovative programs that empower individuals and strengthen communities
                  across Europe.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
                borderLeft: '4px solid',
                borderLeftColor: 'error.main',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 25px rgba(237, 41, 57, 0.15)',
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <CheckCircleIcon sx={{ color: 'error.main', mr: 1 }} />
                  <Typography variant="h5" color="error" sx={{ fontWeight: 600 }}>
                    Our Values
                  </Typography>
                </Box>
                <Stack spacing={1.5}>
                  {['Inclusion and Diversity', 'Education for All', 'Cultural Exchange', 'Community Empowerment', 'Innovation in Learning'].map((value) => (
                    <Box key={value} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <CheckCircleIcon sx={{ fontSize: 20, color: 'success.main', mr: 1.5, mt: 0.5 }} />
                      <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                        {value}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* PROMPT: Call to action after mission */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{ px: 4 }}
          >
            Join Our Mission
          </Button>
        </Box>
      </Box>

      <Divider sx={{ my: 8 }} />

      {/* ABILITY: Visual timeline for history */}
      <Box id="history" sx={{ mb: 8, scrollMarginTop: '100px' }}>
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
            <HistoryIcon sx={{ fontSize: 32, color: 'primary.main' }} />
          </Box>
          <Typography variant="h3">Organization History</Typography>
        </Box>

        <Box sx={{ position: 'relative', pl: { xs: 0, md: 4 } }}>
          {/* Timeline line (hidden on mobile) */}
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              left: 28,
              top: 0,
              bottom: 0,
              width: '3px',
              background: 'linear-gradient(to bottom, #002395, #ED2939)',
              borderRadius: '2px',
            }}
          />

          <Stack spacing={4}>
            {[
              {
                year: '2015',
                title: 'Foundation',
                description: 'MITRA FRANCE was established in Nice, France, with a vision to promote intercultural education and digital inclusion.',
                icon: <PublicIcon />,
                color: '#002395',
              },
              {
                year: '2016-2018',
                title: 'First Erasmus+ Projects',
                description: 'Began participating in European Union Erasmus+ programs, focusing on adult education and digital literacy.',
                icon: <SchoolIcon />,
                color: '#0038d6',
              },
              {
                year: '2018-Present',
                title: 'Expansion & Growth',
                description: 'Expanded programs to include media literacy, cultural activities, and specialized programs for seniors and youth across Europe.',
                icon: <TrendingUpIcon />,
                color: '#ED2939',
              },
            ].map((milestone, index) => (
              <Box
                key={milestone.year}
                sx={{
                  position: 'relative',
                  pl: { xs: 0, md: 8 },
                  display: 'flex',
                  gap: 3,
                }}
              >
                {/* Timeline dot */}
                <Box
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    position: 'absolute',
                    left: 20,
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    backgroundColor: milestone.color,
                    border: '3px solid white',
                    boxShadow: '0 0 0 3px rgba(0, 35, 149, 0.1)',
                    zIndex: 1,
                  }}
                />
                
                <Card
                  sx={{
                    flex: 1,
                    transition: 'transform 0.3s ease',
                    borderTop: `4px solid ${milestone.color}`,
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Chip
                        label={milestone.year}
                        sx={{
                          backgroundColor: milestone.color,
                          color: 'white',
                          fontWeight: 600,
                          mr: 2,
                        }}
                      />
                      <Box sx={{ color: milestone.color }}>{milestone.icon}</Box>
                    </Box>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                      {milestone.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                      {milestone.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>

      <Divider sx={{ my: 8 }} />

      {/* MOTIVATION: Achievements with visual impact */}
      <Box id="achievements" sx={{ mb: 8, scrollMarginTop: '100px' }}>
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
            <EmojiEventsIcon sx={{ fontSize: 32, color: 'error.main' }} />
          </Box>
          <Typography variant="h3">Achievements & Impact</Typography>
        </Box>

        <Grid container spacing={4}>
          {[
            {
              icon: <SchoolIcon sx={{ fontSize: 48 }} />,
              number: '20+',
              title: 'Erasmus+ Projects',
              description: 'Successfully implemented numerous KA1 and KA2 projects focusing on adult education, digital literacy, and cultural heritage.',
              color: '#002395',
              gradient: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 56, 214, 0.1) 100%)',
            },
            {
              icon: <GroupsIcon sx={{ fontSize: 48 }} />,
              number: '1000+',
              title: 'Community Impact',
              description: 'Reached thousands of participants including seniors, youth, migrants, and refugees through our workshops and training programs.',
              color: '#ED2939',
              gradient: 'linear-gradient(135deg, rgba(237, 41, 57, 0.1) 0%, rgba(201, 31, 47, 0.1) 100%)',
            },
            {
              icon: <PublicIcon sx={{ fontSize: 48 }} />,
              number: '15+',
              title: 'Partnership Network',
              description: 'Established strong partnerships with local institutions, European organizations, and educational institutions across France and Europe.',
              color: '#0038d6',
              gradient: 'linear-gradient(135deg, rgba(0, 56, 214, 0.1) 0%, rgba(0, 35, 149, 0.1) 100%)',
            },
          ].map((achievement) => (
            <Grid item xs={12} md={4} key={achievement.title}>
              <Card
                sx={{
                  height: '100%',
                  background: achievement.gradient,
                  border: `2px solid ${achievement.color}20`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: `0 12px 30px ${achievement.color}30`,
                    borderColor: achievement.color,
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box sx={{ color: achievement.color, mb: 2 }}>
                    {achievement.icon}
                  </Box>
                  <Typography
                    variant="h2"
                    sx={{
                      color: achievement.color,
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    {achievement.number}
                  </Typography>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                    {achievement.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {achievement.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 8 }} />

      {/* MOTIVATION: Network section with trust signals */}
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
            <GroupsIcon sx={{ fontSize: 32, color: 'primary.main' }} />
          </Box>
          <Typography variant="h3">Youth4Media Network</Typography>
        </Box>
        
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 2 }}>
                  MITRA FRANCE is part of the Youth4Media Network, a collaborative platform that
                  connects organizations and individuals working in media literacy, youth engagement,
                  and cultural education across Europe. Through this network, we share best practices,
                  collaborate on projects, and create opportunities for youth to develop media skills
                  and critical thinking.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                  The network enables us to reach a wider audience and participate in cross-border
                  initiatives that promote media literacy and youth empowerment.
                </Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <Chip label="Media Literacy" icon={<StarIcon />} color="primary" />
                  <Chip label="Youth Engagement" icon={<GroupsIcon />} color="primary" />
                  <Chip label="Cross-Border" icon={<PublicIcon />} />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                background: 'linear-gradient(135deg, #ED2939 0%, #c91f2f 100%)',
                color: 'white',
                p: 4,
                height: '100%',
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Network Benefits
              </Typography>
              <Stack spacing={2}>
                {[
                  'Access to European best practices',
                  'Collaborative project opportunities',
                  'Professional development resources',
                  'Expanded reach and impact',
                ].map((benefit) => (
                  <Box key={benefit} sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckCircleIcon sx={{ mr: 2, fontSize: 24 }} />
                    <Typography variant="body1">{benefit}</Typography>
                  </Box>
                ))}
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* PROMPT: Strong final CTA */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(237, 41, 57, 0.05) 100%)',
          borderRadius: '12px',
          p: 6,
          textAlign: 'center',
          mb: 4,
        }}
      >
        <Typography variant="h3" gutterBottom>
          Ready to Be Part of Our Story?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
          Join us in creating positive change through education, culture, and digital inclusion.
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
            Get Involved
          </Button>
          <Button
            component={RouterLink}
            to="/team"
            variant="outlined"
            color="primary"
            size="large"
            sx={{ px: 5, py: 1.5, fontSize: '1.1rem', fontWeight: 600, borderWidth: 2 }}
          >
            Meet Our Team
          </Button>
        </Stack>
      </Box>
    </Container>
    </Box>
  );
}
