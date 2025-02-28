import About from '../Sections/About';
import Home from './Home';
import Planing from '../Sections/Planing';
import Features from '../Sections/Features';
import Application from '../Sections/Application';
export default function index() {
  return (
    <div className=''>
      <div>
      <Home/>
    </div>
      <div>
      <About/>
    </div>
    <div>
      <Planing/>
    </div>
    <div>
      <Application/>
    </div>
    <div>
      <Features/>
    </div>
    

  

    </div>
  )
}
