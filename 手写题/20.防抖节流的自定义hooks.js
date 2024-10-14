import { useCallback, useMemo } from "react";

// 在 n 秒内多次触发只在最后一次执行
export const useDebounce = (exec, time = 1000) => {
  const debounceFunction = useMemo(() => {
    let _timer;

    return function () {
      if (_timer) {
        clearTimeout(_timer);
      }
      const _this = this;
      const _arg = arguments;
      _timer = setTimeout(() => {
        exec.apply(_this, _arg);
      }, time);
    };
  }, []);
  return debounceFunction;
};
// 在一个 高频 行为中 每搁 n 秒触发一次
export const useThrottle = (exec, time = 1000) => {
  const throttleFunction = useMemo(() => {
    let _timer;

    return function () {
      if (_timer) return;
      const _this = this;
      const _arg = arguments;

      _timer = setTimeout(() => {
        exec.apply(_this, _arg);
        clearTimeout(_timer);
      }, time);
    };
  }, []);
  return throttleFunction;
};
