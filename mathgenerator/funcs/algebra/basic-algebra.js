import {random} from '../../utilities/random.js';
/**
 * mathgenerator/utilities/random.js
 * the Least Common Multiplier
 * @return {random value} least common multiplier of two numbers.
 * @example
 * 
 * //-> 12
 * @origin idea https://github.com/lukew3/mathgenerator/blob/7819215acacafa59e0951e84343f1cd62f701bb6/mathgenerator/funcs/algebra/basic_algebra.py
 * executing Math.lcm(6, 7) and get the following
 * //-> 42
 */

function basic_algebra(max = 10, format = 'string'){
    const a = random(max);
    const b = random(max);
    const c = random(max);
    return `${a} - ${b} -${c}`
}


export {basic_algebra};

