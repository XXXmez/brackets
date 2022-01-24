module.exports = function check(str, bracketsConfig) {
  let s = '';
  bracketsConfig.forEach(e => {
    e.forEach(e => s += e)
  })

  let os = [];

  str.split('').forEach(e => {
    //console.log(s.indexOf(e));
    if (typeof e == Number || e == '|' || e == '|') {
      //console.log(e);
    } else if (s.indexOf(e) >= 0){
      if (s.indexOf(e) % 2 == 1) {
        if (s.length > 0) {
          let last = os.splice(os.length - 1, 1).join('');
          //console.log(last, s[s.indexOf(e) - 1]);
          if (last != s[s.indexOf(e) - 1]){
            return false;
          }
        } else {
          return false;
        }
      } else {
        os.push(e)
      }
    }
  })
  //console.log(os);
  return os.length> 0 ? false : true;
}
