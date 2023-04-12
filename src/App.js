import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./screens/Details";
import Search from "./screens/Search";
import NotFound from "./screens/NotFound";
import NormalizeStyles from "./shared/NormalizeStyles";
import Header from "./components/Header/Header";

const router = createBrowserRouter ([
  {
    path: '/details',
    element: <Details />,
  },
  {
    path: '/',
    element: <Search />,
  },
  {
    path: '*',
    element: <NotFound />,
  }
]);

function App() {
  return (
    <>
      <NormalizeStyles />
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;