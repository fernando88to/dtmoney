import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    --background: #F0F2F5;
    --red:#E52E4D;
    --blue: #5429CC;
    --green: #33CC95;
    
    --blue-light:#6933FF;
    
    --text-title: #363F5F;
    --text-body:#969CB3;
    
    --shape:#FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  //font-size padrão :16px (ótima para o desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;// 16*0.93 = 15 (px) 
    }

    @media (max-width: 720px) {
      //é utilizado em porcentagem pois se fosse em px ficaria fixo e mesmo que 
      //o usuário altera as configurações do navegador o tamnho não mudaria
      font-size: 87.5%; // 16*0.875 = 14.5 (px);
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  
  h1,h2,h3,h4,h5,h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }


  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }


`;