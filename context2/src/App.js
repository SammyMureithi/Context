import './App.css';
import Button from './Components/Button';
import Header from './Components/Header';
import ThemeContext from './ThemeContext';

function App() {
  return (
    <div className="App">
      <Header/>
      <ThemeContext.Consumer>
          {theme => (
            <Button theme={theme}/>
          )}
      </ThemeContext.Consumer>
      <Button />
    </div>
  );
}

export default App;
