import "../styles/globals.css";
import AdminContext from "../context/AdminContext";
import DashboardContext from "../context/DashboardContext";

function MyApp({ Component, pageProps }) {
  return (
    <AdminContext>
      <DashboardContext>
        <Component {...pageProps} />
      </DashboardContext>
    </AdminContext>
  );
}

export default MyApp;
