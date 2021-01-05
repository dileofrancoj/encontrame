import React from "react";
import { Helmet } from "react-helmet";
export interface HeadProps {
  title: string;
  description: string;
}

const Head: React.SFC<HeadProps> = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Head;
