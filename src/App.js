import React from "react";
import "./styles/tailwind.css";
import "./styles.css";
import Layout from "./components/layout/Layout";

import StandardButton from "./components/buttons/ButtonStandard";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <h1>ECG Test Template</h1>
        <h2>Start editing to see some magic happen!</h2>
        <StandardButton title={"Go to Test Page"} linkTo={"test"} />
      </Layout>
    </div>
  );
}
