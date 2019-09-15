import { withRouter } from 'next/router';
import Link from 'next/link';
import theme from '../utils/theme';
import HeaderStyles from './styles/Header';

const Header = ({ router }) => {
  const currentRoute = router.asPath;
  const applySelected = targetRoute =>
    targetRoute === currentRoute ? { color: theme.copper } : null;

  return (
    <HeaderStyles>
      <div className="title">
        <Link href="/">
          <a style={applySelected('/')}>Christina and Dan's Wedding</a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/schedule">
            <a style={applySelected('/schedule')}>Schedule</a>
          </Link>
        </li>
        <li>
          <Link href="/lodging">
            <a style={applySelected('/lodging')}>Lodging</a>
          </Link>
        </li>
        <li>
          <Link href="/story">
            <a style={applySelected('/story')}>Story</a>
          </Link>
        </li>
        <li>
          <Link href="/gifts">
            <a style={applySelected('/gifts')}>Gifts</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a style={applySelected('/contact')}>Contact</a>
          </Link>
        </li>
      </ul>
    </HeaderStyles>
  );
};

export default withRouter(Header);
