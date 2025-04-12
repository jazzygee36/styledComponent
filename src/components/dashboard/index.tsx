import { DashboardProps } from '../../utils/interfaces';
import Header from './header';
import Sidebar from './sidebar';
import { DashbordContainer, HeaderContainer, ChildrenDiv } from './styled';

const MainDashboard = ({ children }: DashboardProps) => {
  return (
    <DashbordContainer>
      <Header />

      <HeaderContainer>
        <Sidebar />
        <ChildrenDiv>{children}</ChildrenDiv>
      </HeaderContainer>
    </DashbordContainer>
  );
};

export default MainDashboard;
