

export function isBinary(str: string) {
  if (str.length === 0){
    return !!true;
  }
  return !!((str.length) === (str.match(new RegExp(/0|1/g))?.length));
}

export function binToDec(str: string) {
  const dec:number = str.split('').reverse().map((char, position)=>{
    return parseInt(char)* Math.pow(2,position);
  }).reduce((acc, i)=>{
    return acc + i
  });

  return dec;
}