import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'transform-tag-name',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
  ],
};
