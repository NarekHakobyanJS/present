import logo from './logo.svg';
import './header.css';

function Header() {
  return (
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        React-ը JavaScript գրադարան է, որը նախատեսված է User Interface - էր ստեղծելու համար ։ 
        </p>
      </header>
  );
}

export default Header;