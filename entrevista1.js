//console.log('a'-1)
//console.log('2'+'2'+'2')
//console.log('2'+'2'-'2')

const a = {}
const b = {
    name: 'perro'
}

const c = {
    name: 'ram'
}

a[b] = {
    name: 'ankit'
}

a[c] = {
    name: 'rahul'
}
//console.log(a[b])



const y= 0
const z= false

//console.log(y == z) 
//console.log(y === z) 

//console.log (true - false)
//console.log (true - 'abc');
//console.log (true *2);
//console.log (NaN == NaN);

//const array = [1,2,3,4,5]
//array.map((e) => {
   // console.log(e*2)
//}
//)


//const array2 = [1,2,3,4,5]
//const result2 =   array2.map((e) => { return e*2})

//console.log(result2)


//const array3 = [1,2,3,4,5]
//const result3 =   array2.map((e) => { return e>2})

//console.log(result3)


//const array4 = [1,2,100,3,4,5]

//console.log(array4)
//const arrayres = array4.unshift(5)
//const arrayres2 = array4.shift(3)
//console.log(array4);


function curry (a) {
return function(b) {
    return function(c) {
        return a + b + c
}
}
}

console.log(curry(1)(2)(3)) 