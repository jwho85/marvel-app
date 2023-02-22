import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Other/Menu';
import Footer from './components/Other/Footer';
import Home from './components/Heroes/Home';
import HeroSeries from './components/Heroes/HeroSeries';
import HeroComics from './components/Heroes/HeroComics';
import HeroEvents from './components/Heroes/HeroEvents';
import HeroStories from './components/Heroes/HeroStories';
import ComicsPage from './components/Comics/ComicsPage';
import CreatorsPage from './components/Creators/CreatorsPage';
import CreatorComics from './components/Creators/CreatorComics';
import CreatorEvents from './components/Creators/CreatorEvents';
import CreatorSeries from './components/Creators/CreatorSeries';
import CreatorStories from './components/Creators/CreatorStories';
import EventsPage from './components/Events/EventsPage';
import SeriesPage from './components/Series/SeriesPage';
import StoriesPage from './components/Stories/StoriesPage';

export default function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        {/* Heroes */}
        <Route exact path={'/'} element={<Home />} />
        <Route exact path={'/characters/:id/comics'} element={<HeroComics />} />
        <Route exact path={'/characters/:id/events'} element={<HeroEvents />} />
        <Route exact path={'/characters/:id/series'} element={<HeroSeries />} />
        <Route exact path={'/characters/:id/stories'} element={<HeroStories />} />
        {/* Comics */}
        <Route exact path={'/comics'} element={<ComicsPage />} />
        {/* Events */}
        <Route exact path={'/events'} element={<EventsPage />} />
        {/* Series */}
        <Route exact path={'/series'} element={<SeriesPage />} />
        {/* Stories */}
        <Route exact path={'/stories'} element={<StoriesPage />} />
        {/* Creators */}
        <Route exact path={'/creators'} element={<CreatorsPage />} />
        <Route exact path={'/creators/:id/comics'} element={<CreatorComics />} />
        <Route exact path={'/creators/:id/events'} element={<CreatorEvents />} />
        <Route exact path={'/creators/:id/series'} element={<CreatorSeries />} />
        <Route exact path={'/creators/:id/stories'} element={<CreatorStories />} />
      </Routes>
      <Footer />
    </Router>
  );
}
