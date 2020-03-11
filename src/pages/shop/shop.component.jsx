import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionFetching, selectIsCollectionsLoaded } from "store/shop/shop.selectors";
import { fetchCollectionsStartAsync } from "store/shop/shop.actions";

import CollectionPage from 'pages/collection/collection.component';
import WithSpinner from 'components/with-spinner/with-spinner.component';
import CollectionsOverview from 'components/collections-overview/collections-overview.component';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    
    fetchCollectionsStartAsync(); // data request to firebase db
  }
  
  
  render() {
    const { match, isFetchingCollections, isCollectionFetching } = this.props;
    
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={ (props) => <CollectionsOverviewWithSpinner isLoading={ isFetchingCollections } { ...props } /> }
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={ (props) => <CollectionsPageWithSpinner isLoading={ !isCollectionFetching } { ...props } /> }
        />
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  isFetchingCollections: selectIsCollectionFetching,
  isCollectionFetching: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
