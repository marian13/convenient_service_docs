import React from 'react';

import Admonition from '@theme/Admonition';

import currentVersion from '/src/constants/version';

const AvailableFromNote = ({ version }) => {
  if (parseFloat(currentVersion) >= parseFloat(version)) return null;

  return (
    <Admonition type="warning">
      <p>The functionality described on this page is available from v{version}.</p>
    </Admonition>
  )
};

export default AvailableFromNote;
