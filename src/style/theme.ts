import { DefaultTheme } from 'styled-components';

const size = {
  mobileL: '576px',
  tablet: '768px',
  laptop: '992px',
};

export const theme: DefaultTheme = {
  colors: {
    mainColor: '#f39c12',
    subColor: '#30336b',
    blackColor: '#222',
  },

  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
};
