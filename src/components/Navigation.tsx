import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styled, alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ColorModeIconDropdown from './shared-theme/ColorModeIconDropdown.tsx';
import { getMitraLogoSrc, mitraLogoThemeFilter } from '../utils/mitraLogo';

const StyledToolbar = styled(Toolbar)(({ theme }) => {
  const themeWithVars = theme as any;
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: (themeWithVars.vars || theme).palette.divider,
    backgroundColor: themeWithVars.vars
      ? `rgba(${themeWithVars.vars.palette.background.defaultChannel} / 0.4)`
      : alpha(theme.palette.background.default, 0.4),
    boxShadow: (themeWithVars.vars || theme).shadows[1],
    padding: '8px 12px',
  };
});

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 500,
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
  },
}));

const DropdownButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 500,
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
  },
}));

const StyledMenu = styled(Menu)(({ theme }) => {
  const themeWithVars = theme as any;
  return {
    '& .MuiPaper-root': {
      borderRadius: theme.shape.borderRadius * 2,
      marginTop: theme.spacing(1),
      minWidth: 200,
      boxShadow: theme.shadows[8],
      border: '1px solid',
      borderColor: (themeWithVars.vars || theme).palette.divider,
      backdropFilter: 'blur(24px)',
      backgroundColor: themeWithVars.vars
        ? `rgba(${themeWithVars.vars.palette.background.paperChannel} / 0.95)`
        : alpha(theme.palette.background.paper, 0.95),
    },
    '& .MuiMenuItem-root': {
      padding: theme.spacing(1, 2),
      borderRadius: theme.shape.borderRadius,
      margin: theme.spacing(0.5, 1),
      '&:hover': {
        backgroundColor: alpha(theme.palette.primary.main, 0.08),
      },
      '&.Mui-selected': {
        backgroundColor: alpha(theme.palette.primary.main, 0.12),
        '&:hover': {
          backgroundColor: alpha(theme.palette.primary.main, 0.16),
        },
      },
    },
  };
});

interface NavGroup {
  label: string;
  path?: string;
  items?: Array<{ label: string; path: string }>;
}

export default function Navigation() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEls, setAnchorEls] = React.useState<{ [key: string]: HTMLElement | null }>({});
  const location = useLocation();
  const logoSrc = getMitraLogoSrc();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleMenuOpen = (groupLabel: string) => (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEls((prev) => ({ ...prev, [groupLabel]: event.currentTarget }));
  };

  const handleMenuClose = (groupLabel: string) => () => {
    setAnchorEls((prev) => ({ ...prev, [groupLabel]: null }));
  };

  const navGroups: NavGroup[] = [
    {
      label: 'About Us',
      items: [
        { label: 'About Us', path: '/about' },
        { label: 'Partners', path: '/partners' },
      ],
    },
    {
      label: 'Education',
      items: [
        { label: 'Focus Areas', path: '/focus-areas' },
        { label: 'Programs & Workshops', path: '/programs-workshops' },
      ],
    },
    {
      label: 'Activities',
      items: [
        { label: 'Events', path: '/events' },
        { label: 'Gallery', path: '/gallery' },
      ],
    },
    {
      label: 'Contact',
      path: '/contact',
    },
  ];

  const allNavItems = [
    { label: 'Home', path: '/' },
    ...navGroups.flatMap((group) => (group.items || [{ label: group.label, path: group.path! }])),
  ];

  const isActiveGroup = (group: NavGroup): boolean => {
    if (group.path) {
      return location.pathname === group.path;
    }
    return group.items?.some((item) => location.pathname === item.path) || false;
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
              <Box
                component="img"
                src={logoSrc}
                alt="MITRA FRANCE"
                sx={{
                  height: { xs: 18, md: 22 },
                  width: 'auto',
                  mr: 2.5,
                  transition: 'opacity 0.3s ease',
                  ...mitraLogoThemeFilter(theme),
                  '&:hover': {
                    opacity: 0.85,
                  },
                }}
              />
            </Link>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
              {navGroups.map((group) => {
                if (group.items) {
                  const open = Boolean(anchorEls[group.label]);
                  const isActive = isActiveGroup(group);
                  return (
                    <React.Fragment key={group.label}>
                      <DropdownButton
                        onClick={handleMenuOpen(group.label)}
                        variant={isActive ? 'outlined' : 'text'}
                        color="info"
                        size="small"
                        endIcon={<ExpandMoreIcon sx={{ fontSize: 18, transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />}
                        sx={{
                          ...(isActive && {
                            borderColor: 'primary.main',
                            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.08),
                          }),
                        }}
                      >
                        {group.label}
                      </DropdownButton>
                      <StyledMenu
                        anchorEl={anchorEls[group.label]}
                        open={open}
                        onClose={handleMenuClose(group.label)}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                      >
                        {group.items.map((item) => (
                          <MenuItem
                            key={item.path}
                            component={Link as any}
                            to={item.path}
                            onClick={handleMenuClose(group.label)}
                            selected={location.pathname === item.path}
                          >
                            {item.label}
                          </MenuItem>
                        ))}
                      </StyledMenu>
                    </React.Fragment>
                  );
                } else {
                  const isActive = location.pathname === group.path;
                  return (
                    <StyledButton
                      key={group.label}
                      component={Link as any}
                      to={group.path!}
                      variant={isActive ? 'outlined' : 'text'}
                      color="info"
                      size="small"
                      sx={{
                        ...(isActive && {
                          borderColor: 'primary.main',
                          backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.08),
                        }),
                      }}
                    >
                      {group.label}
                    </StyledButton>
                  );
                }
              })}
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <ColorModeIconDropdown />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={logoSrc}
                    alt="MITRA FRANCE"
                    sx={{
                      height: 18,
                      width: 'auto',
                      ...mitraLogoThemeFilter(theme),
                    }}
                  />
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                {allNavItems.map((item) => (
                    <MenuItem
                      key={item.path}
                      component={Link as any}
                      to={item.path}
                    onClick={toggleDrawer(false)}
                    selected={location.pathname === item.path}
                    sx={{
                      borderRadius: 1,
                      mb: 0.5,
                      '&.Mui-selected': {
                        backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.12),
                      },
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
