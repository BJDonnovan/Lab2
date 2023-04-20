let form = document.forms.calc;
para = document.querySelector('p');
//time1 = document.getElementsByName("1");
//time2 = document.getElementsByName("2");
//time3 = document.getElementsByName("3");
//time4 = document.getElementsByName("4");
//time5 = document.getElementsByName("5");
//time6 = document.getElementsByName("6");
//form.type.onchange=set_time;
form.type.onchange=calculate;
form.type.onchange=calculate;
form.time.onchange=calculate;
form.money.oninput = calculate;
//function set_time (){

//if(type==="refillable")
    //{
        //time1.textContent = ""; 
        //time2.textContent = "6 месяцев";
        //time3.textContent = "";
        //time4.textContent = "1 год";
        //time5.textContent = "1,5 года";
        //time6.textContent = "2 года";
    //}
//else
    //{
        //time1.textContent = "3 месяца"; 
        //time2.textContent = "6 месяцев";
        //time3.textContent = "9 месяцев";
        //time4.textContent = "1 год";
        //time5.textContent = "1,5 года";
        //time6.textContent = "2 года";

    //}
    
//}
//set_time();

function calculate(){
    let type=form.type.value;
    let initial = form.money.value;
    let time = form.months.value; 
    let bid=1;
    if (!initial) return;
    if (!time) return;
    if(type==="refillable")
    {
        switch(time)
        {
            case 6:
            bid=0,2;
            break;

            case 12:
            bid=0,22;
            break;

            case 18:
            bid=0,15;
            break;

            case 24:
            bid=0,1;
            break;
        }

    }
    else
    {
        switch(time)
        {
            case 3:
            bid=0,2;
            break;

            case 6:
            bid=0,22;
            break;

            case 9:
            bid=0,23;
            break;

            case 12:
            bid=0,24;
            break;

            case 18:
            bid=0,18;
            break;

            case 24:
            bid=0,15;
            break;
        }
    }    
    let result = Math.round(initial * (1 + bid));
    para.textContent="Вклад "+(type)+" на срок "+(time)+" на сумму "+(initial)+
                    " руб.\nВ конце срока вы получите "+(result)+" руб."

}
calculate();