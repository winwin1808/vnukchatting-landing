import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { Header } from './components/header';
import { Features } from './components/features';
import { About } from './components/about';
import { Footer } from './components/footer';
import { Team } from './components/Team';
import { Contact } from './components/contact';
import ChatWidget from './components/ChatWidget';
import JsonData from './data/data.json';
import SmoothScroll from 'smooth-scroll';
import Docs from './components/Docs';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Header data={landingPageData.Header} />
              <Features data={landingPageData.Features} />
              <About data={landingPageData.About} />
              <Team data={landingPageData.Team} />
              <Contact data={landingPageData.Contact} />
            </>
          } />
          <Route path="/docs" element={<Docs />} />
        </Routes>
        <Footer />
        <ChatWidget
          adminId="66754b6db4c1c5ee5d326c7b"
          greeting="Hello! How can we assist you today?"
          headerName="Customer Support"
          width="400px"
          height="600px"
        />
      </div>
    </Router>
  );
};

export default App;
