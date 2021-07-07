import {
	Box,
	Icon,
	IconButton,
	Link,
	makeStyles,
	Tooltip,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	linkBox: {
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			justifyContent: 'center',
		},
	},
}));

const ConnectionButtons = ({ urls }) => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleTooltipClose = () => {
		setOpen(false);
	};

	const handleTooltipOpen = () => {
		navigator.clipboard.writeText(window.location.href);
		setOpen(true);
	};
	return (
		<Box className={classes.linkBox}>
			{urls.linkedin && (
				<Link href={urls.linkedin} target="_blank" underline="none">
					<IconButton color="primary" component="span">
						<Icon
							className="fab fa-linkedin"
							color="primary"
							fontSize="large"
						></Icon>
					</IconButton>
				</Link>
			)}
			{urls.github && (
				<Link href={urls.github} target="_blank" underline="none">
					<IconButton color="primary" component="span">
						<Icon
							className="fab fa-github"
							color="primary"
							fontSize="large"
						></Icon>
					</IconButton>
				</Link>
			)}
			{urls.email && (
				<Link
					href={'mailto:' + urls.email}
					target="_blank"
					underline="none"
				>
					<IconButton color="primary" component="span">
						<Icon
							className="fas fa-envelope"
							color="primary"
							fontSize="large"
						></Icon>
					</IconButton>
				</Link>
			)}
			{urls.facebook && (
				<Link href={urls.facebook} target="_blank" underline="none">
					<IconButton color="primary" component="span">
						<Icon
							className="fab fa-facebook"
							color="primary"
							fontSize="large"
						></Icon>
					</IconButton>
				</Link>
			)}
			{urls.instagram && (
				<Link href={urls.instagram} target="_blank" underline="none">
					<IconButton color="primary" component="span">
						<Icon
							className="fab fa-instagram"
							color="primary"
							fontSize="large"
						></Icon>
					</IconButton>
				</Link>
			)}

			<Tooltip
				PopperProps={{
					disablePortal: true,
				}}
				onClose={handleTooltipClose}
				open={open}
				disableFocusListener
				disableTouchListener
				title="Copied Link to Clipboard"
			>
				<IconButton
					color="primary"
					component="span"
					onClick={handleTooltipOpen}
				>
					<Icon
						className="fas fa-share-alt"
						color="primary"
						fontSize="large"
					></Icon>
				</IconButton>
			</Tooltip>
		</Box>
	);
};

export default ConnectionButtons;
