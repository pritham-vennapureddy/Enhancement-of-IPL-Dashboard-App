import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const CustomPieChart = props => {
  const {details} = props
  return (
    <div className="pieContainer">
      <ResponsiveContainer width="50%" height={300}>
        <PieChart>
          <Pie
            cx="20%"
            cy="40%"
            data={details}
            startAngle={0}
            endAngle={360}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Won" fill="#008F18" />
            <Cell name="Lost" fill="#FD1313" />
            <Cell name="Drawn" fill="#a44c9e" />
          </Pie>
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CustomPieChart
