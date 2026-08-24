import SideBar from '../Layouts/SideBar';
import TopBar from '../Layouts/TopBar';
import { Outlet } from 'react-router';

function MainLayouts() {
  return (
    <>
    <div className="flex">
        <SideBar />

        <div className="flex-1 ml-72">
          <TopBar />

        <main className="p-8 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 min-h-screen mt-24">
          <Outlet />
        </main>
        </div>
    </div>
    </>
  )
}

export default MainLayouts

