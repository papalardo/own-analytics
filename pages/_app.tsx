import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {AnalyticsProvider} from "../packages/analytics/contexts/analytics-context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnalyticsProvider>
      <Component {...pageProps} />
    </AnalyticsProvider>
  );
}
