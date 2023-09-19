import Header from "./components/Header";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col space-y-48">
        <div className="flex flex-col gap-10 lg:flex-row lg:space-y-0 space-y-[600px]">
          <div className="h-[200px]">
            <Content />
          </div>
          <div className="w-[350px] h-[511px]">
            <Sidebar />
          </div>
        </div>
        <Card />
      </div>
    </>
  );
}
