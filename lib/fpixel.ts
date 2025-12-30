export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

const safeFbq = (...args: unknown[]) => {
  (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq?.(...args);
};

export const pageview = () => safeFbq('track', 'PageView');

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: string, options: Record<string, unknown> = {}) =>
  safeFbq('track', name, options);
