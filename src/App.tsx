import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages 2/UsersApp/Layout/Layout"
import Home from "./pages 2/UsersApp/Home/Home"
import Users from "./pages 2/UsersApp/Users/Users"
import Lesson16 from "./lessons/Lesson16/Lesson16"
import Homework16 from "./homeworks/Homework16"
import FeedbackRender from "./components/FeedbackRender/FeedbackRender"
import Homework16Additional from "./homeworks/Homework16additional/Homework16Additional"

//lessons
// import Lesson16 from "./lessons/Lesson16/Lesson16"

//homeworks

//consultations
// import Consultation08 from "./consultations/Consultation08/Consultation08"

const App = () => {
  return (
    <BrowserRouter>
      {/* <Consultation08 /> */}
      {/* <Lesson16 />*/}
      {/* UserApp - Practice - Lesson16 */}
      {/*  <Layout>*/}
      {/*    <Routes>*/}
      {/*      <Route path='/' element={<Home/>}/>*/}
      {/*      <Route path='/users' element={<Users/>}/>*/}
      {/*      <Route path='*' element='Page not found'/>*/}
      {/*    </Routes>*/}
      {/*  </Layout>*/}
      {/*<Homework16 />*/}
      <Homework16Additional />
    </BrowserRouter>
  )
}

export default App
