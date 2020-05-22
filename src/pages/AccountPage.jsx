import React from "react";
import { IonHeader, IonToolbar, IonTitle, IonPage } from "@ionic/react";

function AccountPage() {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle className="ion-text-center">Account</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
}
export default AccountPage;
