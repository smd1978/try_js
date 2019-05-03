'use strict';
//Объявляем переменные
let money, time; //Глобальные

//ф-я запрашивает бюджет на месяц
function start(){
    money = +prompt('Ваш бюджет на месяц?', '');
    //time = prompt('Введите дату в формате YYYY-MM-DD', '');

        //проверяем введены ли цифры
    while(isNaN(money) || money == "" || money == null){
        money = +prompt('Ваш бюджет на месяц?', "");
    }
}
start();
let appData = {
    budget: money,
    expenses: {},   //Расходы
    OptionalExpenses: {},   
    income: [],
    TimeData: time,
    saving: true
}
//выбираем статью расходов
/* function chooseExpenses(){
    for (let i = 0; i < 2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце",""),
            b = prompt("Во сколько это обойдется?","");
    
        if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) !=null && a !='' && b !='' && a.length < 50){
            console.log('done');
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    }
}
chooseExpenses(); */
// Определяем дневной бюджет
function detectDayBudget(){
    appData.moneyPerDay = (appData.budget/30).toFixed();
    alert('Ежедневный бюджет: '+ appData.moneyPerDay);
}
function detectLevel(){
    if (appData.moneyPerDay <100){
        console.log('Минимальный уровень достатка')
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log('средний уровень достатка')
    } else if (appData.moneyPerDay > 2000){
        console.log('Высокий уровень достатка')
    }
}
detectDayBudget();
detectLevel();
function checkSaving(){
    if(appData.saving == true){
        let save = +prompt('Какова сумма накоплений?'),
        percent = +prompt('под какой процент?');

        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с Вашего депозита: ' + appData.monthIncome);
    }
}
checkSaving();
function chooseOptExpenses(){
    let i = 0;
    while(i < 3){
        chooseOptExpenses = prompt('Статья необязательных расходов');
        i++;
    }
}
chooseOptExpenses();