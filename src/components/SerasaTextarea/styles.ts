import styled from 'styled-components'
import { border, color, layout, position, typography } from 'styled-system'

import { IPropsStyles } from './types'

export const TextareaStyled = styled.textarea<IPropsStyles>`
  ${border};
  ${color};
  ${layout};
  ${position};
  ${typography};
`
