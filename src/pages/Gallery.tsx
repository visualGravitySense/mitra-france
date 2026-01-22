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
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ImageIcon from '@mui/icons-material/Image';
import MovieIcon from '@mui/icons-material/Movie';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import PaletteIcon from '@mui/icons-material/Palette';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PersonIcon from '@mui/icons-material/Person';
import PlaceIcon from '@mui/icons-material/Place';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import TagIcon from '@mui/icons-material/Tag';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

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
  const [socialTab, setSocialTab] = React.useState(0);
  const [zoomImage, setZoomImage] = React.useState<string | null>(null);
  const [zoomOpen, setZoomOpen] = React.useState(false);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSocialTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSocialTab(newValue);
  };

  const handleViewImage = (imageUrl: string) => {
    setZoomImage(imageUrl);
    setZoomOpen(true);
  };

  const handleCloseZoom = () => {
    setZoomOpen(false);
    setZoomImage(null);
  };

  // Gallery albums data with categories
  const galleryAlbums = {
    all: [
      {
        id: 1,
        title: 'Digital Literacy Workshop, 2025',
        photo: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
        photosCount: 24,
        videosCount: 2,
        type: 'photo',
        category: 'Education',
      },
      {
        id: 2,
        title: 'Erasmus+ Conference, Nice',
        photo: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
        photosCount: 18,
        videosCount: 1,
        type: 'video',
        category: 'Events',
      },
      {
        id: 3,
        title: 'Cultural Heritage Exhibition',
        photo: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
        photosCount: 32,
        videosCount: 0,
        type: 'photo',
        category: 'Culture',
      },
      {
        id: 4,
        title: 'Media Training Session',
        photo: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
        photosCount: 15,
        videosCount: 3,
        type: 'photo',
        category: 'Education',
      },
      {
        id: 5,
        title: 'Community Festival, 2024',
        photo: '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
        photosCount: 28,
        videosCount: 2,
        type: 'video',
        category: 'Events',
      },
      {
        id: 6,
        title: 'Museum Visit - Le 109',
        photo: '/photos/72143301_1255865144620953_7821217256553054208_n.jpg',
        photosCount: 20,
        videosCount: 0,
        type: 'photo',
        category: 'Culture',
      },
      {
        id: 7,
        title: 'Youth Workshop Series',
        photo: '/photos/72778896_1227391067468361_5854469268342571008_n.jpg',
        photosCount: 22,
        videosCount: 1,
        type: 'photo',
        category: 'Education',
      },
      {
        id: 8,
        title: 'International Networking Event',
        photo: '/photos/73208176_1255863554621112_5449277947649196032_n.jpg',
        photosCount: 19,
        videosCount: 4,
        type: 'video',
        category: 'Events',
      },
      {
        id: 9,
        title: 'Certificate Ceremony 2024',
        photo: '/photos/75220622_1263163760557758_1828565807827779584_n.jpg',
        photosCount: 26,
        videosCount: 1,
        type: 'photo',
        category: 'Education',
      },
      {
        id: 10,
        title: 'Workshop in Estonia',
        photo: '/photos/75354869_1255866784620789_5172593281107755008_n.jpg',
        photosCount: 31,
        videosCount: 2,
        type: 'photo',
        category: 'Education',
      },
      {
        id: 11,
        title: 'Cultural Exchange Program',
        photo: '/photos/75380514_1258785557662245_2665705434043645952_n.jpg',
        photosCount: 23,
        videosCount: 0,
        type: 'photo',
        category: 'Culture',
      },
      {
        id: 12,
        title: 'International Conference 2023',
        photo: '/photos/84839024_1346442362229897_7481666728498298880_n.jpg',
        photosCount: 35,
        videosCount: 3,
        type: 'video',
        category: 'Events',
      },
      {
        id: 13,
        title: 'Community Gathering',
        photo: '/photos/195938444_1716673385206791_5972386242218118423_n.jpg',
        photosCount: 27,
        videosCount: 1,
        type: 'photo',
        category: 'Events',
      },
      {
        id: 14,
        title: 'Training Workshop Series',
        photo: '/photos/201379691_1725109587696504_3657017033572797514_n.jpg',
        photosCount: 29,
        videosCount: 2,
        type: 'photo',
        category: 'Education',
      },
      {
        id: 15,
        title: 'Art & Culture Exhibition',
        photo: '/photos/472330785_2705641812976605_8147454895918841464_n.jpg',
        photosCount: 33,
        videosCount: 0,
        type: 'photo',
        category: 'Culture',
      },
      {
        id: 16,
        title: 'Erasmus+ Project Meeting',
        photo: '/photos/474191144_922114450096562_1778427783441398275_n.jpg',
        photosCount: 21,
        videosCount: 1,
        type: 'photo',
        category: 'Events',
      },
      {
        id: 17,
        title: 'Digital Skills Training',
        photo: '/photos/474747613_925366876437986_3391021362464847354_n.jpg',
        photosCount: 18,
        videosCount: 3,
        type: 'photo',
        category: 'Education',
      },
      {
        id: 18,
        title: 'Cultural Heritage Day',
        photo: '/photos/476121564_2731964927010960_1872202122797019235_n.jpg',
        photosCount: 30,
        videosCount: 1,
        type: 'photo',
        category: 'Culture',
      },
      {
        id: 19,
        title: 'Community Workshop',
        photo: '/photos/487438531_2782168148657304_2855709124804435896_n.jpg',
        photosCount: 25,
        videosCount: 2,
        type: 'photo',
        category: 'Education',
      },
      {
        id: 20,
        title: 'International Event 2024',
        photo: '/photos/488707367_2782966415244144_4496557027079616535_n.jpg',
        photosCount: 36,
        videosCount: 4,
        type: 'video',
        category: 'Events',
      },
      {
        id: 21,
        title: 'Workshop Activities',
        photo: '/photos/518407574_1080814327559906_7301251356704742628_n.jpg',
        photosCount: 19,
        videosCount: 1,
        type: 'photo',
        category: 'Education',
      },
      {
        id: 22,
        title: 'Training Session',
        photo: '/photos/534729196_1080814874226518_8430082551815755637_n.jpg',
        photosCount: 22,
        videosCount: 2,
        type: 'photo',
        category: 'Education',
      },
      {
        id: 23,
        title: 'Cultural Activities',
        photo: '/photos/547831429_1105455918429080_1339539868519472835_n.jpg',
        photosCount: 28,
        videosCount: 0,
        type: 'photo',
        category: 'Culture',
      },
      {
        id: 24,
        title: 'Community Event',
        photo: '/photos/547832271_1105636951744310_5007643116898073064_n.jpg',
        photosCount: 24,
        videosCount: 1,
        type: 'photo',
        category: 'Events',
      },
      {
        id: 25,
        title: 'Workshop Series 2024',
        photo: '/photos/548309956_1105451331762872_8479958509514200962_n.jpg',
        photosCount: 20,
        videosCount: 3,
        type: 'photo',
        category: 'Education',
      },
      {
        id: 26,
        title: 'Cultural Exchange',
        photo: '/photos/548398608_1105456358429036_8053119805662137426_n.jpg',
        photosCount: 26,
        videosCount: 0,
        type: 'photo',
        category: 'Culture',
      },
      {
        id: 27,
        title: 'Training Program',
        photo: '/photos/548595318_1105455078429164_4623321124477129928_n.jpg',
        photosCount: 23,
        videosCount: 2,
        type: 'photo',
        category: 'Education',
      },
      {
        id: 28,
        title: 'Community Gathering',
        photo: '/photos/548877641_1105446995096639_7393077100571014764_n.jpg',
        photosCount: 27,
        videosCount: 1,
        type: 'photo',
        category: 'Events',
      },
      {
        id: 29,
        title: 'Workshop Activities',
        photo: '/photos/549131738_1105456155095723_6317443526696665132_n.jpg',
        photosCount: 21,
        videosCount: 1,
        type: 'photo',
        category: 'Education',
      },
      {
        id: 30,
        title: 'Cultural Program',
        photo: '/photos/549606101_1105451861762819_8602403738246550219_n.jpg',
        photosCount: 29,
        videosCount: 0,
        type: 'photo',
        category: 'Culture',
      },
      {
        id: 31,
        title: 'Training Workshop',
        photo: '/photos/550335458_1105452421762763_2396967666599670886_n.jpg',
        photosCount: 18,
        videosCount: 2,
        type: 'photo',
        category: 'Education',
      },
      {
        id: 32,
        title: 'Media Workshop 2024',
        photo: '/photos/573853248_1142845508023454_8525599641591502954_n.jpg',
        photosCount: 25,
        videosCount: 3,
        type: 'photo',
        category: 'Education',
      },
    ],
    events: [
      {
        id: 2,
        title: 'Erasmus+ Conference, Nice',
        photo: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
        photosCount: 18,
        videosCount: 1,
        type: 'video',
      },
      {
        id: 5,
        title: 'Community Festival, 2024',
        photo: '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
        photosCount: 28,
        videosCount: 2,
        type: 'video',
      },
      {
        id: 8,
        title: 'International Networking Event',
        photo: '/photos/73208176_1255863554621112_5449277947649196032_n.jpg',
        photosCount: 19,
        videosCount: 4,
        type: 'video',
      },
      {
        id: 12,
        title: 'International Conference 2023',
        photo: '/photos/84839024_1346442362229897_7481666728498298880_n.jpg',
        photosCount: 35,
        videosCount: 3,
        type: 'video',
      },
      {
        id: 13,
        title: 'Community Gathering',
        photo: '/photos/195938444_1716673385206791_5972386242218118423_n.jpg',
        photosCount: 27,
        videosCount: 1,
        type: 'photo',
      },
      {
        id: 16,
        title: 'Erasmus+ Project Meeting',
        photo: '/photos/474191144_922114450096562_1778427783441398275_n.jpg',
        photosCount: 21,
        videosCount: 1,
        type: 'photo',
      },
      {
        id: 20,
        title: 'International Event 2024',
        photo: '/photos/488707367_2782966415244144_4496557027079616535_n.jpg',
        photosCount: 36,
        videosCount: 4,
        type: 'video',
      },
      {
        id: 24,
        title: 'Community Event',
        photo: '/photos/547832271_1105636951744310_5007643116898073064_n.jpg',
        photosCount: 24,
        videosCount: 1,
        type: 'photo',
      },
      {
        id: 28,
        title: 'Community Gathering',
        photo: '/photos/548877641_1105446995096639_7393077100571014764_n.jpg',
        photosCount: 27,
        videosCount: 1,
        type: 'photo',
      },
    ],
    education: [
      {
        id: 1,
        title: 'Digital Literacy Workshop, 2025',
        photo: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
        photosCount: 24,
        videosCount: 2,
        type: 'photo',
      },
      {
        id: 4,
        title: 'Media Training Session',
        photo: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
        photosCount: 15,
        videosCount: 3,
        type: 'photo',
      },
      {
        id: 7,
        title: 'Youth Workshop Series',
        photo: '/photos/72778896_1227391067468361_5854469268342571008_n.jpg',
        photosCount: 22,
        videosCount: 1,
        type: 'photo',
      },
      {
        id: 9,
        title: 'Certificate Ceremony 2024',
        photo: '/photos/75220622_1263163760557758_1828565807827779584_n.jpg',
        photosCount: 26,
        videosCount: 1,
        type: 'photo',
      },
      {
        id: 10,
        title: 'Workshop in Estonia',
        photo: '/photos/75354869_1255866784620789_5172593281107755008_n.jpg',
        photosCount: 31,
        videosCount: 2,
        type: 'photo',
      },
      {
        id: 14,
        title: 'Training Workshop Series',
        photo: '/photos/201379691_1725109587696504_3657017033572797514_n.jpg',
        photosCount: 29,
        videosCount: 2,
        type: 'photo',
      },
      {
        id: 17,
        title: 'Digital Skills Training',
        photo: '/photos/474747613_925366876437986_3391021362464847354_n.jpg',
        photosCount: 18,
        videosCount: 3,
        type: 'photo',
      },
      {
        id: 19,
        title: 'Community Workshop',
        photo: '/photos/487438531_2782168148657304_2855709124804435896_n.jpg',
        photosCount: 25,
        videosCount: 2,
        type: 'photo',
      },
      {
        id: 21,
        title: 'Workshop Activities',
        photo: '/photos/518407574_1080814327559906_7301251356704742628_n.jpg',
        photosCount: 19,
        videosCount: 1,
        type: 'photo',
      },
      {
        id: 22,
        title: 'Training Session',
        photo: '/photos/534729196_1080814874226518_8430082551815755637_n.jpg',
        photosCount: 22,
        videosCount: 2,
        type: 'photo',
      },
      {
        id: 25,
        title: 'Workshop Series 2024',
        photo: '/photos/548309956_1105451331762872_8479958509514200962_n.jpg',
        photosCount: 20,
        videosCount: 3,
        type: 'photo',
      },
      {
        id: 27,
        title: 'Training Program',
        photo: '/photos/548595318_1105455078429164_4623321124477129928_n.jpg',
        photosCount: 23,
        videosCount: 2,
        type: 'photo',
      },
      {
        id: 29,
        title: 'Workshop Activities',
        photo: '/photos/549131738_1105456155095723_6317443526696665132_n.jpg',
        photosCount: 21,
        videosCount: 1,
        type: 'photo',
      },
      {
        id: 31,
        title: 'Training Workshop',
        photo: '/photos/550335458_1105452421762763_2396967666599670886_n.jpg',
        photosCount: 18,
        videosCount: 2,
        type: 'photo',
      },
      {
        id: 32,
        title: 'Media Workshop 2024',
        photo: '/photos/573853248_1142845508023454_8525599641591502954_n.jpg',
        photosCount: 25,
        videosCount: 3,
        type: 'photo',
      },
    ],
    culture: [
      {
        id: 3,
        title: 'Cultural Heritage Exhibition',
        photo: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
        photosCount: 32,
        videosCount: 0,
        type: 'photo',
      },
      {
        id: 6,
        title: 'Museum Visit - Le 109',
        photo: '/photos/72143301_1255865144620953_7821217256553054208_n.jpg',
        photosCount: 20,
        videosCount: 0,
        type: 'photo',
      },
      {
        id: 11,
        title: 'Cultural Exchange Program',
        photo: '/photos/75380514_1258785557662245_2665705434043645952_n.jpg',
        photosCount: 23,
        videosCount: 0,
        type: 'photo',
      },
      {
        id: 15,
        title: 'Art & Culture Exhibition',
        photo: '/photos/472330785_2705641812976605_8147454895918841464_n.jpg',
        photosCount: 33,
        videosCount: 0,
        type: 'photo',
      },
      {
        id: 18,
        title: 'Cultural Heritage Day',
        photo: '/photos/476121564_2731964927010960_1872202122797019235_n.jpg',
        photosCount: 30,
        videosCount: 1,
        type: 'photo',
      },
      {
        id: 23,
        title: 'Cultural Activities',
        photo: '/photos/547831429_1105455918429080_1339539868519472835_n.jpg',
        photosCount: 28,
        videosCount: 0,
        type: 'photo',
      },
      {
        id: 26,
        title: 'Cultural Exchange',
        photo: '/photos/548398608_1105456358429036_8053119805662137426_n.jpg',
        photosCount: 26,
        videosCount: 0,
        type: 'photo',
      },
      {
        id: 30,
        title: 'Cultural Program',
        photo: '/photos/549606101_1105451861762819_8602403738246550219_n.jpg',
        photosCount: 29,
        videosCount: 0,
        type: 'photo',
      },
    ],
  };

  const currentAlbums = 
    value === 0 ? galleryAlbums.all : 
    value === 1 ? galleryAlbums.events : 
    value === 2 ? galleryAlbums.education : 
    galleryAlbums.culture;

  return (
    <Box>
      {/* BJ FOGG BEHAVIOR MODEL: MOTIVATION + ABILITY + PROMPTS */}
      <Box
        sx={{
          pt: { xs: 10, sm: 12, md: 16 },
          pb: { xs: 8, sm: 10, md: 12 },
          mb: { xs: 6, sm: 8 },
          position: 'relative',
          overflow: 'hidden',
          minHeight: { xs: '600px', md: '700px' },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #002395 0%, #ED2939 100%)',
            zIndex: 3,
          },
        }}
      >
        {/* Dynamic "Wall of Moments" - Masonry Grid */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(3, 1fr)', sm: 'repeat(4, 1fr)', md: 'repeat(6, 1fr)' },
            gridAutoRows: 'minmax(120px, auto)',
            gap: { xs: 1, sm: 2 },
            zIndex: 0,
          }}
        >
          {[
            { photo: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg', span: { xs: '1 / 2', sm: '1 / 2', md: '1 / 2' }, row: { xs: '1 / 3', sm: '1 / 3', md: '1 / 3' } },
            { photo: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg', span: { xs: '2 / 4', sm: '2 / 3', md: '2 / 4' }, row: { xs: '1 / 2', sm: '1 / 2', md: '1 / 2' } },
            { photo: '/photos/72143301_1255865144620953_7821217256553054208_n.jpg', span: { xs: '1 / 2', sm: '3 / 4', md: '4 / 5' }, row: { xs: '2 / 4', sm: '1 / 3', md: '1 / 3' } },
            { photo: '/photos/72778896_1227391067468361_5854469268342571008_n.jpg', span: { xs: '2 / 4', sm: '1 / 2', md: '5 / 7' }, row: { xs: '3 / 4', sm: '2 / 3', md: '1 / 2' } },
            { photo: '/photos/73208176_1255863554621112_5449277947649196032_n.jpg', span: { xs: '1 / 3', sm: '2 / 3', md: '1 / 2' }, row: { xs: '4 / 5', sm: '3 / 4', md: '2 / 4' } },
            { photo: '/photos/75220622_1263163760557758_1828565807827779584_n.jpg', span: { xs: '1 / 2', sm: '3 / 4', md: '2 / 3' }, row: { xs: '5 / 6', sm: '4 / 5', md: '3 / 4' } },
            { photo: '/photos/75354869_1255866784620789_5172593281107755008_n.jpg', span: { xs: '2 / 4', sm: '1 / 2', md: '3 / 5' }, row: { xs: '6 / 7', sm: '5 / 6', md: '4 / 5' } },
            { photo: '/photos/75380514_1258785557662245_2665705434043645952_n.jpg', span: { xs: '1 / 3', sm: '2 / 4', md: '5 / 7' }, row: { xs: '7 / 8', sm: '6 / 7', md: '2 / 3' } },
            { photo: '/photos/84839024_1346442362229897_7481666728498298880_n.jpg', span: { xs: '1 / 2', sm: '3 / 4', md: '1 / 2' }, row: { xs: '8 / 9', sm: '7 / 8', md: '3 / 5' } },
            { photo: '/photos/195938444_1716673385206791_5972386242218118423_n.jpg', span: { xs: '2 / 4', sm: '1 / 3', md: '2 / 4' }, row: { xs: '9 / 10', sm: '8 / 9', md: '4 / 6' } },
            { photo: '/photos/201379691_1725109587696504_3657017033572797514_n.jpg', span: { xs: '1 / 3', sm: '3 / 4', md: '4 / 6' }, row: { xs: '10 / 11', sm: '9 / 10', md: '5 / 6' } },
            { photo: '/photos/472330785_2705641812976605_8147454895918841464_n.jpg', span: { xs: '2 / 4', sm: '1 / 2', md: '6 / 7' }, row: { xs: '11 / 12', sm: '10 / 11', md: '3 / 4' } },
          ].map((item, idx) => (
            <Box
              key={idx}
              sx={{
                gridColumn: item.span,
                gridRow: item.row,
                position: 'relative',
                overflow: 'hidden',
                borderRadius: { xs: '8px', sm: '12px' },
                transition: 'all 0.4s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  zIndex: 2,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                },
              }}
            >
              <Box
                component="img"
                src={item.photo}
                alt={`Gallery moment ${idx + 1}`}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.85) saturate(1.1)',
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Gradient Overlay for Text Readability */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.85) 0%, rgba(0, 35, 149, 0.6) 30%, transparent 70%)',
            zIndex: 1,
          }}
        />
        <Container sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            {/* Interactive "Focus Center" - Left Side */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ mb: 6 }}>
                <Chip
                  icon={<CollectionsIcon />}
                  label="Our Gallery"
                  sx={{
                    mb: 3,
                    fontWeight: 800,
                    fontSize: '1rem',
                    py: 2,
                    px: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    color: 'white',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                  }}
                />
                <Typography
                  variant="h1"
                  sx={{
                    mb: 3,
                    fontWeight: 900,
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                    color: 'white',
                    textShadow: '0 4px 16px rgba(0,0,0,0.5)',
                    lineHeight: 1.2,
                  }}
                >
                  Visual Journey Through Our Impact
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 4,
                    color: 'rgba(255, 255, 255, 0.95)',
                    fontWeight: 500,
                    lineHeight: 1.8,
                    textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                    maxWidth: '600px',
                  }}
                >
                  Capturing the moments, faces, and stories that define our international community
                </Typography>
                <Button
                  component={RouterLink}
                  to="#gallery-content"
                  variant="outlined"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 5,
                    py: 2,
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    borderRadius: '30px',
                    borderWidth: 3,
                    borderColor: 'white',
                    color: 'white',
                    backgroundColor: 'transparent',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      borderWidth: 3,
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(255,255,255,0.3)',
                      '& .MuiButton-endIcon': {
                        transform: 'translateX(6px)',
                      },
                    },
                    '& .MuiButton-endIcon': {
                      transition: 'transform 0.4s ease',
                    },
                  }}
                >
                  Explore Latest Albums
                </Button>
              </Box>
            </Grid>

            {/* Featured Preview - Floating Card (Right Side) */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Card
                sx={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '3px solid rgba(255, 255, 255, 0.3)',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
                  transition: 'all 0.4s ease',
                  transform: { xs: 'none', md: 'translateY(-20px)' },
                  '&:hover': {
                    transform: { xs: 'translateY(-8px)', md: 'translateY(-28px)' },
                    boxShadow: '0 20px 56px rgba(0,0,0,0.5)',
                    '& .featured-photo': {
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    height: 300,
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    className="featured-photo"
                    component="img"
                    src="/illustrations/mitra-images-8.jpg"
                    alt="Latest Event"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 100%)',
                    }}
                  />
                  <Chip
                    label="Latest: Erasmus+ Workshop, Nice"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      backgroundColor: '#ED2939',
                      color: 'white',
                      fontWeight: 800,
                      fontSize: '0.75rem',
                      zIndex: 2,
                    }}
                  />
                </Box>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, color: '#0b1b3a' }}>
                    Latest Event
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
                    Our gallery is constantly updated with new moments from our community activities
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Visual Counter "Media Stats" - Glassmorphism Panel */}
          <Box
            sx={{
              mt: 6,
              p: 3,
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            }}
          >
            <Grid container spacing={3}>
              {[
                { icon: <CameraAltIcon />, label: 'Photos', value: '2,500+', color: 'white' },
                { icon: <PlayArrowIcon />, label: 'Videos', value: '150+', color: 'white' },
                { icon: <LocationOnIcon />, label: 'Events Captured', value: '45+', color: 'white' },
                { icon: <PublicIcon />, label: 'Countries', value: '12', color: 'white' },
              ].map((stat) => (
                <Grid size={{ xs: 6, sm: 3 }} key={stat.label}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Box
                      sx={{
                        color: stat.color,
                        mb: 1.5,
                        fontSize: 36,
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Typography variant="h4" sx={{ color: stat.color, fontWeight: 800, mb: 0.5, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
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

      <Container id="gallery-content">
        {/* ABILITY: Enhanced tabs with clear labels - Interactive Album Covers */}
        <Box sx={{ mb: 6, mt: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: 'text.primary',
              fontWeight: 800,
              textAlign: 'center',
              fontSize: { xs: '1.5rem', md: '2rem' },
            }}
          >
            Choose gallery type:
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              justifyContent: 'center',
              flexWrap: 'wrap',
              mb: 4,
            }}
          >
            {[
              {
                label: 'All Moments',
                icon: <AllInclusiveIcon />,
                photo: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
                count: '32 Albums',
                color: '#002395',
              },
              {
                label: 'Events',
                icon: <EventIcon />,
                photo: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
                count: '9 Albums',
                color: '#ED2939',
              },
              {
                label: 'Education',
                icon: <SchoolIcon />,
                photo: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
                count: '15 Albums',
                color: '#002395',
              },
              {
                label: 'Culture',
                icon: <PaletteIcon />,
                photo: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
                count: '8 Albums',
                color: '#ED2939',
              },
            ].map((tab, index) => (
              <Box
                key={tab.label}
                onClick={() => handleChange({} as React.SyntheticEvent, index)}
                sx={{
                  position: 'relative',
                  width: { xs: '100%', sm: 200, md: 240 },
                  height: 120,
                  borderRadius: '20px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: value === index ? '3px solid #ED2939' : '2px solid transparent',
                  transition: 'all 0.4s ease',
                  boxShadow: value === index
                    ? '0 8px 24px rgba(237, 41, 57, 0.4)'
                    : '0 4px 12px rgba(0,0,0,0.1)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: value === index
                      ? '0 12px 32px rgba(237, 41, 57, 0.5)'
                      : '0 8px 20px rgba(0,0,0,0.2)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={tab.photo}
                  alt={tab.label}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: value === index ? 'brightness(0.7) saturate(1.2)' : 'brightness(0.5) grayscale(0.8)',
                    transition: 'all 0.4s ease',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: value === index
                      ? `linear-gradient(135deg, ${tab.color}40 0%, transparent 100%)`
                      : 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, transparent 100%)',
                    transition: 'all 0.4s ease',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 2,
                    p: 2,
                  }}
                >
                  <Box
                    sx={{
                      color: 'white',
                      mb: 1,
                      fontSize: 32,
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
                    }}
                  >
                    {tab.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'white',
                      fontWeight: value === index ? 800 : 700,
                      textShadow: '0 2px 8px rgba(0,0,0,0.7)',
                      textAlign: 'center',
                      mb: 0.5,
                    }}
                  >
                    {tab.label}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'rgba(255,255,255,0.9)',
                      fontWeight: 600,
                      textShadow: '0 1px 4px rgba(0,0,0,0.7)',
                      fontSize: '0.75rem',
                    }}
                  >
                    {tab.count}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          
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
              mb: 4,
            }}
          >
            <CheckCircleIcon sx={{ fontSize: 16, color: 'success.main' }} />
            Easy navigation • Filter by type • High quality content
          </Typography>
      </Box>

      <TabPanel value={value} index={0}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, lg: 9 }}>
            {/* Dynamic Mosaic Grid - Masonry Style */}
            <ImageList
              variant="masonry"
              cols={3}
              gap={16}
              sx={{
                mb: 0,
                columnCount: {
                  xs: '1 !important',
                  sm: '2 !important',
                  md: '3 !important',
                },
                '& .MuiImageListItem-root': {
                  breakInside: 'avoid',
                  pageBreakInside: 'avoid',
                },
              }}
            >
              {currentAlbums.map((album, index) => (
                <ImageListItem
                  key={album.id}
                  sx={{
                    mb: 2,
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '24px',
                    cursor: 'pointer',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
                      '& .album-overlay': {
                        opacity: 1,
                      },
                      '& .album-photo': {
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                >
                  <Card
                    sx={{
                      height: index % 3 === 0 ? 320 : index % 3 === 1 ? 280 : 360,
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '24px',
                      border: '2px solid',
                      borderColor: 'transparent',
                    }}
                  >
                    <Box
                      className="album-photo"
                      component="img"
                      src={album.photo}
                      alt={album.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.6s ease',
                      }}
                    />
                    {/* Gradient Overlay */}
                    <Box
                      className="album-overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 100%)',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        p: 3,
                        zIndex: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'white',
                          fontWeight: 800,
                          mb: 2,
                          textShadow: '0 2px 8px rgba(0,0,0,0.7)',
                        }}
                      >
                        {album.title}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <ImageIcon sx={{ fontSize: 18, color: 'white' }} />
                          <Typography variant="caption" sx={{ color: 'white', fontWeight: 600 }}>
                            {album.photosCount} photos
                          </Typography>
                        </Box>
                        {album.videosCount > 0 && (
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <MovieIcon sx={{ fontSize: 18, color: 'white' }} />
                            <Typography variant="caption" sx={{ color: 'white', fontWeight: 600 }}>
                              {album.videosCount} videos
                            </Typography>
                          </Box>
                        )}
                      </Box>
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<ZoomInIcon />}
                        onClick={() => handleViewImage(album.photo)}
                        sx={{
                          backgroundColor: '#002395',
                          color: 'white',
                          fontWeight: 700,
                          borderRadius: '12px',
                          py: 1,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: '#001a6b',
                            transform: 'translateX(4px)',
                          },
                        }}
                      >
                        View Image
                      </Button>
                    </Box>
                  </Card>
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>

          {/* Featured Album - Side Highlight */}
          <Grid size={{ xs: 12, lg: 3 }}>
            <Card
              sx={{
                position: 'sticky',
                top: 100,
                borderRadius: '24px',
                overflow: 'hidden',
                border: '3px solid #ED2939',
                boxShadow: '0 12px 40px rgba(237, 41, 57, 0.3)',
                background: 'linear-gradient(135deg, rgba(237, 41, 57, 0.05) 0%, rgba(0, 35, 149, 0.05) 100%)',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: 250,
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src="/photos/75220622_1263163760557758_1828565807827779584_n.jpg"
                  alt="Highlight of the Month"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)',
                  }}
                />
                <Chip
                  label="NEW"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    backgroundColor: '#ED2939',
                    color: 'white',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    zIndex: 2,
                    animation: 'glow 2s infinite',
                    '@keyframes glow': {
                      '0%, 100%': {
                        boxShadow: '0 0 8px rgba(237, 41, 57, 0.5)',
                      },
                      '50%': {
                        boxShadow: '0 0 16px rgba(237, 41, 57, 0.8)',
                      },
                    },
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 3,
                    zIndex: 2,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 800, color: 'white', mb: 1, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                    Highlight of the Month
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', mb: 2, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                    Latest Erasmus+ Workshop
                  </Typography>
                </Box>
              </Box>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="body2" sx={{ color: '#666', mb: 2, lineHeight: 1.6 }}>
                  Discover our most recent event captured in stunning detail. This album features the best moments from our latest workshop.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<ZoomInIcon />}
                  onClick={() => handleViewImage('/photos/75220622_1263163760557758_1828565807827779584_n.jpg')}
                  sx={{
                    backgroundColor: '#ED2939',
                    color: 'white',
                    fontWeight: 800,
                    py: 1.5,
                    borderRadius: '12px',
                    boxShadow: '0 4px 16px rgba(237, 41, 57, 0.5)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#c91e2d',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(237, 41, 57, 0.7)',
                    },
                  }}
                >
                  View Image
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, lg: 9 }}>
            {/* Dynamic Mosaic Grid - Masonry Style for Videos */}
            <ImageList
              variant="masonry"
              cols={3}
              gap={16}
              sx={{
                mb: 0,
                columnCount: {
                  xs: '1 !important',
                  sm: '2 !important',
                  md: '3 !important',
                },
                '& .MuiImageListItem-root': {
                  breakInside: 'avoid',
                  pageBreakInside: 'avoid',
                },
              }}
            >
              {currentAlbums.map((album, index) => (
                <ImageListItem
                  key={album.id}
                  sx={{
                    mb: 2,
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '24px',
                    cursor: 'pointer',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
                      '& .album-overlay': {
                        opacity: 1,
                      },
                      '& .album-photo': {
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                >
                  <Card
                    sx={{
                      height: index % 3 === 0 ? 320 : index % 3 === 1 ? 280 : 360,
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '24px',
                      border: '2px solid',
                      borderColor: 'transparent',
                    }}
                  >
                    <Box
                      className="album-photo"
                      component="img"
                      src={album.photo}
                      alt={album.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.6s ease',
                      }}
                    />
                    <Box
                      className="album-overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 100%)',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        p: 3,
                        zIndex: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'white',
                          fontWeight: 800,
                          mb: 2,
                          textShadow: '0 2px 8px rgba(0,0,0,0.7)',
                        }}
                      >
                        {album.title}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <ImageIcon sx={{ fontSize: 18, color: 'white' }} />
                          <Typography variant="caption" sx={{ color: 'white', fontWeight: 600 }}>
                            {album.photosCount} photos
                          </Typography>
                        </Box>
                        {album.videosCount > 0 && (
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <MovieIcon sx={{ fontSize: 18, color: 'white' }} />
                            <Typography variant="caption" sx={{ color: 'white', fontWeight: 600 }}>
                              {album.videosCount} videos
                            </Typography>
                          </Box>
                        )}
                      </Box>
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<PlayArrowIcon />}
                        sx={{
                          backgroundColor: '#ED2939',
                          color: 'white',
                          fontWeight: 700,
                          borderRadius: '12px',
                          py: 1,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: '#c91e2d',
                            transform: 'translateX(4px)',
                          },
                        }}
                      >
                        Watch Video
                      </Button>
                    </Box>
                  </Card>
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>

          {/* Featured Album - Side Highlight */}
          <Grid size={{ xs: 12, lg: 3 }}>
            <Card
              sx={{
                position: 'sticky',
                top: 100,
                borderRadius: '24px',
                overflow: 'hidden',
                border: '3px solid #ED2939',
                boxShadow: '0 12px 40px rgba(237, 41, 57, 0.3)',
                background: 'linear-gradient(135deg, rgba(237, 41, 57, 0.05) 0%, rgba(0, 35, 149, 0.05) 100%)',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: 250,
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src="/photos/84839024_1346442362229897_7481666728498298880_n.jpg"
                  alt="Highlight of the Month"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)',
                  }}
                />
                <Chip
                  label="NEW"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    backgroundColor: '#ED2939',
                    color: 'white',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    zIndex: 2,
                    animation: 'glow 2s infinite',
                    '@keyframes glow': {
                      '0%, 100%': {
                        boxShadow: '0 0 8px rgba(237, 41, 57, 0.5)',
                      },
                      '50%': {
                        boxShadow: '0 0 16px rgba(237, 41, 57, 0.8)',
                      },
                    },
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 3,
                    zIndex: 2,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 800, color: 'white', mb: 1, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                    Highlight of the Month
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', mb: 2, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                    Latest Event Video
                  </Typography>
                </Box>
              </Box>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="body2" sx={{ color: '#666', mb: 2, lineHeight: 1.6 }}>
                  Watch our most recent event video. This collection features the best moments from our latest conference.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<PlayArrowIcon />}
                  sx={{
                    backgroundColor: '#ED2939',
                    color: 'white',
                    fontWeight: 800,
                    py: 1.5,
                    borderRadius: '12px',
                    boxShadow: '0 4px 16px rgba(237, 41, 57, 0.5)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#c91e2d',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(237, 41, 57, 0.7)',
                    },
                  }}
                >
                  Watch Video
                </Button>
              </CardContent>
            </Card>
          </Grid>
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
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, lg: 9 }}>
            {/* Dynamic Mosaic Grid - Masonry Style for Education */}
            <ImageList
              variant="masonry"
              cols={3}
              gap={16}
              sx={{
                mb: 0,
                columnCount: {
                  xs: '1 !important',
                  sm: '2 !important',
                  md: '3 !important',
                },
                '& .MuiImageListItem-root': {
                  breakInside: 'avoid',
                  pageBreakInside: 'avoid',
                },
              }}
            >
              {currentAlbums.map((album, index) => (
                <ImageListItem
                  key={album.id}
                  sx={{
                    mb: 2,
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '24px',
                    cursor: 'pointer',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
                      '& .album-overlay': {
                        opacity: 1,
                      },
                      '& .album-photo': {
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                >
                  <Card
                    sx={{
                      height: index % 3 === 0 ? 320 : index % 3 === 1 ? 280 : 360,
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '24px',
                      border: '2px solid',
                      borderColor: 'transparent',
                    }}
                  >
                    <Box
                      className="album-photo"
                      component="img"
                      src={album.photo}
                      alt={album.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.6s ease',
                      }}
                    />
                    <Box
                      className="album-overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 100%)',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        p: 3,
                        zIndex: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'white',
                          fontWeight: 800,
                          mb: 2,
                          textShadow: '0 2px 8px rgba(0,0,0,0.7)',
                        }}
                      >
                        {album.title}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <ImageIcon sx={{ fontSize: 18, color: 'white' }} />
                          <Typography variant="caption" sx={{ color: 'white', fontWeight: 600 }}>
                            {album.photosCount} photos
                          </Typography>
                        </Box>
                        {album.videosCount > 0 && (
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <MovieIcon sx={{ fontSize: 18, color: 'white' }} />
                            <Typography variant="caption" sx={{ color: 'white', fontWeight: 600 }}>
                              {album.videosCount} videos
                            </Typography>
                          </Box>
                        )}
                      </Box>
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<ZoomInIcon />}
                        onClick={() => handleViewImage(album.photo)}
                        sx={{
                          backgroundColor: '#002395',
                          color: 'white',
                          fontWeight: 700,
                          borderRadius: '12px',
                          py: 1,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: '#001a6b',
                            transform: 'translateX(4px)',
                          },
                        }}
                      >
                        View Image
                      </Button>
                    </Box>
                  </Card>
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>

          {/* Featured Album - Side Highlight */}
          <Grid size={{ xs: 12, lg: 3 }}>
            <Card
              sx={{
                position: 'sticky',
                top: 100,
                borderRadius: '24px',
                overflow: 'hidden',
                border: '3px solid #002395',
                boxShadow: '0 12px 40px rgba(0, 35, 149, 0.3)',
                background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(237, 41, 57, 0.05) 100%)',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: 250,
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src="/photos/75220622_1263163760557758_1828565807827779584_n.jpg"
                  alt="Highlight of the Month"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)',
                  }}
                />
                <Chip
                  label="NEW"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    backgroundColor: '#002395',
                    color: 'white',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    zIndex: 2,
                    animation: 'glow 2s infinite',
                    '@keyframes glow': {
                      '0%, 100%': {
                        boxShadow: '0 0 8px rgba(0, 35, 149, 0.5)',
                      },
                      '50%': {
                        boxShadow: '0 0 16px rgba(0, 35, 149, 0.8)',
                      },
                    },
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 3,
                    zIndex: 2,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 800, color: 'white', mb: 1, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                    Highlight of the Month
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', mb: 2, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                    Latest Education Workshop
                  </Typography>
                </Box>
              </Box>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="body2" sx={{ color: '#666', mb: 2, lineHeight: 1.6 }}>
                  Discover our most recent educational workshop. This album features the best moments from our latest training session.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<ZoomInIcon />}
                  onClick={() => handleViewImage('/photos/75220622_1263163760557758_1828565807827779584_n.jpg')}
                  sx={{
                    backgroundColor: '#002395',
                    color: 'white',
                    fontWeight: 800,
                    py: 1.5,
                    borderRadius: '12px',
                    boxShadow: '0 4px 16px rgba(0, 35, 149, 0.5)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#001a6b',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(0, 35, 149, 0.7)',
                    },
                  }}
                >
                  View Image
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, lg: 9 }}>
            {/* Dynamic Mosaic Grid - Masonry Style for Culture */}
            <ImageList
              variant="masonry"
              cols={3}
              gap={16}
              sx={{
                mb: 0,
                columnCount: {
                  xs: '1 !important',
                  sm: '2 !important',
                  md: '3 !important',
                },
                '& .MuiImageListItem-root': {
                  breakInside: 'avoid',
                  pageBreakInside: 'avoid',
                },
              }}
            >
              {currentAlbums.map((album, index) => (
                <ImageListItem
                  key={album.id}
                  sx={{
                    mb: 2,
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '24px',
                    cursor: 'pointer',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
                      '& .album-overlay': {
                        opacity: 1,
                      },
                      '& .album-photo': {
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                >
                  <Card
                    sx={{
                      height: index % 3 === 0 ? 320 : index % 3 === 1 ? 280 : 360,
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '24px',
                      border: '2px solid',
                      borderColor: 'transparent',
                    }}
                  >
                    <Box
                      className="album-photo"
                      component="img"
                      src={album.photo}
                      alt={album.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.6s ease',
                      }}
                    />
                    <Box
                      className="album-overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 100%)',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        p: 3,
                        zIndex: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'white',
                          fontWeight: 800,
                          mb: 2,
                          textShadow: '0 2px 8px rgba(0,0,0,0.7)',
                        }}
                      >
                        {album.title}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <ImageIcon sx={{ fontSize: 18, color: 'white' }} />
                          <Typography variant="caption" sx={{ color: 'white', fontWeight: 600 }}>
                            {album.photosCount} photos
                          </Typography>
                        </Box>
                        {album.videosCount > 0 && (
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <MovieIcon sx={{ fontSize: 18, color: 'white' }} />
                            <Typography variant="caption" sx={{ color: 'white', fontWeight: 600 }}>
                              {album.videosCount} videos
                            </Typography>
                          </Box>
                        )}
                      </Box>
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<ZoomInIcon />}
                        onClick={() => handleViewImage(album.photo)}
                        sx={{
                          backgroundColor: '#ED2939',
                          color: 'white',
                          fontWeight: 700,
                          borderRadius: '12px',
                          py: 1,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: '#c91e2d',
                            transform: 'translateX(4px)',
                          },
                        }}
                      >
                        View Image
                      </Button>
                    </Box>
                  </Card>
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>

          {/* Featured Album - Side Highlight */}
          <Grid size={{ xs: 12, lg: 3 }}>
            <Card
              sx={{
                position: 'sticky',
                top: 100,
                borderRadius: '24px',
                overflow: 'hidden',
                border: '3px solid #ED2939',
                boxShadow: '0 12px 40px rgba(237, 41, 57, 0.3)',
                background: 'linear-gradient(135deg, rgba(237, 41, 57, 0.05) 0%, rgba(0, 35, 149, 0.05) 100%)',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: 250,
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src="/photos/472330785_2705641812976605_8147454895918841464_n.jpg"
                  alt="Highlight of the Month"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)',
                  }}
                />
                <Chip
                  label="NEW"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    backgroundColor: '#ED2939',
                    color: 'white',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    zIndex: 2,
                    animation: 'glow 2s infinite',
                    '@keyframes glow': {
                      '0%, 100%': {
                        boxShadow: '0 0 8px rgba(237, 41, 57, 0.5)',
                      },
                      '50%': {
                        boxShadow: '0 0 16px rgba(237, 41, 57, 0.8)',
                      },
                    },
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 3,
                    zIndex: 2,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 800, color: 'white', mb: 1, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                    Highlight of the Month
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', mb: 2, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                    Latest Cultural Exhibition
                  </Typography>
                </Box>
              </Box>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="body2" sx={{ color: '#666', mb: 2, lineHeight: 1.6 }}>
                  Explore our most recent cultural exhibition. This showcase features the best works from our community engagement programs.
                </Typography>
                <Button
                  component={RouterLink}
                  to="/events"
                  variant="contained"
                  fullWidth
                  startIcon={<VisibilityIcon />}
                  sx={{
                    backgroundColor: '#ED2939',
                    color: 'white',
                    fontWeight: 800,
                    py: 1.5,
                    borderRadius: '12px',
                    boxShadow: '0 4px 16px rgba(237, 41, 57, 0.5)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#c91e2d',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(237, 41, 57, 0.7)',
                    },
                  }}
                >
                  View Events Calendar
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      {/* BJ FOGG MODEL: PROMPT - Social Media & Community Pulse */}
      <Box sx={{ mt: 8, mb: 4 }}>
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<ShareIcon />}
              label="Community Social Feed"
              sx={{
                mb: 3,
                fontWeight: 800,
                fontSize: '1rem',
                py: 2,
                px: 1,
                backgroundColor: 'rgba(0, 35, 149, 0.1)',
                color: '#002395',
                border: '2px solid #002395',
              }}
            />
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                fontWeight: 900,
                fontSize: { xs: '2rem', md: '3rem' },
                background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Live Community Pulse
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: '700px', mx: 'auto' }}>
              See what's happening right now in our community. Real moments, real people, real impact.
            </Typography>
          </Box>

          {/* Tabs: Faces, Places, Behind the Scenes */}
          <Box sx={{ mb: 4 }}>
            <Tabs
              value={socialTab}
              onChange={handleSocialTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                borderBottom: 2,
                borderColor: 'divider',
                mb: 4,
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: '1rem',
                  minHeight: 64,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 35, 149, 0.05)',
                  },
                },
                '& .Mui-selected': {
                  color: '#ED2939',
                  fontWeight: 800,
                },
                '& .MuiTabs-indicator': {
                  height: 3,
                  backgroundColor: '#ED2939',
                  borderRadius: '3px 3px 0 0',
                },
              }}
            >
              <Tab label="Faces" icon={<PersonIcon />} iconPosition="start" />
              <Tab label="Places" icon={<PlaceIcon />} iconPosition="start" />
              <Tab label="Behind the Scenes" icon={<CameraAltOutlinedIcon />} iconPosition="start" />
            </Tabs>
          </Box>

          <Grid container spacing={3}>
            {/* Instagram-Style Feed Grid */}
            <Grid size={{ xs: 12, lg: 9 }}>
              <ImageList
                variant="masonry"
                cols={3}
                gap={12}
                sx={{
                  mb: 0,
                  columnCount: {
                    xs: '2 !important',
                    sm: '3 !important',
                    md: '3 !important',
                  },
                }}
              >
                {[
                  // Faces Tab Content
                  ...(socialTab === 0 ? [
                    { id: 1, photo: '/photos/72143301_1255865144620953_7821217256553054208_n.jpg', type: 'photo', social: 'instagram', likes: 127, comments: 23, isStory: false },
                    { id: 2, photo: '/photos/72778896_1227391067468361_5854469268342571008_n.jpg', type: 'photo', social: 'facebook', likes: 89, comments: 15, isStory: false },
                    { id: 3, photo: '/photos/73208176_1255863554621112_5449277947649196032_n.jpg', type: 'video', social: 'instagram', likes: 203, comments: 42, isStory: true },
                    { id: 4, photo: '/photos/75220622_1263163760557758_1828565807827779584_n.jpg', type: 'photo', social: 'instagram', likes: 156, comments: 28, isStory: false },
                    { id: 5, photo: '/photos/75354869_1255866784620789_5172593281107755008_n.jpg', type: 'photo', social: 'facebook', likes: 94, comments: 19, isStory: false },
                    { id: 6, photo: '/photos/75380514_1258785557662245_2665705434043645952_n.jpg', type: 'video', social: 'instagram', likes: 178, comments: 35, isStory: true },
                    { id: 7, photo: '/photos/84839024_1346442362229897_7481666728498298880_n.jpg', type: 'photo', social: 'instagram', likes: 145, comments: 31, isStory: false },
                    { id: 8, photo: '/photos/195938444_1716673385206791_5972386242218118423_n.jpg', type: 'photo', social: 'facebook', likes: 112, comments: 22, isStory: false },
                    { id: 9, photo: '/photos/201379691_1725109587696504_3657017033572797514_n.jpg', type: 'video', social: 'instagram', likes: 234, comments: 48, isStory: true },
                    { id: 10, photo: '/photos/472330785_2705641812976605_8147454895918841464_n.jpg', type: 'photo', social: 'instagram', likes: 167, comments: 29, isStory: false },
                    { id: 11, photo: '/photos/474191144_922114450096562_1778427783441398275_n.jpg', type: 'photo', social: 'facebook', likes: 134, comments: 24, isStory: false },
                    { id: 12, photo: '/photos/474747613_925366876437986_3391021362464847354_n.jpg', type: 'video', social: 'instagram', likes: 221, comments: 45, isStory: true },
                  ] : []),
                  // Places Tab Content
                  ...(socialTab === 1 ? [
                    { id: 1, photo: '/photos/476121564_2731964927010960_1872202122797019235_n.jpg', type: 'photo', social: 'instagram', likes: 198, comments: 37, isStory: false },
                    { id: 2, photo: '/photos/487438531_2782168148657304_2855709124804435896_n.jpg', type: 'photo', social: 'instagram', likes: 167, comments: 29, isStory: false },
                    { id: 3, photo: '/photos/488707367_2782966415244144_4496557027079616535_n.jpg', type: 'photo', social: 'facebook', likes: 143, comments: 26, isStory: false },
                    { id: 4, photo: '/photos/518407574_1080814327559906_7301251356704742628_n.jpg', type: 'video', social: 'instagram', likes: 256, comments: 51, isStory: true },
                    { id: 5, photo: '/photos/534729196_1080814874226518_8430082551815755637_n.jpg', type: 'photo', social: 'instagram', likes: 189, comments: 34, isStory: false },
                    { id: 6, photo: '/photos/547831429_1105455918429080_1339539868519472835_n.jpg', type: 'photo', social: 'facebook', likes: 134, comments: 24, isStory: false },
                    { id: 7, photo: '/photos/547832271_1105636951744310_5007643116898073064_n.jpg', type: 'video', social: 'instagram', likes: 221, comments: 45, isStory: true },
                    { id: 8, photo: '/photos/548309956_1105451331762872_8479958509514200962_n.jpg', type: 'photo', social: 'instagram', likes: 175, comments: 32, isStory: false },
                    { id: 9, photo: '/photos/548398608_1105456358429036_8053119805662137426_n.jpg', type: 'photo', social: 'facebook', likes: 156, comments: 28, isStory: false },
                    { id: 10, photo: '/photos/548595318_1105455078429164_4623321124477129928_n.jpg', type: 'video', social: 'instagram', likes: 245, comments: 49, isStory: true },
                  ] : []),
                  // Behind the Scenes Tab Content
                  ...(socialTab === 2 ? [
                    { id: 1, photo: '/photos/548877641_1105446995096639_7393077100571014764_n.jpg', type: 'photo', social: 'instagram', likes: 142, comments: 27, isStory: false },
                    { id: 2, photo: '/photos/549131738_1105456155095723_6317443526696665132_n.jpg', type: 'video', social: 'instagram', likes: 267, comments: 54, isStory: true },
                    { id: 3, photo: '/photos/549606101_1105451861762819_8602403738246550219_n.jpg', type: 'photo', social: 'facebook', likes: 118, comments: 21, isStory: false },
                    { id: 4, photo: '/photos/550335458_1105452421762763_2396967666599670886_n.jpg', type: 'photo', social: 'instagram', likes: 163, comments: 30, isStory: false },
                    { id: 5, photo: '/photos/573853248_1142845508023454_8525599641591502954_n.jpg', type: 'video', social: 'instagram', likes: 289, comments: 58, isStory: true },
                    { id: 6, photo: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg', type: 'photo', social: 'instagram', likes: 151, comments: 28, isStory: false },
                    { id: 7, photo: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg', type: 'photo', social: 'facebook', likes: 129, comments: 23, isStory: false },
                    { id: 8, photo: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg', type: 'video', social: 'instagram', likes: 245, comments: 49, isStory: true },
                    { id: 9, photo: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg', type: 'photo', social: 'instagram', likes: 178, comments: 33, isStory: false },
                    { id: 10, photo: '/photos/571419367_1143811194593552_6930038688628840775_n.jpg', type: 'photo', social: 'facebook', likes: 147, comments: 26, isStory: false },
                  ] : []),
                ].map((post, index) => (
                  <ImageListItem
                    key={post.id}
                    sx={{
                      mb: 2,
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: post.isStory ? '20px' : '12px',
                      cursor: 'pointer',
                      transition: 'all 0.4s ease',
                      height: post.isStory ? 400 : index % 3 === 0 ? 280 : index % 3 === 1 ? 320 : 300,
                      border: post.isStory ? '3px solid' : 'none',
                      borderColor: post.isStory ? 'transparent' : 'transparent',
                      background: post.isStory
                        ? 'linear-gradient(135deg, #ED2939 0%, #002395 100%)'
                        : 'transparent',
                      padding: post.isStory ? '3px' : 0,
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
                        '& .post-overlay': {
                          opacity: 1,
                        },
                        '& .post-photo': {
                          transform: 'scale(1.1)',
                        },
                        borderColor: post.isStory ? '#ED2939' : 'transparent',
                      },
                    }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: post.isStory ? '17px' : '12px',
                        backgroundColor: post.isStory ? 'white' : 'transparent',
                      }}
                    >
                      <Box
                        className="post-photo"
                        component="img"
                        src={post.photo}
                        alt={`Community post ${post.id}`}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.6s ease',
                        }}
                      />
                      {/* Social Media Icon */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 12,
                          right: 12,
                          zIndex: 3,
                        }}
                      >
                        <Box
                          sx={{
                            width: 36,
                            height: 36,
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                          }}
                        >
                          {post.social === 'instagram' ? (
                            <InstagramIcon sx={{ fontSize: 20, color: '#E4405F' }} />
                          ) : (
                            <FacebookIcon sx={{ fontSize: 20, color: '#1877F2' }} />
                          )}
                        </Box>
                      </Box>
                      {/* Story Border Animation */}
                      {post.isStory && (
                        <Box
                          sx={{
                            position: 'absolute',
                            top: -3,
                            left: -3,
                            right: -3,
                            bottom: -3,
                            borderRadius: '20px',
                            background: 'linear-gradient(135deg, #ED2939, #002395, #ED2939)',
                            backgroundSize: '200% 200%',
                            zIndex: -1,
                            animation: 'gradientShift 3s ease infinite',
                            '@keyframes gradientShift': {
                              '0%, 100%': {
                                backgroundPosition: '0% 50%',
                              },
                              '50%': {
                                backgroundPosition: '100% 50%',
                              },
                            },
                          }}
                        />
                      )}
                      {/* Hover Overlay with Likes/Comments */}
                      <Box
                        className="post-overlay"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)',
                          opacity: 0,
                          transition: 'opacity 0.4s ease',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-end',
                          p: 2,
                          zIndex: 2,
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <FavoriteIcon sx={{ fontSize: 18, color: 'white' }} />
                            <Typography variant="caption" sx={{ color: 'white', fontWeight: 700 }}>
                              {post.likes}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <ChatBubbleOutlineIcon sx={{ fontSize: 18, color: 'white' }} />
                            <Typography variant="caption" sx={{ color: 'white', fontWeight: 700 }}>
                              {post.comments}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Card>
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>

            {/* Share Your Moment CTA Panel */}
            <Grid size={{ xs: 12, lg: 3 }}>
              <Card
                sx={{
                  position: 'sticky',
                  top: 100,
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '3px solid #ED2939',
                  boxShadow: '0 12px 40px rgba(237, 41, 57, 0.3)',
                  background: 'linear-gradient(135deg, rgba(237, 41, 57, 0.05) 0%, rgba(0, 35, 149, 0.05) 100%)',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    height: 200,
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, #ED2939 0%, #002395 100%)',
                  }}
                >
                  <Box
                    component="img"
                    src="/photos/547831429_1105455918429080_1339539868519472835_n.jpg"
                    alt="Share Your Moment"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.3,
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      zIndex: 2,
                    }}
                  >
                    <TagIcon sx={{ fontSize: 48, color: 'white', mb: 2 }} />
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 800, textAlign: 'center', px: 2 }}>
                      #MitraFrance
                    </Typography>
                  </Box>
                </Box>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: '#0b1b3a' }}>
                    Share Your Moment
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', mb: 3, lineHeight: 1.6 }}>
                    Have photos from our events? Tag us <strong>#MitraFrance</strong> and share your experience with our community!
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<CloudUploadIcon />}
                    sx={{
                      backgroundColor: '#ED2939',
                      color: 'white',
                      fontWeight: 800,
                      py: 1.5,
                      borderRadius: '12px',
                      boxShadow: '0 4px 16px rgba(237, 41, 57, 0.5)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: '#c91e2d',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(237, 41, 57, 0.7)',
                      },
                    }}
                  >
                    Upload to Community Gallery
                  </Button>
                  <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'center' }}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<InstagramIcon />}
                      sx={{
                        borderColor: '#E4405F',
                        color: '#E4405F',
                        '&:hover': {
                          borderColor: '#E4405F',
                          backgroundColor: 'rgba(228, 64, 95, 0.1)',
                        },
                      }}
                    >
                      Follow
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<FacebookIcon />}
                      sx={{
                        borderColor: '#1877F2',
                        color: '#1877F2',
                        '&:hover': {
                          borderColor: '#1877F2',
                          backgroundColor: 'rgba(24, 119, 242, 0.1)',
                        },
                      }}
                    >
                      Follow
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      </Container>

      {/* Image Zoom Modal */}
      <Dialog
        open={zoomOpen}
        onClose={handleCloseZoom}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            borderRadius: '16px',
            overflow: 'hidden',
          },
        }}
      >
        <DialogContent
          sx={{
            p: 0,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '80vh',
          }}
        >
          <IconButton
            onClick={handleCloseZoom}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              zIndex: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          {zoomImage && (
            <Box
              component="img"
              src={zoomImage}
              alt="Zoomed Image"
              sx={{
                maxWidth: '100%',
                maxHeight: '90vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '8px',
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
