export interface ScheduleItem {
  day: string
  hours: string | null
  open: number | null
  close: number | null
}

export type ServiceType = 'general' | 'hybrid' | 'diagnostics' | 'brakes' | 'electrical' | 'suspension'

export type LanguageCode = 'en' | 'ro' | 'ru'

export interface Language {
  code: LanguageCode
  label: string
}

declare global {
  interface ImportMetaEnv {
    readonly VITE_FACEBOOK_PIXEL_ID?: string
    readonly VITE_GTM_ID?: string
  }

  interface Window {
    fbq?: (...args: unknown[]) => void
    _fbq?: (...args: unknown[]) => void
  }
}
