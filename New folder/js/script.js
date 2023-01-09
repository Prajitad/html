class stack
{
    constructor(size){
this.size=size;
this.item=[];
this.top=0;
this.stackUi=document.getElementById("stack");
    }
    
    push(item){
if (this.top>=this.size){
    console.log("overflow");
    return;
}


this.item[this.top]= item;
this.pushThat(this.top);
this.top+=1;
  }
   
  pop(){
    if (this.top === 0){
        console.log("underflow"); 
        return;
  }

//js pop
this.item.pop()
this.top-=1;
this.popthat(this.top);
  }

  pushThat(id){
    this.stackUi.appendChild(this.builtItem(id));
  }

    popThat(id){
        const item=document.getElementById(this.getIteId(id));
        this.removeItem(item);

 }

 removeItem(item){
    this.stack.removeChlild(item);
 }
//<div class="item" id ="item-1"></div>
 builditem(id)
    {

        const item =document.createElement("div");
        item.setAttribute("class","item");
        item.setAttribute("id",this.getItemId(id));
        return item;
    }

    getItemId(id)
    {
        return "item-" + id;
    }
}
const stack= new stack(5);

function pushIntoStack()  {
    stack.push();
}

function removeIntoStack() {
    stack.pop();
}