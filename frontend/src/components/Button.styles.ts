import styled from "styled-components";

//Hover effect - Fade: https://github.com/IanLunn/Hover/blob/master/css/hover.css
// https://ianlunn.github.io/Hover/#licenses

export const ButtonStyle = styled.button`
  display: inline-block;
  outline: none;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  height: 40px;
  font-size: 16px;
  font-weight: normal;
  border: 1px solid black;
  text-align: center;
  padding: 10px 32px;
  border-radius: 24px;
  color: black;
  background-color: white;
  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    cursor: pointer;
    color: white;
    background-color: black;
    font-weight: bold;
  }
`;
