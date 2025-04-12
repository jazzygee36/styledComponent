import { LeftSidebar } from './styled';
const Navigation = [
  { name: 'Overview', path: '/overview' },
  { name: 'Users', path: '/users' },
  { name: 'Posts', path: '/posts' },
];
const Sidebar = () => {
  return (
    <LeftSidebar>
      {Navigation.map((item, index) => {
        return (
          <div key={index}>
            <h3>{item.name}</h3>
          </div>
        );
      })}
      ;
    </LeftSidebar>
  );
};

export default Sidebar;
