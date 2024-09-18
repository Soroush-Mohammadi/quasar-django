export function useDashRemover(str) {
  function dashRemover() {
    const index = str.indexOf("-");
    if (index !== -1) {
      return str.substring(0, index) + " " + str.substring(index + 1);
    }
    return str;
  }

  return dashRemover;
}
