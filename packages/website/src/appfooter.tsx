import React from "react";
import { Text, Fixed } from "@primer/components";

export const AppFooter: React.FC = () => {
  return (
    <Fixed bottom={0}>
      <Text>
        This is a footer
      </Text>
    </Fixed>
  );
}