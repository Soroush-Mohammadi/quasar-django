export function useSpaceRemover(str) {
  function removeSpace(str) {
    if (str.includes(" ")) {
      return str.replace(/\s/g, "-");
    } else {
      return str;
    }
  }
  return { removeSpace };
}
