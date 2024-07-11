import { ButtonHTMLAttributes } from 'react'
import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  LayoutProps,
  PositionProps,
  TypographyProps,
} from 'styled-system'

export type IProps = ButtonHTMLAttributes<HTMLButtonElement>

export type IPropsStyles = BackgroundProps &
  BorderProps &
  ColorProps &
  LayoutProps &
  PositionProps &
  TypographyProps
