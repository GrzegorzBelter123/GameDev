import {createStore} from 'vuex';
import Global from "./modules/global";
import User from "./modules/user";
import UsersList from "./modules/usersList";

export const store = createStore({
    modules: {
        Global,
        User,
        UsersList
    }
});

