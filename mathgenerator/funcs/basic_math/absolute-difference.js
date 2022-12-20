import {random} from '../../utilities/random.js';

function absolute_difference(maxA = 100, maxB = 100, format = 'string'){
    const a = random(maxA);
    const b = random(maxB);
    const absDiff = Math.abs(a - b);
    if(format === 'string'){
        return `| ${a} - ${b} | = ${absDiff}` 
    }
    
}

export {absolute_difference}