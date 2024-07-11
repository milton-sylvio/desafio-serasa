import { FormErrorMessage } from './styles';
import { IProps } from './types';

export const SerasaFormErrorMessage = ({ message }: IProps) => (
  <FormErrorMessage role="alert" color="red" fontSize="0.75em">
    {message}
  </FormErrorMessage>
);
