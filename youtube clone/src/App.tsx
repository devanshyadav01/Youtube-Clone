import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Watch } from './pages/Watch';
import { Search } from './pages/Search';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="watch" element={<Watch />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;