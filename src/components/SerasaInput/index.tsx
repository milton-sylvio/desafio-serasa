import { InputStyled } from './styles';
import { IProps } from './types';

export const SerasaInput = ({ ...props }: IProps) => (
  <InputStyled
    border="1px solid #9F9F9F"
    borderRadius="8px"
    color="black"
    height="42px"
    width="100%"
    {...props}
  />
);
