import React from "react";

interface Props {
  src: string;
}

const LivingPortrait: React.FC<Props> = ({ src }) => {
  return <img src={src} width="100%" style={{ borderRadius: "16px" }} />;
};

export default LivingPortrait;
