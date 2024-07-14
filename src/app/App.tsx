import { lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '../pages/layouts/MainLayout';
import TopBar from '../widgets/FeedPage/TopBar/TopBar';

const FeedPage = lazy(() => import('../pages/FeedPage'));

const App = () => {
  return (
    <Router>
      <TopBar />
      <MainLayout>
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/marketplace" element={<>'market'</>} />
          <Route path="/ratings" element={<> 'ratings'</>} />
          <Route path="/competitions" element={<>'competitions'</>} />
          <Route path="/organizations" element={<>'organizations'</>} />
          <Route path="/live" element={<>'live'</>} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
