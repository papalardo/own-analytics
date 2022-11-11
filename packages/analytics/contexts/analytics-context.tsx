import {createContext, PropsWithChildren, useContext, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {createCustomEvent} from "../actions/createCustomEvent";
import {EventDTO} from "../types/event";

type AnalyticsContextType = {
  sendPageView: (data?: Partial<EventDTO>) => void
}

const AnalyticsContext = createContext<AnalyticsContextType>({
  sendPageView: () => {}
});

export const AnalyticsProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  let previousPath: undefined | string;
  let previousPathTime = Date.now();

  const sendPageView = (data: Partial<EventDTO> = {}) => {
    const onlineTime = (Date.now() - previousPathTime) / 1000;
    createCustomEvent({
      ...data,
      type: data.type || 'PAGE_VIEW',
      onlineTime,
      path: data.path || previousPath || router.asPath,
    })
  }

  useEffect(() => {
    const routeChangeComplete = (route: string) => {
      sendPageView({
        path: previousPath || route
      });
      previousPath = route;
      previousPathTime = Date.now();
    }

    router.events.on('routeChangeComplete', routeChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', routeChangeComplete)
    }
  }, []);

  return (
    <AnalyticsContext.Provider
      value={{
        sendPageView,
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
}

export const useAnalytics = () => useContext(AnalyticsContext);