import React from "react";
import { Fixed, Text } from "@primer/components";

export const Home: React.FC = () => {
  return (
    <Fixed top="50%" left="40%">
      <Text
        fontWeight="bold"
        fontFamily="sans-serif"
        color="gray.0"
        fontSize={32}
      >
        Coming Soon!
      </Text>
    </Fixed>
  );
}