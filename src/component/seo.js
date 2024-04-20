import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, status, url }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:status" content={status} />
    <link rel="canonical" href={url} />
  </Helmet>
);

export default SEO;