'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import * as pixel from '../lib/fpixel';

const FacebookPixel = () => {
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();

  const enabled = Boolean(pixel.FB_PIXEL_ID);

  useEffect(() => {
    if (!enabled || !loaded) return;
    pixel.pageview();
  }, [pathname, loaded, enabled]);

  if (!enabled) return null;

  return (
    <div>
      <Script
        id="fb-pixel"
        src="/scripts/pixel.js"
        strategy="afterInteractive"
        onLoad={() => setLoaded(true)}
        data-pixel-id={pixel.FB_PIXEL_ID}
      />
    </div>
  );
};

export default FacebookPixel;
