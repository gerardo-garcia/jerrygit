import { ui, defaultLang, type Lang, type TranslationKey } from './ui';

export type { Lang };

function stripBase(pathname: string): string {
  const base = (import.meta.env.BASE_URL + '/').replace(/\/+$/, '/');
  const basePath = base === '/' ? '' : base.slice(0, -1);
  return basePath && pathname.startsWith(basePath) ? pathname.slice(basePath.length) : pathname;
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = stripBase(url.pathname).split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

export function getAlternateUrl(url: URL, targetLang: Lang): string {
  const base = (import.meta.env.BASE_URL + '/').replace(/\/+$/, '/');
  const basePath = base === '/' ? '' : base.slice(0, -1);
  const parts = stripBase(url.pathname).split('/');
  if (parts[1] in ui) {
    parts[1] = targetLang;
  } else {
    parts.splice(1, 0, targetLang);
  }
  return basePath + (parts.join('/') || `/${targetLang}/`);
}

export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
