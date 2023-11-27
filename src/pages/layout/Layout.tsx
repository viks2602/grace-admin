import * as React from 'react';

import { styled,  Theme, CSSObject } from '@mui/material/styles';
import { Avatar, Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText,  Modal, Stack,  Typography } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';

import {FiLogOut} from 'react-icons/fi';
import { MdAccountBalance, MdSpaceDashboard } from 'react-icons/md';
// import {  AiOutlineFundProjectionScreen,  } from 'react-icons/ai';
import { ImUserTie } from 'react-icons/im';

import { Link, Outlet, useNavigate } from 'react-router-dom';
import { graceLogo } from '../../assets';

const drawerWidth = 200;

const openedMixin = (theme: Theme): CSSObject => ({
  backgroundColor:'#222B5D',
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor:'#222B5D',
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
    backgroundColor: '#222B5D',
    borderBottom: '1px solid gray',
    boxShadow:'none',
    padding:0,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Layout() {
  const navigate = useNavigate();

  
  const [open, setOpen] = React.useState(false);
  const [isOpenProfile, setIsOpenProfile] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  function handleOpen() {
    setIsOpenProfile(true);
  }

  function handleClose() {
    setIsOpenProfile(false);
  }

  function logoutHandler() {
    sessionStorage.clear();
    localStorage.clear();
    navigate('/');
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={open}>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Box height={'60px'} display='flex'  alignItems='center' pl={1}>
            <img src={graceLogo} width='100%' height='70%'/>
          </Box>
            <Avatar alt="user" src={''} sx={{mr:2, cursor:'pointer'}} onClick={handleOpen}>{'VP'}</Avatar>
          </Box>
      </AppBar>
      <Drawer variant="permanent" open={open} onMouseEnter={handleDrawerOpen} onMouseLeave={handleDrawerClose}>
        <DrawerHeader />
        <List  className='sidebar-listing-menu'>
             {/* Dashboard */}
            <ListItem disablePadding>
                <ListItemButton 
                  className='menuSubItem'
                  component={Link}
                  to={'dashboard'}
                  sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <MdSpaceDashboard className='react-icon'/>
                  </ListItemIcon>
                  <ListItemText primary={'Dashboard'} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
            </ListItem>
            
            {/* School */}
            <ListItem disablePadding>
                <ListItemButton
                  className='menuSubItem'
                  component={Link}
                  to={'school'}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  //selected={active === "employee"}
                 // onClick={() =>dispatch(_setIsSidebarActive("employee"))}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <MdAccountBalance className='react-icon' />
                  </ListItemIcon>
                  <ListItemText primary={'School'} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
            </ListItem>

            {/* Teacher*/}
            <ListItem disablePadding>
                <ListItemButton
                  className='menuSubItem'
                  component={Link}
                  to={'teacher'}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  //selected={active === "employee"}
                 // onClick={() =>dispatch(_setIsSidebarActive("employee"))}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <ImUserTie className='react-icon' />
                  </ListItemIcon>
                  <ListItemText primary={'Teacher'} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
            </ListItem>
            {/* student */}
            <ListItem disablePadding>
                <ListItemButton
                  className='menuSubItem'
                  component={Link}
                  to={"student"}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  //selected={active === "customer"}
                  //onClick={() =>  dispatch(_setIsSidebarActive("customer"))}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                      <ImUserTie className='react-icon' />
                  </ListItemIcon>
                  <ListItemText primary={'Student'} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
            </ListItem>

        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet/>
      </Box>
      {isOpenProfile ? (
          <Modal open={isOpenProfile} onClose={handleClose}>
            <Box
              p={1.5}
              sx={{
                width: 250,
                backgroundColor: "#fff",
                color: "#00000",
                position: "absolute",
                top: 60,
                right: 5,
              }}
            >
              <Box sx={{ display: "flex" }} mb={1}>
                <Avatar alt="Remy Sharp" src={''}>{'VP'}</Avatar>
                <Stack ml={2}>
                  <Typography fontWeight='bold'>
                    {/* here we show user name */}
                  {'Vikas' + ' ' + 'Balu' + ' ' + 'Patil'}
                  </Typography>
                  <Typography variant='h6'>
                    {'Super Admin'}
                  </Typography>
                </Stack>
              </Box>
              <Divider />
              <Stack spacing={0.5}>
                <Typography fontWeight={"bold"} variant={"h5"}> Role: Super Admin </Typography>
                <Typography > Email: viks.0226@gmail.com </Typography>
              </Stack>

              <Divider sx={{ marginBottom: 1 }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems:'center',
                  cursor: "pointer",
                  gap:1
                }}
                onClick={logoutHandler}
              >
                <Typography>Sign Out</Typography>
                <FiLogOut />
              </Box>
            </Box>
          </Modal>
        ) : null}
    </Box>
  );
}