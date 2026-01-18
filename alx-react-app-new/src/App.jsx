import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage.jsx'
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx' 
import UserProfile from './components/UserProfile'
import Footer from './components/Footer.jsx'
import Counter from './components/Counter';


  
function App() {
  /*const [count, setCount] = useState(0)*/

  return (
    <>
      {/* 
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>   */}
      <div>
        <WelcomeMessage />
        <Header />
        <MainContent />
      </div>
      
      <div>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="John" age="30" bio="Enjoys coding and teaching" />
      <UserProfile name="Mary" age="22" bio="Passionate about art and design" />
      </div>

      <div>
        <h2>React Counter App</h2>
        <Counter />
      </div>
      <div>
        <Footer />
      </div>
    </> 
  ) 
}
export default App;
