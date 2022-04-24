import localStorage from '../configs/localStorage';

const localeKey = localStorage.key.locale;

export function getLocale() {
    let locale = window.locales.includes(window.appLocale) ? window.appLocale : window.fallbackLocale;

    return window.localStorage.getItem(localeKey) || locale;
}

export function getLocales() {
    return window.locales;
}
