import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectCollection } from 'store/shop/shop.selectors';

import CollectionItem from 'components/collection-item/collection-item.component';

import './collection.styles.scss';


const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className='collection-page'>
      <h2 className='title'>{ title }</h2>
      <div className='items'>
        {
          items.map(item => (
            <CollectionItem key={ item.id } item={ item } />
          ))
        }
      </div>
    </div>
  );
};


CollectionPage.propTypes = {
  collection: PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      imageUrl: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number
    })),
  })
};


const mapStateToProps = (state, ownProps) => {
  const { collectionId } = ownProps.match.params;
  
  return {
    collection: selectCollection(collectionId)(state)
  }
};


export default connect(mapStateToProps)(CollectionPage);
