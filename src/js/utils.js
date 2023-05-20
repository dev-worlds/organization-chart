export function uuid() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

export function generateUuidForArray(arr, childName = 'children') {
    arr.forEach(obj => {
        obj.id = uuid();
        if (obj[childName]?.length) {
            generateUuidForArray(obj[childName], childName)
        }
    })
}

export function checkNestingElm(arr, elm, nesting = 'children') {
    if (!arr) return false;
    if (!elm) return false
    return arr.some(child => {
        if (child === elm) return true;
        if (nesting in child) {
            return checkNestingElm(child[nesting], elm, nesting)
        }
    })
}