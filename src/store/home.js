

export default {
    state: {
        count: 0,
        status: false
    },
    getters: {
        HOME_COUNTFIVE: state => {
            return state.count % 5 === 0
        }
    },
    mutations: {
        HOME_INCREMENT: (state, action) => {
            state.count = state.count + action.payload
        },
        HOME_DECREMENT: (state, action) => {
            state.count = state.count - action.payload
        },
        HOME_CHANGESTATUS: (state) => {
            state.status = !state.status
        },
    }
}