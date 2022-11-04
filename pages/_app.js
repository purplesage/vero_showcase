import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//todo: implement dynamic routes and everything related to it.
//todo: delete native context later

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // staleTime: oneHourInMs, //todo: learn how this thing works, currently bugs application.
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
