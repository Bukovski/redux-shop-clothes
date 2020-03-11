import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from "redux";

import { selectIsCollectionsLoaded } from "store/shop/shop.selectors";

import WithSpinner from 'components/with-spinner/with-spinner.component';
import CollectionPage from "./collection.component";


const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});


const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionContainer;
