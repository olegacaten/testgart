import React from 'react';

import { lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '../pages/layouts/MainLayout';
import TopBar from '../widgets/FeedPage/TopBar/TopBar';

const FeedPage = lazy(() => import('../pages/FeedPage/FeedPage'));

const App = () => {
  return (
    <Router>
      <TopBar />
      <MainLayout>
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/marketplace" element={<div>'market'</div>} />
          <Route path="/ratings" element={<div> 'ratings'</div>} />
          <Route path="/competitions" element={<div>'competitions'</div>} />
          <Route path="/organizations" element={<div>'organizations'</div>} />
          <Route path="/live" element={<div>'live'</div>} />
          <Route path="/AdLinkUrl" element={<div>'AdLink Url'</div>} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
