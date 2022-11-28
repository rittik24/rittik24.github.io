import styled from "styled-components"
export const TypeDiv = styled.div`
	width: 100%;
	height: auto;
	background: ${(props) => (props.theme == "light" ? "#272729" : "whitesmoke")};
	color: ${(props) => (props.theme == "dark" ? "#10101a" : "whitesmoke")};
	padding: 50px 0px;
	box-sizing: border-box;
`;

export const H1tag = styled.h1`



`