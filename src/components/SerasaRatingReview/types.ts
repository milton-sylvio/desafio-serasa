import type { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import type {
  BorderProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';

export interface IProps extends HTMLAttributes<HTMLElement> {
  rating: number;
  setRating: (rating: number) => void;
  error: boolean;
}

export type IPropsStyledSystem = BorderProps &
  LayoutProps &
  PositionProps &
  SpaceProps;

export interface IPropsStyles
  extends IPropsStyledSystem,
    ButtonHTMLAttributes<HTMLButtonElement> {
  fillColor: string;
}
