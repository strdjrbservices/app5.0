import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Subject from './components/Subject/subject.js';
import CustomQuery from './components/Subject/CustomQuery.js';
import HomePage from './components/Subject/HomePage.js';
import Compare from './components/Subject/Compare.js';
import './App.css';
import HtmlExtractor from './components/Subject/HtmlExtractor';

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && (
        <nav className="navbar navbar-light bg-light  px-3">
          <div style={{ marginleft: "800px", marginRight: "auto" }}>
            <Link
              to="/extractor"
              className={`btn ${location.pathname === '/extractor' ? 'btn-primary' : 'btn-buttom-primary'
                } me-2`}

            >
              FULL FILE REVIEW 
            </Link>
            <Link
              to="/Compare"

              className={`btn ${location.pathname === '/Compare' ? 'btn-primary' : 'btn-buttom-primary'
                }`}
            >
              REVISED FILE REVIEW
            </Link>
            <Link
              to="/query"
              className={`btn ${location.pathname === '/query' ? 'btn-primary' : 'btn-buttom-primary'
                }`}
            >
              Custom Query
            </Link>

            <Link
              to="/html-extractor"
              className={`btn ${location.pathname === '/html-extractor' ? 'btn-primary' : 'btn-buttom-primary'
                }`}
            >
              HTML Extractor
            </Link>
          </div>
        </nav>
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/extractor" element={<Subject />} />
        <Route path="/query" element={<CustomQuery />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/html-extractor" element={<HtmlExtractor />} />
      </Routes>
    </>
  );
}

export default App;
