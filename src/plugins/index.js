export default (store) => {
    store.subscribe((mutation, state) => {
        // eslint-disable-next-line
        console.log('this is a plugin say:', mutation)
        // eslint-disable-next-line
        console.log('this is a plugin say:', state)

    })
}