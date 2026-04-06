import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';
import { getImagePath } from '../utils/imagePath';

type CourseCategory = 'all' | 'digital' | 'media' | 'languages' | 'arts';

interface CourseItem {
  id: string;
  title: string;
  category: Exclude<CourseCategory, 'all'>;
  blurb: string;
  image: string;
  meta: string;
}

const courses: CourseItem[] = [
  {
    id: '1',
    title: 'Digital Literacy',
    category: 'digital',
    blurb: 'Essential digital skills for everyday life — devices, safety, and confident online use.',
    image: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
    meta: '8 weeks · Beginner · Certificate of completion',
  },
  {
    id: '2',
    title: 'Media Literacy',
    category: 'media',
    blurb: 'Critical viewing, content creation, and spotting misinformation in a crowded media landscape.',
    image: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
    meta: '6 weeks · Intermediate · Certificate of completion',
  },
  {
    id: '3',
    title: 'Language Learning (French)',
    category: 'languages',
    blurb: 'Practical French for integration — conversation, reading, and confidence in daily situations.',
    image: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
    meta: '12 weeks · All levels · Free access',
  },
  {
    id: '4',
    title: 'Arts & Culture',
    category: 'arts',
    blurb: 'Workshops in visual arts, heritage, and creative expression tied to local and European culture.',
    image: '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
    meta: '10 weeks · All levels · Cultural immersion',
  },
  {
    id: '5',
    title: 'Digital skills for seniors',
    category: 'digital',
    blurb: 'Patient, step-by-step support for smartphones, messaging, and safe browsing.',
    image: '/photos/583489432_1157911303183541_1292926580526900497_n.jpg',
    meta: 'Flexible · Groups · Nice region',
  },
  {
    id: '6',
    title: 'Creative media lab',
    category: 'media',
    blurb: 'Short projects in photo, audio, and simple video for community and youth groups.',
    image: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
    meta: 'Workshop series · Project-based',
  },
];

const filterOptions: { value: CourseCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'digital', label: 'Digital' },
  { value: 'media', label: 'Media' },
  { value: 'languages', label: 'Languages' },
  { value: 'arts', label: 'Arts' },
];

const faqItems = [
  {
    q: 'Are courses free?',
    a: 'Many MITRA programmes are funded or donation-based; we confirm costs and options when you register for a specific cohort.',
  },
  {
    q: 'Who can join?',
    a: 'Adults, youth, seniors, and newcomers — each course page or announcement lists prerequisites and language level.',
  },
  {
    q: 'Do I get a certificate?',
    a: 'Where a course runs with attendance and outcomes, we issue a certificate of completion you can use for CV or further study.',
  },
  {
    q: 'How do I sign up?',
    a: 'Contact us with the course name; we will send dates, location (often Nice area), and any forms you need.',
  },
];

export default function Courses() {
  const [category, setCategory] = useState<CourseCategory>('all');

  const visible = useMemo(
    () => (category === 'all' ? courses : courses.filter((c) => c.category === category)),
    [category],
  );

  const handleFilter = (_: React.MouseEvent<HTMLElement>, value: CourseCategory | null) => {
    if (value != null) setCategory(value);
  };

  return (
    <Box component="main">
      {/* Короткий hero — один баннер */}
          <Box
            sx={{
          pt: { xs: 12, sm: 14, md: 16 },
          pb: { xs: 6, md: 8 },
          background: 'linear-gradient(180deg, rgba(0, 35, 149, 0.07) 0%, transparent 100%)',
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography variant="h1" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 800 }}>
              Ready to start learning?
              </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 560, lineHeight: 1.75 }}>
              Browse our course catalogue — filter by topic, then open a path that fits you. Lifelong learning for
              personal and professional growth, mostly in and around Nice.
              </Typography>
                <Button
              component="a"
              href="#course-grid"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
              sx={{ fontWeight: 700, borderRadius: 2, px: 3 }}
            >
              Browse courses
                </Button>
              </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ pb: 2 }} id="course-grid">
        <Typography variant="h2" sx={{ fontSize: { xs: '1.35rem', md: '1.5rem' }, fontWeight: 700, mb: 2 }}>
          Catalogue
              </Typography>
        <Box sx={{ mb: 3, overflowX: 'auto' }}>
          <ToggleButtonGroup
            value={category}
            exclusive
            onChange={handleFilter}
                          size="small"
            aria-label="Filter by category"
                          sx={{
              flexWrap: 'wrap',
              gap: 0.5,
              '& .MuiToggleButton-root': { textTransform: 'none', borderRadius: '8px !important', px: 1.5 },
            }}
          >
            {filterOptions.map((opt) => (
              <ToggleButton key={opt.value} value={opt.value}>
                {opt.label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
          </Box>

        <Grid container spacing={2}>
          {visible.map((course) => (
            <Grid key={course.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
                variant="outlined"
              sx={{
                      height: '100%',
                        borderRadius: 2,
                        display: 'flex',
                  flexDirection: 'column',
                  transition: 'box-shadow 0.2s, border-color 0.2s',
                  '&:hover': { boxShadow: 2, borderColor: 'primary.main' },
                    }}
                  >
                    <Box
                      component="img"
                  src={getImagePath(course.image)}
                  alt=""
                  sx={{ width: '100%', height: 160, objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 2 }}>
                  <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                      {course.title}
                    </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                              sx={{
                      flexGrow: 1,
                      mb: 1.5,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      lineHeight: 1.55,
                    }}
                  >
                    {course.blurb}
                              </Typography>
                  <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1.5 }}>
                    {course.meta}
                  </Typography>
                    <Button
                      component={RouterLink}
                      to="/contact"
                    size="small"
                    variant="outlined"
                      endIcon={<ArrowForwardIcon />}
                    sx={{ alignSelf: 'flex-start' }}
                  >
                    Learn more
                    </Button>
                </CardContent>
                  </Card>
              </Grid>
          ))}
              </Grid>

        {visible.length === 0 && (
          <Typography color="text.secondary" sx={{ py: 4 }}>
            No courses in this filter — choose “All” or another topic.
            </Typography>
        )}
      </Container>

      {/* FAQ */}
      <Box sx={{ bgcolor: 'action.hover', py: { xs: 5, md: 6 } }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontSize: { xs: '1.25rem', md: '1.4rem' }, fontWeight: 700, mb: 2 }}>
            Frequently asked
            </Typography>
          {faqItems.map((item) => (
            <Accordion
              key={item.q}
              disableGutters
              elevation={0}
              sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1, mb: 1, '&:before': { display: 'none' } }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight={600}>{item.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                  {item.a}
                      </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
          </Box>

      {/* Финальный CTA */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 8 } }}>
        <Card variant="outlined" sx={{ borderRadius: 2, p: { xs: 3, md: 4 }, textAlign: 'center' }}>
          <Typography variant="h6" fontWeight={800} gutterBottom>
            Don’t see the right course?
              </Typography>
          <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 480, mx: 'auto' }}>
            Tell us your goals — we often run custom workshops or can point you to the next open call.
              </Typography>
          <Button component={RouterLink} to="/contact" variant="contained" size="large" endIcon={<ArrowForwardIcon />}>
            Write to us
              </Button>
        </Card>
        </Container>
    </Box>
  );
}
