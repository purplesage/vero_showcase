import "../styles/globals.css";
import DashboardContext from "../context/DashboardContext";
import InputsContext from "../context/InputsContext";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//todo: implement dynamic routes and everything related to it.
//todo: delete native context later

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <InputsContext>
        <DashboardContext>
          <Component {...pageProps} />
        </DashboardContext>
      </InputsContext>
    </QueryClientProvider>
  );
}

export default MyApp;
