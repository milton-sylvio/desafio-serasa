import styled, { keyframes } from 'styled-components';
import {
  color,
  flexbox,
  layout,
  position,
  space,
  typography,
} from 'styled-system';

import Logo from '../../assets/logo-serasa.svg';

import { IPropsStyledSystem } from './types';

const blinking = keyframes`
  0% { 
    opacity: 0; 
  } 
  50% { 
    opacity: 0.8; 
  }
  100% { 
    opacity: 0; 
  }
`;

export const LoadingPageWrapper = styled.section<IPropsStyledSystem>`
  ${color};
  ${flexbox};
  ${layout};
  ${position};
  ${space};
`;

export const LogoSerasa = styled(Logo)<IPropsStyledSystem>`
  ${color};
  ${flexbox};
  ${layout};
  ${position};
  ${space};
`;

export const LoadingPageContainer = styled.div<IPropsStyledSystem>`
  ${color};
  ${flexbox};
  ${layout};
  ${position};
  ${space};
  ${typography};
`;

export const LoadingPageTxt = styled.div<IPropsStyledSystem>`
  ${color};
  ${flexbox};
  ${layout};
  ${position};
  ${space};
`;

export const LoadingPageLoadingTxt = styled.h2`
  animation: ${blinking} 1.5s linear infinite;
`;
