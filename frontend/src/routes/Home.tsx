import React from "react";
import {
  ActivityWrapper,
  Content,
  Wrapper,
  Title,
  TitleWrapper,
  DateText,
  LocationText,
  WeatherList
} from "./Home.styles";
import { TabBar } from "../components/TabBar";
import { WeatherIcon } from "../components/WeatherIcon";
import { Sun } from "../icons/Sun";
import {SunCloud} from '../icons/SunCloud'
import {Cloud} from '../icons/Cloud'
import {ActivityContainer} from '../components/ActivityContainer'
export const Home = (props: any) => {
  return (
    <Wrapper>
      <Content>
        <TitleWrapper>
        <Title>Good morning</Title>
        <DateText>Today: 30 October 2020</DateText>
        <LocationText>Göteborg</LocationText>
        <WeatherList>
          <WeatherIcon title={"Morning"}><Sun/></WeatherIcon>
          <WeatherIcon title={"Lunch"}><SunCloud/></WeatherIcon>
          <WeatherIcon title={"Afternoon"}><Cloud/></WeatherIcon>
          <WeatherIcon title={"Evening"}><SunCloud/></WeatherIcon>
        </WeatherList>
        </TitleWrapper>
        <ActivityWrapper>
          <ActivityContainer></ActivityContainer>
        </ActivityWrapper>
      </Content>
      <TabBar />
    </Wrapper>
  );
};
