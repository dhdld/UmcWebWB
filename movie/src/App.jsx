import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFoundPage from './components/NotFoundPage';

import PopularPage from './components/MoviePages/PopularPage';
import NowPlayingPage from './components/MoviePages/NowPlayingPage';
import TopRatedPage from './components/MoviePages/TopRatedPage';
import UpcomingPage from './components/MoviePages/UpComingPage'
import MovieDetailPage from './components/MoviePages/MovieDetailPage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
      <Route path='/' element={<MainPage />}/>
      <Route path='/popular' element={<PopularPage />}/>
      <Route path='/nowplaying' element={<NowPlayingPage />}/>
      <Route path='/toprated' element={<TopRatedPage />}/>
      <Route path='/upcoming' element={<UpcomingPage />}/>
      <Route path='/movie/:name' element={<MovieDetailPage />}/>
      <Route path='*' element={<NotFoundPage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;