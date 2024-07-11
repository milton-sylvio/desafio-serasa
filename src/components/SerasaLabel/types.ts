import {
  ColorProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

export type IPropsStyles = ColorProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  TypographyProps;

export interface IProps {
  description: string;
  name: string;
}
