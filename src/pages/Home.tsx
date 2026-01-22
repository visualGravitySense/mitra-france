import { useState, useEffect, Fragment, cloneElement } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import ParticleCTAButton from '../components/ParticleCTAButton';
import { getImagePath } from '../utils/imagePath';
import SchoolIcon from '@mui/icons-material/School';
import PaletteIcon from '@mui/icons-material/Palette';
import ComputerIcon from '@mui/icons-material/Computer';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleIcon from '@mui/icons-material/People';
import PublicIcon from '@mui/icons-material/Public';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Step1Icon from '@mui/icons-material/LooksOne';
import Step2Icon from '@mui/icons-material/LooksTwo';
import Step3Icon from '@mui/icons-material/Looks3';
import BadgeIcon from '@mui/icons-material/Badge';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SpeedIcon from '@mui/icons-material/Speed';
import CalculateIcon from '@mui/icons-material/Calculate';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import BusinessIcon from '@mui/icons-material/Business';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import UndoIcon from '@mui/icons-material/Undo';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningIcon from '@mui/icons-material/Warning';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Tooltip from '@mui/material/Tooltip';
import LinearProgress from '@mui/material/LinearProgress';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TimerIcon from '@mui/icons-material/Timer';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Badge from '@mui/material/Badge';
import ProgressBar from '@mui/material/LinearProgress';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import LockIcon from '@mui/icons-material/Lock';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CelebrationIcon from '@mui/icons-material/Celebration';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import RouteIcon from '@mui/icons-material/Route';
import FlagIcon from '@mui/icons-material/Flag';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TimelineIcon from '@mui/icons-material/Timeline';
import RepeatIcon from '@mui/icons-material/Repeat';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import TableChartIcon from '@mui/icons-material/TableChart';
import ToggleButton from '@mui/material/ToggleButton';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import EmailIcon from '@mui/icons-material/Email';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EventIcon from '@mui/icons-material/Event';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import BarChartIcon from '@mui/icons-material/BarChart';
import BoltIcon from '@mui/icons-material/Bolt';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LoopIcon from '@mui/icons-material/Loop';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import GroupsIcon from '@mui/icons-material/Groups';
import FeedbackIcon from '@mui/icons-material/Feedback';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsIcon from '@mui/icons-material/Settings';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import CompareIcon from '@mui/icons-material/Compare';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import DrawIcon from '@mui/icons-material/Draw';
import RuleIcon from '@mui/icons-material/Rule';
import RefreshIcon from '@mui/icons-material/Refresh';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import RateReviewIcon from '@mui/icons-material/RateReview';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LayersIcon from '@mui/icons-material/Layers';
import NavigationIcon from '@mui/icons-material/Navigation';
import BlockIcon from '@mui/icons-material/Block';
import LabelIcon from '@mui/icons-material/Label';
import SpaceBarIcon from '@mui/icons-material/SpaceBar';
import MouseIcon from '@mui/icons-material/Mouse';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import GridViewIcon from '@mui/icons-material/GridView';
import ImageIcon from '@mui/icons-material/Image';
import PatternIcon from '@mui/icons-material/Pattern';
import DevicesIcon from '@mui/icons-material/Devices';
import AnimationIcon from '@mui/icons-material/Animation';
import VerifiedIcon from '@mui/icons-material/Verified';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FilterListIcon from '@mui/icons-material/FilterList';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import SecurityIcon from '@mui/icons-material/Security';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const focusAreas = [
  {
    icon: <SchoolIcon sx={{ fontSize: 48 }} />,
    title: 'Intercultural Education',
    description: 'Promoting inclusive education, cultural diversity, and social integration.',
    path: '/intercultural-education',
    stats: '15+ Programs',
    benefit: 'Build bridges between cultures',
  },
  {
    icon: <PaletteIcon sx={{ fontSize: 48 }} />,
    title: 'Media & Arts',
    description: 'Fostering media literacy, arts education, and creative technologies.',
    path: '/focus-areas#media-arts',
    stats: '12+ Workshops',
    benefit: 'Express your creativity',
  },
  {
    icon: <ComputerIcon sx={{ fontSize: 48 }} />,
    title: 'Digital Literacy',
    description: 'Empowering seniors, youth, migrants, and minorities through digital skills.',
    path: '/focus-areas#digital',
    stats: '20+ Courses',
    benefit: 'Master digital skills',
  },
  {
    icon: <VolunteerActivismIcon sx={{ fontSize: 48 }} />,
    title: 'Volunteering',
    description: 'Building community through active participation and engagement.',
    path: '/focus-areas#volunteering',
    stats: '100+ Volunteers',
    benefit: 'Make a real impact',
  },
  {
    icon: <MenuBookIcon sx={{ fontSize: 48 }} />,
    title: 'Adult Education',
    description: 'Lifelong learning opportunities for personal and professional development.',
    path: '/courses',
    stats: '18+ Programs',
    benefit: 'Grow continuously',
  },
];

