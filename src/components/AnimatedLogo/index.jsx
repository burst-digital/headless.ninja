import React from 'react';
import * as animationData from './data.json';
import gradient from './gradient.png';

const img0 = animationData.assets.find(({ id }) => id === 'image_0');
img0.p = gradient;
img0.u = '';

export default function AnimatedLogoWrapper() {
  return (
    <div
      style={{
        maxWidth: 800,
        height: '100px',
        margin: '0 auto',
        overflow: 'hidden',
      }}
    >
      {typeof window !== 'undefined' && <AnimatedLogo />}
    </div>
  );
}

function AnimatedLogo() {
  const Lottie = require('react-lottie').default; // eslint-disable-line global-require
  return (
    <div
      style={{
        marginTop: '-160px',
      }}
    >
      <Lottie
        options={{
          animationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        isClickToPauseDisabled
      />
    </div>
  );
}