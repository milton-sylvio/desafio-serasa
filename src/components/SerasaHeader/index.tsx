import LogoSerasa from '../../assets/logo-serasa.svg';
import { HeaderStyled } from './styles';

export const SerasaHeader = () => (
  <HeaderStyled
    alignItems="center"
    backgroundColor="#FE008A"
    display="flex"
    height={124}
    justifyContent="center"
  >
    <LogoSerasa />
  </HeaderStyled>
);
