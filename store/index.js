export const state = () => ({
    users: [],
    detail_user: null,
  });
  
  export const mutations = {
    SET_USERS(state, value) {
      state.users = value;
    },
    SET_DETAIL(state, value) {
      state.detail_user = value;
    },
  };
  
  export const actions = {
    async getUsers({ commit }) {
      const users = await this.$axios
        .$get("users")
        .then(({ data }) => data)
        .catch((err) => {
          console.warn(err);
          return [];
        });
  
      commit("SET_USERS", users);
    },
    async getDetailUser({ commit }, id) {
      const user = await this.$axios
        .$get(`users/${id}`)
        .then(({ data }) => data)
        .catch((err) => {
          console.warn(err);
          return [];
        });
  
      commit("SET_DETAIL", user);
    },
  };
  