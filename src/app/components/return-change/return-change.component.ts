import { Component, OnInit } from '@angular/core';

// Define coin model
interface Coin {
  name:string,
  value:number,
  returned:number;
}

// Define error model
interface Error {
  status:boolean,
  message:string
}

@Component({
  selector: 'app-return-change',
  templateUrl: './return-change.component.html',
  styleUrls: ['./return-change.component.css']
})
export class ReturnChangeComponent implements OnInit {

  // Define component model
  coinMethod:string;
  amount:number;
  remainder:number;
  error:Error;
  inventory:object;
  coins:Coin[];

  constructor() {
    // Limited coin inventory be default
    this.coinMethod = 'limitedInv';
    this.error = {
      status:false,
      message:''
    }

    // Define coin inventory
    // Could have been added to 'this.coins' object,
    // but kept sepearate to fulfill criteria.
    this.inventory = {
      "One Pound":11,
      "Fifty Pence":24,
      "Twenty Pence":0,
      "Ten Pence":99,
      "Five Pence":200,
      "Two Pence":11,
      "One Penny":23
    };

    // Define coin denomination
    this.coins = [
      {
        name:"One Pound",
        value:100,
        returned:0
      },
      {
        name:"Fifty Pence",
        value:50,
        returned:0
      },
      {
        name:"Twenty Pence",
        value:20,
        returned:0      },
      {
        name:"Ten Pence",
        value:10,
        returned:0
      },
      {
        name:"Five Pence",
        value:5,
        returned:0
      },
      {
        name:"Two Pence",
        value:2,
        returned:0
      },
      {
        name:"One Penny",
        value:1,
        returned:0
      }
    ]
  }

  
  ngOnInit() { }

  // Switch between limited and unlimited inventory
  // Resets errors and closes inventory sidebar when appropriate
  changeCoinMethod(inventoryDrawer){
    this.resetError();
    this.initializeCoins();
    if(this.coinMethod == 'unlimitedInv'){
      this.coinMethod = 'limitedInv';
    }else{
      if(inventoryDrawer.opened){
        inventoryDrawer.close();
      }
      this.coinMethod = 'unlimitedInv'
    }
  }

  // Could be its own function, but used reference to constructor instead
  // If coin method is set to unlimited, change it.
  reset(cMethod){
    this.constructor();
    if(cMethod.checked){
      cMethod.toggle();
    }
  }

  // Reset coin return values
  initializeCoins(){
    for(let key in this.coins){
      this.coins[key].returned = 0;
    }
  }

  resetError(){
    this.error.status=false;
    this.error.message='';
  }

  // Reset coins, get queried amount, call specific method
  getChange(amount){
    event.preventDefault();
    this.initializeCoins();
    this.amount=amount;
    this.remainder = this.amount;
    this[this.coinMethod]();
  }

  // Part 1 Criteria
  // Returns least number of coins from unlimited inventory
  unlimitedInv(){
    let i:number = 0;
    while(i<this.coins.length){
      this.remainder -= this.coins[i].value;
      if(this.remainder>=0){
        this.coins[i].returned++;
      }else{
        this.remainder+= this.coins[i].value;
        i++;
      }
    }
  }

  // Part 2 Criteria
  // Returns least number of coins from limited inventory
  limitedInv(){
    let i:number = 0;
    let stock:number;
    while(i<this.coins.length){
      this.remainder -= this.coins[i].value;
      stock=this.inventory[this.coins[i].name];
      if(this.remainder>=0 && stock>0){
        this.coins[i].returned++;
        this.inventory[this.coins[i].name] = --stock;
      }else{
        this.remainder+= this.coins[i].value;
        i++;
      }
    }
    if(this.remainder>0){
      this.error.status=true;
      this.error.message = 'Insufficient coins';
    }
  }
}