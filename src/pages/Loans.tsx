import { IonButton, IonContent, IonPage } from "@ionic/react";
import React, { useState } from "react";
import { InputField } from "../commons/InputField";
import { SelectField } from "../commons/SelectField";
import { state } from "./../variables/commonVariables";

export const Loans: React.FC<{}> = () => {
  const [filtered, setFiltered] = useState([]);
  const [values, setValues] = useState({
    value1: 0,
    value2: 0,
    state: "",
    city: "",
    total: "",
    email: "",
    password: "",
    file: "",
    error: "",
  });

  const handleChange = (name: any) => (event: any) => {
    setValues({ ...values, [name]: event.currentTarget.value });
  };

  const handleFileChange = (name: any) => (event: any) => {
    setValues({ ...values, [name]: event.currentTarget.files[0] });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <IonPage>
      <IonContent>
        <div className="page-container">
          <h1>Loans Page</h1>
          <section>
            <form onSubmit={handleSubmit}>
              <InputField
                label={"Email"}
                type="email"
                name="email"
                value={values.email}
                handleChange={handleChange}
              />

              <SelectField
                label={"State"}
                name="state"
                value={values.state}
                handleChange={handleChange}
                options={state}
              />

              <IonButton type="submit">Submit</IonButton>
            </form>
          </section>
        </div>
      </IonContent>
    </IonPage>
  );
};
