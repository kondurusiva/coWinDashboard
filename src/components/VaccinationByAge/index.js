// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'

import {
  VaccinationAgeContainer,
  VaccinationAgeHeading,
} from './styledComponents'

const VaccinationByAge = props => {
  const {vaccinationAgeDetails} = props

  return (
    <VaccinationAgeContainer>
      <VaccinationAgeHeading>Vaccination by age</VaccinationAgeHeading>
      <PieChart width={1000} height={300}>
        <Pie
          data={vaccinationAgeDetails}
          cx="50%"
          cy="30%"
          dataKey="count"
          outerRadius="60%"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="45-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
        </Pie>
        <Legend
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
        />
      </PieChart>
    </VaccinationAgeContainer>
  )
}

export default VaccinationByAge
