import { GoogleTagManager as NextGoogleTagManager } from '@next/third-parties/google';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function GoogleTagManager() {
  if (!GTM_ID) return null;
  return <NextGoogleTagManager gtmId={GTM_ID} />;
}
