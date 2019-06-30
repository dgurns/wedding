import { withRouter } from 'next/router';
import styled from 'styled-components';
import { tablet, mobile } from '../utils/mediaQueries';
import theme from '../utils/theme';

const HeaderStyles = styled.div`
  color: ${props => props.theme.sage};
  display: flex;
  flex: 1;
  font-family: ${props => props.theme.titleFont};
  height: 100px;
  margin-top: 3rem;
  width: ${props => props.theme.maxContentWidth};
  position: relative;
  a {
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.copper};
    }
  }
  .title {
    font-size: ${props => props.theme.titleFontSize};
    left: 0;
    position: absolute;
    transform: rotate(-4deg);
    top: 0;
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
  ul {
    bottom: 0;
    display: flex;
    flex-direction: row;
    font-size: ${props => props.theme.subheadFontSize};
    justify-content: flex-end;
    right: 0;
    position: absolute;
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
  ${tablet} {
    height: 145px;
    width: 100%;
  }
  ${mobile} {
    height: 235px;
  }
`;

const Header = ({ router }) => {
  const currentRoute = router.asPath;
  const applySelected = targetRoute =>
    targetRoute === currentRoute ? { color: theme.copper } : null;

  return (
    <HeaderStyles>
      <div className="title">
        <a style={applySelected('/')}>Christina and Dan's Wedding</a>
      </div>
      <ul>
        <li>
          <a style={applySelected('/schedule')}>Schedule</a>
        </li>
        <li>
          <a style={applySelected('/lodging')}>Lodging</a>
        </li>
        <li>
          <a style={applySelected('/story')}>Story</a>
        </li>
        <li>
          <a style={applySelected('/contact')}>Contact</a>
        </li>
      </ul>
    </HeaderStyles>
  );
};

export default withRouter(Header);
