import React from 'react';
import { Helmet } from 'react-helmet';

export const PageHead = () => (
  <Helmet title="Lukasz Semik | Hi!">
    <meta
      name="description"
      // eslint-disable-next-line max-len
      content="Łukasz Semik - Software Engineer, Fullstack Web Developer, Project and Team Leader, driven by passion to JavaScript."
    />
    <meta
      name="keywords"
      content="web, development, frontend, backend, developer, fullstack"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Lato:ital,wght@0,400;0,700;0,900;1,300&display=swap"
      rel="stylesheet"
    />
  </Helmet>
);
