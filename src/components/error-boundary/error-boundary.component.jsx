import React from 'react';
import PropTypes from 'prop-types';

import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundary.styles'


export default class ErrorBoundary extends React.Component {
  state = {
    hasErrored: false
  };
  
  static getDerivedStateFromError(error) {
    return { hasErrored: true }
  };
  
  componentDidCatch(error, errorInfo) {
    console.log(error);
  }
  
  render() {
    if (this.state.hasErrored) {
      return(
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      )
    }
    
    return this.props.children;
  }
}


ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};
