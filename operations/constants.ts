
export const CODE = [
  [
    'const addNumbers = (a, b) => {',
    'const sum = a + b;',
    'return sum;',
    '};',
    'const result = addNumbers(5, 10);',
  ],
  [
    'const greet = (name) => {',
    'return `Hello, ${name}`;',
    '};',
    'const result = greet("bob");',
  ],
  [
    'const checkNumber = (number) => {',
    'if (number > 0) {',
    'return "Positive";',
    '} else if (number < 0) {',
    'return "Negative";',
    '} else {',
    'return "Zero";',
    '}',
    '};',
    'const result = checkNumber(7);',
  ],
  ['const add = (a, b) => a + b;', 'const result = add(3, 4);'],
  // Function 42
  ['const multiply = (a, b) => a * b;', 'const result = multiply(5, 6);'],
  // Function 43
  ['const subtract = (a, b) => a - b;', 'const result = subtract(8, 3);'],
  // Function 44
  ['const divide = (a, b) => a / b;', 'const result = divide(10, 2);'],
  // Function 45
  ['const square = (x) => x * x;', 'const result = square(9);'],
  // Function 46
  [
    'const greetPerson = (name) => `Hello, ${name}!`;',
    'const result = greetPerson("Alice");',
  ],
  // Function 47
  ['const isPositive = (num) => num > 0;', 'const result = isPositive(7);'],
  // Function 48
  [
    'const capitalizeString = (str) => str.toUpperCase();',
    'const result = capitalizeString("hello");',
  ],
  // Function 49
  [
    'const generateRandomNumber = () => Math.random();',
    'const result = generateRandomNumber();',
  ],
  // Function 50
  [
    'const getLength = (arr) => arr.length;',
    'const result = getLength([1, 2, 3]);',
  ],
  // Function 51
  [
    'const concatenateStrings = (str1, str2) => str1 + str2;',
    'const result = concatenateStrings("Hello", " World");',
  ],
  // Function 52
  ['const isEven = (num) => num % 2 === 0;', 'const result = isEven(10);'],
  // Function 53
  [
    'const findMax = (arr) => Math.max(...arr);',
    'const result = findMax([4, 7, 2, 9]);',
  ],
  // Function 54
  [
    'const sum = (numbers) => numbers.reduce((acc, num) => acc + num, 0);',
    'const result = sum([1, 2, 3, 4, 5]);',
  ],
  // Function 55
  [
    'const getLastElement = (arr) => arr[arr.length - 1];',
    'const result = getLastElement(["apple", "orange", "banana"]);',
  ],
  [
    'const formatDate = (date, options) => {',
    'return new Date(date).toLocaleDateString(undefined, options);',
    '};',
    'const options = { year: "numeric", month: "short", day: "numeric" };',
    'const result = formatDate("2023-11-23", options);',
  ],
  // Function 57
  [
    'const toCamelCase = (str) => {',
    'return str.replace(/[-_](w)/g, (_, letter) => letter.toUpperCase());',
    '};',
    'const result = toCamelCase("user_name_input");',
  ],
  // Function 58
  [
    'const truncateText = (text, maxLength) => {',
    'return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;',
    '};',
    'const result = truncateText("Lorem ipsum dolor sit amet", 10);',
  ],
  // Function 59
  [
    'const debounceInput = (callback, delay) => {',
    'let timeoutId;',
    'return (...args) => {',
    'clearTimeout(timeoutId);',
    'timeoutId = setTimeout(() => callback(...args), delay);',
    '};',
    '};',
    'const debouncedFunction = debounceInput(() => console.log("Input debounced!"), 300);',
  ],
  // Function 60
  [
    'const capitalizeFirstLetter = (str) => {',
    'return str.charAt(0).toUpperCase() + str.slice(1);',
    '};',
    'const result = capitalizeFirstLetter("javascript");',
  ],
  // Function 61
  [
    'const isValidEmail = (email) => {',
    'const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;',
    'return emailRegex.test(email);',
    '};',
    'const result = isValidEmail("user@example.com");',
  ],
  // Function 62
  [
    'const getRandomElement = (arr) => {',
    'const randomIndex = Math.floor(Math.random() * arr.length);',
    'return arr[randomIndex];',
    '};',
    'const result = getRandomElement(["apple", "orange", "banana"]);',
  ],
  // Function 63
  [
    'const deepCloneArray = (arr) => {',
    'return arr.slice();',
    '};',
    'const originalArray = [1, 2, 3];',
    'const clonedArray = deepCloneArray(originalArray);',
  ],
  // Function 64
  [
    'const countVowels = (str) => {',
    'const vowels = str.match(/[aeiou]/gi);',
    'return vowels ? vowels.length : 0;',
    '};',
    'const result = countVowels("programming");',
  ],
  // Function 65
  [
    'const formatCurrency = (amount, currency) => {',
    'return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);',
    '};',
    'const result = formatCurrency(2500, "USD");',
  ],
  // Function 66
  [
    'const reverseArray = (arr) => arr.slice().reverse();',
    'const originalArray = [1, 2, 3];',
    'const reversedArray = reverseArray(originalArray);',
  ],
  // Function 67
  [
    'const capitalizeAllWords = (str) => {',
    'return str.split(" ").map(word => capitalizeFirstLetter(word)).join(" ");',
    '};',
    'const result = capitalizeAllWords("hello world");',
  ],
  // Function 68
  [
    'const removeFalsyValues = (arr) => arr.filter(Boolean);',
    'const originalArray = [0, 1, false, 2, "", 3, null, undefined, 4, NaN];',
    'const filteredArray = removeFalsyValues(originalArray);',
  ],
  // Function 69
  [
    'const formatDateISO = () => new Date().toISOString();',
    'const result = formatDateISO();',
  ],
  // Function 70
  [
    'const repeatString = (str, times) => str.repeat(times);',
    'const result = repeatString("abc", 3);',
  ],
  // Function 71
  [
    'const isPalindromeString = (str) => str === str.split("").reverse().join("");',
    'const result = isPalindromeString("radar");',
  ],
  // Function 72
  [
    'const removeDuplicates = (arr) => [...new Set(arr)];',
    'const originalArray = [1, 2, 2, 3, 4, 4, 5];',
    'const uniqueArray = removeDuplicates(originalArray);',
  ],
  // Function 73
  [
    'const calculateFactorial = (n) => {',
    'if (n === 0 || n === 1) return 1;',
    'return n * calculateFactorial(n - 1);',
    '};',
    'const result = calculateFactorial(5);',
  ],
  // Function 74
  [
    'const titleCaseSentence = (sentence) => {',
    'return sentence',
    '.toLowerCase()',
    '.split(" ")',
    '.map(word => capitalizeFirstLetter(word))',
    '.join(" ");',
    '};',
    'const result = titleCaseSentence("this is a title");',
  ],
  // Function 75
  [
    'const findLargestNumber = (numbers) => Math.max(...numbers);',
    'const result = findLargestNumber([12, 5, 8, 21, 15]);',
  ],
  [
    'const isEven = (num) => {',
    'return num % 2 === 0;',
    '};',
    'const result = isEven(6);',
  ],
  [
    'const doubleNumbers = (numbers) => {',
    'return numbers.map(num => num * 2);',
    '};',
    'const result = doubleNumbers([1, 2, 3, 4]);',
  ],
  [
    'const calculateFactorial = (n) => {',
    'let result = 1;',
    'for (let i = 1; i <= n; i++) {',
    'result *= i;',
    '}',
    'return result;',
    '};',
    'const result = calculateFactorial(5);',
  ],
  [
    'const containsZero = (numbers) => {',
    'return numbers.includes(0);',
    '};',
    'const result = containsZero([1, 2, 3, 0, 4]);',
  ],
  [
    'const filterPositiveNumbers = (numbers) => {',
    'return numbers.filter(num => num > 0);',
    '};',
    'const result = filterPositiveNumbers([-2, 5, -1, 3, 0]);',
  ],
  [
    'const isPalindrome = (str) => {',
    'const reversedStr = str.split("").reverse().join("");',
    'return str === reversedStr;',
    '};',
    'const result = isPalindrome("level");',
  ],
  [
    'const sumArray = (numbers) => {',
    'return numbers.reduce((acc, num) => acc + num, 0);',
    '};',
    'const result = sumArray([1, 2, 3, 4, 5]);',
  ],
  [
    'const findMaxValue = (numbers) => {',
    'return Math.max(...numbers);',
    '};',
    'const result = findMaxValue([8, 3, 11, 6, 2]);',
  ],
  [
    'const hasFalsyValue = (arr) => {',
    'return arr.some(item => !item);',
    '};',
    'const result = hasFalsyValue([true, "hello", 42, null]);',
  ],
  [
    'const capitalizeWords = (words) => {',
    'return words.map(word => word.charAt(0).toUpperCase() + word.slice(1));',
    '};',
    'const result = capitalizeWords(["apple", "banana", "cherry"]);',
  ],
  [
    'const countOccurrences = (arr, target) => {',
    'return arr.reduce((count, item) => (item === target ? count + 1 : count), 0);',
    '};',
    'const result = countOccurrences([1, 2, 2, 3, 2, 4], 2);',
  ],
  [
    'const reverseString = (str) => {',
    'return str.split("").reverse().join("");',
    '};',
    'const result = reverseString("hello");',
  ],
  [
    'const findAverage = (numbers) => {',
    'const sum = numbers.reduce((acc, num) => acc + num, 0);',
    'return sum / numbers.length;',
    '};',
    'const result = findAverage([2, 4, 6, 8, 10]);',
  ],
  [
    'const removeDuplicates = (arr) => {',
    'return Array.from(new Set(arr));',
    '};',
    'const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);',
  ],
  [
    'const sumPositiveNumbers = (numbers) => {',
    'return numbers.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);',
    '};',
    'const result = sumPositiveNumbers([-2, 5, -1, 3, 0]);',
  ],
  [
    'const findIndex = (arr, target) => {',
    'return arr.findIndex(item => item === target);',
    '};',
    'const result = findIndex(["apple", "orange", "banana"], "orange");',
  ],
  [
    'const isAllPositive = (numbers) => {',
    'return numbers.every(num => num > 0);',
    '};',
    'const result = isAllPositive([2, 4, 6, 8, 10]);',
  ],
  [
    'const multiplyByIndex = (numbers) => {',
    'return numbers.map((num, index) => num * index);',
    '};',
    'const result = multiplyByIndex([1, 2, 3, 4, 5]);',
  ],
  [
    'const flattenArray = (arrays) => {',
    'return arrays.reduce((flatArray, subArray) => flatArray.concat(subArray), []);',
    '};',
    'const result = flattenArray([[1, 2], [3, 4], [5, 6]]);',
  ],
  [
    'const findFirstEven = (numbers) => {',
    'return numbers.find(num => num % 2 === 0);',
    '};',
    'const result = findFirstEven([1, 3, 5, 6, 7]);',
  ],
  [
    'const reverseLinkedList = (head) => {',
    'let prev = null;',
    'let current = head;',
    'while (current !== null) {',
    'const next = current.next;',
    'current.next = prev;',
    'prev = current;',
    'current = next;',
    '}',
    'return prev;',
    '};',
    'const result = reverseLinkedList(/* linked list input */);',
  ],
  [
    'const debounce = (func, delay) => {',
    'let timeoutId;',
    'return (...args) => {',
    'clearTimeout(timeoutId);',
    'timeoutId = setTimeout(() => func(...args), delay);',
    '};',
    '};',
    'const debouncedFunction = debounce(() => console.log("Debounced!"), 1000);',
  ],
  [
    'const deepCloneObject = (obj) => {',
    'return JSON.parse(JSON.stringify(obj));',
    '};',
    'const originalObject = { a: 1, b: { c: 2 } };',
    'const clonedObject = deepCloneObject(originalObject);',
  ],
  [
    'const mergeSortedArrays = (arr1, arr2) => {',
    'return [...arr1, ...arr2].sort((a, b) => a - b);',
    '};',
    'const result = mergeSortedArrays([1, 3, 5], [2, 4, 6]);',
  ],
  [
    'const throttle = (func, limit) => {',
    'let inThrottle;',
    'return (...args) => {',
    'if (!inThrottle) {',
    'func(...args);',
    'inThrottle = true;',
    'setTimeout(() => (inThrottle = false), limit);',
    '}',
    '};',
    '};',
    'const throttledFunction = throttle(() => console.log("Throttled!"), 1000);',
  ],
  [
    'const flattenObject = (obj) => {',
    'return Object.keys(obj).reduce((acc, key) => {',
    'if (typeof obj[key] === "object" && obj[key] !== null) {',
    'acc = { ...acc, ...flattenObject(obj[key]) };',
    '} else {',
    'acc[key] = obj[key];',
    '}',
    'return acc;',
    '}, {});',
    '};',
    'const nestedObject = { a: 1, b: { c: 2, d: { e: 3 } } };',
    'const flattenedObject = flattenObject(nestedObject);',
  ],
  [
    'const memoizedFibonacci = (() => {',
    'const memo = new Map();',
    'return (n) => {',
    'if (n <= 1) return n;',
    'if (!memo.has(n)) {',
    'memo.set(n, memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2));',
    '}',
    'return memo.get(n);',
    '};',
    '})();',
    'const result = memoizedFibonacci(7);',
  ],
  [
    'const compose = (...funcs) => {',
    'return (arg) => funcs.reduce((composed, func) => func(composed), arg);',
    '};',
    'const addTwo = (x) => x + 2;',
    'const multiplyByThree = (x) => x * 3;',
    'const composedFunction = compose(addTwo, multiplyByThree);',
    'const result = composedFunction(5);',
  ],
  [
    'const curry = (fn) => {',
    'return function curried(...args) {',
    'if (args.length >= fn.length) {',
    'return fn(...args);',
    '} else {',
    'return (...moreArgs) => curried(...args, ...moreArgs);',
    '}',
    '};',
    '};',
    'const add = (a, b, c) => a + b + c;',
    'const curriedAdd = curry(add);',
    'const result = curriedAdd(1)(2)(3);',
  ],
  [
    'const deepMerge = (...objects) => {',
    'return objects.reduce((acc, obj) => {',
    'Object.keys(obj).forEach((key) => {',
    'if (typeof obj[key] === "object" && obj[key] !== null) {',
    'acc[key] = deepMerge(acc[key] || {}, obj[key]);',
    '} else {',
    'acc[key] = obj[key];',
    '}',
    '});',
    'return acc;',
    '}, {});',
    '};',
    'const obj1 = { a: { b: 1 } };',
    'const obj2 = { a: { c: 2 } };',
    'const mergedObject = deepMerge(obj1, obj2);',
  ],
  [
    'const sumNestedArray = (arr) => {',
    'return arr.reduce((sum, current) => {',
    'return sum + (Array.isArray(current) ? sumNestedArray(current) : current);',
    '}, 0);',
    '};',
    'const nestedArray = [1, [2, [3, 4], 5], 6];',
    'const result = sumNestedArray(nestedArray);',
  ],
  [
    'const pipe = (...funcs) => {',
    'return (arg) => funcs.reduce((piped, func) => func(piped), arg);',
    '};',
    'const subtractOne = (x) => x - 1;',
    'const square = (x) => x * x;',
    'const pipedFunction = pipe(subtractOne, square);',
    'const result = pipedFunction(5);',
  ],
  [
    'const asyncSum = async (a, b) => {',
    'return new Promise((resolve) => {',
    'setTimeout(() => resolve(a + b), 1000);',
    '});',
    '};',
    'const result = await asyncSum(3, 4);',
  ],
  [
    'const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));',
    'const result = gcd(48, 18);',
  ],
  [
    'const powerSet = (arr) => {',
    'return arr.reduce((subsets, value) => {',
    'return subsets.concat(subsets.map((subset) => [value, ...subset]));',
    '}, [[]]);',
    '};',
    'const result = powerSet([1, 2, 3]);',
  ],
  [
    'const memoizedFactorial = (() => {',
    'const memo = new Map();',
    'return (n) => {',
    'if (n === 0 || n === 1) return 1;',
    'if (!memo.has(n)) {',
    'memo.set(n, n * memoizedFactorial(n - 1));',
    '}',
    'return memo.get(n);',
    '};',
    '})();',
    'const result = memoizedFactorial(5);',
  ],
  [
    'const mergeSort = (arr) => {',
    'if (arr.length <= 1) return arr;',
    'const middle = Math.floor(arr.length / 2);',
    'const left = arr.slice(0, middle);',
    'const right = arr.slice(middle);',
    'return merge(mergeSort(left), mergeSort(right));',
    '};',
    'const merge = (left, right) => {',
    'let result = [];',
    'let leftIndex = 0;',
    'let rightIndex = 0;',
    'while (leftIndex < left.length && rightIndex < right.length) {',
    'if (left[leftIndex] < right[rightIndex]) {',
    'result.push(left[leftIndex]);',
    'leftIndex++;',
    '} else {',
    'result.push(right[rightIndex]);',
    'rightIndex++;',
    '}',
    '}',
    'return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));',
    '};',
    'const result = mergeSort([5, 2, 9, 1, 5, 6]);',
  ],
  [
    'const rotateMatrix = (matrix) => {',
    'const n = matrix.length;',
    'for (let layer = 0; layer < Math.floor(n / 2); layer++) {',
    'const first = layer;',
    'const last = n - 1 - layer;',
    'for (let i = first; i < last; i++) {',
    'const offset = i - first;',
    'const top = matrix[first][i];',
    'matrix[first][i] = matrix[last - offset][first];',
    'matrix[last - offset][first] = matrix[last][last - offset];',
    'matrix[last][last - offset] = matrix[i][last];',
    'matrix[i][last] = top;',
    '}',
    '}',
    'return matrix;',
    '};',
    'const result = rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);',
  ],
  [
    'const findLongestSubstring = (str) => {',
    'let longestSubstring = "";',
    'let currentSubstring = "";',
    'for (let char of str) {',
    'if (currentSubstring.includes(char)) {',
    'currentSubstring = currentSubstring.slice(currentSubstring.indexOf(char) + 1);',
    '}',
    'currentSubstring += char;',
    'if (currentSubstring.length > longestSubstring.length) {',
    'longestSubstring = currentSubstring;',
    '}',
    '}',
    'return longestSubstring;',
    '};',
    'const result = findLongestSubstring("abcabcbb");',
  ],
  [
    'class EventEmitter {',
    'constructor() {',
    'this.events = new Map();',
    '}',
    'on(eventName, listener) {',
    'if (!this.events.has(eventName)) {',
    'this.events.set(eventName, []);',
    '}',
    'this.events.get(eventName).push(listener);',
    '}',
    'emit(eventName, ...args) {',
    'if (this.events.has(eventName)) {',
    'this.events.get(eventName).forEach(listener => listener(...args));',
    '}',
    '}',
    '}',
    'const emitter = new EventEmitter();',
    'emitter.on("event", (data) => console.log("Event emitted:", data));',
    'emitter.emit("event", { message: "Hello, Event!" });',
  ],
];
