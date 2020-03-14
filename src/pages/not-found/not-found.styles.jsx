import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
  color: #2f8e89;
`;

export const ErrorLinkContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ErrorLink = styled(Link)`
	display: inline-block;
  padding: 0 10px;
  border: 2px solid;
  font-size: 28px;
  color: #2f8e89;
  transition: .25s linear;
  
  &:hover {
	  background: #2f8e89;
	  color: #fff;
  }
`;
