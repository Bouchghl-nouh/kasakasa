import { Route, Routes } from "react-router-dom";
import "./CSS/App.css";
import Home from "./Components/Home";
import About from "./About";
import Error from "./Components/404";
import Details from "./Details";
function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path ='/details/:id'element={<Details/>}/>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
