import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import HistoryIcon from '@mui/icons-material/History';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function About() {
  return (
    <Container sx={{ py: { xs: 8, sm: 10 } }}>
      <Typography variant="h2" sx={{ mb: 4, textAlign: 'center' }}>
        About MITRA FRANCE
      </Typography>

      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          Our Story
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          MITRA FRANCE is a non-profit organization based in Nice, France, dedicated to
          fostering intercultural understanding, promoting digital literacy, and supporting
          community engagement through education, media, and arts. Since our establishment,
          we have been committed to creating inclusive learning environments that empower
          individuals from diverse backgrounds, including seniors, youth, migrants, refugees,
          women, and minorities.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          Our work spans across various European Union programs, particularly Erasmus+,
          where we collaborate with partners across Europe to develop innovative educational
          projects and promote cultural exchange.
        </Typography>
      </Box>

      <Divider sx={{ my: 8 }} />

      <Box sx={{ mb: 8 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <FavoriteIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
          <Typography variant="h4">Mission & Values</Typography>
        </Box>
        <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  Our Mission
                </Typography>
                <Typography variant="body1" paragraph>
                  To promote intercultural education, digital literacy, and cultural integration
                  through innovative programs that empower individuals and strengthen communities
                  across Europe.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
            <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  Our Values
                </Typography>
                <Typography variant="body1" component="div">
                  <ul style={{ paddingLeft: '1.5rem' }}>
                    <li>Inclusion and Diversity</li>
                    <li>Education for All</li>
                    <li>Cultural Exchange</li>
                    <li>Community Empowerment</li>
                    <li>Innovation in Learning</li>
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 8 }} />

      <Box sx={{ mb: 8 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <HistoryIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
          <Typography variant="h4">Organization History</Typography>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    Foundation
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    MITRA FRANCE was established in Nice, France, with a vision to promote
                    intercultural education and digital inclusion.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    First Erasmus+ Projects
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Began participating in European Union Erasmus+ programs, focusing on adult
                    education and digital literacy.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    Expansion
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Expanded programs to include media literacy, cultural activities, and specialized
                    programs for seniors and youth.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Divider sx={{ my: 8 }} />

      <Box sx={{ mb: 8 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <EmojiEventsIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
          <Typography variant="h4">Achievements</Typography>
        </Box>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Multiple Erasmus+ Projects
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Successfully implemented numerous KA1 and KA2 projects focusing on adult
                  education, digital literacy, and cultural heritage.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Community Impact
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Reached thousands of participants including seniors, youth, migrants, and
                  refugees through our workshops and training programs.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Partnership Network
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Established strong partnerships with local institutions, European organizations,
                  and educational institutions across France and Europe.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 8 }} />

      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <GroupsIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
          <Typography variant="h4">Youth4Media Network</Typography>
        </Box>
        <Card>
          <CardContent>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              MITRA FRANCE is part of the Youth4Media Network, a collaborative platform that
              connects organizations and individuals working in media literacy, youth engagement,
              and cultural education across Europe. Through this network, we share best practices,
              collaborate on projects, and create opportunities for youth to develop media skills
              and critical thinking.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              The network enables us to reach a wider audience and participate in cross-border
              initiatives that promote media literacy and youth empowerment.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
