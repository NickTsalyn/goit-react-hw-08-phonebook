
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { LayoutContainer } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <LayoutContainer>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
      </LayoutContainer>
    </>
  );
};


export default Layout