// falsy values are : 0, '',null,undifined ,NAN,(these values will be false when converted to booleans i.e they are not false initially but when they get converted)
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(''));
console.log(Boolean(NaN));


const money = 0;

if(money){
    console.log("don't spend it all)");  //used two brackets at the end becuse we have used ' on don't
}else{
    console.log("you should get a job !");
}

let height; //height is not assigned anything and it will be converted into undefined boolean,but if we assign anything it will be defeined

if(height){
    console.log("YAH height is Defined");
}else{
    console.log('height is undefined');
}