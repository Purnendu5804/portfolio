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
const UsesLayout = lazy(() => import('./pages/uses/UsesLayout'));
const ResumeLayout = lazy(() => import('./pages/resume/ResumeLayout'));
const BlogLayout = lazy(() => import('./pages/blogs/BlogLayout'));
const HowToPlanAProject = lazy(() => import('./pages/blogs/HowToPlanAProject'));
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
                <Route path="/uses" element={<UsesLayout />} />
                <Route path="/resume" element={<ResumeLayout />} />
                <Route path="/blogs" element={<BlogLayout />} />
                <Route
                  path="/blogs/how-to-plan-a-project"
                  element={<HowToPlanAProject />}
                />
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
