"use client";

import React from "react";

import { StoreProvider } from "@repo/utils/components/store-provider";
import { PreloadPage } from "@/components/common/preload-page";
import { StyleProvider } from "@xjectro/react/components/style-provider";
import { Toaster } from "@xjectro/react/components/sonner";
import { ThemeProvider } from "next-themes";
import apollo from "@repo/utils/lib/apollo";
import { ApolloProvider } from "@apollo/client";
import { useAppDispatch, useAppSelector } from "@repo/utils/lib/redux";
import { fetchGlobalData } from "@repo/utils/stores/global-slice";

export function AfterProvider({ children }: React.PropsWithChildren) {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.global);

  React.useEffect(() => {
    dispatch(fetchGlobalData());
  }, [dispatch]);

  if (loading) {
    return <PreloadPage />;
  }

  return children;
}

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <React.Suspense fallback={<PreloadPage />}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        enableColorScheme
      >
        <StyleProvider>
          <Toaster position="bottom-center" />
          <StoreProvider>
            <ApolloProvider client={apollo}>
              <AfterProvider>{children}</AfterProvider>
            </ApolloProvider>
          </StoreProvider>
        </StyleProvider>
      </ThemeProvider>
    </React.Suspense>
  );
}
