import React from 'react';
import {
	ErrorImageContainer,
	ErrorImageOverlay,
	ErrorImageText,
	ErrorLinkContainer,
	ErrorLink
} from './not-found.styles';


const NotFound = () => (
	<div>
		<ErrorImageOverlay>
			<ErrorImageContainer imageUrl='https://i.imgur.com/O0DCcQy.png' />
			<ErrorImageText>Sorry page not found</ErrorImageText>
		</ErrorImageOverlay>
		<ErrorLinkContainer>
			<ErrorLink to="/">Return to Home Page</ErrorLink>
		</ErrorLinkContainer>
	</div>
);


export default NotFound;

/*<Redirect to='/' />*/

