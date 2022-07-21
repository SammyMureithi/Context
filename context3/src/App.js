import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { ThemeContextConsumer } from './ThemeContextProvider';
import Button from './Components/Button';
import Buttom from './Components/Buttom';

function App() {
  return (
    <div className="App">
     
      <Header/>
      <ThemeContextConsumer>
        {Context => (
          <Button theme={Context.theme} toggle={Context.toggle}/>
        )}
      </ThemeContextConsumer>
      <Button theme={"light"}/>
      <Buttom/>
      
    </div>
  );
}

export default App;
