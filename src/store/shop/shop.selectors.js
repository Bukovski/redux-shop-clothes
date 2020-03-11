import { createSelector } from 'reselect';


const selectShop = state => state.shop;

export const selectCollections = createSelector(
	[ selectShop ],
	shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
	[ selectCollections ],
	collections => collections
		? Object.keys(collections).map(key => collections[key])
		: [] // if the data has not yet come from the database
);

// looking for the category received from the URL
// transfers only this data group for output on one page
export const selectCollection = collectionUrlParam => createSelector(
		[ selectCollections ],
		collections => collections
			? collections[collectionUrlParam]
			: null // if the data has not yet come from the database
	);

export const selectIsCollectionFetching = createSelector(
	[ selectShop ],
	shop => shop.isFetching
);

// if data has not yet come from db, return false if data come return true
export const selectIsCollectionsLoaded = createSelector(
	[ selectShop ],
	shop => !!shop.collections
);