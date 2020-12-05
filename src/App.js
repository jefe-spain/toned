import sun from './assets/images/sun.svg';
import burger from './assets/images/burger.svg'

function App(props) {
  return (
    <div>
      <header className='container '>
        <div className="h-2.5 bg-yellow-500"></div>
        <nav className="px-6 py-4 mx-auto flex justify-between shadow-sm"> 
        <img className="w-10 h-10" src={burger} alt="menu" />
        <img className="w-10 h-10 fill-current text-yellow-800" src={sun} alt="darkmode" />
        </nav>
      </header>
    </div>
  );
}

export default App;
