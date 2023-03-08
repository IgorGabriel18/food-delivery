import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { ThemeContextProvider } from "~contexts/ThemeContext";
import { store } from "~store/store";

import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <BrowserRouter>
        <ThemeContextProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeContextProvider>
    </BrowserRouter>
);
