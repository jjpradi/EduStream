import {PieChart,Pie,Label,Legend} from "recharts"
import {UseChart} from "../../entitles/UseChart"



 const Rechart=(props)=>{

   const sl=(props.stuList)
const aboveFive=sl.filter(r=>r.ranNum>=5 &&r.ranNum<8   )
  const aboveEight=sl.filter(y=>  y.ranNum>=8)
  const belowFive=sl.filter(o=>    o.ranNum<5 ) 




return(
<PieChart
  accessibilityLayer
  barCategoryGap="10%"
  barGap={4}
  cx="50%"
  cy="50%"
  data={[
    {
      amt: belowFive.length,
      fill: '#8884d8',
      name: '<5',
      pv: 2400,
      uv: 31.47
    },
    {
      amt: aboveFive.length,
      fill: '#83a6ed',
      name: '5-8',
      pv: 4567,
      uv: 26.69
    },
    {
      amt: aboveEight.length,
      fill: '#8dd1e1',
      name: '8>',
      pv: 1398,
      uv: 15.69
    },
    
  ]}
  endAngle={360}
  height={300}
  innerRadius={0}
  layout="centric"
  margin={{
    bottom: 5,
    left: 5,
    right: 5,
    top: 5
  }}
  outerRadius="80%"
  stackOffset="none"
  startAngle={0}
  syncMethod="index"
  throttleDelay="raf"
  throttledEvents={[
    'mousemove',
    'touchmove',
    'pointermove',
    'scroll',
    'wheel'
  ]}
  width={500}
>
  <Pie
    cornerRadius={8}
    data={[
      {
        amt: belowFive.length,
        fill: '#8884d8',
        name: '<5',
        pv: 2400,
        uv: 31.47
      },
      {
        amt: aboveFive.length,
        fill: '#83a6ed',
        name: '5-8',
        pv: 4567,
        uv: 26.69
      },
      {
        amt: aboveEight.length,
        fill: '#8dd1e1',
        name: '8>',
        pv: 1398,
        uv: 15.69
      },
      
    ]}
    dataKey="uv"
    innerRadius={50}
    nameKey="name"
    outerRadius={80}
  >
    <Label
      dy={-7}
      fill="#000"
      fontSize={12}
      fontWeight="bold"
      position="center"
    >
      Donut
    </Label>
    <Label
      dy={8}
      fontSize={12}
      fontWeight="bold"
      position="center"
    >
      Chart
    </Label>
    <Legend
      align="right"
      layout="vertical"
      verticalAlign="middle"
    />
  </Pie>
</PieChart>)

}

export default Rechart