import { Routes, Route} from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import {Versionfetch}from './pages/Versionfetch';
import { Versionasync } from './pages/Versionasync';
import { Postreq } from './pages/Postreq';
import { Reducer } from './pages/Reducer';
import { Reducer2} from './pages/Reducer2';






 // https://api.b7web.com.br/cinema/
export const App = () =>{
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/fetch" element={< Versionfetch />} />
        <Route path="/async" element={<Versionasync />} />
        <Route path="/postreq" element={<Postreq />} />
        <Route path="/reducer" element={<Reducer />} />
        <Route path="/reducer2" element={<Reducer2 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
