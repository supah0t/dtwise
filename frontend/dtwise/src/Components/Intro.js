import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Readme from '../README.md';

export const Intro = () => {

  const [readme, setReadme] = useState();

  useEffect(() => {
    fetch(Readme)
      .then(res => res.text())
      .then(text => setReadme(text));
  },[]);

  return (
    <div>
      <ReactMarkdown children={readme} />
    </div>
  );
}
