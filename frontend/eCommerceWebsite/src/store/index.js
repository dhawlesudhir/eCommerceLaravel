import { createStore } from "vuex";
import state from "@/store/state";
import * as actions from "@/store/actions";
import * as mutations from "@/store/mutations";

const store = createStore({
  state,
  getters: {},
  actions,
  mutations,
});

export default store;
