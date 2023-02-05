//Counting dashboard elements
const CreditAmnt = document.getElementById('creditamt');
const MonthCnt = document.getElementById('monthcnt');
const PerCntYear = document.getElementById('percent');
const Submitbutton = document.getElementById('submit');
//Result dashboard elements
const MonthlyPayment = document.getElementById('monthly-payment');
const TotalPayment = document.getElementById('total-payment');
const ExtraPayment = document.getElementById('extra-payment');

//Calculation algoritm of montthly loan payment
function creditPayment(){
    const CreditAmount = +CreditAmnt.value;
    const MonthCount = +MonthCnt.value;
    const PercentYearlyevaluation = +PerCntYear.value
    const PercentMonethly = PercentYearlyevaluation/1200;
    const MonthlyPaymentAmount = CreditAmount*PercentMonethly/(1-((1+PercentMonethly)**-MonthCount));

    if (CreditAmount === 0){
        MonthlyPayment.innerHTML= 0;
        TotalPayment.innerHTML = 0;
        ExtraPayment.innerHTML = 0;
    }
    else{

    MonthlyPayment.innerHTML = MonthlyPaymentAmount.toFixed(2) +' USD';
    TotalPayment.innerHTML = (MonthlyPaymentAmount*MonthCount).toFixed(2)+' USD';
    ExtraPayment.innerHTML = (MonthlyPaymentAmount*MonthCount-CreditAmount).toFixed(2)+' USD';
    }
}
Submitbutton.addEventListener('click', creditPayment);

