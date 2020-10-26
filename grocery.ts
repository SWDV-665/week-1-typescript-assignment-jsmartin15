class Grocery{
    item: string;

    constructor(
        public name: string,
        public price: number,
        public quantity: number
    ){
        this.item = name + ' $' + price + ' #' + quantity
    }
}

let milk = new Grocery('milk', 3.89, 30);
let bread = new Grocery('bread', 1.99, 20);
let eggs = new Grocery('eggs', 1.29, 12);

let groceries = [milk, bread, eggs];

document.body.innerHTML = 'Item\tPrice\tQuantity<br>'
function listgroceries(grocerylist : Grocery[]){
    for (let i = 0; i < grocerylist.length; i++){
        document.body.innerHTML += grocerylist[i].item + '<br>';
    }
}

listgroceries(groceries);