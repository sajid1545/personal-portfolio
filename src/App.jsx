
import { RouterProvider } from 'react-router-dom';
import './App.css'
import Particle from './Pages/Shared/Particle/Particle';
import { router } from './Routes/routes';

function App() {

  return (
    <div className="">
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
