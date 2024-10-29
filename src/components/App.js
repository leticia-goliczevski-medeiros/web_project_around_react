import '../blocks/page.css'
import Header from './Header.js'
import Main from './Main.js';
import Footer from './Footer.js'

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
