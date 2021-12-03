import { IonInput, IonItem, IonLabel } from "@ionic/react";
import React from "react";

interface InputProps {
  label: string;
  name: string;
  value: any;
  type: "text" | "number" | "password" | "email" | "tel" | "url" | "search";
  maxlength?: number | undefined;
  handleChange: (name: string) => (event: any) => any;
}

export const InputField: React.FC<any> = (props: InputProps) => {
  return (
    <IonItem>
      <IonLabel>{props.label}</IonLabel>
      <IonInput
        name={props.name}
        type={props.type}
        value={props.value}
        onIonChange={props.handleChange(props.name)}
      />
    </IonItem>
  );
};
