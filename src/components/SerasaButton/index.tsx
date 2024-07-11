import { ButtonStyled } from './styles';
import { IProps } from './types';

export const SerasaButton = ({ ...props }: IProps) => (
  <ButtonStyled
    backgroundColor="#FE008A"
    border="0"
    borderRadius="8px"
    color="white"
    fontSize={14}
    fontWeight="500"
    height="48px"
    width="100%"
    {...props}
  />
);
