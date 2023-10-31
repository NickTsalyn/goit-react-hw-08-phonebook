// import Contacts from 'Pages/Contacts';
import { Layout } from './Layout/Layout.styled';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from 'components/RestrictedRoute';
import Home from 'Pages/Home';
import Register from 'Pages/Register';
import { PrivateRoute } from 'PrivateRoute';
import { LoginForm } from 'components/LoginForm/LoginForm';
import Contacts from 'Pages/Contacts';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  console.log(isRefreshing)

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Refreshing user...</div>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginForm />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );

};