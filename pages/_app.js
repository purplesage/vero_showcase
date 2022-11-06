import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//todo: implement dynamic routes and everything related to it.
//todo: delete native context later

const halfAnHourInMs = 1000 * 60 * 30;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: halfAnHourInMs,
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
