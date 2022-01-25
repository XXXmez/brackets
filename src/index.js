module.exports = function check(str, bracketsConfig) {
  let parentheses = bracketsConfig.flat();
  let arrBrackets = [];

  str.split('').forEach(e => {
    let ind = parentheses.indexOf(e);
    let inPos = ind % 2;
    //console.log("ind: ", ind, "inPos: ", inPos);
    //console.log("e: ", e, "parentheses[ind]: ", parentheses[ind]);

    if (parentheses[ind] == parentheses[ind+1]) {
      //console.log("одинаковые скобки");
      if (!arrBrackets.length){
        //console.log("Пустой");
        arrBrackets.push(e);
      } else {
        // console.log('Не пустой');
        let s = arrBrackets.indexOf(e);
        if (s>=0) {
          if(arrBrackets[arrBrackets.length-1] === e){
            arrBrackets.pop()
          } else {
            arrBrackets.push(e);
          }
        } else {
          arrBrackets.push(e);
        }
      }
    } else {
      //console.log("разные скобки");
      if (inPos == 0) arrBrackets.push(e);
      if (inPos == 1) {
        //let delEl = arrBrackets.pop()
        //if(delEl != parentheses[ind-1]) console.log('Ошибка false') ;
        if (arrBrackets[arrBrackets.length-1] === parentheses[ind-1]){
          arrBrackets.pop()
        } else {
          arrBrackets.push(e);
        }
      }
    }

    //console.log("ind: ", ind, "inPos: ", inPos);
    // if (inPos == 0) arrBrackets.push(e);
    // if (inPos == 1) {
    //   let delEl = arrBrackets.pop()
    //   if(delEl != parentheses[ind-1]) console.log('Ошибка false');
    // }
  })
  
  //console.log(arrBrackets);
  //console.log(arrBrackets);
  return arrBrackets.length ? false : true;
}


// Code at 75%

// module.exports = function check(str, bracketsConfig) {
//   let s = '';
//   bracketsConfig.forEach(e => {
//     e.forEach(e => s += e)
//   })

//   let os = [];

//   str.split('').forEach(e => {
//     //console.log(s.indexOf(e));
//     if (typeof e == Number || e == '|' || e == '|') {
//       //console.log(e);
//     } else if (s.indexOf(e) >= 0){
//       if (s.indexOf(e) % 2 == 1) {
//         if (s.length > 0) {
//           let last = os.splice(os.length - 1, 1).join('');
//           //console.log(last, s[s.indexOf(e) - 1]);
//           if (last != s[s.indexOf(e) - 1]){
//             return false;
//           }
//         } else {
//           return false;
//         }
//       } else {
//         os.push(e)
//       }
//     }
//   })
//   //console.log(os);
//   return os.length> 0 ? false : true;
// }
