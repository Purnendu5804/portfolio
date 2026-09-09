import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ClickSpark from './components/ClickSpark';
import Loading from './components/loading/Loading';
import './App.css';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/home/Home'));
const ProjectsLayout = lazy(() => import('./pages/ProjectsLayout'));
const LearningLayout = lazy(() => import('./pages/learning/LearningLayout'));
const ResumeLayout = lazy(() => import('./pages/resume/ResumeLayout'));
const BooksLayout = lazy(() => import('./pages/books/BooksLayout'));
const PageNotFound = lazy(() => import('./pages/notFound/PageNotFound'));

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <ClickSpark sparkColor="#ffffff" sparkSize={10} sparkRadius={16}>
          <main style={{ flex: 1, paddingTop: '32px' }}>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Navigate to="/" replace />} />
                <Route path="/projects" element={<ProjectsLayout />} />
                <Route path="/learning" element={<LearningLayout />} />
                <Route path="/uses" element={<Navigate to="/learning" replace />} />
                <Route path="/resume" element={<ResumeLayout />} />
                <Route path="/books" element={<BooksLayout />} />
                <Route path="/blogs" element={<Navigate to="/books" replace />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </ClickSpark>
      </div>
    </BrowserRouter>
  );
};

export default App;
