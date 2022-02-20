import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string;
      borderColor: string;
      alertColor: string;
    };
    fontSize: {
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
      xxs: string;
    };
    spacing: {
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
    };
  }
}
