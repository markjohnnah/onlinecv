import './App.css';
import { Grommet, Box } from 'grommet';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <div className="App">
       <Grommet theme={theme}>
      <header className="App-header">      
        <h1>My Site</h1>
        <p>I'm blabla...</p>
       
      </header>
      </Grommet>
    </div>
   
  );
}

export default App;
