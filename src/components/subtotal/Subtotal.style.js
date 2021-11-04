import styled from 'styled-components';
import Box from '@mui/material/Box';

export const SubtotalBox = styled(Box)`
	width: 100%;
`;

export const SubtotalChild = styled(Box)`
	width: 90%;
	margin: 2rem auto;
	padding-top: 1rem;
	border-top: 1px solid #eceff1;
`;

export const SubBox = styled(Box)`
	width: 101%;
	margin-top: 1rem;
	display: flex;
	justify-content: space-between;
	.css-ahj2mt-MuiTypography-root {
		font-weight: 550;
		span {
			color: #cfd8dc;
		}
	}
`;

export const PaymentBox = styled(Box)`
	width: 90%;
	border-top: 1px solid #eceff1;
	padding-top: 1rem;
	margin: 1.5rem auto;
`;

export const PaymentChild = styled(Box)`
	width: 101%;
	margin-top: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.css-sghohy-MuiButtonBase-root-MuiButton-root {
		padding: 0.8rem 2rem;
		text-transform: none;
		font-weight: 500;
	}
	.css-2ulfj5-MuiTypography-root {
		font-weight: 550;
		font-size: 1.2rem;
	}
	@media only screen and (max-width: 480px) {
		.css-sghohy-MuiButtonBase-root-MuiButton-root {
			padding: 0.5rem 1.2rem;
			font-size: 1rem;
		}
		.css-2ulfj5-MuiTypography-root {
			font-size: 1rem;
			font-weight: 600;
		}
	}
`;
