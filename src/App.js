import './App.scss';
import LeftFooter from './components/shared/LeftFooter';
import Header from './components/shared/Header';
import Logo from './components/shared/Logo';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Logo />
      <Header />
      <Main />
      <LeftFooter />
    </div>
  );
}

export default App;
