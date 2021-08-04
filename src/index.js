module.exports = function check(str, bracketsConfig) {
  let items = str.split('');
  bracketsConfig.forEach((element, index) => {
    let rank = (index + 1) / 10;
    let position1 = items.indexOf(element[0]);
    let position2 = items.indexOf(element[1], position1 + 1);
    while (position1 != -1 || position2 != -1) {
      if (position1 != -1) {
        items[position1] = rank;
      }
      if (position2 != -1) {
        items[position2] = - rank;
      }
      position1 = items.indexOf(element[0]);
      position2 = items.indexOf(element[1], position1 + 1);
    }
  });
  let index = 0, sum =[];
  while (index < items.length) {
    if (items[index] > 0) {
      sum.push(items[index]);
    } else {
      if (sum.length == 0 || sum.pop() + items[index] != 0) {
        break;
      }
    }
    index++;
  }
  return index == items.length && sum.length == 0;
}


