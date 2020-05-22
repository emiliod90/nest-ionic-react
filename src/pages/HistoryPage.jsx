import React from "react";
import { IonHeader, IonToolbar, IonTitle, IonPage } from "@ionic/react";

function HistoryPage() {
  return (
    <div>
      <IonPage>
        <IonHeader translucent>
          <IonToolbar>
            <IonTitle className="ion-text-center">History</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonPage>
    </div>
  );
}
export default HistoryPage;
