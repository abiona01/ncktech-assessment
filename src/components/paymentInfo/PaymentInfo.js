import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {
	ChildBox,
	DetailsBox,
	DetailsForm,
	FormBox,
	FormChild,
	FormChildB,
	InfoBox,
	InfoChildA,
	InfoChildB,
	PaymentInfoBody,
	ProductInfoBox,
} from './PaymentInfo.style';
import visa from '../../image/visa.jfif';
import discover from '../../image/discover.png';
import paypal from '../../image/paypal.png';

export const PaymentInfo = () => {
	return (
		<ProductInfoBox>
			<>
				<InfoBox>
					<InfoChildA>
						<Typography variant='h6' component='h6'>
							Payment Information
						</Typography>
						<Typography component='body1'>
							Choose your method of payment.
						</Typography>
					</InfoChildA>
					<InfoChildB>
						<ChildBox>
							<img src={visa} alt='visa card' />
							<img src={discover} alt='discover card' />
						</ChildBox>
						<ChildBox>
							<RadioGroup aria-label='gender' name='radio-buttons-group'>
								<FormControlLabel
									value='Use this card for the next purchase'
									control={<Radio />}
									label=''
								/>
							</RadioGroup>
							<img src={paypal} alt='paypal logo' className='paypal' />
						</ChildBox>
					</InfoChildB>
				</InfoBox>
				<DetailsBox>
					<DetailsForm>
						<FormBox>
							<FormChild>
								<Typography variant='body1'>Credit card number</Typography>
								<TextField id='credit-card' variant='outlined' label='' />
							</FormChild>
							<FormChild>
								<Typography variant='body1'>Expiration date</Typography>
								<TextField id='expiration-date' variant='outlined' label='' />
							</FormChild>
						</FormBox>
						<FormBox>
							<FormChild>
								<Typography variant='body1'>Security code</Typography>
								<TextField id='security-code' variant='outlined' label='' />
							</FormChild>
							<FormChild>
								<Typography variant='body1'>Postal code</Typography>
								<TextField id='postal-code' variant='outlined' label='' />
							</FormChild>
						</FormBox>
						<FormChildB>
							<RadioGroup
								aria-label='gender'
								defaultValue='Use this card for the next purchase'
								name='radio-buttons-group'
							>
								<FormControlLabel
									value='Use this card for the next purchase'
									control={<Radio />}
									label='Use this card for the next purchase'
								/>
							</RadioGroup>
						</FormChildB>
						<Button variant='contained'>Add Card</Button>
					</DetailsForm>
				</DetailsBox>
			</>
		</ProductInfoBox>
	);
};
