var name="Anjana"
var searchh = name.search("a")
console.log(search);

var min=5
var sec = min*60
console.log(min+" "+"minutes is equal to"+" "+sec+" "+ "seconds")


var arys=["anjana","srujana","anwi","naga lakshmi","ashok kumar"]
var ind=arys.indexOf("ashok kumar")
console.log(ind)

var arys=["anjana","srujana","anwi","naga lakshmi","ashok kumar"]
for(let i=0;i<arys.length;i++){
    if(arys[i].includes('a')){
        console.log(arys[i]);
    }
}


var arys=["anjana","srujana","anwi","naga lakshmi","ashok kumar"]
for(let i=arys.length-1;i>=0;i--){
    console.log(arys[i]);
}