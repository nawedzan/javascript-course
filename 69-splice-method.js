// splice method 
// start , delete , insert 

const myArray = ['item1', 'item2', 'item3'];

// delete
// const deletedItem = myArray.splice(1, 2);
// console.log("delted item", deletedItem);
// insert 
// myArray.splice(1, 0,'inserted item');

// insert and delete 
const deletedItem = myArray.splice(1, 0, [1,2,3,4])
console.log("delted item", deletedItem);
console.log(myArray);

//1.we can insert item with splice
//2. we can delete item with splice
//3. the deleted items can be returned in an array
//4. the delete parameter specifies the number of elements to be deleted from starting index 
//5. to not delete anything just put a 0 in delete parameter
// 6. to not insert anything leave the insert section empty.
//7