export default function Home() {
  // PROMPT: Track scroll position for floating CTA
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  // Active mindset: User role selection
  const [selectedRole, setSelectedRole] = useState<string>('all');
  // Heuristics: Quick decision tabs
  const [quickDecisionTab, setQuickDecisionTab] = useState(0);
  // System 1/2: Track user action for feedback
  const [actionFeedback, setActionFeedback] = useState<{ open: boolean; message: string; type: 'success' | 'info' | 'warning' }>({
    open: false,
    message: '',
    type: 'success',
  });
  // System 2: Track if user wants detailed view
  const [prefersDetailedView, setPrefersDetailedView] = useState(false);
  // Nudge: Default selection for choice architecture
  const [selectedOption, setSelectedOption] = useState('join'); // Default to most desired action
  // Nudge: Track scroll for timely interventions
  const [showScrollNudge, setShowScrollNudge] = useState(false);
  // Nudge: Social proof - simulate live activity
  const [liveActivity, setLiveActivity] = useState({ count: 1247, recent: 3 });
  // Persuasive: Track user progress and commitments
  const [userProgress, setUserProgress] = useState<{ step: number; completed: number[] }>({ step: 0, completed: [] });
  // Persuasive: Track scarcity elements
  const [scarcityData, setScarcityData] = useState({ spotsLeft: 12, timeLeft: '2 days' });
  // Behavioral: Track emotional engagement
  const [emotionalState, setEmotionalState] = useState<'curious' | 'interested' | 'committed'>('curious');
  // Behavioral: Track user satisfaction indicators
  const [satisfactionMetrics, setSatisfactionMetrics] = useState({ 
    engagement: 0, 
    timeOnPage: 0,
    interactions: 0 
  });
  // Behavior Design: Track user goal progress
  const [userGoal, setUserGoal] = useState<string>('');
  const [goalProgress, setGoalProgress] = useState(0);
  // BJ Fogg Behavior Grid: Track behavior type selection
  const [behaviorDuration, setBehaviorDuration] = useState<'one-time' | 'ongoing'>('ongoing');
  const [behaviorFrequency, setBehaviorFrequency] = useState<'one-time' | 'recurring'>('recurring');
  const [behaviorIntensity, setBehaviorIntensity] = useState<'low' | 'high'>('low');
  // Behavior Change Strategies: Track commitments and goals
  const [userCommitments, setUserCommitments] = useState<string[]>([]);
  const [behaviorGoals, setBehaviorGoals] = useState<Array<{ id: string; goal: string; progress: number; target: number }>>([]);
  const [remindersEnabled, setRemindersEnabled] = useState(false);
  // Cheating: Track shortcuts usage (limited access)
  const [shortcutsUnlocked, setShortcutsUnlocked] = useState(false);
  const [shortcutsUsed, setShortcutsUsed] = useState(0);
  const [showShortcutsInfo, setShowShortcutsInfo] = useState(false);
  // Habit Formation: Track habit progress
  const [habitStreak, setHabitStreak] = useState(0);
  const [habitTriggers, setHabitTriggers] = useState<Array<{ id: string; type: 'visual' | 'time' | 'contextual'; enabled: boolean }>>([
    { id: '1', type: 'visual', enabled: true },
    { id: '2', type: 'time', enabled: false },
    { id: '3', type: 'contextual', enabled: false },
  ]);
  const [habitSteps, setHabitSteps] = useState<Array<{ id: string; step: string; completed: boolean }>>([]);
  const [socialInfluence, setSocialInfluence] = useState({ peersActive: 1247, topPerformer: 'Maria K.', achievements: 15 });
  // Support Conscious Action: Track user behavior understanding and personalization
  const [userBehaviorProfile, setUserBehaviorProfile] = useState<{
    currentHabits: string[];
    painPoints: string[];
    motivations: string[];
    learningStyle: 'visual' | 'auditory' | 'kinesthetic' | 'reading';
  }>({
    currentHabits: [],
    painPoints: [],
    motivations: [],
    learningStyle: 'visual',
  });
  const [personalizedContent, setPersonalizedContent] = useState(false);
  // Make it Clear, Where to Act: Track interactions for feedback
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [clickedElement, setClickedElement] = useState<string | null>(null);

  const showFeedback = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    setActionFeedback({ open: true, message, type });
  };

  const handleCloseFeedback = () => {
    setActionFeedback({ ...actionFeedback, open: false });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = 600; // Approximate hero section height
      setShowFloatingCTA(scrollPosition > heroHeight);
      // Nudge: Show timely intervention at 70% scroll
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollPosition / documentHeight) * 100;
      setShowScrollNudge(scrollPercent > 70 && scrollPercent < 90);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Nudge: Simulate live social proof updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveActivity((prev) => ({
        count: prev.count + Math.floor(Math.random() * 3),
        recent: Math.floor(Math.random() * 5) + 1,
      }));
    }, 15000); // Update every 15 seconds

    return () => clearInterval(interval);
  }, []);

  // LIVE STATS: subtle pulse for "people joined" indicator
  const [showJoinPulse, setShowJoinPulse] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowJoinPulse((prev) => !prev);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  // HERO: Animated counter for social proof in hero section
  const [heroStatCount, setHeroStatCount] = useState(0);

  useEffect(() => {
    const target = 1000;
    const duration = 1200;
    const start = performance.now();
    let frameId: number;

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(progress * target);
      setHeroStatCount(value);
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <Box>
      <Box
        id="hero"
        sx={(theme) => ({
          width: '100%',
          position: 'relative',
          backgroundRepeat: 'no-repeat',
          backgroundImage: [
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 35, 149, 0.12), transparent)',
            'radial-gradient(ellipse 60% 40% at 80% 20%, rgba(237, 41, 57, 0.08), transparent)',
            'linear-gradient(180deg, rgba(248, 249, 250, 0) 0%, rgba(248, 249, 250, 1) 100%)',
          ].join(', '),
          backgroundColor: '#f8f9fa',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.03) 0%, rgba(237, 41, 57, 0.03) 100%)',
            pointerEvents: 'none',
          },
          ...theme.applyStyles('dark', {
            backgroundImage: [
              'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 35, 149, 0.25), transparent)',
              'radial-gradient(ellipse 60% 40% at 80% 20%, rgba(237, 41, 57, 0.15), transparent)',
            ].join(', '),
            backgroundColor: '#1a1a1a',
            '&::before': {
              background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.08) 0%, rgba(237, 41, 57, 0.08) 100%)',
            },
          }),
        })}
      >
        <Container
          sx={{
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
          }}
        >
          <Grid container spacing={4} alignItems="center">
            {/* Left side: Text content */}
            <Grid size={{ xs: 12, md: 6 }}>
          <Stack
            spacing={2}
            useFlexGap
                sx={{ alignItems: { xs: 'center', md: 'flex-start' }, width: '100%' }}
          >
            <Typography
              variant="h1"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'center', md: 'flex-start' },
                    fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
                    textAlign: { xs: 'center', md: 'left' },
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    mb: 1,
                    position: 'relative',
                    zIndex: 1,
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -10,
                      left: { xs: '50%', md: 0 },
                      transform: { xs: 'translateX(-50%)', md: 'none' },
                      width: { xs: '60%', md: '40%' },
                      height: 4,
                      background: 'linear-gradient(90deg, rgba(0, 35, 149, 0.3), transparent)',
                      borderRadius: 2,
                    },
              }}
            >
              MITRA&nbsp;
              <Typography
                component="span"
                variant="h1"
                sx={{
                  fontSize: 'inherit',
                      background: 'linear-gradient(135deg, #002395 0%, #0038d6 50%, #ED2939 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                      backgroundSize: '200% 200%',
                      animation: 'gradientShift 3s ease infinite',
                      '@keyframes gradientShift': {
                        '0%, 100%': { backgroundPosition: '0% 50%' },
                        '50%': { backgroundPosition: '100% 50%' },
                      },
                }}
              >
                FRANCE
              </Typography>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                    textAlign: { xs: 'center', md: 'left' },
                color: 'text.secondary',
                fontWeight: 400,
              }}
            >
              Empowering Communities Through Education, Media & Culture
            </Typography>
            <Typography
              sx={{
                    textAlign: { xs: 'center', md: 'left' },
                color: 'text.secondary',
                    width: '100%',
                mt: 2,
                fontSize: '1.1rem',
                lineHeight: 1.8,
              }}
            >
              We are a non-profit organization based in Nice, France, dedicated to promoting
              intercultural education, media literacy, digital skills, and cultural activities
              for diverse communities including seniors, youth, migrants, and minorities.
            </Typography>
                {/* CUE: Enhanced visual signal with animation */}
                <Box
                  sx={{
                    mt: 3,
                    p: 2.5,
                    borderRadius: 2,
                    backgroundColor: 'rgba(0, 35, 149, 0.08)',
                    border: '2px solid',
                    borderColor: 'primary.main',
                    width: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                      animation: 'shimmer 3s infinite',
                    },
                    '@keyframes shimmer': {
                      '0%': { left: '-100%' },
                      '100%': { left: '100%' },
                    },
                    '@keyframes pulse': {
                      '0%, 100%': { opacity: 1, transform: 'scale(1)' },
                      '50%': { opacity: 0.7, transform: 'scale(1.1)' },
                    },
                  }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="center" justifyContent={{ xs: 'center', md: 'flex-start' }}>
                    <NotificationsActiveIcon
                      sx={{
                        color: 'primary.main',
                        fontSize: 24,
                        animation: 'pulse 2s infinite',
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        textAlign: { xs: 'center', md: 'left' },
                        color: 'primary.main',
                        fontWeight: 700,
                        fontSize: '1rem',
                      }}
                    >
                      ✨ Join {heroStatCount.toLocaleString()}+ community members making a real difference today
                    </Typography>
                  </Stack>
                </Box>

                {/* SYSTEM 1: Quick, intuitive actions with visual cues */}
                <Box sx={{ pt: 4, width: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 1, mb: 2, flexWrap: 'wrap' }}>
                    <FlashOnIcon sx={{ color: 'warning.main', fontSize: 20 }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                      Quick decision? Choose below
                    </Typography>
                    <Tooltip title="Switch to detailed view for more information">
                      <Chip
                        icon={<LightbulbIcon />}
                        label={prefersDetailedView ? 'Detailed View' : 'Quick View'}
                        size="small"
                        onClick={() => setPrefersDetailedView(!prefersDetailedView)}
                        sx={{ cursor: 'pointer', ml: 1 }}
                      />
                    </Tooltip>
                  </Box>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              useFlexGap
                    sx={{ width: '100%', justifyContent: { xs: 'center', md: 'flex-start' } }}
            >
                    <Tooltip title="System 1: Quick, intuitive action - No thinking required">
              <ParticleCTAButton
                to="/contact"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => showFeedback('Redirecting to contact form...', 'info')}
                particleCount={200}
                colors={['#002395', '#0038d6', '#6B8DE3', '#ED2939', '#FFFFFF']}
                sx={{
                          px: 5,
                          py: 1.75,
                          fontSize: '1.15rem',
                          fontWeight: 700,
                          borderRadius: 3,
                          boxShadow: '0 4px 20px rgba(0, 35, 149, 0.3), 0 2px 8px rgba(0, 35, 149, 0.2)',
                          background: 'linear-gradient(135deg, #002395 0%, #0038d6 100%)',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          position: 'relative',
                          overflow: 'hidden',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: '-100%',
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                            transition: 'left 0.5s ease',
                          },
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: '0 6px 28px rgba(0, 35, 149, 0.4), 0 4px 12px rgba(0, 35, 149, 0.3)',
                            background: 'linear-gradient(135deg, #0038d6 0%, #002395 100%)',
                            '&::before': {
                              left: '100%',
                            },
                          },
                          '&:active': {
                            transform: 'translateY(0)',
                          },
                }}
              >
                Join Us Today
              </ParticleCTAButton>
                    </Tooltip>
                    <Tooltip title="System 2: Learn more before deciding">
              <Button
                component={RouterLink}
                to="/about"
                variant="outlined"
                color="primary"
                size="large"
                        onClick={() => showFeedback('Opening detailed information...', 'info')}
                sx={{
                          px: 5,
                          py: 1.75,
                          fontSize: '1.15rem',
                  fontWeight: 600,
                  borderWidth: 2,
                          transition: 'all 0.3s ease',
                  '&:hover': {
                    borderWidth: 2,
                            backgroundColor: 'rgba(0, 35, 149, 0.08)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 4px 12px rgba(0, 35, 149, 0.2)',
                  },
                }}
              >
                Learn More
              </Button>
                    </Tooltip>
            </Stack>
                </Box>
                {/* ABILITY: Show how easy it is */}
                <Typography
                  variant="caption"
                  sx={{
                    textAlign: { xs: 'center', md: 'left' },
                    color: 'text.secondary',
                    mt: 2,
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    gap: 0.5,
                  }}
                >
                  <CheckCircleIcon sx={{ fontSize: 16, color: 'success.main' }} />
                  Free to join • No commitment • Takes 2 minutes
                </Typography>
              </Stack>
            </Grid>

            {/* Right side: Hero visual collage */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: 'auto', md: '520px' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Grid
                  container
                  spacing={2}
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: 520,
                  }}
                >
                  {[
                    '/illustrations/mitra-image-5.png',
                    '/illustrations/mitra-image-10.jpg',
                    '/illustrations/mitra-image-6.png',
                    '/illustrations/mitra-image-9.jpg',
                  ].map((src, index) => (
                    <Grid key={src} size={{ xs: 6 }}>
                      <Box
                        component="img"
                        src={getImagePath(src)}
                        alt="MITRA FRANCE activity"
                        loading="lazy"
                        sx={{
                          width: '100%',
                          height: { xs: 140, sm: 160, md: 180 },
                          objectFit: 'cover',
                          borderRadius: 3,
                          boxShadow: '0 12px 32px rgba(0, 35, 149, 0.25)',
                          transform:
                            index % 2 === 0 ? 'translateY(8px)' : 'translateY(-8px)',
                          transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                          '&:hover': {
                            transform:
                              index % 2 === 0 ? 'translateY(0)' : 'translateY(-2px)',
                            boxShadow: '0 16px 40px rgba(0, 35, 149, 0.35)',
                          },
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>

                {/* Floating stat card */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: { xs: -10, md: 12 },
                    right: { xs: 8, md: 32 },
                    px: 2.5,
                    py: 1.5,
                    borderRadius: 3,
                    backgroundColor: 'background.paper',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    zIndex: 2,
                  }}
                >
                  <GroupIcon sx={{ color: 'primary.main' }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                      20+ European projects
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Real stories from Nice and beyond
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Link to UX Principles page: MOVED TO /about */}
      {/* 
      ============================================
      DETAILED UX SECTIONS MOVED TO /ux-principles
      ============================================
      The following sections have been moved to the UX Principles page
      to keep the home page focused and clean:
      - BEHAVIOR DESIGN: Goal Achievement Path
      - BEHAVIOR DESIGN: Remove Barriers
      - BJ FOGG BEHAVIOR GRID
      - BEHAVIOR CHANGE STRATEGIES
      - CHEATING: Smart Shortcuts
      - HABIT FORMATION
      - SUPPORT CONSCIOUS ACTION
      - UNDERSTANDING THE PRODUCT
      - CONCEPTUAL DESIGN
      - TELL USER & ASK USER
      - CLEAR THE PAGE OF DISTRACTIONS
      - MAKE IT CLEAR, WHERE TO ACT
      - MAKE UI PROFESSIONAL AND BEAUTIFUL
      - DEPLOY STRONG AUTHORITY ON SUBJECT
      - BE AUTHENTIC AND PERSONAL
      - DEPLOY SOCIAL PROOF
      ============================================
      */}
      
      {/* 
      ============================================
      ДЕТАЛЬНЫЕ UX СЕКЦИИ ПЕРЕНЕСЕНЫ НА /ux-principles
      ============================================
      Все следующие секции были перенесены на отдельную страницу
      для упрощения главной страницы:
      - BEHAVIOR DESIGN: Goal Achievement Path
      - BEHAVIOR DESIGN: Remove Barriers  
      - BJ FOGG BEHAVIOR GRID
      - BEHAVIOR CHANGE STRATEGIES
      - CHEATING: Smart Shortcuts
      - HABIT FORMATION
      - SUPPORT CONSCIOUS ACTION
      - UNDERSTANDING THE PRODUCT
      - CONCEPTUAL DESIGN
      - TELL USER & ASK USER
      - CLEAR THE PAGE OF DISTRACTIONS
      - MAKE IT CLEAR, WHERE TO ACT
      - MAKE UI PROFESSIONAL AND BEAUTIFUL
      - DEPLOY STRONG AUTHORITY ON SUBJECT
      - BE AUTHENTIC AND PERSONAL
      - DEPLOY SOCIAL PROOF
      ============================================
      */}
      
      {/* BEHAVIOR DESIGN: Goal Achievement Path - MOVED TO /ux-principles */}
      {/* Все детальные UX секции удалены с главной страницы и будут доступны на /ux-principles */}
      
      {/* BEHAVIOR CHANGE STRATEGIES: MOVED TO /project-detail */}
      {/* CHEATING: Smart Shortcuts - MOVED TO /courses */}
      {/* HABIT FORMATION: Make or Change Habits - MOVED TO /programs-workshops */}








      {/* DEPLOY SOCIAL PROOF: MOVED TO /ux-principles */}
      {/* SYSTEM 1: Familiar patterns and quick actions with visual cues */}
      {/* PERSUASIVE: Reinforcement - Show rewards and achievements */}
      <Box>
        <Container>
          <Box sx={{ mt: 4, width: '100%', maxWidth: '900px', mx: 'auto' }}>
            {/* JOIN BANNER: gradient + micro-animations */}
            <Box
              sx={{
                p: { xs: 2.5, sm: 3 },
                borderRadius: 3,
                mb: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2,
                flexWrap: 'wrap',
                background: 'linear-gradient(120deg, #e3f2fd 0%, #f3e5f5 50%, #fff 100%)',
                backgroundSize: '200% 200%',
                animation: 'gradientShiftBanner 6s ease infinite',
                boxShadow: '0 8px 24px rgba(0, 35, 149, 0.18)',
                border: '1px solid rgba(0,35,149,0.15)',
                '@keyframes gradientShiftBanner': {
                  '0%, 100%': { backgroundPosition: '0% 50%' },
                  '50%': { backgroundPosition: '100% 50%' },
                },
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.15)',
                    animation: 'floatBadge 3s ease-in-out infinite',
                    '@keyframes floatBadge': {
                      '0%, 100%': { transform: 'translateY(0)' },
                      '50%': { transform: 'translateY(-4px)' },
                    },
                  }}
                >
                  <WorkspacePremiumIcon sx={{ color: 'warning.main', fontSize: 30 }} />
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    Join now and earn your <strong>Community Member</strong> badge
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Be among the first to get our new digital badge for active participants.
                  </Typography>
                </Box>
              </Stack>
              <Chip
                icon={<MilitaryTechIcon />}
                label="Free badge"
                color="warning"
                size="medium"
                sx={{
                  fontWeight: 700,
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 999,
                  boxShadow: '0 4px 10px rgba(245, 124, 0, 0.4)',
                  transform: showJoinPulse ? 'scale(1)' : 'scale(1.06)',
                  transition: 'transform 0.4s ease',
                  '& .MuiChip-icon': {
                    animation: 'spinSlight 2.4s ease-in-out infinite',
                    '@keyframes spinSlight': {
                      '0%, 100%': { transform: 'rotate(0deg)' },
                      '50%': { transform: 'rotate(8deg)' },
                    },
                  },
                }}
              />
            </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
            <FlashOnIcon sx={{ color: 'warning.main' }} />
            <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 600 }}>
              Quick Actions
            </Typography>
            <Tooltip title="System 1: These actions use familiar patterns and require minimal thinking">
              <InfoIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
            </Tooltip>
          </Box>

          {/* QUICK ACTIONS: elevated buttons with icons & hover micro-interactions */}
          <Grid container spacing={2}>
                {[
                  { icon: <ContactMailIcon />, label: 'Contact', path: '/contact', color: 'primary', tooltip: 'Get in touch instantly' },
                  { icon: <PeopleIcon />, label: 'Join Event', path: '/events', color: 'error', tooltip: 'Browse upcoming events' },
                  { icon: <MenuBookIcon />, label: 'Courses', path: '/courses', color: 'info', tooltip: 'Browse courses and training' },
                  { icon: <SchoolIcon />, label: 'Programs', path: '/focus-areas', color: 'success', tooltip: 'Explore our programs' },
                ].map((action) => (
                  <Grid size={{ xs: 6, sm: 3 }} key={action.label}>
                    <Tooltip title={action.tooltip} arrow>
                      <Button
                        component={RouterLink}
                        to={action.path}
                        variant="outlined"
                        fullWidth
                        startIcon={action.icon}
                        onClick={() => showFeedback(`Navigating to ${action.label}...`, 'info')}
                        sx={{
                          py: 2,
                          borderWidth: 2,
                          fontWeight: 600,
                          borderRadius: 3,
                          position: 'relative',
                          overflow: 'hidden',
                          backgroundColor: 'rgba(255,255,255,0.9)',
                          transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background-color 0.2s ease',
                          '&:hover': {
                            borderWidth: 2,
                            transform: 'translateY(-2px)',
                            boxShadow: `0 6px 18px ${action.color}40`,
                            backgroundColor: 'rgba(255,255,255,1)',
                          },
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            inset: 0,
                            borderRadius: 3,
                            border: '1px solid transparent',
                            borderImage: `linear-gradient(120deg, rgba(0,35,149,0.3), rgba(237,41,57,0.3)) 1`,
                            opacity: 0,
                            transition: 'opacity 0.25s ease',
                          },
                          '&:hover::after': {
                            opacity: 1,
                          },
                        }}
                        color={action.color as 'primary' | 'error' | 'info' | 'success'}
                      >
                        {action.label}
                      </Button>
                    </Tooltip>
                  </Grid>
                ))}
              </Grid>
          </Box>

          {/* NUDGE: Social proof with live activity indicators */}
          <Box sx={{ mt: 5, pt: 4, width: '100%', maxWidth: '900px', mx: 'auto' }}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: 'rgba(0, 35, 149, 0.05)',
                  border: '1px solid',
                  borderColor: 'primary.main',
                  mb: 3,
                }}
              >
                <Stack direction="row" spacing={3} alignItems="center" justifyContent="center" flexWrap="wrap">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        backgroundColor: 'success.main',
                        boxShadow: '0 0 0 0 rgba(76, 175, 80, 0.6)',
                        animation: 'pulseDot 1.8s infinite',
                        '@keyframes pulseDot': {
                          '0%': { transform: 'scale(0.9)', boxShadow: '0 0 0 0 rgba(76, 175, 80, 0.6)' },
                          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 8px rgba(76, 175, 80, 0)' },
                          '100%': { transform: 'scale(0.9)', boxShadow: '0 0 0 0 rgba(76, 175, 80, 0)' },
                        },
                      }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      <strong>{liveActivity.recent}</strong> people joined in the last hour
                    </Typography>
                  </Box>
                  <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <VisibilityIcon sx={{ color: 'info.main' }} />
                    <Typography variant="body2" color="text.secondary">
                      <strong>{liveActivity.count.toLocaleString()}</strong> active members right now
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              {/* NUDGE: Choice Architecture - Most desirable option first and prominent */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2, textAlign: 'center', fontWeight: 600 }}>
                  What would you like to do?
                </Typography>
                <RadioGroup
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  sx={{ gap: 1 }}
                >
                  <Card
                    sx={{
                      p: 2,
                      border: '2px solid',
                      borderColor: selectedOption === 'join' ? 'primary.main' : 'divider',
                      backgroundColor: selectedOption === 'join' ? 'rgba(0, 35, 149, 0.05)' : 'transparent',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      '&:hover': {
                        borderColor: 'primary.main',
                        backgroundColor: 'rgba(0, 35, 149, 0.03)',
                      },
                    }}
                    onClick={() => setSelectedOption('join')}
                  >
                    <FormControlLabel
                      value="join"
                      control={<Radio />}
                      label={
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { sm: 'center' }, gap: 2, width: '100%' }}>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                              Join Our Community (Recommended)
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Free registration • Instant access • No commitment
                            </Typography>
                            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                              <Chip size="small" color="success" label="Free" />
                              <Chip size="small" color="primary" label="Instant access" />
                              <Chip size="small" variant="outlined" label="Community" />
                            </Stack>
                          </Box>
                          <Box
                            component="img"
                            src={getImagePath("/photos/583741041_1157902773184394_5619801435922057517_n.jpg")}
                            alt="Community gathering"
                            loading="lazy"
                            sx={{
                              width: { xs: '100%', sm: 140 },
                              height: { xs: 100, sm: 90 },
                              objectFit: 'cover',
                              borderRadius: 2,
                            }}
                          />
                        </Box>
                      }
                      sx={{ m: 0, width: '100%' }}
                    />
                  </Card>
                  <Card
                    sx={{
                      p: 2,
                      border: '2px solid',
                      borderColor: selectedOption === 'learn' ? 'primary.main' : 'divider',
                      backgroundColor: selectedOption === 'learn' ? 'rgba(0, 35, 149, 0.05)' : 'transparent',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        borderColor: 'primary.main',
                        backgroundColor: 'rgba(0, 35, 149, 0.03)',
                      },
                    }}
                    onClick={() => setSelectedOption('learn')}
                  >
                    <FormControlLabel
                      value="learn"
                      control={<Radio />}
                      label={
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { sm: 'center' }, gap: 2, width: '100%' }}>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                              Learn More First
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Explore our programs and activities
                            </Typography>
                            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                              <Chip size="small" variant="outlined" icon={<MenuBookIcon sx={{ fontSize: 16 }} />} label="Programs overview" />
                              <Chip size="small" variant="outlined" icon={<ComputerIcon sx={{ fontSize: 16 }} />} label="Digital skills" />
                            </Stack>
                          </Box>
                          <Box
                            component="img"
                            src={getImagePath("/photos/583114332_1157911793183492_7408427246397976881_n.jpg")}
                            alt="Learning in action"
                            loading="lazy"
                            sx={{
                              width: { xs: '100%', sm: 140 },
                              height: { xs: 100, sm: 90 },
                              objectFit: 'cover',
                              borderRadius: 2,
                            }}
                          />
                        </Box>
                      }
                      sx={{ m: 0, width: '100%' }}
                    />
                  </Card>
                  <Card
                    sx={{
                      p: 2,
                      border: '2px solid',
                      borderColor: selectedOption === 'events' ? 'primary.main' : 'divider',
                      backgroundColor: selectedOption === 'events' ? 'rgba(0, 35, 149, 0.05)' : 'transparent',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        borderColor: 'primary.main',
                        backgroundColor: 'rgba(0, 35, 149, 0.03)',
                      },
                    }}
                    onClick={() => setSelectedOption('events')}
                  >
                    <FormControlLabel
                      value="events"
                      control={<Radio />}
                      label={
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { sm: 'center' }, gap: 2, width: '100%' }}>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                              Browse Events
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              See upcoming activities and workshops
                            </Typography>
                            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                              <Chip size="small" variant="outlined" icon={<EventIcon sx={{ fontSize: 16 }} />} label="Next event soon" />
                            </Stack>
                          </Box>
                          <Box
                            sx={{
                              display: 'grid',
                              gridTemplateColumns: 'repeat(2, 1fr)',
                              gap: 0.5,
                              width: { xs: '100%', sm: 140 },
                            }}
                          >
                            {[
                              '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
                              '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
                              '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
                              '/photos/574604314_1146960820945256_3308026953512837589_n.jpg',
                            ].map((src) => (
                              <Box
                                key={src}
                                component="img"
                                src={src}
                                alt="Event preview"
                                loading="lazy"
                                sx={{
                                  width: '100%',
                                  height: 44,
                                  objectFit: 'cover',
                                  borderRadius: 1,
                                }}
                              />
                            ))}
                          </Box>
                        </Box>
                      }
                      sx={{ m: 0, width: '100%' }}
                    />
                  </Card>
                </RadioGroup>
                <Box sx={{ mt: 2, textAlign: 'center' }}>
                  <Button
                    component={RouterLink}
                    to={
                      selectedOption === 'join'
                        ? '/contact'
                        : selectedOption === 'learn'
                          ? '/about'
                          : '/events'
                    }
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => showFeedback(`Taking you to ${selectedOption === 'join' ? 'registration' : selectedOption === 'learn' ? 'information' : 'events'}...`, 'info')}
                    sx={{
                      px: 5,
                      py: 1.5,
                      fontWeight: 700,
                      boxShadow: '0 4px 14px rgba(0, 35, 149, 0.3)',
                    }}
                  >
                    Continue with Selected Option
                  </Button>
                </Box>
              </Box>

              {/* Traditional stats */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={4}
              sx={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 700, mb: 0.5 }}>
                  10+
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                  Years of Impact
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 700, mb: 0.5 }}>
                  20+
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                  European Projects
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 700, mb: 0.5 }}>
                  1000+
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                  Lives Impacted
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 700, mb: 0.5 }}>
                  15+
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                  Partner Organizations
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Image Placeholder Section */}
      <Box
        sx={{
          py: { xs: 6, sm: 8 },
          position: 'relative',
        }}
      >
        <Container>
          <Box
            sx={{
              width: '100%',
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            }}
          >
            <CardMedia
              component="img"
              image="/illustrations/mitra-image-4.png"
              alt="Placeholder"
              sx={{
                width: '100%',
                height: { xs: 250, sm: 350, md: 400 },
                objectFit: 'cover',
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* SYSTEM 1: INTUITIVE RESPONSES - Enhanced modern design */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          background: 'linear-gradient(180deg, rgba(0, 35, 149, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(0, 35, 149, 0.3), transparent)',
          },
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 8, mt: 2 }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                mb: 4,
                px: 2.5,
                py: 1,
                borderRadius: '50px',
                background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.08) 0%, rgba(237, 41, 57, 0.08) 100%)',
                border: '1px solid',
                borderColor: 'primary.main',
                opacity: 0.9,
              }}
            >
              <FlashOnIcon sx={{ color: 'warning.main', fontSize: 20 }} />
              <Chip
                icon={<AutoAwesomeIcon sx={{ fontSize: 16 }} />}
                label="System 1: Intuitive Navigation"
                sx={{
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  height: '28px',
                  backgroundColor: 'transparent',
                  color: 'primary.main',
                  '& .MuiChip-icon': {
                    color: 'primary.main',
                  },
                }}
              />
            </Box>
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                fontWeight: 800,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em',
              }}
            >
              Find What You Need Instantly
            </Typography>
            <Box
              sx={{
                width: 80,
                height: 4,
                mx: 'auto',
                mb: 3,
                background: 'linear-gradient(90deg, transparent, rgba(237, 41, 57, 0.4), transparent)',
                borderRadius: 2,
              }}
            />
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: '700px',
                mx: 'auto',
                fontWeight: 400,
                lineHeight: 1.8,
                fontSize: { xs: '1rem', sm: '1.1rem' },
              }}
            >
              Based on familiar patterns and visual cues you already know. No thinking required - just click and go.
            </Typography>
          </Box>
          <Grid container spacing={{ xs: 3, sm: 4, md: 5 }}>
            {[
              {
                icon: <SchoolIcon />,
                title: 'I want to learn',
                description: 'Discover educational programs and courses designed for your growth',
                path: '/focus-areas',
                color: '#002395',
                gradient: 'linear-gradient(135deg, rgba(0, 35, 149, 0.08) 0%, rgba(0, 35, 149, 0.03) 100%)',
                hoverGradient: 'linear-gradient(135deg, rgba(0, 35, 149, 0.12) 0%, rgba(0, 35, 149, 0.06) 100%)',
                badge: '50+ Programs',
                photo: getImagePath('/photos/572890197_1142845724690099_2859850866106109617_n.jpg'),
                showAvatars: true,
                avatars: [
                  getImagePath('/photos/571419367_1143811194593552_6930038688628840775_n.jpg'),
                  getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'),
                  getImagePath('/photos/573284472_1142846254690046_5985051112828208939_n.jpg'),
                ],
              },
              {
                icon: <PeopleIcon />,
                title: 'I want to connect',
                description: 'Join community events and build meaningful connections',
                path: '/events',
                color: '#ED2939',
                gradient: 'linear-gradient(135deg, rgba(237, 41, 57, 0.08) 0%, rgba(237, 41, 57, 0.03) 100%)',
                hoverGradient: 'linear-gradient(135deg, rgba(237, 41, 57, 0.12) 0%, rgba(237, 41, 57, 0.06) 100%)',
                badge: '20+ Events',
                photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                showAvatars: true,
                avatars: [
                  '/photos/574604314_1146960820945256_3308026953512837589_n.jpg',
                  '/photos/583489432_1157911303183541_1292926580526900497_n.jpg',
                  '/photos/583741041_1157902773184394_5619801435922057517_n.jpg',
                ],
              },
              {
                icon: <VolunteerActivismIcon />,
                title: 'I want to help',
                description: 'Become part of the change and make a real impact',
                path: '/contact',
                color: '#4CAF50',
                gradient: 'linear-gradient(135deg, rgba(76, 175, 80, 0.08) 0%, rgba(76, 175, 80, 0.03) 100%)',
                hoverGradient: 'linear-gradient(135deg, rgba(76, 175, 80, 0.12) 0%, rgba(76, 175, 80, 0.06) 100%)',
                badge: 'Join Now',
                photo: getImagePath('/photos/571419367_1143811194593552_6930038688628840775_n.jpg'),
                showAvatars: false,
              },
              {
                icon: <PublicIcon />,
                title: 'I want to explore',
                description: 'Discover our European projects and partnerships',
                path: '/projects',
                color: '#FF9800',
                gradient: 'linear-gradient(135deg, rgba(255, 152, 0, 0.08) 0%, rgba(255, 152, 0, 0.03) 100%)',
                hoverGradient: 'linear-gradient(135deg, rgba(255, 152, 0, 0.12) 0%, rgba(255, 152, 0, 0.06) 100%)',
                badge: '15+ Projects',
                photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                showAvatars: false,
              },
            ].map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.title}>
                <Card
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    p: 0,
                    textDecoration: 'none',
                    height: '100%',
                    borderRadius: 4,
                    border: 'none',
                    background: item.gradient,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: item.hoverGradient,
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.03)',
                      boxShadow: `0 16px 48px ${item.color}35, 0 6px 16px rgba(0, 0, 0, 0.12)`,
                      '&::before': {
                        opacity: 1,
                      },
                      '& .intuitive-icon-wrapper': {
                        transform: 'scale(1.08)',
                        boxShadow: `0 12px 32px ${item.color}30`,
                        '&::after': {
                          borderColor: `${item.color}50`,
                        },
                      },
                      '& .intuitive-photo': {
                        transform: 'scale(1.1)',
                      },
                      '& .intuitive-title': {
                        color: item.color,
                      },
                    },
                  }}
                >
                  <Box sx={{ p: { xs: 3, sm: 4 }, position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                    {/* Photo instead of icon */}
                    <Box
                      className="intuitive-icon-wrapper"
                      sx={{
                        width: { xs: 100, sm: 120 },
                        height: { xs: 100, sm: 120 },
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        mx: 'auto',
                        background: 'transparent',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        boxShadow: `0 8px 24px ${item.color}20`,
                        border: `4px solid white`,
                        overflow: 'hidden',
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          inset: 0,
                          borderRadius: '50%',
                          border: `3px solid ${item.color}30`,
                          transition: 'all 0.4s ease',
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={item.photo}
                        alt={item.title}
                        className="intuitive-photo"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                          filter: 'brightness(0.95) saturate(1.1)',
                        }}
                      />
                    </Box>
                    <Typography
                      className="intuitive-title"
                      variant="h4"
                      gutterBottom
                      sx={{
                        fontWeight: 800,
                        mb: 2,
                        transition: 'color 0.3s ease',
                        fontSize: { xs: '1.35rem', sm: '1.65rem', md: '1.75rem' },
                        lineHeight: 1.2,
                        textAlign: 'center',
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        mb: 4,
                        lineHeight: 1.75,
                        fontSize: { xs: '0.95rem', sm: '1.05rem' },
                        minHeight: { xs: '3.5em', sm: '3em' },
                        textAlign: 'center',
                        color: 'text.primary',
                        opacity: 0.8,
                      }}
                    >
                      {item.description}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                        mt: 'auto',
                        pt: 2,
                      }}
                    >
                      {/* Avatar Stack for community visualization */}
                      {item.showAvatars && item.avatars && (
                        <AvatarGroup
                          max={3}
                          sx={{
                            justifyContent: 'center',
                            mb: 1,
                            '& .MuiAvatar-root': {
                              width: { xs: 36, sm: 40 },
                              height: { xs: 36, sm: 40 },
                              border: '2px solid white',
                              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                              transition: 'transform 0.3s ease',
                              '&:hover': {
                                transform: 'scale(1.1)',
                                zIndex: 2,
                              },
                            },
                          }}
                        >
                          {item.avatars.map((avatar, idx) => (
                            <Avatar key={idx} src={avatar} alt={`Community member ${idx + 1}`} />
                          ))}
                        </AvatarGroup>
                      )}
                      <Button
                        variant="contained"
                        size="medium"
                        endIcon={
                          <ArrowForwardIcon
                            className="intuitive-arrow"
                            sx={{
                              fontSize: 18,
                              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                          />
                        }
                        sx={{
                          backgroundColor: item.color,
                          color: 'white',
                          fontWeight: 700,
                          fontSize: { xs: '0.85rem', sm: '0.9rem' },
                          px: { xs: 2.5, sm: 3 },
                          py: 1,
                          borderRadius: 3,
                          boxShadow: `0 4px 16px ${item.color}30`,
                          textTransform: 'none',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          '&:hover': {
                            backgroundColor: item.color,
                            transform: 'translateY(-2px)',
                            boxShadow: `0 6px 24px ${item.color}40`,
                            '& .intuitive-arrow': {
                              transform: 'translateX(4px)',
                            },
                          },
                        }}
                      >
                        {item.badge}
                      </Button>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* PERSUASIVE: Personalization - Enhanced role-based experience */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          position: 'relative',
          background: 'linear-gradient(180deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.08) 0%, transparent 50%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                mb: 4,
                px: 3,
                py: 1.5,
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4), 0 0 30px rgba(102, 126, 234, 0.2)',
                animation: 'pulse 3s ease-in-out infinite',
                '@keyframes pulse': {
                  '0%, 100%': { transform: 'scale(1)', boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4), 0 0 30px rgba(102, 126, 234, 0.2)' },
                  '50%': { transform: 'scale(1.02)', boxShadow: '0 6px 20px rgba(102, 126, 234, 0.6), 0 0 40px rgba(102, 126, 234, 0.3)' },
                },
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 20px rgba(102, 126, 234, 0.6), 0 0 40px rgba(102, 126, 234, 0.3)',
                },
              }}
            >
              <StarIcon sx={{ color: 'white', fontSize: 20, animation: 'sparkle 2s ease-in-out infinite', '@keyframes sparkle': { '0%, 100%': { opacity: 1, transform: 'scale(1)' }, '50%': { opacity: 0.7, transform: 'scale(1.2)' } } }} />
              <Typography
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  letterSpacing: '0.5px',
                }}
              >
                Personalized Experience
              </Typography>
            </Box>
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                fontWeight: 800,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                background: 'linear-gradient(135deg, #002395 0%, #667eea 50%, #764ba2 100%)',
                backgroundSize: '200% auto',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 3s linear infinite',
                '@keyframes gradientShift': {
                  '0%': { backgroundPosition: '0% center' },
                  '100%': { backgroundPosition: '200% center' },
                },
                letterSpacing: '-0.02em',
              }}
            >
              Who Are You?
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: '700px',
                mx: 'auto',
                fontWeight: 400,
                lineHeight: 1.8,
                fontSize: { xs: '1rem', sm: '1.1rem' },
                animation: 'fadeIn 0.8s ease-out 0.3s both',
                '@keyframes fadeIn': {
                  from: { opacity: 0, transform: 'translateY(10px)' },
                  to: { opacity: 1, transform: 'translateY(0)' },
                },
              }}
            >
              Choose your role to see personalized recommendations tailored just for you 🎯
            </Typography>
          </Box>
          <Grid container spacing={{ xs: 3, sm: 4 }} sx={{ mb: 6 }}>
            {[
              {
                role: 'senior',
                icon: <PersonIcon />,
                label: 'Senior',
                description: 'Digital skills and social activities',
                color: '#4287f5',
                gradient: 'linear-gradient(135deg, rgba(66, 135, 245, 0.85) 0%, transparent 100%)',
                stats: { members: 156, programs: 12 },
                features: ['💻 Digital Literacy', '🎨 Art Classes', '☕ Social Meetups'],
                image: '/photos/583114332_1157911793183492_7408427246397976881_n.jpg',
              },
              {
                role: 'youth',
                icon: <GroupIcon />,
                label: 'Youth',
                description: 'Education and career development',
                color: '#ff9800',
                gradient: 'linear-gradient(135deg, rgba(255, 152, 0, 0.85) 0%, transparent 100%)',
                stats: { members: 340, placement: '89%' },
                features: ['💻 Coding Bootcamp', '🎬 Media Production', '🗣️ Public Speaking', '🌍 EU Opportunities'],
                image: '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
              },
              {
                role: 'migrant',
                icon: <PublicIcon />,
                label: 'Migrant',
                description: 'Integration and language support',
                color: '#4caf50',
                gradient: 'linear-gradient(135deg, rgba(76, 175, 80, 0.85) 0%, transparent 100%)',
                stats: { languages: 15, success: '95%' },
                features: ['🇫🇷 French Classes', '📄 Document Help', '🏠 Housing Support', '👔 Job Training'],
                image: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
              },
              {
                role: 'organization',
                icon: <BusinessIcon />,
                label: 'Organization',
                description: 'Partnership opportunities',
                color: '#43a047',
                gradient: 'linear-gradient(135deg, rgba(67, 160, 71, 0.85) 0%, transparent 100%)',
                stats: { partners: 23, countries: 8 },
                features: ['💰 Funding Access', '📊 Project Collaboration', '🎓 Training Programs', '📱 Resource Sharing'],
                image: '/photos/583741041_1157902773184394_5619801435922057517_n.jpg',
              },
            ].map((roleOption) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={roleOption.role}>
                <Card
                  onClick={() => setSelectedRole(roleOption.role)}
                  sx={{
                    p: 0,
                    textAlign: 'center',
                    cursor: 'pointer',
                    height: '100%',
                    border: selectedRole === roleOption.role ? `3px solid ${roleOption.color}` : '2px solid',
                    borderColor: selectedRole === roleOption.role ? roleOption.color : 'divider',
                    backgroundColor: selectedRole === roleOption.role ? `${roleOption.color}15` : 'background.paper',
                    color: selectedRole === roleOption.role ? 'text.primary' : 'inherit',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: selectedRole === roleOption.role
                      ? `0 0 0 4px ${roleOption.color}30, 0 20px 40px rgba(0, 0, 0, 0.15)`
                      : '0 2px 8px rgba(0, 0, 0, 0.08)',
                    transform: selectedRole === roleOption.role ? 'scale(1.05)' : selectedRole && selectedRole !== roleOption.role ? 'scale(0.95)' : 'scale(1)',
                    filter: selectedRole && selectedRole !== roleOption.role ? 'blur(2px) grayscale(50%)' : 'none',
                    opacity: selectedRole && selectedRole !== roleOption.role ? 0.6 : 1,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                      transition: 'left 0.5s',
                    },
                    '&:hover': {
                      transform: selectedRole === roleOption.role ? 'scale(1.05) translateY(-12px)' : 'translateY(-12px) scale(1.03)',
                      boxShadow: `0 20px 40px rgba(0, 0, 0, 0.15), 0 0 30px ${roleOption.color}30`,
                      borderColor: roleOption.color,
                      '&::before': {
                        left: '100%',
                      },
                    },
                  }}
                >
                  {selectedRole === roleOption.role && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        width: 40,
                        height: 40,
                        background: 'white',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 24,
                        color: roleOption.color,
                        zIndex: 2,
                        animation: 'checkmark-pop 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                        '@keyframes checkmark-pop': {
                          '0%': { transform: 'scale(0)', opacity: 0 },
                          '50%': { transform: 'scale(1.2)' },
                          '100%': { transform: 'scale(1)', opacity: 1 },
                        },
                      }}
                    >
                      ✓
                    </Box>
                  )}
                  <Box
                    sx={{
                      position: 'relative',
                      height: 140,
                      overflow: 'hidden',
                      background: roleOption.gradient,
                    }}
                  >
                    <Box
                      component="img"
                      src={roleOption.image}
                      alt={roleOption.label}
                      loading="lazy"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease',
                        transform: selectedRole === roleOption.role ? 'scale(1.1)' : 'scale(1)',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 80,
                        height: 80,
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(255, 255, 255, 0.9)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        transition: 'all 0.4s ease',
                        '& svg': {
                          fontSize: 40,
                          color: roleOption.color,
                        },
                      }}
                    >
                      {roleOption.icon}
                    </Box>
                  </Box>
                  <Box sx={{ p: 3, position: 'relative', zIndex: 1 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 1 }}>
                      {roleOption.label}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, minHeight: '2.5em' }}>
                      {roleOption.description}
                    </Typography>
                    <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 2, flexWrap: 'wrap', gap: 0.5 }}>
                      <Chip
                        size="small"
                        label={`👥 ${roleOption.stats.members || roleOption.stats.partners || roleOption.stats.languages} ${roleOption.role === 'organization' ? 'partners' : roleOption.role === 'migrant' ? 'languages' : 'members'}`}
                        sx={{
                          fontSize: '0.7rem',
                          height: 24,
                          backgroundColor: `${roleOption.color}15`,
                          color: roleOption.color,
                          fontWeight: 600,
                        }}
                      />
                      {roleOption.stats.programs && (
                        <Chip
                          size="small"
                          label={`📚 ${roleOption.stats.programs} programs`}
                          sx={{
                            fontSize: '0.7rem',
                            height: 24,
                            backgroundColor: `${roleOption.color}15`,
                            color: roleOption.color,
                            fontWeight: 600,
                          }}
                        />
                      )}
                    </Stack>
                    <Stack direction="row" spacing={0.5} justifyContent="center" sx={{ flexWrap: 'wrap', gap: 0.5 }}>
                      {roleOption.features.slice(0, 3).map((feature, idx) => (
                        <Chip
                          key={idx}
                          size="small"
                          label={feature}
                          sx={{
                            fontSize: '0.65rem',
                            height: 22,
                            backgroundColor: `${roleOption.color}10`,
                            color: 'text.secondary',
                            border: `1px solid ${roleOption.color}20`,
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
          {selectedRole !== 'all' && (
            <Box
              sx={{
                mt: 4,
                p: { xs: 3, sm: 4 },
                borderRadius: 4,
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 248, 255, 0.95) 100%)',
                border: '2px solid transparent',
                position: 'relative',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                animation: 'slideUp 0.5s ease-out',
                '@keyframes slideUp': {
                  from: { opacity: 0, transform: 'translateY(30px)' },
                  to: { opacity: 1, transform: 'translateY(0)' },
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 'inherit',
                  padding: 2,
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  zIndex: -1,
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                <StarIcon sx={{ color: '#667eea', fontSize: 28, animation: 'sparkle 2s ease-in-out infinite' }} />
                <Typography variant="h5" sx={{ fontWeight: 700, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Recommended for You
                </Typography>
                <Chip
                  label={`Based on: ${selectedRole === 'senior' ? 'Senior' : selectedRole === 'youth' ? 'Youth' : selectedRole === 'migrant' ? 'Migrant' : 'Organization'}`}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    color: '#667eea',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                  }}
                />
              </Box>
              <Grid container spacing={3} sx={{ mb: 4 }}>
                {(
                  selectedRole === 'senior'
                    ? [
                        { title: 'Digital Literacy Workshops', description: 'Learn essential computer skills in a friendly environment', badge: '🔥 Most Popular', icon: '💻' },
                        { title: 'Social Integration Activities', description: 'Connect with peers through cultural and social events', badge: '👥', icon: '🎨' },
                        { title: 'Cultural Exchange Programs', description: 'Share experiences and learn from diverse cultures', badge: '🌍', icon: '☕' },
                      ]
                    : selectedRole === 'youth'
                      ? [
                          { title: 'Erasmus+ Projects', description: 'Join European mobility programs and international exchanges', badge: '🔥 Most Popular', icon: '🌍' },
                          { title: 'Media & Arts Education', description: 'Develop creative skills in media production and arts', badge: '🎬', icon: '📚' },
                          { title: 'Career Development Programs', description: 'Build your professional path with mentorship', badge: '💼', icon: '🚀' },
                        ]
                      : selectedRole === 'migrant'
                        ? [
                            { title: 'Intercultural Education', description: 'Learn about French culture and integration pathways', badge: '🔥 Most Popular', icon: '🎓' },
                            { title: 'Language Support', description: 'French classes with multilingual support team', badge: '🗣️', icon: '📄' },
                            { title: 'Community Integration', description: 'Connect with local community and find support', badge: '🤝', icon: '🏠' },
                          ]
                        : [
                            { title: 'Partnership Opportunities', description: 'Connect with 15+ organizations for collaborative projects', badge: '🔥 Most Popular', icon: '🤝' },
                            { title: 'European Network Access', description: 'Join 200+ organizations across Europe', badge: '🌍', icon: '📊' },
                            { title: 'Collaborative Projects', description: 'Co-create impact with partner organizations', badge: '💡', icon: '🎓' },
                          ]
                ).map((rec, index) => (
                  <Grid size={{ xs: 12, md: 4 }} key={rec.title}>
                    <Card
                      sx={{
                        p: 2.5,
                        height: '100%',
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 3,
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          width: 4,
                          height: '100%',
                          background: 'linear-gradient(180deg, #667eea, #764ba2)',
                          transform: 'scaleY(0)',
                          transition: 'transform 0.3s ease',
                        },
                        '&:hover': {
                          transform: 'translateX(10px)',
                          boxShadow: '-5px 5px 20px rgba(0, 0, 0, 0.1)',
                          '&::before': {
                            transform: 'scaleY(1)',
                          },
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
                        <Typography sx={{ fontSize: 28 }}>{rec.icon}</Typography>
                        <Box sx={{ flex: 1 }}>
                          {rec.badge && (
                            <Chip
                              label={rec.badge}
                              size="small"
                              sx={{
                                mb: 1,
                                fontSize: '0.7rem',
                                height: 20,
                                backgroundColor: rec.badge.includes('🔥') ? 'rgba(255, 152, 0, 0.15)' : 'rgba(102, 126, 234, 0.1)',
                                color: rec.badge.includes('🔥') ? '#ff9800' : '#667eea',
                                fontWeight: 700,
                              }}
                            />
                          )}
                          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: '1.1rem' }}>
                            {rec.title}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {rec.description}
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <Box sx={{ textAlign: 'center' }}>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon sx={{ transition: 'transform 0.3s ease' }} />}
                  sx={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    backgroundSize: '200% auto',
                    animation: 'gradientShift 3s linear infinite',
                    '@keyframes gradientShift': {
                      '0%': { backgroundPosition: '0% center' },
                      '100%': { backgroundPosition: '200% center' },
                    },
                    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4), 0 0 30px rgba(102, 126, 234, 0.2)',
                    px: 5,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    borderRadius: 3,
                    textTransform: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: 0,
                      height: 0,
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.3)',
                      transform: 'translate(-50%, -50%)',
                      transition: 'width 0.6s, height 0.6s',
                    },
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(102, 126, 234, 0.5), 0 0 40px rgba(102, 126, 234, 0.3)',
                      '&::before': {
                        width: 300,
                        height: 300,
                      },
                      '& .MuiButton-endIcon': {
                        transform: 'translateX(4px)',
                      },
                    },
                  }}
                >
                  Get Started
                </Button>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 2, fontSize: '0.85rem' }}>
                  ⏱️ Takes only 2 minutes • No commitment required
                </Typography>
              </Box>
            </Box>
          )}
        </Container>
      </Box>

      {/* HEURISTICS: Simplified decision rules */}
      <Box
        sx={{
          py: { xs: 6, sm: 8 },
          backgroundColor: 'rgba(0, 35, 149, 0.03)',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 2, 
                fontWeight: 800,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                letterSpacing: '-0.02em',
              }}
            >
              Choose Your Path
              <Typography
                component="span"
                sx={{
                  ml: 1.5,
                  fontSize: '0.4em',
                  fontWeight: 600,
                  color: 'primary.main',
                  verticalAlign: 'middle',
                }}
              >
                • Quick Decisions
              </Typography>
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', fontWeight: 400, lineHeight: 1.7 }}>
              Simple rules to help you decide quickly
            </Typography>
          </Box>
          <Box 
            sx={{ 
              mb: 5,
              position: 'relative',
            }}
          >
            <Tabs
              value={quickDecisionTab}
              onChange={(_, newValue) => setQuickDecisionTab(newValue)}
              variant="fullWidth"
              sx={{
                position: 'relative',
                '& .MuiTab-root': {
                  fontWeight: 600,
                  fontSize: '1rem',
                  textTransform: 'none',
                  minHeight: 72,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: 2,
                  mx: 0.5,
                  '&:hover': {
                    backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    transform: 'translateY(-2px)',
                  },
                },
                '& .Mui-selected': {
                  color: 'primary.main',
                  fontWeight: 700,
                  backgroundColor: 'rgba(0, 35, 149, 0.08)',
                  boxShadow: '0 4px 12px rgba(0, 35, 149, 0.15)',
                  transform: 'translateY(-2px)',
                },
                '& .MuiTabs-indicator': {
                  display: 'none',
                },
              }}
            >
              <Tab 
                icon={<ThumbUpIcon sx={{ fontSize: 24 }} />} 
                iconPosition="start" 
                label="I'm Ready"
                sx={{
                  '&.Mui-selected': {
                    '& .MuiSvgIcon-root': {
                      color: 'success.main',
                    },
                  },
                }}
              />
              <Tab 
                icon={<InfoIcon sx={{ fontSize: 24 }} />} 
                iconPosition="start" 
                label="I Need Info"
              />
              <Tab 
                icon={<AccessTimeIcon sx={{ fontSize: 24 }} />} 
                iconPosition="start" 
                label="I'm Exploring"
              />
            </Tabs>
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 3,
                background: 'linear-gradient(90deg, transparent, rgba(0, 35, 149, 0.2), transparent)',
                borderRadius: '0 0 2px 2px',
              }}
            />
          </Box>
          <Box sx={{ minHeight: '200px' }}>
            {quickDecisionTab === 0 && (
              <Grid container spacing={{ xs: 3, sm: 4 }}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Card 
                    component={RouterLink}
                    to="/contact"
                    sx={{ 
                      p: 0,
                      height: '100%', 
                      borderRadius: 4,
                      overflow: 'hidden',
                      position: 'relative',
                      background: 'transparent',
                      boxShadow: '0 8px 32px rgba(76, 175, 80, 0.15)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      textDecoration: 'none',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 48px rgba(76, 175, 80, 0.25)',
                        '& .card-image': {
                          transform: 'scale(1.1)',
                        },
                        '& .card-button': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 24px rgba(76, 175, 80, 0.5)',
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        height: 200,
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        component="img"
                        src={getImagePath("/photos/583114332_1157911793183492_7408427246397976881_n.jpg")}
                        alt="Ready to Join"
                        className="card-image"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.85) 0%, rgba(76, 175, 80, 0.6) 100%)',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          width: 48,
                          height: 48,
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.95)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        }}
                      >
                        <CheckCircleIcon sx={{ fontSize: 28, color: '#4caf50' }} />
                      </Box>
                    </Box>
                    <Box sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '1.35rem', sm: '1.5rem' } }}>
                        Ready to Join?
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: 'text.secondary', minHeight: '3em' }}>
                        If you're ready to get started, click below to register. It takes just 2 minutes.
                      </Typography>
                      <Button
                        variant="contained"
                        fullWidth
                        endIcon={<ArrowForwardIcon />}
                        className="card-button"
                        sx={{
                          py: 2,
                          fontWeight: 700,
                          fontSize: '1rem',
                          borderRadius: 3,
                          backgroundColor: '#4caf50',
                          boxShadow: '0 4px 16px rgba(76, 175, 80, 0.4), 0 0 24px rgba(76, 175, 80, 0.2)',
                          textTransform: 'none',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: '#43a047',
                          },
                        }}
                      >
                        Register Now
                      </Button>
                    </Box>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Card 
                    component={RouterLink}
                    to="/contact"
                    sx={{ 
                      p: 0,
                      height: '100%', 
                      borderRadius: 4,
                      overflow: 'hidden',
                      position: 'relative',
                      background: 'transparent',
                      boxShadow: '0 8px 32px rgba(0, 35, 149, 0.15)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      textDecoration: 'none',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 48px rgba(0, 35, 149, 0.25)',
                        '& .card-image': {
                          transform: 'scale(1.1)',
                        },
                        '& .card-button': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 24px rgba(0, 35, 149, 0.5)',
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        height: 200,
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        component="img"
                        src={getImagePath("/photos/571419367_1143811194593552_6930038688628840775_n.jpg")}
                        alt="Want to Volunteer"
                        className="card-image"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.85) 0%, rgba(0, 35, 149, 0.6) 100%)',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          width: 48,
                          height: 48,
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.95)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        }}
                      >
                        <CheckCircleIcon sx={{ fontSize: 28, color: '#002395' }} />
                      </Box>
                    </Box>
                    <Box sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '1.35rem', sm: '1.5rem' } }}>
                        Want to Volunteer?
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: 'text.secondary', minHeight: '3em' }}>
                        Help others while developing your skills. Join our volunteer program.
                      </Typography>
                      <Button
                        variant="contained"
                        fullWidth
                        endIcon={<ArrowForwardIcon />}
                        className="card-button"
                        sx={{
                          py: 2,
                          fontWeight: 700,
                          fontSize: '1rem',
                          borderRadius: 3,
                          backgroundColor: '#002395',
                          boxShadow: '0 4px 16px rgba(0, 35, 149, 0.4), 0 0 24px rgba(0, 35, 149, 0.2)',
                          textTransform: 'none',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: '#0038d6',
                          },
                        }}
                      >
                        Become a Volunteer
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              </Grid>
            )}
            {quickDecisionTab === 1 && (
              <Grid container spacing={{ xs: 3, sm: 4 }}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Card 
                    component={RouterLink}
                    to="/about"
                    sx={{ 
                      p: 0,
                      height: '100%', 
                      borderRadius: 4,
                      overflow: 'hidden',
                      position: 'relative',
                      background: 'transparent',
                      boxShadow: '0 8px 32px rgba(102, 126, 234, 0.15)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      textDecoration: 'none',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 48px rgba(102, 126, 234, 0.25)',
                        '& .card-image': {
                          transform: 'scale(1.1)',
                        },
                        '& .card-button': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 24px rgba(102, 126, 234, 0.5)',
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        height: 200,
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        component="img"
                        src={getImagePath("/photos/572851437_1143811217926883_7725194936764095335_n.jpg")}
                        alt="Learn About Us"
                        className="card-image"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.85) 0%, rgba(118, 75, 162, 0.6) 100%)',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          width: 48,
                          height: 48,
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.95)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        }}
                      >
                        <InfoIcon sx={{ fontSize: 28, color: '#667eea' }} />
                      </Box>
                    </Box>
                    <Box sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '1.35rem', sm: '1.5rem' } }}>
                        Learn About Us
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: 'text.secondary', minHeight: '3em' }}>
                        Discover our mission, values, and impact
                      </Typography>
                      <Button
                        variant="contained"
                        fullWidth
                        endIcon={<ArrowForwardIcon />}
                        className="card-button"
                        sx={{
                          py: 2,
                          fontWeight: 700,
                          fontSize: '1rem',
                          borderRadius: 3,
                          backgroundColor: '#667eea',
                          boxShadow: '0 4px 16px rgba(102, 126, 234, 0.4), 0 0 24px rgba(102, 126, 234, 0.2)',
                          textTransform: 'none',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: '#5a6fd8',
                          },
                        }}
                      >
                        About Us
                      </Button>
                    </Box>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Card 
                    component={RouterLink}
                    to="/focus-areas"
                    sx={{ 
                      p: 0,
                      height: '100%', 
                      borderRadius: 4,
                      overflow: 'hidden',
                      position: 'relative',
                      background: 'transparent',
                      boxShadow: '0 8px 32px rgba(237, 41, 57, 0.15)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      textDecoration: 'none',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 48px rgba(237, 41, 57, 0.25)',
                        '& .card-image': {
                          transform: 'scale(1.1)',
                        },
                        '& .card-button': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 24px rgba(237, 41, 57, 0.5)',
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        height: 200,
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        component="img"
                        src={getImagePath("/photos/583741041_1157902773184394_5619801435922057517_n.jpg")}
                        alt="Our Programs"
                        className="card-image"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(135deg, rgba(237, 41, 57, 0.85) 0%, rgba(237, 41, 57, 0.6) 100%)',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          width: 48,
                          height: 48,
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.95)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        }}
                      >
                        <MenuBookIcon sx={{ fontSize: 28, color: '#ED2939' }} />
                      </Box>
                    </Box>
                    <Box sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '1.35rem', sm: '1.5rem' } }}>
                        Our Programs
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: 'text.secondary', minHeight: '3em' }}>
                        Explore all our focus areas and programs
                      </Typography>
                      <Button
                        variant="contained"
                        fullWidth
                        endIcon={<ArrowForwardIcon />}
                        className="card-button"
                        sx={{
                          py: 2,
                          fontWeight: 700,
                          fontSize: '1rem',
                          borderRadius: 3,
                          backgroundColor: '#ED2939',
                          boxShadow: '0 4px 16px rgba(237, 41, 57, 0.4), 0 0 24px rgba(237, 41, 57, 0.2)',
                          textTransform: 'none',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: '#d21e2e',
                          },
                        }}
                      >
                        View Programs
                      </Button>
                    </Box>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Card 
                    component={RouterLink}
                    to="/contact"
                    sx={{ 
                      p: 0,
                      height: '100%', 
                      borderRadius: 4,
                      overflow: 'hidden',
                      position: 'relative',
                      background: 'transparent',
                      boxShadow: '0 8px 32px rgba(0, 35, 149, 0.15)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      textDecoration: 'none',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 48px rgba(0, 35, 149, 0.25)',
                        '& .card-image': {
                          transform: 'scale(1.1)',
                        },
                        '& .card-button': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 24px rgba(0, 35, 149, 0.5)',
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        height: 200,
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        component="img"
                        src={getImagePath("/photos/583943471_1157911509850187_2575083228465038744_n.jpg")}
                        alt="Contact Us"
                        className="card-image"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.85) 0%, rgba(0, 35, 149, 0.6) 100%)',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          width: 48,
                          height: 48,
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.95)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        }}
                      >
                        <ContactMailIcon sx={{ fontSize: 28, color: '#002395' }} />
                      </Box>
                    </Box>
                    <Box sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '1.35rem', sm: '1.5rem' } }}>
                        Contact Us
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: 'text.secondary', minHeight: '3em' }}>
                        Have questions? We're here to help
                      </Typography>
                      <Button
                        variant="contained"
                        fullWidth
                        endIcon={<ArrowForwardIcon />}
                        className="card-button"
                        sx={{
                          py: 2,
                          fontWeight: 700,
                          fontSize: '1rem',
                          borderRadius: 3,
                          backgroundColor: '#002395',
                          boxShadow: '0 4px 16px rgba(0, 35, 149, 0.4), 0 0 24px rgba(0, 35, 149, 0.2)',
                          textTransform: 'none',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: '#0038d6',
                          },
                        }}
                      >
                        Get in Touch
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              </Grid>
            )}
            {quickDecisionTab === 2 && (
              <Grid container spacing={{ xs: 3, sm: 4 }}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Card 
                    component={RouterLink}
                    to="/events"
                    sx={{ 
                      p: 0,
                      height: '100%', 
                      borderRadius: 4,
                      overflow: 'hidden',
                      position: 'relative',
                      background: 'transparent',
                      boxShadow: '0 8px 32px rgba(255, 152, 0, 0.15)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      textDecoration: 'none',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 48px rgba(255, 152, 0, 0.25)',
                        '& .card-image': {
                          transform: 'scale(1.1)',
                        },
                        '& .card-button': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 24px rgba(255, 152, 0, 0.5)',
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        height: 200,
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        component="img"
                        src={getImagePath("/photos/574604314_1146960820945256_3308026953512837589_n.jpg")}
                        alt="Browse Events"
                        className="card-image"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.85) 0%, rgba(255, 152, 0, 0.6) 100%)',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          width: 48,
                          height: 48,
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.95)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        }}
                      >
                        <EventIcon sx={{ fontSize: 28, color: '#FF9800' }} />
                      </Box>
                    </Box>
                    <Box sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '1.35rem', sm: '1.5rem' } }}>
                        Browse Events
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: 'text.secondary', minHeight: '3em' }}>
                        See what's happening in our community
                      </Typography>
                      <Button
                        variant="contained"
                        fullWidth
                        endIcon={<ArrowForwardIcon />}
                        className="card-button"
                        sx={{
                          py: 2,
                          fontWeight: 700,
                          fontSize: '1rem',
                          borderRadius: 3,
                          backgroundColor: '#FF9800',
                          boxShadow: '0 4px 16px rgba(255, 152, 0, 0.4), 0 0 24px rgba(255, 152, 0, 0.2)',
                          textTransform: 'none',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: '#f57c00',
                          },
                        }}
                      >
                        View Events
                      </Button>
                    </Box>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Card 
                    component={RouterLink}
                    to="/gallery"
                    sx={{ 
                      p: 0,
                      height: '100%', 
                      borderRadius: 4,
                      overflow: 'hidden',
                      position: 'relative',
                      background: 'transparent',
                      boxShadow: '0 8px 32px rgba(156, 39, 176, 0.15)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      textDecoration: 'none',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 48px rgba(156, 39, 176, 0.25)',
                        '& .card-image': {
                          transform: 'scale(1.1)',
                        },
                        '& .card-button': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 24px rgba(156, 39, 176, 0.5)',
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        height: 200,
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        component="img"
                        src={getImagePath("/photos/583489432_1157911303183541_1292926580526900497_n.jpg")}
                        alt="View Gallery"
                        className="card-image"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.85) 0%, rgba(156, 39, 176, 0.6) 100%)',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          width: 48,
                          height: 48,
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.95)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        }}
                      >
                        <ImageIcon sx={{ fontSize: 28, color: '#9c27b0' }} />
                      </Box>
                    </Box>
                    <Box sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '1.35rem', sm: '1.5rem' } }}>
                        View Gallery
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: 'text.secondary', minHeight: '3em' }}>
                        See photos from our activities and programs
                      </Typography>
                      <Button
                        variant="contained"
                        fullWidth
                        endIcon={<ArrowForwardIcon />}
                        className="card-button"
                        sx={{
                          py: 2,
                          fontWeight: 700,
                          fontSize: '1rem',
                          borderRadius: 3,
                          backgroundColor: '#9c27b0',
                          boxShadow: '0 4px 16px rgba(156, 39, 176, 0.4), 0 0 24px rgba(156, 39, 176, 0.2)',
                          textTransform: 'none',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: '#7b1fa2',
                          },
                        }}
                      >
                        Visit Gallery
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              </Grid>
            )}
          </Box>
        </Container>
      </Box>

      {/* SYSTEM 2: FOCUSED CALCULATION - Detailed information for important decisions */}
      <Box
        sx={{
          py: { xs: 6, sm: 8 },
          backgroundColor: 'rgba(0, 0, 0, 0.02)',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                mb: 4,
                px: 3,
                py: 1.5,
                borderRadius: '50px',
                background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.05) 100%)',
                border: '1px solid',
                borderColor: 'primary.main',
              }}
            >
              <LightbulbIcon sx={{ color: 'primary.main', fontSize: 20 }} />
              <Chip
                icon={<CalculateIcon sx={{ fontSize: 16 }} />}
                label="System 2: Detailed Information"
                sx={{
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  height: '28px',
                  backgroundColor: 'transparent',
                  color: 'primary.main',
                  '& .MuiChip-icon': {
                    color: 'primary.main',
                  },
                }}
              />
            </Box>
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 3, 
                fontWeight: 800,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                letterSpacing: '-0.02em',
              }}
            >
              Making an Important Decision?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontWeight: 400, lineHeight: 1.8 }}>
              Get all the facts you need to make an informed choice. Take your time to analyze and compare options.
            </Typography>
          </Box>
          <Grid container spacing={{ xs: 3, sm: 4, md: 5 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Accordion 
                defaultExpanded
                sx={{
                  borderRadius: 3,
                  mb: 2,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  '&:before': { display: 'none' },
                  overflow: 'hidden',
                }}
              >
                <AccordionSummary 
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    px: 3,
                    py: 2.5,
                    minHeight: 72,
                    '& .MuiAccordionSummary-content': {
                      my: 1.5,
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.15) 0%, rgba(76, 175, 80, 0.08) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <AttachMoneyIcon sx={{ fontSize: 32, color: '#4caf50' }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.2rem' }}>
                      What are the costs?
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                  <Box
                    sx={{
                      mb: 3,
                      p: 2.5,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.05) 100%)',
                      border: '2px dashed',
                      borderColor: '#4caf50',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h3" sx={{ fontWeight: 800, color: '#4caf50', mb: 0.5 }}>
                      0€
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                      Free registration - No cost to join
                    </Typography>
                  </Box>
                  <Stack spacing={2.5}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      <CheckCircleIcon sx={{ color: '#4caf50', fontSize: 24, mt: 0.5, flexShrink: 0 }} />
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>
                          Registration
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                          Free - No cost to join our community
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      <CheckCircleIcon sx={{ color: '#4caf50', fontSize: 24, mt: 0.5, flexShrink: 0 }} />
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>
                          Programs
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                          Most programs are free. Some specialized workshops may have minimal fees (typically €10-30), with discounts for members.
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      <CheckCircleIcon sx={{ color: '#4caf50', fontSize: 24, mt: 0.5, flexShrink: 0 }} />
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>
                          Events
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                          Community events are generally free. Special events may have ticket prices clearly stated in advance.
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  borderRadius: 3,
                  mb: 2,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  '&:before': { display: 'none' },
                  overflow: 'hidden',
                }}
              >
                <AccordionSummary 
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    px: 3,
                    py: 2.5,
                    minHeight: 72,
                    '& .MuiAccordionSummary-content': {
                      my: 1.5,
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.15) 0%, rgba(255, 152, 0, 0.08) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <AccessTimeIcon sx={{ fontSize: 32, color: '#FF9800' }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.2rem' }}>
                      What is the time commitment?
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                  <Stack spacing={2.5}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      <CheckCircleIcon sx={{ color: '#FF9800', fontSize: 24, mt: 0.5, flexShrink: 0 }} />
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>
                          Flexible participation
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                          Join programs and events as your schedule allows. No minimum commitment required.
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      <CheckCircleIcon sx={{ color: '#FF9800', fontSize: 24, mt: 0.5, flexShrink: 0 }} />
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>
                          Program duration
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                          Programs range from one-day workshops to multi-month courses. You choose what fits your needs.
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      <CheckCircleIcon sx={{ color: '#FF9800', fontSize: 24, mt: 0.5, flexShrink: 0 }} />
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>
                          Volunteering
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                          Volunteer hours are flexible and can be arranged around your availability.
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Accordion 
                defaultExpanded
                sx={{
                  borderRadius: 3,
                  mb: 2,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  '&:before': { display: 'none' },
                  overflow: 'hidden',
                }}
              >
                <AccordionSummary 
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    px: 3,
                    py: 2.5,
                    minHeight: 72,
                    '& .MuiAccordionSummary-content': {
                      my: 1.5,
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.15) 0%, rgba(0, 35, 149, 0.08) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <CheckCircleIcon sx={{ fontSize: 32, color: '#002395' }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.2rem' }}>
                      What are the requirements?
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                  <Box
                    sx={{
                      mb: 3,
                      p: 2,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.08) 0%, rgba(0, 35, 149, 0.03) 100%)',
                      display: 'flex',
                      gap: 1.5,
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    {[
                      { icon: <PersonIcon />, label: 'Youth' },
                      { icon: <GroupIcon />, label: 'Adults' },
                      { icon: <PersonIcon />, label: 'Seniors' },
                    ].map((item, idx) => (
                      <Chip
                        key={idx}
                        icon={item.icon}
                        label={item.label}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(0, 35, 149, 0.1)',
                          color: '#002395',
                          fontWeight: 600,
                          '& .MuiChip-icon': {
                            color: '#002395',
                          },
                        }}
                      />
                    ))}
                    <Typography variant="caption" sx={{ ml: 'auto', fontWeight: 700, color: 'text.secondary' }}>
                      All ages welcome
                    </Typography>
                  </Box>
                  <Stack spacing={2.5}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      <PersonIcon sx={{ color: '#002395', fontSize: 24, mt: 0.5, flexShrink: 0 }} />
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>
                          Age
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                          Open to all ages - from youth to seniors
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      <SchoolIcon sx={{ color: '#002395', fontSize: 24, mt: 0.5, flexShrink: 0 }} />
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>
                          Background
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                          No specific qualifications needed. All backgrounds welcome.
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      <PublicIcon sx={{ color: '#002395', fontSize: 24, mt: 0.5, flexShrink: 0 }} />
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>
                          Language
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                          Programs available in multiple languages. English and French are primary.
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      <Box
                        sx={{
                          width: 24,
                          height: 24,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #002395, #ED2939)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          mt: 0.5,
                        }}
                      >
                        <LocationOnIcon sx={{ fontSize: 16, color: 'white' }} />
                      </Box>
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>
                          Location
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                          Based in Nice, France, but many programs are available online.
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  borderRadius: 3,
                  mb: 2,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  '&:before': { display: 'none' },
                  overflow: 'hidden',
                }}
              >
                <AccordionSummary 
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    px: 3,
                    py: 2.5,
                    minHeight: 72,
                    '& .MuiAccordionSummary-content': {
                      my: 1.5,
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, rgba(237, 41, 57, 0.15) 0%, rgba(237, 41, 57, 0.08) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <StarIcon sx={{ fontSize: 32, color: '#ED2939' }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.2rem' }}>
                      What can I expect?
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                  <Stack spacing={2.5}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      <VolunteerActivismIcon sx={{ color: '#ED2939', fontSize: 24, mt: 0.5, flexShrink: 0 }} />
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>
                          Support
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                          Dedicated staff and volunteers to help you every step of the way.
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      <PeopleIcon sx={{ color: '#ED2939', fontSize: 24, mt: 0.5, flexShrink: 0 }} />
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>
                          Community
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                          Welcoming, inclusive environment with diverse participants.
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      <TrendingUpIcon sx={{ color: '#ED2939', fontSize: 24, mt: 0.5, flexShrink: 0 }} />
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>
                          Growth
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                          Opportunities for personal and professional development.
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      <EmojiEventsIcon sx={{ color: '#ED2939', fontSize: 24, mt: 0.5, flexShrink: 0 }} />
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>
                          Impact
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                          Be part of positive change in your community and across Europe.
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon sx={{ transition: 'transform 0.3s ease' }} />}
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 700,
                borderRadius: 3,
                background: 'linear-gradient(135deg, #002395 0%, #0038d6 100%)',
                boxShadow: '0 4px 20px rgba(0, 35, 149, 0.3), 0 2px 8px rgba(0, 35, 149, 0.2)',
                textTransform: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                  transition: 'left 0.5s ease',
                },
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 28px rgba(0, 35, 149, 0.4), 0 4px 12px rgba(0, 35, 149, 0.3)',
                  background: 'linear-gradient(135deg, #0038d6 0%, #002395 100%)',
                  '&::before': {
                    left: '100%',
                  },
                  '& .MuiButton-endIcon': {
                    transform: 'translateX(4px)',
                  },
                },
              }}
            >
              Still Have Questions? Contact Us
            </Button>
          </Box>
        </Container>
      </Box>

      {/* BEHAVIORAL: Emotional Engagement - Understanding user emotions */}
      <Box
        sx={{
          py: { xs: 6, sm: 8 },
          backgroundColor: 'rgba(237, 41, 57, 0.02)',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                mb: 4,
                px: 3,
                py: 1.5,
                borderRadius: '50px',
                background: 'linear-gradient(135deg, rgba(237, 41, 57, 0.1) 0%, rgba(237, 41, 57, 0.05) 100%)',
                border: '1px solid',
                borderColor: 'error.main',
              }}
            >
              <SentimentSatisfiedIcon sx={{ color: 'error.main', fontSize: 20 }} />
              <Chip
                label="Emotional Connection"
                sx={{
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  height: '28px',
                  backgroundColor: 'transparent',
                  color: 'error.main',
                }}
              />
            </Box>
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 3, 
                fontWeight: 800,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                letterSpacing: '-0.02em',
              }}
            >
              How Are You Feeling?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontWeight: 400, lineHeight: 1.8 }}>
              We understand that joining a community is an emotional decision. Let's find the right path for you.
            </Typography>
          </Box>
          <Grid container spacing={{ xs: 3, sm: 4 }}>
            {[
              {
                emotion: 'curious',
                icon: <AutoStoriesIcon />,
                title: 'I\'m Curious',
                description: 'I want to learn more before deciding',
                action: 'Explore our programs',
                color: '#0288d1',
                gradient: 'linear-gradient(135deg, rgba(2, 136, 209, 0.85) 0%, rgba(2, 136, 209, 0.6) 100%)',
                image: '/photos/572890197_1142845724690099_2859850866106109617_n.jpg',
              },
              {
                emotion: 'interested',
                icon: <ThumbUpAltIcon />,
                title: 'I\'m Interested',
                description: 'This sounds like something for me',
                action: 'See how to get started',
                color: '#002395',
                gradient: 'linear-gradient(135deg, rgba(0, 35, 149, 0.85) 0%, rgba(0, 35, 149, 0.6) 100%)',
                image: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
              },
              {
                emotion: 'committed',
                icon: <HandshakeIcon />,
                title: 'I\'m Ready',
                description: 'I want to join and make a difference',
                action: 'Register now',
                color: '#4caf50',
                gradient: 'linear-gradient(135deg, rgba(76, 175, 80, 0.85) 0%, rgba(76, 175, 80, 0.6) 100%)',
                image: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
              },
            ].map((emotionOption) => (
              <Grid size={{ xs: 12, md: 4 }} key={emotionOption.emotion}>
                <Card
                  component={RouterLink}
                  to={
                    emotionOption.emotion === 'curious'
                      ? '/about'
                      : emotionOption.emotion === 'interested'
                        ? '/focus-areas'
                        : '/contact'
                  }
                  onClick={() => {
                    setEmotionalState(emotionOption.emotion as 'curious' | 'interested' | 'committed');
                    setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                  }}
                  sx={{
                    p: 0,
                    textAlign: 'center',
                    height: '100%',
                    cursor: 'pointer',
                    borderRadius: 4,
                    overflow: 'hidden',
                    position: 'relative',
                    background: 'transparent',
                    border: emotionalState === emotionOption.emotion ? `3px solid ${emotionOption.color}` : '2px solid',
                    borderColor: emotionalState === emotionOption.emotion ? emotionOption.color : 'divider',
                    boxShadow: emotionalState === emotionOption.emotion
                      ? `0 0 0 4px ${emotionOption.color}30, 0 12px 32px rgba(0, 0, 0, 0.15)`
                      : '0 4px 12px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    textDecoration: 'none',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 16px 48px ${emotionOption.color}35, 0 8px 24px rgba(0, 0, 0, 0.15)`,
                      borderColor: emotionOption.color,
                      '& .emotion-image': {
                        transform: 'scale(1.1)',
                      },
                      '& .emotion-button': {
                        transform: 'translateY(-2px)',
                        boxShadow: `0 6px 20px ${emotionOption.color}50`,
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      height: 240,
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      component="img"
                      src={emotionOption.image}
                      alt={emotionOption.title}
                      className="emotion-image"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        filter: 'brightness(0.9) saturate(1.1)',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: emotionOption.gradient,
                      }}
                    />
                    {emotionalState === emotionOption.emotion && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          width: 48,
                          height: 48,
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.95)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                          animation: 'checkmark-pop 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                          '@keyframes checkmark-pop': {
                            '0%': { transform: 'scale(0)', opacity: 0 },
                            '50%': { transform: 'scale(1.2)' },
                            '100%': { transform: 'scale(1)', opacity: 1 },
                          },
                        }}
                      >
                        <CheckCircleIcon sx={{ fontSize: 28, color: emotionOption.color }} />
                      </Box>
                    )}
                  </Box>
                  <Box sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '1.35rem', sm: '1.5rem' }, color: 'text.primary' }}>
                      {emotionOption.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, minHeight: '3em', lineHeight: 1.8, color: 'text.secondary' }}>
                      {emotionOption.description}
                    </Typography>
                    <Button
                      variant="contained"
                      className="emotion-button"
                      sx={{
                        py: 1.75,
                        px: 4,
                        fontWeight: 700,
                        fontSize: '1rem',
                        borderRadius: 3,
                        backgroundColor: emotionOption.color,
                        boxShadow: `0 4px 16px ${emotionOption.color}40, 0 0 24px ${emotionOption.color}20`,
                        textTransform: 'none',
                        transition: 'all 0.3s ease',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: emotionOption.color,
                          filter: 'brightness(1.1)',
                        },
                      }}
                    >
                      {emotionOption.action}
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>


      {/* ABILITY: Clear value proposition section - Making it easier */}
      <Box
        sx={{
          backgroundColor: 'rgba(0, 35, 149, 0.03)',
          py: { xs: 6, sm: 8 },
          mt: { xs: 6, sm: 8 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              label="Simple & Accessible"
              color="primary"
              sx={{ mb: 2, fontWeight: 600, fontSize: '0.9rem', py: 2.5 }}
            />
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                fontWeight: 700,
              }}
            >
              Why Choose MITRA FRANCE?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center',
                color: 'text.secondary',
                mb: 1,
                maxWidth: '700px',
                mx: 'auto',
                fontSize: '1.1rem',
              }}
            >
              We make it easy to get involved and create meaningful change in your community
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textAlign: 'center',
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
                fontStyle: 'italic',
              }}
            >
              No complex forms. No long waiting. Just simple steps to start making a difference.
            </Typography>
          </Box>
          
          <Grid container spacing={{ xs: 3, sm: 4, md: 5 }}>
            {[
              {
                icon: <CheckCircleIcon sx={{ fontSize: 80 }} />,
                title: 'Easy to Join',
                description: 'Simple registration process. No complex requirements.',
                detail: '3-step process • 2 minutes',
                color: 'success',
                gradient: 'linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%)',
                imagePlaceholder: '👥',
                screenshot: false,
              },
              {
                icon: <PeopleIcon sx={{ fontSize: 80 }} />,
                title: 'Inclusive Community',
                description: 'Welcome to all - seniors, youth, migrants, everyone belongs.',
                detail: 'Open to everyone • No barriers',
                color: 'primary',
                gradient: 'linear-gradient(135deg, #002395 0%, #1e88e5 100%)',
                imagePlaceholder: '🌍',
                screenshot: false,
                photos: [
                  '/photos/583114332_1157911793183492_7408427246397976881_n.jpg',
                  '/photos/583489432_1157911303183541_1292926580526900497_n.jpg',
                  '/photos/583741041_1157902773184394_5619801435922057517_n.jpg',
                ],
              },
              {
                icon: <PublicIcon sx={{ fontSize: 80 }} />,
                title: 'European Network',
                description: 'Connect with partners across Europe through Erasmus+ projects.',
                detail: '15+ countries • Active network',
                color: 'info',
                gradient: 'linear-gradient(135deg, #0277bd 0%, #29b6f6 100%)',
                imagePlaceholder: '📊',
                screenshot: true,
              },
              {
                icon: <TrendingUpIcon sx={{ fontSize: 80 }} />,
                title: 'Proven Impact',
                description: 'Track record of successful programs and positive outcomes.',
                detail: '1000+ lives changed • 10+ years',
                color: 'warning',
                gradient: 'linear-gradient(135deg, #f57c00 0%, #ffb74d 100%)',
                imagePlaceholder: '📈',
                screenshot: false,
              },
            ].map((benefit) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={benefit.title}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    border: 'none',
                    borderRadius: 4,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'white',
                    '&:hover': {
                      boxShadow: '0 12px 40px rgba(0, 35, 149, 0.2)',
                      transform: 'translateY(-8px)',
                      '& .benefit-icon': {
                        transform: 'scale(1.15) rotate(5deg)',
                      },
                      '& .benefit-image': {
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                >
                  {/* Large Icon with Gradient Background */}
                  <Box
                    className="benefit-icon"
                    sx={{
                      position: 'relative',
                      mb: 3,
                      mt: 3,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 140, sm: 160 },
                        height: { xs: 140, sm: 160 },
                        borderRadius: '50%',
                        background: benefit.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        boxShadow: `0 8px 32px ${benefit.color === 'success' ? 'rgba(46, 125, 50, 0.3)' : benefit.color === 'primary' ? 'rgba(0, 35, 149, 0.3)' : benefit.color === 'info' ? 'rgba(2, 119, 189, 0.3)' : 'rgba(245, 124, 0, 0.3)'}`,
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          inset: -12,
                          borderRadius: '50%',
                          background: `radial-gradient(circle, ${benefit.color === 'success' ? 'rgba(46, 125, 50, 0.15)' : benefit.color === 'primary' ? 'rgba(0, 35, 149, 0.15)' : benefit.color === 'info' ? 'rgba(2, 119, 189, 0.15)' : 'rgba(245, 124, 0, 0.15)'}, transparent)`,
                          zIndex: -1,
                        },
                      }}
                    >
                      {benefit.icon}
                    </Box>
                  </Box>

                  {/* Photo/Image Section - Real People or Screenshot */}
                  <Box
                    className="benefit-image"
                    sx={{
                      mx: 2,
                      mb: 2,
                      borderRadius: 3,
                      overflow: 'hidden',
                      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      height: { xs: 120, sm: 140 },
                      position: 'relative',
                      background: benefit.screenshot 
                        ? 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)'
                        : `linear-gradient(135deg, ${benefit.color === 'success' ? 'rgba(46, 125, 50, 0.1)' : benefit.color === 'primary' ? 'rgba(0, 35, 149, 0.1)' : benefit.color === 'info' ? 'rgba(2, 119, 189, 0.1)' : 'rgba(245, 124, 0, 0.1)'} 0%, transparent 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `2px dashed ${benefit.color === 'success' ? 'rgba(46, 125, 50, 0.3)' : benefit.color === 'primary' ? 'rgba(0, 35, 149, 0.3)' : benefit.color === 'info' ? 'rgba(2, 119, 189, 0.3)' : 'rgba(245, 124, 0, 0.3)'}`,
                    }}
                  >
                    {benefit.screenshot ? (
                      // Screenshot placeholder - можно заменить на реальный скриншот
                      <Box
                        sx={{
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 1,
                          p: 2,
                        }}
                      >
                        <Box
                          sx={{
                            width: '80%',
                            height: 8,
                            borderRadius: 1,
                            background: 'linear-gradient(90deg, #002395 0%, #1e88e5 100%)',
                            mb: 1,
                          }}
                        />
                        <Box
                          sx={{
                            width: '90%',
                            height: 6,
                            borderRadius: 1,
                            background: 'rgba(0, 0, 0, 0.1)',
                            mb: 1,
                          }}
                        />
                        <Box
                          sx={{
                            width: '70%',
                            height: 6,
                            borderRadius: 1,
                            background: 'rgba(0, 0, 0, 0.08)',
                          }}
                        />
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'text.secondary',
                            fontSize: '0.7rem',
                            mt: 1,
                            fontStyle: 'italic',
                          }}
                        >
                          Platform Screenshot
                        </Typography>
                      </Box>
                    ) : benefit.title === 'Inclusive Community' && benefit.photos ? (
                      <AvatarGroup
                        max={3}
                        sx={{
                          '& .MuiAvatar-root': {
                            width: { xs: 40, sm: 48 },
                            height: { xs: 40, sm: 48 },
                            border: `3px solid white`,
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
                          },
                        }}
                      >
                        {benefit.photos.map((photo) => (
                          <Avatar
                            key={photo}
                            src={photo}
                            alt="Community member"
                            sx={{
                              img: { objectFit: 'cover' },
                            }}
                          />
                        ))}
                      </AvatarGroup>
                    ) : (
                      <AvatarGroup
                        max={3}
                        sx={{
                          '& .MuiAvatar-root': {
                            width: { xs: 40, sm: 48 },
                            height: { xs: 40, sm: 48 },
                            border: `3px solid white`,
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                          },
                        }}
                      >
                        <Avatar
                          sx={{
                            background: benefit.gradient,
                            fontSize: { xs: '1.5rem', sm: '2rem' },
                          }}
                        >
                          {benefit.imagePlaceholder}
                        </Avatar>
                        <Avatar
                          sx={{
                            background: `linear-gradient(135deg, ${benefit.color === 'success' ? 'rgba(46, 125, 50, 0.8)' : benefit.color === 'primary' ? 'rgba(0, 35, 149, 0.8)' : benefit.color === 'info' ? 'rgba(2, 119, 189, 0.8)' : 'rgba(245, 124, 0, 0.8)'}, ${benefit.color === 'success' ? 'rgba(102, 187, 106, 0.8)' : benefit.color === 'primary' ? 'rgba(30, 136, 229, 0.8)' : benefit.color === 'info' ? 'rgba(41, 182, 246, 0.8)' : 'rgba(255, 183, 77, 0.8)'})`,
                            fontSize: { xs: '1.2rem', sm: '1.5rem' },
                          }}
                        >
                          👤
                        </Avatar>
                        <Avatar
                          sx={{
                            background: `linear-gradient(135deg, ${benefit.color === 'success' ? 'rgba(46, 125, 50, 0.6)' : benefit.color === 'primary' ? 'rgba(0, 35, 149, 0.6)' : benefit.color === 'info' ? 'rgba(2, 119, 189, 0.6)' : 'rgba(245, 124, 0, 0.6)'}, ${benefit.color === 'success' ? 'rgba(102, 187, 106, 0.6)' : benefit.color === 'primary' ? 'rgba(30, 136, 229, 0.6)' : benefit.color === 'info' ? 'rgba(41, 182, 246, 0.6)' : 'rgba(255, 183, 77, 0.6)'})`,
                            fontSize: { xs: '1rem', sm: '1.2rem' },
                          }}
                        >
                          👥
                        </Avatar>
                      </AvatarGroup>
                    )}
                  </Box>

                  {/* Content */}
                  <Box sx={{ px: 2, pb: 3 }}>
                    <Typography 
                      variant="h6" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 700, 
                        mb: 1.5,
                        fontSize: { xs: '1.1rem', sm: '1.25rem' },
                      }}
                    >
                      {benefit.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ 
                        mb: 2, 
                        minHeight: { xs: 'auto', sm: '3.5em' },
                        lineHeight: 1.7,
                        fontSize: { xs: '0.9rem', sm: '0.95rem' },
                      }}
                    >
                      {benefit.description}
                    </Typography>
                    <Chip
                      icon={<AccessTimeIcon sx={{ fontSize: 16 }} />}
                      label={benefit.detail}
                      size="small"
                      sx={{ 
                        fontSize: '0.8rem', 
                        fontWeight: 600,
                        background: benefit.color === 'success' 
                          ? 'rgba(46, 125, 50, 0.1)' 
                          : benefit.color === 'primary' 
                          ? 'rgba(0, 35, 149, 0.1)' 
                          : benefit.color === 'info' 
                          ? 'rgba(2, 119, 189, 0.1)' 
                          : 'rgba(245, 124, 0, 0.1)',
                        color: `${benefit.color}.main`,
                        border: `1px solid ${benefit.color === 'success' ? 'rgba(46, 125, 50, 0.2)' : benefit.color === 'primary' ? 'rgba(0, 35, 149, 0.2)' : benefit.color === 'info' ? 'rgba(2, 119, 189, 0.2)' : 'rgba(245, 124, 0, 0.2)'}`,
                      }}
                    />
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* NUDGE: Social proof - Enhanced testimonials with recent activity */}
      <Box
        sx={{
          backgroundColor: 'rgba(237, 41, 57, 0.02)',
          py: { xs: 8, sm: 10 },
          borderTop: '1px solid',
          borderBottom: '1px solid',
          borderColor: 'divider',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container>
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 3 }}>
              <Stack direction="row" spacing={0.5}>
                <StarIcon sx={{ color: 'warning.main', fontSize: 32 }} />
                <StarIcon sx={{ color: 'warning.main', fontSize: 32 }} />
                <StarIcon sx={{ color: 'warning.main', fontSize: 32 }} />
                <StarIcon sx={{ color: 'warning.main', fontSize: 32 }} />
                <StarIcon sx={{ color: 'warning.main', fontSize: 32 }} />
              </Stack>
              <Chip
                label="4.9/5 Average Rating"
                size="medium"
                color="warning"
                sx={{ ml: 1, fontWeight: 700, fontSize: '0.95rem', py: 1.5, px: 2 }}
              />
            </Box>
            <Typography 
              variant="h2" 
              gutterBottom 
              sx={{ 
                mb: 3, 
                fontWeight: 800,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                letterSpacing: '-0.02em',
              }}
            >
              Stories That Inspire
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary" 
              sx={{ 
                maxWidth: '700px', 
                mx: 'auto', 
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.8,
                fontWeight: 400,
              }}
            >
              Real stories from our community members who have transformed their lives through our programs
            </Typography>
          </Box>

          {/* Testimonials Grid */}
          <Grid container spacing={4}>
            {[
              {
                name: 'Marie-Claire',
                age: 68,
                role: 'Digital Literacy Participant',
                joined: '3 months ago',
                quote: 'Joining MITRA FRANCE changed my life. I went from feeling isolated to being part of a vibrant community that values diversity and learning. The digital skills program helped me connect with my grandchildren and find new opportunities.',
                photoGradient: 'linear-gradient(135deg, #002395 0%, #1e88e5 100%)',
                backgroundGradient: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(30, 136, 229, 0.05) 100%)',
                initials: 'MC',
                rating: 5,
                photoUrl: 'https://i.pravatar.cc/300?img=68', // Placeholder photo - replace with: /images/testimonials/marie-claire.jpg
              },
              {
                name: 'Ahmed',
                age: 32,
                role: 'Cultural Exchange Participant',
                joined: '6 months ago',
                quote: 'As a newcomer to France, MITRA FRANCE provided me with a welcoming community and practical skills. The intercultural programs helped me understand French culture while sharing my own heritage. I\'ve made lifelong friends here.',
                photoGradient: 'linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%)',
                backgroundGradient: 'linear-gradient(135deg, rgba(46, 125, 50, 0.1) 0%, rgba(102, 187, 106, 0.05) 100%)',
                initials: 'AH',
                rating: 5,
                photoUrl: 'https://i.pravatar.cc/300?img=47', // Placeholder photo - replace with: /images/testimonials/ahmed.jpg
              },
              {
                name: 'Sophie',
                age: 24,
                role: 'Youth Program Coordinator',
                joined: '1 year ago',
                quote: 'Working with MITRA FRANCE has been incredibly rewarding. The Erasmus+ projects opened doors to European opportunities I never imagined. The team\'s dedication to inclusion and education is truly inspiring.',
                photoGradient: 'linear-gradient(135deg, #ED2939 0%, #ff6b6b 100%)',
                backgroundGradient: 'linear-gradient(135deg, rgba(237, 41, 57, 0.1) 0%, rgba(255, 107, 107, 0.05) 100%)',
                initials: 'SO',
                rating: 5,
                photoUrl: 'https://i.pravatar.cc/300?img=12', // Placeholder photo - replace with: /images/testimonials/sophie.jpg
              },
            ].map((testimonial, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    position: 'relative',
                    borderRadius: 4,
                    overflow: 'hidden',
                    border: 'none',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    background: 'white',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                      '& .testimonial-photo': {
                        transform: 'scale(1.05)',
                      },
                    },
                  }}
                >
                  {/* Full-size Portrait Photo */}
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: { xs: 280, sm: 320 },
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      component="img"
                      src={testimonial.photoUrl}
                      alt={`${testimonial.name} photo`}
                      className="testimonial-photo"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        filter: 'brightness(0.95) saturate(1.1)',
                      }}
                    />
                    {/* Gradient Overlay for text readability */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '60%',
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%)',
                      }}
                    />
                    {/* Video Play Button for first testimonial */}
                    {index === 0 && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.95)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translate(-50%, -50%) scale(1.1)',
                            background: 'white',
                            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)',
                          },
                        }}
                      >
                        <PlayArrowIcon sx={{ fontSize: 40, color: 'primary.main', ml: 0.5 }} />
                      </Box>
                    )}
                    {/* User Info Overlay on Photo */}
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
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                        <Avatar
                          sx={{
                            width: 56,
                            height: 56,
                            border: '3px solid white',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                          }}
                          src={testimonial.photoUrl}
                          alt={`${testimonial.name} photo`}
                        >
                          {testimonial.initials}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'white', mb: 0.25 }}>
                            {testimonial.name}, {testimonial.age}
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.8rem' }}>
                            {testimonial.role}
                          </Typography>
                        </Box>
                      </Box>
                      {/* Rating on Photo */}
                      <Stack direction="row" spacing={0.5} sx={{ mb: 1 }}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon key={i} sx={{ color: 'warning.main', fontSize: 16 }} />
                        ))}
                      </Stack>
                    </Box>
                  </Box>

                  {/* Content */}
                  <CardContent
                    sx={{
                      p: { xs: 3, sm: 4 },
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Quote Icon */}
                    <Box
                      sx={{
                        mb: 2,
                        color: 'primary.main',
                        opacity: 0.2,
                      }}
                    >
                      <Typography variant="h2" sx={{ fontSize: '2.5rem', lineHeight: 1 }}>
                        "
                      </Typography>
                    </Box>

                    {/* Quote Text */}
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        lineHeight: 1.8,
                        fontSize: { xs: '0.95rem', sm: '1rem' },
                        fontStyle: 'italic',
                        color: 'text.primary',
                        flexGrow: 1,
                      }}
                    >
                      {testimonial.quote}
                    </Typography>

                    {/* Joined Info */}
                    <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.8rem', mt: 'auto' }}>
                      Joined {testimonial.joined}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Recent Joiners Section */}
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Box
              sx={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 4,
                borderRadius: 4,
                backgroundColor: 'rgba(0, 35, 149, 0.05)',
                border: '1px solid',
                borderColor: 'divider',
                maxWidth: '700px',
                position: 'relative',
              }}
            >
              <Typography variant="subtitle1" color="text.secondary" sx={{ display: 'block', mb: 3, fontWeight: 700, fontSize: '1rem' }}>
                Recently joined our community:
              </Typography>
              <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, flexWrap: 'wrap' }}>
                {[
                  '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
                  '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
                  '/photos/572890197_1142845724690099_2859850866106109617_n.jpg',
                  '/photos/573284472_1142846254690046_5985051112828208939_n.jpg',
                  '/photos/574604314_1146960820945256_3308026953512837589_n.jpg',
                  '/photos/583489432_1157911303183541_1292926580526900497_n.jpg',
                  '/photos/583741041_1157902773184394_5619801435922057517_n.jpg',
                  '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
                ].slice(0, 8).map((photo, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: -4,
                        right: -4,
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        background: '#4caf50',
                        border: '2px solid white',
                        boxShadow: '0 2px 8px rgba(76, 175, 80, 0.4)',
                        animation: 'pulse 2s ease-in-out infinite',
                        '@keyframes pulse': {
                          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
                          '50%': { transform: 'scale(1.2)', opacity: 0.8 },
                        },
                        zIndex: 1,
                      },
                    }}
                  >
                    <Avatar
                      sx={{
                        width: { xs: 48, sm: 56 },
                        height: { xs: 48, sm: 56 },
                        border: '3px solid white',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.1)',
                          zIndex: 2,
                        },
                      }}
                      src={photo}
                      alt={`Recent joiner ${idx + 1}`}
                    />
                  </Box>
                ))}
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 3 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#4caf50',
                    animation: 'pulse-dot 1.5s ease-in-out infinite',
                    '@keyframes pulse-dot': {
                      '0%, 100%': { opacity: 1, transform: 'scale(1)' },
                      '50%': { opacity: 0.5, transform: 'scale(1.3)' },
                    },
                  }}
                />
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, fontSize: '0.95rem' }}>
                  +{liveActivity.recent} more joined in the last hour
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* EVALUATION: Benefits vs Effort comparison */}
      <Container sx={{ py: { xs: 8, sm: 10 } }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip
            icon={<CompareArrowsIcon />}
            label="Value Proposition"
            color="primary"
            sx={{ mb: 2, fontWeight: 600, fontSize: '0.9rem', py: 2.5 }}
          />
          <Typography variant="h2" sx={{ mb: 2 }}>
            Is It Worth Your Time?
          </Typography>
        <Typography
            variant="body1"
          sx={{
            textAlign: 'center',
              color: 'text.secondary',
              mb: 1,
              maxWidth: '700px',
              mx: 'auto',
              fontSize: '1.1rem',
            }}
          >
            Let's compare what you get versus what you invest
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                p: 4,
                height: '100%',
                border: '2px solid',
                borderColor: 'success.main',
                backgroundColor: 'rgba(76, 175, 80, 0.05)',
                position: 'relative',
                overflow: 'visible',
                '&::before': {
                  content: '"What You Get"',
                  position: 'absolute',
                  top: -12,
                  left: 24,
                  backgroundColor: 'success.main',
                  color: 'white',
                  px: 2,
                  py: 0.5,
                  borderRadius: 1,
                  fontSize: '0.75rem',
                  fontWeight: 700,
                },
              }}
            >
              <Stack spacing={2.5}>
                {[
                  'Access to 50+ educational programs',
                  'European network of 15+ partner organizations',
                  'Digital skills training for personal & professional growth',
                  'Cultural activities and community events',
                  'Lifelong learning opportunities',
                  'Support from experienced educators',
                ].map((benefit, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <CheckCircleIcon sx={{ color: 'success.main', mt: 0.5, flexShrink: 0 }} />
                    <Typography variant="body1">{benefit}</Typography>
                  </Box>
                ))}
              </Stack>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                p: 4,
                height: '100%',
                border: '2px solid',
                borderColor: 'primary.main',
                backgroundColor: 'rgba(0, 35, 149, 0.05)',
                position: 'relative',
                overflow: 'visible',
                '&::before': {
                  content: '"What You Invest"',
                  position: 'absolute',
                  top: -12,
                  left: 24,
                  backgroundColor: 'primary.main',
                  color: 'white',
                  px: 2,
                  py: 0.5,
                  borderRadius: 1,
                  fontSize: '0.75rem',
                  fontWeight: 700,
                },
              }}
            >
              <Stack spacing={2.5}>
                {[
                  '2 minutes to register (free)',
                  'No financial commitment required',
                  'Flexible participation - join when you can',
                  'No prerequisites or qualifications needed',
                  'Open to everyone regardless of background',
                  'Support available every step of the way',
                ].map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <AccessTimeIcon sx={{ color: 'primary.main', mt: 0.5, flexShrink: 0 }} />
                    <Typography variant="body1">{item}</Typography>
                  </Box>
                ))}
              </Stack>
              <Box
                sx={{
                  mt: 3,
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: 'rgba(0, 35, 149, 0.1)',
                  textAlign: 'center',
                }}
              >
                <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700 }}>
                  Clear Value: Maximum Benefit, Minimal Effort
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Focus Areas - Enhanced Modern Design */}
      <Box
        sx={{
          py: { xs: 8, sm: 12 },
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 35, 149, 0.02) 50%, rgba(255, 255, 255, 0) 100%)',
          position: 'relative',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                fontWeight: 700,
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #002395 0%, #ED2939 100%)',
                  borderRadius: '2px',
                },
          }}
        >
          Our Focus Areas
        </Typography>
        <Typography
              variant="h6"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
                mb: 4,
                maxWidth: '800px',
            mx: 'auto',
                fontWeight: 400,
                lineHeight: 1.7,
          }}
        >
          Explore how we make a difference across five key areas of community empowerment
        </Typography>
            
            {/* MOTIVATION: Show value and impact with infographics */}
            <Grid container spacing={4} sx={{ mb: 6 }}>
              {/* Statistics Cards with Visualizations */}
              {[
                {
                  value: 5,
                  label: 'Focus Areas',
                  icon: <AccountTreeIcon sx={{ fontSize: 40 }} />,
                  color: 'primary',
                  gradient: 'linear-gradient(135deg, #002395 0%, #1e88e5 100%)',
                  progress: 100,
                  description: 'Key areas of impact',
                  photo: getImagePath('/photos/583741041_1157902773184394_5619801435922057517_n.jpg'),
                  photoType: 'collage',
                },
                {
                  value: 50,
                  label: 'Active Programs',
                  icon: <SchoolIcon sx={{ fontSize: 40 }} />,
                  color: 'success',
                  gradient: 'linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%)',
                  progress: 85,
                  description: 'Ongoing initiatives',
                  photo: getImagePath('/photos/572890197_1142845724690099_2859850866106109617_n.jpg'),
                  photoType: 'single',
                },
                {
                  value: 1000,
                  label: 'Participants',
                  icon: <PeopleIcon sx={{ fontSize: 40 }} />,
                  color: 'error',
                  gradient: 'linear-gradient(135deg, #ED2939 0%, #ff6b6b 100%)',
                  progress: 75,
                  description: 'Lives transformed',
                  photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                  photoType: 'group',
                },
                {
                  value: 15,
                  label: 'Countries',
                  icon: <PublicIcon sx={{ fontSize: 40 }} />,
                  color: 'info',
                  gradient: 'linear-gradient(135deg, #0277bd 0%, #29b6f6 100%)',
                  progress: 60,
                  description: 'European network',
                  photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                  photoType: 'map',
                },
              ].map((stat, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                  <Card
                    sx={{
                      p: 0,
                      height: '100%',
                      textAlign: 'center',
                      borderRadius: 4,
                      border: 'none',
                      background: 'white',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      opacity: 0,
                      animation: 'fadeInUp 0.6s ease forwards',
                      animationDelay: `${index * 0.1}s`,
                      '@keyframes fadeInUp': {
                        '0%': { opacity: 0, transform: 'translateY(20px)' },
                        '100%': { opacity: 1, transform: 'translateY(0)' },
                      },
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                        '& .stat-photo': {
                          transform: 'scale(1.1)',
                        },
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: stat.gradient,
                        zIndex: 1,
                      },
                    }}
                  >
                    {/* Photo Background with Overlay */}
                    <Box
                      sx={{
                        position: 'relative',
                        height: { xs: 180, sm: 200 },
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        component="img"
                        src={stat.photo}
                        alt={stat.label}
                        className="stat-photo"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                          filter: 'brightness(0.85) saturate(1.1)',
                        }}
                      />
                      {/* Gradient Overlay */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `linear-gradient(to bottom, ${stat.color === 'primary' ? 'rgba(0, 35, 149, 0.6)' : stat.color === 'success' ? 'rgba(46, 125, 50, 0.6)' : stat.color === 'error' ? 'rgba(237, 41, 57, 0.6)' : 'rgba(2, 119, 189, 0.6)'} 0%, ${stat.color === 'primary' ? 'rgba(0, 35, 149, 0.3)' : stat.color === 'success' ? 'rgba(46, 125, 50, 0.3)' : stat.color === 'error' ? 'rgba(237, 41, 57, 0.3)' : 'rgba(2, 119, 189, 0.3)'} 100%)`,
                        }}
                      />
                      {/* Icon Overlay on Photo */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.95)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                          zIndex: 2,
                        }}
                      >
                        <Box sx={{ color: `${stat.color}.main` }}>
                          {stat.icon}
                        </Box>
                      </Box>
                    </Box>
                    
                    {/* Content */}
                    <Box sx={{ p: 3 }}>

                    {/* Value */}
                    <Typography
                      variant="h2"
                      sx={{
                        color: `${stat.color}.main`,
                        fontWeight: 800,
                        mb: 0.5,
                        fontSize: { xs: '2rem', sm: '2.5rem' },
                      }}
                    >
                      {stat.value}{stat.value === 50 || stat.value === 1000 ? '+' : ''}
                    </Typography>

                    {/* Label */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        fontSize: { xs: '1rem', sm: '1.1rem' },
                      }}
                    >
                      {stat.label}
                    </Typography>

                    {/* Progress Bar Visualization */}
                    <Box sx={{ mb: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={stat.progress}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: `${stat.color}.lighter`,
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 4,
                            background: stat.gradient,
                          },
                        }}
                      />
                    </Box>

                    {/* Description */}
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ fontSize: '0.8rem', fontStyle: 'italic' }}
                    >
                      {stat.description}
                    </Typography>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Geography Map Section */}
            <Box
              sx={{
                mb: 6,
                p: { xs: 3, sm: 4 },
                borderRadius: 4,
                background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(237, 41, 57, 0.05) 100%)',
                border: '2px solid',
                borderColor: 'divider',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 800, 
                    mb: 2,
                    fontSize: { xs: '1.75rem', sm: '2rem' },
                  }}
                >
                  Our European Presence
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, lineHeight: 1.7 }}>
                  Active partnerships and projects across Europe
                </Typography>
              </Box>

              {/* Erasmus+ Project Photo with Overlay */}
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 300, sm: 400 },
                  borderRadius: 4,
                  overflow: 'hidden',
                  mb: 4,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                  transition: 'transform 0.4s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    '& .europe-photo': {
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                {/* Background Photo - Erasmus+ Project */}
                <Box
                  component="img"
                  src={getImagePath("/photos/584326681_1157904053184266_2071216266526493174_n.jpg")}
                  alt="Erasmus+ European Project"
                  className="europe-photo"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    filter: 'brightness(0.9) saturate(1.1)',
                  }}
                />
                {/* Gradient Overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.7) 0%, rgba(237, 41, 57, 0.5) 100%)',
                  }}
                />
                {/* European Flags Overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    display: 'flex',
                    gap: 1,
                    flexWrap: 'wrap',
                    maxWidth: '200px',
                  }}
                >
                  {['🇫🇷', '🇩🇪', '🇪🇸', '🇮🇹', '🇵🇱', '🇬🇷', '🇵🇹', '🇳🇱'].map((flag, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.95)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                        animation: 'fadeIn 0.5s ease forwards',
                        animationDelay: `${idx * 0.1}s`,
                        opacity: 0,
                        '@keyframes fadeIn': {
                          '0%': { opacity: 0, transform: 'scale(0)' },
                          '100%': { opacity: 1, transform: 'scale(1)' },
                        },
                      }}
                    >
                      {flag}
                    </Box>
                  ))}
                </Box>
                {/* Location Markers on Photo */}
                {[
                  { top: '30%', left: '45%', country: 'FR' },
                  { top: '25%', left: '55%', country: 'DE' },
                  { top: '50%', left: '20%', country: 'PT' },
                  { top: '55%', left: '25%', country: 'ES' },
                  { top: '40%', left: '60%', country: 'PL' },
                  { top: '60%', left: '65%', country: 'GR' },
                  { top: '20%', left: '50%', country: 'NL' },
                  { top: '15%', left: '55%', country: 'DK' },
                ].map((marker, index) => (
                  <Box
                    key={index}
                    sx={{
                      position: 'absolute',
                      top: marker.top,
                      left: marker.left,
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #ED2939 0%, #ff6b6b 100%)',
                      border: '3px solid white',
                      boxShadow: '0 4px 12px rgba(237, 41, 57, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      animation: 'pulse 2s ease-in-out infinite',
                      zIndex: 2,
                      '@keyframes pulse': {
                        '0%, 100%': { transform: 'scale(1)', opacity: 1 },
                        '50%': { transform: 'scale(1.2)', opacity: 0.9 },
                      },
                    }}
                  >
                    <Typography variant="caption" sx={{ color: 'white', fontWeight: 700, fontSize: '0.7rem' }}>
                      {marker.country}
                    </Typography>
                  </Box>
                ))}
                {/* Erasmus+ Badge */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 16,
                    left: 16,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    background: 'rgba(255, 255, 255, 0.95)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <PublicIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                  <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Erasmus+ Projects
                  </Typography>
                </Box>
              </Box>

              {/* Countries List with Flags */}
              <Grid container spacing={2}>
                {[
                  { name: 'France', flag: '🇫🇷', code: 'FR' },
                  { name: 'Germany', flag: '🇩🇪', code: 'DE' },
                  { name: 'Spain', flag: '🇪🇸', code: 'ES' },
                  { name: 'Italy', flag: '🇮🇹', code: 'IT' },
                  { name: 'Poland', flag: '🇵🇱', code: 'PL' },
                  { name: 'Greece', flag: '🇬🇷', code: 'GR' },
                  { name: 'Portugal', flag: '🇵🇹', code: 'PT' },
                  { name: 'Netherlands', flag: '🇳🇱', code: 'NL' },
                  { name: 'Belgium', flag: '🇧🇪', code: 'BE' },
                  { name: 'Sweden', flag: '🇸🇪', code: 'SE' },
                  { name: 'Denmark', flag: '🇩🇰', code: 'DK' },
                  { name: 'Finland', flag: '🇫🇮', code: 'FI' },
                  { name: 'Austria', flag: '🇦🇹', code: 'AT' },
                  { name: 'Czech Republic', flag: '🇨🇿', code: 'CZ' },
                  { name: 'Hungary', flag: '🇭🇺', code: 'HU' },
                ].map((country, index) => (
                  <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index}>
                    <Card
                      sx={{
                        p: 2,
                        borderRadius: 3,
                        backgroundColor: 'white',
                        border: '1px solid',
                        borderColor: 'divider',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                          borderColor: 'primary.main',
                          '& .country-flag': {
                            transform: 'scale(1.2) rotate(5deg)',
                          },
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box
                          className="country-flag"
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(237, 41, 57, 0.1) 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem',
                            transition: 'transform 0.3s ease',
                            flexShrink: 0,
                          }}
                        >
                          {country.flag}
                        </Box>
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                          <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.25 }}>
                            {country.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                            {country.code}
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Partners & Case Studies */}
            <Box
              sx={{
                mb: 6,
                p: { xs: 3, sm: 4 },
                borderRadius: 4,
                background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.04) 0%, rgba(237, 41, 57, 0.04) 100%)',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Chip
                  icon={<HandshakeIcon />}
                  label="Partners & Case Studies"
                  color="primary"
                  sx={{ mb: 2, fontWeight: 600, fontSize: '0.9rem', py: 2 }}
                />
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1.5 }}>
                  Trusted Partnerships in Action
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '720px', mx: 'auto' }}>
                  Real collaborations with visible outcomes: joint projects, events, and programs across Europe.
                </Typography>
              </Box>

              {/* Logos with mini-thumbnails of joint projects */}
              <Grid container spacing={3} sx={{ mb: 4 }}>
                {[
                  {
                    name: 'MATRA France',
                    logo: '/matra-france-logo.png',
                    caption: 'STEM Workshops • Paris',
                  },
                  {
                    name: 'MITRA FR',
                    logo: '/mitra-fr-logo.svg',
                    caption: 'Digital Literacy • Lyon',
                  },
                  {
                    name: 'MITRA Menu',
                    logo: '/mitra-fr-logo-menu-1.svg',
                    caption: 'Youth Media Lab • Marseille',
                  },
                ].map((partner) => (
                  <Grid size={{ xs: 12, sm: 4 }} key={partner.name}>
                    <Card
                      sx={{
                        height: '100%',
                        p: 2.5,
                        textAlign: 'center',
                        borderRadius: 3,
                        border: '1px solid',
                        borderColor: 'divider',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-6px)',
                          boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        sx={{ height: 60, objectFit: 'contain', mx: 'auto', mb: 2 }}
                      />
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                        {partner.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                        Joint project highlight
                      </Typography>
                      <Chip
                        icon={<AutoAwesomeIcon sx={{ fontSize: 18 }} />}
                        label={partner.caption}
                        size="small"
                        color="primary"
                        sx={{ fontWeight: 700 }}
                      />
                    </Card>
                  </Grid>
                ))}
              </Grid>

              {/* Case Study Gallery */}
              <Grid container spacing={3}>
                {[
                  {
                    title: 'Erasmus+ Media Lab',
                    result: '120 youth trained',
                    location: 'Berlin • 2024',
                    img: '/photos/518407574_1080814327559906_7301251356704742628_n.jpg',
                  },
                  {
                    title: 'Intercultural Festival',
                    result: '15 countries represented',
                    location: 'Marseille • 2023',
                    img: '/photos/557776852_1117802063861132_509746235238804573_n.jpg',
                  },
                  {
                    title: 'Digital Inclusion Sprint',
                    result: '300 seniors upskilled',
                    location: 'Paris • 2024',
                    img: '/photos/559033237_1124004446574227_6921470462676666260_n.jpg',
                  },
                ].map((caseItem, index) => (
                  <Grid size={{ xs: 12, md: 4 }} key={index}>
                    <Card
                      sx={{
                        height: '100%',
                        borderRadius: 4,
                        overflow: 'hidden',
                        position: 'relative',
                        boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 16px 40px rgba(0,0,0,0.2)',
                          '& .case-photo': {
                            transform: 'scale(1.08)',
                          },
                          '& .case-overlay': {
                            opacity: 1,
                          },
                        },
                      }}
                    >
                      <Box sx={{ position: 'relative', height: 240, overflow: 'hidden' }}>
                        <CardMedia
                          component="img"
                          image={caseItem.img}
                          alt={caseItem.title}
                          className="case-photo"
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                            filter: 'brightness(0.95) saturate(1.05)',
                          }}
                        />
                        {/* Location badge */}
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 12,
                            left: 12,
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 20,
                            backgroundColor: 'rgba(0, 35, 149, 0.85)',
                            color: 'white',
                            fontWeight: 700,
                            fontSize: '0.8rem',
                            boxShadow: '0 3px 12px rgba(0,0,0,0.3)',
                            zIndex: 2,
                          }}
                        >
                          {caseItem.location}
                        </Box>
                        {/* Hover overlay CTA */}
                        <Box
                          className="case-overlay"
                          sx={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 60%)',
                            opacity: 0,
                            transition: 'opacity 0.4s ease',
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end',
                            p: 2,
                          }}
                        >
                          <Button
                            variant="contained"
                            size="small"
                            sx={{
                              borderRadius: 999,
                              px: 2.5,
                              py: 0.5,
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              backgroundColor: 'rgba(255, 255, 255, 0.9)',
                              color: 'primary.main',
                              textTransform: 'none',
                              boxShadow: '0 3px 10px rgba(0,0,0,0.3)',
                              '&:hover': {
                                backgroundColor: 'white',
                              },
                            }}
                          >
                            View story
                          </Button>
                        </Box>
                      </Box>
                      <CardContent sx={{ p: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                          {caseItem.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, lineHeight: 1.7 }}>
                          Real-world collaboration showcasing tangible outcomes and community impact.
                        </Typography>
                        <Chip
                          icon={<EmojiEventsIcon sx={{ fontSize: 18 }} />}
                          label={caseItem.result}
                          size="small"
                          color="success"
                          sx={{ fontWeight: 700 }}
                        />
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* PROMPT: Enhanced visual cue with motivation */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                px: 3,
                py: 1.5,
                borderRadius: '25px',
                background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(237, 41, 57, 0.1) 100%)',
                border: '2px solid',
                borderColor: 'primary.main',
                boxShadow: '0 4px 12px rgba(0, 35, 149, 0.15)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(0, 35, 149, 0.25)',
                },
              }}
            >
              <FlashOnIcon sx={{ fontSize: 20, color: 'warning.main' }} />
              <ArrowForwardIcon sx={{ fontSize: 18, transform: 'rotate(-90deg)', color: 'primary.main' }} />
              <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                Click any area to learn more
              </Typography>
            </Box>
          </Box>
        <Grid container spacing={4}>
            {focusAreas.map((area, index) => {
              const colors = [
                { primary: '#002395', secondary: 'rgba(0, 35, 149, 0.1)', accent: 'rgba(0, 35, 149, 0.05)' },
                { primary: '#ED2939', secondary: 'rgba(237, 41, 57, 0.1)', accent: 'rgba(237, 41, 57, 0.05)' },
                { primary: '#4CAF50', secondary: 'rgba(76, 175, 80, 0.1)', accent: 'rgba(76, 175, 80, 0.05)' },
                { primary: '#FF9800', secondary: 'rgba(255, 152, 0, 0.1)', accent: 'rgba(255, 152, 0, 0.05)' },
                { primary: '#9C27B0', secondary: 'rgba(156, 39, 176, 0.1)', accent: 'rgba(156, 39, 176, 0.05)' },
              ];
              const colorScheme = colors[index % colors.length];

              const photoMap = [
                // Intercultural Education
                '/photos/557776852_1117802063861132_509746235238804573_n.jpg',
                // Media & Arts
                '/photos/518407574_1080814327559906_7301251356704742628_n.jpg',
                // Digital Literacy
                '/photos/559033237_1124004446574227_6921470462676666260_n.jpg',
                // Volunteering
                '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
                // Adult Education
                '/photos/583741041_1157902773184394_5619801435922057517_n.jpg',
              ];
              const areaPhoto = photoMap[index % photoMap.length];
              
              return (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={area.title}>
              <Card
                component={RouterLink}
                to={area.path}
                sx={{
                  height: '100%',
                  textDecoration: 'none',
                  borderRadius: 4,
                  border: '2px solid',
                  borderColor: 'divider',
                  background: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${colorScheme.primary} 0%, ${colorScheme.primary}80 100%)`,
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.4s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 16px 48px ${colorScheme.primary}25, 0 4px 16px rgba(0, 0, 0, 0.1)`,
                    borderColor: colorScheme.primary,
                    '&::before': {
                      transform: 'scaleX(1)',
                    },
                    '& .focus-photo': {
                      transform: 'scale(1.08)',
                    },
                    '& .focus-icon-wrapper': {
                      transform: 'scale(1.1) rotate(5deg)',
                      background: colorScheme.secondary,
                    },
                    '& .focus-icon': {
                      color: colorScheme.primary,
                      transform: 'scale(1.15)',
                    },
                    '& .focus-title': {
                      color: colorScheme.primary,
                    },
                    '& .focus-link': {
                      opacity: 1,
                      transform: 'translateX(6px)',
                      color: colorScheme.primary,
                    },
                  },
                }}
              >
                    <CardContent sx={{ p: 0, textAlign: 'center', position: 'relative', zIndex: 1 }}>
                      {/* Area photo with tinted overlay */}
                      <Box
                        sx={{
                          width: '100%',
                          height: { xs: 200, sm: 240 },
                          position: 'relative',
                          overflow: 'hidden',
                          borderBottom: '2px solid',
                          borderColor: `${colorScheme.primary}20`,
                        }}
                      >
                        <Box
                          component="img"
                          src={areaPhoto}
                          alt={area.title}
                          className="focus-photo"
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                            filter: 'brightness(0.9) saturate(1.05)',
                          }}
                        />
                        {/* Tinted overlay for readability */}
                        <Box
                          sx={{
                            position: 'absolute',
                            inset: 0,
                            background: `linear-gradient(135deg, ${colorScheme.primary}40 0%, ${colorScheme.accent} 70%)`,
                            mixBlendMode: 'multiply',
                          }}
                        />
                        {/* Stats badge */}
                        {area.stats && (
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 12,
                              left: 12,
                              px: 1.5,
                              py: 0.5,
                              borderRadius: 999,
                              backgroundColor: 'rgba(255, 255, 255, 0.95)',
                              color: colorScheme.primary,
                              fontWeight: 700,
                              fontSize: '0.75rem',
                              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                              zIndex: 2,
                            }}
                          >
                            {area.stats}
                          </Box>
                        )}
                        <Box
                          className="focus-icon-wrapper"
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(255, 255, 255, 0.95)',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            boxShadow: `0 4px 16px ${colorScheme.primary}20`,
                            position: 'absolute',
                            bottom: 16,
                            right: 16,
                            zIndex: 2,
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              inset: -4,
                              borderRadius: '24px',
                              background: `linear-gradient(135deg, ${colorScheme.primary}20, ${colorScheme.primary}05)`,
                              opacity: 0,
                              transition: 'opacity 0.4s ease',
                              zIndex: -1,
                            },
                          }}
                        >
                          <Box
                            className="focus-icon"
                            sx={{
                              color: colorScheme.primary,
                              fontSize: 40,
                              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                          >
                            {area.icon}
                          </Box>
                        </Box>
                      </Box>
                      
                      <Box sx={{ p: 4 }}>
                      
                      {/* MOTIVATION: Title with value */}
                      <Typography
                        className="focus-title"
                        variant="h5"
                        gutterBottom
                        sx={{
                          fontWeight: 700,
                          mb: 1.5,
                          transition: 'color 0.3s ease',
                          fontSize: { xs: '1.35rem', sm: '1.5rem' },
                        }}
                      >
                    {area.title}
                  </Typography>
                      
                      {/* MOTIVATION: Show value and stats */}
                      <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 2, flexWrap: 'wrap' }}>
                        <Chip
                          label={area.stats}
                          size="small"
                          sx={{
                            backgroundColor: `${colorScheme.primary}15`,
                            color: colorScheme.primary,
                            fontWeight: 700,
                            fontSize: '0.75rem',
                            height: '26px',
                          }}
                        />
                        <Chip
                          label="Free Access"
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(76, 175, 80, 0.15)',
                            color: 'success.main',
                            fontWeight: 700,
                            fontSize: '0.75rem',
                            height: '26px',
                          }}
                        />
                      </Stack>
                      
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          mb: 2,
                          lineHeight: 1.7,
                          fontSize: '1rem',
                          minHeight: '4em',
                        }}
                      >
                    {area.description}
                  </Typography>
                      
                      {/* MOTIVATION: Show benefit */}
                  <Box
                    sx={{
                          mb: 2.5,
                          p: 1.5,
                          borderRadius: 2,
                          backgroundColor: `${colorScheme.primary}08`,
                          border: `1px solid ${colorScheme.primary}20`,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 600,
                            color: colorScheme.primary,
                            fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                            gap: 0.5,
                          }}
                        >
                          <StarIcon sx={{ fontSize: 16 }} />
                          {area.benefit}
                        </Typography>
                      </Box>
                      
                      {/* PROMPT: Enhanced, more visible call-to-action */}
                      <Button
                        variant="outlined"
                        className="focus-link"
                        sx={{
                          borderWidth: 2,
                          borderColor: colorScheme.primary,
                          color: colorScheme.primary,
                          px: 3,
                          py: 1.5,
                          fontWeight: 700,
                          fontSize: '0.95rem',
                          borderRadius: '25px',
                          opacity: 0.8,
                      transition: 'all 0.3s ease',
                          '&:hover': {
                            borderWidth: 2,
                            borderColor: colorScheme.primary,
                            backgroundColor: `${colorScheme.primary}10`,
                            opacity: 1,
                            transform: 'translateX(4px)',
                            boxShadow: `0 4px 12px ${colorScheme.primary}25`,
                          },
                        }}
                        endIcon={<ArrowForwardIcon />}
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = area.path;
                        }}
                      >
                      Learn more
                      </Button>
                      
                      {/* ABILITY: Show simplicity indicator */}
                      <Box
                        sx={{
                          mt: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 0.5,
                        }}
                      >
                        <CheckCircleIcon sx={{ fontSize: 14, color: 'success.main' }} />
                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                          No registration required
                    </Typography>
                  </Box>
                      </Box>
                </CardContent>
              </Card>
            </Grid>
              );
            })}
        </Grid>
      </Container>
      </Box>

      {/* MOTIVATION: Enhanced social proof and testimonials section */}
      <Box
        sx={{
          backgroundColor: 'rgba(237, 41, 57, 0.03)',
          py: { xs: 6, sm: 8 },
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
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap' }}>
              <Chip
                icon={<EmojiEventsIcon />}
                label="Trusted Partner"
                color="primary"
                  sx={{ fontWeight: 600 }}
                />
                <Chip
                  label="Since 2015"
                  sx={{
                    fontWeight: 600,
                    backgroundColor: 'rgba(0, 35, 149, 0.1)',
                    color: 'primary.main',
                  }}
                />
              </Stack>
              <Typography variant="h3" gutterBottom sx={{ mb: 2 }}>
                Making Real Impact Across Europe
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.05rem' }}>
                Since 2015, MITRA FRANCE has been at the forefront of promoting intercultural
                understanding and digital inclusion. Our programs have reached thousands of
                participants through successful European partnerships and innovative educational
                initiatives.
              </Typography>
              {/* MOTIVATION: Add emotional connection */}
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: 'rgba(0, 35, 149, 0.05)',
                  borderLeft: '4px solid',
                  borderColor: 'primary.main',
                  mb: 3,
                }}
              >
                <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                  "Every journey starts with a single step. Join us and be part of a community
                  that's transforming lives across Europe."
                </Typography>
              </Box>
              <Stack direction="row" spacing={2} flexWrap="wrap">
                <Chip
                  label="Erasmus+ Certified"
                  sx={{ fontWeight: 600, backgroundColor: '#002395', color: 'white' }}
                />
                <Chip
                  label="Youth4Media Network"
                  sx={{ fontWeight: 600, backgroundColor: '#ED2939', color: 'white' }}
                />
                <Chip
                  label="EU Recognized"
                  sx={{ fontWeight: 600 }}
                />
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Grid container spacing={3}>
                {[
                  {
                    icon: <SchoolIcon />,
                    text: 'Educational Excellence',
                    count: '50+ Programs',
                    photo: getImagePath('/photos/572890197_1142845724690099_2859850866106109617_n.jpg'),
                  },
                  {
                    icon: <PeopleIcon />,
                    text: 'Community Reach',
                    count: '1000+ Participants',
                    photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                  },
                  {
                    icon: <PublicIcon />,
                    text: 'European Network',
                    count: '15+ Countries',
                    photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                  },
                  {
                    icon: <EmojiEventsIcon />,
                    text: 'Awards & Recognition',
                    count: 'Multiple Projects',
                    photo: getImagePath('/photos/583741041_1157902773184394_5619801435922057517_n.jpg'),
                  },
                ].map((item, index) => (
                  <Grid size={{ xs: 6 }} key={index}>
                    <Card
                      sx={{
                        p: 2.5,
                        textAlign: 'center',
                        height: '100%',
                        border: '1px solid',
                        borderColor: 'divider',
                        position: 'relative',
                        overflow: 'hidden',
                        backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.95) 40%, rgba(255,255,255,1) 100%), url(${item.photo})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, transparent 50%)',
                          mixBlendMode: 'multiply',
                          pointerEvents: 'none',
                        },
                        '&:hover': {
                          borderColor: 'primary.main',
                          boxShadow: '0 8px 20px rgba(0, 35, 149, 0.18)',
                          transform: 'translateY(-6px)',
                        },
                      }}
                    >
                      <Box sx={{ position: 'relative', zIndex: 1 }}>
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            backgroundColor: 'rgba(0, 35, 149, 0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 1,
                            color: 'primary.main',
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontSize: '0.85rem', mb: 0.5, lineHeight: 1.6 }}
                        >
                          {item.text}
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 800 }}>
                          {item.count}
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* NUDGE: Timely intervention - Urgency with social proof */}
      <Box
        sx={{
          backgroundColor: 'rgba(237, 41, 57, 0.05)',
          py: { xs: 6, sm: 8 },
          borderTop: '1px solid',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                <Chip
                  icon={<AccessTimeIcon />}
                  label="Limited Time"
                  color="error"
                  sx={{ fontWeight: 600 }}
                />
                <Chip
                  icon={<TrendingUpIcon />}
                  label={`${liveActivity.recent} joined today`}
                  sx={{
                    fontWeight: 600,
                    backgroundColor: 'rgba(237, 41, 57, 0.1)',
                    color: 'error.main',
                  }}
                />
              </Stack>
              <Typography 
                variant="h3" 
                gutterBottom 
                sx={{ 
                  mb: 3, 
                  fontWeight: 800,
                  fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
                  letterSpacing: '-0.02em',
                }}
              >
                Don't Miss Out on Upcoming Opportunities
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ 
                  mb: 4, 
                  lineHeight: 1.9, 
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                }}
              >
                New programs and events are launching regularly. <strong>{liveActivity.recent} people joined today</strong> to be notified about upcoming
                opportunities and secure their spot in our next cohort. Early registration ensures you get
                priority access to limited spaces.
              </Typography>
              <Grid container spacing={2} sx={{ mb: 4 }}>
                {[
                  { 
                    title: 'Next Digital Skills Workshop', 
                    subtitle: 'Starting in 2 weeks',
                    photo: getImagePath('/photos/572890197_1142845724690099_2859850866106109617_n.jpg'),
                    color: '#002395',
                  },
                  { 
                    title: 'Cultural Exchange Event', 
                    subtitle: 'Registration open now',
                    photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                    color: '#ED2939',
                  },
                  { 
                    title: 'Erasmus+ Project', 
                    subtitle: 'Applications closing soon',
                    photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                    color: '#4caf50',
                  },
                ].map((item, index) => (
                  <Grid size={{ xs: 12, sm: 4 }} key={index}>
                    <Card
                      sx={{
                        p: 0,
                        borderRadius: 3,
                        overflow: 'hidden',
                        border: '1px solid',
                        borderColor: 'divider',
                        position: 'relative',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'translateY(-6px)',
                          boxShadow: `0 12px 32px ${item.color}25`,
                          borderColor: item.color,
                          '& .opportunity-photo': {
                            transform: 'scale(1.1)',
                          },
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          height: 120,
                          overflow: 'hidden',
                        }}
                      >
                        <Box
                          component="img"
                          src={item.photo}
                          alt={item.title}
                          className="opportunity-photo"
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                            filter: 'brightness(0.9) saturate(1.1)',
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `linear-gradient(135deg, ${item.color}80 0%, ${item.color}40 100%)`,
                          }}
                        />
                      </Box>
                      <Box sx={{ p: 2.5 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5, fontSize: '0.95rem' }}>
                          {item.title}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                          {item.subtitle}
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              {/* NUDGE: Default option highlighted */}
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: 'rgba(0, 35, 149, 0.05)',
                  border: '1px solid',
                  borderColor: 'primary.main',
                  borderLeft: '4px solid',
                  borderLeftColor: 'primary.main',
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                  💡 Recommended: Join now to get priority access
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Most people choose to register early to secure their spot. It's free and takes 2 minutes.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  p: 0,
                  textAlign: 'center',
                  border: '2px solid',
                  borderColor: 'error.main',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 4,
                  boxShadow: '0 8px 32px rgba(237, 41, 57, 0.2)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  background: 'white',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 48px rgba(237, 41, 57, 0.3)',
                    '& .cta-photo': {
                      transform: 'scale(1.1)',
                    },
                    '& .cta-button': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 24px rgba(237, 41, 57, 0.5)',
                    },
                  },
                  '&::before': {
                    content: '"Most Popular"',
                    position: 'absolute',
                    top: -12,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'error.main',
                    color: 'white',
                    px: 2.5,
                    py: 0.75,
                    borderRadius: 2,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    zIndex: 2,
                    boxShadow: '0 4px 12px rgba(237, 41, 57, 0.3)',
                  },
                }}
              >
                {/* Background Photo */}
                <Box
                  sx={{
                    position: 'relative',
                    height: 180,
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    component="img"
                    src={getImagePath("/photos/571419367_1143811194593552_6930038688628840775_n.jpg")}
                    alt="Join our community"
                    className="cta-photo"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      filter: 'brightness(0.85) saturate(1.1)',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(237, 41, 57, 0.7) 0%, rgba(237, 41, 57, 0.4) 100%)',
                    }}
                  />
                </Box>
                <Box sx={{ p: 3.5, position: 'relative', zIndex: 1 }}>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      color: 'error.main', 
                      fontWeight: 800, 
                      mb: 1.5,
                      fontSize: { xs: '1.5rem', sm: '1.75rem' },
                    }}
                  >
                    Act Now
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary" 
                    sx={{ 
                      mb: 3, 
                      lineHeight: 1.8,
                      fontSize: '0.95rem',
                    }}
                  >
                    Join today to receive priority notifications about upcoming programs and events
                  </Typography>
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="contained"
                    color="error"
                    size="large"
                    fullWidth
                    endIcon={<ArrowForwardIcon sx={{ transition: 'transform 0.3s ease' }} />}
                    className="cta-button"
                    onClick={() => showFeedback('Redirecting to registration...', 'info')}
                    sx={{
                      px: 4,
                      py: 2,
                      fontWeight: 700,
                      fontSize: '1rem',
                      borderRadius: 3,
                      boxShadow: '0 4px 16px rgba(237, 41, 57, 0.4), 0 0 24px rgba(237, 41, 57, 0.2)',
                      textTransform: 'none',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: '#d21e2e',
                        '& .MuiButton-endIcon': {
                          transform: 'translateX(4px)',
                        },
                      },
                    }}
                  >
                    Register Now
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* PERSUASIVE: Commitment and Consistency - Progress tracking */}
      <Box
        sx={{
          py: { xs: 6, sm: 8 },
          background: 'radial-gradient(circle at top, rgba(0, 35, 149, 0.08) 0, transparent 55%)',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Chip
              icon={<CheckCircleIcon />}
              label="Your Journey"
              color="primary"
              sx={{
                mb: 2,
                fontWeight: 700,
                borderRadius: 2,
                px: 1.5,
                fontSize: '0.8rem',
              }}
            />
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                fontWeight: 800,
                fontSize: { xs: '1.9rem', sm: '2.1rem', md: '2.35rem' },
                letterSpacing: '-0.02em',
              }}
            >
              Start Small, Build Big
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: '640px',
                mx: 'auto',
                lineHeight: 1.9,
                fontSize: { xs: '0.98rem', sm: '1.05rem' },
              }}
            >
              Make small commitments that lead to meaningful impact. Track your progress and unlock achievements.
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {[
              {
                step: 1,
                title: 'Register',
                description: 'Take the first step',
                reward: 'Welcome Badge',
                progress: userProgress.step >= 1 ? 100 : 0,
                completed: userProgress.completed.includes(1),
                photo: getImagePath('/photos/572890197_1142845724690099_2859850866106109617_n.jpg'),
              },
              {
                step: 2,
                title: 'Complete Profile',
                description: 'Tell us about yourself',
                reward: 'Profile Badge',
                progress: userProgress.step >= 2 ? 100 : 0,
                completed: userProgress.completed.includes(2),
                photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
              },
              {
                step: 3,
                title: 'Join First Event',
                description: 'Attend a workshop or activity',
                reward: 'Active Member Badge',
                progress: userProgress.step >= 3 ? 100 : 0,
                completed: userProgress.completed.includes(3),
                photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
              },
              {
                step: 4,
                title: 'Complete Program',
                description: 'Finish a full program',
                reward: 'Achievement Badge',
                progress: userProgress.step >= 4 ? 100 : 0,
                completed: userProgress.completed.includes(4),
                photo: getImagePath('/photos/571419367_1143811194593552_6930038688628840775_n.jpg'),
              },
            ].map((milestone) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={milestone.step}>
                <Card
                  sx={{
                    p: 0,
                    height: '100%',
                    border: milestone.completed ? '2px solid' : '1px solid',
                    borderColor: milestone.completed ? 'success.main' : 'divider',
                    backgroundColor: 'white',
                    position: 'relative',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: milestone.completed
                      ? '0 10px 30px rgba(76, 175, 80, 0.18)'
                      : '0 8px 24px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 16px 40px rgba(0, 35, 149, 0.18)',
                      '& .journey-photo': {
                        transform: 'scale(1.08)',
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      height: 90,
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      component="img"
                      src={milestone.photo}
                      alt={milestone.title}
                      className="journey-photo"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        filter: 'brightness(0.9) saturate(1.05)',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(135deg, rgba(0, 35, 149, 0.55) 0%, rgba(0, 35, 149, 0.25) 60%, transparent 100%)',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        px: 1,
                        py: 0.5,
                        borderRadius: 999,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: 28,
                          height: 28,
                          borderRadius: '50%',
                          backgroundColor: milestone.completed ? 'success.main' : 'primary.main',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                        }}
                      >
                        {milestone.completed ? <CheckCircleIcon sx={{ fontSize: 18 }} /> : milestone.step}
                      </Box>
                      <Typography variant="caption" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>
                        Step {milestone.step}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
                        {milestone.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: 'block', lineHeight: 1.7 }}
                      >
                        {milestone.description}
                      </Typography>
                    </Box>
                    <Box sx={{ mb: 2.5 }}>
                      <LinearProgress
                        variant="determinate"
                        value={milestone.progress}
                        sx={{
                          height: 6,
                          borderRadius: 999,
                          backgroundColor: 'rgba(0, 35, 149, 0.06)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 999,
                          },
                        }}
                      />
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ mt: 0.75, display: 'block', fontSize: '0.75rem' }}
                      >
                        {milestone.completed ? 'Completed' : 'In progress'}
                      </Typography>
                    </Box>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Chip
                        size="small"
                        icon={<EmojiEventsIcon fontSize="small" />}
                        label={milestone.reward}
                        sx={{
                          fontWeight: 600,
                          borderRadius: 999,
                          backgroundColor: 'rgba(0, 35, 149, 0.04)',
                        }}
                      />
                    </Stack>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* PERSUASIVE: Scarcity - Limited availability */}
      <Box
        sx={{
          py: { xs: 6, sm: 8 },
          backgroundColor: 'rgba(237, 41, 57, 0.05)',
          borderTop: '2px solid',
          borderBottom: '2px solid',
          borderColor: 'error.main',
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                <Chip
                  icon={<LockIcon />}
                  label="Limited Spots"
                  color="error"
                  sx={{ fontWeight: 600 }}
                />
                <Chip
                  icon={<TimerIcon />}
                  label={`Only ${scarcityData.spotsLeft} spots left`}
                  sx={{
                    fontWeight: 600,
                    backgroundColor: 'rgba(237, 41, 57, 0.1)',
                    color: 'error.main',
                  }}
                />
              </Stack>
              <Typography variant="h4" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
                Don't Miss Your Chance
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.05rem' }}>
                Our next Digital Skills Workshop has <strong>only {scarcityData.spotsLeft} spots remaining</strong>.
                Registration closes in <strong>{scarcityData.timeLeft}</strong>. Join {liveActivity.recent} others who
                registered today to secure your place in this exclusive program.
              </Typography>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: 'rgba(237, 41, 57, 0.1)',
                  border: '1px solid',
                  borderColor: 'error.main',
                  mb: 3,
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
                  <Box>
                    <Typography variant="h6" sx={{ color: 'error.main', fontWeight: 700 }}>
                      {scarcityData.spotsLeft}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Spots remaining
                    </Typography>
                  </Box>
                  <Divider orientation="vertical" flexItem />
                  <Box>
                    <Typography variant="h6" sx={{ color: 'error.main', fontWeight: 700 }}>
                      {scarcityData.timeLeft}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Time left
                    </Typography>
                  </Box>
                  <Divider orientation="vertical" flexItem />
                  <Box>
                    <Typography variant="h6" sx={{ color: 'error.main', fontWeight: 700 }}>
                      {liveActivity.recent}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Registered today
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  p: 3,
                  textAlign: 'center',
                  backgroundColor: 'rgba(237, 41, 57, 0.1)',
                  border: '2px solid',
                  borderColor: 'error.main',
                }}
              >
                <LocalOfferIcon sx={{ fontSize: 48, color: 'error.main', mb: 2 }} />
                <Typography variant="h5" sx={{ color: 'error.main', fontWeight: 700, mb: 1 }}>
                  Limited Time Offer
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Register now to secure your spot before it's too late
                </Typography>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="contained"
                  color="error"
                  size="large"
                  fullWidth
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => showFeedback('Securing your spot...', 'info')}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 700,
                    boxShadow: '0 4px 14px rgba(237, 41, 57, 0.4)',
                  }}
                >
                  Claim Your Spot
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* PERSUASIVE: Social Influence - Enhanced connections */}
      <Box
        sx={{
          py: { xs: 6, sm: 8 },
          backgroundColor: 'rgba(0, 35, 149, 0.02)',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Chip
              icon={<PeopleIcon />}
              label="Join the Community"
              color="primary"
              sx={{ 
                mb: 2.5, 
                fontWeight: 700,
                fontSize: '0.9rem',
                px: 1.5,
                py: 0.5,
                height: 'auto',
              }}
            />
            <Typography 
              variant="h3" 
              sx={{ 
                mb: 2.5, 
                fontWeight: 800,
                fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' },
                letterSpacing: '-0.02em',
              }}
            >
              People Like You Are Already Here
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ 
                maxWidth: '600px', 
                mx: 'auto',
                lineHeight: 1.8,
                fontSize: { xs: '1rem', sm: '1.1rem' },
              }}
            >
              Connect with others who share your interests and goals
            </Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card 
                sx={{ 
                  p: 3.5, 
                  textAlign: 'center', 
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 32px rgba(0, 35, 149, 0.15)',
                    borderColor: 'primary.main',
                    '& .community-avatar': {
                      transform: 'scale(1.1)',
                      boxShadow: '0 4px 12px rgba(0, 35, 149, 0.3)',
                    },
                  },
                }}
              >
                <AvatarGroup 
                  max={6} 
                  sx={{ 
                    justifyContent: 'center', 
                    mb: 3,
                    '& .MuiAvatar-root': {
                      border: '3px solid white',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <Avatar 
                    className="community-avatar"
                    src={getImagePath("/photos/571419367_1143811194593552_6930038688628840775_n.jpg")}
                    sx={{ 
                      transition: 'all 0.3s ease',
                      width: 56,
                      height: 56,
                    }}
                  />
                  <Avatar 
                    className="community-avatar"
                    src={getImagePath("/photos/572890197_1142845724690099_2859850866106109617_n.jpg")}
                    sx={{ 
                      transition: 'all 0.3s ease',
                      width: 56,
                      height: 56,
                    }}
                  />
                  <Avatar 
                    className="community-avatar"
                    src={getImagePath("/photos/583924019_1157903166517688_8756873269993443102_n.jpg")}
                    sx={{ 
                      transition: 'all 0.3s ease',
                      width: 56,
                      height: 56,
                    }}
                  />
                  <Avatar 
                    className="community-avatar"
                    src={getImagePath("/photos/584326681_1157904053184266_2071216266526493174_n.jpg")}
                    sx={{ 
                      transition: 'all 0.3s ease',
                      width: 56,
                      height: 56,
                    }}
                  />
                  <Avatar 
                    className="community-avatar"
                    src={getImagePath("/photos/571419367_1143811194593552_6930038688628840775_n.jpg")}
                    sx={{ 
                      transition: 'all 0.3s ease',
                      width: 56,
                      height: 56,
                    }}
                  />
                  <Avatar 
                    sx={{ 
                      bgcolor: 'primary.main',
                      color: 'white',
                      fontWeight: 700,
                      width: 56,
                      height: 56,
                      fontSize: '0.9rem',
                    }}
                  >
                    +{liveActivity.recent}
                  </Avatar>
                </AvatarGroup>
                <Typography 
                  variant="h5" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 700,
                    mb: 1.5,
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                  }}
                >
                  {liveActivity.count.toLocaleString()} Active Members
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                    fontSize: '0.95rem',
                  }}
                >
                  Join a vibrant community of learners and changemakers
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card 
                sx={{ 
                  p: 3.5, 
                  textAlign: 'center', 
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 32px rgba(237, 41, 57, 0.15)',
                    borderColor: 'error.main',
                    '& .satisfaction-heart': {
                      transform: 'scale(1.15) rotate(5deg)',
                      animation: 'pulse 1s ease-in-out infinite',
                    },
                  },
                  '@keyframes pulse': {
                    '0%, 100%': {
                      transform: 'scale(1.15) rotate(5deg)',
                    },
                    '50%': {
                      transform: 'scale(1.25) rotate(5deg)',
                    },
                  },
                }}
              >
                <Stack 
                  direction="row" 
                  spacing={1.5} 
                  justifyContent="center" 
                  alignItems="center"
                  sx={{ mb: 3 }}
                >
                  <FavoriteIcon 
                    className="satisfaction-heart"
                    sx={{ 
                      color: 'error.main', 
                      fontSize: 40,
                      transition: 'all 0.3s ease',
                    }} 
                  />
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontWeight: 800, 
                      color: 'error.main',
                      fontSize: { xs: '2rem', sm: '2.5rem' },
                    }}
                  >
                    98%
                  </Typography>
                </Stack>
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 700,
                    mb: 1.5,
                    fontSize: { xs: '1.1rem', sm: '1.25rem' },
                  }}
                >
                  Satisfaction Rate
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                    fontSize: '0.95rem',
                  }}
                >
                  Members love our programs and community
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card 
                sx={{ 
                  p: 3.5, 
                  textAlign: 'center', 
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 32px rgba(0, 35, 149, 0.15)',
                    borderColor: 'primary.main',
                    '& .share-icon': {
                      transform: 'scale(1.15) rotate(15deg)',
                    },
                    '& .share-button': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(0, 35, 149, 0.3)',
                    },
                  },
                }}
              >
                <ShareIcon 
                  className="share-icon"
                  sx={{ 
                    fontSize: 52, 
                    color: 'primary.main', 
                    mb: 2.5,
                    transition: 'all 0.3s ease',
                  }} 
                />
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 700,
                    mb: 1.5,
                    fontSize: { xs: '1.1rem', sm: '1.25rem' },
                  }}
                >
                  Share with Friends
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary" 
                  sx={{ 
                    mb: 3,
                    lineHeight: 1.8,
                    fontSize: '0.95rem',
                  }}
                >
                  {liveActivity.recent} people shared this with their network today
                </Typography>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  startIcon={<ShareIcon />}
                  className="share-button"
                  onClick={() => showFeedback('Sharing options coming soon!', 'info')}
                  sx={{
                    px: 3,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 2,
                    borderWidth: 2,
                    textTransform: 'none',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderWidth: 2,
                      backgroundColor: 'primary.main',
                      color: 'white',
                    },
                  }}
                >
                  Share Now
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* EXECUTION: Simple step-by-step process */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.02) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(0, 35, 149, 0.02) 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 50%, rgba(0, 35, 149, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(25, 118, 210, 0.05) 0%, transparent 50%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip
              icon={<PlayArrowIcon />}
              label="How It Works"
              color="primary"
              sx={{
                mb: 2.5,
                fontWeight: 700,
                fontSize: '0.9rem',
                px: 1.5,
                py: 0.75,
                height: 'auto',
                borderRadius: 999,
                background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.12) 0%, rgba(25, 118, 210, 0.10) 100%)',
                border: '1px solid',
                borderColor: 'rgba(0, 35, 149, 0.25)',
              }}
            />
            <Typography
              variant="h2"
              sx={{
                mb: 2.5,
                fontWeight: 800,
                letterSpacing: '-0.02em',
                fontSize: { xs: '2.0rem', sm: '2.4rem', md: '2.75rem' },
              }}
            >
              Getting Started is Simple
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center',
                color: 'text.secondary',
                maxWidth: '700px',
                mx: 'auto',
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.9,
              }}
            >
              Follow these three easy steps to join our community and start your journey
            </Typography>
          </Box>
          
          <Box sx={{ position: 'relative' }}>
            <Grid container spacing={{ xs: 4, md: 2 }} sx={{ alignItems: 'center' }}>
              {[
                {
                  step: 1,
                  icon: <HowToRegIcon sx={{ fontSize: 64 }} />,
                  title: 'Register',
                  description: 'Fill out a simple form with your basic information. No documents required.',
                  time: '2 minutes',
                  color: 'primary',
                  gradient: 'linear-gradient(135deg, #002395 0%, #1e88e5 100%)',
                  photo: getImagePath('/photos/572890197_1142845724690099_2859850866106109617_n.jpg'),
                },
                {
                  step: 2,
                  icon: <EmailIcon sx={{ fontSize: 64 }} />,
                  title: 'Get Confirmed',
                  description: 'Receive instant confirmation and welcome materials via email.',
                  time: 'Immediate',
                  color: 'success',
                  gradient: 'linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%)',
                  photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                },
                {
                  step: 3,
                  icon: <RocketLaunchIcon sx={{ fontSize: 64 }} />,
                  title: 'Start Participating',
                  description: 'Access programs, join events, and connect with the community right away.',
                  time: 'Same day',
                  color: 'info',
                  gradient: 'linear-gradient(135deg, #0277bd 0%, #29b6f6 100%)',
                  photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                },
              ].map((stepItem, index) => (
                <Fragment key={stepItem.step}>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Card
                      sx={{
                        p: { xs: 3, sm: 4 },
                        height: '100%',
                        textAlign: 'center',
                        position: 'relative',
                        background: 'white',
                        borderRadius: 4,
                        border: 'none',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        overflow: 'hidden',
                        '&:hover': {
                          transform: 'translateY(-12px) scale(1.02)',
                          boxShadow: `0 16px 48px rgba(0, 0, 0, 0.15)`,
                          '& .howitworks-photo': {
                            transform: 'scale(1.08)',
                            opacity: 0.22,
                          },
                          '& .howitworks-iconBubble': {
                            transform: 'scale(1.04)',
                          },
                        },
                      }}
                    >
                      {/* subtle background photo (kept behind content for depth) */}
                      <Box
                        className="howitworks-photo"
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          backgroundImage: `url(${stepItem.photo})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          opacity: 0.14,
                          filter: 'saturate(1.05) brightness(1.05)',
                          transform: 'scale(1.02)',
                          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                          pointerEvents: 'none',
                          zIndex: 0,
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          // contrast overlay for readability (WCAG-friendly): dark at top, clean white for text area
                          background:
                            stepItem.color === 'primary'
                              ? 'linear-gradient(180deg, rgba(0, 35, 149, 0.58) 0%, rgba(0, 35, 149, 0.32) 38%, rgba(255,255,255,0.98) 66%, rgba(255,255,255,1) 100%)'
                              : stepItem.color === 'success'
                                ? 'linear-gradient(180deg, rgba(20, 83, 45, 0.55) 0%, rgba(20, 83, 45, 0.28) 38%, rgba(255,255,255,0.98) 66%, rgba(255,255,255,1) 100%)'
                                : 'linear-gradient(180deg, rgba(1, 57, 93, 0.55) 0%, rgba(1, 57, 93, 0.28) 38%, rgba(255,255,255,0.98) 66%, rgba(255,255,255,1) 100%)',
                          pointerEvents: 'none',
                          zIndex: 0,
                        }}
                      />
                      {/* Step Number Badge */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: -24,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 56,
                          height: 56,
                          borderRadius: '50%',
                          background: stepItem.gradient,
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 800,
                          fontSize: '1.5rem',
                          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
                          zIndex: 2,
                        }}
                      >
                        {stepItem.step}
                      </Box>

                      <Box sx={{ position: 'relative', zIndex: 1 }}>
                      {/* Icon Container with Gradient Background */}
                      <Box
                        sx={{
                          mt: 4,
                          mb: 3,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Box
                          className="howitworks-iconBubble"
                          sx={{
                            width: { xs: 120, sm: 140 },
                            height: { xs: 120, sm: 140 },
                            borderRadius: '50%',
                            background: stepItem.gradient,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            boxShadow: `0 8px 32px ${stepItem.color === 'primary' ? 'rgba(0, 35, 149, 0.3)' : stepItem.color === 'success' ? 'rgba(46, 125, 50, 0.3)' : 'rgba(2, 119, 189, 0.3)'}`,
                            position: 'relative',
                            transition: 'transform 0.35s ease',
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              inset: -8,
                              borderRadius: '50%',
                              background: `linear-gradient(135deg, ${stepItem.color === 'primary' ? 'rgba(0, 35, 149, 0.1)' : stepItem.color === 'success' ? 'rgba(46, 125, 50, 0.1)' : 'rgba(2, 119, 189, 0.1)'}, transparent)`,
                              zIndex: -1,
                            },
                          }}
                        >
                          {stepItem.icon}
                        </Box>
                      </Box>

                      {/* Title */}
                      <Typography 
                        variant="h5" 
                        gutterBottom 
                        sx={{ 
                          fontWeight: 800, 
                          mb: 2,
                          fontSize: { xs: '1.35rem', sm: '1.6rem' },
                          color: '#0b1b3a',
                        }}
                      >
                        {stepItem.title}
                      </Typography>

                      {/* Description */}
                      <Typography 
                        variant="body1" 
                        color="text.secondary" 
                        sx={{ 
                          mb: 3, 
                          minHeight: { xs: 'auto', sm: '4em' },
                          fontSize: { xs: '0.95rem', sm: '1rem' },
                          lineHeight: 1.85,
                        }}
                      >
                        {stepItem.description}
                      </Typography>

                      {/* Time Chip */}
                      <Box
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 1,
                          px: 2.5,
                          py: 1,
                          borderRadius: 3,
                          background: stepItem.gradient,
                          color: 'white',
                          boxShadow:
                            stepItem.color === 'primary'
                              ? '0 10px 26px rgba(0, 35, 149, 0.22)'
                              : stepItem.color === 'success'
                                ? '0 10px 26px rgba(46, 125, 50, 0.22)'
                                : '0 10px 26px rgba(2, 119, 189, 0.22)',
                        }}
                      >
                        <AccessTimeIcon sx={{ fontSize: 18, color: 'white', opacity: 0.95 }} />
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            fontWeight: 800,
                            fontSize: '0.9rem',
                            letterSpacing: '0.01em',
                          }}
                        >
                          {stepItem.time}
                        </Typography>
                      </Box>
                      </Box>
                    </Card>
                  </Grid>

                  {/* Connecting Arrow (only on desktop, between steps) */}
                  {index < 2 && (
                    <Grid 
                      size={{ xs: 0, md: 'auto' }}
                      sx={{
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        px: 1,
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: 1,
                        }}
                      >
                        <Box
                          sx={{
                            position: 'relative',
                            width: 72,
                            height: 3,
                            background:
                              'linear-gradient(90deg, rgba(0, 35, 149, 0.18) 0%, rgba(25, 118, 210, 0.18) 45%, rgba(46, 125, 50, 0.18) 100%)',
                            borderRadius: 999,
                            overflow: 'hidden',
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              inset: 0,
                              background:
                                'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.65) 40%, transparent 80%)',
                              transform: 'translateX(-45%)',
                              animation: 'howitworksLine 2.2s ease-in-out infinite',
                            },
                            '@keyframes howitworksLine': {
                              '0%': { transform: 'translateX(-55%)' },
                              '100%': { transform: 'translateX(55%)' },
                            },
                          }}
                        />
                        <ArrowRightAltIcon 
                          sx={{ 
                            fontSize: 32, 
                            color: 'primary.main',
                            animation: 'pulse 2s ease-in-out infinite',
                            '@keyframes pulse': {
                              '0%, 100%': { opacity: 0.6, transform: 'translateX(0)' },
                              '50%': { opacity: 1, transform: 'translateX(4px)' },
                            },
                          }} 
                        />
                        <Box
                          sx={{
                            position: 'relative',
                            width: 72,
                            height: 3,
                            background:
                              'linear-gradient(90deg, rgba(46, 125, 50, 0.18) 0%, rgba(25, 118, 210, 0.18) 55%, rgba(0, 35, 149, 0.18) 100%)',
                            borderRadius: 999,
                            overflow: 'hidden',
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              inset: 0,
                              background:
                                'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.65) 40%, transparent 80%)',
                              transform: 'translateX(-55%)',
                              animation: 'howitworksLine2 2.2s ease-in-out infinite',
                            },
                            '@keyframes howitworksLine2': {
                              '0%': { transform: 'translateX(-60%)' },
                              '100%': { transform: 'translateX(60%)' },
                            },
                          }}
                        />
                      </Box>
                    </Grid>
                  )}
                </Fragment>
              ))}
            </Grid>
          </Box>

          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 6,
                py: 2.5,
                fontSize: '1.2rem',
                fontWeight: 700,
                borderRadius: 3,
                background: 'linear-gradient(135deg, #002395 0%, #1e88e5 100%)',
                boxShadow: '0 8px 24px rgba(0, 35, 149, 0.35)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                textTransform: 'none',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.35) 45%, transparent 70%)',
                  transform: 'translateX(-120%)',
                  transition: 'transform 0.8s ease',
                },
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 32px rgba(0, 35, 149, 0.45)',
                  background: 'linear-gradient(135deg, #001f7a 0%, #1565c0 100%)',
                  '&::after': {
                    transform: 'translateX(120%)',
                  },
                  '& .MuiButton-endIcon': {
                    transform: 'translateX(4px)',
                  },
                },
                '& .MuiButton-endIcon': {
                  transition: 'transform 0.25s ease',
                },
              }}
            >
              Start Step 1 Now
            </Button>
          </Box>
        </Container>
      </Box>

      {/* SYSTEM 2: Detailed information for deliberate decision-making */}
      {prefersDetailedView && (
        <Box
          sx={{
            py: { xs: 6, sm: 8 },
            backgroundColor: 'rgba(0, 35, 149, 0.02)',
            borderTop: '2px solid',
            borderBottom: '2px solid',
            borderColor: 'primary.main',
          }}
        >
          <Container>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
              <LightbulbIcon sx={{ color: 'primary.main', fontSize: 32 }} />
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 0.5 }}>
                  System 2: Detailed Analysis Mode
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Take your time to make an informed decision with comprehensive information
                </Typography>
              </Box>
            </Box>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ p: 3, height: '100%', border: '2px solid', borderColor: 'primary.main' }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                    <CalculateIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    Decision Framework
                  </Typography>
                  <Stack spacing={2}>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                        1. Define Your Goals
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        What do you want to achieve? Personal growth, community connection, or professional development?
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                        2. Assess Your Resources
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Consider your available time, interests, and what you can contribute to the community.
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                        3. Evaluate Options
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Compare different programs and activities to find the best fit for your needs.
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                        4. Make Informed Choice
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Take your time. There's no rush. We're here to help you make the right decision.
                      </Typography>
                    </Box>
                  </Stack>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ p: 3, height: '100%', border: '2px solid', borderColor: 'info.main' }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2, color: 'info.main' }}>
                    <InfoIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    Key Considerations
                  </Typography>
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <CheckCircleOutlineIcon sx={{ color: 'success.main', flexShrink: 0, mt: 0.5 }} />
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          No Financial Risk
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Free to join. No hidden costs. Cancel anytime.
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <CheckCircleOutlineIcon sx={{ color: 'success.main', flexShrink: 0, mt: 0.5 }} />
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          Flexible Commitment
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Participate as much or as little as you want. No pressure.
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <CheckCircleOutlineIcon sx={{ color: 'success.main', flexShrink: 0, mt: 0.5 }} />
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          Support Available
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Our team is here to answer questions and provide guidance.
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <WarningIcon sx={{ color: 'warning.main', flexShrink: 0, mt: 0.5 }} />
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          Can Change Your Mind
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          You can always adjust your participation or try different programs.
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Card>
              </Grid>
            </Grid>
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button
                variant="outlined"
                startIcon={<UndoIcon />}
                onClick={() => setPrefersDetailedView(false)}
                sx={{ mr: 2 }}
              >
                Switch to Quick View
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                color="primary"
                endIcon={<ArrowForwardIcon />}
                onClick={() => showFeedback('Opening contact form for detailed inquiry...', 'info')}
              >
                Contact for More Info
              </Button>
            </Box>
          </Container>
        </Box>
      )}

      {/* ERROR PREVENTION: Visual cues and constraints */}
      <Box
        sx={{
          py: { xs: 4, sm: 6 },
          backgroundColor: 'rgba(0, 0, 0, 0.01)',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Chip
              icon={<ErrorOutlineIcon />}
              label="Error Prevention"
              color="warning"
              sx={{ 
                mb: 2.5, 
                fontWeight: 700,
                fontSize: '0.9rem',
                px: 1.5,
                py: 0.5,
                height: 'auto',
                border: '1px solid',
                borderColor: 'warning.main',
              }}
            />
            <Typography 
              variant="h4" 
              sx={{ 
                mb: 2.5, 
                fontWeight: 800,
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
                letterSpacing: '-0.02em',
              }}
            >
              We Help You Avoid Mistakes
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ 
                maxWidth: '600px', 
                mx: 'auto',
                lineHeight: 1.9,
                fontSize: { xs: '1rem', sm: '1.1rem' },
              }}
            >
              Our design prevents common errors and provides clear feedback
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {[
              {
                icon: <CheckCircleIcon sx={{ fontSize: 32 }} />,
                title: 'Clear Instructions',
                description: 'Every action has clear, simple instructions to prevent confusion',
                color: 'success',
              },
              {
                icon: <WarningIcon sx={{ fontSize: 32 }} />,
                title: 'Immediate Feedback',
                description: 'You get instant feedback on every action you take',
                color: 'warning',
              },
              {
                icon: <UndoIcon sx={{ fontSize: 32 }} />,
                title: 'Easy to Undo',
                description: 'Made a mistake? You can easily go back or change your mind',
                color: 'info',
              },
              {
                icon: <InfoIcon sx={{ fontSize: 32 }} />,
                title: 'Help Available',
                description: 'Tooltips and help text guide you through every step',
                color: 'primary',
              },
            ].map((item, index) => {
              const photos = [
                '/photos/572890197_1142845724690099_2859850866106109617_n.jpg',
                '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
                '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
                '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
              ];
              const gradients = {
                success: 'linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%)',
                warning: 'linear-gradient(135deg, #f57c00 0%, #ffb74d 100%)',
                info: 'linear-gradient(135deg, #0277bd 0%, #29b6f6 100%)',
                primary: 'linear-gradient(135deg, #002395 0%, #1e88e5 100%)',
              };
              return (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.title}>
                  <Card
                    sx={{
                      p: 3.5,
                      textAlign: 'center',
                      height: '100%',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 3,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      background: 'white',
                      '&:hover': {
                        borderColor: `${item.color}.main`,
                        transform: 'translateY(-8px)',
                        boxShadow: `0 12px 32px ${item.color === 'success' ? 'rgba(46, 125, 50, 0.2)' : item.color === 'warning' ? 'rgba(245, 124, 0, 0.2)' : item.color === 'info' ? 'rgba(2, 119, 189, 0.2)' : 'rgba(0, 35, 149, 0.2)'}`,
                        '& .errorprevention-photo': {
                          transform: 'scale(1.1)',
                          opacity: 0.2,
                        },
                        '& .errorprevention-icon': {
                          transform: 'scale(1.1) rotate(5deg)',
                        },
                      },
                    }}
                  >
                    {/* Subtle background photo */}
                    <Box
                      className="errorprevention-photo"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url(${photos[index]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.12,
                        filter: 'saturate(1.1) brightness(1.05)',
                        transform: 'scale(1.02)',
                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        pointerEvents: 'none',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: item.color === 'success'
                          ? 'linear-gradient(180deg, rgba(46, 125, 50, 0.05) 0%, rgba(255,255,255,0.98) 60%, rgba(255,255,255,1) 100%)'
                          : item.color === 'warning'
                            ? 'linear-gradient(180deg, rgba(245, 124, 0, 0.05) 0%, rgba(255,255,255,0.98) 60%, rgba(255,255,255,1) 100%)'
                            : item.color === 'info'
                              ? 'linear-gradient(180deg, rgba(2, 119, 189, 0.05) 0%, rgba(255,255,255,0.98) 60%, rgba(255,255,255,1) 100%)'
                              : 'linear-gradient(180deg, rgba(0, 35, 149, 0.05) 0%, rgba(255,255,255,0.98) 60%, rgba(255,255,255,1) 100%)',
                        pointerEvents: 'none',
                      }}
                    />
                    
                    {/* Icon in gradient circle */}
                    <Box sx={{ position: 'relative', zIndex: 1, mb: 3 }}>
                      <Box
                        className="errorprevention-icon"
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: { xs: 80, sm: 96 },
                          height: { xs: 80, sm: 96 },
                          borderRadius: '50%',
                          background: gradients[item.color as keyof typeof gradients],
                          color: 'white',
                          mb: 2,
                          boxShadow: `0 8px 24px ${item.color === 'success' ? 'rgba(46, 125, 50, 0.3)' : item.color === 'warning' ? 'rgba(245, 124, 0, 0.3)' : item.color === 'info' ? 'rgba(2, 119, 189, 0.3)' : 'rgba(0, 35, 149, 0.3)'}`,
                          transition: 'all 0.35s ease',
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            inset: -8,
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${item.color === 'success' ? 'rgba(46, 125, 50, 0.1)' : item.color === 'warning' ? 'rgba(245, 124, 0, 0.1)' : item.color === 'info' ? 'rgba(2, 119, 189, 0.1)' : 'rgba(0, 35, 149, 0.1)'}, transparent)`,
                            zIndex: -1,
                          },
                        }}
                      >
                        {cloneElement(item.icon, { sx: { fontSize: { xs: 40, sm: 48 } } })}
                      </Box>
                    </Box>
                    
                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                      <Typography 
                        variant="h6" 
                        gutterBottom 
                        sx={{ 
                          fontWeight: 700,
                          mb: 1.5,
                          fontSize: { xs: '1.1rem', sm: '1.25rem' },
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        color="text.secondary"
                        sx={{
                          lineHeight: 1.8,
                          fontSize: '0.95rem',
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* PROMPT: Enhanced final call-to-action with urgency and clarity */}
      <Box
        sx={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.95) 40%, rgba(250, 248, 255, 0.9) 100%)',
          py: { xs: 8, sm: 10 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/photos/571419367_1143811194593552_6930038688628840775_n.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.08,
            filter: 'saturate(1.1) brightness(1.1)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Chip
            label="Start Your Journey"
            color="primary"
            sx={{ 
              mb: 3.5, 
              fontWeight: 700, 
              fontSize: '0.95rem', 
              py: 2,
              px: 2,
              height: 'auto',
              border: '1px solid',
              borderColor: 'primary.main',
              boxShadow: '0 4px 12px rgba(0, 35, 149, 0.15)',
            }}
          />
          <Typography 
            variant="h2" 
            gutterBottom 
            sx={{ 
              mb: 3,
              fontWeight: 800,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              letterSpacing: '-0.02em',
            }}
          >
            Ready to Make a Difference?
          </Typography>
          
          {/* Red divider line */}
          <Box
            sx={{
              width: { xs: '80%', sm: '60%', md: '40%' },
              height: 2,
              background: 'linear-gradient(90deg, transparent 0%, #ED2939 50%, transparent 100%)',
              mx: 'auto',
              mb: 3.5,
            }}
          />
          
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ 
              mb: 2, 
              maxWidth: '600px', 
              mx: 'auto', 
              fontSize: { xs: '1rem', sm: '1.15rem' }, 
              fontWeight: 500,
              lineHeight: 1.9,
            }}
          >
            Join our community today and be part of positive change.
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ 
              mb: 5, 
              maxWidth: '500px', 
              mx: 'auto',
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.8,
            }}
          >
            It only takes a moment to get started. No commitment required.
          </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          sx={{ justifyContent: 'center', alignItems: 'center', mb: 5 }}
        >
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon sx={{ transition: 'transform 0.3s ease' }} />}
            onClick={() => showFeedback('Redirecting to registration...', 'info')}
            sx={{
              px: 6,
              py: 2.5,
              fontSize: { xs: '1.1rem', sm: '1.2rem' },
              fontWeight: 700,
              borderRadius: 3,
              background: 'linear-gradient(135deg, #002395 0%, #1e88e5 100%)',
              boxShadow: '0 8px 24px rgba(0, 35, 149, 0.4), 0 0 32px rgba(0, 35, 149, 0.15)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden',
              textTransform: 'none',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                transition: 'left 0.5s ease',
              },
              '&:hover': {
                transform: 'translateY(-4px) scale(1.02)',
                boxShadow: '0 12px 32px rgba(0, 35, 149, 0.5), 0 0 48px rgba(0, 35, 149, 0.2)',
                background: 'linear-gradient(135deg, #001f7a 0%, #1565c0 100%)',
                '&::before': {
                  left: '100%',
                },
                '& .MuiButton-endIcon': {
                  transform: 'translateX(4px)',
                },
              },
              '&:active': {
                transform: 'translateY(-2px) scale(1.01)',
              },
            }}
          >
            Get Started Now
          </Button>
          <Button
            component={RouterLink}
            to="/events"
            variant="outlined"
            color="error"
            size="large"
            onClick={() => showFeedback('Opening events page...', 'info')}
            sx={{
              px: 6,
              py: 2.5,
              fontSize: { xs: '1.1rem', sm: '1.2rem' },
              fontWeight: 700,
              borderRadius: 3,
              borderWidth: 2.5,
              borderColor: '#ED2939',
              color: '#ED2939',
              backgroundColor: 'white',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              textTransform: 'none',
              boxShadow: '0 4px 16px rgba(237, 41, 57, 0.15)',
              '&:hover': {
                borderWidth: 2.5,
                borderColor: '#c91f2f',
                backgroundColor: '#ED2939',
                color: 'white',
                transform: 'translateY(-4px) scale(1.02)',
                boxShadow: '0 12px 32px rgba(237, 41, 57, 0.35)',
              },
            }}
          >
            View Upcoming Events
          </Button>
        </Stack>
          {/* ABILITY: Show the simplicity */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: 2.5, sm: 4 },
              flexWrap: 'wrap',
              mt: 5,
              pt: 4,
              borderTop: '2px solid',
              borderColor: 'divider',
            }}
          >
            {[
              { text: 'Free to join', icon: <CheckCircleIcon /> },
              { text: 'No commitment', icon: <CheckCircleIcon /> },
              { text: 'Instant access', icon: <CheckCircleIcon /> },
            ].map((benefit, index) => (
              <Box 
                key={benefit.text}
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1.5,
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(76, 175, 80, 0.08)',
                    transform: 'translateY(-2px)',
                    '& .benefit-icon': {
                      transform: 'scale(1.15) rotate(5deg)',
                    },
                  },
                }}
              >
                <Box
                  className="benefit-icon"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    color: 'success.main',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {cloneElement(benefit.icon, { sx: { fontSize: 20 } })}
                </Box>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    lineHeight: 1.6,
                  }}
                >
                  {benefit.text}
                </Typography>
              </Box>
            ))}
          </Box>
      </Container>
      </Box>

      {/* NUDGE: Timely intervention - Contextual prompt when scrolling */}
      <Zoom in={showScrollNudge}>
        <Box
          sx={{
            position: 'fixed',
            bottom: 100,
            right: 32,
            zIndex: 999,
            maxWidth: '300px',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <Card
            sx={{
              p: 2,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              border: '2px solid',
              borderColor: 'primary.main',
              backgroundColor: 'background.paper',
            }}
          >
            <Stack direction="row" spacing={1} alignItems="flex-start">
              <TimerIcon sx={{ color: 'primary.main', mt: 0.5 }} />
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                  Ready to join?
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, fontSize: '0.85rem' }}>
                  {liveActivity.recent} people joined while you were reading. Don't miss out!
                </Typography>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="contained"
                  color="primary"
                  size="small"
                  fullWidth
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => {
                    setShowScrollNudge(false);
                    showFeedback('Taking you to registration...', 'info');
                  }}
                >
                  Join Now
                </Button>
              </Box>
              <IconButton
                size="small"
                onClick={() => setShowScrollNudge(false)}
                sx={{ mt: -1, mr: -1 }}
              >
                <CloseRoundedIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Card>
        </Box>
      </Zoom>

      {/* PROMPT: Floating Action Button for easy access to CTA */}
      <Zoom in={showFloatingCTA}>
        <Fab
          component={RouterLink}
          to="/contact"
          color="primary"
          aria-label="Join us"
          sx={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            zIndex: 1000,
            boxShadow: '0 8px 24px rgba(0, 35, 149, 0.4)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1)',
              boxShadow: '0 12px 32px rgba(0, 35, 149, 0.5)',
            },
            display: { xs: 'none', sm: 'flex' }, // Hide on mobile
          }}
        >
          <ContactMailIcon />
        </Fab>
      </Zoom>

      {/* SYSTEM 1/2: Feedback system for user actions */}
      <Snackbar
        open={actionFeedback.open}
        autoHideDuration={4000}
        onClose={handleCloseFeedback}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseFeedback}
          severity={actionFeedback.type}
          variant="filled"
          sx={{ width: '100%' }}
          icon={
            actionFeedback.type === 'success' ? (
              <CheckCircleIcon />
            ) : actionFeedback.type === 'warning' ? (
              <WarningIcon />
            ) : (
              <InfoIcon />
            )
          }
        >
          {actionFeedback.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
