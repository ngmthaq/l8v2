import Api from '../../services/Api';
import { getLocale } from '../../helpers';
import localStorage from '../../configs/localStorage';

const api = new Api();
const localeKey = localStorage.key.locale;

export default {
    namespaced: true,

    state: () => ({}),

    mutations: {
        SET_LOCALE(state, locale) {
            window.localStorage.setItem(localeKey, locale);
        }
    },

    getters: {
        getLocale(state) {
            return getLocale();
        }
    },

    actions: {
        async setLocale(context, payload) {
            context.commit('SET_LOCALE', payload.locale);
        }
    }
}
