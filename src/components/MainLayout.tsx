import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function MainLayout() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-8">
        <Outlet />
      </div>
    </div>
  );
}
