import './App.css';
// import Books from './Source/Components/Books';
import LandingPage from './Source/Pages/LandinigPage';
import {Routes, Route} from 'react-router-dom'
import MobilesPage from './Source/Pages/MobilesPage';
import ComputersPage from './Source/Pages/ComputersPage';
import MenFasion from './Source/Pages/MenFasion';
import WomenDressing from './Source/Pages/WomenDressing';
import WatchPage from './Source/Pages/WatchPage';
import TvPage from './Source/Pages/TvPage';
import FridgePage from './Source/Pages/FridgePage';
import FurniturePage from './Source/Pages/FurniturePage';
import KitchenPage from './Source/Pages/KitchenPage';
import SpeakerPage from './Source/Pages/SpeakerPage';
import MobileSingles from './Source/Singles/MobileSingles';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/mobiles' element={<MobilesPage/>}/>
        <Route path='/computers' element={<ComputersPage/>}/>
        <Route path='/menfasion' element={<MenFasion/>}/>
        <Route path='/womendressing' element={<WomenDressing/>}/>
        <Route path='/watchpage' element={<WatchPage/>}/>
        <Route path='/tv' element={<TvPage/>}/>
        <Route path='/fridge' element={<FridgePage/>}/>
        <Route path='/furniture' element={<FurniturePage/>}/>
        <Route path='/kitchen' element={<KitchenPage/>}/>
        <Route path='/speaker' element={<SpeakerPage/>}/>
        <Route path='/mobiles/:id' element={<MobileSingles/>}/>
      </Routes>
    </div>
  );
}

export default App;
