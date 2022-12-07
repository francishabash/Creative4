import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import History from "./pages/History"
import Images from "./pages/Images"
import People from "./pages/People"
import Shop from "./pages/Shop"
import Layout from "./pages/Layout"

function App() {
  return (
    <BrowserRouter basename="/creative/CS260-creative3/build">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="history" element={<History />} />
          <Route path="images" element={<Images />} />
          <Route path="people" element={<People />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
