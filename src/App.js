import GlobalStyle from "./commons/style/global-style";
import Theme from "./commons/style/theme";
import Board from "./components/board";

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Board />
    </Theme>
  );
}

export default App;
