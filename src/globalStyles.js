import 'modern-normalize/modern-normalize.css';

import { createGlobalStyle } from 'styled-components';

import MontserratBlack from './assets/fonts/Montserrat-Black.ttf';
import MontserratExtraBold from './assets/fonts/Montserrat-ExtraBold.ttf';
import MontserratBold from './assets/fonts/Montserrat-Bold.ttf';
import MontserratExtraLight from './assets/fonts/Montserrat-ExtraLight.ttf';
import MontserratLight from './assets/fonts/Montserrat-Light.ttf';
import MontserratMedium from './assets/fonts/Montserrat-Medium.ttf';
import MontserratRegular from './assets/fonts/Montserrat-Regular.ttf';
import MontserratSemiBold from './assets/fonts/Montserrat-SemiBold.ttf';

export const GlobalStyle = createGlobalStyle`

body{
  margin: 0;
  font-family: 'Montserrat',sans-serif;
}

p,
h1,
h2,
h3 {
  margin: 0;
}

ul {
  margin: 0;
  padding-left: 0;

  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a{
  text-decoration: none;
}


  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), local('Montserrat-Black'),
         url(${MontserratBlack}) format('truetype');
    font-weight: 900; 
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), local('Montserrat-ExtraBold'),
         url(${MontserratExtraBold}) format('truetype');
    font-weight: 800; 
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), local('Montserrat-Bold'),
         url(${MontserratBold}) format('truetype');
    font-weight: 700; 
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), local('Montserrat-SemiBold'),
         url(${MontserratSemiBold}) format('truetype');
    font-weight: 600; 
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), local('Montserrat-Medium'),
         url(${MontserratMedium}) format('truetype');
    font-weight: 500; 
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), local('Montserrat-Regular'),
         url(${MontserratRegular}) format('truetype');
    font-weight: 400; 
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), local('Montserrat-Light'),
         url(${MontserratLight}) format('truetype');
    font-weight: 300; 
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
  font-family: 'Montserrat';
  src: local('Montserrat'), local('Montserrat-ExtraLight'),
        url(${MontserratExtraLight}) format('truetype');
  font-weight: 200; 
  font-style: normal;
  font-display: swap;
  }

  ::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: #1214170d;
  border-radius: 35px;
}

::-webkit-scrollbar-track {
  margin: 15px;
}

`;
