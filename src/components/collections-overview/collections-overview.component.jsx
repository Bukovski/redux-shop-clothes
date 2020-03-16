import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from 'components/collection-preview/collection-preview.component';

import { selectCollectionsForPreview } from 'store/shop/shop.selectors';

import './collections-overview.styles.scss';


const CollectionsOverview = ({ collections }) => {
	return (
		<div className='collections-overview'>
			{
				collections.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview key={ id } { ...otherCollectionProps } />
				))
			}
		</div>
	);
};


CollectionsOverview.propTypes = {
	collections: PropTypes.arrayOf(
		PropTypes.shape({
			routeName: PropTypes.string,
			id: PropTypes.string,
			title: PropTypes.string,
			items: PropTypes.arrayOf(PropTypes.shape({
				id: PropTypes.number,
				imageUrl: PropTypes.string,
				name: PropTypes.string,
				price: PropTypes.number,
				quantity: PropTypes.number
			}))
		})
	)
};


const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview
});


export default connect(mapStateToProps)(CollectionsOverview);
