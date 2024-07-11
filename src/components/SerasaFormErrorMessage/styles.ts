import styled from 'styled-components';
import { color, layout, space, typography } from 'styled-system';

import { IPropsStyles } from './types';

export const FormErrorMessage = styled.span<IPropsStyles>`
  ${color};
  ${layout};
  ${space};
  ${typography};
`;
