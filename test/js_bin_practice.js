function pattern(n){
let str = '';
  for(let i = 1; i <= n; i = i + 2){
      str += ' '.repeat((n - i)/2) + '*'.repeat(i) + ' '.repeat((n -i)/2);
    str = (i === n) ? str: str + '\n';
  }
return str;
}
console.log(pattern(7));