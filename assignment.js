// first problem solution:
function kilometerToMeter(kilometer){
if(kilometer>0){
 var meter=kilometer*1000;
 return meter;
 }
 else{
  return "Distance can't be negative or zero";
 }
 }

console.log(kilometerToMeter(55.57));

// second problem solution:

 function budgetCalculator(watch,phone,laptop){
 total=(watch*50+phone*100+laptop*500);

return total;
 }

console.log(budgetCalculator(5,6,7));


// third problem solution:

function hotelCost(day){
 var price =0;
 if(day<=10){
  price=day*100;
 }
 else if(day<=20){
  var firstPart=10*100;
  var remaining=day-10;
  var secondPart=remaining*80;
  price=firstPart+secondPart;
 }
 else{
  var firstPart = 10 * 100;
  var secondPart = 10 * 80;
  var remaining = day - 20;
  var thirdPart =remaining * 50;
  price = firstPart + secondPart + thirdPart;
 }
 return price;
}

console.log(hotelCost(23));

// forth problem solution:

function megaFriend(array)
  {
    var max_str = array[0].length;
    var ans = array[0];
    for (var i = 1; i < array.length; i++) {
        var maximum = array[i].length;
        if (maximum > max_str) {
            ans = array[i];
            max_str = maximum;
        }
    }
    return ans;
}
console.log(megaFriend(["Afsarul Taher", "Shuvam Mazumder", "Shariful islam"]));