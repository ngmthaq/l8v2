import { getLocale } from '../helpers';

export default {
    methods: {
        $t(key, replace = {}) {
            let locale = getLocale();
            let translation = key.split('.').reduce((t, i) => t[i] || key, window.translations[locale]);

            if (translation == key) {
                translation = window.translationJsons[locale][key] || key;
            }

            for (var placeholder in replace) {
                translation = translation.replace(`:${placeholder}`, replace[placeholder]);
            }

            return translation;
        },

        $tc(key, count = 1, replace = {}) {
            let locale = getLocale();
            let translation = key.split('.').reduce((t, i) => t[i] || key, window.translations[locale]).split('|');

            translation = count > 1 ? translation[1] : translation[0];

            for (var placeholder in replace) {
                translation = translation.replace(`:${placeholder}`, replace[placeholder]);
            }

            return translation;
        }
    }
}
