import logo from './logo.svg';
import './App.css';
import LeftFooter from './components/shared/LeftFooter';
import RightFooter from './components/shared/RightFooter';
import Header from './components/shared/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <LeftFooter />
      <RightFooter />
    </div>
  );
}

export default App;
