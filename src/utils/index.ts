// export const throttle = (fn: Function, wait: number) => {
//   let inThrottle: boolean,
//     lastFn: ReturnType<typeof setTimeout>,
//     lastTime: number;
//   return function (this: any) {
//     const context = this,
//       args = arguments;
//     if (!inThrottle) {
//       fn.apply(context, args);
//       lastTime = Date.now();
//       inThrottle = true;
//     } else {
//       clearTimeout(lastFn);
//       lastFn = setTimeout(() => {
//         if (Date.now() - lastTime >= wait) {
//           fn.apply(context, args);
//           lastTime = Date.now();
//         }
//       }, Math.max(wait - (Date.now() - lastTime), 0));
//     }
//   };
// };

export const debounce = (fn: Function, ms: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: Function, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};