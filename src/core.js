

import get from "lodash/get"

/**
 * iterate throgh specific properties
 * @param {*} rootObject root object
 * @param {*} properties properties to iterate through
 * @param {*} index current iterating property index = 0
 * @returns iterator
 */
export function* Eachless(rootObject, properties = [], index = 0) {

    if (!Array.isArray(properties) || properties.find(p => typeof (p) !== 'string')) {
        throw new Error('properties must be array of strings')
    }

    const key = properties[index]
    const items = get(rootObject, key)

    if (Array.isArray(items)) {
        for (let item of items) {
            if (properties[index + 1]) {
                yield* Eachless(item, properties, index + 1)
            } else {
                yield item
            }
        }
    } else {
        if(key && rootObject.hasOwnProperty(key)){
            yield rootObject[key]
        }else{
            yield rootObject
        }
    }
}


