import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from '@mui/icons-material/Language';
import { Link as RouterLink } from 'react-router-dom';

const erasmusKA2Projects = [
  {
    title: 'Media literacy in adult education',
    period: '2016-2018',
    description: 'Promoting media literacy skills among adult learners through innovative teaching methods.',
  },
  {
    title: 'Digital Senior Citizen',
    period: '2018-2020',
    description: 'Empowering senior citizens with essential digital skills for everyday life.',
  },
  {
    title: 'Cultural regeneration',
    period: '2018-2020',
    description: 'Revitalizing cultural heritage through community engagement and education.',
  },
  {
    title: 'Media and information literacy',
    period: '2018-2020',
    description: 'Developing critical thinking skills to navigate the information landscape.',
  },
  {
    title: 'Cultural Heritage for Youth',
    period: '2020-2022',
    description: 'Engaging young people with cultural heritage through modern media and arts.',
  },
];

const erasmusKA1Projects = [
  {
    title: 'Multimedia literacy',
    period: '2017',
    description: 'Training courses on multimedia production and digital storytelling.',
  },
  {
    title: 'Look Sharp: fake news',
    period: '2018',
    description: 'Addressing the challenge of fake news through media literacy education.',
  },
  {
    title: 'YouthPass 4 Future',
    period: '2018',
    description: 'Supporting youth mobility and recognition of non-formal learning.',
  },
  {
    title: 'Look Sharp: media literacy',
    period: '2022',
    description: 'Advanced training on media literacy and critical information analysis.',
  },
];

const partnershipProjects = [
  'Positive emotional life',
  'Legends and fairy tales',
  'Slow food – long life',
  'Critical thinking for seniors',
  'Tell your story',
  'Creative reading and writing',
  'Ethno-design in fashion',
];

export default function Projects() {
  return (
    <Container sx={{ py: { xs: 8, sm: 10 } }}>
      <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
        Our Projects
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: 'center', mb: 6, color: 'text.secondary', fontSize: '1.1rem' }}
      >
        Discover our European and local projects promoting education, digital literacy, and cultural exchange
      </Typography>

      <Box sx={{ mb: 8 }}>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <SchoolIcon color="primary" />
              <Typography variant="h5">Erasmus+ KA2 Projects</Typography>
              <Chip label="Cooperation Partnerships" size="small" color="primary" />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3} sx={{ mt: 1 }}>
              {erasmusKA2Projects.map((project) => (
                <Grid item xs={12} sm={6} md={4} key={project.title}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Chip label={project.period} size="small" sx={{ mb: 2 }} />
                      <Typography variant="h6" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <LanguageIcon color="primary" />
              <Typography variant="h5">Erasmus+ KA1 Projects</Typography>
              <Chip label="Mobility Projects" size="small" color="primary" />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3} sx={{ mt: 1 }}>
              {erasmusKA1Projects.map((project) => (
                <Grid item xs={12} sm={6} md={4} key={project.title}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Chip label={project.period} size="small" sx={{ mb: 2 }} />
                      <Typography variant="h6" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5">Partnership Projects</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              {partnershipProjects.map((project) => (
                <Grid item xs={12} sm={6} md={4} key={project}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="body1">{project}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>

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
            <Typography variant="h5" gutterBottom>
              Interested in Collaborating?
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              We are always open to new partnerships and project collaborations. Contact us to
              learn more about our current projects and explore collaboration opportunities.
            </Typography>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              color="primary"
              size="large"
            >
              Get in Touch
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
