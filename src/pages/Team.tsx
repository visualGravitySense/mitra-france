import React from 'react';
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
import ComputerIcon from '@mui/icons-material/Computer';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import HistoryIcon from '@mui/icons-material/History';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import FlagIcon from '@mui/icons-material/Flag';
import MicIcon from '@mui/icons-material/Mic';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Tooltip from '@mui/material/Tooltip';
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
    portraitPhoto: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
    actionPhoto: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
    backgroundIcon: <PublicIcon />,
    skillBadges: ['Erasmus+ Guru', 'Strategic Planning'],
    linkedInQuote: 'I believe in the power of digital education to transform communities across Europe.',
  },
  {
    name: 'Karina Tronche',
    role: 'Core Team Member',
    description: 'Key contributor to our educational programs and project management, specializing in adult education and digital skills training.',
    expertise: ['Project Management', 'Adult Education', 'Digital Skills'],
    years: '5+',
    projects: '12+',
    achievement: 'Education Specialist',
    portraitPhoto: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
    actionPhoto: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
    backgroundIcon: <SchoolIcon />,
    skillBadges: ['Media Literacy', 'Adult Education'],
    linkedInQuote: 'Education is the bridge that connects diverse communities and empowers individuals.',
  },
  {
    name: 'Louise Papadoperakis',
    role: 'Core Team Member',
    description: 'Specialist in intercultural education and community engagement, passionate about building bridges between diverse communities.',
    expertise: ['Intercultural Education', 'Community Engagement', 'Cultural Programs'],
    years: '4+',
    projects: '8+',
    achievement: 'Community Builder',
    portraitPhoto: '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
    actionPhoto: '/photos/583489432_1157911303183541_1292926580526900497_n.jpg',
    backgroundIcon: <FlagIcon />,
    skillBadges: ['Community Engagement', 'Cultural Programs'],
    linkedInQuote: 'Building bridges between cultures is the foundation of a stronger Europe.',
  },
  {
    name: 'Alex Smulski',
    role: 'Core Team Member',
    description: 'Expert in digital literacy and media education programs, developing innovative approaches to technology-based learning.',
    expertise: ['Digital Literacy', 'Media Education', 'Technology Training'],
    years: '3+',
    projects: '10+',
    achievement: 'Digital Innovation',
    portraitPhoto: '/photos/583741041_1157902773184394_5619801435922057517_n.jpg',
    actionPhoto: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
    backgroundIcon: <CameraAltIcon />,
    skillBadges: ['Media Literacy', 'Digital Innovation'],
    linkedInQuote: 'Technology opens doors to learning that were never possible before.',
  },
];

