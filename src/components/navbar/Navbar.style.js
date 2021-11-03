import styled from 'styled-components';
import Box from '@mui/material/Box';

export const NavBox = styled(Box)`
	width: 40%;
	float: right;
	display: flex;
	margin: 2rem 0 4rem;
	justify-content: space-between;
	@media only screen and (max-width: 1024px) {
		width: 60%;
	}
	@media only screen and (max-width: 960px) {
		width: 70%;
	}
	@media only screen and (max-width: 480px) {
		width: 90%;
	}
`;
export const NavItem = styled(Box)`
	width: 20%;
	text-align: center;
	.css-1wlk0hk-MuiAvatar-root {
		width: 3.5rem;
		height: 3.5rem;
		float: right;
		margin-right: 2rem;
	}
	&:last-of-type {
		text-align: end;
	}

	@media only screen and (max-width: 1024px) {
		width: 25%;
	}
	@media only screen and (max-width: 960px) {
		width: 30%;
	}
	@media only screen and (max-width: 480px) {
		width: 30%;
		.css-1wlk0hk-MuiAvatar-root {
			margin-right: 1rem;
		}
	}
`;
export const NavText = styled(Box)``;
