import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from "store/shop/shop.actions";

import CollectionContainer from "pages/collection/collection.container";
import CollectionsOverviewContainer from 'components/collections-overview/collections-overview.container'


const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart(); // start data request to firebase db using saga
  }, [ fetchCollectionsStart ]);
  
  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${ match.path }`}
        component={ CollectionsOverviewContainer }
      />
      <Route
        path={`${ match.path }/:collectionId`}
        component={ CollectionContainer }
      />
    </div>
  );
};


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});


export default connect(null, mapDispatchToProps)(ShopPage);
