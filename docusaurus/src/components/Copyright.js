import React from 'react';

import getCurrentYear from '/src/functions/getCurrentYear';

const Copyright = () => (
  <p>
    Copyright (c) 2022 - {getCurrentYear()} <a href="/">Marian Kostyk</a>.
  </p>
);

export default Copyright;
