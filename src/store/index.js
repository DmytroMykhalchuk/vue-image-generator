import { createStore } from "vuex";
import App from './modules/app';
import Cat from './modules/cat';

export default createStore({
    modules: { App, Cat },
});