import {FunctionComponent, useState} from 'react';

interface IBinToDecProps {
}

const BinToDec: FunctionComponent = (props: IBinToDecProps) => {
  const [binaryValue, setBinaryValue] = useState("");
  console.log(binaryValue)
  return (
    <div>
      <h1>Binary To Decimal</h1>
      <h4>Enter a binary number and get its value in decimal...</h4>
      <p>error</p>
      <input
        value={binaryValue}
        onChange={(event)=>setBinaryValue(event.target.value)}
      />
      <p>Resultado</p>
    </div>
  );
};

export default BinToDec;
