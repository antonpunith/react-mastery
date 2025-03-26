import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UseMemoDemo from './sections/use-memo-demo';
import MemoDemo from './sections/memo-demo';
import Home from './sections/home';
import Layout from './Layout';
import Context from './sections/context'

const componentRegistry: { [key: string]: () => JSX.Element } = {
  "Home": Home,
  "UseMemoDemo": UseMemoDemo,
  "MemoDemo": MemoDemo,
  "Context" : Context
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index Component={componentRegistry.Home} />
          <Route path="/use-memo" Component={componentRegistry.UseMemoDemo} />
          <Route path="/memo" Component={componentRegistry.MemoDemo} />
          <Route path="/context" Component={componentRegistry.Context} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;