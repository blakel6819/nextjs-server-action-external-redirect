"use client";

import { useEffect, useRef } from "react";

export type ExternalRedirectContainerProps = {
  action: (externalRedirectUrl: string, delayInMilliseconds: number) => Promise<void>;
  expectedRedirectUrl: string;
  actualRedirectUrl: string;
  delayInMilliseconds: number;
};

export default function ExternalRedirectContainer({
action,
expectedRedirectUrl,
actualRedirectUrl,
delayInMilliseconds
}: ExternalRedirectContainerProps) {
  const isActionInProgress = useRef(false);

  useEffect(() => {
    const performAction = async () => {
      await action(expectedRedirectUrl, delayInMilliseconds);
    };

    if (!isActionInProgress.current) {
      isActionInProgress.current = true;
      void performAction();
    }

    return () => {
      isActionInProgress.current = false;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>
        Attempting to redirect to external URL {expectedRedirectUrl} in {delayInMilliseconds / 1000} seconds...
      </h1>
      <br></br>
      <h2>
        Redirect will not navigate to the expected URL as it is in the same host as the current application.
      </h2>
      <br></br>
      <h3>
        Incorrect actual URL after redirect: {actualRedirectUrl}
      </h3>
    </>
  );
}
