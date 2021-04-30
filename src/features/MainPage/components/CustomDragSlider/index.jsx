import React from "react";
import img from '../../../../assets/images/bloom.jpg';
import { ThemeProvider } from "styled-components";
import CardItem from "../CardItem";

import {
  Annotation,
  Box,
  Container,
  DragSlider,
  FlexItem,
  Heading,
  Paragraph,
  theme
} from "./ui";

import "./ui/molecules/global-styles/global.css";

// function rand(min = 200, max = 500) {
//   return Math.floor(Math.random() * (+max - +min)) + +min;
// }

export default function CustomDragSlider() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box mb={6}>
          <DragSlider>
            {[...Array(10).keys()].map((item, key) => (
              <FlexItem key={key} width={350} height={380}>
                <CardItem width={350} img={img} item={item}/>
              </FlexItem>
            ))}
          </DragSlider>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

