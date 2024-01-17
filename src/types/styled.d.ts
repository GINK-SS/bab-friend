import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      mainColor: string;
      subColor: string;
      blackColor: string;
    };
    mobileL: string;
    tablet: string;
    laptop: string;
  }
}
