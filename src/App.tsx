import Header from "./components/Header";
import Hero from "./components/Hero";
function App() {
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-7xl">
        <Hero />
      </div>
    </div>
  );
}

export default App;
