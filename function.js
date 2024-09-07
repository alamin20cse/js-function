
// function sums()
// {
//     var a=10;
//     var b=20;
//     var s=a+b;
//     console.log(s);
// }
// sums();


// function sum(a,b)
// {
    
//     var s=a+b;
//     console.log(s);
// }
// sum(2,3);
// sum(5,5);





// function sums()
// {
//     var a=10;
//     var b=20;
//     var s=a+b;
//    return s;
// }
// var op=sums();
// console.log(op);


// function sum(a,b)
// {
    
//     var s=a+b;
//    return s;
// }
// var op2= sum(2,3);
// console.log(op2);
// var op3= sum(5,5);
// console.log(op3);




// function number(n)
// {
   
//    return n;
// }
// var op=number([5,10,3]);
// console.log(op);



// function numbertow(inputarr)
// {
   
//     for(var i of inputarr)
//     {
//        console.log(i);

//     }
  
// }
// numbertow([5,10,3]);



// for(let i=0;i<10;i++)
// {
//     console.log(i);
//     if(i==5)
//     {
//         break;
//     }
// }


/// ince to feet

// function incetofeet(number)
// {
//     let x =parseInt(number/12);
//     let y=number%12;

//     console.log(x+" FEET " +y+" INCE");
// }

// incetofeet(62);
// incetofeet(75);







// odd avarege;


// function oddAvg(arr)
// {
//     let cnt=0,sum=0;
    
//     for(let i of arr)
//     {
//         // cnt++;
//         if(i%2===1)
//         {
//             sum=sum+i;
//             cnt++;
//         }
//     }


//     let avg=sum/cnt;
//     console.log(avg);
// }

// const numberArray=[42,13,58,65,81,96,7,105];

// oddAvg(numberArray);





// function cheakdublicate(arr)
// {
//     let arr2=[];
    
//     for(let i of arr)
//     {
//        if(!arr2.includes(i) )
//        {
//         arr2.push(i);
//        }
        
//     }
//     console.log(arr);
//     console.log(arr2);


   
// }

// const numberArray=[44,1,3,22,4,23,4,7,1];


// cheakdublicate(numberArray);
// const str=["alamin","rana","alamin","Rakib","rana"];
// cheakdublicate(str);


// const numberArray=[44,1,3,22,4,23,4,7,1];

// console.log(Math.min(...numberArray));
// console.log(Math.max(...numberArray));



// console.log(Math.floor(2.89));
// console.log(Math.ceil(2.45));
// console.log(Math.abs(-5));
// console.log(Math.round(2.44));
// console.log(Math.round(2.74));
// console.log(Math.random());
// console.log(Math.random()*10);
// console.log(Math.round(Math.random()*10));



// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//     console.log(i);
//  }, 100);
// }
// console.log(Math.ceil(-2.45));





// ================part 2=========
// const arr=[10,3,78,55,56,43,3];
// var mx=arr[0];
// for(i of arr)
// {
//     if(i>mx)
//     {
//         mx=i;
//     }

// }
// console.log(mx);




// function getcheap(phones)
// {
//     let mn=phones[0];
//     for(i of phones)
//     {
//         if(mn.price>i.price)
//         {
//             mn=i;
//         }
//     }
//     return mn;

//     // console.log(phones);
// }




// const phones=[
//     {name:'samsung',price:2000,cam:'12'},
//     {name:'xomai',price:1040,cam:'12'},
//     {name:'samsung',price:100,cam:'12'},
//     {name:'samsung',price:1800,cam:'12'},
// ];
// const restult=getcheap(phones);
// // console.log("Cheapest phone is :   "+ restult);
// console.log("Cheapest phone is :   ", restult);









// function getcheap(phones)
// {
//     let sum=0;
//     for(i of phones)
//     {
//         sum=sum+i.price
        
//     }
//     return sum;

//     // console.log(phones);
// }




// const phones=[
//     {name:'samsung',price:300,cam:'12'},
//     {name:'xomai',price:100,cam:'12'},
//     {name:'samsung',price:700,cam:'12'},
//     {name:'samsung',price:1200,cam:'12'},
// ];
// const restult=getcheap(phones);
// // console.log("Cheapest phone is :   "+ restult);
// console.log("Cheapest phone is :   ", restult);


function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}
function op(a,b,operation)
{
    if(operation==='add')
    {
       return add(a,b);
    }
    else if(operation==='sub')
    {
        return sub(a,b);
    }
}


var r1=op(10,5,"add");
console.log(r1);
var r2=op(10,5,'sub');
console.log(r2);

