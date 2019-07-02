import styled from 'styled-components';
import { tablet, mobile } from '../../utils/mediaQueries';
import theme from '../../utils/theme';

const PageContent = styled.div`
  align-items: flex-start;
  background-color: ${theme.white};
  box-shadow: ${theme.boxShadow};
  color: ${theme.offBlack};
  flex-direction: column;
  padding: 2rem;
  width: ${theme.maxContentWidth};
  .heading {
    color: ${theme.lightSage};
    display: block;
    font-family: ${theme.titleFont};
    font-size: ${theme.subheadFontSize};
    margin-bottom: 2rem;
  }
  ${tablet} {
    box-shadow: none;
    width: 100vw;
  }
`;

export default PageContent;
