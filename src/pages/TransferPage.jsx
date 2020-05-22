import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
  IonContent,
  IonSlides,
  IonSlide,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { arrowForward } from "ionicons/icons";

import slide1 from "../images/slide-1.png";
import slide2 from "../images/slide-2.png";
import slide3 from "../images/slide-3.png";
import nestlogo from "../images/nestlogo.png";

function TransferPage() {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle className="ion-text-center">Transfer In</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding" scrollY="false">
        <IonSlides className="transfer-slides">
          <IonSlide>
            <div className="slide">
              <img alt="slide1" src={slide1} />
              <h2>Welcome</h2>
              <p>
                Nest's <b>Transfer In Service</b> is a simple and secure way to
                transfer in an existing pension you have.
              </p>
            </div>
          </IonSlide>
          <IonSlide>
            <img alt="slide2" src={nestlogo} />
            <h2>Access</h2>
            <p>
              By giving Nest approval, we can perform the{" "}
              <b>transfer in request</b> on your behalf, completion within 14
              days.
            </p>
          </IonSlide>
          <IonSlide>
            <img alt="slide3" src={slide2} />
            <h2>Details</h2>
            <p>
              If you have your other Penion details at hand, that is a{" "}
              <b>plus</b>, but is not mandatory to start the process.
            </p>
          </IonSlide>
          <IonSlide>
            <img alt="slide3" src={slide3} />
            <h2>Ready to Transfer?</h2>
            <IonButton fill="clear">
              Continue <IonIcon slot="end" icon={arrowForward} />
            </IonButton>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
}
export default TransferPage;
