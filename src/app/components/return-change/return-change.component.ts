import { Component, OnInit } from '@angular/core';

interface Coin {
  name:string,
  value:number,
  returned:number;
}

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

  coinMethod:string;
  amount:number;
  remainder:number;
  error:Error;
  inventory:object;
  coins:Coin[];

  constructor() {
    this.coinMethod = 'unlimitedStock';
    this.error = {
      status:false,
      message:''
    }
    this.inventory = {
      "One Pound":11,
      "Fifty Pence":24,
      "Twenty Pence":0,
      "Ten Pence":99,
      "Five Pence":200,
      "Two Pence":11,
      "One Penny":23
    };
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

  changeCoinMethod(method){
    this.coinMethod=method;
  }

  initializeCoins(){
    for(let key in this.coins){
      this.coins[key].returned = 0;
    }
  }

  getChange(amount){
    event.preventDefault();
    this.initializeCoins();
    this.amount=amount;
    this.remainder = this.amount;
    this[this.coinMethod]();
  }

  unlimitedStock(){
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
    console.log(this.coins);
  }

  limitedStock(){
    console.log('limited ran');
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
