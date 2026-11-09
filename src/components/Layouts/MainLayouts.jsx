import { useState } from 'react';
import SideBar from '../Layouts/SideBar';
import TopBar from '../Layouts/TopBar';
import { Outlet } from 'react-router';

function MainLayouts() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <SideBar isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />

      {isMobileOpen && (
        <button
          type="button"
          aria-label="Close mobile menu"
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden"
        />
      )}

      <div className="lg:pl-72">
        <TopBar onMenuToggle={() => setIsMobileOpen((prev) => !prev)} />

        <main className="min-h-screen px-4 pb-8 pt-24 sm:px-6 lg:px-8 lg:pt-28">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayouts;

