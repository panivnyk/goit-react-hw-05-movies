import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
// import { SharedLayout } from './SharedLayout/SharedLayout';
import { Container, Header, Link } from './App.styled';
// import { Home } from '../pages/Home';
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
// import { NotFound } from '../pages/NotFound';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Movies" element={<Movies />}></Route>
        {/* <Route path="/NotFound" element={<NotFound />}></Route> */}
      </Routes>
    </Container>
  );
};
