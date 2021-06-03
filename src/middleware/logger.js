const logger = store => next => action => {
    console.group(action.type)
    console.log(`Action: ${action}`)
    const result = next(action)
    console.log(`Store: ${store}`)
    console.groupEnd()
    return result
}

export default logger