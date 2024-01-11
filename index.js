// Завдання: 1 трохи запарився з заливкою цього завдання
/**
 * Функція `createDictionary` створює словник на основі масиву пар ключ-значення.
 * entries - Масив, що містить пари ключ-значення.
 * Повертаємо - Створений словник (Map).
 */
function createDictionary(entries) {
  const dict = new Map();
  entries.forEach(([key, value]) => {
    dict.set(key, value);
  });
  return dict;
  // Створення порожнього словника
  // Використання методу forEach для перебору масиву пар ключ-значення
  // Додавання пари ключ-значення до словника за допомогою методу set
}

// Приклад використання функції createDictionary
console.log("Завдання: 1 ==============================");

console.log(
  createDictionary([
    ["apple", "яблуко"],
    ["banana", "банан"],
    ["orange", "апельсин"],
  ])
);
// Виведе:
// Map(3) {
//   'apple' => 'яблуко',
//   'banana' => 'банан',
//   'orange' => 'апельсин'
// }

// Завдання: 2
/**
 * Функція `convertMapToObject` отримує словник (Map) та перетворює його в об'єкт.
 * Ключами об'єкту стають ключі словника, а значеннями об'єкту - значення відповідних ключів у словнику.
 *
 * map - Словник, який потрібно перетворити.
 *
 * Повертає - Об'єкт, що містить ключі та значення з вхідного словника.
 */
function convertMapToObject(map) {
  let obj = {}; // Ініціалізуємо пустий об'єкт
  for (let [key, value] of map) {
    // Перебираємо ключі та значення в словнику
    obj[key] = value; // Додаємо ключ та значення до об’єкту
  }
  return obj; // Повертаємо отриманий об'єкт
}

// Приклад використання функції convertMapToObject
console.log("Завдання: 2 ==============================");

let someMap = new Map([
  ["name", "John"],
  ["age", 30],
  ["city", "New York"],
]);

console.log(convertMapToObject(someMap));
// Виведе: { name: 'John', age: 30, city: 'New York' }

// Завдання: 3
/**
 * Функція `setValue` встановлює значення для заданого ключа в словнику.
 * dictionary - Словник, в якому потрібно змінити значення.
 * key - Ключ, для якого потрібно встановити значення.
 * value - Нове значення, яке потрібно присвоїти ключу.
 */
function setValue(dictionary, key, value) {
  let updatedDictionary = new Map(dictionary); // Створюємо новий словник, щоб не змінювати початковий
  if (updatedDictionary.has(key)) {
    // Перевірка, чи існує вже ключ у словнику
    updatedDictionary.set(key, value.toUpperCase()); // Якщо ключ вже існує, встановлюємо для нього нове значення в верхньому регістрі
  } else {
    updatedDictionary.set(key, value); // Якщо ключ не існує, додаємо нову пару ключ-значення до словника
  }
  return updatedDictionary; // Повертаємо оновлений словник
}

// Приклад використання функції setValue
console.log("Завдання: 3 ==============================");

// Встановлення нового значення для ключа "banana"
console.log(
  setValue(
    new Map([
      ["apple", "яблуко"],
      ["banana", "банан"],
      ["orange", "апельсин"],
    ]),
    "banana",
    "новий банан"
  )
);
// Виведе:
// Map(3) {
//   'apple' => 'яблуко',
//   'banana' => 'новий банан',
//   'orange' => 'апельсин'
// }

// Завдання: 4
/**
 * Функція `deleteKey` видаляє ключ та відповідне йому значення зі словника.
 * dictionary - Словник, з якого потрібно видалити ключ.
 * key - Ключ, який потрібно видалити.
 * Повертаємо - true, якщо ключ був успішно видалений, або false, якщо ключ не знайдено.
 */
function deleteKey(dictionary, key) {
  if (dictionary.has(key)) {
    // Перевірка, чи існує ключ у словнику
    dictionary.delete(key); // Якщо ключ існує, видаляємо його та відповідне значення
    return true;
  } else {
    return false; // Якщо ключ не знайдено, повертаємо false
  }
}

// Приклад використання функції deleteKey
console.log("Завдання: 4 ==============================");

