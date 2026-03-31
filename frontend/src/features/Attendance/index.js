
import { BarChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const Attendance=({isAnimationActive=true,attendance})=>{
console.log(attendance)

return(


 <BarChart style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }} responsive data={attendance}>
 
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="pres" />
    <YAxis width="auto" dataKey="abs" />
    <Tooltip />
    <Legend />
    <Bar dataKey="pres" fill="#8884d8" isAnimationActive={isAnimationActive} />
    <Bar dataKey="abs" fill="#82ca9d" isAnimationActive={isAnimationActive} />
 
  </BarChart>


    
    
)

}


export default Attendance