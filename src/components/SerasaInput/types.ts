import { InputHTMLAttributes } from 'react'
import {
  BorderProps,
  ColorProps,
  LayoutProps,
  PositionProps,
} from 'styled-system'

export type IProps = InputHTMLAttributes<HTMLInputElement>

export type IPropsStyles = BorderProps &
  ColorProps &
  LayoutProps &
  PositionProps
