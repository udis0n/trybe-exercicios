function techList(array, string) {
    let arrayObject = [];
    let arraySort = array.sort();
  
    if (array.length === 0) {
      return 'Vazio!';
    }
  
    for (let index = 0; index < array.length; index += 1) {
      arrayObject.push({
        tech: arraySort[index],
        name: string,
      });
    }
    return arrayObject;
  }

module.exports = techList;
