function inventoryList() {
  let items = [];

  const add = (itemToAdd) => {
    const currentItems = items.filter((item) => item === itemToAdd);
    if (currentItems.length === 0) {
      items.push(itemToAdd);
    }
  };

  const remove = (itemToRemove) => {
    items = items.filter((item) => item !== itemToRemove);
  };

  const getList = () => {
    return items;
  };

  return { add, remove, getList };
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  // Call to our function
  const obj = inventoryList();
  const operationCount = parseInt(readLine().trim());

  // Sample input
  /*
    add Shirt
    add Trouser
    getList
    remove Shirt
    getList
    */

  // Sample output
  /*
    Shirt,Trouser
    Trouser 
  */

  for (let i = 1; i <= operationCount; i++) {
    const operationInfo = readLine().trim().split(" ");
    // Calls to our function
    if (operationInfo[0] === "add") {
      obj.add(operationInfo[1]);
    } else if (operationInfo[0] === "remove") {
      obj.remove(operationInfo[1]);
    } else if (operationInfo[0] === "getList") {
      const res = obj.getList();
      if (res.length === 0) {
        ws.write("No Items\n");
      } else {
        ws.write(`${res.join(",")}\n`);
      }
    }
  }
  ws.end();
}

main();
