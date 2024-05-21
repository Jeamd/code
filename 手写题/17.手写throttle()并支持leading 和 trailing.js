

// This is a JavaScript coding problem from BFE.dev 
/**
 * 本题目中你需要实现一个增强的throttle()，使其支持第三个参数option: {leading: boolean, trailing: boolean}
 * leading: 是否立即执行
 * trailing: 是否在冷却后执行
 */

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function throttle(func, wait, option = {leading: true, trailing: true}) {
    // your code here
    let waiting = false, lastArgs = null;

    return function (...args) {
        if(waiting) {
            lastArgs = args;
            return;
        };

        leading && func.apply(this, args)
        waiting = true;
        const doTimeOut = () => {
            setTimeout(() => {
                if(lastArgs) {
                    func.apply(this, lastArgs);
                }
            }, wait)
        }

        doTimeOut();
    }
  }
  
  
  
  