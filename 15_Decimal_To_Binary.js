// Convert decimal to binary

const dec = 11;

const convNum = (d) => {
  let binary = [];
  let i = 0,
    r = 0;
  while (d != 0) {
    r = d % 2;
    binary[i++] = r;
    d = Math.floor(d / 2);
  }

  for(let j = i-1;j>=0;j--)
  {
    console.log(binary[j])
  }
};

convNum(dec);