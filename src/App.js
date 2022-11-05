import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import About from './components/Home/About/About';
import Resturant from './components/Resturant/Resturant';
import FoodDetails from './components/FoodDetails/FoodDetails';
import MealDb from './components/MealDb/MealDb';
import MealDetails from './components/MealDetails/MealDetails';

function App() {
  const router = createBrowserRouter([
    {path:'/', element: <Main></Main>, children:[
      {path: '/', element: <Home></Home>},
      {path:'/home', element: <Home></Home>},
      {path:'/about', element: <About></About>},
      {path:'/resturant', element: <Resturant></Resturant>},
      {path:'/food/:name',
      loader:async({params})=>{
        return fetch(`/food/${params.name}`)
      },
    element: <FoodDetails></FoodDetails>},
    {path:'/post',
    loader:async()=>{
      return fetch('https://jsonplaceholder.typicode.com/posts')
    },
    element:<MealDb></MealDb>},
    {path:'/post/:name',
    loader:async({params})=>{
      return fetch(`https://jsonplaceholder.typicode.com/posts/${params.name}`)
    },
    element:<MealDetails></MealDetails>
  }
    ]},
    {path: '*', element:<div><h4>404</h4></div>}

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
