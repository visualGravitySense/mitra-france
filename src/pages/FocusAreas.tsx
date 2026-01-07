import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import SchoolIcon from '@mui/icons-material/School';
import PaletteIcon from '@mui/icons-material/Palette';
import ComputerIcon from '@mui/icons-material/Computer';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupsIcon from '@mui/icons-material/Groups';
import LanguageIcon from '@mui/icons-material/Language';
import PublicIcon from '@mui/icons-material/Public';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import BrushIcon from '@mui/icons-material/Brush';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ElderlyIcon from '@mui/icons-material/Elderly';
import PeopleIcon from '@mui/icons-material/People';
import WcIcon from '@mui/icons-material/Wc';

const focusAreas = [
  {
    id: 'intercultural',
    title: 'Intercultural Education',
    icon: <SchoolIcon sx={{ fontSize: 48 }} />,
    description:
      'Promoting inclusive education, cultural diversity, and social integration across communities.',
    subAreas: [
      { icon: <GroupsIcon />, title: 'Inclusive Education', description: 'Creating learning environments accessible to all' },
      { icon: <LanguageIcon />, title: 'Cultural Diversity', description: 'Celebrating and understanding different cultures' },
      { icon: <PublicIcon />, title: 'Social Integration', description: 'Building bridges between diverse communities' },
    ],
  },
  {
    id: 'media-arts',
    title: 'Media & Arts',
    icon: <PaletteIcon sx={{ fontSize: 48 }} />,
    description:
      'Fostering media literacy, arts education, and creative technologies for personal and professional development.',
    subAreas: [
      { icon: <VideoLibraryIcon />, title: 'Media Literacy', description: 'Developing critical thinking about media content' },
      { icon: <BrushIcon />, title: 'Arts Education', description: 'Exploring creativity through various artistic forms' },
      { icon: <SmartphoneIcon />, title: 'Creative Technologies', description: 'Using technology as a tool for artistic expression' },
    ],
  },
  {
    id: 'digital',
    title: 'Digital Literacy',
    icon: <ComputerIcon sx={{ fontSize: 48 }} />,
    description:
      'Empowering individuals through digital skills training, especially for vulnerable groups.',
    subAreas: [
      { icon: <ElderlyIcon />, title: 'Programs for Seniors 60+', description: 'Digital skills workshops for senior citizens' },
      { icon: <PeopleIcon />, title: 'Youth & NEETs', description: 'Digital training for young people and NEETs' },
      { icon: <GroupsIcon />, title: 'Migrants & Refugees', description: 'Digital inclusion programs for newcomers' },
      { icon: <WcIcon />, title: 'Women & Minorities', description: 'Empowering women and minorities through digital skills' },
    ],
  },
  {
    id: 'volunteering',
    title: 'Volunteering',
    icon: <VolunteerActivismIcon sx={{ fontSize: 48 }} />,
    description:
      'Building stronger communities through active volunteering and civic engagement.',
    subAreas: [
      { icon: <GroupsIcon />, title: 'Community Engagement', description: 'Connecting volunteers with community needs' },
      { icon: <PeopleIcon />, title: 'Skill Sharing', description: 'Volunteers sharing knowledge and expertise' },
                  { icon: <PublicIcon />, title: 'Inclusive Volunteering', description: 'Opportunities for all community members' },
    ],
  },
  {
    id: 'adult-education',
    title: 'Adult Education',
    icon: <MenuBookIcon sx={{ fontSize: 48 }} />,
    description:
      'Providing lifelong learning opportunities for personal growth and professional development.',
    subAreas: [
      { icon: <SchoolIcon />, title: 'Skills Development', description: 'Professional and personal skill building' },
      { icon: <LanguageIcon />, title: 'Language Learning', description: 'Language courses and cultural immersion' },
      { icon: <ComputerIcon />, title: 'Digital Skills', description: 'Technology training for adults' },
    ],
  },
];

export default function FocusAreas() {
  return (
    <Container sx={{ py: { xs: 8, sm: 10 } }}>
      <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
        Our Focus Areas
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: 'center', mb: 6, color: 'text.secondary', fontSize: '1.1rem' }}
      >
        We work across five main areas to promote education, inclusion, and community empowerment
      </Typography>

      {focusAreas.map((area, index) => (
        <Box
          key={area.id}
          id={area.id}
          sx={{
            mb: 8,
            scrollMarginTop: '100px',
          }}
        >
          <Card
            sx={{
              background: (theme) =>
                theme.palette.mode === 'light'
                  ? 'linear-gradient(to bottom right, rgba(25, 118, 210, 0.05), rgba(66, 165, 245, 0.05))'
                  : 'linear-gradient(to bottom right, rgba(25, 118, 210, 0.1), rgba(66, 165, 245, 0.1))',
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexWrap: 'wrap' }}>
                <Box sx={{ color: 'primary.main', mr: 2 }}>{area.icon}</Box>
                <Typography variant="h4" sx={{ flexGrow: 1 }}>
                  {area.title}
                </Typography>
              </Box>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 3 }}>
                {area.description}
              </Typography>

              <Divider sx={{ my: 3 }} />

              <Grid container spacing={3} sx={{ mt: 2 }}>
                {area.subAreas.map((subArea) => (
                  <Grid item xs={12} sm={6} md={4} key={subArea.title}>
                    <Card variant="outlined">
                      <CardContent>
                        <Box sx={{ color: 'primary.main', mb: 1 }}>{subArea.icon}</Box>
                        <Typography variant="h6" gutterBottom>
                          {subArea.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {subArea.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Container>
  );
}
