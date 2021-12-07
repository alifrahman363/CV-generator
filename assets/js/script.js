function addNewWEField() {
   //console.log("Adding new field") ;

   let newNode=document.createElement('textarea')  ;
   newNode.classList.add('form-control') ;
   newNode.classList.add('weField') ; 
   newNode.classList.add('mt-2') ;
   newNode.setAttribute("rows",3) ; 
   newNode.setAttribute('placeholder', "enter here")

   let weOb=document.getElementById("we") ; 
   let weAddButtonOb=document.getElementById("weAddButton") ;
   weOb.insertBefore(newNode, weAddButtonOb) ;   
}

function addNewAQField(){
   let newNode=document.createElement('textarea')  ;
   newNode.classList.add('form-control') ;
   newNode.classList.add('aqField') ; 
   newNode.classList.add('mt-2') ;
   newNode.setAttribute("rows",3) ; 
   newNode.setAttribute('placeholder', "enter here")

   let aqOb=document.getElementById("aq") ; 
   let aqAddButtonOb=document.getElementById("aqAddButton") ;
   aqOb.insertBefore(newNode, aqAddButtonOb) ;
}

function addNewBCSField() {
    //console.log("Adding new field") ;
    let newNode=document.createElement('textarea')  ;
    newNode.classList.add('form-control') ;
    newNode.classList.add('bcsField') ; 
    newNode.classList.add('mt-2') ;
    newNode.setAttribute("rows",3) ; 
    newNode.setAttribute('placeholder', "enter here")
 
    let bcsOb=document.getElementById("bcs") ; 
    let bcsAddButtonOb=document.getElementById("bcsAddButton") ;
    bcsOb.insertBefore(newNode, bcsAddButtonOb) ;   
 }

  function addNewPDField() {
    //console.log("Adding new field") ;
    let newNode=document.createElement('textarea')  ;
    newNode.classList.add('form-control') ;
    newNode.classList.add('pdField') ; 
    newNode.classList.add('mt-2') ;
    newNode.setAttribute("rows",3) ; 
    newNode.setAttribute('placeholder', "enter here")
 
    let pdOb=document.getElementById("pd") ; 
    let pdAddButtonOb=document.getElementById("pdAddButton") ;
    pdOb.insertBefore(newNode, pdAddButtonOb) ;   
 }

function addNewTSField() {
    //console.log("Adding new field") ;
    let newNode=document.createElement('textarea')  ;
    newNode.classList.add('form-control') ;
    newNode.classList.add('tsField') ; 
    newNode.classList.add('mt-2') ;
    newNode.setAttribute("rows",3) ; 
    newNode.setAttribute('placeholder', "enter here")
 
    let tsOb=document.getElementById("ts") ; 
    let tsAddButtonOb=document.getElementById("tsAddButton") ;
    tsOb.insertBefore(newNode, tsAddButtonOb) ;   
 }

 function addNewWSField() {
    //console.log("Adding new field") ;
    let newNode=document.createElement('textarea')  ;
    newNode.classList.add('form-control') ;
    newNode.classList.add('wsField') ; 
    newNode.classList.add('mt-2') ;
    newNode.setAttribute("rows",3) ; 
    newNode.setAttribute('placeholder', "enter here")
 
    let wsOb=document.getElementById("ws") ; 
    let wsAddButtonOb=document.getElementById("wsAddButton") ;
    wsOb.insertBefore(newNode, wsAddButtonOb) ;   
 }

 function addNewLPField() {
    //console.log("Adding new field") ;
    let newNode=document.createElement('textarea')  ;
    newNode.classList.add('form-control') ;
    newNode.classList.add('lpField') ; 
    newNode.classList.add('mt-2') ;
    newNode.setAttribute("rows",3) ; 
    newNode.setAttribute('placeholder', "enter here")
 
    let lpOb=document.getElementById("lp") ; 
    let lpAddButtonOb=document.getElementById("lpAddButton") ;
    lpOb.insertBefore(newNode, lpAddButtonOb) ;   
 }



