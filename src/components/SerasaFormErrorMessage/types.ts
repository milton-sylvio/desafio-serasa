import {
  ColorProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

export type IPropsStyles = ColorProps &
  LayoutProps &
  SpaceProps &
  TypographyProps;

export type IProps = {
  message?: string;
};
