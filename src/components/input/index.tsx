import { InputProps } from '../../utils/interfaces';

import { Input, Label } from './styled';

const HomeInput = ({
  placeholder,
  type,
  value,
  onChange,
  label,
}: InputProps) => {
  return (
    <div>
      <Label>{label}</Label>
      <Input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default HomeInput;
