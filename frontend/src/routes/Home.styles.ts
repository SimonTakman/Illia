import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
`;

export const Content = styled.div`
  display: grid;
  grid-template-rows: 264px auto;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  font-family: "Roboto";
  font-weight: 700;
  color: #565566;
  font-size: 42px;
  margin-top: 24px;
  margin-bottom: 12px;
`;

export const ActivityWrapper = styled.div`
  border-top-right-radius: 48px;
  border-top-left-radius: 48px;
  background-color: #d4f5e9;
`;

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

export const TitleWrapper = styled.div`
  margin: 0 12px;
`;

export const DateText = styled.p`
  font-size: 15px;
  font-weight: 300;
  color: #565566;
  margin: 0;
`;
export const LocationText = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #565566;
  margin: 0;
  margin-bottom: 12px;
`;

export const WeatherList = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
