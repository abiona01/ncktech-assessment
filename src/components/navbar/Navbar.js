import { NavBox, NavContainer, NavItem, NavText } from './Navbar.style';
import Avatar from '@mui/material/Avatar';
import NavImage from '../../image/bodak1.jfif';
export const Navbar = () => {
	return (
		<NavContainer>
			<NavBox>
				<NavItem>
					<NavText component='h6'>TRIPS</NavText>
				</NavItem>
				<NavItem>
					<NavText component='h6'>RECENTLY VIEWED</NavText>
				</NavItem>
				<NavItem>
					<NavText component='h6'>BOOKINGS</NavText>
				</NavItem>
				<NavItem>
					<Avatar src={NavImage} alt='Nvatar' />
				</NavItem>
			</NavBox>
		</NavContainer>
	);
};
