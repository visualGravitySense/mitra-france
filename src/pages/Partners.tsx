import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CastleIcon from '@mui/icons-material/Castle';

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
    <Container sx={{ py: { xs: 8, sm: 10 } }}>
      <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
        Our Partners
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: 'center', mb: 6, color: 'text.secondary', fontSize: '1.1rem' }}
      >
        We collaborate with local organizations, educational institutions, and European partners to
        create meaningful impact
      </Typography>

      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Local Partners
        </Typography>
        <Grid container spacing={3}>
          {localPartners.map((partner) => (
            <Grid item xs={12} sm={6} md={4} key={partner.name}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ color: 'primary.main', mb: 2, fontSize: 40 }}>
                    {partner.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {partner.name}
                  </Typography>
                  <Chip label={partner.type} size="small" sx={{ mt: 1 }} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 8 }} />

      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Educational Institutions
        </Typography>
        <Grid container spacing={3}>
          {educationalInstitutions.map((institution) => (
            <Grid item xs={12} sm={6} md={4} key={institution.name}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ color: 'primary.main', mb: 2, fontSize: 40 }}>
                    {institution.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {institution.name}
                  </Typography>
                  <Chip label={institution.type} size="small" sx={{ mt: 1 }} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 8 }} />

      <Box>
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          European Partners
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Through our participation in Erasmus+ programs, we collaborate with organizations
              across Europe. Our European network includes:
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <li>
                <Typography variant="body1">
                  Educational institutions and training organizations
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Non-profit organizations focused on adult education and digital literacy
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Cultural and media organizations promoting media literacy
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Youth organizations and community centers
                </Typography>
              </li>
            </Box>
            <Typography variant="body1" sx={{ mt: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
              These partnerships enable us to exchange best practices, develop innovative projects,
              and create opportunities for cross-cultural learning and collaboration.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
