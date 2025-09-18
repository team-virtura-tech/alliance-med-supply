import { EmblaOptionsType } from 'embla-carousel';
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/base.css';
import '../css/embla.css';
import '../css/sandbox.css';
import EmblaCarousel from './EmblaCarousel';
import Footer from './Footer';
import Header from './Header';

const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto' };
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const App: React.FC = () => (
  <>
    <Header />
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    <Footer />
  </>
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
