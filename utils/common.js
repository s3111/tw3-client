import React from "react";

export const personEmotion = (i) => {
    if(i > 0.6)       return  (<span>&#x1F604;</span>)
    else if(i > 0.2)  return  (<span>&#x1F642;</span>)
    else if(i > -0.2) return  (<span>&#x1F610;</span>)
    else if(i > -0.6) return  (<span>&#x1F641;</span>)
    else              return  (<span>&#x1F621;</span>)
}
export const formatter = (num) => {
    let res = ''
    if(Math.abs(num)    > 999999) res = Math.sign(num)*((Math.abs(num)/1000000).toFixed(1)) + 'M'
    else if(Math.abs(num)    > 9999) res = Math.sign(num)*((Math.abs(num)/1000).toFixed(0)) + 'k'
    else if(Math.abs(num) > 999) res = Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k'
    else res = Math.sign(num)*Math.abs(num)
    return res
}