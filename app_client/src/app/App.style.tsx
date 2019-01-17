import styled from 'styled-components';

export const HeaderComponent = styled.div`
  background-color: yellow;

  margin: 0;
  padding: 0;
  font-family: sans-serif;

  .asd {
    color: red;
  }

  .App {
    text-align: center;
  }

  .App-logo {
    animation: App-logo-spin infinite 20s linear;
    height: 80px;
  }

  .App-header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
  }

  .App-title {
    font-size: 1.5em;
  }

  .App-intro {
    font-size: large;
  }

  .aaaa {
    color: blue($color: #000000);
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
