import '@/styles/globals.css'

import { wrapper } from "../store/store";
import { useStore } from "react-redux";
import { StoreProvider } from "easy-peasy";

const App = ({ Component, pageProps }) => {
  const store = useStore();

  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  );
};

const wrappedApp = wrapper.withRedux(App);
export default wrappedApp
