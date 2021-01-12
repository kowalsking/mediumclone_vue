const state = {
  isSubmitting: false
}

const mutations = {
  registerStart(state) {
    state.isSubmitting = true
  }
}

const actions = {
  register (context) {
    setTimeout(() => {
      context.commit('registerStart')
    }, 1200)
  }
}

export default {
  state,
  mutations,
  actions
}