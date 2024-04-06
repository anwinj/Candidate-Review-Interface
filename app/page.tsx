import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className="bg-slate-100 w-full h-fit lg:flex lg:flex-row ">
      <Sidebar/>
      <Dashboard/>
    </main>
  );
}
