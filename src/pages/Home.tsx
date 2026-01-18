import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import ParticleCTAButton from '../components/ParticleCTAButton';
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
import TimelineIcon from '@mui/icons-material/Timeline';
import RepeatIcon from '@mui/icons-material/Repeat';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import TableChartIcon from '@mui/icons-material/TableChart';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
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
  const [userProgress, setUserProgress] = useState({ step: 0, completed: [] });
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
                      ✨ Join 1000+ community members making a real difference today
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

            {/* Right side: Hero image */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: '400px', md: '600px' },
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0, 35, 149, 0.15)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(237, 41, 57, 0.1) 100%)',
                    zIndex: 1,
                    pointerEvents: 'none',
                  },
                }}
              >
                <Box
                  component="img"
                  src="/main-hero.jpg"
                  alt="MITRA FRANCE Community"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
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
          <Box sx={{ mt: 4, width: '100%', maxWidth: '800px', mx: 'auto' }}>
          <Box
            sx={{
              p: 2.5,
              borderRadius: 2,
              backgroundColor: 'rgba(0, 35, 149, 0.05)',
              border: '1px solid',
              borderColor: 'primary.main',
              mb: 3,
              textAlign: 'center',
            }}
          >
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" flexWrap="wrap">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <WorkspacePremiumIcon sx={{ color: 'warning.main', fontSize: 28 }} />
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Join now and earn your <strong>Community Member</strong> badge
                </Typography>
              </Box>
              <Chip
                icon={<MilitaryTechIcon />}
                label="Free Badge"
                color="warning"
                size="small"
                sx={{ fontWeight: 700 }}
              />
            </Stack>
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
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            borderWidth: 2,
                            transform: 'translateY(-2px)',
                            boxShadow: `0 4px 12px ${action.color}40`,
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
          <Box sx={{ mt: 6, pt: 4, width: '100%', maxWidth: '800px', mx: 'auto' }}>
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
                <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" flexWrap="wrap">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <PersonAddIcon sx={{ color: 'success.main' }} />
                    <Typography variant="body2" color="text.secondary">
                      <strong>{liveActivity.recent}</strong> people joined in the last hour
                    </Typography>
                  </Box>
                  <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <VisibilityIcon sx={{ color: 'info.main' }} />
                    <Typography variant="body2" color="text.secondary">
                      <strong>{liveActivity.count.toLocaleString()}</strong> active members
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
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            Join Our Community (Recommended)
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Free registration • Instant access • No commitment
                          </Typography>
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
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            Learn More First
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Explore our programs and activities
                          </Typography>
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
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            Browse Events
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            See upcoming activities and workshops
                          </Typography>
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
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                mb: 3,
                px: 2.5,
                py: 1,
                borderRadius: '50px',
                background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(237, 41, 57, 0.1) 100%)',
                border: '1px solid',
                borderColor: 'primary.main',
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
                mb: 2,
                fontWeight: 700,
                background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Find What You Need Instantly
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: '700px',
                mx: 'auto',
                fontWeight: 400,
                lineHeight: 1.7,
              }}
            >
              Based on familiar patterns and visual cues you already know. No thinking required - just click and go.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              {
                icon: <SchoolIcon />,
                title: 'I want to learn',
                description: 'Educational programs and courses',
                path: '/focus-areas',
                color: '#002395',
                gradient: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.05) 100%)',
                hoverGradient: 'linear-gradient(135deg, rgba(0, 35, 149, 0.15) 0%, rgba(0, 35, 149, 0.08) 100%)',
                badge: '50+ Programs',
              },
              {
                icon: <PeopleIcon />,
                title: 'I want to connect',
                description: 'Community events and networking',
                path: '/events',
                color: '#ED2939',
                gradient: 'linear-gradient(135deg, rgba(237, 41, 57, 0.1) 0%, rgba(237, 41, 57, 0.05) 100%)',
                hoverGradient: 'linear-gradient(135deg, rgba(237, 41, 57, 0.15) 0%, rgba(237, 41, 57, 0.08) 100%)',
                badge: '20+ Events',
              },
              {
                icon: <VolunteerActivismIcon />,
                title: 'I want to help',
                description: 'Volunteer opportunities',
                path: '/contact',
                color: '#4CAF50',
                gradient: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.05) 100%)',
                hoverGradient: 'linear-gradient(135deg, rgba(76, 175, 80, 0.15) 0%, rgba(76, 175, 80, 0.08) 100%)',
                badge: 'Join Now',
              },
              {
                icon: <PublicIcon />,
                title: 'I want to explore',
                description: 'Projects and partnerships',
                path: '/projects',
                color: '#FF9800',
                gradient: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.05) 100%)',
                hoverGradient: 'linear-gradient(135deg, rgba(255, 152, 0, 0.15) 0%, rgba(255, 152, 0, 0.08) 100%)',
                badge: '15+ Projects',
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
                      transform: 'translateY(-8px) scale(1.02)',
                      boxShadow: `0 12px 40px ${item.color}30, 0 4px 12px rgba(0, 0, 0, 0.1)`,
                      '&::before': {
                        opacity: 1,
                      },
                      '& .intuitive-icon-wrapper': {
                        transform: 'scale(1.15) rotate(5deg)',
                        background: `linear-gradient(135deg, ${item.color}15, ${item.color}08)`,
                      },
                      '& .intuitive-icon': {
                        color: item.color,
                        transform: 'scale(1.1)',
                      },
                      '& .intuitive-title': {
                        color: item.color,
                      },
                      '& .intuitive-arrow': {
                        opacity: 1,
                        transform: 'translateX(4px)',
                      },
                    },
                  }}
                >
                  <Box sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                    <Box
                      className="intuitive-icon-wrapper"
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        mx: 'auto',
                        background: 'rgba(255, 255, 255, 0.6)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                      }}
                    >
                      <Box
                        className="intuitive-icon"
                        sx={{
                          color: item.color,
                          fontSize: 48,
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      >
                        {item.icon}
                      </Box>
                    </Box>
                    <Typography
                      className="intuitive-title"
                      variant="h5"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        mb: 1.5,
                        transition: 'color 0.3s ease',
                        fontSize: { xs: '1.25rem', sm: '1.5rem' },
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        mb: 3,
                        lineHeight: 1.6,
                        fontSize: '0.95rem',
                        minHeight: '3em',
                      }}
                    >
                      {item.description}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                        mt: 'auto',
                      }}
                    >
                      <Chip
                        label={item.badge}
                        size="small"
                        sx={{
                          backgroundColor: `${item.color}15`,
                          color: item.color,
                          fontWeight: 700,
                          fontSize: '0.75rem',
                          height: '28px',
                          border: `1px solid ${item.color}30`,
                        }}
                      />
                      <ArrowForwardIcon
                        className="intuitive-arrow"
                        sx={{
                          fontSize: 20,
                          color: item.color,
                          opacity: 0.6,
                          transition: 'all 0.3s ease',
                        }}
                      />
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
          py: { xs: 6, sm: 8 },
          backgroundColor: 'rgba(237, 41, 57, 0.03)',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Chip
              icon={<PsychologyIcon />}
              label="Personalized Experience"
              color="error"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
              Who Are You?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
              Choose your role to see personalized recommendations tailored just for you
            </Typography>
          </Box>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {[
              {
                role: 'senior',
                icon: <PersonIcon />,
                label: 'Senior',
                description: 'Digital skills and social activities',
                color: 'primary',
              },
              {
                role: 'youth',
                icon: <GroupIcon />,
                label: 'Youth',
                description: 'Education and career development',
                color: 'error',
              },
              {
                role: 'migrant',
                icon: <PublicIcon />,
                label: 'Migrant',
                description: 'Integration and language support',
                color: 'info',
              },
              {
                role: 'organization',
                icon: <BusinessIcon />,
                label: 'Organization',
                description: 'Partnership opportunities',
                color: 'success',
              },
            ].map((roleOption) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={roleOption.role}>
                <Card
                  onClick={() => setSelectedRole(roleOption.role)}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    cursor: 'pointer',
                    height: '100%',
                    border: '2px solid',
                    borderColor: selectedRole === roleOption.role ? `${roleOption.color}.main` : 'divider',
                    backgroundColor:
                      selectedRole === roleOption.role ? `${roleOption.color}.main` : 'transparent',
                    color: selectedRole === roleOption.role ? 'white' : 'inherit',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: `${roleOption.color}.main`,
                      transform: 'translateY(-3px)',
                      boxShadow: `0 6px 20px ${roleOption.color}40`,
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{roleOption.icon}</Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {roleOption.label}
                  </Typography>
                  <Typography variant="body2">{roleOption.description}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
          {selectedRole !== 'all' && (
            <Box
              sx={{
                p: 3,
                borderRadius: 2,
                backgroundColor: 'rgba(0, 35, 149, 0.05)',
                border: '1px solid',
                borderColor: 'primary.main',
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                Recommended for You
              </Typography>
              <Stack spacing={2}>
                {selectedRole === 'senior' && (
                  <>
                    <Typography>• Digital Literacy Workshops</Typography>
                    <Typography>• Social Integration Activities</Typography>
                    <Typography>• Cultural Exchange Programs</Typography>
                  </>
                )}
                {selectedRole === 'youth' && (
                  <>
                    <Typography>• Erasmus+ Projects</Typography>
                    <Typography>• Media & Arts Education</Typography>
                    <Typography>• Career Development Programs</Typography>
                  </>
                )}
                {selectedRole === 'migrant' && (
                  <>
                    <Typography>• Intercultural Education</Typography>
                    <Typography>• Language Support</Typography>
                    <Typography>• Community Integration</Typography>
                  </>
                )}
                {selectedRole === 'organization' && (
                  <>
                    <Typography>• Partnership Opportunities</Typography>
                    <Typography>• European Network Access</Typography>
                    <Typography>• Collaborative Projects</Typography>
                  </>
                )}
          </Stack>
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                color="primary"
                sx={{ mt: 3 }}
                endIcon={<ArrowForwardIcon />}
              >
                Get Started
              </Button>
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
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Chip
              icon={<SpeedIcon />}
              label="Quick Decisions"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
              Choose Your Path
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
              Simple rules to help you decide quickly
            </Typography>
          </Box>
          <Box 
            sx={{ 
              borderBottom: 2, 
              borderColor: 'divider', 
              mb: 4,
              borderRadius: 2,
              background: 'linear-gradient(90deg, rgba(0, 35, 149, 0.02) 0%, rgba(237, 41, 57, 0.02) 100%)',
            }}
          >
            <Tabs
              value={quickDecisionTab}
              onChange={(_, newValue) => setQuickDecisionTab(newValue)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTab-root': {
                  fontWeight: 600,
                  fontSize: '1rem',
                  textTransform: 'none',
                  minHeight: 64,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 35, 149, 0.05)',
                  },
                },
                '& .Mui-selected': {
                  color: 'primary.main',
                  fontWeight: 700,
                },
                '& .MuiTabs-indicator': {
                  height: 3,
                  borderRadius: '3px 3px 0 0',
                  background: 'linear-gradient(90deg, #002395 0%, #ED2939 100%)',
                },
              }}
            >
              <Tab icon={<ThumbUpIcon />} iconPosition="start" label="I'm Ready" />
              <Tab icon={<InfoIcon />} iconPosition="start" label="I Need Info" />
              <Tab icon={<AccessTimeIcon />} iconPosition="start" label="I'm Exploring" />
            </Tabs>
          </Box>
          <Box sx={{ minHeight: '200px' }}>
            {quickDecisionTab === 0 && (
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Card 
                    sx={{ 
                      p: 3.5, 
                      height: '100%', 
                      border: '2px solid', 
                      borderColor: 'success.main',
                      borderRadius: 3,
                      background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                      boxShadow: '0 4px 20px rgba(76, 175, 80, 0.1)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 30px rgba(76, 175, 80, 0.2)',
                        borderColor: 'success.dark',
                      },
                    }}
                  >
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: 'success.main', mb: 1.5 }}>
                      ✓ Ready to Join?
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7, color: 'text.secondary' }}>
                      If you're ready to get started, click below to register. It takes just 2 minutes.
                    </Typography>
                    <Button
                      component={RouterLink}
                      to="/contact"
                      variant="contained"
                      color="success"
                      fullWidth
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        py: 1.5,
                        fontWeight: 700,
                        borderRadius: 2,
                        boxShadow: '0 4px 14px rgba(76, 175, 80, 0.3)',
                        '&:hover': {
                          boxShadow: '0 6px 20px rgba(76, 175, 80, 0.4)',
                        },
                      }}
                    >
                      Register Now
                    </Button>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Card 
                    sx={{ 
                      p: 3.5, 
                      height: '100%', 
                      border: '2px solid', 
                      borderColor: 'primary.main',
                      borderRadius: 3,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                      boxShadow: '0 4px 20px rgba(0, 35, 149, 0.1)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 30px rgba(0, 35, 149, 0.2)',
                        borderColor: 'primary.dark',
                      },
                    }}
                  >
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: 'primary.main', mb: 1.5 }}>
                      ✓ Want to Volunteer?
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7, color: 'text.secondary' }}>
                      Help others while developing your skills. Join our volunteer program.
                    </Typography>
                    <Button
                      component={RouterLink}
                      to="/contact"
                      variant="contained"
                      color="primary"
                      fullWidth
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        py: 1.5,
                        fontWeight: 700,
                        borderRadius: 2,
                        boxShadow: '0 4px 14px rgba(0, 35, 149, 0.3)',
                        '&:hover': {
                          boxShadow: '0 6px 20px rgba(0, 35, 149, 0.4)',
                        },
                      }}
                    >
                      Become a Volunteer
                    </Button>
                  </Card>
                </Grid>
              </Grid>
            )}
            {quickDecisionTab === 1 && (
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Card sx={{ p: 3, height: '100%' }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      Learn About Us
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      Discover our mission, values, and impact
                    </Typography>
                    <Button component={RouterLink} to="/about" variant="outlined" fullWidth>
                      About Us
                    </Button>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Card sx={{ p: 3, height: '100%' }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      Our Programs
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      Explore all our focus areas and programs
                    </Typography>
                    <Button component={RouterLink} to="/focus-areas" variant="outlined" fullWidth>
                      View Programs
                    </Button>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Card sx={{ p: 3, height: '100%' }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      Contact Us
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      Have questions? We're here to help
                    </Typography>
                    <Button component={RouterLink} to="/contact" variant="outlined" fullWidth>
                      Get in Touch
                    </Button>
                  </Card>
                </Grid>
              </Grid>
            )}
            {quickDecisionTab === 2 && (
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Card sx={{ p: 3, height: '100%' }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      Browse Events
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      See what's happening in our community
                    </Typography>
                    <Button component={RouterLink} to="/events" variant="outlined" fullWidth>
                      View Events
                    </Button>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Card sx={{ p: 3, height: '100%' }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      View Gallery
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      See photos from our activities and programs
                    </Typography>
                    <Button component={RouterLink} to="/gallery" variant="outlined" fullWidth>
                      Visit Gallery
                    </Button>
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
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
              <LightbulbIcon sx={{ color: 'primary.main' }} />
              <Chip
                icon={<CalculateIcon />}
                label="System 2: Detailed Information"
                color="primary"
                sx={{ fontWeight: 600 }}
              />
            </Box>
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
              Making an Important Decision?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
              Get all the facts you need to make an informed choice. Take your time to analyze and compare options.
            </Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    What are the costs?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack spacing={2}>
                    <Typography variant="body1">
                      <strong>Registration:</strong> Free - No cost to join our community
                    </Typography>
                    <Typography variant="body1">
                      <strong>Programs:</strong> Most programs are free. Some specialized workshops may have
                      minimal fees (typically €10-30), with discounts for members.
                    </Typography>
                    <Typography variant="body1">
                      <strong>Events:</strong> Community events are generally free. Special events may have
                      ticket prices clearly stated in advance.
                    </Typography>
                  </Stack>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    What is the time commitment?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack spacing={2}>
                    <Typography variant="body1">
                      <strong>Flexible participation:</strong> Join programs and events as your schedule
                      allows. No minimum commitment required.
                    </Typography>
                    <Typography variant="body1">
                      <strong>Program duration:</strong> Programs range from one-day workshops to multi-month
                      courses. You choose what fits your needs.
                    </Typography>
                    <Typography variant="body1">
                      <strong>Volunteering:</strong> Volunteer hours are flexible and can be arranged around
                      your availability.
                    </Typography>
                  </Stack>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    What are the requirements?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack spacing={2}>
                    <Typography variant="body1">
                      <strong>Age:</strong> Open to all ages - from youth to seniors
                    </Typography>
                    <Typography variant="body1">
                      <strong>Background:</strong> No specific qualifications needed. All backgrounds
                      welcome.
                    </Typography>
                    <Typography variant="body1">
                      <strong>Language:</strong> Programs available in multiple languages. English and
                      French are primary.
                    </Typography>
                    <Typography variant="body1">
                      <strong>Location:</strong> Based in Nice, France, but many programs are available
                      online.
                    </Typography>
                  </Stack>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    What can I expect?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack spacing={2}>
                    <Typography variant="body1">
                      <strong>Support:</strong> Dedicated staff and volunteers to help you every step of the
                      way.
                    </Typography>
                    <Typography variant="body1">
                      <strong>Community:</strong> Welcoming, inclusive environment with diverse participants.
                    </Typography>
                    <Typography variant="body1">
                      <strong>Growth:</strong> Opportunities for personal and professional development.
                    </Typography>
                    <Typography variant="body1">
                      <strong>Impact:</strong> Be part of positive change in your community and across
                      Europe.
                    </Typography>
                  </Stack>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 700,
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
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Chip
              icon={<SentimentSatisfiedIcon />}
              label="Emotional Connection"
              color="error"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
              How Are You Feeling?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
              We understand that joining a community is an emotional decision. Let's find the right path for you.
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {[
              {
                emotion: 'curious',
                icon: <AutoStoriesIcon sx={{ fontSize: 40 }} />,
                title: 'I\'m Curious',
                description: 'I want to learn more before deciding',
                action: 'Explore our programs',
                color: 'info',
              },
              {
                emotion: 'interested',
                icon: <ThumbUpAltIcon sx={{ fontSize: 40 }} />,
                title: 'I\'m Interested',
                description: 'This sounds like something for me',
                action: 'See how to get started',
                color: 'primary',
              },
              {
                emotion: 'committed',
                icon: <HandshakeIcon sx={{ fontSize: 40 }} />,
                title: 'I\'m Ready',
                description: 'I want to join and make a difference',
                action: 'Register now',
                color: 'success',
              },
            ].map((emotionOption) => (
              <Grid size={{ xs: 12, md: 4 }} key={emotionOption.emotion}>
                <Card
                  onClick={() => {
                    setEmotionalState(emotionOption.emotion as 'curious' | 'interested' | 'committed');
                    setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                  }}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    height: '100%',
                    cursor: 'pointer',
                    border: '2px solid',
                    borderColor:
                      emotionalState === emotionOption.emotion ? `${emotionOption.color}.main` : 'divider',
                    backgroundColor:
                      emotionalState === emotionOption.emotion
                        ? `${emotionOption.color}.main`
                        : 'transparent',
                    color: emotionalState === emotionOption.emotion ? 'white' : 'inherit',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: `${emotionOption.color}.main`,
                      transform: 'translateY(-5px)',
                      boxShadow: `0 8px 24px ${emotionOption.color}40`,
                    },
                  }}
                >
                  <Box sx={{ mb: 2, color: emotionalState === emotionOption.emotion ? 'white' : `${emotionOption.color}.main` }}>
                    {emotionOption.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {emotionOption.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, minHeight: '3em' }}>
                    {emotionOption.description}
                  </Typography>
                  <Button
                    component={RouterLink}
                    to={
                      emotionOption.emotion === 'curious'
                        ? '/about'
                        : emotionOption.emotion === 'interested'
                          ? '/focus-areas'
                          : '/contact'
                    }
                    variant={emotionalState === emotionOption.emotion ? 'contained' : 'outlined'}
                    color={emotionOption.color as 'info' | 'primary' | 'success'}
                    size="small"
                    onClick={() => showFeedback(`Great choice! Taking you to ${emotionOption.action.toLowerCase()}...`, 'success')}
                  >
                    {emotionOption.action}
                  </Button>
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
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Chip
              label="Simple & Accessible"
              color="primary"
              sx={{ mb: 2, fontWeight: 600, fontSize: '0.9rem', py: 2.5 }}
            />
          <Typography
            variant="h2"
            sx={{
              mb: 2,
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
          <Grid container spacing={3}>
            {[
              {
                icon: <CheckCircleIcon sx={{ fontSize: 40 }} />,
                title: 'Easy to Join',
                description: 'Simple registration process. No complex requirements.',
                detail: '3-step process • 2 minutes',
                color: 'success',
              },
              {
                icon: <PeopleIcon sx={{ fontSize: 40 }} />,
                title: 'Inclusive Community',
                description: 'Welcome to all - seniors, youth, migrants, everyone belongs.',
                detail: 'Open to everyone • No barriers',
                color: 'primary',
              },
              {
                icon: <PublicIcon sx={{ fontSize: 40 }} />,
                title: 'European Network',
                description: 'Connect with partners across Europe through Erasmus+ projects.',
                detail: '15+ countries • Active network',
                color: 'info',
              },
              {
                icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
                title: 'Proven Impact',
                description: 'Track record of successful programs and positive outcomes.',
                detail: '1000+ lives changed • 10+ years',
                color: 'warning',
              },
            ].map((benefit) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={benefit.title}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'visible',
                    '&:hover': {
                      boxShadow: '0 8px 24px rgba(0, 35, 149, 0.2)',
                      transform: 'translateY(-5px)',
                      borderColor: 'primary.main',
                      '& .benefit-icon': {
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                >
                  <Box
                    className="benefit-icon"
                    sx={{
                      color: `${benefit.color}.main`,
                      mb: 2,
                      display: 'flex',
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    {benefit.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 1 }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, minHeight: '3em' }}>
                    {benefit.description}
                  </Typography>
                  <Chip
                    label={benefit.detail}
                    size="small"
                    color={benefit.color as 'success' | 'primary' | 'info' | 'warning'}
                    sx={{ fontSize: '0.75rem', fontWeight: 600 }}
                  />
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
          py: { xs: 6, sm: 8 },
          borderTop: '1px solid',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Stack direction="row" spacing={0.5}>
                  <StarIcon sx={{ color: 'warning.main', fontSize: 28 }} />
                  <StarIcon sx={{ color: 'warning.main', fontSize: 28 }} />
                  <StarIcon sx={{ color: 'warning.main', fontSize: 28 }} />
                  <StarIcon sx={{ color: 'warning.main', fontSize: 28 }} />
                  <StarIcon sx={{ color: 'warning.main', fontSize: 28 }} />
                </Stack>
                <Chip
                  label="4.9/5 Average Rating"
                  size="small"
                  color="warning"
                  sx={{ ml: 1, fontWeight: 600 }}
                />
              </Box>
              <Typography variant="h4" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
                Stories That Inspire
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.05rem' }}>
                "Joining MITRA FRANCE changed my life. I went from feeling isolated to being part of a vibrant
                community that values diversity and learning. The digital skills program helped me connect with
                my grandchildren and find new opportunities."
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
                  MC
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Marie-Claire, 68
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Digital Literacy Participant • Joined 3 months ago
                  </Typography>
                </Box>
              </Box>
              {/* NUDGE: Social proof - Recent joiners */}
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: 'rgba(0, 35, 149, 0.05)',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                  Recently joined:
                </Typography>
                <AvatarGroup max={5} sx={{ justifyContent: 'flex-start' }}>
                  <Avatar sx={{ bgcolor: 'primary.main' }}>A</Avatar>
                  <Avatar sx={{ bgcolor: 'error.main' }}>B</Avatar>
                  <Avatar sx={{ bgcolor: 'success.main' }}>C</Avatar>
                  <Avatar sx={{ bgcolor: 'warning.main' }}>D</Avatar>
                  <Avatar sx={{ bgcolor: 'info.main' }}>E</Avatar>
                </AvatarGroup>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
                  +{liveActivity.recent} more in the last hour
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3,
                  backgroundColor: 'rgba(0, 35, 149, 0.05)',
                  border: '1px solid',
                  borderColor: 'primary.main',
                  height: '100%',
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                  Why People Love Us
                </Typography>
                <Stack spacing={2}>
                  {[
                    { icon: <PeopleIcon />, text: 'Welcoming community for all ages and backgrounds' },
                    { icon: <SchoolIcon />, text: 'Practical skills you can use immediately' },
                    { icon: <EmojiEventsIcon />, text: 'Real impact on your personal growth' },
                    { icon: <PublicIcon />, text: 'Connection to European opportunities' },
                  ].map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ color: 'primary.main' }}>{item.icon}</Box>
                      <Typography variant="body2" color="text.secondary">
                        {item.text}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
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
            
            {/* MOTIVATION: Show value and impact */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 4,
                flexWrap: 'wrap',
                mb: 4,
                p: 3,
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.08) 0%, rgba(237, 41, 57, 0.08) 100%)',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 0.5 }}>
                  5
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                  Focus Areas
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 0.5 }}>
                  50+
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                  Active Programs
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 0.5 }}>
                  1000+
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                  Participants
                </Typography>
              </Box>
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
                      {/* Image placeholder */}
                      <Box
                        sx={{
                          width: '100%',
                          height: { xs: 200, sm: 240 },
                          background: `linear-gradient(135deg, ${colorScheme.primary}08 0%, ${colorScheme.accent} 100%)`,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          overflow: 'hidden',
                          borderBottom: '2px dashed',
                          borderColor: `${colorScheme.primary}30`,
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, ${colorScheme.primary}05 10px, ${colorScheme.primary}05 20px)`,
                            opacity: 0.5,
                          },
                        }}
                      >
                        <ImageIcon
                          sx={{
                            fontSize: 64,
                            color: `${colorScheme.primary}40`,
                            mb: 1,
                            position: 'relative',
                            zIndex: 1,
                          }}
                        />
                        <Typography
                          variant="caption"
                          sx={{
                            color: `${colorScheme.primary}60`,
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            position: 'relative',
                            zIndex: 1,
                          }}
                        >
                          Image Placeholder
                        </Typography>
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
                  { icon: <SchoolIcon />, text: 'Educational Excellence', count: '50+ Programs' },
                  { icon: <PeopleIcon />, text: 'Community Reach', count: '1000+ Participants' },
                  { icon: <PublicIcon />, text: 'European Network', count: '15+ Countries' },
                  { icon: <EmojiEventsIcon />, text: 'Awards & Recognition', count: 'Multiple Projects' },
                ].map((item, index) => (
                  <Grid size={{ xs: 6 }} key={index}>
                    <Card
                      sx={{
                        p: 2.5,
                        textAlign: 'center',
                        height: '100%',
                        border: '1px solid',
                        borderColor: 'divider',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: 'primary.main',
                          boxShadow: '0 4px 12px rgba(0, 35, 149, 0.15)',
                        },
                      }}
                    >
                      <Box sx={{ color: 'primary.main', mb: 1 }}>{item.icon}</Box>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem', mb: 0.5 }}>
                        {item.text}
                      </Typography>
                      <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700 }}>
                        {item.count}
                      </Typography>
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
              <Typography variant="h4" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
                Don't Miss Out on Upcoming Opportunities
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.05rem' }}>
                New programs and events are launching regularly. <strong>{liveActivity.recent} people joined today</strong> to be notified about upcoming
                opportunities and secure their spot in our next cohort. Early registration ensures you get
                priority access to limited spaces.
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                  mb: 3,
                }}
              >
                {[
                  'Next Digital Skills Workshop: Starting in 2 weeks',
                  'Cultural Exchange Event: Registration open now',
                  'Erasmus+ Project: Applications closing soon',
                ].map((item, index) => (
                  <Chip
                    key={index}
                    label={item}
                    sx={{
                      backgroundColor: 'rgba(0, 35, 149, 0.1)',
                      color: 'primary.main',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                    }}
                  />
                ))}
              </Box>
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
                  p: 3,
                  textAlign: 'center',
                  backgroundColor: 'rgba(237, 41, 57, 0.1)',
                  border: '2px solid',
                  borderColor: 'error.main',
                  position: 'relative',
                  overflow: 'visible',
                  '&::before': {
                    content: '"Most Popular"',
                    position: 'absolute',
                    top: -12,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'error.main',
                    color: 'white',
                    px: 2,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                  },
                }}
              >
                <Typography variant="h3" sx={{ color: 'error.main', fontWeight: 700, mb: 1 }}>
                  Act Now
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Join today to receive priority notifications about upcoming programs and events
                </Typography>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="contained"
                  color="error"
                  size="large"
                  fullWidth
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => showFeedback('Redirecting to registration...', 'info')}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 700,
                    boxShadow: '0 4px 14px rgba(237, 41, 57, 0.4)',
                  }}
                >
                  Register Now
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* PERSUASIVE: Commitment and Consistency - Progress tracking */}
      <Box
        sx={{
          py: { xs: 6, sm: 8 },
          backgroundColor: 'rgba(0, 35, 149, 0.02)',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Chip
              icon={<CheckCircleIcon />}
              label="Your Journey"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
              Start Small, Build Big
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
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
              },
              {
                step: 2,
                title: 'Complete Profile',
                description: 'Tell us about yourself',
                reward: 'Profile Badge',
                progress: userProgress.step >= 2 ? 100 : 0,
                completed: userProgress.completed.includes(2),
              },
              {
                step: 3,
                title: 'Join First Event',
                description: 'Attend a workshop or activity',
                reward: 'Active Member Badge',
                progress: userProgress.step >= 3 ? 100 : 0,
                completed: userProgress.completed.includes(3),
              },
              {
                step: 4,
                title: 'Complete Program',
                description: 'Finish a full program',
                reward: 'Achievement Badge',
                progress: userProgress.step >= 4 ? 100 : 0,
                completed: userProgress.completed.includes(4),
              },
            ].map((milestone) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={milestone.step}>
                <Card
                  sx={{
                    p: 3,
                    height: '100%',
                    border: milestone.completed ? '2px solid' : '1px solid',
                    borderColor: milestone.completed ? 'success.main' : 'divider',
                    backgroundColor: milestone.completed ? 'rgba(76, 175, 80, 0.05)' : 'transparent',
                    position: 'relative',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: milestone.completed ? 'success.main' : 'primary.main',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                      }}
                    >
                      {milestone.completed ? <CheckCircleIcon /> : milestone.step}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {milestone.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {milestone.description}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <LinearProgress
                      variant="determinate"
                      value={milestone.progress}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: milestone.completed ? 'success.main' : 'primary.main',
                        },
                      }}
                    />
                  </Box>
                  <Chip
                    icon={milestone.completed ? <WorkspacePremiumIcon /> : <MilitaryTechIcon />}
                    label={milestone.reward}
                    size="small"
                    color={milestone.completed ? 'success' : 'default'}
                    sx={{ fontWeight: 600 }}
                  />
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
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Chip
              icon={<PeopleIcon />}
              label="Join the Community"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
              People Like You Are Already Here
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
              Connect with others who share your interests and goals
            </Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <AvatarGroup max={6} sx={{ justifyContent: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: 'primary.main' }}>A</Avatar>
                  <Avatar sx={{ bgcolor: 'error.main' }}>B</Avatar>
                  <Avatar sx={{ bgcolor: 'success.main' }}>C</Avatar>
                  <Avatar sx={{ bgcolor: 'warning.main' }}>D</Avatar>
                  <Avatar sx={{ bgcolor: 'info.main' }}>E</Avatar>
                  <Avatar sx={{ bgcolor: 'primary.main' }}>+{liveActivity.recent}</Avatar>
                </AvatarGroup>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {liveActivity.count.toLocaleString()} Active Members
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Join a vibrant community of learners and changemakers
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 2 }}>
                  <FavoriteIcon sx={{ color: 'error.main', fontSize: 32 }} />
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'error.main' }}>
                    98%
                  </Typography>
                </Stack>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Satisfaction Rate
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Members love our programs and community
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <ShareIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Share with Friends
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {liveActivity.recent} people shared this with their network today
                </Typography>
                <Button variant="outlined" color="primary" startIcon={<ShareIcon />}>
                  Share Now
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* EXECUTION: Simple step-by-step process */}
      <Container sx={{ py: { xs: 8, sm: 10 } }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip
            icon={<PlayArrowIcon />}
            label="How It Works"
            color="primary"
            sx={{ mb: 2, fontWeight: 600, fontSize: '0.9rem', py: 2.5 }}
          />
          <Typography variant="h2" sx={{ mb: 2 }}>
            Getting Started is Simple
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
              fontSize: '1.1rem',
            }}
          >
            Follow these three easy steps to join our community and start your journey
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {[
            {
              step: 1,
              icon: <BadgeIcon sx={{ fontSize: 48 }} />,
              title: 'Register',
              description: 'Fill out a simple form with your basic information. No documents required.',
              time: '2 minutes',
              color: 'primary',
            },
            {
              step: 2,
              icon: <CheckCircleIcon sx={{ fontSize: 48 }} />,
              title: 'Get Confirmed',
              description: 'Receive instant confirmation and welcome materials via email.',
              time: 'Immediate',
              color: 'success',
            },
            {
              step: 3,
              icon: <PeopleIcon sx={{ fontSize: 48 }} />,
              title: 'Start Participating',
              description: 'Access programs, join events, and connect with the community right away.',
              time: 'Same day',
              color: 'info',
            },
          ].map((stepItem) => (
            <Grid size={{ xs: 12, md: 4 }} key={stepItem.step}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  textAlign: 'center',
                  position: 'relative',
                  border: '2px solid',
                  borderColor: `${stepItem.color}.main`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 12px 32px rgba(0, 0, 0, 0.15)`,
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: -20,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: `${stepItem.color}.main`,
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  {stepItem.step}
                </Box>
                <Box sx={{ color: `${stepItem.color}.main`, mb: 2, mt: 2 }}>
                  {stepItem.icon}
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                  {stepItem.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2, minHeight: '3em' }}>
                  {stepItem.description}
                </Typography>
                <Chip
                  icon={<AccessTimeIcon />}
                  label={stepItem.time}
                  size="small"
                  color={stepItem.color as 'primary' | 'success' | 'info'}
                  sx={{ fontWeight: 600 }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.2rem',
              fontWeight: 700,
              boxShadow: '0 6px 20px rgba(0, 35, 149, 0.35)',
            }}
          >
            Start Step 1 Now
          </Button>
        </Box>
      </Container>

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
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Chip
              icon={<ErrorOutlineIcon />}
              label="Error Prevention"
              color="warning"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              We Help You Avoid Mistakes
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
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
            ].map((item) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.title}>
                <Card
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: `${item.color}.main`,
                      transform: 'translateY(-3px)',
                      boxShadow: `0 6px 20px ${item.color}30`,
                    },
                  }}
                >
                  <Box sx={{ color: `${item.color}.main`, mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* PROMPT: Enhanced final call-to-action with urgency and clarity */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(237, 41, 57, 0.05) 100%)',
          py: { xs: 8, sm: 10 },
          position: 'relative',
        }}
      >
        <Container sx={{ textAlign: 'center', position: 'relative' }}>
          <Chip
            label="Start Your Journey"
            color="primary"
            sx={{ mb: 3, fontWeight: 600, fontSize: '0.95rem', py: 2 }}
          />
          <Typography variant="h2" gutterBottom sx={{ mb: 2 }}>
          Ready to Make a Difference?
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
            sx={{ mb: 1, maxWidth: '600px', mx: 'auto', fontSize: '1.15rem', fontWeight: 500 }}
          >
            Join our community today and be part of positive change.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: '500px', mx: 'auto', fontStyle: 'italic' }}
          >
            It only takes a moment to get started. No commitment required.
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
            sx={{ justifyContent: 'center', alignItems: 'center', mb: 3 }}
        >
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 700,
                boxShadow: '0 6px 20px rgba(0, 35, 149, 0.35)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 8px 25px rgba(0, 35, 149, 0.45)',
                },
                '&:active': {
                  transform: 'translateY(-1px)',
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
            sx={{
                px: 6,
                py: 2,
                fontSize: '1.2rem',
              fontWeight: 600,
                borderWidth: 2.5,
              borderColor: '#ED2939',
              color: '#ED2939',
                transition: 'all 0.3s ease',
              '&:hover': {
                  borderWidth: 2.5,
                borderColor: '#c91f2f',
                  backgroundColor: 'rgba(237, 41, 57, 0.08)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 6px 20px rgba(237, 41, 57, 0.25)',
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
              gap: 3,
              flexWrap: 'wrap',
              mt: 4,
              pt: 4,
              borderTop: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircleIcon sx={{ fontSize: 20, color: 'success.main' }} />
              <Typography variant="body2" color="text.secondary">
                Free to join
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircleIcon sx={{ fontSize: 20, color: 'success.main' }} />
              <Typography variant="body2" color="text.secondary">
                No commitment
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircleIcon sx={{ fontSize: 20, color: 'success.main' }} />
              <Typography variant="body2" color="text.secondary">
                Instant access
              </Typography>
            </Box>
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
