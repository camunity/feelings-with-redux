
// Actions are functions that are meant to update the global state

export const nameChange = (text) => {
    console.log(text)
    // Actions can return a type and a payload of data
    return{
        type: "NAME_CHANGE",
        payload: text
    }
}