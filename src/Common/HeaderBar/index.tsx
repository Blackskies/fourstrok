import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import constants from '../constants';
import theme from '../../theme';
import TextLogo from '../TextLogo';
import Reviews from '../Reviews';
import PartnerBrands from '../../Pages/PartnerBrands';
import ContactUs from '../../Pages/ContactUsPage';
import { Grid } from '@mui/material';

const pages = ['Services', 'Reviews', 'Partner Brands', 'Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function ResponsiveAppBar() {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="sticky" sx={{
            backgroundColor: 'white',
            borderBottom: 4,
            borderBottomColor: theme.palette.secondary.main
        }}>
            <Grid>
                <Toolbar disableGutters>
                    <img src={require('./../assets/logo_trans.png')} height={50} style={{
                        marginRight: 5,
                        paddingRight: 5,
                        marginLeft: 10,
                        paddingLeft: 10
                    }}
                        alt={constants.companyName}
                    />

                    {/*Web View: Logo*/}
                    <TextLogo logoFontSize={35} />

                    {/*Mobile View: NavBar*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/*Mobile View: CompanyName*/}
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 600,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        {constants.companyName}
                    </Typography>

                    {/*Web View: Horizontal buttons*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, key) => (
                            <Button
                                key={page}
                                variant='text'
                                size='large'
                                onClick={
                                    () => {
                                        const documentElement: HTMLElement | null = document.querySelector("#" + page.replace(" ", "-"))
                                        window.scrollTo({
                                            top: documentElement ? documentElement.offsetTop - 60 : 0,
                                            behavior: 'smooth',
                                        });
                                    }
                                }
                                sx={{
                                    my: 1,
                                    color: '#1E425B',
                                    display: 'block',

                                    ml: 5,
                                    fontWeight: 600,
                                    fontSize: 15,
                                    '&:hover': {
                                        color: theme.palette.secondary.main
                                    }
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    { // Right Side Button or Logos
                    /* <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}
                </Toolbar>
            </Grid>
        </AppBar>
    );
}
export default ResponsiveAppBar;