//generating CV 
function generateCV(){
    let nameField= document.getElementById("nameField").value;
    let t1Name = document.getElementById("t1Name") ;
    t1Name.innerHTML= nameField ; 

//contacts 
    document.getElementById("tContact").innerHTML = document.getElementById("contactField").value ;
//address 
    document.getElementById("tAddress").innerHTML = document.getElementById("addressField").value ; 
//links
    document.getElementById("tFB").innerHTML = document.getElementById("fbField").value ; 
    document.getElementById("tInsta").innerHTML = document.getElementById("instaField").value ;   
//Objective
    document.getElementById("tObjective").innerHTML = document.getElementById("objectiveField").value ;

 //Work Experience
    let wes=document.getElementsByClassName("weField") ; 
    let str= ""; 
    for(let e of wes){
        str = str + ` <li> ${e.value} </li> ` ;
    }
    document.getElementById("tWe").innerHTML = str ; 

    
 //Basic Computer Skill
    let bcs=document.getElementsByClassName("bcsField") ; 
    let str2= ""; 
    for(let e of bcs){
        str2 = str2 + ` <li> ${e.value} </li> ` ;
    }
    document.getElementById("tBcs").innerHTML = str2 ; 

   
//Professional Development
    let pds=document.getElementsByClassName("pdField") ; 
    let str3= ""; 
    for(let e of pds){
        str3 = str3 + ` <li> ${e.value} </li> ` ;
    }
    document.getElementById("tPd").innerHTML = str3 ; 

//Technical Skills
    let tss=document.getElementsByClassName("tsField") ; 
    let str4= ""; 
    for(let e of tss){
        str4 = str4 + ` <li> ${e.value} </li> ` ;
    }
    document.getElementById("tTs").innerHTML = str4 ; 

//Works
    let ws=document.getElementsByClassName("wsField") ; 
    let str5= ""; 
    for(let e of ws){
        str5 = str5 + ` <li> ${e.value} </li> ` ;
    }
    document.getElementById("tWs").innerHTML = str5 ; 

//Language Proficiency
    let lp=document.getElementsByClassName("lpField") ; 
    let str6= ""; 
    for(let e of lp){
        str6 = str6 + ` <li> ${e.value} </li> ` ;
    }
    document.getElementById("tLp").innerHTML = str6 ; 


//reference one 
    document.getElementById("tRef1").innerHTML = document.getElementById("ref1Field").value ;

//reference two 
    document.getElementById("tRef2").innerHTML = document.getElementById("ref2Field").value ;

//Personal Information 
    document.getElementById("tFatherField").innerHTML = document.getElementById("fatherField").value ;
    document.getElementById("tMotherField").innerHTML = document.getElementById("motherField").value ;
    document.getElementById("tPAddressField").innerHTML = document.getElementById("pAddressField").value ;
    document.getElementById("tReligionField").innerHTML = document.getElementById("religionField").value ;
    document.getElementById("tRltnField").innerHTML = document.getElementById("rltnField").value ;
    document.getElementById("tNationField").innerHTML = document.getElementById("nationField").value ;





//Academic Qualifications
    let aqs = document.getElementsByClassName("aqField") ; 
    let str1= "";
    for(let e of aqs){
        str1 = str1 + `<li> ${e.value} </li>` ;
    }
    document.getElementById("tAq").innerHTML= str1 ; 

//code for setting image
    let file=document.getElementById("imgField").files[0] ;
    console.log(file) ;
    let reader=new FileReader() ;
    reader.readAsDataURL(file) ;
    console.log(reader.result);
//set image to template
    reader.onloadend= function(){   
      document.getElementById("tempImage").src= reader.result ;
    } ;


//hiding form 
    document.getElementById("cv-form").style.display='none' ;

//showing template
    document.getElementById("cv-template").style.display='block' ;

}

//Printing CV 
function printCV() {
    window.print() ; 
}
