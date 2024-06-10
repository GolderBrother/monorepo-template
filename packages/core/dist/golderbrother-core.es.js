const r = (e) => {
  if (typeof e != "string")
    throw new Error("参数必须是字符串");
  return e.split("").reverse().join("");
}, o = () => ({ message: "Response from core" });
export {
  o as coreFunction,
  r as reverseString
};
