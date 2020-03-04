import React from 'react';

import CollectionItem from 'components/collection-item/collection-item.component';

import './collection-preview.styles.scss';


const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      { items
        .filter((item, idx) => idx < 4) // show only first 4 product for each category
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={ id } { ...otherItemProps } />
        )) }
    </div>
  </div>
);


export default CollectionPreview;