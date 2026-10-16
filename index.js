let addplayerButton=document.querySelector(".addplayer-button");
let count=0;
let countplayerSpan=document.querySelector('.countplayer-span');
let container1=document.querySelector('.container1');
let continueButton=document.querySelector('.continue-button');
let chooseblyerForm=document.querySelector('.chooseblyer-form');
let finalContainer=document.querySelector('.final-container');


addplayerButton.addEventListener('click',function(){
    count++;
    let addplayerDiv=document.createElement('div');
    let playerNumber=document.createElement('span');
    let inputtextPlayer=document.createElement('input');
    let deleteplayerButton =document.createElement('button');

    inputtextPlayer.type='text';

    playerNumber.textContent=count;
    addplayerDiv.appendChild(playerNumber);

    inputtextPlayer.classList.add('inputtext-player');
    inputtextPlayer.required=true;
    inputtextPlayer.maxLength=10;
    addplayerDiv.appendChild(inputtextPlayer);

    deleteplayerButton.textContent='🗑️';
    deleteplayerButton.classList.add('deleteplayer-button');
    deleteplayerButton.addEventListener('click',function(){
     addplayerDiv.remove();
     count--;
     countplayerSpan.textContent=count;
    });

    addplayerDiv.appendChild(deleteplayerButton);
    addplayerDiv.classList.add('addplayer-div');
    document.querySelector('main').appendChild(addplayerDiv);
    
    countplayerSpan.textContent=count;
});


let playersInput=[];
let players=[];
let randomPlayerIndex;
let offobjectPlayer;
let animalsArray;
let randomAnimalIndex;
let finalAnimal;


chooseblyerForm.addEventListener('submit',function(e){
    e.preventDefault();
    if(count<3){
        return;
    }
    container1.classList.add('hidden');
  players=[];
    playersInput=document.querySelectorAll('.addplayer-div input');
    playersInput.forEach(player=>{
        players.push({
        name:player.value.trim(),
        status:true
    });
});

randomPlayerIndex=Math.floor(Math.random()*players.length);
offobjectPlayer=players[randomPlayerIndex];
offobjectPlayer.status=false;
 

animalsArray=[
    'سيارة','عامود كهرباء','كيبورد','ساعة','تفاحة',
    'كمبيوتر','بحر','طائرة','كرسي',
    'قلم','مفتاح','ثلاجة','جبل','كتاب',
    'هاتف','نافذة','مصباح','حذاء','كرة',
    'باب','قمر','شجرة','سفينة','نظارة','حقيبة',
    'مرآة','مروحة','تلفاز','سماعة','درج','مصعد',
    'جسر','قطار','دراجة','مظلة','كاميرا','وسادة',
    'بطارية','ساعة رملية','شمعة','ملعقة','شوكة',
    'صحن','كوب','زجاجة','خريطة','مقص','مطرقة',
    'مغناطيس','روبوت','فيل','زرافة','ذئب','ثعلب',
    'دب','أرنب','سلحفاة','تمساح','كنغر','غزال'
];


randomAnimalIndex=Math.floor(Math.random()*(animalsArray.length));
finalAnimal=animalsArray[randomAnimalIndex];
startphase2();
});

//container 2
let i=0;
function startphase2(){        
        function startcontainer2(){
            if(i==players.length){
                finalContainer.classList.remove('hidden');
                return;
            }
            let container2=document.createElement("div");
            let container2H1=document.createElement("h1");
            let container2Span=document.createElement('span');
            let container2Button=document.createElement('button');
            
            container2Span.textContent=players[i].name;
            container2H1.textContent='اعطو الجوال ل ';
            container2H1.appendChild(container2Span);
            container2.appendChild(container2H1);
            
            
            container2Button.textContent='التالي';
            container2Button.classList.add('keepgo-button');
            container2.appendChild(container2Button);
            
            
            container2.classList.add('container2');
            document.body.appendChild(container2);
            
            
            container2Button.addEventListener('click',function(){
                container2.remove();
                startcontainer3();
            });
        }
        
        function startcontainer3(){
            let container3=document.createElement("div");
            let container3H1=document.createElement("h1");
            let container3Span=document.createElement('span');
            let container3Span2=document.createElement('span');
            let container3p=document.createElement('p');
            let container3Span3=document.createElement('span');
            let container3Button=document.createElement('button');
            
            container3Span.textContent=` ${players[i].name} انت `;
            container3Span.classList.add('name-span');
            container3H1.appendChild(container3Span);
            
            if(players[i].status==true){
                container3Span2.textContent='جوا السالفة';
            }
            else{
                container3Span2.textContent='برا السالفة';
            }
            container3Span2.classList.add('choise-span');
            container3H1.appendChild(container3Span2);
            
            container3.appendChild(container3H1);
            
            //*********** */
            if(players[i].status==true){

                container3Span3.textContent=finalAnimal;
                container3Span3.classList.add('animal-name');
                container3p.textContent='الموضوع هو';
                container3p.appendChild(container3Span3);
                container3.appendChild(container3p);
            }
            //************** */
            container3Button.textContent='التالي';
            container3Button.classList.add('keepgo-button2');
            container3.appendChild(container3Button);
            
            container3.classList.add('container3');
            document.body.appendChild(container3);
            
            container3Button.addEventListener('click',function(){
                i++;
                container3.remove();
                startcontainer2();
            });
        }
        startcontainer2();
    }
  
    
    
    
    
    
