console.log(
  deleteKey(
    new Map([
      ["apple", "яблуко"],
      ["banana", "банан"],
      ["orange", "апельсин"],
    ]),
    "banana"
  )
); // true

// Завдання: 5
/**
 * Функція `getKeysStartingWith` повертає масив ключів словника, які починаються з заданої букви.
 * dictionary - Словник, ключі якого перевіряються.
 * letter - Буква, з якої мають починатися ключі.
 * Повертаємо - Масив ключів, які починаються з заданої букви.
 */
function getKeysStartingWith(dictionary, letter) {
  let keysStartingWithLetter = []; // Оголошення порожнього масиву для збереження ключів
  for (let key of dictionary.keys()) {
    // Перебір ключів словника за допомогою циклу for...of
    if (key.startsWith(letter)) {
      // Перевірка, чи ключ починається з заданої букви
      keysStartingWithLetter.push(key); // Якщо ключ починається з заданої букви, додаємо його до масиву
    }
  }
  return keysStartingWithLetter; // Повертаємо масив ключів, які починаються з заданої букви
}

// Приклад використання функції getKeysStartingWith
console.log("Завдання: 5 ==============================");

// Отримання ключів, які починаються з букви "g"
console.log(
  getKeysStartingWith(
    new Map([
      ["apple", "яблуко"],
      ["banana", "банан"],
      ["orange", "апельсин"],
      ["grape", "виноград"],
      ["pear", "груша"],
    ]),
    "g"
  )
); // Виведе: [ 'grape' ]

// Завдання: 6
/**
 * Функція `addKeyValuePairs` додає пари ключ-значення до словника з перевіркою на унікальність ключа.
 * Вона також веде статистику доданих та відхилених ключів.
 * dictionary - Словник, в який потрібно додати пари.
 * entries - Масив пар ключ-значення, які потрібно додати.
 * Повертаємо - Об'єкт, що містить змінений словник, кількість доданих та відхилених ключів.
 */
function addKeyValuePairs(dictionary, entries) {
  let added = 0; // Змінна для ведення статистики доданих ключів
  let rejected = 0; // Змінна для ведення статистики відхиленних ключів

  entries.forEach((entry) => {
    // Використовуємо метод forEach для перебору масиву пар ключ-значення
    const [key, value] = entry; // Розпаковуємо пару ключ-значення
    if (!dictionary.has(key)) {
      // Перевіряємо, чи словник не містить вже такий ключ
      dictionary.set(key, value); // Якщо ключ є унікальним, додаємо його до словника
      added++; // Збільшуємо лічильник доданих ключів
    } else {
      rejected++; // Якщо ключ не є унікальним, збільшуємо лічильник відхилених ключів
    }
  });

  return { dictionary, added, rejected }; // Повертаємо об'єкт зі зміненим словником та статистикою
}

console.log("Завдання: 6 ==============================");

console.log(
  addKeyValuePairs(
    new Map([
      ["user1", { name: "John", age: 24 }],
      ["user2", { name: "Emma", age: 28 }],
    ]),
    [
      ["user3", { name: "Bob", age: 33 }],
      ["user2", { name: "Alice", age: 25 }],
    ]
  )
);
// Виведе: {
//   dictionary: Map(3)
//   { 'user1' => { name: 'John', age: 24 },
//   'user2' => { name: 'Emma', age: 28 },
//   'user3' => { name: 'Bob', age: 33 } },
//   added: 1,
//   rejected: 1
// }

// Завдання: 7
/**
 * Функція `transformDictionary` перетворює словник в об'єкт, який містить масиви ключів, значень і пар ключ-значення.
 * dictionary - Словник, який потрібно перетворити.
 * Повертаємо - Об'єкт, який містить масиви ключів, значень і пар ключ-значення.
 */
function transformDictionary(dictionary) {
  let keys = []; // Порожній масив для ключів
  let values = []; // Порожній масив для значень
  let entries = []; // Порожній масив для пар ключ-значення

  for (let key of dictionary.keys()) {
    keys.push(key); // Додаємо кожен ключ до масиву keys
  }

  for (let value of dictionary.values()) {
    values.push(value); // Додаємо кожне значення до масиву values
  }

  for (let entry of dictionary.entries()) {
    entries.push(entry); // Додаємо кожну пару ключ-значення до масиву entries
  }

  return { keys, values, entries }; // Повертаємо об'єкт з масивами ключів, значень і пар ключ-значення
}

