import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { CuartoComponente } from './CuartoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          BB <code>src/App.js</code> and save to reload.
        </p>

        {/*Cargamos MiComponente */}
        <div className='componentes'>

          <hr/>
          <TercerComponente />
          <hr/>
          <SegundoComponente/>
          <hr/>
          <MiComponente/>
          <hr/>
          <CuartoComponente/>

          
        </div>
        

      </header>

      

    </div>
  );
}

export default App;
