import styled, { css } from 'styled-components'
import { Link } from "react-router-dom";


// style wrap for div
export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

// wrap lib component
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;


// only style without wrap
const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const OptionLink = styled(Link)`
  ${ OptionContainerStyles }
`;
export const OptionDiv = styled.div`
  ${ OptionContainerStyles }
`;
