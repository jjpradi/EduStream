
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';

import { RechartsDevtools } from '@recharts/devtools';

let c=[]
for (let u=0;u<=12;u++){

const fees=Math.random()*1000000
const newObject={"fees":fees}
c.push(newObject)




}

console.log(c)

const FullLineChart= ({ isAnimationActive = true }) => (
  <LineChart


    style={{ width: '40vw', maxWidth: '7000px', maxHeight: '70vh', aspectRatio: 1.618 }}
    responsive
    data={c}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis     />
    <YAxis  dataKey="fees" width="auto" />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="fees" stroke="#82ca9d" isAnimationActive={isAnimationActive} />
    <RechartsDevtools />
  </LineChart>
);


export default FullLineChart