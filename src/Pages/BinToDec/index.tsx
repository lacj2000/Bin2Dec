import {FunctionComponent, useState} from 'react';
import { binToDec, isBinary } from '../../utils/functions';

interface IBinToDecProps {
}


const BinToDec: FunctionComponent = (props: IBinToDecProps) => {
  const [binaryValue, setBinaryValue] = useState("");

  
  return (
    <div>
      <h1 className="Title" >
        Binary To Decimal
      </h1>
      <h4 className='subtitle'>
        Enter a binary number and get its value in decimal...
      </h4>
      {
        !isBinary(binaryValue)&&
        <p className="error">The number entered is not binary, just type 0 and 1.</p>
      }
      <input
        className='input-data'
        value={binaryValue}
        onChange={(event)=>setBinaryValue(event.target.value)}
      />
      <p className="result">
        {isBinary(binaryValue)&&!!binaryValue?(
          binToDec(binaryValue)
          
        ): "Wating binary number... 🤔"
      }
      </p>
    </div>
  );
};

export default BinToDec;
