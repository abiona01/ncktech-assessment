import { Navbar } from '../navbar/Navbar';
import { PaymentInfo } from '../paymentInfo/PaymentInfo';
import { Subtotal } from '../subtotal/Subtotal';
export const Landing = () => {
	return (
		<div>
			<Navbar />
			<PaymentInfo />
			<Subtotal />
		</div>
	);
};
