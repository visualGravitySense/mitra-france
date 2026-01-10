import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import MuseumIcon from '@mui/icons-material/Museum';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PublicIcon from '@mui/icons-material/Public';
import CollectionsIcon from '@mui/icons-material/Collections';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`gallery-tabpanel-${index}`}
      aria-labelledby={`gallery-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Gallery() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // Placeholder for gallery items - in a real application, these would come from a backend
  const photoPlaceholders = Array.from({ length: 6 }, (_, i) => i + 1);
  const videoPlaceholders = Array.from({ length: 4 }, (_, i) => i + 1);

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
              icon={<CollectionsIcon />}
              label="Our Gallery"
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
        Gallery
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
              Explore our photos, videos, and exhibitions from projects and events. 
              Discover the impact we create together with our community.
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
                label="100+ Photos"
                sx={{
                  backgroundColor: 'rgba(76, 175, 80, 0.1)',
                  color: 'success.main',
                  fontWeight: 600,
                }}
              />
              <Chip
                icon={<TrendingUpIcon sx={{ color: 'primary.main' }} />}
                label="50+ Videos"
                sx={{
                  backgroundColor: 'rgba(0, 35, 149, 0.1)',
                  color: 'primary.main',
                  fontWeight: 600,
                }}
              />
              <Chip
                icon={<PublicIcon sx={{ color: 'error.main' }} />}
                label="10+ Exhibitions"
                sx={{
                  backgroundColor: 'rgba(237, 41, 57, 0.1)',
                  color: 'error.main',
                  fontWeight: 600,
                }}
              />
            </Box>
          </Box>

          {/* MOTIVATION: Gallery statistics with visual appeal */}
          <Grid container spacing={3} sx={{ mt: 2, mb: 4 }}>
            {[
              { icon: <PhotoLibraryIcon />, label: 'Total Photos', value: '100+', color: 'primary.main' },
              { icon: <VideoLibraryIcon />, label: 'Project Videos', value: '50+', color: 'error.main' },
              { icon: <MuseumIcon />, label: 'Exhibitions', value: '10+', color: 'success.main' },
              { icon: <EmojiEventsIcon />, label: 'Events Documented', value: '30+', color: 'info.main' },
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
              Explore Our Gallery
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontSize: '1.05rem' }}>
              Browse through our collection of photos, videos, and exhibitions. 
              See the impact we create together with our community.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
              <Button
                component={RouterLink}
                to="/events"
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
                View Events
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
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
                Contact Us
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
            Easy to browse • Free access • High quality content
          </Typography>
        </Container>
      </Box>

      <Container>
        {/* ABILITY: Enhanced tabs with clear labels */}
        <Box sx={{ mb: 6, mt: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              color: 'text.primary',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            Choose gallery type:
          </Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="gallery tabs"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              borderBottom: 2,
              borderColor: 'divider',
              mb: 4,
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                minHeight: 72,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(0, 35, 149, 0.05)',
                  transform: 'translateY(-2px)',
                },
              },
              '& .Mui-selected': {
                color: 'primary.main',
                fontWeight: 700,
              },
              '& .MuiTabs-indicator': {
                height: 3,
                borderRadius: '3px 3px 0 0',
              },
            }}
          >
          <Tab label="Photos" icon={<PhotoLibraryIcon />} iconPosition="start" />
          <Tab label="Videos" icon={<VideoLibraryIcon />} iconPosition="start" />
          <Tab label="Exhibitions" icon={<MuseumIcon />} iconPosition="start" />
        </Tabs>
          
          {/* ABILITY: Show simplicity indicator for navigation */}
          <Typography
            variant="caption"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.5,
              mb: 2,
            }}
          >
            <CheckCircleIcon sx={{ fontSize: 16, color: 'success.main' }} />
            Easy navigation • Filter by type • High quality content
          </Typography>
      </Box>

      <TabPanel value={value} index={0}>
        <Grid container spacing={3}>
          {photoPlaceholders.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item}>
              <Card
                sx={{
                  borderTop: '4px solid',
                  borderTopColor: index % 3 === 0 ? 'primary.main' : index % 3 === 1 ? 'error.main' : 'success.main',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: index % 3 === 0
                      ? '0 12px 30px rgba(0, 35, 149, 0.2)'
                      : index % 3 === 1
                      ? '0 12px 30px rgba(237, 41, 57, 0.2)'
                      : '0 12px 30px rgba(76, 175, 80, 0.2)',
                  },
                }}
              >
                <Box
                  sx={{
                    aspectRatio: '16/9',
                    background: index % 3 === 0
                      ? 'linear-gradient(135deg, rgba(0, 35, 149, 0.2), rgba(0, 35, 149, 0.1))'
                      : index % 3 === 1
                      ? 'linear-gradient(135deg, rgba(237, 41, 57, 0.2), rgba(237, 41, 57, 0.1))'
                      : 'linear-gradient(135deg, rgba(76, 175, 80, 0.2), rgba(76, 175, 80, 0.1))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <PhotoLibraryIcon
                    sx={{
                      fontSize: 60,
                      color: index % 3 === 0 ? 'primary.main' : index % 3 === 1 ? 'error.main' : 'success.main',
                      opacity: 0.5,
                    }}
                  />
                </Box>
                <CardContent sx={{ p: 2 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500, textAlign: 'center' }}>
                    Project Photo {item}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Grid container spacing={3}>
          {videoPlaceholders.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={item}>
              <Card
                sx={{
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
                <Box
                  sx={{
                    aspectRatio: '16/9',
                    background: index % 2 === 0
                      ? 'linear-gradient(135deg, rgba(237, 41, 57, 0.2), rgba(237, 41, 57, 0.1))'
                      : 'linear-gradient(135deg, rgba(0, 35, 149, 0.2), rgba(0, 35, 149, 0.1))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <PlayCircleOutlineIcon
                    sx={{
                      fontSize: 80,
                      color: index % 2 === 0 ? 'error.main' : 'primary.main',
                      opacity: 0.7,
                    }}
                  />
                </Box>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Project Video {item}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 2 }}>
                    Watch our project videos documenting our work and impact.
                  </Typography>
                  {/* PROMPT: Video-specific CTA */}
                  <Button
                    variant="outlined"
                    color={index % 2 === 0 ? 'error' : 'primary'}
                    startIcon={<YouTubeIcon />}
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                    sx={{
                      borderWidth: 2,
                      fontWeight: 600,
                      '&:hover': {
                        borderWidth: 2,
                      },
                    }}
                  >
                    Watch on YouTube
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* PROMPT: YouTube channel CTA */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Card
            sx={{
              borderLeft: '4px solid',
              borderLeftColor: 'error.main',
              background: 'linear-gradient(135deg, rgba(237, 41, 57, 0.05) 0%, rgba(237, 41, 57, 0.02) 100%)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 25px rgba(237, 41, 57, 0.15)',
              },
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(237, 41, 57, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3,
                }}
              >
                <YouTubeIcon sx={{ fontSize: 50, color: 'error.main' }} />
              </Box>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
                Visit Our YouTube Channel
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                Subscribe to our YouTube channel to stay updated with our latest project videos,
                tutorials, and event recordings.
              </Typography>
              <Button
                variant="contained"
                color="error"
                size="large"
                startIcon={<YouTubeIcon />}
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  px: 5,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  borderRadius: '25px',
                  boxShadow: '0 4px 14px rgba(237, 41, 57, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 18px rgba(237, 41, 57, 0.4)',
                  },
                }}
              >
                View Channel
              </Button>
            </CardContent>
          </Card>
        </Box>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Card
          sx={{
            borderLeft: '4px solid',
            borderLeftColor: 'success.main',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 25px rgba(76, 175, 80, 0.15)',
            },
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: '12px',
                  backgroundColor: 'rgba(76, 175, 80, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'success.main',
                }}
              >
                <MuseumIcon sx={{ fontSize: 40 }} />
              </Box>
              <Box>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                  Exhibitions
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Showcasing our work and impact
                </Typography>
              </Box>
            </Box>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              We regularly organize and participate in exhibitions showcasing:
            </Typography>
            <Grid container spacing={3} sx={{ mb: 3 }}>
              {[
                {
                  title: 'Cultural Heritage Exhibitions',
                  description: 'Showcasing cultural heritage from our European projects',
                  color: 'primary.main',
                },
                {
                  title: 'Media Literacy Art',
                  description: 'Creative works exploring media and information literacy themes',
                  color: 'error.main',
                },
                {
                  title: 'Community Art Projects',
                  description: 'Artworks created through our community engagement programs',
                  color: 'success.main',
                },
                {
                  title: 'Digital Media Showcases',
                  description: 'Digital art and multimedia projects from our workshops',
                  color: 'info.main',
                },
              ].map((exhibition, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={exhibition.title}>
                  <Card
                    variant="outlined"
                    sx={{
                      height: '100%',
                      borderTop: `4px solid ${exhibition.color}`,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 6px 20px ${exhibition.color}25`,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                        {exhibition.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {exhibition.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 500, mb: 3 }}>
              Our exhibitions are held at various locations in Nice and partner venues. Check
              our events calendar for upcoming exhibitions.
            </Typography>
            {/* PROMPT: Exhibitions CTA */}
            <Button
              component={RouterLink}
              to="/events"
              variant="contained"
              color="success"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 600,
                borderRadius: '25px',
                boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)',
              }}
            >
              View Events Calendar
            </Button>
          </CardContent>
        </Card>
      </TabPanel>

      {/* BJ FOGG MODEL: PROMPT - Strong call-to-action with enhanced motivation */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.08) 0%, rgba(237, 41, 57, 0.08) 100%)',
          borderRadius: '16px',
          p: 6,
          textAlign: 'center',
          mt: 8,
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
          icon={<CollectionsIcon />}
          label="Explore More"
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
          <PhotoLibraryIcon sx={{ fontSize: 40, color: 'primary.main' }} />
        </Box>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
          Want to See More?
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          paragraph
          sx={{ mb: 4, maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}
        >
          Follow us on social media, subscribe to our newsletter, or visit our events to see
          our work in action. Join our community and be part of the impact we create together.
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
            <Typography variant="body2" sx={{ fontWeight: 600 }}>Latest Updates</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <PublicIcon sx={{ fontSize: 32, color: 'primary.main', mb: 0.5 }} />
            <Typography variant="body2" sx={{ fontWeight: 600 }}>Community Access</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <TrendingUpIcon sx={{ fontSize: 32, color: 'error.main', mb: 0.5 }} />
            <Typography variant="body2" sx={{ fontWeight: 600 }}>Exclusive Content</Typography>
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
            to="/events"
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
            View Events
          </Button>
          <Button
            component={RouterLink}
            to="/contact"
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
            Contact Us
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
          Free access • Easy to browse • High quality content
        </Typography>
      </Box>
      </Container>
    </Box>
  );
}
