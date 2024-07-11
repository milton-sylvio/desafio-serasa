import { IProps } from './types';
import { LabelStyled } from './styles';

export const SerasaLabel = ({ description, name }: IProps) => (
  <LabelStyled
    display="block"
    fontWeight={500}
    marginBottom={10}
    htmlFor={name}
  >
    {description}
  </LabelStyled>
);
