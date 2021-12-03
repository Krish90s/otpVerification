import { IonContent, IonPage } from "@ionic/react";
import React from "react";

export const HomeLoan: React.FC<{}> = () => {
  const [inputFields, setInputFields] = React.useState([
    {
      firstName: "",
      lastName: "",
    },
  ]);
  return (
    <IonPage>
      <IonContent>
        <div></div>
      </IonContent>
    </IonPage>
  );
};
