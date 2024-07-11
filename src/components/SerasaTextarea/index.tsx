import { TextareaStyled } from './styles'
import { IProps } from './types'

export const SerasaTextarea = ({ ...props }: IProps) => (
  <TextareaStyled
    border="1px solid #9F9F9F"
    borderRadius="8px"
    color="black"
    fontFamily="Roboto, sans-serif"
    width="100%"
    {...props}
  />
)
