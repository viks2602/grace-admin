import { useRef } from "react"
import {
    Chart as ChartJS,
    ArcElement,
    Legend,
    Tooltip
} from 'chart.js'
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Legend,
    Tooltip
)


const DoughnutChart = () => {
    const chartRef=useRef();
    const data={
        labels:['Yes','No'],
        datasets:[{
            label:'Poll',
            data:[4,3],
            backgroundColor:['#43A5EA','#C9744F'],
            borderColor:['#43A5EA','#C9744F'],
        }]
    };
    const options={};

  return (
    <>
    <div style={{padding:'20px',width:'80%'}}>
     <Doughnut
     data={data}
     options={options}
     ref={chartRef}
     ></Doughnut>
    </div>
    </>
  )
}

export default DoughnutChart