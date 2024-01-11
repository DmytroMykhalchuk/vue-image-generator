import { createStore } from "vuex";
import Waifu from './modules/waifu';
import Cat from './modules/cat';
import App from './modules/app';

export default createStore({
    modules: { Waifu, Cat, App },
});