import os from "os"
/**
 * 
 * @param {string} hostname
 * @param {string} resource 
 */
function patcher(hostname, resource){
    console.log(global)
    const host = hostname

    return `http://${host}/api/cdn/images/${resource}`
}

export {patcher}