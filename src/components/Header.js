import React from 'react';

class Header extends React.Component {
  render() {
    const headerText = 'Sistema Solar';
    return (
      <header>
        <h1>{ headerText }</h1>
      </header>
    );
  }
}

export default Header;
