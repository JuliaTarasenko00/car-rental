import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loader from './components/Loader';
import './i18n';

const Home = lazy(() => import('./page/Home/Home'));
const Catalog = lazy(() => import('./page/Catalog/Catalog'));
const Favorite = lazy(() => import('./page/Favorite/Favorite'));
const NotFound = lazy(() => import('./page/NotFound'));
const Layout = lazy(() => import('./components/Layout/Layout'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
