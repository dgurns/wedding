import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Header from './Header';
import Meta from './Meta';

const theme = {
  maxWidth: '1000px'
};

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Meta />
          <GlobalStyle />
          <Header />
          {this.props.children}
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
