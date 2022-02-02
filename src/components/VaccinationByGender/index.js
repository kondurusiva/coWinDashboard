// Write your code here
import {PieChart, Pie, Cell, Legend} from 'recharts'
import {
  VaccinationByGenderContainer,
  VaccinationHeading,
} from './styledComponents'

const VaccinationByGender = props => {
  const {vaccinationGenderDetails} = props

  return (
    <VaccinationByGenderContainer>
      <VaccinationHeading>Vaccination by gender</VaccinationHeading>
      <PieChart height={300} width={1000}>
        <Pie
          data={vaccinationGenderDetails}
          startAngle={180}
          endAngle={0}
          innerRadius="30%"
          outerRadius="60%"
          cx="50%"
          cy="60%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </VaccinationByGenderContainer>
  )
}

export default VaccinationByGender
