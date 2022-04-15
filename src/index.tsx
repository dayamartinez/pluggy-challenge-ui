import React from "react";
import ReactDOM from "react-dom/client";
import { SWRConfig } from "swr";
import App from "./App";
import { fetcher } from "./config";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher,
        onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
          if (error.status === 404) return; // Never retry on 404.
          if (retryCount >= 10) return; // Only retry up to 10 times.
          // Retry after 5 seconds.
          setTimeout(() => revalidate({ retryCount }), 5000);
        },
      }}
    >
      <App />
    </SWRConfig>
  </React.StrictMode>
);
