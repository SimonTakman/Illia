import React from "react";
import { Button } from "../components/Button";
import {
  ActivityTitle,
  ActivityWrapper,
  Content,
  Wrapper,
  Title,
  ActivityItem,
  ActivityItemList,
  InspirationWrapper,
  InspirationTitle,
  ButtonWrapper,
  FoodImage,
  TabBarWrapper,
} from "./Home.styles";
import { Link } from "react-router-dom";
import { TabBar } from "../components/TabBar";

export const Home = (props: any) => {
  const image = { src: "./broccolipudding.jpg", alt: "broccolipudding" };
  return (
    <Wrapper>
      <Content>
        <Title>Good morning!</Title>
        <ActivityWrapper>
          <ActivityTitle>3 activities of the day</ActivityTitle>
          <ActivityItemList>
            <ActivityItem>1. Go out in the sun before lunch</ActivityItem>
            <ActivityItem>2. Talk to someone you care about</ActivityItem>
            <ActivityItem>
              3. Call someone you haven't talked to in a while
            </ActivityItem>
          </ActivityItemList>
        </ActivityWrapper>
        <InspirationWrapper>
          <InspirationTitle>
            Vitamin D is great for your health
          </InspirationTitle>
          <InspirationTitle>
            Broccolipudding is the recept of today
          </InspirationTitle>
          <FoodImage src={image.src} alt={image.alt} />
          <ButtonWrapper>
            <Link to="/about">
              <Button label={"Next"} />
            </Link>
          </ButtonWrapper>
        </InspirationWrapper>
      </Content>
      <TabBar />
    </Wrapper>
  );
};