console.log("Завдання: 7 ==============================");

console.log(
  transformDictionary(
    new Map([
      ["car", "автомобіль"],
      ["bus", "автобус"],
      ["bicycle", "велосипед"],
    ])
  )
);
// Виведе: {
//    keys: [ 'car', 'bus', 'bicycle' ],
//    values: [ 'автомобіль', 'автобус', 'велосипед' ],
//    entries: [
//     [ 'car', 'автомобіль' ],
//     [ 'bus', 'автобус' ],
//     [ 'bicycle', 'велосипед' ]
//   ]
// }

// Завдання: 8
/**
 * Функція `checkPresence` перевіряє наявність заданих ключів у словнику.
 * dictionary - Словник, в якому перевіряємо ключі.
 * keys - Масив ключів, які перевіряємо.
 * Повертаємо - Масив булевих значень: true, якщо ключ присутній у словнику, та false, якщо ключ відсутній.
 */
function checkPresence(dictionary, keys) {
  let presence = []; // Порожній масив для збереження результатів перевірки

  keys.forEach((key) => {
    presence.push(dictionary.has(key)); // Додаємо результат перевірки (true або false) до масиву presence
  });

  return presence; // Повертаємо масив з результатами перевірки
}

console.log("Завдання: 8 ==============================");

console.log(
  checkPresence(
    new Map([
      ["car", "автомобіль"],
      ["chair", "стілець"],
      ["computer", "комп'ютер"],
    ]),
    ["car", "book", "chair"]
  )
);
// Виведе: [true, false, true]

// Завдання: 9
/**
 * Функція `getFilteredDictionarySize` повертає кількість елементів в словнику, значення яких відповідають заданому фільтру.
 * dictionary - Словник, розмір якого потрібно отримати.
 * filter - Фільтрувальна функція. Ця функція приймає пару ключ-значення та повертає true, якщо пара відповідає фільтру, або false в іншому випадку.
 * Повертаємо - Розмір фільтрованого словника.
 */
function getFilteredDictionarySize(dictionary, filter) {
  let filteredDictionary = new Map(); // Створюємо новий Map об'єкт для зберігання елементів, що відповідають фільтру
  for (let [key, value] of dictionary.entries()) {
    // Використовуємо for...of цикл разом з методом entries() для перебору пар [ключ, значення] словника
    if (filter(key, value)) {
      filteredDictionary.set(key, value); // Якщо пара [ключ, значення] відповідає фільтру, додаємо її до фільтрованого словника
    }
  }
  return filteredDictionary.size; // Повертаємо розмір фільтрованого словника, використовуючи властивість size
}

console.log("Завдання: 9 ==============================");

console.log(
  getFilteredDictionarySize(
    new Map([
      ["Kyiv", 2884000],
      ["Kharkiv", 1446000],
      ["Odesa", 993120],
      ["Dnipro", 990724],
      ["Lviv", 721301],
    ]),
    (key, value) => value > 1000000
  )
);
// Виведе: 2, оскільки лише два міста мають населення більше ніж 1 мільйон

// Завдання: 10
/**
 * Функція `sortByValues` сортує словник за значеннями від найбільшого до найменшого.
 * dictionary - Словник, який потрібно відсортувати.
 * Повертаємо - Відсортований словник.
 */
function sortByValues(dictionary) {
  // Конвертуємо словник в масив пар ключ-значення за допомогою оператора деструктурізації
  let sortedArray = Array.from(dictionary.entries());

  // Сортуємо масив за значеннями в порядку спадання
  sortedArray.sort((a, b) => b[1] - a[1]);

  // Конвертуємо відсортований масив пар ключ-значення назад у словник
  let sortedDictionary = new Map(sortedArray);
  return sortedDictionary;
}

console.log("Завдання: 10 ==============================");

