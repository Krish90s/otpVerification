import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { Loans } from "./pages/Loans";
import { BusinessLoan } from "./pages/BusinessLoan";
import { ProfessionalLoan } from "./pages/ProfessionalLoan";
import { PersonalLoan } from "./pages/PersonalLoan";
import { MedicalEquipmentLoan } from "./pages/MedicalEquipmentLoan";
import { PreOwnedCarLoan } from "./pages/PreOwnedCardLoan";
import { HomeLoan } from "./pages/HomeLoan";
import { Authentication } from "./pages/Authentication";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/preowned-car-loan" component={PreOwnedCarLoan} />
        <Route
          exact
          path="/medical-equipment-loan"
          component={MedicalEquipmentLoan}
        />
        <Route exact path="/personal-loan" component={PersonalLoan} />
        <Route exact path="/profesional-loan" component={ProfessionalLoan} />
        <Route exact path="/home-loan" component={HomeLoan} />
        <Route exact path="/business-loan" component={BusinessLoan} />
        <Route exact path="/loans" component={Loans} />
        <Route exact path="/auth" component={Authentication} />

        <Route exact path="/">
          <Redirect to="/auth" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
