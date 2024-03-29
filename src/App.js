import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Routes
import * as ROUTES from './constants/routes';

// Hooks
import useAuthListener from './hooks/use-auth-listener';

// Context
import UserContext from './context/user';

const Login = lazy(() => import ('./pages/login'));
const SignUp = lazy(() => import ('./pages/sign-up'));
const Dashboard = lazy(() => import ('./pages/dashboard'));
const NotFound = lazy(() => import ('./pages/not-found'));

function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login}/>
            <Route path={ROUTES.SIGN_UP} component={SignUp}/>
            <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
            <Route path={ROUTES.NOT_FOUND} component={NotFound}/>
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
