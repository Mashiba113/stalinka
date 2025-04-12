document.getElementById("menu-toggle").addEventListener("click", function(){
    let menu = document.getElementById("dropdown-content");
    if(menu.classList.contains("active1")){
        menu.classList.remove("active1");
        menu.classList.add("hidden1");

        setTimeout(() => {
            menu.style.display = "none";
        }, 1000);

    }else{
        menu.style.display = "block";
        menu.classList.remove("hidden1");
        menu.classList.add("active1");

    }



});




// --------------------------------------------ТЕСТ-----------------------------------------

function start(){
    document.getElementById("start").style.display = "none";
    document.getElementById("infoQuestion").style.display = "block";
    

}      








let counter = 0;
    
function quest1() {
    
    let selected = document.querySelector('input[value="C"]:checked'); 
    
    if (selected) { 
        counter++;
    }
    
        document.getElementById("test-container1").style.display = "none";
        
        document.getElementById("test-container2").style.display = "block";
    }

function quest2() {
    
        let selected = document.querySelector('input[value="D"]:checked'); 
        
        if (selected) { 
            counter++;
        }
        
            document.getElementById("test-container2").style.display = "none";
            
            document.getElementById("test-container3").style.display = "block";
        }

function quest3() {
    
    let selected = document.querySelector('input[value="B"]:checked'); 
            
        if (selected) { 
            counter++;
        }
            
            document.getElementById("test-container3").style.display = "none";
                
            document.getElementById("test-container4").style.display = "block";
}

function quest4() {
    
    let selected = document.querySelector('input[value="C"]:checked'); 
            
    if (selected) { 
                counter++;
    }
            
    document.getElementById("test-container4").style.display = "none";
                
    document.getElementById("test-container5").style.display = "block";
}

function quest5() {
    
let selected = document.querySelector('input[value="D"]:checked'); 
                
    if (selected) { 
        counter++;
    }
                
    document.getElementById("test-container5").style.display = "none";
                    
    document.getElementById("test-container6").style.display = "block";
}  
                
                
function quest6() {
    
    let selected = document.querySelector('input[value="C"]:checked'); 
                    
    if (selected) { 
        counter++;
    }
                    
    document.getElementById("test-container6").style.display = "none";
                        
    document.getElementById("test-container7").style.display = "block";
}

function quest7() {
    
    let selected = document.querySelector('input[value="B"]:checked'); 
                        
    if (selected) { 
       counter++;
    }
                        
    document.getElementById("test-container7").style.display = "none";
                            
    document.getElementById("test-container8").style.display = "block";
} 
    
function quest8() {
    
    let selected = document.querySelector('input[value="C"]:checked'); 
                            
    if (selected) { 
        counter++;
    }
                            
    document.getElementById("test-container8").style.display = "none";
                                
    document.getElementById("test-container9").style.display = "block";
}  
                            
function quest9 () {
    
    let selected = document.querySelector('input[value="D"]:checked'); 
                                
    if (selected) { 
        counter++;
    }
                                
    document.getElementById("test-container9").style.display = "none";
                                    
    document.getElementById("test-container10").style.display = "block";
}



function quest10() {
    
    let selected = document.querySelector('input[value="D"]:checked'); 
                                    
    if (selected) { 
        counter++;
    }

    
    document.getElementById("infoQuestion").style.display = "none";
    
    if(counter == 0){
    document.getElementById("result").style.display = "block";
    document.getElementById("textRes").style.display = "block";
    document.getElementById("result").innerHTML =`${counter} из 10`;
    document.getElementById("textRes").innerHTML = `К сожалению вы  ответили на 0 из 10 вопросов, 
                                                    советуем вам посмотреть вступительный ролик и 
                                                    прочитать страницы сайта для ответа на тест.`;
    }
    
    if(counter > 0 && counter <= 4){
        document.getElementById("result").style.display = "block";
        document.getElementById("textRes").style.display = "block";
        document.getElementById("result").innerHTML =`${counter} из 10`;
        document.getElementById("textRes").innerHTML =`Вы показали средний результат, 
                                                     но к сведению: Танки, которые продолжали строить 
                                                     в Сталинграде, укомплектовывались добровольными 
                                                     экипажами, состоявших из работников заводов, 
                                                     в том числе, женщин. Техника сразу же отправлялась 
                                                     с конвейеров заводов на линию фронта, часто даже 
                                                     без покраски и без установленного прицельного оборудования.`;
    }
    
    if(counter > 4 && counter <= 8){
        document.getElementById("result").style.display = "block";
        document.getElementById("textRes").style.display = "block";
        document.getElementById("result").innerHTML =`${counter} из 10`;
        document.getElementById("textRes").innerHTML =`Вы знаете тему на 50% , хотели бы поделиться с вами фактом:
                                                                Во время уличных боев советское командование 
                                                                использовало новую тактику — постоянно держать 
                                                                фронтовые линии настолько близко к противнику, 
                                                                насколько это физически возможно (как правило не более 30 метров). 
                                                                Таким образом, немецкой пехоте приходилось сражаться, 
                                                                полагаясь на себя самих, без поддержки артиллерии и авиации.`;
    }


    if(counter > 8 && counter <= 10){
        document.getElementById("result").style.display = "block";
        document.getElementById("textRes").style.display = "block";
        document.getElementById("result").innerHTML =`${counter} из 10`;
        document.getElementById("textRes").innerHTML =`Вы уже достаточно узнали из нашего сайта о Сталинградской 
                                                                битве, не отчаивайтесь! Вот вам интересный факт:
                                                                Сражения за завод Красный Октябрь, тракторный завод и артиллерийский 
                                                                завод «Баррикады» стали известны на весь мир. Пока советские солдаты 
                                                                продолжали защищать свои позиции, ведя огонь по немцам, рабочие заводов 
                                                                и фабрик ремонтировали повреждённые советские танки и оружие в непосредственной 
                                                                близости от поля боя, а иногда и на самом поле боя.`;
}                               

    if(counter == 10){
        document.getElementById("result").style.display = "block";
        document.getElementById("textRes").style.display = "block";
        document.getElementById("result").innerHTML =`${counter} из 10`;
        document.getElementById("textRes").innerHTML =` Поздравляем! Вы отлично знаете историю Сталинградской битвы. 
                                                                Чтите память наших предков, сражавшихся за Родину и наше будущее`;
    }


}





let timerId;


document.getElementById("go").addEventListener("click", function() {
   
   
    timerId = setTimeout(()=>{
    document.getElementById("infoQuestion").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = `Время вышло. По итогам теста правильных ответов ${counter} из 10 вопросов`;
}, 600000)

});
    

document.getElementById("then10").addEventListener("click", function() {
        clearTimeout(timerId);
 });

