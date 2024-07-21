import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="w-full max-w-screen-2xl min-h-screen bg-[#0D0D0D]">
      <Header />
      <Home/>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
