import React from 'react';
import PropTypes from 'prop-types';

import { CustomButtonContainer } from "./custom-button.styles";


const CustomButton = ({ children, ...props }) => {
  return (
    <CustomButtonContainer { ...props }>
      { children }
    </CustomButtonContainer>
  );
};


CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  props: PropTypes.object
};


export default CustomButton;
