import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Link, LinkEmblem, Nav, Wrapper } from './Layout.styled';
import { IoCarSport } from 'react-icons/io5';
import Loader from '../Loader';

const Layout = () => {
  return (
    <>
      <Nav>
        <LinkEmblem to="/">
          <IoCarSport /> Car Rental
        </LinkEmblem>
        <Wrapper>
          <Link activeclassname="active" to="/">
            Home
          </Link>
          <Link activeclassname="active" to="/catalog">
            Catalog
          </Link>
          <Link activeclassname="active" to="/favorite">
            Favorite
          </Link>
        </Wrapper>
      </Nav>
      <main>
        <Suspense fallback={<Loader />}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
