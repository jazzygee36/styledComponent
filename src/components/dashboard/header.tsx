import Logo from '../../assets/svg/logo';
import { HContainer, HeaderDiv } from './styled';

const Header = () => {
  return (
    <HContainer>
      <HeaderDiv>
        <Logo />
        <div>logo</div>
      </HeaderDiv>
    </HContainer>
  );
};

export default Header;
