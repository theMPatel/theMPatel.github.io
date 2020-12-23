import React from "react";
import { Avatar, Header, StyledOcticon } from "@primer/components";
import { Locations, toHashPath } from "./locations";
import { BeakerIcon } from "@primer/octicons-react";

export const AppHeader: React.FC = () => {
  return (
    <Header>
      <Header.Item full>
        <Header.Link href={toHashPath(Locations.HOME)}>
          <StyledOcticon
            icon={BeakerIcon}
            size={32}
            ml={4}
            mr={4}
          />
        </Header.Link>
      </Header.Item>
      <Header.Item>
        <Header.Link
          href={toHashPath(Locations.HOME)}
          fontFamily="monospace"
          fontWeight="normal"
        >
          Home
        </Header.Link>
      </Header.Item>
      <Header.Item>
        <Header.Link
          href={toHashPath(Locations.ABOUT)}
          fontFamily="monospace"
          fontWeight="normal"
        >
          About
        </Header.Link>
      </Header.Item>
      <Header.Item>
        <Header.Link
          href={toHashPath(Locations.THOUGHTS)}
          fontFamily="monospace"
          fontWeight="normal"
        >
          Thoughts
        </Header.Link>
      </Header.Item>
      <Header.Item>
        <Avatar
          alt={"@theMPatel"}
          src={"https://avatars0.githubusercontent.com/u/32933108?s=60&v=4"}
          size={24}
        />
      </Header.Item>
    </Header>
  );
}