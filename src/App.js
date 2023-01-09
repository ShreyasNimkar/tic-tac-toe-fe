import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import RegisterPage from "./pages/Register";

function App() {
  return (
    <>
      <div className="w-full h-screen flex justify-around items-center">
        <div className="w-full md:full lg:w-1/3 h-screen h-screen bg-slate-500">
          <RegisterPage />
          {/* <Login /> */}
        </div>
      </div>
    </>
  );
}

export default App;
