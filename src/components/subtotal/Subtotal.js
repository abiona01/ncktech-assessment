import { Button, Typography } from '@mui/material';
import {
	PaymentBox,
	PaymentChild,
	SubBox,
	SubtotalBox,
	SubtotalChild,
} from './Subtotal.style';

export const Subtotal = () => {
	return (
		<SubtotalBox>
			<SubtotalChild>
				<SubBox>
					<Typography variant='body1'>Subtotal</Typography>
					<Typography variant='body1'>&#8358;2,497.00</Typography>
				</SubBox>
				<SubBox>
					<Typography variant='body1'>Estimated TAX</Typography>
					<Typography variant='body1'>&#8358;119.64</Typography>
				</SubBox>
				<SubBox>
					<Typography variant='body1'>
						Promotional Code:<span> Z4KXLM9A</span>
					</Typography>
					<Typography variant='body1'>&#8358;-60.00</Typography>
				</SubBox>
			</SubtotalChild>
			<PaymentBox>
				<PaymentChild>
					<Button variant='contained'>Complete Payment</Button>
					<Typography variant='h6'>TOTAL:&#8358;2556.64</Typography>
				</PaymentChild>
			</PaymentBox>
		</SubtotalBox>
	);
};
