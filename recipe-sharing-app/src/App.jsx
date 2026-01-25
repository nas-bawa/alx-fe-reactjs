// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import AddRecipeForm from './components/AddRecipeForm'
// import RecipeList from './components/RecipeList'
// import RecipeDetails from './components/RecipeDetails'
// import SearchBar from './components/SearchBar'
// /*function App() {
//   const [count, setCount] = useState(0) 

//   return ( 
//    /* <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </> */
//     // src/App.jsx

// function App() {
//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Recipe Sharing App</h1>
//       <AddRecipeForm />
//       <SearchBar />
//       <RecipeList />
//     </div>
//   );
// }

// // Wrapper to extract recipeId from URL
// import { useParams } from 'react-router-dom';
// const RecipeDetailsWrapper = () => {
//   const { id } = useParams();
//   return <RecipeDetails recipeId={id} />;
// };

// export default App;

import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={id} />;
};

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px' }}>
        <h1>Recipe Sharing App</h1>
        <AddRecipeForm />
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
