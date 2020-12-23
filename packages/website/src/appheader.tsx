import React from "react";
import { Avatar, Header, StyledOcticon } from "@primer/components";
import { Locations, toHashPath } from "./locations";
import { MarkGithubIcon } from "@primer/octicons-react";

export const AppHeader: React.FC = () => {
  return (
    <Header>
      <Header.Item full>
        <Header.Link href={toHashPath(Locations.HOME)}>
          <Avatar
            alt={"@theMPatel"}
            src={"https://avatars0.githubusercontent.com/u/32933108?s=60&v=4"}
            size={32} mr={4} ml={2}
          />
        </Header.Link>
        <Header.Item>
          <Header.Link
            href={toHashPath(Locations.HOME)}
            fontFamily="sans-serif"
            fontWeight="bold"
          >
            Home
          </Header.Link>
        </Header.Item>
        <Header.Item>
          <Header.Link
            href={toHashPath(Locations.ABOUT)}
            fontFamily="sans-serif"
            fontWeight="bold"
          >
            About
          </Header.Link>
        </Header.Item>
        <Header.Item>
          <Header.Link
            href={toHashPath(Locations.THOUGHTS)}
            fontFamily="sans-serif"
            fontWeight="bold"
          >
            Thoughts
          </Header.Link>
        </Header.Item>
      </Header.Item>
      <Header.Item>
        <Header.Link href={"https://www.github.com/theMPatel"}>
          <StyledOcticon icon={MarkGithubIcon} size={24} />
        </Header.Link>
      </Header.Item>
    </Header>
  );
}