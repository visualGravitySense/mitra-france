import { useCallback, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from '@mui/material/Link';
import { getImagePath } from '../utils/imagePath';

type GalleryTag = 'all' | 'projects' | 'team' | 'workshops';

interface GalleryItem {
  id: string;
  path: string;
  tag: Exclude<GalleryTag, 'all'>;
  alt: string;
  /** Larger tile for rhythm */
  featured?: boolean;
}

const galleryItems: GalleryItem[] = [
  { id: '1', path: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg', tag: 'workshops', alt: 'Workshop', featured: true },
  { id: '2', path: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg', tag: 'projects', alt: 'Project event' },
  { id: '3', path: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg', tag: 'team', alt: 'Team' },
  { id: '4', path: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg', tag: 'workshops', alt: 'Group activity' },
  
  { id: '6', path: '/photos/72143301_1255865144620953_7821217256553054208_n.jpg', tag: 'projects', alt: 'Visit' },
  { id: '7', path: '/photos/72778896_1227391067468361_5854469268342571008_n.jpg', tag: 'workshops', alt: 'Youth workshop' },
  { id: '8', path: '/photos/73208176_1255863554621112_5449277947649196032_n.jpg', tag: 'projects', alt: 'Networking' },
  { id: '9', path: '/photos/75220622_1263163760557758_1828565807827779584_n.jpg', tag: 'team', alt: 'Ceremony' },
  { id: '10', path: '/photos/75354869_1255866784620789_5172593281107755008_n.jpg', tag: 'projects', alt: 'Mobility' },
  { id: '11', path: '/photos/75380514_1258785557662245_2665705434043645952_n.jpg', tag: 'projects', alt: 'Exchange' },
  
  { id: '13', path: '/photos/195938444_1716673385206791_5972386242218118423_n.jpg', tag: 'team', alt: 'Community' },
  { id: '14', path: '/photos/201379691_1725109587696504_3657017033572797514_n.jpg', tag: 'projects', alt: 'Conference' },
  { id: '15', path: '/photos/472330785_2705641812976605_8147454895918841464_n.jpg', tag: 'workshops', alt: 'Training' },
  { id: '16', path: '/photos/474191144_922114450096562_1778427783441398275_n.jpg', tag: 'projects', alt: 'Partners' },
  
  { id: '18', path: '/photos/476121564_2731964927010960_1872202122797019235_n.jpg', tag: 'projects', alt: 'Field work' },
  { id: '19', path: '/photos/487438531_2782168148657304_2855709124804435896_n.jpg', tag: 'workshops', alt: 'Lab' },
  { id: '20', path: '/photos/488707367_2782966415244144_4496557027079616535_n.jpg', tag: 'projects', alt: 'Summit' },
  { id: '21', path: '/photos/518407574_1080814327559906_7301251356704742628_n.jpg', tag: 'team', alt: 'Group photo' },
  { id: '22', path: '/photos/534729196_1080814874226518_8430082551815755637_n.jpg', tag: 'workshops', alt: 'Workshop hall' },
  { id: '23', path: '/photos/547831429_1105455918429080_1339539868519472835_n.jpg', tag: 'projects', alt: 'Event' },
  { id: '24', path: '/photos/547832271_1105636951744310_5007643116898073064_n.jpg', tag: 'projects', alt: 'Celebration' },
  { id: '25', path: '/photos/548309956_1105451331762872_8479958509514200962_n.jpg', tag: 'team', alt: 'Participants' },
  { id: '26', path: '/photos/548398608_1105456358429036_8053119805662137426_n.jpg', tag: 'workshops', alt: 'Hands-on' },
  { id: '27', path: '/photos/548595318_1105455078429164_4623321124477129928_n.jpg', tag: 'projects', alt: 'Fair' },
  { id: '28', path: '/photos/548877641_1105446995096639_7393077100571014764_n.jpg', tag: 'team', alt: 'Discussion' },
  { id: '29', path: '/photos/549131738_1105456155095723_6317443526696665132_n.jpg', tag: 'workshops', alt: 'Studio' },
  { id: '30', path: '/photos/549606101_1105451861762819_8602403738246550219_n.jpg', tag: 'projects', alt: 'Outdoor' },
  { id: '31', path: '/photos/550335458_1105452421762763_2396967666599670886_n.jpg', tag: 'team', alt: 'Circle' },
  { id: '32', path: '/photos/573853248_1142845508023454_8525599641591502954_n.jpg', tag: 'projects', alt: 'Nice' },
];

const tagOptions: { value: GalleryTag; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'projects', label: 'Projects' },
  { value: 'team', label: 'Team' },
  { value: 'workshops', label: 'Workshops' },
];

const INITIAL = 12;
const LOAD = 12;

export default function Gallery() {
  const [tag, setTag] = useState<GalleryTag>('all');
  const [visibleCount, setVisibleCount] = useState(INITIAL);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (tag === 'all' ? galleryItems : galleryItems.filter((g) => g.tag === tag)),
    [tag],
  );

  const visible = filtered.slice(0, visibleCount);
  const canLoadMore = visibleCount < filtered.length;

  const lightboxList = filtered;
  const lightboxOpen = lightboxIndex !== null;
  const currentSrc =
    lightboxIndex !== null && lightboxList[lightboxIndex]
      ? getImagePath(lightboxList[lightboxIndex].path)
      : '';

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null) return i;
      const len = lightboxList.length;
      return (i - 1 + len) % len;
    });
  }, [lightboxList.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null) return i;
      const len = lightboxList.length;
      return (i + 1) % len;
    });
  }, [lightboxList.length]);

  const handleTag = (_: React.MouseEvent<HTMLElement>, value: GalleryTag | null) => {
    if (value != null) {
      setTag(value);
      setVisibleCount(INITIAL);
      setLightboxIndex(null);
    }
  };

  const openAt = (item: GalleryItem) => {
    const idx = lightboxList.findIndex((x) => x.id === item.id);
    if (idx >= 0) setLightboxIndex(idx);
  };

  return (
    <Box component="main">
      <Box
        sx={{
          pt: { xs: 12, sm: 14, md: 16 },
          pb: { xs: 4, md: 5 },
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ fontSize: { xs: '1.85rem', md: '2.35rem' }, fontWeight: 800, mb: 1 }}>
            Our life through the lens
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 640, lineHeight: 1.75, mb: 1 }}>
            Moments from projects, workshops, and the people who make MITRA happen. Tap a photo — browse full screen with
            arrows.
          </Typography>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, fontWeight: 600 }}
            underline="hover"
          >
            <InstagramIcon fontSize="small" />
            More on Instagram
          </Link>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 4 } }}>
        <Box sx={{ mb: 2, overflowX: 'auto' }}>
          <ToggleButtonGroup
            value={tag}
            exclusive
            onChange={handleTag}
            size="small"
            aria-label="Gallery filter"
            sx={{
              flexWrap: 'wrap',
              gap: 0.5,
              '& .MuiToggleButton-root': { textTransform: 'none', borderRadius: '999px !important', px: 1.5 },
            }}
          >
            {tagOptions.map((opt) => (
              <ToggleButton key={opt.value} value={opt.value}>
                {opt.label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>

        <Grid container spacing={1.5}>
          {visible.map((item) => (
            <Grid key={item.id} size={{ xs: 6, md: item.featured ? 8 : 4 }}>
              <Box
                onClick={() => openAt(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openAt(item);
                  }
                }}
                role="button"
                tabIndex={0}
                sx={{
                  height: { xs: item.featured ? 200 : 140, md: item.featured ? 280 : 200 },
                  borderRadius: 2,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: '0 12px 32px rgba(0,35,149,0.2)',
                  },
                  '&:focus-visible': { outline: '2px solid', outlineColor: 'primary.main', outlineOffset: 2 },
                }}
              >
                <Box
                  component="img"
                  src={getImagePath(item.path)}
                  alt={item.alt}
                  loading="lazy"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        {filtered.length === 0 && (
          <Typography color="text.secondary" sx={{ py: 4 }}>
            Nothing in this filter.
          </Typography>
        )}

        {canLoadMore && (
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Button variant="outlined" onClick={() => setVisibleCount((n) => Math.min(n + LOAD, filtered.length))}>
              Load more
            </Button>
          </Box>
        )}
      </Container>

      <Dialog
        open={lightboxOpen}
        onClose={() => setLightboxIndex(null)}
        maxWidth={false}
        PaperProps={{
          sx: {
            bgcolor: 'rgba(0, 0, 0, 0.92)',
            boxShadow: 'none',
            m: 0,
            maxHeight: '100vh',
            maxWidth: '100vw',
            height: '100%',
            width: '100%',
            borderRadius: 0,
          },
        }}
      >
        <Box sx={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
          <IconButton
            onClick={() => setLightboxIndex(null)}
            sx={{ position: 'absolute', top: 8, right: 8, color: 'common.white', zIndex: 2 }}
            aria-label="Close"
          >
            <CloseIcon />
          </IconButton>
          <IconButton
            onClick={goPrev}
            sx={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', color: 'common.white', zIndex: 2 }}
            aria-label="Previous"
          >
            <ChevronLeftIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <IconButton
            onClick={goNext}
            sx={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', color: 'common.white', zIndex: 2 }}
            aria-label="Next"
          >
            <ChevronRightIcon sx={{ fontSize: 40 }} />
          </IconButton>
          {lightboxOpen && (
            <Box
              component="img"
              src={currentSrc}
              alt=""
              sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
          )}
          {lightboxIndex !== null && lightboxList.length > 0 && (
            <Typography sx={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', color: 'common.white', fontSize: '0.9rem' }}>
              {lightboxIndex + 1} / {lightboxList.length}
            </Typography>
          )}
        </Box>
      </Dialog>
    </Box>
  );
}
