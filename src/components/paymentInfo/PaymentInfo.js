import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {
	CardBox,
	ChildBox,
	DetailsBox,
	DetailsForm,
	FormBox,
	FormChild,
	FormChildB,
	InfoBox,
	InfoChildA,
	InfoChildB,
	ProductInfoBox,
} from './PaymentInfo.style';
import visa from '../../image/visa.jfif';
import discover from '../../image/discover.png';
import paypal from '../../image/paypal.png';
import card from '../../image/card.png';

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
					<CardBox>
						<img src={card} alt='atm card' />
					</CardBox>
					<DetailsForm>
						<FormBox>
							<FormChild>
								<Typography variant='body1'>Credit card number</Typography>
								<TextField
									id='credit-card'
									variant='outlined'
									label='4324 5433 9382 1030'
									disabled
								/>
							</FormChild>
							<FormChild>
								<Typography variant='body1'>Expiration date</Typography>
								<TextField
									id='expiration-date'
									variant='outlined'
									label='03/24'
									disabled
								/>
							</FormChild>
						</FormBox>
						<FormBox>
							<FormChild>
								<Typography variant='body1'>Security code</Typography>
								<TextField
									id='security-code'
									variant='outlined'
									label='420'
									disabled
								/>
							</FormChild>
							<FormChild>
								<Typography variant='body1'>Postal code</Typography>
								<TextField
									id='postal-code'
									variant='outlined'
									label='10119'
									disabled
								/>
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
