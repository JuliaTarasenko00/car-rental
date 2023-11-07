import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
  ButtonEn,
  ButtonUk,
  Container,
  Link,
  LinkEmblem,
  Nav,
  Wrapper,
  WrapperTranslate,
} from './Layout.styled';
import { IoCarSport } from 'react-icons/io5';
import Loader from '../Loader';
import { tokens } from 'i18n/tokens';
import i18next from 'i18next';
import { LOCALS } from 'i18n/constants';

const Layout = () => {
  const { t } = useTranslation();

  return (
    <>
      <Nav>
        <LinkEmblem to="/">
          <IoCarSport /> {t(tokens.nav.pageTitle)}
        </LinkEmblem>
        <Wrapper>
          <Link activeclassname="active" to="/">
            {t(tokens.nav.home)}
          </Link>
          <Link activeclassname="active" to="/catalog">
            {t(tokens.nav.catalog)}
          </Link>
          <Link activeclassname="active" to="/favorite">
            {t(tokens.nav.favorite)}
          </Link>
        </Wrapper>
      </Nav>
      <main>
        <Suspense fallback={<Loader />}>
          <Container>
            <WrapperTranslate>
              <ButtonUk
                type="button"
                $datadisabled={(i18next.language === LOCALS.UK).toString()}
                onClick={() => i18next.changeLanguage(LOCALS.UK)}
              ></ButtonUk>
              <ButtonEn
                type="button"
                $datadisabled={(i18next.language === LOCALS.EN).toString()}
                onClick={() => i18next.changeLanguage(LOCALS.EN)}
              ></ButtonEn>
            </WrapperTranslate>
            <Outlet />
          </Container>
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