console.log(
  sortByValues(
    new Map([
      ["Harry Potter and the Philosopher's Stone", 120000000],
      ["The Little Prince", 200000000],
      ["The Hobbit", 100000000],
      ["And Then There Were None", 100000000],
      ["Dream of the Red Chamber", 100000000],
    ])
  )
);
// Виведе: Map {
// 'The Little Prince' => 200000000,
// 'Harry Potter and the Philosopher's Stone' => 120000000,
// 'The Hobbit' => 100000000,
// 'And Then There Were None' => 100000000,
// 'Dream of the Red Chamber' => 100000000 }

// Завдання: 11
/**
 * Функція `resetDictionary` перевіряє кількість елементів у словнику, та якщо вона більша ніж задана, очищує словник.
 * dictionary - Словник, який потрібно перевірити та можливо очистити.
 * maxSize - Максимально допустима кількість елементів у словнику.
 * Повертаємо - true, якщо словник був очищений, або false в іншому випадку.
 */
function resetDictionary(dictionary, maxSize) {
  // Використовуємо метод size для перевірки кількості елементів у словнику
  if (dictionary.size > maxSize) {
    // Якщо кількість елементів більша ніж максимально допустима, очищуємо словник за допомогою методу clear
    dictionary.clear();
    // Повертаємо true, оскільки словник був очищений
    return true;
  } else {
    // Повертаємо false, оскільки кількість елементів не перевищує максимально допустиму, тому словник не був очищений
    return false;
  }
}

console.log("Завдання: 11 ==============================");

console.log(
  resetDictionary(
    new Map([
      ["Kyiv", 2884000],
      ["Kharkiv", 1446000],
      ["Odesa", 993120],
      ["Dnipro", 990724],
      ["Lviv", 721301],
    ]),
    3
  )
);
// Виведе: true, оскільки у словнику було 5 елементів, що більше ніж maxSize = 3

// Завдання: 12
/**
 * Функція `convertDictionaryToSet` отримує словник та перетворює його в множину.
 * Значенням множини є ключі словника, де рядкові ключі переводяться в верхній регістр,
 * а числові ключі збільшуються на 1.
 *
 * dictionary - Словник, який потрібно перетворити.
 *
 * Повертає - Множину, яка містить ключі словника в модифікованому вигляді.
 */
function convertDictionaryToSet(dictionary) {
  let modifiedSet = new Set(); // Перебираємо ключі словника

  dictionary.forEach((value, key) => {
    // Якщо ключ є рядком, переводимо його в верхній регістр і додаємо до множини

    if (typeof key === "string") {
      modifiedSet.add(key.toUpperCase());
      // Якщо ключ є числом, збільшуємо його на 1 і додаємо до множини
    } else if (typeof key === "number") {
      modifiedSet.add(key + 1);
    }
  });

  // Повертаємо отриману множину
  return modifiedSet;
}

// Приклад використання функції convertDictionaryToSet
console.log("Завдання: 12 ==============================");

let mixedDictionary = new Map([
  ["apple", "red"],
  ["banana", "yellow"],
  [1, "one"],
  [2, "two"],
]);

console.log(convertDictionaryToSet(mixedDictionary));
// Виведе: Set { 'APPLE', 'BANANA', 2, 3 }

// Завдання: 13
/**
 * Функція `convertSetToDictionary` отримує множину та перетворює її в словник.
 * Ключами словника стають елементи множини, а значеннями - коди перших символів цих елементів.
 *
 * set - Множина, яку потрібно перетворити.
 *
 * Повертає - Словник, який містить елементи множини як ключі та їх коди перших символів як значення.
 */
function convertSetToDictionary(set) {
  let newDictionary = new Map();
  // Перебираємо елементи множини
  set.forEach((element) => {
    // Додаємо елемент в словник з ключем, який дорівнює елементу, та значенням, яке дорівнює коду його першого символу
    newDictionary.set(element, element.charCodeAt(0));
  });
  // Повертаємо отриманий словник
  return newDictionary;
}

// Приклад використання функції convertSetToDictionary
console.log("Завдання: 13 ==============================");

let someSet = new Set(["apple", "banana", "1", "2"]);

console.log(convertSetToDictionary(someSet));
// Виведе: Map { 'apple' => 97, 'banana' => 98, '1' => 49, '2' => 50 }
