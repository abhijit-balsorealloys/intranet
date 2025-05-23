import '../styles/globals.scss'
import '../styles/responsive.scss'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "../state/store";

let persistor = persistStore(store);

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {() => (
        <>
          <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
          <Component {...pageProps} />
        </>
      )}
    </PersistGate>
  </Provider>
}
