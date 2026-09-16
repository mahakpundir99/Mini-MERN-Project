import { Route, Routes } from "react-router-dom"
import CreatePost from "./Pages/CreatePost"
import Feed from "./Pages/Feed"
import Navbar from "./components/Navbar"



const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path="/CreatePost" element={<CreatePost/>}/>
    <Route path="/Feed" element={<Feed/>}/>
   </Routes>
   </>
  )
}

export default App
