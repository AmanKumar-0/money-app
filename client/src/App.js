import "./App.css";
import Landing from "./Pages/Landing/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import AllBlogs from "./Pages/All Blogs/AllBlogs";
import Create from "./Components/Blogs/CreateBlog/Create";
import Blog from "./Components/Blogs/BlogDetail/Blog";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/allBlogs" element={<AllBlogs />} />
        <Route path="/createBlog" element={<Create />} />
        <Route path="/createBlog/:id" element={<Create />} />
        <Route path="/:id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
