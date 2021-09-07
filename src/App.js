import './App.scss';
import LeftFooter from './components/shared/LeftFooter';
import Header from './components/shared/Header';
import Logo from './components/shared/Logo';

function App() {
  return (
    <div className="App">
      <Logo />
      <Header />
      <LeftFooter />
    </div>
  );
}

export default App;
