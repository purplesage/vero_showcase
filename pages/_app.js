import "../styles/globals.css";
import DashboardContext from "../context/DashboardContext";
import InputsContext from "../context/InputsContext";

//todo: implement dynamic routes and everything related to it.

function MyApp({ Component, pageProps }) {
  return (
    <InputsContext>
      <DashboardContext>
        <Component {...pageProps} />
      </DashboardContext>
    </InputsContext>
  );
}

export default MyApp;
