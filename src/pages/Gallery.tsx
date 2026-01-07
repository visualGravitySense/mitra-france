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
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import MuseumIcon from '@mui/icons-material/Museum';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

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
    <Container sx={{ py: { xs: 8, sm: 10 } }}>
      <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
        Gallery
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: 'center', mb: 6, color: 'text.secondary', fontSize: '1.1rem' }}
      >
        Explore our photos, videos, and exhibitions from projects and events
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs value={value} onChange={handleChange} aria-label="gallery tabs" variant="scrollable" scrollButtons="auto">
          <Tab label="Photos" icon={<PhotoLibraryIcon />} iconPosition="start" />
          <Tab label="Videos" icon={<VideoLibraryIcon />} iconPosition="start" />
          <Tab label="Exhibitions" icon={<MuseumIcon />} iconPosition="start" />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Grid container spacing={3}>
          {photoPlaceholders.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item}>
              <Card>
                <Box
                  sx={{
                    aspectRatio: '16/9',
                    background: (theme) =>
                      theme.palette.mode === 'light'
                        ? 'linear-gradient(135deg, rgba(25, 118, 210, 0.2), rgba(66, 165, 245, 0.2))'
                        : 'linear-gradient(135deg, rgba(25, 118, 210, 0.3), rgba(66, 165, 245, 0.3))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <PhotoLibraryIcon sx={{ fontSize: 60, color: 'primary.main', opacity: 0.5 }} />
                </Box>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
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
          {videoPlaceholders.map((item) => (
            <Grid size={{ xs: 12, sm: 6 }} key={item}>
              <Card>
                <Box
                  sx={{
                    aspectRatio: '16/9',
                    background: (theme) =>
                      theme.palette.mode === 'light'
                        ? 'linear-gradient(135deg, rgba(25, 118, 210, 0.2), rgba(66, 165, 245, 0.2))'
                        : 'linear-gradient(135deg, rgba(25, 118, 210, 0.3), rgba(66, 165, 245, 0.3))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <PlayCircleOutlineIcon sx={{ fontSize: 80, color: 'primary.main', opacity: 0.7 }} />
                </Box>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Project Video {item}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Watch our project videos documenting our work and impact.
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<YouTubeIcon />}
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch on YouTube
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Card>
            <CardContent>
              <YouTubeIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Visit Our YouTube Channel
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Subscribe to our YouTube channel to stay updated with our latest project videos,
                tutorials, and event recordings.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                startIcon={<YouTubeIcon />}
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Channel
              </Button>
            </CardContent>
          </Card>
        </Box>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Card>
          <CardContent>
            <MuseumIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              Exhibitions
            </Typography>
            <Typography variant="body1" paragraph>
              We regularly organize and participate in exhibitions showcasing:
            </Typography>
            <Grid container spacing={3} sx={{ mt: 1 }}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Cultural Heritage Exhibitions
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Showcasing cultural heritage from our European projects
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Media Literacy Art
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Creative works exploring media and information literacy themes
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Community Art Projects
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Artworks created through our community engagement programs
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Digital Media Showcases
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Digital art and multimedia projects from our workshops
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Typography variant="body1" sx={{ mt: 3 }}>
              Our exhibitions are held at various locations in Nice and partner venues. Check
              our events calendar for upcoming exhibitions.
            </Typography>
          </CardContent>
        </Card>
      </TabPanel>
    </Container>
  );
}
