import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from "store/directory/directory.selectors";

import MenuItem from 'components/menu-item/menu-item.component';

import './directory.styles.scss';


const Directory = ({ sections }) => {
	return (
		<div className='directory-menu'>
			{
				sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={ id } { ...otherSectionProps } />
				))
			}
		</div>
	);
};


Directory.propTypes = {
	sections: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			title: PropTypes.string,
			imageUrl: PropTypes.string,
			linkUrl: PropTypes.string
		})
	)
};


const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
});


export default connect(mapStateToProps)(Directory);
