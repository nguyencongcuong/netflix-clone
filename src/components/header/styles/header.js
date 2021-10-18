import styled from "styled-components";
import { Link as ReachRouterLink } from "react-router-dom";

export const Background = styled.div`
	display: flex;
	flex-flow: column wrap;
  background: url(${({src}) => (src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg")}) top left / cover no-repeat;
  border-bottom: 8px solid #222;
  @media (max-width: 1100px) {
    ${({dontShowOnSmallViewPort}) => dontShowOnSmallViewPort && "background: none;"}
  }
`;

export const Container = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: center;
  border-bottom: 8px solid #222;
	padding: 1em 3.5em;
`;

export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => active === "true" ? "700" : "normal"};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const Logo = styled.img`
	height: 32px;
	width: 108px;
	margin-right: 40px;

	@media (min-width: 1449px) {
		height: 45px;
		width: 167px;
	}
`;

export const ButtonLink = styled(ReachRouterLink)`
	background-color: red;
	border-radius: 3px;
	color: whitesmoke;
	text-decoration: none;
	padding: 0.2em 2em;
`;
