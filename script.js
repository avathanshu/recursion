// function fibs(n) {
//     for (let i = 0; i < 2; i++) {
//         array.push(array.length)
//     }
//   for (let i = 0; i < n-2; i++) {
//     array.push(array[array.length-1] + array[array.length-2]);
//   }
//   return array
// }

// function fibsRec(n, array) {
//   if (n === array.length) {
//     return array
//   } else {
//    array.push(array[array.length -1] + array[array.length - 2]) 
//    fibsRec(n, array)
//   }
//   return array
// }

function mergeSort(array) {
    if (array.length == 1) {
      return array
    }

    if (array.length == 2) {
      if (array[array.length -1 ] > array[array.length - 2]) {
        return array.reverse()
      } else {
        return array
      }
    }

    if (array.length == 3) {
      if (array[array.length-1] > array[array.length - 2]) {
        let smaller = array.pop()
        let larger = array.pop()
        array.push(smaller)
        array.push(larger)
        return array.reverse()
      }
    }

    let split_at = null
    if (array.length % 2 == 0) {
      split_at = (array.length/2)
    }
    else {
      split_at = (array.length)/2 + 0.5
    }

    let right_half = array.slice(split_at)
    let left_half = array.toSpliced(split_at, array.length - 1)

    let sorted_left = mergeSort(left_half)
    let sorted_right = mergeSort(right_half)
    sorted_left = sorted_left.concat(sorted_right)
    return sorted_left
}

console.log(mergeSort([3,1,2,6,4,5]))