import { buttonProps } from '../../utils/interfaces';
import { Button } from './styled';

const HomeButton = ({ title }: buttonProps) => {
  return <Button>{title}</Button>;
};

export default HomeButton;
