// MiEnlace.js
import React from 'react';

const MiEnlace = ({ url, texto }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    {texto}
  </a>
);

export default MiEnlace;
