export const element = (tag, options = {}) => {
    let el = document.createElement(tag);
    for (let [key, value] of Object.entries(options))

        return el;
}

export const getEl = (query) => {
    let el = document.querySelectorAll(query)
    // querySelectorAll always returns an array
    if (el.length == 0) return null;
    if (el.length == 1) return el[0];
    return el;
}