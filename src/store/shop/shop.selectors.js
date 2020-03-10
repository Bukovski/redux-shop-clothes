import { createSelector } from 'reselect';


const selectShop = state => state.shop;

export const selectCollections = createSelector(
	[ selectShop ],
	shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
	[ selectCollections ],
	collections => Object.keys(collections).map(key => collections[ key ])
);

// looking for the category received from the URL
// transfers only this data group for output on one page
export const selectCollection = collectionUrlParam => createSelector(
	[ selectCollections ],
	collections => collections[ collectionUrlParam ]
);