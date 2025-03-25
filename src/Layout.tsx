import { Outlet } from "react-router-dom";
import Navigation from './components/Navigation';

const Layout = () => {
  return (
    <div>
      <header>
        <h1>My App</h1>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
