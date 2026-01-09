import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Layout from "./components/Layout.jsx";
import Vans, { loader as vansLoader } from "./Vans/Vans.jsx";
import VanDetail from "./Vans/VanDetail.jsx";
import Dashboard from "./pages/Host/Dashboard.jsx";
import Income from "./pages/Host/Income.jsx";
import HostVans from "./pages/Host/HostVans.jsx";
import HostVanDetail from "./pages/Host/HostVanDetail.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import HostLayout from "./components/HostLayout.jsx";
import HostVanInfo from "./pages/Host/HostVanInfo.jsx";
import HostVanPhotos from "./pages/Host/HostVanPhotos.jsx";
import HostVanPricing from "./pages/Host/HostVanPricing.jsx";
import NotFound from "./pages/NotFound.jsx";
import Error from "./components/Error.jsx";
import "./server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="hostvans" element={<HostVans />} />
        <Route path="hostvans/:id" element={<HostVanDetail />}>
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route path="vans/:id" element={<VanDetail />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
