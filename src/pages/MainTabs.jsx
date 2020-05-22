import React from "react";
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { Route, Redirect } from "react-router";
import { home, pieChart, list, person } from "ionicons/icons";
/* Tab Pages */
import HomePage from "./HomePage";
import PortfolioPage from "./PortfolioPage";
import HistoryPage from "./HistoryPage";
import AccountPage from "./AccountPage";

function MainTabs() {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/home" />
        {/*
            Using the render method prop cuts down the number of renders your components will have due to route changes.
            Use the component prop when your component depends on the RouterComponentProps passed in automatically.
          */}
        <Route
          path="/tabs/home"
          render={() => <HomePage />}
          exact={true}
        />
        <Route
          path="/tabs/portfolio"
          render={() => <PortfolioPage />}
          exact={true}
        />
        <Route path="/tabs/history" render={() => <HistoryPage />} exact={true} />
        <Route path="/tabs/account" render={() => <AccountPage />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/tabs/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="portfolio" href="/tabs/portfolio">
          <IonIcon icon={pieChart} />
          <IonLabel>Portfolio</IonLabel>
        </IonTabButton>
        <IonTabButton tab="history" href="/tabs/history">
          <IonIcon icon={list} />
          <IonLabel>History</IonLabel>
        </IonTabButton>
        <IonTabButton tab="account" href="/tabs/account">
          <IonIcon icon={person} />
          <IonLabel>Account</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}

export default MainTabs;
