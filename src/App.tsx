import { I18nextProvider } from "react-i18next";
import MyForm from "./component/MyForm";
import i18n from "./i18n";

function App() {
  // const handleChangeLanguage = (lng: string) => {
  //   i18n.changeLanguage(lng); // Cambia el idioma dinámicamente
  // };

  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };
  return (
    <>
      <I18nextProvider i18n={i18n}>
        {/* <div style={{ textAlign: "center", margin: "20px" }}>
          <button onClick={() => handleChangeLanguage("es")}>Español</button>
          <button
            onClick={() => handleChangeLanguage("en")}
            style={{ marginLeft: "10px" }}
          >
            English
          </button>
        </div> */}

        <div style={{ textAlign: "center", margin: "20px" }}>
          <label htmlFor="language-selector" style={{ marginRight: "10px" }}>
            Select Language:
          </label>
          <select id="language-selector" onChange={handleChangeLanguage}>
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </div>
        
        <MyForm />
      </I18nextProvider>
    </>
  );
}

export default App;
