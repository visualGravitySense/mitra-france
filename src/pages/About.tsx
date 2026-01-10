import { useState } from 'react';
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
import LinearProgress from '@mui/material/LinearProgress';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
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
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import RouteIcon from '@mui/icons-material/Route';
import CompareIcon from '@mui/icons-material/Compare';
import PaletteIcon from '@mui/icons-material/Palette';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import HandshakeIcon from '@mui/icons-material/Handshake';
import VerifiedIcon from '@mui/icons-material/Verified';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AssignmentIcon from '@mui/icons-material/Assignment';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import FilterListIcon from '@mui/icons-material/FilterList';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PatternIcon from '@mui/icons-material/Pattern';
import NavigationIcon from '@mui/icons-material/Navigation';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';

export default function About() {
  // State for goal progress (used in User Journey component)
  const [goalProgress] = useState(0);

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
            <Grid size={{ xs: 12, md: 7 }}>
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
            <Grid size={{ xs: 12, md: 5 }}>
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
            <Grid size={{ xs: 12, md: 6 }}>
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
            <Grid size={{ xs: 12, md: 6 }}>
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
            <Grid size={{ xs: 12, md: 4 }} key={achievement.title}>
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
            <Grid size={{ xs: 12, md: 7 }}>
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
            <Grid size={{ xs: 12, md: 5 }}>
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

      <Divider sx={{ my: 8 }} />

      {/* UNDERSTANDING THE PRODUCT: Business goals, audience, journey, and brand */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          backgroundColor: 'rgba(0, 35, 149, 0.02)',
          position: 'relative',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<AccountTreeIcon />}
              label="Understanding the Product"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              We Know Our Product Inside Out
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              Every design decision is informed by deep understanding of our business goals, target audience, user journey, and brand identity.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* 1. Business Goals */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <BusinessCenterIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Business Goals
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Our design aligns with clear business objectives to create meaningful impact.
                </Typography>
                <Stack spacing={2}>
                  {[
                    { goal: 'Increase Community Engagement', progress: 85, icon: <PeopleIcon /> },
                    { goal: 'Promote Education & Integration', progress: 90, icon: <SchoolIcon /> },
                    { goal: 'Build Strong Partnerships', progress: 75, icon: <HandshakeIcon /> },
                    { goal: 'Expand European Reach', progress: 70, icon: <PublicIcon /> },
                  ].map((item) => (
                    <Box key={item.goal}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Box sx={{ color: 'primary.main' }}>{item.icon}</Box>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {item.goal}
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                          {item.progress}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={item.progress}
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: 'rgba(0, 35, 149, 0.1)',
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Grid>

            {/* 2. Target Audience */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'success.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(76, 175, 80, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <PeopleOutlineIcon sx={{ fontSize: 32, color: 'success.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'success.main' }}>
                    Target Audience
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  We serve diverse communities with tailored experiences for each group.
                </Typography>
                <Grid container spacing={2}>
                  {[
                    { group: 'Seniors', description: 'Digital literacy & social integration', icon: <PersonIcon />, color: 'primary' },
                    { group: 'Youth', description: 'Education & career development', icon: <PeopleIcon />, color: 'success' },
                    { group: 'Migrants', description: 'Cultural integration & language', icon: <PublicIcon />, color: 'info' },
                    { group: 'Organizations', description: 'Partnerships & collaboration', icon: <BusinessIcon />, color: 'warning' },
                  ].map((audience) => (
                    <Grid size={{ xs: 6 }} key={audience.group}>
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          border: '1px solid',
                          borderColor: 'divider',
                          backgroundColor: 'rgba(0, 0, 0, 0.02)',
                          textAlign: 'center',
                          height: '100%',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            borderColor: `${audience.color}.main`,
                            backgroundColor: `${audience.color}10`,
                          },
                        }}
                      >
                        <Box sx={{ color: `${audience.color}.main`, mb: 1 }}>{audience.icon}</Box>
                        <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                          {audience.group}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                          {audience.description}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Card>
            </Grid>

            {/* 3. User Journey */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'info.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <RouteIcon sx={{ fontSize: 32, color: 'info.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'info.main' }}>
                    User Journey
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  From first contact to achieving goals - we've mapped every step of your journey.
                </Typography>
                <Stepper orientation="vertical" activeStep={goalProgress > 0 ? Math.min(3, Math.floor(goalProgress / 25)) : -1}>
                  {[
                    { label: 'Discovery', description: 'Learn about MITRA France', time: '2 min' },
                    { label: 'Registration', description: 'Join our community', time: '2 min' },
                    { label: 'Engagement', description: 'Participate in programs', time: 'Ongoing' },
                    { label: 'Achievement', description: 'Reach your goals', time: 'Continuous' },
                  ].map((step, index) => (
                    <Step key={step.label}>
                      <StepLabel
                        optional={
                          <Typography variant="caption" color="text.secondary">
                            {step.description} • {step.time}
                          </Typography>
                        }
                      >
                        {step.label}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Card>
            </Grid>

            {/* 4. Competitor Analysis & Differentiation */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'warning.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(255, 152, 0, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <CompareIcon sx={{ fontSize: 32, color: 'warning.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'warning.main' }}>
                    Our Unique Advantages
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  What sets us apart from others in the field.
                </Typography>
                <Stack spacing={2}>
                  {[
                    { advantage: '100% Free Access', description: 'No hidden costs, ever' },
                    { advantage: 'Multilingual Support', description: 'French, English, and more' },
                    { advantage: 'European Network', description: '20+ European projects' },
                    { advantage: '10+ Years Experience', description: 'Proven track record' },
                    { advantage: 'Community-Driven', description: 'Built by and for the community' },
                  ].map((item) => (
                    <Box
                      key={item.advantage}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'warning.main',
                        backgroundColor: 'rgba(255, 152, 0, 0.05)',
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, color: 'warning.main' }}>
                        {item.advantage}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Grid>
          </Grid>

          {/* 5. Brand Consistency */}
          <Box sx={{ mt: 6 }}>
            <Card
              sx={{
                p: 4,
                border: '2px solid',
                borderColor: 'primary.main',
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <PaletteIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                  Brand Consistency
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>
                Our design reflects our brand identity: French Blue (#002395) and French Red (#ED2939) represent our commitment to France and our vibrant community.
              </Typography>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      border: '2px solid',
                      borderColor: 'primary.main',
                      backgroundColor: 'primary.main',
                      color: 'white',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      French Blue
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                      #002395
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.8 }}>
                      Trust, stability, professionalism
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      border: '2px solid',
                      borderColor: 'error.main',
                      backgroundColor: 'error.main',
                      color: 'white',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      French Red
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                      #ED2939
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.8 }}>
                      Energy, passion, community
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      border: '2px solid',
                      borderColor: 'divider',
                      backgroundColor: 'rgba(0, 0, 0, 0.02)',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      Our Values
                    </Typography>
                    <Stack spacing={1} sx={{ mt: 2 }}>
                      <Typography variant="caption" color="text.secondary">
                        • Inclusivity
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        • Education
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        • Community
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        • Innovation
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Box>
        </Container>
      </Box>

      {/* DEPLOY STRONG AUTHORITY ON SUBJECT: Build trust and confidence */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          backgroundColor: 'rgba(0, 35, 149, 0.02)',
          position: 'relative',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<VerifiedIcon />}
              label="Authority & Trust"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Trusted Expertise & Reliable Information
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              We establish authority through reliable content, professional design, social proof, and accessible support.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Reliable Content */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <MenuBookIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Reliable Content
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Accurate, expert-curated information that you can trust.
                </Typography>

                <Stack spacing={2.5}>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <CheckCircleIcon sx={{ fontSize: 20, color: 'success.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'success.main' }}>
                        Accuracy
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      All information is verified, relevant, and regularly updated to ensure accuracy.
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'info.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <SchoolIcon sx={{ fontSize: 20, color: 'info.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'info.main' }}>
                        Expertise
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      Content created and reviewed by subject matter experts to ensure credibility.
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'warning.main',
                      backgroundColor: 'rgba(255, 152, 0, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <FilterListIcon sx={{ fontSize: 20, color: 'warning.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'warning.main' }}>
                        Curation
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      Carefully curated content focused on what matters most to our audience.
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* Design and Aesthetics */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'success.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(76, 175, 80, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <PaletteIcon sx={{ fontSize: 32, color: 'success.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'success.main' }}>
                    Professional Design
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  A well-designed interface that instills confidence through professional aesthetics.
                </Typography>

                <Stack spacing={2.5}>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <AutoAwesomeIcon sx={{ fontSize: 20, color: 'success.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'success.main' }}>
                        Professional Look
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      Carefully chosen fonts, colors, and design elements that resonate with our audience.
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'info.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <PatternIcon sx={{ fontSize: 20, color: 'info.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'info.main' }}>
                        Consistency
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      Consistent layout, colors, and branding create a familiar, trustworthy experience.
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'primary.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <NavigationIcon sx={{ fontSize: 20, color: 'primary.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        Intuitive Navigation
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      Easy-to-use navigation helps you explore content with confidence.
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* Testimonials and Social Proof */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'warning.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(255, 152, 0, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <FormatQuoteIcon sx={{ fontSize: 32, color: 'warning.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'warning.main' }}>
                    Social Proof
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Real testimonials, case studies, and certifications that demonstrate our expertise.
                </Typography>

                <Stack spacing={2.5}>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'warning.main',
                      backgroundColor: 'rgba(255, 152, 0, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                      <StarIcon sx={{ fontSize: 20, color: 'warning.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'warning.main' }}>
                        Testimonials
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>M</Avatar>
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>
                          Marie D.
                        </Typography>
                        <Rating value={5} readOnly size="small" />
                      </Box>
                    </Box>
                    <Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                      "This platform has been incredibly helpful for my integration journey."
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'info.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <AssignmentIcon sx={{ fontSize: 20, color: 'info.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'info.main' }}>
                        Case Studies
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      Detailed case studies showcase our expertise and successful outcomes.
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <WorkspacePremiumIcon sx={{ fontSize: 20, color: 'success.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'success.main' }}>
                        Certifications
                      </Typography>
                    </Box>
                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                      <Chip label="Certified" color="success" size="small" icon={<VerifiedIcon />} />
                      <Chip label="Partner" color="info" size="small" icon={<AccountBalanceIcon />} />
                    </Stack>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* Accessibility and Support */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'info.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <AccessibilityIcon sx={{ fontSize: 32, color: 'info.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'info.main' }}>
                    Accessibility & Support
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Accessible to everyone with comprehensive support options.
                </Typography>

                <Stack spacing={2.5}>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'info.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <AccessibilityIcon sx={{ fontSize: 20, color: 'info.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'info.main' }}>
                        Accessibility Standards
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      Content meets WCAG accessibility standards, ensuring everyone can access our resources.
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap' }}>
                      <Chip label="WCAG AA" size="small" color="info" />
                      <Chip label="Screen Reader" size="small" color="info" />
                      <Chip label="Keyboard Nav" size="small" color="info" />
                    </Stack>
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <SupportAgentIcon sx={{ fontSize: 20, color: 'success.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'success.main' }}>
                        Customer Support
                      </Typography>
                    </Box>
                    <Stack spacing={1}>
                      <Button variant="outlined" color="success" size="small" fullWidth startIcon={<MenuBookIcon />}>
                        Help Center
                      </Button>
                      <Button variant="outlined" color="success" size="small" fullWidth startIcon={<ContactMailIcon />}>
                        Contact Support
                      </Button>
                    </Stack>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* BE AUTHENTIC AND PERSONAL: Genuine connection with users */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(0, 35, 149, 0.02) 50%, rgba(76, 175, 80, 0.02) 100%)',
          position: 'relative',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<FavoriteIcon />}
              label="Authentic & Personal"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Genuine, Truthful & Relatable
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              We believe in being authentic and personal. Our design is genuine, truthful, and relatable, creating a positive connection with every user.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Authentic Storytelling */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(244, 67, 54, 0.1) 0%, rgba(244, 67, 54, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <EmojiEmotionsIcon sx={{ fontSize: 32, color: 'error.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    Authentic Storytelling
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Real stories from real people. We share genuine experiences that resonate with our community.
                </Typography>

                <Box
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: 'rgba(244, 67, 54, 0.05)',
                    border: '1px solid',
                    borderColor: 'error.main',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Avatar sx={{ width: 48, height: 48, bgcolor: 'error.main' }}>A</Avatar>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Ahmed, 28
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Software Developer from Morocco
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', lineHeight: 1.7 }}>
                    "I found a community here that understands my journey. The programs are practical and the support is real. This isn't just a website - it's a genuine connection."
                  </Typography>
                </Box>
              </Card>
            </Grid>

            {/* Personal Connection */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <PersonIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    Personal Connection
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  We see you as an individual, not just a user. Every interaction is designed to feel personal and meaningful.
                </Typography>

                <Stack spacing={2}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                      border: '1px solid',
                      borderColor: 'primary.main',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'primary.main' }}>
                      Personalized Recommendations
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Content tailored to your interests, background, and goals
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                      border: '1px solid',
                      borderColor: 'success.main',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'success.main' }}>
                      Your Journey Matters
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      We celebrate your progress and support your unique path
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* Truthful Communication */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <CheckCircleIcon sx={{ fontSize: 32, color: 'success.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    Truthful Communication
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  We communicate honestly and transparently. No false promises, just genuine commitment to your success.
                </Typography>

                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleIcon sx={{ fontSize: 20, color: 'success.main' }} />
                    <Typography variant="body2" color="text.secondary">
                      Clear expectations about what we offer
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleIcon sx={{ fontSize: 20, color: 'success.main' }} />
                    <Typography variant="body2" color="text.secondary">
                      Transparent about limitations and challenges
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleIcon sx={{ fontSize: 20, color: 'success.main' }} />
                    <Typography variant="body2" color="text.secondary">
                      Honest feedback and real results
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* Relatable Content */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ConnectWithoutContactIcon sx={{ fontSize: 32, color: 'warning.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    Relatable Content
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Content that speaks to your experiences, challenges, and aspirations. We understand because we've been there too.
                </Typography>

                <Stack spacing={2}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(255, 152, 0, 0.05)',
                      border: '1px solid',
                      borderColor: 'warning.main',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, color: 'warning.main' }}>
                      Real Scenarios
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Examples from actual community members
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                      border: '1px solid',
                      borderColor: 'primary.main',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, color: 'primary.main' }}>
                      Common Challenges
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      We address the real issues you face
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                      border: '1px solid',
                      borderColor: 'success.main',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, color: 'success.main' }}>
                      Shared Success
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Celebrate achievements together as a community
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          </Grid>

          {/* Call to Action */}
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
              Join Our Authentic Community
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: '600px', mx: 'auto' }}>
              Be part of a genuine community where your story matters and your journey is supported.
            </Typography>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              size="large"
              sx={{
                background: 'linear-gradient(135deg, rgba(0, 35, 149, 1) 0%, rgba(0, 35, 149, 0.8) 100%)',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                boxShadow: '0 4px 12px rgba(0, 35, 149, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.9) 0%, rgba(0, 35, 149, 0.7) 100%)',
                  boxShadow: '0 6px 16px rgba(0, 35, 149, 0.4)',
                },
              }}
            >
              Start Your Journey
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Link to UX Principles page */}
      <Box
        sx={{
          py: { xs: 4, sm: 6 },
          backgroundColor: 'rgba(0, 35, 149, 0.02)',
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Interested in our UX design principles?
          </Typography>
          <Button
            component={RouterLink}
            to="/ux-principles"
            variant="outlined"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            sx={{ px: 4 }}
          >
            Explore UX Principles
          </Button>
        </Container>
      </Box>
    </Container>
    </Box>
  );
}
