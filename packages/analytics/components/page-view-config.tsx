import {useAnalytics} from "../contexts/analytics-context";
import {useEffect} from "react";

type PageViewConfigProps = {
  pageViewType: string;
  targetId: string;
}

export const AnalyticsPageViewConfig = (props: PageViewConfigProps) => {
  const analytics = useAnalytics();

  useEffect(() => {
    analytics.sendPageView({
      type: props.pageViewType,
      targetId: props.targetId,
    })
  }, []);

  return <span />;
}