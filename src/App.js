import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreatePlayListPageResult from "./pages/CreatePlayListPageResult";
import LoginPageResults from "./pages/LoginPageResults";
import MainPageResults from './pages/MainPageResults';
import SearchPageResults from "./pages/SearchPageResults";
import SignupPageResults from "./pages/SignupPageResults";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPageResults/>,
  }, {
    path: "/spotifylogin",
    element: <LoginPageResults/>,
  },{
    path: "/signup",
    element: <SignupPageResults/>,
  },{
    path: "/searchpage",
    element: <SearchPageResults/>,
  },{
    path: "/playlists",
    element: <CreatePlayListPageResult/>,
  }
]);
function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
