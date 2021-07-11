import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import Link from '@material-ui/core/Link';
import { Button, Icon } from '@material-ui/core';
import LogOut from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
	sectionDesktop: {
		display: 'none',

		[theme.breakpoints.up('md')]: {
			display: 'flex',
			alignItems: 'center',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
}));

function Navbar() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	// React.useEffect(() => {
	// 	console.log(props);
	// }, []);

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<>
				<MenuItem>
					<Link href="/story/new" underline="none">
						<Button color="secondary">New</Button>
					</Link>
				</MenuItem>
			</>
		</Menu>
	);

	return (
		<div className={classes.grow}>
			<AppBar color="inherit" position="static">
				<Toolbar>
					<Typography
						className={classes.title}
						variant="h6"
						noWrap
						color="primary"
					>
						<Link color="inherit" underline="none" href="/">
							BITSian Stories
						</Link>
					</Typography>

					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<>
							<Link
								href="/category/tech"
								underline="none"
								color="secondary"
							>
								<Button color="secondary">Tech</Button>
							</Link>
							<Link
								href="/category/core"
								underline="none"
								color="secondary"
							>
								<Button color="secondary">Core</Button>
							</Link>
							<Link
								href="/category/finance"
								underline="none"
								color="secondary"
							>
								<Button color="secondary">Finance</Button>
							</Link>
							<Link
								href="/category/research"
								underline="none"
								color="secondary"
							>
								<Button color="secondary">Research</Button>
							</Link>

							<Link
								href="/story/new"
								underline="none"
								color="secondary"
							>
								<Button color="secondary">New</Button>
							</Link>
							<Link
								href="https://github.com/Joe2k/BITSian-Stories"
								target="_blank"
								underline="none"
							>
								<IconButton color="secondary">
									<Icon
										className="fab fa-github"
										color="secondary"
									></Icon>
								</IconButton>
							</Link>
						</>
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"
						>
							<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</div>
	);
}

export default Navbar;
