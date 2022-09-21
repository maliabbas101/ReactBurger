import './App.css';
import { Burger } from './Components/Burger';
import { Header } from './Components/Header'

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="text-center my-3">
            <Burger />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
