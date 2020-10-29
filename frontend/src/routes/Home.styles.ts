import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 64px auto 96px;
  grid-template-columns: 16px auto 16px;
  height: 100vh;
`;

export const Content = styled.div`
  display: grid;
  grid-row-start: 2;
  grid-column-start: 2;
  grid-template-rows: 96px 256px auto;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  margin-bottom: 32px;
`;

export const ActivityWrapper = styled.div``;

export const ActivityTitle = styled.h4``;

export const ActivityItemList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActivityItem = styled.span`
  color: gray;
  margin: 16px 0;
`;

export const InspirationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InspirationTitle = styled.h4``;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FoodImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 200px;
  margin-bottom: 24px;
`;

export const TabBarWrapper = styled.div`
  grid-row-start: 3;
`;
