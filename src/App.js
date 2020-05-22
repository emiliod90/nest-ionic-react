import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
/* Pages */
import MainTabs from './pages/MainTabs';


function App() {
  return (
    <IonApp>
      <IonReactRouter>
          <IonRouterOutlet id="main">
            <Route path="/tabs" component={MainTabs} />
            {/*<Route path="/account" component={Account} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/support" component={Support} />
            <Route path="/tutorial" component={Tutorial} />
            <Route path="/" component={HomeOrTutorial} exact />*/}
          </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
