
// let numbers = [1,2,3,]
// let numbers2 = [1,2,3,4]
// let numbers3 = [0]

// function Array (arr1) {
//     if (arr1.length === 0)
//         return 0

//     let sum = 0

//     for (let i = 0;i < arr1.length;i++) {
//         sum += arr1[i]
//     }
//     return sum / arr1.length
// }

// console.log(Array(numbers));

// console.log(Array(numbers2));
// console.log(Array(numbers3));



//////пример типо//////

let numbers = [1,2,3,4]

function Array (arr1) {
    if (arr1.length === 0)
        return 0

    let sum = 0

    for (let i = 0;i < arr1.length;i++) {
        sum += arr1[i]
    }
    return sum / arr1.length
}
console.log(Array(numbers));



