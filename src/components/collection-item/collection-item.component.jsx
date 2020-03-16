import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addItem } from "store/cart/cart.actions";

import { CollectionItemContainer, CollectionFooterContainer, AddButton, BackgroundImage, NameContainer, PriceContainer } from './collection-item.styles';


const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  
  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={ imageUrl } />
      
      <CollectionFooterContainer>
        <NameContainer>{ name }</NameContainer>
        <PriceContainer>{ price }</PriceContainer>
      </CollectionFooterContainer>
      
      <AddButton onClick={ () => addItem(item) } inverted>Add to cart</AddButton>
    </CollectionItemContainer>
  );
};


CollectionItem.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
  addItem: PropTypes.func.isRequired
};


const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});


export default connect(null, mapDispatchToProps)(CollectionItem);
