import styled from 'styled-components';
import { tablet, mobile } from '../../utils/mediaQueries';
import theme from '../../utils/theme';

const HeaderStyles = styled.div`
  color: ${theme.sage};
  display: flex;
  flex: 1;
  font-family: ${theme.titleFont};
  height: 100px;
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
    animation-duration: 1s;
    animation-name: title;
    font-size: ${theme.titleFontSize};
    position: absolute;
    transform: rotate(-4deg);
    width: 300px;
    ${tablet} {
      left: 20px;
    }
    ${mobile} {
      max-width: 300px;
      padding-right: 10px;
      width: 100%;
    }
  }
  @keyframes title {
    from {
      left: -5px;
      opacity: 0.5;
      top: -5px;
    }
    to {
      left: 0px;
      opacity: 1;
      top: 0px;
    }
  }
  ul {
    animation-duration: 1s;
    animation-name: nav;
    bottom: 0px;
    display: flex;
    flex-direction: row;
    font-size: ${theme.subheadFontSize};
    justify-content: flex-end;
    position: absolute;
    right: 0px;
    li {
      margin-left: 3rem;
    }
    ${tablet} {
      right: 20px;
    }
    ${mobile} {
      flex-direction: column;
      text-align: right;
    }
  }
  @keyframes nav {
    from {
      right: -5px;
      opacity: 0.5;
      bottom: 5px;
    }
    to {
      right: 0px;
      opacity: 1;
      bottom: 0px;
    }
  }
  ${tablet} {
    height: 145px;
    width: 100%;
  }
  ${mobile} {
    height: 235px;
  }
`;

export default HeaderStyles;