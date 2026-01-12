import { Metadata } from 'next';
import { redirectExternallyWithSameHost } from '../lib/actions';
import ExternalRedirectContainer from "./container";

export const metadata: Metadata = {
  title: 'External Redirect with same host',
};

export default function Page() {
  return (
    <ExternalRedirectContainer 
      action={redirectExternallyWithSameHost} 
      expectedRedirectUrl={"http://localhost:3000/external-page-with-same-host"}
      actualRedirectUrl={"http://localhost:3000/redirect/external-page-with-same-host"}
      delayInMilliseconds={10000}
    />
  );
}
