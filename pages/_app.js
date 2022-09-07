import "../styles/globals.css";
import AdminContext from "../context/AdminContext";
import DashboardContext from "../context/DashboardContext";
import InputsContext from "../context/InputsContext";

//todo: fix image deletion on edit.
//todo: implement image edit preview.

function MyApp({ Component, pageProps }) {
  return (
    <InputsContext>
      <AdminContext>
        <DashboardContext>
          <Component {...pageProps} />
        </DashboardContext>
      </AdminContext>
    </InputsContext>
  );
}

export default MyApp;
