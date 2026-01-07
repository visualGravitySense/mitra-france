import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import PaletteIcon from '@mui/icons-material/Palette';
import ComputerIcon from '@mui/icons-material/Computer';
import ElderlyIcon from '@mui/icons-material/Elderly';
import PeopleIcon from '@mui/icons-material/People';

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
      id={`events-tabpanel-${index}`}
      aria-labelledby={`events-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

const workshops = [
  {
    title: 'Digital Skills for Seniors',
    category: 'For Seniors',
    icon: <ElderlyIcon />,
    description: 'Learn essential digital skills for everyday life - from using smartphones to online banking.',
  },
  {
    title: 'Media Literacy Workshop',
    category: 'Media Literacy',
    icon: <PaletteIcon />,
    description: 'Develop critical thinking skills to navigate the modern media landscape and identify reliable sources.',
  },
  {
    title: 'Creative Writing for Youth',
    category: 'For Youth',
    icon: <PeopleIcon />,
    description: 'Express yourself through creative writing and storytelling workshops.',
  },
  {
    title: 'Digital Photography Basics',
    category: 'Digital Skills',
    icon: <ComputerIcon />,
    description: 'Master the basics of digital photography and photo editing.',
  },
];

export default function Events() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ py: { xs: 8, sm: 10 } }}>
      <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
        Events & Activities
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: 'center', mb: 6, color: 'text.secondary', fontSize: '1.1rem' }}
      >
        Join our workshops, training courses, and cultural activities
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs value={value} onChange={handleChange} aria-label="events tabs" variant="scrollable" scrollButtons="auto">
          <Tab label="Workshops" />
          <Tab label="Training Courses" />
          <Tab label="Cultural Activities" />
          <Tab label="Calendar" />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Grid container spacing={4}>
          {workshops.map((workshop) => (
            <Grid item xs={12} sm={6} md={4} key={workshop.title}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ color: 'primary.main', mb: 2, fontSize: 40 }}>
                    {workshop.icon}
                  </Box>
                  <Chip label={workshop.category} size="small" sx={{ mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    {workshop.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {workshop.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Card>
          <CardContent>
            <SchoolIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              Training Courses
            </Typography>
            <Typography variant="body1" paragraph>
              We offer comprehensive training courses in various areas including:
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <li>
                <Typography variant="body1">Multimedia literacy and production</Typography>
              </li>
              <li>
                <Typography variant="body1">Media and information literacy</Typography>
              </li>
              <li>
                <Typography variant="body1">Digital skills for educators</Typography>
              </li>
              <li>
                <Typography variant="body1">Intercultural communication</Typography>
              </li>
              <li>
                <Typography variant="body1">Project management for non-profits</Typography>
              </li>
            </Box>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Our training courses are designed for educators, community workers, and anyone
              interested in developing their skills. Contact us for more information about
              upcoming courses.
            </Typography>
          </CardContent>
        </Card>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Card>
          <CardContent>
            <PaletteIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              Cultural Activities
            </Typography>
            <Typography variant="body1" paragraph>
              We organize various cultural activities throughout the year to celebrate diversity
              and promote intercultural understanding:
            </Typography>
            <Grid container spacing={3} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Cultural Exhibitions
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Showcasing artwork and cultural expressions from diverse communities
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Film Screenings
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Educational film screenings followed by discussions
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Cultural Festivals
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Community festivals celebrating different cultures and traditions
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Art Workshops
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Hands-on art workshops exploring different artistic traditions
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Card
          sx={{
            background: (theme) =>
              theme.palette.mode === 'light'
                ? 'linear-gradient(135deg, rgba(25, 118, 210, 0.1), rgba(66, 165, 245, 0.1))'
                : 'linear-gradient(135deg, rgba(25, 118, 210, 0.2), rgba(66, 165, 245, 0.2))',
          }}
        >
          <CardContent sx={{ textAlign: 'center', p: 4 }}>
            <EventIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              Event Calendar
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Check our upcoming events and activities. For the most current schedule and to
              register for events, please contact us directly.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              We regularly update our calendar with new workshops, training sessions, and
              cultural activities. Follow us on social media or subscribe to our newsletter
              to stay informed about upcoming events.
            </Typography>
          </CardContent>
        </Card>
      </TabPanel>
    </Container>
  );
}
