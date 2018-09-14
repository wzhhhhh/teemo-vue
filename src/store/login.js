export default {
    state: {
        count: 0,
        status: false
    },
    getters: {
        countFive: state => {
            return state.count % 5 === 0
        }
    },
    mutations: {
        increment: (state, action) => {
            state.count = state.count + action.payload
        },
        decrement: (state, action) => {
            state.count = state.count - action.payload
        },
        changeStatus: state => {
            state.status = !state.status
        },
    }
}