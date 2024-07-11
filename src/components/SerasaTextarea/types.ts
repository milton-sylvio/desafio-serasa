import { TextareaHTMLAttributes } from 'react'
import {
  BorderProps,
  ColorProps,
  LayoutProps,
  PositionProps,
  TypographyProps,
} from 'styled-system'

export type IProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export type IPropsStyles = BorderProps &
  ColorProps &
  LayoutProps &
  PositionProps &
  TypographyProps
