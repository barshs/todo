
const add=document.getElementById("add");
newlist();
add.addEventListener("click",()=>
{addlist();});
function addlist()
{
    const text=document.getElementById("title").value;
    const doc=document .getElementById("des").value;
   const item= localStorage.getItem("item");
    if(localStorage.getItem("item")==null)
    {
itemobj=   [];
itemobj.push([text,doc]);
localStorage.setItem("item",JSON.stringify(itemobj)); }
    else{
        itemobj=JSON.parse(item);
    itemobj.push([text,doc]);
    localStorage.setItem("item",JSON.stringify(itemobj));
    
    newlist();
}
}

function newlist()
{
    const text=document.getElementById("title").value;
    const doc=document .getElementById("des").value;
   const item= localStorage.getItem("item");
    if(localStorage.getItem("item")==null)
    {
 itemobj=   [];
 itemobj.push([text,doc]);
 localStorage.setItem("item",JSON.stringify(itemobj)); }
    else{
        itemobj=JSON.parse(item);
    }
    let html=""
    itemobj.forEach((element,index) => {
     
 
        html+=`
       
        <div class="list"id="no">${index+1}
               
                
            </div>
            <div class="list"id="title2">${element[0]}
                
            </div>
            <div class="list"id="Description">${element[1]}
                
                
            </div>
            
           
            <button  class="delete"id="${index}"onclick="cut(this.id)"><i class="fas fa-trash-alt"></i></button>
        </div>
       
    
        `
    });

    const listcopy=document.getElementById("listcopy");
 if(itemobj.length!=0)
 {listcopy.innerHTML=html;}
 else{
    listcopy.innerHTML=`<div class="list"id="no"> -
               
                
    </div>
    <div class="list"id="title2">-
        
    </div>
    <div class="list"id="Description">-
        
        
    </div>

    <div  class="noinput">No Input</div>
 </div>`
 }
 
}



function cut(index)
{
    console.log(index);
    const item= localStorage.getItem("item");
    if(localStorage.getItem("item")==null)
    {
itemobj=   [];
itemobj.push([text,doc]);
localStorage.setItem("item",JSON.stringify(itemobj)); }
    else{
        itemobj=JSON.parse(item);
    }
    itemobj.splice(index,1);
    localStorage.setItem("item",JSON.stringify(itemobj)); 
    newlist();

}

function strike(index)
{
    
    const item= localStorage.getItem("item");
    if(localStorage.getItem("item")==null)
    {
itemobj=   [];
itemobj.push([text,doc]);
localStorage.setItem("item",JSON.stringify(itemobj)); }
    else{
        itemobj=JSON.parse(item);
    }
  itemobj.index.style.textDecoration="linethrough";

    localStorage.setItem("item",JSON.stringify(itemobj)); 
    newlist();

}


