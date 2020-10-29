import styled from "styled-components";

interface WrapperInterface {
  cardColor: string;
}

export const Wrapper = styled.div<WrapperInterface>`
  background-color: ${(props) =>
    props.cardColor ? props.cardColor : "#FFBC25"};
  width: 303px;
  height: 210px;
  border-radius: 25px;
  margin: 0 12px 12px 12px;
  padding: 0 24px;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 900;
  color: white;
`;

export const Description = styled.p`
  margin-top: 4px;
  font-size: 14px;
  font-weight: 400;
  color: white;
`;

export const Duration = styled.p`
  margin-top: 12px;
  font-weight: 400;
  font-size: 14px;
  color: white;
`;

export const StarList = styled.div`
  margin-top: 24px;
  > * {
    margin-right: 4px;
  }
`;
