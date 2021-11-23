
/*
Размер ежемесячного платежа = sumK* kAut, 
где
kAut = (mRate+(mRate/(1+mRate)*term-1));
kAut -  коэффициента аннуитета
sumK — сумма займа;
rate - ставка по кредиту;
mRate — ставка процента за один месяц;
term — срок кредитования.
mSum - ежемес. платеж
overpay = сумма переплаты за весь период
All = итоговая сумма выплат
*/

let sumK = 5000;
let rate = 12;
let term = 36;
let mRate = rate / 12 / 100;
let mSum;
let overpay;
let kAut;
let All;

kAut = mRate + (mRate/((Math.pow(1 + mRate, term)) -1));
mSum = to2(sumK * kAut);
console.log(mSum);
All = mSum * term;
overpay = to2((mSum * term) - sumK);
console.log(` ежемес.платеж: ${mSum}; Переплата: ${overpay}; Всего к оплате по кредиту: ${All} `);

for (let month = 1; month <= term; month++) {
    if (month == term) {
        mSum = sumK;
    }
    
    let bodyCredit = to2(mSum - (sumK * mRate));
    let ProcentS = to2(sumK * mRate);
    sumK = to2(sumK - bodyCredit);

console.log(` Month: ${month}; Остаток по телу кредита: ${sumK}, Тело кредита: ${bodyCredit}, Выпалата процентов: ${ProcentS}, Ежемес.платеж: ${mSum}`);
    
}


function to2(num) {
    return Math.floor(num * 100) / 100;
}

