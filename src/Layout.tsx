import { Outlet } from "react-router-dom";
import Navigation from './components/Navigation';

const Layout = () => {
  return (
    <div>
      <header className="container">
        <h1>React Master Class</h1>
        <Navigation />
      </header>
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
