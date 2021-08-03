module.exports = function check(str, bracketsConfig) {
  let result = str;
  bracketsConfig.forEach(element => {
    let length = result.length + 2;
    let index1, index2;
    while (result.length > 0 && length - result.length == 2) {
        length = result.length;
        index1 = result.indexOf(element[0]);
        index2 = result.indexOf(element[1]);
        if (index2 > index1) {
          result = result.replace(element[0], '');
          result = result.replace(element[1], '');
        }
    }
  });
  return result == '';
}
