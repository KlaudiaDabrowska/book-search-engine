import { createGlobalStyle } from 'styled-components';
import books from '../assets/images/books.jpg';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Arvo&display=swap');
    *{ 
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html{
        height: 100vh;
    }

    body, a, button {
        font-family: 'Montserrat', sans-serif;
    }

    body{
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${books});
        box-shadow: 0 0 26px 17px #000;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 97%;
        padding: 20px;
        text-align: center;
        height: 97%;
    }
    
    :root {
        font-size:16px;
    }

`;
