import './App.scss';
import LeftFooter from './components/shared/LeftFooter';
import Header from './components/shared/Header';
import Logo from './components/shared/Logo';
import Main from './components/pages/Main';
import Footer from './components/shared/Footer';

function App() {
  return (
    <div className="App">
      <Logo />
      <Header />
      <Main />
      <LeftFooter />
      <Footer />
    </div>
  );
}

export default App;
