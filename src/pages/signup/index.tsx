import { Link } from 'react-router-dom';
import Logo from '../../assets/svg/logo';
import SignInImg from '../../assets/svg/signIn';
import HomeButton from '../../components/button';
import HomeInput from '../../components/input/index';
import {
  Container,
  DownImgDiv,
  LogoDiv,
  SignIn,
  SignInContainer,
  SignupDiv,
  SignupImgDiv,
} from './styled';

const SignUp = () => {
  return (
    <Container>
      <SignupImgDiv>
        <LogoDiv>
          <Logo />
        </LogoDiv>
        {/* <DownImgDiv>
          <SignInImg />
        </DownImgDiv> */}
      </SignupImgDiv>
      <SignupDiv>
        <SignInContainer>
          <SignIn>Sign In</SignIn>
          <HomeInput label='Enter Address' placeholder='Enter your email' />
          <HomeInput label=' Password' placeholder='Enter Password' />
          <Link to='/overview'>
            <HomeButton title='Sign In' />
          </Link>
        </SignInContainer>
      </SignupDiv>
    </Container>
  );
};

export default SignUp;
