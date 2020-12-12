const getRand = (min = 0, max = 10) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const createArrayWithRandomNumbers = (arrSize = 10) => {
  const arr = [];
  for (let i = 0; i < arrSize; i++) {
    arr[i] = getRand();
  }
  return arr;
};

function* getOnlyEvenNumbers(arr) {
  for (const item of arr) {
    if (item % 2 === 0) {
      yield item;
    }
  }
}

// Wygeneruj 10-elementową tablicę liczb losowych, a następnie wypisz te liczby w konsoli.
const runTask1 = () => {
  console.log('Task 1');
  const arr = createArrayWithRandomNumbers(10);

  console.log('Array with random numbers:', arr);
  console.log('Values:');
  for (const item of arr) {
    console.log(item);
  }
};

// Utwórz funkcję tworzącą tablicę 10-elementową z wylosowanymi liczbami. Następnie napisz
// nową funkcję, która przyjmuje nowoutworzoną tablicę jako parametr i zwraca tylko wartości
// parzyste.
const runTask2 = () => {
  console.log('Task 2');

  const arr = createArrayWithRandomNumbers(10);
  console.log('Original arr', arr);

  const evenOnlyArr = [...getOnlyEvenNumbers(arr)];
  console.log('Array with only even values:', evenOnlyArr);
};

runTask1();
runTask2();
