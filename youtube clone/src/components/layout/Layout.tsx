import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex pt-14">
        <Sidebar />
        <main className="flex-1 ml-64">
          <Outlet />
        </main>
      </div>
    </div>
  );
}