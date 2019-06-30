import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/Global';
import Header from './Header';
import Meta from './Meta';

const theme = {
  maxWidth: '1000px'
};

class PageLayout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Meta />
          <GlobalStyles />
          <Header />
          {this.props.children}
        </>
      </ThemeProvider>
    );
  }
}

export default PageLayout;
