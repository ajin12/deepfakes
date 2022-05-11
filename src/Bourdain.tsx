import styled from "@emotion/styled";
import React from "react";

const StyledText = styled.div`
  margin-top: 8px;
  font-family: "PT Serif", serif;
`;

const Bourdain: React.FC = () => {
  return (
    <>
      <iframe
        width="100%"
        height="100%"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1109925649%3Fsecret_token%3Ds-YKVhlkD8hkD&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
      ></iframe>
      <div
        style={{
          fontSize: "10px",
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily:
            "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
          fontWeight: 100,
        }}
      >
        <a
          href="https://soundcloud.com/wiredmag"
          title="WIRED Mag"
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          WIRED Mag
        </a>{" "}
        ·{" "}
        <a
          href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1109925649%3Fsecret_token%3Ds-YKVhlkD8hkD&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
          title="Is This Really Anthony Bourdain's Voice?"
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          Is This Really Anthony Bourdain's Voice?
        </a>
      </div>
      <StyledText>
        Listen to an audio clip, generated using AI, of the chef reflecting on
        happiness.
      </StyledText>
    </>
  );
};

export default Bourdain;
