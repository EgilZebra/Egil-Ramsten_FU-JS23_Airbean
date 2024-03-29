import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom"
import ErrorPage from "./pages/errorpage/ErrorPage"
import LandingPage from "./pages/landingpage/LandingPage"
import AboutPage from "./pages/aboutpage/AboutPage"
import MenyPage from "./pages/menypage/MenyPage"
import ProfilePage from "./pages/profilepage/ProfilePage"
import './index.scss'
import { FetchCoffee } from "./functions/FetchCoffee";
import StatusPopup from "./components/statuspopup/StatusPopup"

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={<ErrorPage />}>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/menu" element={<MenyPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/orderstatus" element={<StatusPopup/>} />
      </Route>
  )
)

function App() {
  FetchCoffee();
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
