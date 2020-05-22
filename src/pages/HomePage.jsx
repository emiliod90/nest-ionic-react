import React from "react";
import { IonHeader, IonToolbar, IonTitle, IonPage } from "@ionic/react";

function HomePage() {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle className="ion-text-center">Home</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
}
export default HomePage;
