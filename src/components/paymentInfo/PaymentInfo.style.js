import styled from 'styled-components';
import Box from '@mui/material/Box';

export const ProductInfoBox = styled(Box)`
	width: 100%;
`;
export const PaymentInfoBody = styled(Box)`
	width: 90%;
`;
export const InfoBox = styled(Box)`
	width: 90%;
	padding-top: 2rem;
	margin: 0 auto;
	border-top: 1px solid #eceff1;
	display: flex;
	justify-content: space-between;

	.css-ahj2mt-MuiTypography-root {
		font-size: 0.8rem;
		color: #cfd8dc;
		margin-top: 1rem;
	}
	@media only screen and (max-width: 480px) {
		width: 100%;
	}
`;

export const InfoChildA = styled(Box)`
	width: 50%;
	.css-2ulfj5-MuiTypography-root {
		font-weight: 550;
	}
	@media only screen and (max-width: 480px) {
		width: 45%;
		.css-2ulfj5-MuiTypography-root {
			font-size: 1rem;
		}
	}
`;
export const InfoChildB = styled(Box)`
	width: 50%;
	display: flex;
	justify-content: end;
	img {
		width: 45%;
		height: 1.5rem;
	}
	@media only screen and (max-width: 480px) {
		width: 55%;
		justify-content: space-between;
		img {
			width: 40%;
		}
	}
`;

export const ChildBox = styled(Box)`
	width: 15%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	.css-dmmspl-MuiFormGroup-root {
		margin-left: 2rem;
		.css-j204z7-MuiFormControlLabel-root {
			.css-vqmohf-MuiButtonBase-root-MuiRadio-root {
				.css-hyxlzm {
					.css-1hbvpl3-MuiSvgIcon-root {
						width: 0.8rem;
						height: 0.8rem;
					}
					.css-11zohuh-MuiSvgIcon-root {
						width: 0.8rem;
						height: 0.8rem;
					}
				}
			}
		}
	}
	.paypal {
		width: 95% !important;
		height: 2rem;
		margin-left: -1rem;
	}
	@media only screen and (max-width: 768px) {
		width: 30%;
	}
	@media only screen and (max-width: 480px) {
		width: 50%;
		.css-dmmspl-MuiFormGroup-root {
			margin-left: 0;
		}
		.paypal {
			margin-left: 0;
			justify-content: center;
		}
		.css-j204z7-MuiFormControlLabel-root {
			margin-right: 0;
		}
	}
`;
export const DetailsBox = styled(Box)`
	width: 101%;
	display: flex;
	height: 50vh;
	margin-top: 2rem;

	@media only screen and (max-width: 1200px) (min-width: 768px) {
		height: 32vh;
	}
	@media only screen and (max-width: 480px) {
		flex-direction: column;
		margin-bottom: 10rem;
	}
`;
export const CardBox = styled(Box)`
	width: 50%;
	height: 100%;
	padding-left: 4rem;
	img {
		width: 70%;
		margin: 0 auto;

		height: 80%;
	}
	@media only screen and (min-width: 600px) {
		img {
			object-fit: contain;
		}
	}
	@media only screen and (max-width: 768px) {
		padding-left: 2rem;
		align-items: baseline;
		img {
			width: 85%;
			height: 70%;
		}
	}
	@media only screen and (max-width: 480px) {
		width: 100%;
		padding-left: 0;
		img {
			width: 90%;
			margin: 0 auto;
		}
	}
`;
export const DetailsForm = styled(Box)`
	width: 50%;
	.css-sghohy-MuiButtonBase-root-MuiButton-root {
		min-width: 90%;
		text-transform: none;
		padding: 0.7rem 2rem;
	}
	@media only screen and (max-width: 480px) {
		width: 100%;
	}
`;
export const FormBox = styled(Box)`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;
export const FormChild = styled(Box)`
	width: 50%;
	.css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
		margin-top: 0.5rem;
		background-color: #cfd8dc;
		width: 80%;
		.css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root.Mui-disabled {
			color: black;
		}

		.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
			.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
				height: 1.2rem;
			}
		}
	}
`;
export const FormChildB = styled(Box)`
	width: 100%;
	margin: 1.5rem 0;
	.css-dmmspl-MuiFormGroup-root {
		.css-j204z7-MuiFormControlLabel-root {
			.css-vqmohf-MuiButtonBase-root-MuiRadio-root {
				.css-hyxlzm {
					.css-1hbvpl3-MuiSvgIcon-root {
						width: 1rem;
						height: 1rem;
					}
					.css-11zohuh-MuiSvgIcon-root {
						width: 1rem;
						height: 1rem;
					}
				}
			}
		}
	}
`;
