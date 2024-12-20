/* Returns a promise that will resolve on the next AnimationFrame */
export function nextFrame() {
  return new Promise(function (resolve: any, reject: any) {
    requestAnimationFrame(function () {
      resolve();
    });
  });
}

/* Applies `fn` to each element of `collection`, iterating once per frame */
export function mapInFrames(collection: any, fn: any) {
  const results: any = [];

  return new Promise(function (resolve, reject) {
    const processEntry = function (index: any) {
      if (index < collection.length) {
        requestAnimationFrame(function () {
          try {
            results.push(fn(collection[index]));
            processEntry(index + 1);
          } catch (e) {
            reject(e);
          }
        });
      } else {
        resolve(results);
      }
    };

    processEntry(0);
  });
}
