import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login.jsx";
import Layout from "./components/Layout.jsx";
import Vans, { loader as vansLoader } from "./Vans/Vans.jsx";
import VanDetail, { loader as vanDetailLoader } from "./Vans/VanDetail.jsx";
import Dashboard from "./pages/Host/Dashboard.jsx";
import Income from "./pages/Host/Income.jsx";
import HostVans, { loader as hostVanLoader } from "./pages/Host/HostVans.jsx";
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from "./pages/Host/HostVanDetail.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import HostLayout from "./components/HostLayout.jsx";
import HostVanInfo from "./pages/Host/HostVanInfo.jsx";
import HostVanPhotos from "./pages/Host/HostVanPhotos.jsx";
import HostVanPricing from "./pages/Host/HostVanPricing.jsx";
import NotFound from "./pages/NotFound.jsx";
import Error from "./components/Error.jsx";
import ProtectedLayout from "./components/ProtectedLayout.jsx";

import { requireAuth } from "./utils.js";
import "./server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route element={<ProtectedLayout />}>
        <Route
          path="host"
          element={<HostLayout />}
          loader={async () => await requireAuth()}
        >
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route
            path="hostvans"
            element={<HostVans />}
            loader={hostVanLoader}
          />
          <Route
            path="hostvans/:id"
            element={<HostVanDetail />}
            loader={hostVanDetailLoader}
          >
            <Route index element={<HostVanInfo />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
          </Route>
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
