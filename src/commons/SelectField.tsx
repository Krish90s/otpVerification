import {
  IonInput,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { options } from "ionicons/icons";
import React from "react";

interface InputProps {
  label: string;
  name: string;
  value: any;
  maxlength?: number | undefined;
  handleChange: (name: string) => (event: any) => any;
  options: any;
}

export const SelectField: React.FC<any> = (props: InputProps) => {
  return (
    <IonItem>
      <IonLabel>{props.label}</IonLabel>
      <IonSelect
        name={props.name}
        value={props.value}
        onIonChange={props.handleChange(props.name)}
      >
        {props.options.map((option: any, index: number) => (
          <IonSelectOption key={index} value={option}>
            {option}
          </IonSelectOption>
        ))}
      </IonSelect>
    </IonItem>
  );
};