export default function Team() {
  const [linkedInDialog, setLinkedInDialog] = React.useState<{ open: boolean; quote: string; name: string }>({
    open: false,
    quote: '',
    name: '',
  });

  const handleLinkedInClick = (quote: string, name: string) => {
    setLinkedInDialog({ open: true, quote, name });
  };

  const handleCloseDialog = () => {
    setLinkedInDialog({ open: false, quote: '', name: '' });
  };

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
              icon={<GroupsIcon />}
              label="Meet Our Team"
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
              Our Team
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
              Meet the passionate individuals who make MITRA FRANCE's mission possible. Our diverse
              team brings together expertise in education, media, digital literacy, and community
              engagement to create real impact across Europe.
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
              <Tooltip title="Our team consists of experienced professionals in education, media, and community engagement" arrow>
                <Chip
                  icon={<CheckCircleIcon sx={{ color: 'success.main' }} />}
                  label="Expert Team"
                  sx={{
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    color: 'success.main',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)',
                    },
                  }}
                />
              </Tooltip>
              <Tooltip title="Combined experience of our team members across all projects and initiatives" arrow>
                <Chip
                  icon={<TrendingUpIcon sx={{ color: 'primary.main' }} />}
                  label="22+ Years Experience"
                  sx={{
                    backgroundColor: 'rgba(0, 35, 149, 0.1)',
                    color: 'primary.main',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(0, 35, 149, 0.3)',
                    },
                  }}
                />
              </Tooltip>
              <Tooltip title="We have reached and impacted communities across 15+ European countries" arrow>
                <Chip
                  icon={<PublicIcon sx={{ color: 'error.main' }} />}
                  label="15+ Countries"
                  sx={{
                    backgroundColor: 'rgba(237, 41, 57, 0.1)',
                    color: 'error.main',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(237, 41, 57, 0.3)',
                    },
                  }}
                />
              </Tooltip>
            </Box>
          </Box>

          {/* MOTIVATION: Enhanced team statistics with visual appeal */}
          <Grid container spacing={3} sx={{ mt: 2, mb: 4 }}>
            {[
              {
                icon: <PeopleIcon sx={{ fontSize: 48, color: '#002395' }} />,
                value: '4',
                label: 'Core Team Members',
                photo: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
                borderColor: '#002395',
                bgColor: 'rgba(0, 35, 149, 0.08)',
                hoverColor: 'rgba(0, 35, 149, 0.3)',
              },
              {
                icon: <EmojiEventsIcon sx={{ fontSize: 48, color: '#ED2939' }} />,
                value: '50+',
                label: 'Combined Projects',
                photo: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
                borderColor: '#ED2939',
                bgColor: 'rgba(237, 41, 57, 0.08)',
                hoverColor: 'rgba(237, 41, 57, 0.3)',
              },
              {
                icon: <TrendingUpIcon sx={{ fontSize: 48, color: '#002395' }} />,
                value: '22+',
                label: 'Years Experience',
                photo: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
                borderColor: '#002395',
                bgColor: 'rgba(0, 35, 149, 0.08)',
                hoverColor: 'rgba(0, 35, 149, 0.3)',
              },
              {
                icon: <PublicIcon sx={{ fontSize: 48, color: '#ED2939' }} />,
                value: '15+',
                label: 'Countries Reached',
                photo: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
                borderColor: '#ED2939',
                bgColor: 'rgba(237, 41, 57, 0.08)',
                hoverColor: 'rgba(237, 41, 57, 0.3)',
              },
            ].map((stat, idx) => (
              <Grid size={{ xs: 6, sm: 6, md: 3 }} key={idx}>
                <Card
                  sx={{
                    position: 'relative',
                    textAlign: 'center',
                    p: 3,
                    border: '2px solid',
                    borderColor: stat.borderColor,
                    backgroundColor: stat.bgColor,
                    transition: 'all 0.3s ease',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 6px 20px ${stat.hoverColor}`,
                      borderColor: stat.borderColor,
                      '& .stat-photo': {
                        opacity: 0.15,
                      },
                    },
                  }}
                >
                  {/* Background Photo */}
                  <Box
                    className="stat-photo"
                    component="img"
                    src={stat.photo}
                    alt={stat.label}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.1,
                      filter: 'blur(2px) grayscale(0.5)',
                      transition: 'opacity 0.3s ease',
                      zIndex: 0,
                    }}
                  />
                  {/* Content */}
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Box sx={{ mb: 1.5 }}>{stat.icon}</Box>
                    <Typography variant="h3" sx={{ color: stat.borderColor, fontWeight: 800, mb: 0.5 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Latest Community Photos - Trust Strip */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: '#0b1b3a', textAlign: 'center' }}>
              Latest from our community
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                overflowX: 'auto',
                pb: 2,
                '&::-webkit-scrollbar': {
                  height: 6,
                },
                '&::-webkit-scrollbar-track': {
                  backgroundColor: 'rgba(0,0,0,0.05)',
                  borderRadius: 3,
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: 'rgba(0, 35, 149, 0.3)',
                  borderRadius: 3,
                  '&:hover': {
                    backgroundColor: 'rgba(0, 35, 149, 0.5)',
                  },
                },
              }}
            >
              {[
                { photo: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg', title: 'Workshop' },
                { photo: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg', title: 'Team Meeting' },
                { photo: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg', title: 'Conference' },
                { photo: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg', title: 'Training' },
                { photo: '/photos/571419367_1143811194593552_6930038688628840775_n.jpg', title: 'Event' },
                { photo: '/photos/583489432_1157911303183541_1292926580526900497_n.jpg', title: 'Community' },
              ].map((item, idx) => (
                <Card
                  key={idx}
                  sx={{
                    minWidth: 150,
                    height: 150,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px) scale(1.05)',
                      boxShadow: '0 8px 24px rgba(0, 35, 149, 0.3)',
                      '& .community-photo': {
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                >
                  <Box
                    className="community-photo"
                    component="img"
                    src={item.photo}
                    alt={item.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.9) saturate(1.1)',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(180deg, transparent 0%, rgba(0, 35, 149, 0.7) 100%)',
                      p: 1,
                    }}
                  >
                    <Typography variant="caption" sx={{ color: 'white', fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                      {item.title}
                    </Typography>
                  </Box>
                </Card>
              ))}
            </Box>
          </Box>

          {/* PROMPT: Clear call-to-action */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              p: 4,
              borderRadius: '24px',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              border: '2px solid',
              borderColor: 'rgba(0, 35, 149, 0.3)',
              maxWidth: '900px',
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
            {/* Background Photo */}
            <Box
              component="img"
              src="/photos/583924019_1157903166517688_8756873269993443102_n.jpg"
              alt="Team Office"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.15,
                filter: 'blur(3px) brightness(0.8)',
                zIndex: 0,
              }}
            />
            {/* Europe Map Texture */}
            <Box
              component="svg"
              viewBox="0 0 200 150"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0.05,
                zIndex: 0,
              }}
            >
              <path
                d="M 20 75 L 40 60 L 60 50 L 90 45 L 125 50 L 160 60 L 175 70 L 170 90 L 150 100 L 125 105 L 100 100 L 75 95 L 50 90 L 30 85 Z"
                fill="none"
                stroke="#002395"
                strokeWidth="1"
              />
            </Box>

            {/* Left Side - Photo */}
            <Box
              sx={{
                position: 'relative',
                zIndex: 2,
                display: { xs: 'none', md: 'block' },
              }}
            >
              <Box
                component="img"
                src="/photos/584326681_1157904053184266_2071216266526493174_n.jpg"
                alt="Team Member"
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid rgba(255, 255, 255, 0.9)',
                  boxShadow: '0 8px 24px rgba(0, 35, 149, 0.3)',
                }}
              />
            </Box>

            {/* Right Side - Content */}
            <Box sx={{ position: 'relative', zIndex: 2, flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="h5" sx={{ mb: 1, fontWeight: 700, color: '#0b1b3a' }}>
                Want to Join Our Team?
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.7 }}>
                We're always looking for passionate individuals who share our commitment to education and community empowerment.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 700,
                    borderRadius: '25px',
                    fontSize: '1rem',
                    background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                    boxShadow: '0 4px 16px rgba(0, 35, 149, 0.4)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 8px 24px rgba(0, 35, 149, 0.5)',
                      background: 'linear-gradient(135deg, #001a7a 0%, #c91f2f 100%)',
                      '& .MuiButton-endIcon': {
                        transform: 'translateX(4px)',
                      },
                    },
                    '& .MuiButton-endIcon': {
                      transition: 'transform 0.3s ease',
                    },
                  }}
                >
                  Apply Now
                </Button>
                <Button
                  component={RouterLink}
                  to="/events"
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: '25px',
                    borderWidth: 2,
                    borderColor: '#002395',
                    color: '#002395',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderWidth: 2,
                      transform: 'translateY(-2px)',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    },
                  }}
                >
                  Volunteer
                </Button>
              </Stack>
            </Box>
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
            Easy to contact • Open positions • Quick response
          </Typography>
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
              <React.Fragment key={member.name}>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      textAlign: 'center',
                      borderRadius: '20px',
                      transition: 'all 0.4s ease',
                      borderTop: '4px solid',
                      borderTopColor: index % 2 === 0 ? '#002395' : '#ED2939',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: index % 2 === 0
                          ? '0 16px 40px rgba(0, 35, 149, 0.3)'
                          : '0 16px 40px rgba(237, 41, 57, 0.3)',
                        '& .portrait-photo': {
                          opacity: 0,
                        },
                        '& .action-photo': {
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    {/* Background Pattern Icon */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: 120,
                        height: 120,
                        opacity: 0.08,
                        color: index % 2 === 0 ? '#002395' : '#ED2939',
                        zIndex: 0,
                        transform: 'translate(20%, 20%)',
                      }}
                    >
                      {member.backgroundIcon}
                    </Box>

                    <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
                      {/* Portrait Photo */}
                      <Box
                        sx={{
                          position: 'relative',
                          width: 140,
                          height: 140,
                          mx: 'auto',
                          mb: 2,
                          borderRadius: '50%',
                          overflow: 'hidden',
                          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                        }}
                      >
                        <Box
                          className="portrait-photo"
                          component="img"
                          src={member.portraitPhoto}
                          alt={member.name}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'brightness(1.05) saturate(1.1)',
                            transition: 'opacity 0.4s ease',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                          }}
                        />
                        <Box
                          className="action-photo"
                          component="img"
                          src={member.actionPhoto}
                          alt={`${member.name} in action`}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'brightness(1.05) saturate(1.1)',
                            transition: 'opacity 0.4s ease',
                            opacity: 0,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                          }}
                        />
                      </Box>
                      
                      {/* MOTIVATION: Achievement badge */}
                      <Chip
                        icon={<CheckCircleIcon sx={{ fontSize: 16 }} />}
                        label={member.achievement}
                        size="small"
                        sx={{
                          mx: 'auto',
                          mb: 2,
                          backgroundColor: index % 2 === 0 ? 'rgba(0, 35, 149, 0.1)' : 'rgba(237, 41, 57, 0.1)',
                          color: index % 2 === 0 ? '#002395' : '#ED2939',
                          fontWeight: 600,
                          fontSize: '0.75rem',
                        }}
                      />

                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#0b1b3a' }}>
                        {member.name}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600, mb: 2, color: index % 2 === 0 ? '#002395' : '#ED2939' }}>
                        {member.role}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1, lineHeight: 1.6 }}>
                        {member.description}
                      </Typography>

                      {/* Skill Badges */}
                      <Stack direction="row" spacing={0.5} sx={{ mb: 2, justifyContent: 'center', flexWrap: 'wrap', gap: 0.5 }}>
                        {member.skillBadges.map((badge, badgeIdx) => (
                          <Chip
                            key={badge}
                            label={badge}
                            size="small"
                            sx={{
                              fontSize: '0.7rem',
                              height: 24,
                              backgroundColor: badgeIdx % 2 === 0 ? 'rgba(0, 35, 149, 0.1)' : 'rgba(237, 41, 57, 0.1)',
                              color: badgeIdx % 2 === 0 ? '#002395' : '#ED2939',
                              fontWeight: 600,
                              border: `1px solid ${badgeIdx % 2 === 0 ? 'rgba(0, 35, 149, 0.3)' : 'rgba(237, 41, 57, 0.3)'}`,
                            }}
                          />
                        ))}
                      </Stack>

                      <Divider sx={{ my: 2 }} />

                      {/* MOTIVATION: Member stats */}
                      <Stack direction="row" spacing={2} sx={{ mb: 2, justifyContent: 'center' }}>
                        <Box>
                          <Typography variant="caption" color="text.secondary">
                            Experience
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: '#002395' }}>
                            {member.years}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="caption" color="text.secondary">
                            Projects
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: '#ED2939' }}>
                            {member.projects}
                          </Typography>
                        </Box>
                      </Stack>

                      {/* PROMPT: Contact & LinkedIn buttons */}
                      <Stack direction="row" spacing={1} sx={{ mt: 'auto' }}>
                        <Button
                          component="a"
                          href="mailto:mitra.france@gmail.com"
                          variant="outlined"
                          size="small"
                          startIcon={<EmailIcon />}
                          fullWidth
                          sx={{
                            fontSize: '0.85rem',
                            borderColor: index % 2 === 0 ? '#002395' : '#ED2939',
                            color: index % 2 === 0 ? '#002395' : '#ED2939',
                            '&:hover': {
                              borderColor: index % 2 === 0 ? '#002395' : '#ED2939',
                              backgroundColor: index % 2 === 0 ? 'rgba(0, 35, 149, 0.05)' : 'rgba(237, 41, 57, 0.05)',
                            },
                          }}
                        >
                          Contact
                        </Button>
                        <IconButton
                          onClick={() => handleLinkedInClick(member.linkedInQuote, member.name)}
                          sx={{
                            color: '#0077b5',
                            border: '1px solid #0077b5',
                            '&:hover': {
                              backgroundColor: 'rgba(0, 119, 181, 0.1)',
                              transform: 'scale(1.1)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <LinkedInIcon />
                        </IconButton>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Team Life Gallery - Insert after second member */}
                {index === 1 && (
                  <Grid size={{ xs: 12, sm: 12, lg: 6 }}>
                    <Card
                      sx={{
                        height: '100%',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        position: 'relative',
                        border: '2px solid',
                        borderColor: '#002395',
                        boxShadow: '0 8px 24px rgba(0, 35, 149, 0.2)',
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          height: 300,
                          overflow: 'hidden',
                        }}
                      >
                        {[
                          '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
                          '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
                          '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
                          '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
                        ].map((photo, photoIdx) => (
                          <Box
                            key={photoIdx}
                            component="img"
                            src={photo}
                            alt={`Team activity ${photoIdx + 1}`}
                            sx={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              opacity: 0,
                              animation: `fadeInOut 12s infinite ${photoIdx * 3}s`,
                              '@keyframes fadeInOut': {
                                '0%, 100%': { opacity: 0 },
                                '20%, 80%': { opacity: 1 },
                              },
                            }}
                          />
                        ))}
                        <Box
                          sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: 'linear-gradient(180deg, transparent 0%, rgba(0, 35, 149, 0.9) 100%)',
                            p: 3,
                          }}
                        >
                          <Typography variant="h5" sx={{ fontWeight: 800, color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                            Collaborating for Change
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', mt: 1, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                            Team building, workshops, and collaborative projects across Europe
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </Grid>
                )}
              </React.Fragment>
            ))}
          </Grid>
        </Box>

        {/* LinkedIn Dialog */}
        <Dialog
          open={linkedInDialog.open}
          onClose={handleCloseDialog}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(237, 41, 57, 0.05) 100%)',
            },
          }}
        >
          <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <LinkedInIcon sx={{ fontSize: 32, color: '#0077b5' }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0b1b3a' }}>
                {linkedInDialog.name}
              </Typography>
            </Box>
            <IconButton onClick={handleCloseDialog} size="small">
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#0b1b3a', lineHeight: 1.8, fontSize: '1.1rem' }}>
              "{linkedInDialog.quote}"
            </Typography>
          </DialogContent>
          <DialogActions sx={{ p: 3, pt: 1 }}>
            <Button
              component="a"
              href="https://www.linkedin.com/company/mitra-france"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              startIcon={<LinkedInIcon />}
              sx={{
                backgroundColor: '#0077b5',
                '&:hover': {
                  backgroundColor: '#005885',
                },
                borderRadius: '25px',
                px: 3,
              }}
            >
              Connect on LinkedIn
            </Button>
          </DialogActions>
        </Dialog>

        <Divider sx={{ my: 8 }} />

        {/* Volunteers & International Interns Section */}
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
              <VolunteerActivismIcon sx={{ fontSize: 32, color: 'error.main' }} />
            </Box>
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 700, color: '#0b1b3a' }}>
                Our Volunteers & International Interns
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Faces of the Future - Join our global community
              </Typography>
            </Box>
          </Box>

          {/* Faces of the Future - Masonry Grid */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, color: '#0b1b3a', textAlign: 'center' }}>
              Faces of the Future
            </Typography>
            <ImageList
              variant="masonry"
              cols={4}
              gap={16}
              sx={{
                mb: 0,
                '& .MuiImageListItem-root': {
                  borderRadius: '20px',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 32px rgba(0, 35, 149, 0.3)',
                    '& .volunteer-overlay': {
                      opacity: 1,
                    },
                  },
                },
              }}
            >
              {[
                // 70% Portraits
                { photo: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg', type: 'portrait', country: '🇫🇷', city: 'France', quote: 'My internship in Nice was a life-changing experience!' },
                { photo: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg', type: 'portrait', country: '🇩🇪', city: 'Germany', quote: 'Working with MITRA FRANCE opened new horizons for me!' },
                { photo: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg', type: 'portrait', country: '🇪🇸', city: 'Spain', quote: 'The best learning experience I\'ve ever had!' },
                { photo: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg', type: 'portrait', country: '🇵🇱', city: 'Poland', quote: 'Amazing team and meaningful projects!' },
                { photo: '/photos/571419367_1143811194593552_6930038688628840775_n.jpg', type: 'portrait', country: '🇺🇦', city: 'Ukraine', quote: 'I found my passion for community work here!' },
                { photo: '/photos/583489432_1157911303183541_1292926580526900497_n.jpg', type: 'portrait', country: '🇷🇴', city: 'Romania', quote: 'Professional growth and cultural exchange!' },
                { photo: '/photos/583741041_1157902773184394_5619801435922057517_n.jpg', type: 'portrait', country: '🇮🇹', city: 'Italy', quote: 'Incredible opportunity to make a difference!' },
                { photo: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg', type: 'portrait', country: '🇬🇧', city: 'UK', quote: 'The team became my second family!' },
                // 30% Activity photos
                { photo: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg', type: 'activity', title: 'Working on Project' },
                { photo: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg', type: 'activity', title: 'Team Workshop' },
                { photo: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg', type: 'activity', title: 'Field Work' },
                { photo: '/photos/571419367_1143811194593552_6930038688628840775_n.jpg', type: 'activity', title: 'Video Production' },
              ].map((item, idx) => (
                <ImageListItem key={idx} cols={item.type === 'activity' ? 2 : 1} rows={item.type === 'activity' ? 2 : 1}>
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: item.type === 'activity' ? 300 : 250,
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      component="img"
                      src={item.photo}
                      alt={item.type === 'portrait' ? item.city : item.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.95) saturate(1.1)',
                        transition: 'transform 0.4s ease',
                      }}
                    />
                    {item.type === 'portrait' && (
                      <Box
                        className="volunteer-overlay"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(180deg, transparent 0%, rgba(0, 35, 149, 0.95) 100%)',
                          opacity: 0,
                          transition: 'opacity 0.4s ease',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                          p: 2,
                        }}
                      >
                        <Typography sx={{ fontSize: 48, mb: 1 }}>{item.country}</Typography>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'white', mb: 1, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                          {item.city}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'white', textAlign: 'center', textShadow: '0 1px 2px rgba(0,0,0,0.5)', fontStyle: 'italic' }}>
                          "{item.quote}"
                        </Typography>
                      </Box>
                    )}
                    {item.type === 'activity' && (
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          background: 'linear-gradient(180deg, transparent 0%, rgba(0, 35, 149, 0.8) 100%)',
                          p: 2,
                        }}
                      >
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                          {item.title}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </ImageListItem>
              ))}
            </ImageList>
          </Box>

          {/* Impact Map */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, color: '#0b1b3a', textAlign: 'center' }}>
              Our Global Network
            </Typography>
            <Card
              sx={{
                p: 4,
                borderRadius: '20px',
                background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(237, 41, 57, 0.05) 100%)',
                border: '2px solid',
                borderColor: '#002395',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                component="svg"
                viewBox="0 0 600 400"
                sx={{
                  width: '100%',
                  height: 400,
                  opacity: 0.3,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              >
                {/* Simplified Europe outline */}
                <path
                  d="M 50 200 L 100 150 L 180 120 L 280 110 L 400 120 L 500 140 L 550 160 L 540 220 L 480 260 L 400 280 L 300 270 L 200 260 L 120 250 L 60 240 Z"
                  fill="none"
                  stroke="#002395"
                  strokeWidth="3"
                />
                {/* Nice (HQ) */}
                <circle cx="300" cy="250" r="12" fill="#ED2939" />
                <text x="300" y="240" fontSize="14" fill="#ED2939" fontWeight="700" textAnchor="middle">
                  Nice
                </text>
                {/* Connection lines */}
                {[
                  { x: 150, y: 150, city: 'Berlin' },
                  { x: 350, y: 120, city: 'Kyiv' },
                  { x: 200, y: 280, city: 'Madrid' },
                  { x: 450, y: 180, city: 'Warsaw' },
                ].map((point, idx) => (
                  <line
                    key={idx}
                    x1="300"
                    y1="250"
                    x2={point.x}
                    y2={point.y}
                    stroke="#002395"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    opacity="0.5"
                  />
                ))}
              </Box>
              <Grid container spacing={3} sx={{ position: 'relative', zIndex: 1 }}>
                {[
                  { city: 'Berlin', country: '🇩🇪', photo: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg' },
                  { city: 'Kyiv', country: '🇺🇦', photo: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg' },
                  { city: 'Madrid', country: '🇪🇸', photo: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg' },
                  { city: 'Warsaw', country: '🇵🇱', photo: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg' },
                ].map((location, idx) => (
                  <Grid size={{ xs: 6, sm: 3 }} key={idx}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Box
                        component="img"
                        src={location.photo}
                        alt={location.city}
                        sx={{
                          width: 100,
                          height: 100,
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '3px solid #002395',
                          boxShadow: '0 4px 16px rgba(0, 35, 149, 0.3)',
                          mb: 1.5,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.1)',
                            boxShadow: '0 8px 24px rgba(0, 35, 149, 0.5)',
                          },
                        }}
                      />
                      <Typography sx={{ fontSize: 32, mb: 0.5 }}>{location.country}</Typography>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0b1b3a' }}>
                        {location.city}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Box>

          {/* Life as an Intern - Instagram Stories Style */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, color: '#0b1b3a', textAlign: 'center' }}>
              Life as an Intern
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 3,
                overflowX: 'auto',
                pb: 2,
                '&::-webkit-scrollbar': {
                  height: 6,
                },
                '&::-webkit-scrollbar-track': {
                  backgroundColor: 'rgba(0,0,0,0.05)',
                  borderRadius: 3,
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: 'rgba(0, 35, 149, 0.3)',
                  borderRadius: 3,
                },
              }}
            >
              {[
                {
                  photo: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
                  title: 'Office Vibe',
                  sticker: '☕',
                  location: 'Nice, France',
                },
                {
                  photo: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
                  title: 'Field Work',
                  sticker: '🌍',
                  location: 'Erasmus+ Project',
                },
                {
                  photo: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
                  title: 'Cultural Exchange',
                  sticker: '🇪🇺',
                  location: 'Nice, France',
                },
                {
                  photo: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
                  title: 'Team Building',
                  sticker: '🤝',
                  location: 'Workshop',
                },
              ].map((story, idx) => (
                <Card
                  key={idx}
                  sx={{
                    minWidth: 280,
                    height: 500,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 16px 40px rgba(0, 35, 149, 0.3)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={story.photo}
                    alt={story.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.9) saturate(1.1)',
                    }}
                  />
                  {/* Stickers */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      fontSize: 48,
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                    }}
                  >
                    {story.sticker}
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(180deg, transparent 0%, rgba(0, 35, 149, 0.95) 100%)',
                      p: 3,
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 800, color: 'white', mb: 1, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                      {story.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LocationOnIcon sx={{ color: 'white', fontSize: 20 }} />
                      <Typography variant="body2" sx={{ color: 'white', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                        {story.location}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              ))}
            </Box>
          </Box>
        </Box>

        {/* MOTIVATION: Why join section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 4, fontWeight: 700, color: '#0b1b3a' }}>
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
            icon={<VolunteerActivismIcon />}
            label="Join Our Team"
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
            <VolunteerActivismIcon sx={{ fontSize: 40, color: 'primary.main' }} />
          </Box>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
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
              <Typography variant="body2" sx={{ fontWeight: 600 }}>Professional Growth</Typography>
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

          {/* PROMPT: Clear, prominent CTAs - Join the Community */}
          <Box
            sx={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              mt: 6,
              mb: 4,
              minHeight: 400,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Background Photo */}
            <Box
              component="img"
              src="/photos/583924019_1157903166517688_8756873269993443102_n.jpg"
              alt="Team waving"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.7) saturate(1.2)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.4) 0%, rgba(237, 41, 57, 0.4) 100%)',
              }}
            />
            <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center', p: 4 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  color: 'white',
                  mb: 3,
                  textShadow: '0 4px 16px rgba(0,0,0,0.5)',
                  fontSize: { xs: '2rem', md: '3rem' },
                }}
              >
                Ready to start your journey?
              </Typography>
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 6,
                  py: 2,
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  borderRadius: '30px',
                  backgroundColor: '#ED2939',
                  color: 'white',
                  boxShadow: '0 8px 32px rgba(237, 41, 57, 0.5)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    backgroundColor: '#c91f2f',
                    transform: 'translateY(-6px) scale(1.05)',
                    boxShadow: '0 12px 48px rgba(237, 41, 57, 0.7)',
                    '& .MuiButton-endIcon': {
                      transform: 'translateX(8px)',
                    },
                  },
                  '& .MuiButton-endIcon': {
                    transition: 'transform 0.4s ease',
                  },
                }}
              >
                Join the Community
              </Button>
            </Box>
          </Box>
          
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
            Free to apply • Easy process • Quick response
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
