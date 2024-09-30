//Задание 1: Использование условных конструкций if-else

let age = 25;
if (age<18) {
    console.log("Вы слишком молоды."); 
} else if (age>65){
    console.log("Вам пора на пенсию."); 
}else {
    console.log("Добро пожаловать!"); 
}
//Задание 2: Реализация условий с помощью конструкции switch

let day = 3;
switch (day) {
    case 1:
        console.log("Понедельник");
         break;
    case 2:
        console.log("Вторник");
        break;
    case 3:
        console.log("Среда");
        break;
    case 4:
        console.log("Четверг");
        break;
    case 5:
        console.log("Пятница");
        break;
    case 6:
        console.log("Суббота");
        break;        
    case 7:
        console.log("Воскресенье");
        break;         
    default:
        console.log("Некорректный день");
}
//Задание 3: Подсчет суммы всех четных чисел от 0 до n

let n = 10; 
let sum = 0;
for (let i = 0; i <= n; i++) {
    if (i % 2===0) {
        sum+=i;
    }
}
console.log(`Сумма всех четных чисел от 0 до ${n} равна ${sum}`);

//Задание 4: Подсчет количества совпадений подстроки
    
let str = "Hello, how are you? Hello again!";
let subStr = "Hello";
let count = 0;
let index = 0;
while ((index = str.indexOf(subStr,index)) !== -1) {
    count++;
    index += subStr.length;
}
console.log(`Количество вхождений подстроки "${subStr}" в строке: ${count}`);

//Задание 5: Применение циклов и условных конструкций совместно

let n = 100;
for (let i = 1; i <= n; i++) {
   if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");    
   } else if (i % 3 === 0) {
    console.log("Fizz");
   } else if (i % 5 === 0) {
    console.log("Buzz");
   } else {
    console.log(i);
   }       
}
//Задание 6: Реализация условий с использованием if-else и switch

let season = 'autumn'
switch (season) {
    case 'summer':
        console.log("Сейчас лето");
         break;
    case 'autumn':
        console.log("Сейчас осень");
        break;
    case 'winter':
        console.log("Сейчас зима");
        break;
    case 'spring':
        console.log("Сейчас весна");
        break; 
    default:
        console.log("Некорректное времягода");
}


let season = 'winter'; 
   if (season == 'summer') {
    console.log("Сейчас лето");    
   } else if (season == 'autumn') {
    console.log("Сейчас осень");
   } else if (season == 'winter') {
    console.log("Сейчас зима");
    } else if (season == 'spring') {
    console.log("Сейчас весна");
   } else {
    console.log("Некорректное время года");
   }       

//Задание 7: Создание цикла с выходом по условию

let number = 0;
while (number < 10) {
    number = prompt ("Введите число");
        }
console.log("Число больше 10 введено!");

//Задание 8: Применение цикла do-while

let number = 0;
do {
    number = prompt ("Введите число");
} while (number < 10);
console.log("Число больше 10 введено!");