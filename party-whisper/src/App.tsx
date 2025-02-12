import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import MessageForm from './components/MessageForm';
import MessageBoard from './components/MessageBoard';

const App: React.FC = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<MessageForm />} />
      <Route path="/board" element={<MessageBoard />} />
    </Routes>
  </Router>
);

export default App;
