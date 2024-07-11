import {
  LoadingPageContainer,
  LoadingPageLoadingTxt,
  LoadingPageTxt,
  LoadingPageWrapper,
  LogoSerasa,
} from './styles';

export const SerasaLoadingPage = () => (
  <LoadingPageWrapper
    backgroundColor="#FE008A"
    bottom={0}
    color="#FFF"
    display="flex"
    justifyContent="center"
    left={0}
    position="fixed"
    right={0}
    top={0}
    width="100%"
  >
    <LoadingPageContainer marginTop={100} textAlign="center" width={420}>
      <LogoSerasa height={72} width={72} />

      <LoadingPageTxt
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <div>
          <LoadingPageLoadingTxt>Aguarde</LoadingPageLoadingTxt>
          <p>Estamos enviando sua avaliação</p>
        </div>
      </LoadingPageTxt>
    </LoadingPageContainer>
  </LoadingPageWrapper>
);
