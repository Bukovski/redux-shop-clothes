import React from 'react';
import PropTypes from 'prop-types';

import CollectionItem from 'components/collection-item/collection-item.component';

import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './collection-preview.styles';


const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={ () => history.push(`${ match.path }/${ routeName }`) }>
      { title.toUpperCase() }
    </TitleContainer>
    
    <PreviewContainer>
      {
        items
          .filter((item, idx) => idx < 4)
          .map(item => (<CollectionItem key={ item.id } item={ item } />) )
      }
    </PreviewContainer>
  </CollectionPreviewContainer>
);


CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
  })),
  history: PropTypes.object,
  match: PropTypes.object,
  routeName: PropTypes.string
};


export default CollectionPreview;
