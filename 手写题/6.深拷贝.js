function deepClone(obj, map = new Map()) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const newObj = new obj.prototype.constructor();
  if (obj instanceof Date) return new Date(obj);
  if (typeof obj === "function") return obj;

  if (map.has(obj)) {
    return map.get(obj);
  }

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key], map);
    }
  }

  return newObj;
}
