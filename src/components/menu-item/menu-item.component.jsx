import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { BackgroundImageContainer, ContentContainer, ContentSubtitle, ContentTitle, MenuItemContainer } from './menu-item.styles';


const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={ size }
    onClick={ () => history.push(`${ match.url }${ linkUrl }`) }
  >
    <BackgroundImageContainer
      className='background-image'
      imageUrl={ imageUrl }
    />
    <ContentContainer className='content'>
      <ContentTitle>{ title.toUpperCase() }</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);


MenuItem.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  size: PropTypes.string,
  history: PropTypes.object,
  linkUrl: PropTypes.string,
  match: PropTypes.object
};


export default withRouter(MenuItem);
