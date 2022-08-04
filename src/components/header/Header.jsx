import { Navbar, Logo, Links } from './Style';

const Header = () => (
  <Navbar>
    <Logo>
      <img src="/logo.png" alt="logo" />
      <a href="#home">Reddit Timer</a>
    </Logo>
    <Links>
      <a href="#search">Search</a>
      <a href="#how-it-work">How It Work</a>
      <a href="#about">About</a>
    </Links>
  </Navbar>
);

export default Header;
