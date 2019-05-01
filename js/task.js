'use strict'

let money = prompt('Ваш бюджет на месяц?', ""),
    time = prompt('Введите дату в формате YYYY-MM-DD', "");


let appData = {
    budget: money,
    expenses: {},
    OptionalExpenses: {},
    income: [],
    TimeData: time,
    saving: false
}

let rashInMonth = prompt("Введите обязательную статью расходов в этом месяце","");
let rashInDay = prompt("Во сколько это обойдется?","");
let rashInMonth2 = prompt("Введите обязательную статью расходов в этом месяце","");
let rashInDay2 = prompt("Во сколько это обойдется?","");

appData.expenses.rashInMonth = rashInDay;
appData.expenses.rashInMonth2 = rashInDay2;

alert(appData.budget/30);