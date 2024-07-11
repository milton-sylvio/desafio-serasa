import {
  CircleCheckIcon,
  SuccessContainer,
  SuccessTitle,
  SuccessTxt,
  SuccessWrapper,
  LogoSerasa,
} from './styles';

export const Success = () => (
  <SuccessWrapper
    backgroundColor="#FE008A"
    bottom={0}
    color="#FFF"
    display="flex"
    justifyContent="center"
    left={0}
    overflow="hidden"
    position="absolute"
    right={0}
    height="100%"
    top={0}
    width="100%"
  >
    <SuccessContainer marginTop={100} textAlign="center" width={420}>
      <LogoSerasa height={72} width={72} />

      <SuccessTxt
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <div>
          <CircleCheckIcon />

          <SuccessTitle>Avaliação Enviada</SuccessTitle>
          <p>Obrigado por avaliar nossos serviços</p>
        </div>
      </SuccessTxt>
    </SuccessContainer>
  </SuccessWrapper>
);
