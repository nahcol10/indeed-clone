import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import AllPosts from "./components/AllPosts"
import CreatePost from "./pages/CreatePost"
import Home from "./pages/Home"
import { routePath } from "./routers/route"


function App() {

  return (
    <Router>
      <Routes>
        <Route path={routePath.home} element={<Home />}/>
        <Route path={routePath.create} element={<CreatePost />} />
        <Route path={routePath.posts} element={<AllPosts />} />
      </Routes>
    </Router>
  )
}

export default App
