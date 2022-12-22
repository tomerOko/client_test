/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'style/global-styles';

import { NotFoundPage } from './pages/NotFoundPage/component/Loadable';
import { useTranslation } from 'react-i18next';
import { LoginPage } from './pages/LoginPage/component/Loadable';
import SideBar from './pages/sidebar/component';
// import { HomePage } from './pages/Example/old/Loadable';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - my app"
        defaultTitle="my app"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="what my app do" />
      </Helmet>
      <SideBar></SideBar>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
