import { ui, defaultLang, type Lang, type TranslationKey } from './ui';

export type { Lang };

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

export function getAlternateUrl(url: URL, targetLang: Lang): string {
  const parts = url.pathname.split('/');
  if (parts[1] in ui) {
    parts[1] = targetLang;
  } else {
    parts.splice(1, 0, targetLang);
  }
  return parts.join('/') || `/${targetLang}/`;
}

export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
