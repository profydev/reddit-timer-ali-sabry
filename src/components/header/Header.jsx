import { Navbar, Logo, Links } from './Style';

const Header = () => (
  <Navbar>
    <Logo>
      <img src="/logo.png" alt="logo" />
      <a href="/">Reddit Timer</a>
    </Logo>
    <Links>
      <a href="/search/javascript">Search</a>
      <a href="/#how-it-works">How It Works</a>
      <a href="/#about">About</a>
    </Links>
  </Navbar>
);

export default Header;
