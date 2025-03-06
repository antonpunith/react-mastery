import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UseMemoDemo from './sections/use-memo-demo';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/use-memo" element={<UseMemoDemo />} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </Router>
  );
};

export default App;