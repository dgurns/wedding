import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../utils/theme';
import GlobalStyles from './styles/Global';
import Header from './Header';
import Meta from './Meta';

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
