import {
  IonButton,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
} from "@ionic/react";
import { lockClosedOutline } from "ionicons/icons";
import React, { useState } from "react";

export const Authentication: React.FC<{}> = () => {
  const [number, setNumber] = useState<string>();
  const [otp1, setOtp1] = useState<string>();
  const [otp2, setOtp2] = useState<string>();
  const [otp3, setOtp3] = useState<string>();
  const [otp4, setOtp4] = useState<string>();
  const [firstOtp, setFirstOtp] = useState<boolean>(true);
  const [checked, setChecked] = useState<boolean>(true);

  const handleSendOtp = () => {
    console.log(number);
    setFirstOtp(false);
  };

  const handlePhoneNumber = (e: any) => {
    setNumber(e.target.value);
  };

  const handleOtpChange = (e: any) => {
    setNumber(e.target.value);
  };

  const handleResendOtp = () => {
    console.log(number);
  };

  const handleSubmit = () => {
    console.log(number);
  };

  return (
    <IonPage>
      <IonContent fullscreen color="light">
        <div className="split-screen">
          <div className="left ion-hide-md-down">
            <section className="copy">
              <h1>Lead Management System</h1>
            </section>
          </div>
          <div className="right">
            <form>
              <section className="copy ion-text-center">
                <IonIcon
                  className="login-avatar-icon"
                  icon={lockClosedOutline}
                />
                <h2>Login</h2>
              </section>
              <section className="input-container name ion-text-start">
                <IonItem lines="none" className="inputClass">
                  <IonLabel>+91</IonLabel>
                  <IonInput
                    className="ion-text-start"
                    pattern="\d{10}"
                    type="tel"
                    value={number}
                    maxlength={10}
                    inputMode="numeric"
                    placeholder="Mobile Number"
                    onIonChange={handlePhoneNumber}
                  />
                  <IonButton
                    fill="solid"
                    slot="end"
                    color="dark"
                    onClick={handleSendOtp}
                    disabled={!firstOtp ? true : false}
                  >
                    Send OTP
                  </IonButton>
                </IonItem>
              </section>
              <section className="ion-margin-vertical">
                <IonGrid style={{ padding: "0px" }}>
                  <IonRow style={{ padding: "0px" }}>
                    <IonCol size="12" sizeMd="8">
                      <IonGrid style={{ padding: "0px" }}>
                        <IonRow>
                          <IonCol size="3" className="ion-text-start">
                            <IonItem lines="none">
                              <IonInput
                                type="text"
                                value={otp1}
                                maxlength={1}
                              />
                            </IonItem>
                          </IonCol>
                          <IonCol size="3" className="ion-text-start">
                            <IonItem lines="none">
                              <IonInput
                                type="text"
                                value={otp2}
                                maxlength={1}
                              />
                            </IonItem>
                          </IonCol>
                          <IonCol size="3" className="ion-text-start">
                            <IonItem lines="none">
                              <IonInput
                                type="text"
                                value={otp3}
                                maxlength={1}
                              />
                            </IonItem>
                          </IonCol>
                          <IonCol size="3" className="ion-text-start">
                            <IonItem lines="none">
                              <IonInput
                                type="text"
                                value={otp4}
                                maxlength={1}
                              />
                            </IonItem>
                          </IonCol>
                        </IonRow>
                      </IonGrid>
                    </IonCol>
                    <IonCol sizeMd="4">
                      <section>
                        <p
                          className="ion-float-right"
                          style={{ fontSize: "12px" }}
                        >
                          Didn't receve OTP ?
                        </p>
                        <IonButton
                          className="ion-float-right"
                          size="small"
                          color="dark"
                          fill="outline"
                          style={{ fontSize: "10px", textDecoration: "none" }}
                        >
                          Resend OTP
                        </IonButton>
                      </section>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </section>
              <section>
                <IonButton
                  color="dark"
                  expand="block"
                  size="small"
                  disabled={
                    number?.length === 10 &&
                    otp1 &&
                    otp2 &&
                    otp3 &&
                    otp4 &&
                    checked === true
                      ? false
                      : true
                  }
                >
                  Verify OTP
                </IonButton>
              </section>
            </form>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};
