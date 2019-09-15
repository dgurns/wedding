import styled from 'styled-components';
import { tablet, mobile } from '../../utils/mediaQueries';
import theme from '../../utils/theme';

const HeaderStyles = styled.div`
  color: ${theme.sage};
  display: flex;
  font-family: ${theme.titleFont};
  height: 100px;
  line-height: 1.2;
  margin: 4rem 0;
  width: ${theme.maxContentWidth};
  position: relative;
  a {
    text-decoration: none;
    transition: color 0.3s;
    &:hover {
      color: ${theme.copper};
    }
  }
  .title {
    font-size: ${theme.titleFontSize};
    position: absolute;
    transform: rotate(-4deg);
    width: 300px;
    ${tablet} {
      animation-name: title-mobile;
      left: 20px;
    }
    ${mobile} {
      max-width: 300px;
      padding-right: 10px;
      width: 100%;
    }
  }
  ul {
    bottom: 0px;
    display: flex;
    flex-direction: row;
    font-size: ${theme.subheadFontSize};
    justify-content: flex-end;
    position: absolute;
    right: 0px;
    li {
      margin-bottom: 0.5rem;
      margin-left: 3rem;
    }
    ${tablet} {
      animation-name: nav-mobile;
      right: 20px;
    }
    ${mobile} {
      flex-direction: column;
      text-align: right;
    }
  }
  ${tablet} {
    height: 155px;
    width: 100%;
  }
  ${mobile} {
    height: 295px;
    margin-bottom: 2rem;
  }
`;

export default HeaderStyles;
