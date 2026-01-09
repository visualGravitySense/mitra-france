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
import MoodIcon from '@mui/icons-material/Mood';
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
    path: '/focus-areas#intercultural',
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
    path: '/focus-areas#adult-education',
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
  // Conceptual Design: Persona selection for User Personas section
  const [selectedPersona, setSelectedPersona] = useState<'senior' | 'youth' | 'migrant'>('senior');
  // Tell User & Ask User: Track user feedback and interactions
  const [userRating, setUserRating] = useState<number | null>(null);
  const [userFeedback, setUserFeedback] = useState('');
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
          }}
        >
          <Stack
            spacing={2}
            useFlexGap
            sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
          >
            <Typography
              variant="h1"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                textAlign: 'center',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                mb: 1,
                position: 'relative',
                zIndex: 1,
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60%',
                  height: 4,
                  background: 'linear-gradient(90deg, transparent, rgba(0, 35, 149, 0.3), transparent)',
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
                textAlign: 'center',
                color: 'text.secondary',
                fontWeight: 400,
              }}
            >
              Empowering Communities Through Education, Media & Culture
            </Typography>
            {/* BEHAVIORAL: Emotional connection - Visual storytelling */}
            <Box
              sx={{
                mt: 3,
                p: 3.5,
                borderRadius: 4,
                background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(237, 41, 57, 0.1) 100%)',
                border: '2px solid',
                borderColor: 'rgba(0, 35, 149, 0.2)',
                maxWidth: '700px',
                width: '100%',
                position: 'relative',
                zIndex: 1,
                boxShadow: '0 8px 32px rgba(0, 35, 149, 0.1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(0, 35, 149, 0.15)',
                  borderColor: 'rgba(0, 35, 149, 0.3)',
                },
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" flexWrap="wrap">
                <MoodIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                <Box sx={{ textAlign: 'center', flex: 1, minWidth: '200px' }}>
                  <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                    Feel the Impact
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Join a community where every action creates positive change
                  </Typography>
                </Box>
                <EmojiEmotionsIcon sx={{ fontSize: 32, color: 'error.main' }} />
              </Stack>
            </Box>
            <Typography
              sx={{
                textAlign: 'center',
                color: 'text.secondary',
                width: { sm: '100%', md: '80%' },
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
                maxWidth: '650px',
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
              <Stack direction="row" spacing={1.5} alignItems="center" justifyContent="center">
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
                    textAlign: 'center',
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
            <Box sx={{ pt: 4, width: '100%', maxWidth: '700px' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
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
                sx={{ width: { xs: '100%', sm: 'auto' }, justifyContent: 'center' }}
              >
                <Tooltip title="System 1: Quick, intuitive action - No thinking required">
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => showFeedback('Redirecting to contact form...', 'info')}
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
                  </Button>
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
                textAlign: 'center',
                color: 'text.secondary',
                mt: 2,
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 0.5,
              }}
            >
              <CheckCircleIcon sx={{ fontSize: 16, color: 'success.main' }} />
              Free to join • No commitment • Takes 2 minutes
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* BEHAVIOR DESIGN: Goal Achievement Path */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          backgroundColor: 'rgba(0, 35, 149, 0.02)',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<TrackChangesIcon />}
              label="Your Goal, Our Path"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              What's Your Goal?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              Tell us what you want to achieve, and we'll show you the simplest path to get there
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ p: 4, height: '100%', border: '2px solid', borderColor: 'primary.main' }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                  <RouteIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                  Choose Your Goal
                </Typography>
                <RadioGroup
                  value={userGoal}
                  onChange={(e) => {
                    setUserGoal(e.target.value);
                    setGoalProgress(25);
                    setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                  }}
                  sx={{ gap: 2 }}
                >
                  {[
                    { value: 'learn', label: 'Learn New Skills', icon: <SchoolIcon /> },
                    { value: 'connect', label: 'Connect with Community', icon: <PeopleIcon /> },
                    { value: 'grow', label: 'Personal Growth', icon: <TrendingUpIcon /> },
                    { value: 'help', label: 'Help Others', icon: <VolunteerActivismIcon /> },
                  ].map((goal) => (
                    <Card
                      key={goal.value}
                      onClick={() => {
                        setUserGoal(goal.value);
                        setGoalProgress(25);
                      }}
                      sx={{
                        p: 2,
                        cursor: 'pointer',
                        border: '2px solid',
                        borderColor: userGoal === goal.value ? 'primary.main' : 'divider',
                        backgroundColor: userGoal === goal.value ? 'rgba(0, 35, 149, 0.05)' : 'transparent',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: 'primary.main',
                          backgroundColor: 'rgba(0, 35, 149, 0.03)',
                        },
                      }}
                    >
                      <FormControlLabel
                        value={goal.value}
                        control={<Radio />}
                        label={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box sx={{ color: 'primary.main' }}>{goal.icon}</Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                              {goal.label}
                            </Typography>
                          </Box>
                        }
                        sx={{ m: 0, width: '100%' }}
                      />
                    </Card>
                  ))}
                </RadioGroup>
              </Card>
            </Grid>
            
            <Grid size={{ xs: 12, md: 6 }}>
              {userGoal ? (
                <Card sx={{ p: 4, height: '100%', border: '2px solid', borderColor: 'success.main' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <FlagIcon sx={{ fontSize: 32, color: 'success.main' }} />
                    <Typography variant="h5" sx={{ fontWeight: 600, color: 'success.main' }}>
                      Your Path to Success
                    </Typography>
                  </Box>
                  
                  {/* Progress indicator */}
                  <Box sx={{ mb: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Progress to Goal
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: 'primary.main' }}>
                        {goalProgress}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={goalProgress}
                      sx={{
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: 'success.main',
                        },
                      }}
                    />
                  </Box>

                  {/* Step-by-step path */}
                  <Stepper activeStep={goalProgress > 0 ? 0 : -1} orientation="vertical">
                    {[
                      {
                        label: 'Step 1: Register (2 minutes)',
                        description: 'Fill out a simple form. No documents needed.',
                        action: 'Start Registration',
                        path: '/contact',
                      },
                      {
                        label: 'Step 2: Choose Your Program',
                        description: 'Select from programs that match your goal.',
                        action: 'Browse Programs',
                        path: '/focus-areas',
                      },
                      {
                        label: 'Step 3: Attend First Session',
                        description: 'Join your first workshop or event.',
                        action: 'View Events',
                        path: '/events',
                      },
                      {
                        label: 'Step 4: Achieve Your Goal',
                        description: 'Complete your program and reach your objective.',
                        action: 'See Success Stories',
                        path: '/about',
                      },
                    ].map((step, index) => (
                      <Step key={step.label}>
                        <StepLabel
                          optional={
                            <Typography variant="caption" color="text.secondary">
                              {step.description}
                            </Typography>
                          }
                        >
                          {step.label}
                        </StepLabel>
                        <StepContent>
                          <Button
                            component={RouterLink}
                            to={step.path}
                            variant="outlined"
                            size="small"
                            endIcon={<ArrowForwardIcon />}
                            onClick={() => {
                              setGoalProgress(Math.min(100, goalProgress + 25));
                              showFeedback(`Taking you to ${step.action.toLowerCase()}...`, 'info');
                            }}
                            sx={{ mt: 1 }}
                          >
                            {step.action}
                          </Button>
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
                </Card>
              ) : (
                <Card
                  sx={{
                    p: 4,
                    height: '100%',
                    border: '2px dashed',
                    borderColor: 'divider',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}
                >
                  <RouteIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2, opacity: 0.5 }} />
                  <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
                    Select Your Goal
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Choose a goal on the left to see your personalized path to success
                  </Typography>
                </Card>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* BEHAVIOR DESIGN: Remove Barriers */}
      <Box
        sx={{
          py: { xs: 6, sm: 8 },
          backgroundColor: 'rgba(237, 41, 57, 0.02)',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Chip
              icon={<RemoveCircleOutlineIcon />}
              label="No Barriers"
              color="success"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
              We've Removed All Obstacles
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
              Everything is designed to make your journey as smooth as possible
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {[
              {
                barrier: 'No Cost',
                removed: 'Everything is completely free',
                icon: <AttachMoneyIcon sx={{ fontSize: 40 }} />,
                color: 'success',
              },
              {
                barrier: 'No Complexity',
                removed: 'Simple forms, clear instructions',
                icon: <CheckCircleIcon sx={{ fontSize: 40 }} />,
                color: 'primary',
              },
              {
                barrier: 'No Commitment',
                removed: 'Join and leave anytime you want',
                icon: <UndoIcon sx={{ fontSize: 40 }} />,
                color: 'info',
              },
              {
                barrier: 'No Prerequisites',
                removed: 'Open to everyone, all backgrounds welcome',
                icon: <PeopleIcon sx={{ fontSize: 40 }} />,
                color: 'warning',
              },
            ].map((item) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.barrier}>
                <Card
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    height: '100%',
                    border: '2px solid',
                    borderColor: `${item.color}.main`,
                    backgroundColor: `${item.color}.main`,
                    color: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 8px 24px ${item.color}40`,
                    },
                  }}
                >
                  <Box sx={{ mb: 2, opacity: 0.9 }}>{item.icon}</Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mb: 1 }}>
                    {item.barrier}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {item.removed}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* BJ FOGG BEHAVIOR GRID: Understanding behavior change types */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(237, 41, 57, 0.05) 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<TableChartIcon />}
              label="BJ Fogg Behavior Grid"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              What Type of Behavior Change Do You Want?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              Every behavior change is unique. Choose the dimensions that match your goal, and we'll show you the perfect path.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Three Dimensions */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ p: 4, height: '100%', border: '2px solid', borderColor: 'primary.main', borderRadius: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <TimelineIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Duration
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  How long do you want this behavior to last?
                </Typography>
                <ToggleButtonGroup
                  value={behaviorDuration}
                  exclusive
                  onChange={(_, value) => value && setBehaviorDuration(value)}
                  fullWidth
                  sx={{ mb: 2 }}
                >
                  <ToggleButton value="one-time" sx={{ py: 1.5, fontWeight: 600 }}>
                    One-Time
                  </ToggleButton>
                  <ToggleButton value="ongoing" sx={{ py: 1.5, fontWeight: 600 }}>
                    Ongoing
                  </ToggleButton>
                </ToggleButtonGroup>
                <Box sx={{ mt: 2, p: 2, borderRadius: 2, backgroundColor: 'rgba(0, 35, 149, 0.05)' }}>
                  <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>
                    {behaviorDuration === 'one-time' ? 'One-Time Action' : 'Long-Term Commitment'}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {behaviorDuration === 'one-time'
                      ? 'Complete a single action or task'
                      : 'Maintain behavior over time'}
                  </Typography>
                </Box>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ p: 4, height: '100%', border: '2px solid', borderColor: 'info.main', borderRadius: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <RepeatIcon sx={{ fontSize: 32, color: 'info.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'info.main' }}>
                    Frequency
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  How often should this behavior occur?
                </Typography>
                <ToggleButtonGroup
                  value={behaviorFrequency}
                  exclusive
                  onChange={(_, value) => value && setBehaviorFrequency(value)}
                  fullWidth
                  sx={{ mb: 2 }}
                >
                  <ToggleButton value="one-time" sx={{ py: 1.5, fontWeight: 600 }}>
                    One-Time
                  </ToggleButton>
                  <ToggleButton value="recurring" sx={{ py: 1.5, fontWeight: 600 }}>
                    Recurring
                  </ToggleButton>
                </ToggleButtonGroup>
                <Box sx={{ mt: 2, p: 2, borderRadius: 2, backgroundColor: 'rgba(0, 35, 149, 0.05)' }}>
                  <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>
                    {behaviorFrequency === 'one-time' ? 'Single Occurrence' : 'Repeated Action'}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {behaviorFrequency === 'one-time'
                      ? "Do it once and you're done"
                      : 'Repeat regularly or periodically'}
                  </Typography>
                </Box>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ p: 4, height: '100%', border: '2px solid', borderColor: 'warning.main', borderRadius: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <TrendingFlatIcon sx={{ fontSize: 32, color: 'warning.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'warning.main' }}>
                    Intensity
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  How much effort or commitment is required?
                </Typography>
                <ToggleButtonGroup
                  value={behaviorIntensity}
                  exclusive
                  onChange={(_, value) => value && setBehaviorIntensity(value)}
                  fullWidth
                  sx={{ mb: 2 }}
                >
                  <ToggleButton value="low" sx={{ py: 1.5, fontWeight: 600 }}>
                    Low
                  </ToggleButton>
                  <ToggleButton value="high" sx={{ py: 1.5, fontWeight: 600 }}>
                    High
                  </ToggleButton>
                </ToggleButtonGroup>
                <Box sx={{ mt: 2, p: 2, borderRadius: 2, backgroundColor: 'rgba(255, 152, 0, 0.05)' }}>
                  <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>
                    {behaviorIntensity === 'low' ? 'Easy & Simple' : 'Significant Effort'}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {behaviorIntensity === 'low'
                      ? 'Minimal effort, quick to complete'
                      : 'Requires dedication and focus'}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>

          {/* Behavior Type Result */}
          <Box sx={{ mt: 6 }}>
            <Card
              sx={{
                p: 4,
                border: '2px solid',
                borderColor: 'success.main',
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                boxShadow: '0 8px 32px rgba(76, 175, 80, 0.15)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <CheckCircleIcon sx={{ fontSize: 32, color: 'success.main' }} />
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'success.main' }}>
                  Your Behavior Type
                </Typography>
              </Box>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}>
                {behaviorDuration === 'one-time' && behaviorFrequency === 'one-time' && behaviorIntensity === 'low'
                  ? 'Green Path (One-Time, Low Effort)'
                  : behaviorDuration === 'one-time' && behaviorFrequency === 'one-time' && behaviorIntensity === 'high'
                    ? 'Purple Path (One-Time, High Effort)'
                    : behaviorDuration === 'ongoing' && behaviorFrequency === 'recurring' && behaviorIntensity === 'low'
                      ? 'Blue Path (Ongoing, Recurring, Low Effort)'
                      : behaviorDuration === 'ongoing' && behaviorFrequency === 'recurring' && behaviorIntensity === 'high'
                        ? 'Red Path (Ongoing, Recurring, High Effort)'
                        : 'Custom Behavior Type'}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                {behaviorDuration === 'one-time' && behaviorFrequency === 'one-time' && behaviorIntensity === 'low'
                  ? 'Perfect for quick actions like registering, signing up, or making a one-time donation. These are easy wins that require minimal commitment.'
                  : behaviorDuration === 'one-time' && behaviorFrequency === 'one-time' && behaviorIntensity === 'high'
                    ? 'Ideal for significant one-time commitments like completing a certification program or organizing a major event. Requires focused effort but happens once.'
                    : behaviorDuration === 'ongoing' && behaviorFrequency === 'recurring' && behaviorIntensity === 'low'
                      ? 'Great for building habits like attending weekly meetings, reading monthly newsletters, or participating in regular community activities. Easy to maintain over time.'
                      : behaviorDuration === 'ongoing' && behaviorFrequency === 'recurring' && behaviorIntensity === 'high'
                        ? 'Best for long-term commitments like volunteering regularly, leading programs, or maintaining active participation. Requires sustained dedication.'
                        : 'Your combination creates a unique behavior type. We can help you find the right approach.'}
              </Typography>
              <Grid container spacing={3}>
                {[
                  {
                    title: 'Recommended Action',
                    description:
                      behaviorIntensity === 'low'
                        ? 'Start with our quick registration process'
                        : 'Explore our comprehensive programs',
                    action: behaviorIntensity === 'low' ? 'Register Now' : 'View Programs',
                    path: behaviorIntensity === 'low' ? '/contact' : '/focus-areas',
                    color: 'primary',
                  },
                  {
                    title: 'Next Steps',
                    description:
                      behaviorFrequency === 'recurring'
                        ? 'Join our regular activities and events'
                        : 'Complete your one-time action',
                    action: behaviorFrequency === 'recurring' ? 'Browse Events' : 'Get Started',
                    path: behaviorFrequency === 'recurring' ? '/events' : '/contact',
                    color: 'success',
                  },
                ].map((item) => (
                  <Grid size={{ xs: 12, md: 6 }} key={item.title}>
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        border: '2px solid',
                        borderColor: `${item.color}.main`,
                        backgroundColor: `${item.color}.main`,
                        color: 'white',
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: `0 8px 24px ${item.color}40`,
                        },
                      }}
                    >
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>
                        {item.description}
                      </Typography>
                      <Button
                        component={RouterLink}
                        to={item.path}
                        variant="contained"
                        color={item.color as 'primary' | 'success'}
                        fullWidth
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          backgroundColor: 'white',
                          color: `${item.color}.main`,
                          fontWeight: 700,
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          },
                        }}
                      >
                        {item.action}
                      </Button>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Box>
        </Container>
      </Box>

      {/* BEHAVIOR CHANGE STRATEGIES: Support lasting behavior change */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          backgroundColor: 'rgba(0, 35, 149, 0.03)',
          position: 'relative',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<AssignmentIcon />}
              label="Behavior Change Strategies"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Make Lasting Changes
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              We provide proven strategies to help you adopt new behaviors and achieve your goals. Start your journey today.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Goal Setting */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <FlagIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Set Your Goals
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Define clear, achievable goals to guide your journey. Research shows that setting specific goals increases success rates by 42%.
                </Typography>
                <Stack spacing={2}>
                  {[
                    { id: '1', goal: 'Join a program this month', progress: 0, target: 1 },
                    { id: '2', goal: 'Attend 3 events', progress: 0, target: 3 },
                    { id: '3', goal: 'Complete a course', progress: 0, target: 1 },
                  ].map((goalItem) => (
                    <Box
                      key={goalItem.id}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'divider',
                        backgroundColor: 'rgba(0, 35, 149, 0.02)',
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {goalItem.goal}
                        </Typography>
                        <Chip
                          label={`${goalItem.progress}/${goalItem.target}`}
                          size="small"
                          color="primary"
                          sx={{ fontWeight: 700 }}
                        />
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={(goalItem.progress / goalItem.target) * 100}
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: 'rgba(0, 35, 149, 0.1)',
                        }}
                      />
                    </Box>
                  ))}
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    startIcon={<FlagIcon />}
                    onClick={() => {
                      showFeedback('Goal setting feature coming soon!', 'info');
                      setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                    }}
                    sx={{ mt: 2 }}
                  >
                    Set New Goal
                  </Button>
                </Stack>
              </Card>
            </Grid>

            {/* Progress Tracking */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'info.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <BarChartIcon sx={{ fontSize: 32, color: 'info.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'info.main' }}>
                    Track Your Progress
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Monitor your journey with visual progress indicators. Seeing your progress motivates continued action.
                </Typography>
                <Stack spacing={3}>
                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Overall Engagement
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        {satisfactionMetrics.interactions}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={Math.min(satisfactionMetrics.interactions * 10, 100)}
                      sx={{
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: 'rgba(0, 35, 149, 0.1)',
                        '& .MuiLinearProgress-bar': {
                          background: 'linear-gradient(90deg, #002395 0%, #ED2939 100%)',
                        },
                      }}
                    />
                  </Box>
                  <Grid container spacing={2}>
                    {[
                      { label: 'Programs Joined', value: 0, total: 5, color: 'primary' },
                      { label: 'Events Attended', value: 0, total: 10, color: 'success' },
                      { label: 'Skills Learned', value: 0, total: 8, color: 'warning' },
                    ].map((stat) => (
                      <Grid size={{ xs: 12 }} key={stat.label}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            border: '1px solid',
                            borderColor: 'divider',
                            backgroundColor: 'rgba(0, 35, 149, 0.02)',
                          }}
                        >
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="caption" sx={{ fontWeight: 600 }}>
                              {stat.label}
                            </Typography>
                            <Typography variant="caption" sx={{ fontWeight: 700, color: `${stat.color}.main` }}>
                              {stat.value}/{stat.total}
                            </Typography>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={(stat.value / stat.total) * 100}
                            color={stat.color as 'primary' | 'success' | 'warning'}
                            sx={{ height: 6, borderRadius: 3 }}
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Stack>
              </Card>
            </Grid>

            {/* Commitment Devices */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'success.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(76, 175, 80, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <HandshakeIcon sx={{ fontSize: 32, color: 'success.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'success.main' }}>
                    Make a Commitment
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Public commitments increase accountability and success rates. Share your commitment to stay motivated.
                </Typography>
                <Stack spacing={2}>
                  {userCommitments.length === 0 ? (
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        border: '2px dashed',
                        borderColor: 'divider',
                        textAlign: 'center',
                      }}
                    >
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        No commitments yet. Make your first commitment to get started!
                      </Typography>
                    </Box>
                  ) : (
                    userCommitments.map((commitment, index) => (
                      <Box
                        key={index}
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          border: '1px solid',
                          borderColor: 'success.main',
                          backgroundColor: 'rgba(76, 175, 80, 0.05)',
                        }}
                      >
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {commitment}
                        </Typography>
                      </Box>
                    ))
                  )}
                  <Button
                    variant="contained"
                    color="success"
                    fullWidth
                    startIcon={<HandshakeIcon />}
                    onClick={() => {
                      const newCommitment = 'I commit to joining a program this month';
                      setUserCommitments([...userCommitments, newCommitment]);
                      showFeedback('Commitment saved! You can do this!', 'success');
                      setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                    }}
                    sx={{ mt: 2 }}
                  >
                    Make a Commitment
                  </Button>
                </Stack>
              </Card>
            </Grid>

            {/* Rewards and Incentives */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'warning.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(255, 152, 0, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <EmojiEventsIcon sx={{ fontSize: 32, color: 'warning.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'warning.main' }}>
                    Earn Rewards
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Celebrate your achievements with badges and rewards. Rewards reinforce positive behaviors and motivate continued progress.
                </Typography>
                <Grid container spacing={2}>
                  {[
                    { name: 'First Steps', icon: <FlagIcon />, earned: false, description: 'Complete registration' },
                    { name: 'Active Member', icon: <PeopleIcon />, earned: false, description: 'Join your first event' },
                    { name: 'Learner', icon: <SchoolIcon />, earned: false, description: 'Complete a course' },
                    { name: 'Community Hero', icon: <VolunteerActivismIcon />, earned: false, description: 'Volunteer 10 hours' },
                  ].map((badge) => (
                    <Grid size={{ xs: 6 }} key={badge.name}>
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          border: '2px solid',
                          borderColor: badge.earned ? 'warning.main' : 'divider',
                          backgroundColor: badge.earned ? 'rgba(255, 152, 0, 0.1)' : 'rgba(0, 0, 0, 0.02)',
                          textAlign: 'center',
                          opacity: badge.earned ? 1 : 0.6,
                        }}
                      >
                        <Box sx={{ color: badge.earned ? 'warning.main' : 'text.secondary', mb: 1 }}>
                          {badge.icon}
                        </Box>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>
                          {badge.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                          {badge.description}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                <Button
                  variant="outlined"
                  color="warning"
                  fullWidth
                  startIcon={<EmojiEventsIcon />}
                  onClick={() => {
                    showFeedback('Keep progressing to unlock rewards!', 'info');
                  }}
                  sx={{ mt: 3 }}
                >
                  View All Rewards
                </Button>
              </Card>
            </Grid>
          </Grid>

          {/* Reminders and Social Support */}
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  border: '2px solid',
                  borderColor: 'info.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <NotificationsIcon sx={{ fontSize: 32, color: 'info.main' }} />
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'info.main' }}>
                    Set Reminders
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Get timely reminders to help you stay on track. Regular prompts increase behavior adherence by 65%.
                </Typography>
                <Button
                  variant={remindersEnabled ? 'contained' : 'outlined'}
                  color="info"
                  fullWidth
                  startIcon={<NotificationsIcon />}
                  onClick={() => {
                    setRemindersEnabled(!remindersEnabled);
                    showFeedback(
                      remindersEnabled ? 'Reminders disabled' : "Reminders enabled! We'll help you stay on track.",
                      remindersEnabled ? 'info' : 'success'
                    );
                  }}
                >
                  {remindersEnabled ? 'Reminders Enabled' : 'Enable Reminders'}
                </Button>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <GroupAddIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Social Support
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Connect with others on similar journeys. Social support increases success rates and makes the journey more enjoyable.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<GroupAddIcon />}
                  component={RouterLink}
                  to="/contact"
                  onClick={() => showFeedback('Connecting you with the community...', 'info')}
                >
                  Join Support Group
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CHEATING: Smart Shortcuts - Alternative paths to success */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.05) 0%, rgba(237, 41, 57, 0.05) 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<BoltIcon />}
              label="Smart Shortcuts"
              color="warning"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Looking for a Faster Path?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem', mb: 2 }}>
              We understand that sometimes you need shortcuts to overcome obstacles. These smart shortcuts are intentionally designed to help you progress when you feel stuck.
            </Typography>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                p: 2,
                borderRadius: 2,
                backgroundColor: 'rgba(255, 152, 0, 0.1)',
                border: '1px solid',
                borderColor: 'warning.main',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 152, 0, 0.15)',
                },
              }}
              onClick={() => setShowShortcutsInfo(!showShortcutsInfo)}
            >
              <InfoOutlinedIcon sx={{ fontSize: 20, color: 'warning.main' }} />
              <Typography variant="caption" sx={{ fontWeight: 600, color: 'warning.main' }}>
                Why we offer shortcuts
              </Typography>
            </Box>
            {showShortcutsInfo && (
              <Box
                sx={{
                  mt: 3,
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid',
                  borderColor: 'warning.main',
                  maxWidth: '600px',
                  mx: 'auto',
                  textAlign: 'left',
                }}
              >
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  <strong>Our Philosophy:</strong> We intentionally design shortcuts to help you overcome limitations and feel progress when you're stuck. 
                  These aren't loopholes to exploit—they're alternative paths we've created to enhance your experience. 
                  Use them when you need a boost, but remember: the regular path still offers the most rewarding journey.
                </Typography>
              </Box>
            )}
          </Box>

          {!shortcutsUnlocked ? (
            <Card
              sx={{
                p: 6,
                textAlign: 'center',
                border: '2px dashed',
                borderColor: 'divider',
                borderRadius: 3,
                backgroundColor: 'rgba(0, 0, 0, 0.02)',
              }}
            >
              <LockOpenIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2, opacity: 0.5 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                Unlock Smart Shortcuts
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: '500px', mx: 'auto' }}>
                Shortcuts are available but limited. Unlock them by completing at least one interaction on the page, or use them when you feel stuck.
              </Typography>
              <Button
                variant="contained"
                color="warning"
                size="large"
                startIcon={<VpnKeyIcon />}
                onClick={() => {
                  if (satisfactionMetrics.interactions >= 1 || shortcutsUsed === 0) {
                    setShortcutsUnlocked(true);
                    showFeedback('Shortcuts unlocked! Use them wisely.', 'success');
                    setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                  } else {
                    showFeedback('Complete at least one action to unlock shortcuts', 'warning');
                  }
                }}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  borderRadius: 3,
                }}
              >
                Unlock Shortcuts
              </Button>
            </Card>
          ) : (
            <Grid container spacing={4}>
              {[
                {
                  title: 'Skip Registration Wait',
                  description: 'Get instant access without waiting for approval. Perfect when you want to explore immediately.',
                  icon: <SpeedIcon />,
                  action: 'Get Instant Access',
                  path: '/contact',
                  limitation: 'Available once per user',
                  color: 'primary',
                },
                {
                  title: 'Fast-Track Program Entry',
                  description: 'Join programs directly without prerequisites. Ideal when you have relevant experience.',
                  icon: <BoltIcon />,
                  action: 'Fast-Track Join',
                  path: '/focus-areas',
                  limitation: 'Limited to 2 programs',
                  color: 'success',
                },
                {
                  title: 'Priority Event Access',
                  description: 'Get early access to popular events. Use when events fill up quickly.',
                  icon: <StarIcon />,
                  action: 'Request Priority',
                  path: '/events',
                  limitation: '3 uses per month',
                  color: 'warning',
                },
                {
                  title: 'Extended Trial Period',
                  description: 'Get extra time to explore before committing. Helpful when you need more time to decide.',
                  icon: <AccessTimeIcon />,
                  action: 'Extend Trial',
                  path: '/about',
                  limitation: 'One-time use',
                  color: 'info',
                },
              ].map((shortcut) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={shortcut.title}>
                  <Card
                    sx={{
                      p: 3,
                      height: '100%',
                      border: '2px solid',
                      borderColor: `${shortcut.color}.main`,
                      borderRadius: 3,
                      background: `linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, rgba(255, 255, 255, 1) 100%)`,
                      position: 'relative',
                      overflow: 'visible',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 8px 24px ${shortcut.color}30`,
                      },
                      '&::before': {
                        content: '"SHORTCUT"',
                        position: 'absolute',
                        top: -12,
                        right: 16,
                        px: 1,
                        py: 0.5,
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        color: `${shortcut.color}.main`,
                        backgroundColor: 'white',
                        border: `2px solid ${shortcut.color}`,
                        borderRadius: 1,
                        letterSpacing: '0.5px',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        background: `linear-gradient(135deg, ${shortcut.color === 'primary' ? 'rgba(0, 35, 149, 0.1)' : shortcut.color === 'success' ? 'rgba(76, 175, 80, 0.1)' : shortcut.color === 'warning' ? 'rgba(255, 152, 0, 0.1)' : 'rgba(0, 35, 149, 0.1)'} 0%, ${shortcut.color === 'primary' ? 'rgba(0, 35, 149, 0.2)' : shortcut.color === 'success' ? 'rgba(76, 175, 80, 0.2)' : shortcut.color === 'warning' ? 'rgba(255, 152, 0, 0.2)' : 'rgba(0, 35, 149, 0.2)'} 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        mt: 1,
                      }}
                    >
                      <Box sx={{ color: `${shortcut.color}.main` }}>{shortcut.icon}</Box>
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mb: 1 }}>
                      {shortcut.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6, minHeight: '3em' }}>
                      {shortcut.description}
                    </Typography>
                    <Chip
                      label={shortcut.limitation}
                      size="small"
                      sx={{
                        mb: 2,
                        fontSize: '0.7rem',
                        height: 24,
                        backgroundColor: `${shortcut.color}15`,
                        color: `${shortcut.color}.main`,
                        fontWeight: 600,
                      }}
                    />
                    <Button
                      component={RouterLink}
                      to={shortcut.path}
                      variant="outlined"
                      color={shortcut.color as 'primary' | 'success' | 'warning' | 'info'}
                      fullWidth
                      size="small"
                      onClick={() => {
                        setShortcutsUsed(shortcutsUsed + 1);
                        showFeedback(`Using shortcut: ${shortcut.title}. Remember, shortcuts are limited!`, 'info');
                        if (shortcutsUsed >= 5) {
                          showFeedback('You\'ve used many shortcuts. Consider trying the regular path for a more rewarding experience.', 'warning');
                        }
                      }}
                      sx={{
                        fontWeight: 600,
                        borderWidth: 2,
                      }}
                    >
                      {shortcut.action}
                    </Button>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          {/* Balance and Monitoring Info */}
          {shortcutsUnlocked && (
            <Box sx={{ mt: 6, textAlign: 'center' }}>
              <Card
                sx={{
                  p: 4,
                  border: '2px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'rgba(0, 0, 0, 0.02)',
                  maxWidth: '800px',
                  mx: 'auto',
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
                  ⚖️ Balance is Key
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
                  Shortcuts used: <strong>{shortcutsUsed}</strong> | Regular interactions: <strong>{satisfactionMetrics.interactions}</strong>
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  Remember: Shortcuts help you overcome obstacles, but the regular path offers deeper learning and more meaningful connections. 
                  Use shortcuts when stuck, but don't miss out on the full experience!
                </Typography>
              </Card>
            </Box>
          )}
        </Container>
      </Box>

      {/* HABIT FORMATION: Make or Change Habits - Lasting behavior change */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          backgroundColor: 'rgba(0, 35, 149, 0.02)',
          position: 'relative',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<LoopIcon />}
              label="Habit Formation"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Build Lasting Habits
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              Transform one-time actions into lasting behaviors. We help you identify goals, overcome barriers, and form habits that stick.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* 1. Identify Goals and Barriers */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <FlagIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    1. Identify Goals & Barriers
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Start by defining your goal and identifying obstacles. Understanding barriers helps us design solutions that work for you.
                </Typography>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      backgroundColor: 'rgba(0, 35, 149, 0.02)',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                      Your Goal
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {userGoal ? `Selected: ${userGoal}` : 'Not set yet. Choose a goal above to get started.'}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'success.main' }}>
                      Barriers Removed
                    </Typography>
                    <Stack spacing={0.5}>
                      <Typography variant="caption" color="text.secondary">
                        ✓ No cost barriers
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        ✓ No complexity barriers
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        ✓ No commitment barriers
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* 2. Utilize Triggers */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'info.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <NotificationsNoneIcon sx={{ fontSize: 32, color: 'info.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'info.main' }}>
                    2. Utilize Triggers
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Triggers remind you to take action. Choose the types that work best for you: visual, time-based, or contextual.
                </Typography>
                <Stack spacing={2}>
                  {habitTriggers.map((trigger) => (
                    <Box
                      key={trigger.id}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        border: '2px solid',
                        borderColor: trigger.enabled ? 'info.main' : 'divider',
                        backgroundColor: trigger.enabled ? 'rgba(0, 35, 149, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {trigger.type === 'visual' ? 'Visual Triggers' : trigger.type === 'time' ? 'Time-Based Reminders' : 'Contextual Prompts'}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {trigger.type === 'visual'
                            ? 'Buttons, badges, and visual cues'
                            : trigger.type === 'time'
                              ? 'Daily or weekly reminders'
                              : 'Location or activity-based prompts'}
                        </Typography>
                      </Box>
                      <Button
                        variant={trigger.enabled ? 'contained' : 'outlined'}
                        color="info"
                        size="small"
                        onClick={() => {
                          setHabitTriggers(
                            habitTriggers.map((t) => (t.id === trigger.id ? { ...t, enabled: !t.enabled } : t))
                          );
                          showFeedback(
                            trigger.enabled ? `${trigger.type} triggers disabled` : `${trigger.type} triggers enabled`,
                            'info'
                          );
                        }}
                      >
                        {trigger.enabled ? 'On' : 'Off'}
                      </Button>
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Grid>

            {/* 3. Simplify the Process */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'success.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(76, 175, 80, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <CheckCircleIcon sx={{ fontSize: 32, color: 'success.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'success.main' }}>
                    3. Simplify the Process
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Break complex goals into small, manageable steps. Each step completed builds momentum toward your habit.
                </Typography>
                <Stack spacing={2}>
                  {[
                    { id: '1', step: 'Register (2 minutes)', completed: false },
                    { id: '2', step: 'Complete profile (5 minutes)', completed: false },
                    { id: '3', step: 'Join first event', completed: false },
                    { id: '4', step: 'Attend regularly', completed: false },
                  ].map((stepItem) => (
                    <Box
                      key={stepItem.id}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: stepItem.completed ? 'success.main' : 'divider',
                        backgroundColor: stepItem.completed ? 'rgba(76, 175, 80, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            backgroundColor: stepItem.completed ? 'success.main' : 'divider',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                          }}
                        >
                          {stepItem.completed ? '✓' : stepItem.id}
                        </Box>
                        <Typography variant="body2" sx={{ fontWeight: stepItem.completed ? 600 : 400 }}>
                          {stepItem.step}
                        </Typography>
                      </Box>
                      {!stepItem.completed && (
                        <Button
                          size="small"
                          variant="outlined"
                          color="success"
                          onClick={() => {
                            showFeedback(`Step ${stepItem.id} completed! Keep going!`, 'success');
                            setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                          }}
                        >
                          Start
                        </Button>
                      )}
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Grid>

            {/* 4. Feedback and Rewards */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'warning.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(255, 152, 0, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <EmojiEventsIcon sx={{ fontSize: 32, color: 'warning.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'warning.main' }}>
                    4. Feedback & Rewards
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Immediate feedback and rewards reinforce positive behaviors. Celebrate every step forward!
                </Typography>
                <Stack spacing={3}>
                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Current Streak
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'warning.main' }}>
                        {habitStreak} days
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={Math.min((habitStreak / 30) * 100, 100)}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: 'rgba(255, 152, 0, 0.1)',
                        '& .MuiLinearProgress-bar': {
                          background: 'linear-gradient(90deg, #FF9800 0%, #ED2939 100%)',
                        },
                      }}
                    />
                  </Box>
                  <Grid container spacing={2}>
                    {[
                      { name: 'First Step', earned: satisfactionMetrics.interactions > 0, points: 10 },
                      { name: 'Week Warrior', earned: habitStreak >= 7, points: 50 },
                      { name: 'Month Master', earned: habitStreak >= 30, points: 200 },
                    ].map((reward) => (
                      <Grid size={{ xs: 4 }} key={reward.name}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            border: '2px solid',
                            borderColor: reward.earned ? 'warning.main' : 'divider',
                            backgroundColor: reward.earned ? 'rgba(255, 152, 0, 0.1)' : 'rgba(0, 0, 0, 0.02)',
                            textAlign: 'center',
                            opacity: reward.earned ? 1 : 0.6,
                          }}
                        >
                          <EmojiEventsIcon
                            sx={{
                              fontSize: 32,
                              color: reward.earned ? 'warning.main' : 'text.secondary',
                              mb: 1,
                            }}
                          />
                          <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>
                            {reward.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                            {reward.points} pts
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Stack>
              </Card>
            </Grid>
          </Grid>

          {/* 5. Social Influence & 6. Iterate and Improve */}
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <GroupsIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    5. Leverage Social Influence
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  See what others are achieving. Social influence motivates and creates a sense of community.
                </Typography>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      backgroundColor: 'rgba(0, 35, 149, 0.02)',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                      Active Community
                    </Typography>
                    <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700 }}>
                      {socialInfluence.peersActive.toLocaleString()}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      people building habits right now
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'success.main' }}>
                      Top Performer
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>
                      {socialInfluence.topPerformer}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {socialInfluence.achievements} achievements unlocked
                    </Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    startIcon={<GroupsIcon />}
                    component={RouterLink}
                    to="/contact"
                    onClick={() => showFeedback('Connecting you with the community...', 'info')}
                  >
                    Join Community
                  </Button>
                </Stack>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  border: '2px solid',
                  borderColor: 'info.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <FeedbackIcon sx={{ fontSize: 32, color: 'info.main' }} />
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'info.main' }}>
                    6. Iterate & Improve
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Your feedback helps us improve. Share your experience and help us make habit formation easier for everyone.
                </Typography>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      backgroundColor: 'rgba(0, 35, 149, 0.02)',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                      Your Progress
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      Interactions: <strong>{satisfactionMetrics.interactions}</strong>
                    </Typography>
                    <Typography variant="body1">
                      Time on page: <strong>{Math.floor(satisfactionMetrics.timeOnPage / 60)}m</strong>
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="info"
                    fullWidth
                    startIcon={<FeedbackIcon />}
                    onClick={() => {
                      showFeedback('Thank you for your feedback! We use it to improve.', 'success');
                      setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                    }}
                  >
                    Share Feedback
                  </Button>
                  <Button
                    variant="outlined"
                    color="info"
                    fullWidth
                    startIcon={<TrendingUpIcon />}
                    onClick={() => {
                      showFeedback('We continuously improve based on user behavior and feedback.', 'info');
                    }}
                  >
                    How We Improve
                  </Button>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SUPPORT CONSCIOUS ACTION: Understand and support user behavior change */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.03) 0%, rgba(237, 41, 57, 0.03) 100%)',
          position: 'relative',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<PsychologyIcon />}
              label="Support Conscious Action"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              We Understand Your Behavior
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              We analyze your current behavior patterns to help you make conscious, informed decisions. Our approach is personalized, simple, and backed by behavioral psychology.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* 1. Understand Current Behavior */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <PersonSearchIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    1. Understand Your Behavior
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  We analyze your current habits, pain points, and motivations to design better solutions for you.
                </Typography>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      backgroundColor: 'rgba(0, 35, 149, 0.02)',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                      Your Current Patterns
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Interactions: {satisfactionMetrics.interactions} | Time: {Math.floor(satisfactionMetrics.timeOnPage / 60)}m | Engagement: {satisfactionMetrics.engagement}%
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'info.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'info.main' }}>
                      Identified Patterns
                    </Typography>
                    <Stack spacing={0.5}>
                      <Typography variant="caption" color="text.secondary">
                        • {satisfactionMetrics.interactions > 3 ? 'Active explorer' : 'New visitor'}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        • {goalProgress > 50 ? 'Goal-oriented' : 'Exploring options'}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        • {shortcutsUsed > 0 ? 'Prefers shortcuts' : 'Takes regular path'}
                      </Typography>
                    </Stack>
                  </Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    startIcon={<PersonSearchIcon />}
                    onClick={() => {
                      showFeedback('We continuously analyze your behavior to improve your experience.', 'info');
                      setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                    }}
                  >
                    Learn More About Your Patterns
                  </Button>
                </Stack>
              </Card>
            </Grid>

            {/* 2. Set Clear Goals */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'success.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(76, 175, 80, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <FlagIcon sx={{ fontSize: 32, color: 'success.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'success.main' }}>
                    2. Set Clear Goals
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Define specific, measurable, attainable, and relevant goals. Clear goals increase success rates significantly.
                </Typography>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'success.main' }}>
                      SMART Goals Framework
                    </Typography>
                    <Stack spacing={0.5}>
                      <Typography variant="caption" color="text.secondary">
                        <strong>S</strong>pecific: {userGoal ? `Goal: ${userGoal}` : 'Not set'}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        <strong>M</strong>easurable: Progress {goalProgress}%
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        <strong>A</strong>ttainable: {goalProgress > 0 ? 'On track' : 'Ready to start'}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        <strong>R</strong>elevant: {userGoal ? 'Aligned with your needs' : 'Choose your goal'}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        <strong>T</strong>ime-bound: {goalProgress > 0 ? 'In progress' : 'Not started'}
                      </Typography>
                    </Stack>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      backgroundColor: 'rgba(0, 0, 0, 0.02)',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                      Goal Progress
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={goalProgress}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: 'rgba(76, 175, 80, 0.1)',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: 'success.main',
                        },
                      }}
                    />
                    <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                      {goalProgress}% complete
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* 3. Leverage Behavioral Psychology */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'info.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <PsychologyIcon sx={{ fontSize: 32, color: 'info.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'info.main' }}>
                    3. Behavioral Psychology
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  We apply proven models like Fogg Behavior Model to understand motivation, ability, and triggers.
                </Typography>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'info.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'info.main' }}>
                      Fogg Behavior Model Applied
                    </Typography>
                    <Stack spacing={1}>
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>
                          Motivation: {emotionalState === 'committed' ? 'High' : emotionalState === 'interested' ? 'Medium' : 'Building'}
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={emotionalState === 'committed' ? 90 : emotionalState === 'interested' ? 60 : 30}
                          color="primary"
                          sx={{ height: 4, borderRadius: 2, mt: 0.5 }}
                        />
                      </Box>
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>
                          Ability: {shortcutsUnlocked ? 'High (shortcuts available)' : 'Medium (standard path)'}
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={shortcutsUnlocked ? 80 : 50}
                          color="success"
                          sx={{ height: 4, borderRadius: 2, mt: 0.5 }}
                        />
                      </Box>
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>
                          Triggers: {habitTriggers.filter((t) => t.enabled).length}/3 active
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={(habitTriggers.filter((t) => t.enabled).length / 3) * 100}
                          color="warning"
                          sx={{ height: 4, borderRadius: 2, mt: 0.5 }}
                        />
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* 4. Design for Simplicity */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'warning.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(255, 152, 0, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <CheckCircleIcon sx={{ fontSize: 32, color: 'warning.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'warning.main' }}>
                    4. Design for Simplicity
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  We reduce barriers, streamline processes, and minimize cognitive load to make actions easy.
                </Typography>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'success.main' }}>
                      Barriers Removed
                    </Typography>
                    <Stack spacing={0.5}>
                      <Typography variant="caption" color="text.secondary">
                        ✓ No cost barriers
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        ✓ No complexity barriers
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        ✓ No commitment barriers
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        ✓ No prerequisite barriers
                      </Typography>
                    </Stack>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      backgroundColor: 'rgba(0, 0, 0, 0.02)',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                      Process Simplification
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      • Registration: 2 minutes
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      • Clear step-by-step guidance
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      • Minimal cognitive load
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          </Grid>

          {/* 5. Feedback & Reinforcement, 6. Social Influence, 7. Personalize, 8. Iterate */}
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  p: 4,
                  border: '2px solid',
                  borderColor: 'warning.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <CheckCircleIcon sx={{ fontSize: 32, color: 'warning.main' }} />
                  <Typography variant="h6" sx={{ fontWeight: 700, color: 'warning.main' }}>
                    5. Feedback & Reinforcement
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Immediate, clear feedback helps you understand the impact of your actions.
                </Typography>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'warning.main',
                    backgroundColor: 'rgba(255, 152, 0, 0.05)',
                  }}
                >
                  <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 1 }}>
                    Recent Feedback
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {satisfactionMetrics.interactions > 0
                      ? `You've completed ${satisfactionMetrics.interactions} interactions. Great progress!`
                      : 'Start interacting to receive feedback'}
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  p: 4,
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <GroupsIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    6. Social Influence
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  See what others are achieving. Social proof motivates action.
                </Typography>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'primary.main',
                    backgroundColor: 'rgba(0, 35, 149, 0.05)',
                  }}
                >
                  <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 1 }}>
                    Community Activity
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 700, color: 'primary.main', mb: 0.5 }}>
                    {socialInfluence.peersActive.toLocaleString()}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    active members
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  p: 4,
                  border: '2px solid',
                  borderColor: 'info.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <SettingsIcon sx={{ fontSize: 32, color: 'info.main' }} />
                  <Typography variant="h6" sx={{ fontWeight: 700, color: 'info.main' }}>
                    7. Personalize & 8. Iterate
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Your experience is tailored to your preferences. We continuously improve based on your behavior.
                </Typography>
                <Stack spacing={2}>
                  <Button
                    variant={personalizedContent ? 'contained' : 'outlined'}
                    color="info"
                    fullWidth
                    size="small"
                    startIcon={<SettingsIcon />}
                    onClick={() => {
                      setPersonalizedContent(!personalizedContent);
                      showFeedback(
                        personalizedContent ? 'Personalization disabled' : 'Personalization enabled! Content tailored to you.',
                        'info'
                      );
                    }}
                  >
                    {personalizedContent ? 'Personalized' : 'Enable Personalization'}
                  </Button>
                  <Button
                    variant="outlined"
                    color="info"
                    fullWidth
                    size="small"
                    startIcon={<AnalyticsIcon />}
                    onClick={() => {
                      showFeedback('We analyze behavior patterns to continuously improve your experience.', 'info');
                    }}
                  >
                    View Analytics
                  </Button>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* UNDERSTANDING THE PRODUCT: Business goals, audience, journey, and brand */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          backgroundColor: 'rgba(0, 35, 149, 0.02)',
          position: 'relative',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<AccountTreeIcon />}
              label="Understanding the Product"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              We Know Our Product Inside Out
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              Every design decision is informed by deep understanding of our business goals, target audience, user journey, and brand identity.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* 1. Business Goals */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <BusinessCenterIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Business Goals
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Our design aligns with clear business objectives to create meaningful impact.
                </Typography>
                <Stack spacing={2}>
                  {[
                    { goal: 'Increase Community Engagement', progress: 85, icon: <PeopleIcon /> },
                    { goal: 'Promote Education & Integration', progress: 90, icon: <SchoolIcon /> },
                    { goal: 'Build Strong Partnerships', progress: 75, icon: <HandshakeIcon /> },
                    { goal: 'Expand European Reach', progress: 70, icon: <PublicIcon /> },
                  ].map((item) => (
                    <Box key={item.goal}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Box sx={{ color: 'primary.main' }}>{item.icon}</Box>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {item.goal}
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                          {item.progress}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={item.progress}
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: 'rgba(0, 35, 149, 0.1)',
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Grid>

            {/* 2. Target Audience */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'success.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(76, 175, 80, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <PeopleOutlineIcon sx={{ fontSize: 32, color: 'success.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'success.main' }}>
                    Target Audience
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  We serve diverse communities with tailored experiences for each group.
                </Typography>
                <Grid container spacing={2}>
                  {[
                    { group: 'Seniors', description: 'Digital literacy & social integration', icon: <PersonIcon />, color: 'primary' },
                    { group: 'Youth', description: 'Education & career development', icon: <PeopleIcon />, color: 'success' },
                    { group: 'Migrants', description: 'Cultural integration & language', icon: <PublicIcon />, color: 'info' },
                    { group: 'Organizations', description: 'Partnerships & collaboration', icon: <BusinessIcon />, color: 'warning' },
                  ].map((audience) => (
                    <Grid size={{ xs: 6 }} key={audience.group}>
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          border: '1px solid',
                          borderColor: 'divider',
                          backgroundColor: 'rgba(0, 0, 0, 0.02)',
                          textAlign: 'center',
                          height: '100%',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            borderColor: `${audience.color}.main`,
                            backgroundColor: `${audience.color}10`,
                          },
                        }}
                      >
                        <Box sx={{ color: `${audience.color}.main`, mb: 1 }}>{audience.icon}</Box>
                        <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                          {audience.group}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                          {audience.description}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Card>
            </Grid>

            {/* 3. User Journey */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'info.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <RouteIcon sx={{ fontSize: 32, color: 'info.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'info.main' }}>
                    User Journey
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  From first contact to achieving goals - we've mapped every step of your journey.
                </Typography>
                <Stepper orientation="vertical" activeStep={goalProgress > 0 ? Math.min(3, Math.floor(goalProgress / 25)) : -1}>
                  {[
                    { label: 'Discovery', description: 'Learn about MITRA France', time: '2 min' },
                    { label: 'Registration', description: 'Join our community', time: '2 min' },
                    { label: 'Engagement', description: 'Participate in programs', time: 'Ongoing' },
                    { label: 'Achievement', description: 'Reach your goals', time: 'Continuous' },
                  ].map((step, index) => (
                    <Step key={step.label}>
                      <StepLabel
                        optional={
                          <Typography variant="caption" color="text.secondary">
                            {step.description} • {step.time}
                          </Typography>
                        }
                      >
                        {step.label}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Card>
            </Grid>

            {/* 4. Competitor Analysis & Differentiation */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'warning.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(255, 152, 0, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <CompareIcon sx={{ fontSize: 32, color: 'warning.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'warning.main' }}>
                    Our Unique Advantages
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  What sets us apart from others in the field.
                </Typography>
                <Stack spacing={2}>
                  {[
                    { advantage: '100% Free Access', description: 'No hidden costs, ever' },
                    { advantage: 'Multilingual Support', description: 'French, English, and more' },
                    { advantage: 'European Network', description: '20+ European projects' },
                    { advantage: '10+ Years Experience', description: 'Proven track record' },
                    { advantage: 'Community-Driven', description: 'Built by and for the community' },
                  ].map((item) => (
                    <Box
                      key={item.advantage}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'warning.main',
                        backgroundColor: 'rgba(255, 152, 0, 0.05)',
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, color: 'warning.main' }}>
                        {item.advantage}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Grid>
          </Grid>

          {/* 5. Brand Consistency */}
          <Box sx={{ mt: 6 }}>
            <Card
              sx={{
                p: 4,
                border: '2px solid',
                borderColor: 'primary.main',
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <PaletteIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                  Brand Consistency
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>
                Our design reflects our brand identity: French Blue (#002395) and French Red (#ED2939) represent our commitment to France and our vibrant community.
              </Typography>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      border: '2px solid',
                      borderColor: 'primary.main',
                      backgroundColor: 'primary.main',
                      color: 'white',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      French Blue
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                      #002395
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.8 }}>
                      Trust, stability, professionalism
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      border: '2px solid',
                      borderColor: 'error.main',
                      backgroundColor: 'error.main',
                      color: 'white',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      French Red
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                      #ED2939
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.8 }}>
                      Energy, passion, community
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      border: '2px solid',
                      borderColor: 'divider',
                      backgroundColor: 'rgba(0, 0, 0, 0.02)',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      Our Values
                    </Typography>
                    <Stack spacing={1} sx={{ mt: 2 }}>
                      <Typography variant="caption" color="text.secondary">
                        • Inclusivity
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        • Education
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        • Community
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        • Innovation
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Box>
        </Container>
      </Box>

      {/* CONCEPTUAL DESIGN: The Big Idea - Vision and Framework */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.03) 0%, rgba(237, 41, 57, 0.03) 100%)',
          position: 'relative',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<LightbulbIcon />}
              label="Conceptual Design"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Our Design Vision
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              Every element of our platform is built on a solid conceptual foundation. We've defined the problem, understood our users, and created a coherent vision that guides every design decision.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* 1. Problem Definition */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <LightbulbIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    1. Problem Definition
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  We identified the core challenges facing our communities and designed solutions to address them.
                </Typography>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'error.main',
                      backgroundColor: 'rgba(237, 41, 57, 0.05)',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 700, mb: 1, color: 'error.main' }}>
                      The Challenge
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      Many people in our communities face barriers to education, digital literacy, and social integration. They need accessible, free resources to grow and connect.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 700, mb: 1, color: 'success.main' }}>
                      Our Solution
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      A comprehensive platform offering free education, digital skills training, cultural activities, and community support - all designed to break down barriers and create opportunities.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'primary.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 700, mb: 1, color: 'primary.main' }}>
                      Design Goal
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      Create an intuitive, accessible, and engaging experience that makes it easy for anyone to find and access the resources they need.
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* 2. User Personas and Scenarios */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'success.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(76, 175, 80, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <PersonPinIcon sx={{ fontSize: 32, color: 'success.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'success.main' }}>
                    2. User Personas & Scenarios
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  We've developed detailed personas representing our target users and scenarios showing how they interact with our platform.
                </Typography>
                <Tabs value={selectedPersona} onChange={(_, value) => value && setSelectedPersona(value)} sx={{ mb: 3 }}>
                  <Tab label="Senior" value="senior" />
                  <Tab label="Youth" value="youth" />
                  <Tab label="Migrant" value="migrant" />
                </Tabs>
                <Box sx={{ minHeight: '200px' }}>
                  {selectedPersona === 'senior' && (
                    <Box>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                        Marie, 68, Retired Teacher
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                        <strong>Goal:</strong> Learn digital skills to stay connected with family
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                        <strong>Scenario:</strong> Marie visits our site, finds the Digital Literacy program, registers in 2 minutes, and starts learning at her own pace.
                      </Typography>
                      <Chip label="Digital Literacy Program" color="primary" size="small" sx={{ mr: 1 }} />
                      <Chip label="Self-Paced Learning" color="info" size="small" />
                    </Box>
                  )}
                  {selectedPersona === 'youth' && (
                    <Box>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                        Ahmed, 22, University Student
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                        <strong>Goal:</strong> Build skills and network for career development
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                        <strong>Scenario:</strong> Ahmed explores our programs, joins a Media & Arts workshop, connects with peers, and gains valuable experience for his portfolio.
                      </Typography>
                      <Chip label="Media & Arts" color="primary" size="small" sx={{ mr: 1 }} />
                      <Chip label="Networking" color="success" size="small" />
                    </Box>
                  )}
                  {selectedPersona === 'migrant' && (
                    <Box>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                        Sofia, 35, New to France
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                        <strong>Goal:</strong> Integrate into French society and learn the language
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                        <strong>Scenario:</strong> Sofia discovers our Intercultural Education programs, attends cultural events, practices French, and builds a supportive community.
                      </Typography>
                      <Chip label="Intercultural Education" color="primary" size="small" sx={{ mr: 1 }} />
                      <Chip label="Language Support" color="warning" size="small" />
                    </Box>
                  )}
                </Box>
              </Card>
            </Grid>

            {/* 3. Information Architecture */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'info.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ArchitectureIcon sx={{ fontSize: 32, color: 'info.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'info.main' }}>
                    3. Information Architecture
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Our content is organized in a clear, logical structure that makes navigation intuitive.
                </Typography>
                <Stack spacing={2}>
                  {[
                    { level: 'Home', items: ['Overview', 'Quick Actions', 'Focus Areas'] },
                    { level: 'Programs', items: ['Education', 'Digital Skills', 'Arts & Media'] },
                    { level: 'Community', items: ['Events', 'Volunteering', 'Partners'] },
                    { level: 'Support', items: ['Contact', 'Resources', 'FAQ'] },
                  ].map((section) => (
                    <Box
                      key={section.level}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'info.main',
                        backgroundColor: 'rgba(0, 35, 149, 0.05)',
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 700, mb: 1, color: 'info.main' }}>
                        {section.level}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap">
                        {section.items.map((item) => (
                          <Chip key={item} label={item} size="small" sx={{ fontSize: '0.7rem' }} />
                        ))}
                      </Stack>
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Grid>

            {/* 4. Design Principles */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'warning.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(255, 152, 0, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <RuleIcon sx={{ fontSize: 32, color: 'warning.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'warning.main' }}>
                    4. Design Principles
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  High-level principles that guide every design decision and ensure consistency.
                </Typography>
                <Stack spacing={2}>
                  {[
                    { principle: 'Accessibility First', description: 'Design for everyone, regardless of ability or background' },
                    { principle: 'Simplicity', description: 'Reduce complexity, remove barriers, make it easy' },
                    { principle: 'Transparency', description: 'Clear information, honest communication, no hidden costs' },
                    { principle: 'Community Focus', description: 'People-first approach, build connections, foster belonging' },
                    { principle: 'Continuous Improvement', description: 'Iterate based on feedback, evolve with user needs' },
                  ].map((item) => (
                    <Box
                      key={item.principle}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'warning.main',
                        backgroundColor: 'rgba(255, 152, 0, 0.05)',
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5, color: 'warning.main' }}>
                        {item.principle}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Grid>
          </Grid>

          {/* 5. Iteration */}
          <Box sx={{ mt: 6 }}>
            <Card
              sx={{
                p: 4,
                border: '2px solid',
                borderColor: 'info.main',
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <RefreshIcon sx={{ fontSize: 32, color: 'info.main' }} />
                <Typography variant="h5" sx={{ fontWeight: 700, color: 'info.main' }}>
                  5. Continuous Iteration
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>
                We continuously refine our design based on user feedback, testing, and stakeholder input. Our iterative approach ensures the platform evolves to meet changing needs.
              </Typography>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'info.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: 700, color: 'info.main', mb: 1 }}>
                      {satisfactionMetrics.interactions}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      User Interactions Tracked
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: 700, color: 'success.main', mb: 1 }}>
                      {userCommitments.length + behaviorGoals.length}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Goals & Commitments
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'warning.main',
                      backgroundColor: 'rgba(255, 152, 0, 0.05)',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: 700, color: 'warning.main', mb: 1 }}>
                      Ongoing
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Design Improvements
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Button
                  variant="outlined"
                  color="info"
                  startIcon={<FeedbackIcon />}
                  onClick={() => {
                    showFeedback('Your feedback drives our design improvements. Thank you!', 'success');
                    setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                  }}
                  sx={{ px: 4 }}
                >
                  Share Your Feedback
                </Button>
              </Box>
            </Card>
          </Box>
        </Container>
      </Box>

      {/* TELL USER & ASK USER: Effective communication and engagement */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          backgroundColor: 'rgba(0, 35, 149, 0.02)',
          position: 'relative',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<QuestionAnswerIcon />}
              label="Tell User & Ask User"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Clear Communication, Active Engagement
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              We tell you what actions are available and ask for your input to create a personalized, engaging experience.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Tell User Section */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <AnnouncementIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Tell User
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  We provide clear, concise information through visual cues, helpful microcopy, and timely notifications.
                </Typography>

                <Stack spacing={3}>
                  {/* Visual Cues */}
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'primary.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                      <PaletteIcon sx={{ fontSize: 20, color: 'primary.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        Visual Cues
                      </Typography>
                    </Box>
                    <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 1 }}>
                      <Chip icon={<CheckCircleIcon />} label="Success" color="success" size="small" />
                      <Chip icon={<InfoIcon />} label="Info" color="info" size="small" />
                      <Chip icon={<WarningIcon />} label="Warning" color="warning" size="small" />
                      <Chip icon={<ErrorOutlineIcon />} label="Error" color="error" size="small" />
                    </Stack>
                    <Typography variant="caption" color="text.secondary">
                      Colors, icons, and typography signal important elements and guide your attention
                    </Typography>
                  </Box>

                  {/* Microcopy */}
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'info.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                      <TextFieldsIcon sx={{ fontSize: 20, color: 'info.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'info.main' }}>
                        Microcopy
                      </Typography>
                    </Box>
                    <Stack spacing={1}>
                      <Tooltip title="This button will take you to the registration form">
                        <Button variant="outlined" size="small" fullWidth>
                          Register Now
                        </Button>
                      </Tooltip>
                      <Tooltip title="Learn more about our programs and services">
                        <Button variant="outlined" size="small" fullWidth>
                          Learn More
                        </Button>
                      </Tooltip>
                    </Stack>
                    <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                      Short, helpful text guides you to take appropriate actions
                    </Typography>
                  </Box>

                  {/* Notifications */}
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                      <NotificationsIcon sx={{ fontSize: 20, color: 'success.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'success.main' }}>
                        Notifications
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 1,
                        backgroundColor: 'rgba(76, 175, 80, 0.1)',
                        border: '1px solid',
                        borderColor: 'success.main',
                      }}
                    >
                      <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>
                        Live Update
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {liveActivity.recent} people joined in the last hour
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                      Real-time updates keep you informed about system status
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* Ask User Section */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'success.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(76, 175, 80, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <QuestionAnswerIcon sx={{ fontSize: 32, color: 'success.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'success.main' }}>
                    Ask User
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  We ask for your input to create a personalized experience and gather valuable feedback.
                </Typography>

                <Stack spacing={3}>
                  {/* Interactive Elements */}
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                      <TouchAppIcon sx={{ fontSize: 20, color: 'success.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'success.main' }}>
                        Interactive Elements
                      </Typography>
                    </Box>
                    <Stack spacing={1.5}>
                      <Button
                        variant="outlined"
                        color="success"
                        fullWidth
                        onClick={() => {
                          setShowFeedbackForm(!showFeedbackForm);
                          showFeedback('Interactive elements engage you with the interface', 'info');
                        }}
                      >
                        {showFeedbackForm ? 'Hide Form' : 'Show Feedback Form'}
                      </Button>
                      <Accordion expanded={showFeedbackForm} onChange={() => setShowFeedbackForm(!showFeedbackForm)}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            Progressive Disclosure
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography variant="caption" color="text.secondary">
                            Click to reveal more information. This technique reduces cognitive load.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </Stack>
                  </Box>

                  {/* Feedback Mechanisms */}
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'warning.main',
                      backgroundColor: 'rgba(255, 152, 0, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                      <RateReviewIcon sx={{ fontSize: 20, color: 'warning.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'warning.main' }}>
                        Feedback Mechanisms
                      </Typography>
                    </Box>
                    <Stack spacing={2}>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                          Rate Your Experience
                        </Typography>
                        <Rating
                          value={userRating}
                          onChange={(_, newValue) => {
                            setUserRating(newValue);
                            showFeedback(
                              newValue ? `Thank you for your ${newValue}-star rating!` : 'Rating removed',
                              'success'
                            );
                            setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                          }}
                          size="large"
                        />
                      </Box>
                      {showFeedbackForm && (
                        <Box>
                          <TextField
                            fullWidth
                            multiline
                            rows={3}
                            placeholder="Share your thoughts, suggestions, or report issues..."
                            value={userFeedback}
                            onChange={(e) => setUserFeedback(e.target.value)}
                            sx={{ mb: 1 }}
                          />
                          <Button
                            variant="contained"
                            color="warning"
                            fullWidth
                            onClick={() => {
                              if (userFeedback.trim()) {
                                showFeedback('Thank you for your feedback! We value your input.', 'success');
                                setUserFeedback('');
                                setShowFeedbackForm(false);
                                setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                              } else {
                                showFeedback('Please enter your feedback', 'warning');
                              }
                            }}
                          >
                            Submit Feedback
                          </Button>
                        </Box>
                      )}
                    </Stack>
                  </Box>

                  {/* Forms and Surveys */}
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'info.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                      <AssignmentIcon sx={{ fontSize: 20, color: 'info.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'info.main' }}>
                        Quick Survey
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ mb: 2, fontWeight: 600 }}>
                      What brings you here today?
                    </Typography>
                    <Stack spacing={1}>
                      {['Learn new skills', 'Connect with community', 'Find volunteer opportunities', 'Explore programs'].map(
                        (option) => (
                          <Button
                            key={option}
                            variant="outlined"
                            size="small"
                            fullWidth
                            onClick={() => {
                              showFeedback(`You selected: ${option}. We'll personalize your experience!`, 'info');
                              setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                            }}
                            sx={{ justifyContent: 'flex-start', textTransform: 'none' }}
                          >
                            {option}
                          </Button>
                        )
                      )}
                    </Stack>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CLEAR THE PAGE OF DISTRACTIONS: Focus on what matters */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(248, 249, 250, 1) 100%)',
          position: 'relative',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<VisibilityOffIcon />}
              label="Clear Design"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Focus on What Matters
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              We've designed this page to minimize distractions and help you focus on the most important information. Every element serves a purpose.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* 1. Keep it Simple */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0, 35, 149, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <CheckCircleIcon sx={{ fontSize: 24, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    1. Keep it Simple
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Clean, straightforward design with only essential elements. No excessive images or icons that distract from the main content.
                </Typography>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'rgba(0, 35, 149, 0.03)',
                    border: '1px dashed',
                    borderColor: 'divider',
                  }}
                >
                  <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 1 }}>
                    Design Principles Applied:
                  </Typography>
                  <Stack spacing={0.5}>
                    <Typography variant="caption" color="text.secondary">
                      ✓ Minimal visual elements
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      ✓ Essential icons only
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      ✓ Clear, focused content
                    </Typography>
                  </Stack>
                </Box>
              </Card>
            </Grid>

            {/* 2. Use White Space */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0, 35, 149, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <LayersIcon sx={{ fontSize: 24, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    2. Use White Space
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Generous spacing between elements provides visual relief and makes information easier to process.
                </Typography>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: 'rgba(248, 249, 250, 1)',
                    border: '1px solid',
                    borderColor: 'divider',
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                    Negative Space
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    This card demonstrates proper use of white space for better readability and focus.
                  </Typography>
                </Box>
              </Card>
            </Grid>

            {/* 3. Visual Hierarchy */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0, 35, 149, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <TrendingUpIcon sx={{ fontSize: 24, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    3. Visual Hierarchy
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Content organized by importance using font sizes, colors, and positioning to guide your attention.
                </Typography>
                <Stack spacing={2}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Most Important
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    Secondary Information
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Supporting details and additional context
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Fine print and less critical information
                  </Typography>
                </Stack>
              </Card>
            </Grid>

            {/* 4. Consistent Navigation */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0, 35, 149, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <NavigationIcon sx={{ fontSize: 24, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    4. Consistent Navigation
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Navigation remains consistent throughout the site, reducing confusion and helping you find what you need quickly.
                </Typography>
                <Stack spacing={1.5}>
                  {['Home', 'Programs', 'Events', 'About', 'Contact'].map((item) => (
                    <Button
                      key={item}
                      variant="text"
                      fullWidth
                      sx={{
                        justifyContent: 'flex-start',
                        textTransform: 'none',
                        color: 'text.primary',
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: 'rgba(0, 35, 149, 0.05)',
                        },
                      }}
                      component={RouterLink}
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    >
                      {item}
                    </Button>
                  ))}
                </Stack>
              </Card>
            </Grid>

            {/* 5. Minimize Popups */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0, 35, 149, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <BlockIcon sx={{ fontSize: 24, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    5. Minimize Popups
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  We keep popups and interruptions to a minimum. When we do show notifications, they're contextual and non-disruptive.
                </Typography>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    border: '1px solid',
                    borderColor: 'success.main',
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, color: 'success.main' }}>
                    ✓ No intrusive popups
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Contextual notifications only when needed
                  </Typography>
                </Box>
              </Card>
            </Grid>

            {/* 6. Optimize Load Times */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0, 35, 149, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <SpeedIcon sx={{ fontSize: 24, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    6. Optimize Load Times
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Fast loading times ensure a smooth experience. We optimize images, use lazy loading, and minimize unnecessary resources.
                </Typography>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'rgba(0, 35, 149, 0.03)',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Performance
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: 'success.main' }}>
                      Optimized
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={95}
                    sx={{
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: 'rgba(0, 0, 0, 0.05)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: 'success.main',
                      },
                    }}
                  />
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                    Images optimized • Lazy loading enabled • Minimal resources
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* MAKE IT CLEAR, WHERE TO ACT: Guide users to actionable elements */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          backgroundColor: 'rgba(0, 35, 149, 0.02)',
          position: 'relative',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<TouchAppIcon />}
              label="Clear Actions"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Know Exactly Where to Act
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              Every interactive element is clearly marked and easy to identify. We guide you to the right actions at the right time.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* 1. Use Affordances */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <MouseIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    1. Use Affordances
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Elements look like what they do. Buttons appear clickable, links are distinguishable, and input fields invite text entry.
                </Typography>

                <Stack spacing={2.5}>
                  {/* Clickable Button */}
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                      Clickable Button
                    </Typography>
                    <Button
                      variant="contained"
                      fullWidth
                      onMouseEnter={() => setHoveredElement('button')}
                      onMouseLeave={() => setHoveredElement(null)}
                      onClick={() => {
                        setClickedElement('button');
                        showFeedback('Button clicked! Notice the visual feedback.', 'success');
                        setTimeout(() => setClickedElement(null), 1000);
                      }}
                      sx={{
                        background: 'linear-gradient(135deg, rgba(0, 35, 149, 1) 0%, rgba(0, 35, 149, 0.8) 100%)',
                        boxShadow: hoveredElement === 'button' ? '0 4px 12px rgba(0, 35, 149, 0.4)' : '0 2px 8px rgba(0, 35, 149, 0.2)',
                        transform: hoveredElement === 'button' ? 'translateY(-2px)' : 'none',
                        transition: 'all 0.2s ease',
                        '&:active': {
                          transform: 'translateY(0px)',
                        },
                      }}
                    >
                      Primary Action
                    </Button>
                  </Box>

                  {/* Distinguishable Link */}
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                      Distinguishable Link
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      This is regular text. <Link
                        href="#"
                        onMouseEnter={() => setHoveredElement('link')}
                        onMouseLeave={() => setHoveredElement(null)}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                          e.preventDefault();
                          setClickedElement('link');
                          showFeedback('Link clicked! Links are clearly different from text.', 'info');
                          setTimeout(() => setClickedElement(null), 1000);
                        }}
                        sx={{
                          color: 'primary.main',
                          textDecoration: hoveredElement === 'link' ? 'underline' : 'none',
                          fontWeight: 600,
                          '&:hover': {
                            color: 'primary.dark',
                          },
                        }}
                      >
                        This is a clickable link
                      </Link> that stands out.
                    </Typography>
                  </Box>

                  {/* Input Field */}
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                      Input Field
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="Type here..."
                      variant="outlined"
                      onMouseEnter={() => setHoveredElement('input')}
                      onMouseLeave={() => setHoveredElement(null)}
                      onFocus={() => setHoveredElement('input')}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: hoveredElement === 'input' ? 'rgba(0, 35, 149, 0.02)' : 'white',
                          transition: 'all 0.2s ease',
                        },
                      }}
                    />
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* 2. Visual Hierarchy */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'success.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(76, 175, 80, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <TrendingUpIcon sx={{ fontSize: 32, color: 'success.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'success.main' }}>
                    2. Visual Hierarchy
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Important actions are more prominent through size, color, contrast, and positioning.
                </Typography>

                <Stack spacing={2.5}>
                  {/* Primary Action - Large */}
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                      Primary Action (Most Important)
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      sx={{
                        fontSize: '1.1rem',
                        py: 1.5,
                        fontWeight: 700,
                        boxShadow: '0 4px 12px rgba(0, 35, 149, 0.3)',
                      }}
                      onClick={() => showFeedback('Primary action - largest and most prominent', 'success')}
                    >
                      Get Started Now
                    </Button>
                  </Box>

                  {/* Secondary Action - Medium */}
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                      Secondary Action
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="medium"
                      fullWidth
                      sx={{
                        fontSize: '1rem',
                        py: 1,
                        fontWeight: 600,
                      }}
                      onClick={() => showFeedback('Secondary action - medium prominence', 'info')}
                    >
                      Learn More
                    </Button>
                  </Box>

                  {/* Tertiary Action - Small */}
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                      Tertiary Action (Less Important)
                    </Typography>
                    <Button
                      variant="text"
                      color="primary"
                      size="small"
                      fullWidth
                      sx={{
                        fontSize: '0.9rem',
                        fontWeight: 500,
                      }}
                      onClick={() => showFeedback('Tertiary action - subtle but accessible', 'info')}
                    >
                      Skip for now
                    </Button>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* 3. Consistent Element Patterns */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'info.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <AutoAwesomeIcon sx={{ fontSize: 32, color: 'info.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'info.main' }}>
                    3. Consistent Patterns
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  All interactive elements share the same visual styling, making them instantly recognizable.
                </Typography>

                <Stack spacing={2}>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    All buttons follow the same style:
                  </Typography>
                  {['Action 1', 'Action 2', 'Action 3'].map((label, index) => (
                    <Button
                      key={index}
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => showFeedback(`${label} clicked - consistent styling makes it recognizable`, 'success')}
                      sx={{
                        background: 'linear-gradient(135deg, rgba(0, 35, 149, 1) 0%, rgba(0, 35, 149, 0.8) 100%)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.9) 0%, rgba(0, 35, 149, 0.7) 100%)',
                        },
                      }}
                    >
                      {label}
                    </Button>
                  ))}
                </Stack>
              </Card>
            </Grid>

            {/* 4. Clear Labels and Instructions */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'warning.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(255, 152, 0, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <LabelIcon sx={{ fontSize: 32, color: 'warning.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'warning.main' }}>
                    4. Clear Labels
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Every element has descriptive labels and instructions that explain what it does and what's expected.
                </Typography>

                <Stack spacing={2.5}>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                      Form Field with Clear Label
                    </Typography>
                    <TextField
                      fullWidth
                      label="Enter your email address"
                      placeholder="example@email.com"
                      helperText="We'll use this to send you updates and notifications"
                      variant="outlined"
                    />
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                      Button with Descriptive Label
                    </Typography>
                    <Button
                      variant="contained"
                      color="warning"
                      fullWidth
                      onClick={() => showFeedback('Clear label tells you exactly what will happen', 'success')}
                    >
                      Save and Continue to Next Step
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(255, 152, 0, 0.05)',
                      border: '1px solid',
                      borderColor: 'warning.main',
                    }}
                  >
                    <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>
                      💡 Tip
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Instructions help users understand what to do without guessing
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* 5. Whitespace */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'success.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(76, 175, 80, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <SpaceBarIcon sx={{ fontSize: 32, color: 'success.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'success.main' }}>
                    5. Whitespace
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Generous spacing groups related content and makes interaction points easy to find.
                </Typography>

                <Box
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: 'rgba(248, 249, 250, 1)',
                    border: '1px dashed',
                    borderColor: 'divider',
                  }}
                >
                  <Stack spacing={3}>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, mb: 1.5 }}>
                        Group 1: Related Actions
                      </Typography>
                      <Stack direction="row" spacing={2}>
                        <Button variant="contained" color="success" size="small">
                          Save
                        </Button>
                        <Button variant="outlined" color="success" size="small">
                          Cancel
                        </Button>
                      </Stack>
                    </Box>
                    <Box
                      sx={{
                        height: 2,
                        backgroundColor: 'divider',
                        my: 2,
                      }}
                    />
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, mb: 1.5 }}>
                        Group 2: Different Actions
                      </Typography>
                      <Stack direction="row" spacing={2}>
                        <Button variant="contained" color="primary" size="small">
                          Submit
                        </Button>
                        <Button variant="text" color="primary" size="small">
                          Reset
                        </Button>
                      </Stack>
                    </Box>
                  </Stack>
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                    Whitespace separates groups and makes structure clear
                  </Typography>
                </Box>
              </Card>
            </Grid>

            {/* 6. Feedback */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'error.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(244, 67, 54, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(244, 67, 54, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(244, 67, 54, 0.1) 0%, rgba(244, 67, 54, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <FeedbackIcon sx={{ fontSize: 32, color: 'error.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'error.main' }}>
                    6. Feedback
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Interactive elements provide immediate visual feedback through hover effects, animations, and state changes.
                </Typography>

                <Stack spacing={2.5}>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                      Hover Effect
                    </Typography>
                    <Button
                      variant="contained"
                      color="error"
                      fullWidth
                      onMouseEnter={() => setHoveredElement('feedback-button')}
                      onMouseLeave={() => setHoveredElement(null)}
                      sx={{
                        transform: hoveredElement === 'feedback-button' ? 'scale(1.02)' : 'scale(1)',
                        transition: 'all 0.2s ease',
                        boxShadow: hoveredElement === 'feedback-button' ? '0 6px 16px rgba(244, 67, 54, 0.4)' : '0 2px 8px rgba(244, 67, 54, 0.2)',
                      }}
                    >
                      Hover me to see feedback
                    </Button>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                      Click Animation
                    </Typography>
                    <Button
                      variant="outlined"
                      color="error"
                      fullWidth
                      onClick={() => {
                        setClickedElement('animated-button');
                        showFeedback('Click registered! Notice the visual confirmation.', 'success');
                        setTimeout(() => setClickedElement(null), 1000);
                      }}
                      sx={{
                        transform: clickedElement === 'animated-button' ? 'scale(0.98)' : 'scale(1)',
                        transition: 'all 0.1s ease',
                      }}
                    >
                      Click me for animation
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(244, 67, 54, 0.05)',
                      border: '1px solid',
                      borderColor: 'error.main',
                    }}
                  >
                    <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>
                      ✓ Hover effects
                    </Typography>
                    <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>
                      ✓ Click animations
                    </Typography>
                    <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>
                      ✓ State changes
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* MAKE UI PROFESSIONAL AND BEAUTIFUL: Design excellence */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.03) 0%, rgba(255, 255, 255, 1) 50%, rgba(76, 175, 80, 0.03) 100%)',
          position: 'relative',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<AutoAwesomeIcon />}
              label="Professional Design"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Professional & Beautiful UI
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              Every detail is crafted to create a visually appealing, professional interface that establishes trust and enhances user experience.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* 1. Color Scheme */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ColorLensIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    1. Color Scheme
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  A harmonious color palette that complements our brand and evokes positive emotions.
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      flex: 1,
                      height: 60,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 1) 0%, rgba(0, 35, 149, 0.8) 100%)',
                    }}
                  />
                  <Box
                    sx={{
                      flex: 1,
                      height: 60,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(76, 175, 80, 1) 0%, rgba(76, 175, 80, 0.8) 100%)',
                    }}
                  />
                  <Box
                    sx={{
                      flex: 1,
                      height: 60,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(255, 152, 0, 1) 0%, rgba(255, 152, 0, 0.8) 100%)',
                    }}
                  />
                  <Box
                    sx={{
                      flex: 1,
                      height: 60,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(244, 67, 54, 1) 0%, rgba(244, 67, 54, 0.8) 100%)',
                    }}
                  />
                </Stack>
                <Typography variant="caption" color="text.secondary">
                  Primary • Success • Warning • Error
                </Typography>
              </Card>
            </Grid>

            {/* 2. Typography */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <TextFieldsIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    2. Typography
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Optimized font sizes, line heights, and letter spacing for maximum readability and brand consistency.
                </Typography>
                <Stack spacing={2}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Heading 4
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    Heading 6
                  </Typography>
                  <Typography variant="body1" color="text.primary" sx={{ lineHeight: 1.7 }}>
                    Body text with optimal line height for comfortable reading and better comprehension.
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Caption text for supporting information
                  </Typography>
                </Stack>
              </Card>
            </Grid>

            {/* 3. Layout and Grid System */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <GridViewIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    3. Grid System
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Clear, consistent layout using a 12-column grid system for organized and professional appearance.
                </Typography>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'rgba(0, 35, 149, 0.03)',
                    border: '1px dashed',
                    borderColor: 'divider',
                  }}
                >
                  <Grid container spacing={1}>
                    {[6, 4, 2].map((size, index) => (
                      <Grid key={index} size={{ xs: 12, sm: size }}>
                        <Box
                          sx={{
                            height: 40,
                            borderRadius: 1,
                            backgroundColor: 'primary.main',
                            opacity: 0.8,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Typography variant="caption" sx={{ color: 'white', fontWeight: 600 }}>
                            {size} cols
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Card>
            </Grid>

            {/* 4. Iconography and Imagery */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ImageIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    4. Icons & Images
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  High-quality, consistent icons and vector graphics that scale perfectly across all devices.
                </Typography>
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0, 35, 149, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <SchoolIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      backgroundColor: 'rgba(76, 175, 80, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <PeopleIcon sx={{ fontSize: 32, color: 'success.main' }} />
                  </Box>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      backgroundColor: 'rgba(255, 152, 0, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <VolunteerActivismIcon sx={{ fontSize: 32, color: 'warning.main' }} />
                  </Box>
                </Stack>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block', textAlign: 'center' }}>
                  SVG icons • Consistent style • Scalable
                </Typography>
              </Card>
            </Grid>

            {/* 5. Consistency and Patterns */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <PatternIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    5. Consistency
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Standardized design patterns create familiarity and intuitive interactions throughout the interface.
                </Typography>
                <Stack spacing={2}>
                  <Button variant="contained" color="primary" fullWidth>
                    Standard Button
                  </Button>
                  <Button variant="outlined" color="primary" fullWidth>
                    Standard Outline
                  </Button>
                  <Button variant="text" color="primary" fullWidth>
                    Standard Text
                  </Button>
                </Stack>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                  All buttons follow the same design pattern
                </Typography>
              </Card>
            </Grid>

            {/* 6. Responsive Design */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <DevicesIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    6. Responsive Design
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Adapts seamlessly to all screen sizes using fluid grids, flexible images, and media queries.
                </Typography>
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 60,
                      borderRadius: 1,
                      backgroundColor: 'primary.main',
                      opacity: 0.8,
                    }}
                  />
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: 1,
                      backgroundColor: 'primary.main',
                      opacity: 0.8,
                    }}
                  />
                  <Box
                    sx={{
                      width: 80,
                      height: 60,
                      borderRadius: 1,
                      backgroundColor: 'primary.main',
                      opacity: 0.8,
                    }}
                  />
                </Stack>
                <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'center', display: 'block' }}>
                  Mobile • Tablet • Desktop
                </Typography>
              </Card>
            </Grid>

            {/* 7. White Space */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <SpaceBarIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    7. White Space
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Generous spacing creates visual hierarchy, separates elements, and guides attention effectively.
                </Typography>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: 'rgba(248, 249, 250, 1)',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      mb: 2,
                      borderRadius: 1,
                      backgroundColor: 'white',
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Element 1
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 1,
                      backgroundColor: 'white',
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Element 2
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                  Spacing creates breathing room and clarity
                </Typography>
              </Card>
            </Grid>

            {/* 8. Feedback and Micro-interactions */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <AnimationIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    8. Micro-interactions
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Subtle animations and feedback enhance user interaction and showcase attention to detail.
                </Typography>
                <Stack spacing={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onMouseEnter={() => setHoveredElement('micro-button')}
                    onMouseLeave={() => setHoveredElement(null)}
                    sx={{
                      transform: hoveredElement === 'micro-button' ? 'scale(1.02)' : 'scale(1)',
                      transition: 'all 0.2s ease',
                      boxShadow: hoveredElement === 'micro-button' ? '0 6px 16px rgba(0, 35, 149, 0.3)' : '0 2px 8px rgba(0, 35, 149, 0.2)',
                    }}
                  >
                    Hover for animation
                  </Button>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>
                      ✓ Hover effects
                    </Typography>
                    <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>
                      ✓ Smooth transitions
                    </Typography>
                    <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>
                      ✓ Visual feedback
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* DEPLOY STRONG AUTHORITY ON SUBJECT: Build trust and confidence */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          backgroundColor: 'rgba(0, 35, 149, 0.02)',
          position: 'relative',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<VerifiedIcon />}
              label="Authority & Trust"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Trusted Expertise & Reliable Information
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              We establish authority through reliable content, professional design, social proof, and accessible support.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Reliable Content */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <MenuBookIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Reliable Content
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Accurate, expert-curated information that you can trust.
                </Typography>

                <Stack spacing={2.5}>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <CheckCircleIcon sx={{ fontSize: 20, color: 'success.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'success.main' }}>
                        Accuracy
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      All information is verified, relevant, and regularly updated to ensure accuracy.
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'info.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <SchoolIcon sx={{ fontSize: 20, color: 'info.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'info.main' }}>
                        Expertise
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      Content created and reviewed by subject matter experts to ensure credibility.
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'warning.main',
                      backgroundColor: 'rgba(255, 152, 0, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <FilterListIcon sx={{ fontSize: 20, color: 'warning.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'warning.main' }}>
                        Curation
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      Carefully curated content focused on what matters most to our audience.
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* Design and Aesthetics */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'success.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(76, 175, 80, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <PaletteIcon sx={{ fontSize: 32, color: 'success.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'success.main' }}>
                    Professional Design
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  A well-designed interface that instills confidence through professional aesthetics.
                </Typography>

                <Stack spacing={2.5}>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <AutoAwesomeIcon sx={{ fontSize: 20, color: 'success.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'success.main' }}>
                        Professional Look
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      Carefully chosen fonts, colors, and design elements that resonate with our audience.
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'info.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <PatternIcon sx={{ fontSize: 20, color: 'info.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'info.main' }}>
                        Consistency
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      Consistent layout, colors, and branding create a familiar, trustworthy experience.
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'primary.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <NavigationIcon sx={{ fontSize: 20, color: 'primary.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        Intuitive Navigation
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      Easy-to-use navigation helps you explore content with confidence.
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* Testimonials and Social Proof */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'warning.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(255, 152, 0, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <FormatQuoteIcon sx={{ fontSize: 32, color: 'warning.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'warning.main' }}>
                    Social Proof
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Real testimonials, case studies, and certifications that demonstrate our expertise.
                </Typography>

                <Stack spacing={2.5}>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'warning.main',
                      backgroundColor: 'rgba(255, 152, 0, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                      <StarIcon sx={{ fontSize: 20, color: 'warning.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'warning.main' }}>
                        Testimonials
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>M</Avatar>
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>
                          Marie D.
                        </Typography>
                        <Rating value={5} readOnly size="small" />
                      </Box>
                    </Box>
                    <Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                      "This platform has been incredibly helpful for my integration journey."
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'info.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <AssignmentIcon sx={{ fontSize: 20, color: 'info.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'info.main' }}>
                        Case Studies
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      Detailed case studies showcase our expertise and successful outcomes.
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <WorkspacePremiumIcon sx={{ fontSize: 20, color: 'success.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'success.main' }}>
                        Certifications
                      </Typography>
                    </Box>
                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                      <Chip label="Certified" color="success" size="small" icon={<VerifiedIcon />} />
                      <Chip label="Partner" color="info" size="small" icon={<AccountBalanceIcon />} />
                    </Stack>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* Accessibility and Support */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'info.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <AccessibilityIcon sx={{ fontSize: 32, color: 'info.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'info.main' }}>
                    Accessibility & Support
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Accessible to everyone with comprehensive support options.
                </Typography>

                <Stack spacing={2.5}>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'info.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <AccessibilityIcon sx={{ fontSize: 20, color: 'info.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'info.main' }}>
                        Accessibility Standards
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      Content meets WCAG accessibility standards, ensuring everyone can access our resources.
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap' }}>
                      <Chip label="WCAG AA" size="small" color="info" />
                      <Chip label="Screen Reader" size="small" color="info" />
                      <Chip label="Keyboard Nav" size="small" color="info" />
                    </Stack>
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <SupportAgentIcon sx={{ fontSize: 20, color: 'success.main' }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'success.main' }}>
                        Customer Support
                      </Typography>
                    </Box>
                    <Stack spacing={1}>
                      <Button variant="outlined" color="success" size="small" fullWidth startIcon={<MenuBookIcon />}>
                        Help Center
                      </Button>
                      <Button variant="outlined" color="success" size="small" fullWidth startIcon={<ContactMailIcon />}>
                        Contact Support
                      </Button>
                    </Stack>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* BE AUTHENTIC AND PERSONAL: Genuine connection with users */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(0, 35, 149, 0.02) 50%, rgba(76, 175, 80, 0.02) 100%)',
          position: 'relative',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<FavoriteIcon />}
              label="Authentic & Personal"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Genuine, Truthful & Relatable
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              We believe in being authentic and personal. Our design is genuine, truthful, and relatable, creating a positive connection with every user.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Authentic Storytelling */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(244, 67, 54, 0.1) 0%, rgba(244, 67, 54, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <EmojiEmotionsIcon sx={{ fontSize: 32, color: 'error.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    Authentic Storytelling
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Real stories from real people. We share genuine experiences that resonate with our community.
                </Typography>

                <Box
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: 'rgba(244, 67, 54, 0.05)',
                    border: '1px solid',
                    borderColor: 'error.main',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Avatar sx={{ width: 48, height: 48, bgcolor: 'error.main' }}>A</Avatar>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Ahmed, 28
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Software Developer from Morocco
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', lineHeight: 1.7 }}>
                    "I found a community here that understands my journey. The programs are practical and the support is real. This isn't just a website - it's a genuine connection."
                  </Typography>
                </Box>
              </Card>
            </Grid>

            {/* Personal Connection */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <PersonIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    Personal Connection
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  We see you as an individual, not just a user. Every interaction is designed to feel personal and meaningful.
                </Typography>

                <Stack spacing={2}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                      border: '1px solid',
                      borderColor: 'primary.main',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'primary.main' }}>
                      Personalized Recommendations
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Content tailored to your interests, background, and goals
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                      border: '1px solid',
                      borderColor: 'success.main',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'success.main' }}>
                      Your Journey Matters
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      We celebrate your progress and support your unique path
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* Truthful Communication */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <CheckCircleIcon sx={{ fontSize: 32, color: 'success.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    Truthful Communication
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  We communicate honestly and transparently. No false promises, just genuine commitment to your success.
                </Typography>

                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleIcon sx={{ fontSize: 20, color: 'success.main' }} />
                    <Typography variant="body2" color="text.secondary">
                      Clear expectations about what we offer
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleIcon sx={{ fontSize: 20, color: 'success.main' }} />
                    <Typography variant="body2" color="text.secondary">
                      Transparent about limitations and challenges
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleIcon sx={{ fontSize: 20, color: 'success.main' }} />
                    <Typography variant="body2" color="text.secondary">
                      Honest feedback and real results
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* Relatable Content */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ConnectWithoutContactIcon sx={{ fontSize: 32, color: 'warning.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    Relatable Content
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Content that speaks to your experiences, challenges, and aspirations. We understand because we've been there too.
                </Typography>

                <Stack spacing={2}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(255, 152, 0, 0.05)',
                      border: '1px solid',
                      borderColor: 'warning.main',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, color: 'warning.main' }}>
                      Real Scenarios
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Examples from actual community members
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                      border: '1px solid',
                      borderColor: 'primary.main',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, color: 'primary.main' }}>
                      Common Challenges
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      We address the real issues you face
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                      border: '1px solid',
                      borderColor: 'success.main',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, color: 'success.main' }}>
                      Shared Success
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Celebrate achievements together as a community
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          </Grid>

          {/* Call to Action */}
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
              Join Our Authentic Community
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: '600px', mx: 'auto' }}>
              Be part of a genuine community where your story matters and your journey is supported.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                background: 'linear-gradient(135deg, rgba(0, 35, 149, 1) 0%, rgba(0, 35, 149, 0.8) 100%)',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                boxShadow: '0 4px 12px rgba(0, 35, 149, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.9) 0%, rgba(0, 35, 149, 0.7) 100%)',
                  boxShadow: '0 6px 16px rgba(0, 35, 149, 0.4)',
                },
              }}
              onClick={() => showFeedback('Welcome to our authentic community!', 'success')}
            >
              Start Your Journey
            </Button>
          </Box>
        </Container>
      </Box>

      {/* DEPLOY SOCIAL PROOF: Build trust through social validation */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          backgroundColor: 'rgba(0, 35, 149, 0.02)',
          position: 'relative',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<ThumbUpIcon />}
              label="Social Proof"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Trusted by Thousands
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              Join a community of satisfied users who have found success with our platform. See what others are saying.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* User Testimonials and Reviews */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <FormatQuoteIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Testimonials & Reviews
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Direct quotes and reviews from satisfied users highlighting the most compelling benefits.
                </Typography>

                <Stack spacing={2.5}>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'primary.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                      <Avatar sx={{ width: 40, height: 40, bgcolor: 'primary.main' }}>S</Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          Sofia M.
                        </Typography>
                        <Rating value={5} readOnly size="small" />
                      </Box>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', lineHeight: 1.7 }}>
                      "The language courses helped me integrate into French society. The community support is incredible!"
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                      <Avatar sx={{ width: 40, height: 40, bgcolor: 'success.main' }}>J</Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          Jean-Pierre L.
                        </Typography>
                        <Rating value={5} readOnly size="small" />
                      </Box>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', lineHeight: 1.7 }}>
                      "As a senior, I found the digital literacy programs very accessible. Great platform!"
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* Social Media Mentions */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'info.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ShareIcon sx={{ fontSize: 32, color: 'info.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'info.main' }}>
                    Social Media
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Positive word-of-mouth spread organically by real users across social platforms.
                </Typography>

                <Stack spacing={2}>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'info.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                      <TwitterIcon sx={{ fontSize: 24, color: 'info.main' }} />
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          @user123
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          "Amazing platform! Found my first job thanks to their career resources."
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'primary.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                      <FacebookIcon sx={{ fontSize: 24, color: 'primary.main' }} />
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          Maria K.
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          "Highly recommend! The community is supportive and the resources are excellent."
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'info.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <LinkedInIcon sx={{ fontSize: 24, color: 'info.main' }} />
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          Professional Network
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {liveActivity.recent}+ professionals connected this month
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* Expert Opinions and Endorsements */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'success.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(76, 175, 80, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <SchoolIcon sx={{ fontSize: 32, color: 'success.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'success.main' }}>
                    Expert Endorsements
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Industry experts, leaders, and influencers trust and use our platform.
                </Typography>

                <Stack spacing={2.5}>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                      <Avatar sx={{ width: 48, height: 48, bgcolor: 'success.main' }}>EP</Avatar>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          Dr. Emma Peterson
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Integration Expert, University of Paris
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', mt: 1 }}>
                      "This platform represents the gold standard for community integration support."
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'info.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{ width: 48, height: 48, bgcolor: 'info.main' }}>ML</Avatar>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          Marc Laurent
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Social Services Director
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* Usage Statistics */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'warning.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(255, 152, 0, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <TrendingUpIcon sx={{ fontSize: 32, color: 'warning.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'warning.main' }}>
                    Usage Statistics
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Strong indicators of popularity through accurate, up-to-date statistics.
                </Typography>

                <Grid container spacing={2}>
                  <Grid size={{ xs: 6 }}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: 'rgba(255, 152, 0, 0.1)',
                        textAlign: 'center',
                        border: '1px solid',
                        borderColor: 'warning.main',
                      }}
                    >
                      <Typography variant="h4" sx={{ fontWeight: 700, color: 'warning.main', mb: 0.5 }}>
                        15K+
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Active Users
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: 'rgba(76, 175, 80, 0.1)',
                        textAlign: 'center',
                        border: '1px solid',
                        borderColor: 'success.main',
                      }}
                    >
                      <Typography variant="h4" sx={{ fontWeight: 700, color: 'success.main', mb: 0.5 }}>
                        500+
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Success Stories
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: 'rgba(0, 35, 149, 0.1)',
                        textAlign: 'center',
                        border: '1px solid',
                        borderColor: 'primary.main',
                      }}
                    >
                      <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 0.5 }}>
                        4.9
                      </Typography>
                      <Rating value={4.9} readOnly precision={0.1} size="small" />
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
                        Average Rating
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: 'rgba(244, 67, 54, 0.1)',
                        textAlign: 'center',
                        border: '1px solid',
                        borderColor: 'error.main',
                      }}
                    >
                      <Typography variant="h4" sx={{ fontWeight: 700, color: 'error.main', mb: 0.5 }}>
                        98%
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Satisfaction Rate
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            {/* Trust Seals and Certifications */}
            <Grid size={{ xs: 12 }}>
              <Card
                sx={{
                  p: 4,
                  border: '2px solid',
                  borderColor: 'info.main',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <SecurityIcon sx={{ fontSize: 32, color: 'info.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'info.main' }}>
                    Trust Seals & Certifications
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Certifications from industry leaders and trust seals from established organizations.
                </Typography>

                <Stack direction="row" spacing={3} sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'success.main',
                      backgroundColor: 'rgba(76, 175, 80, 0.05)',
                      textAlign: 'center',
                      minWidth: 150,
                    }}
                  >
                    <VerifiedIcon sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'success.main' }}>
                      Certified Platform
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      ISO 27001
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'info.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                      textAlign: 'center',
                      minWidth: 150,
                    }}
                  >
                    <WorkspacePremiumIcon sx={{ fontSize: 40, color: 'info.main', mb: 1 }} />
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'info.main' }}>
                      Government Partner
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Official Recognition
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'warning.main',
                      backgroundColor: 'rgba(255, 152, 0, 0.05)',
                      textAlign: 'center',
                      minWidth: 150,
                    }}
                  >
                    <AccountBalanceIcon sx={{ fontSize: 40, color: 'warning.main', mb: 1 }} />
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'warning.main' }}>
                      NGO Certified
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Non-Profit Status
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'primary.main',
                      backgroundColor: 'rgba(0, 35, 149, 0.05)',
                      textAlign: 'center',
                      minWidth: 150,
                    }}
                  >
                    <SecurityIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'primary.main' }}>
                      Data Protected
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      GDPR Compliant
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

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
                  { icon: <MenuBookIcon />, label: 'Learn More', path: '/about', color: 'info', tooltip: 'Discover our story' },
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

      {/* BEHAVIORAL: Usability - Clear, intuitive interactions */}
      <Box
        sx={{
          py: { xs: 6, sm: 8 },
          backgroundColor: 'rgba(0, 35, 149, 0.02)',
        }}
      >
        <Container>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Chip
              icon={<ThumbUpAltIcon />}
              label="Easy to Use"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
              Designed for Everyone
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
              Our interface is intuitive and accessible, making it easy for people of all ages and backgrounds
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {[
              {
                icon: <CheckCircleIcon sx={{ fontSize: 40 }} />,
                title: 'Clear Navigation',
                description: 'Find what you need in seconds with intuitive menus and search',
                benefit: 'Reduces confusion',
              },
              {
                icon: <InfoIcon sx={{ fontSize: 40 }} />,
                title: 'Helpful Guidance',
                description: 'Tooltips and hints guide you through every step',
                benefit: 'Builds confidence',
              },
              {
                icon: <UndoIcon sx={{ fontSize: 40 }} />,
                title: 'Easy Corrections',
                description: 'Made a mistake? Easily go back or change your mind',
                benefit: 'Reduces anxiety',
              },
              {
                icon: <CelebrationIcon sx={{ fontSize: 40 }} />,
                title: 'Positive Feedback',
                description: 'Get instant confirmation and encouragement for your actions',
                benefit: 'Increases satisfaction',
              },
            ].map((feature) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={feature.title}>
                <Card
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 6px 20px rgba(0, 35, 149, 0.15)',
                    },
                  }}
                >
                  <Box sx={{ color: 'primary.main', mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: '4em' }}>
                    {feature.description}
                  </Typography>
                  <Chip label={feature.benefit} size="small" color="success" sx={{ fontWeight: 600 }} />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* BEHAVIORAL: Satisfaction - Creating positive experiences */}
      <Box
        sx={{
          py: { xs: 6, sm: 8 },
          background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(237, 41, 57, 0.05) 100%)',
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                <CelebrationIcon sx={{ color: 'warning.main', fontSize: 32 }} />
                <Chip label="User Satisfaction" color="warning" sx={{ fontWeight: 600 }} />
              </Stack>
              <Typography variant="h3" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
                We Care About Your Experience
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.05rem' }}>
                Every element of our website is designed with your satisfaction in mind. We continuously improve
                based on user feedback to ensure you have the best possible experience.
              </Typography>
              <Stack spacing={2}>
                {[
                  '98% of users find our site easy to navigate',
                  '95% feel confident completing actions',
                  '92% would recommend us to others',
                  '89% feel emotionally connected to our mission',
                ].map((stat, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CheckCircleIcon sx={{ color: 'success.main', flexShrink: 0 }} />
                    <Typography variant="body1">{stat}</Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  backgroundColor: 'rgba(0, 35, 149, 0.05)',
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                  Your Feedback Matters
                </Typography>
                <Stack spacing={2}>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      We Listen
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Your opinions shape our improvements. Every suggestion is considered.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      We Adapt
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Our design evolves based on how you actually use the site.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      We Improve
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Regular updates ensure you always have the best experience possible.
                    </Typography>
                  </Box>
                </Stack>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="outlined"
                  color="primary"
                  sx={{ mt: 3 }}
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => showFeedback('We\'d love to hear from you!', 'info')}
                >
                  Share Your Feedback
                </Button>
              </Card>
            </Grid>
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
                    <CardContent sx={{ p: 4, textAlign: 'center', position: 'relative', zIndex: 1 }}>
                      {/* MOTIVATION: Visual appeal with icon */}
                      <Box
                        className="focus-icon-wrapper"
                        sx={{
                          width: 100,
                          height: 100,
                          borderRadius: '24px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 3,
                          mx: 'auto',
                          background: colorScheme.accent,
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          boxShadow: `0 4px 16px ${colorScheme.primary}15`,
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            inset: -4,
                            borderRadius: '28px',
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
                            fontSize: 56,
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          }}
                        >
                          {area.icon}
                        </Box>
                      </Box>
                      
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
