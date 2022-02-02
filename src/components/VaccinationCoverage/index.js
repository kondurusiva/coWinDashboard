// Write your code here
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import {VaccinationCoverageContainer, CoverageHeading} from './styledComponents'

const VaccinationCoverage = props => {
  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  const {vaccinationCoverageDetails} = props

  return (
    <VaccinationCoverageContainer>
      <CoverageHeading>Vaccination Coverage</CoverageHeading>
      <BarChart
        width={900}
        height={400}
        data={vaccinationCoverageDetails}
        margin={{top: 5}}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: '#6c757d',
            strokeWidth: 1,
            fontSize: 15,
            fontFamily: 'Roboto',
          }}
        />
        <YAxis
          tickFormatter={dataFormatter}
          tick={{
            stroke: '#6c757d',
            strokeWidth: 1,
            fontSize: 15,
            fontFamily: 'Roboto',
          }}
        />
        <Legend
          wrapperStyle={{
            paddingTop: 20,
            fontFamily: 'Roboto',
            fontSize: 12,
            textAlign: 'center',
          }}
        />
        <Bar
          dataKey="dose1"
          name="Dose 1"
          fill="#5a8dee"
          barSize="20%"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="dose2"
          name="Dose 2"
          fill="#f54394"
          barSize="20%"
          radius={[5, 5, 0, 0]}
        />
      </BarChart>
    </VaccinationCoverageContainer>
  )
}

export default VaccinationCoverage
