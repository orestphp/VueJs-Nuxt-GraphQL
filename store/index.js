export const state = () => ({
  pageName: '',
})

export const getters = {
  getPageName(state) {
    return state.pageName
  }
}

export const mutations = {
  CHANGE_NAME(state, {name}) {
    state.pageName = name;
  }
}

export const actions = {
  changePageName ({ commit }, { name }) {
    commit('CHANGE_NAME', { name })
  }
}
