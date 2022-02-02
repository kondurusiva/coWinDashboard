// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import {
  CowinContainer,
  Logo,
  LogoHeading,
  CowinParagraph,
  LogoContainer,
  LoadingView,
  FailureView,
  FailureImage,
  FailureText,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'Failure',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {vaccinationData: {}, apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getVaccinationData()
  }

  getVaccinationData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')

    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = {
        last7DaysVaccination: fetchedData.last_7_days_vaccination.map(
          eachData => ({
            vaccineDate: eachData.vaccine_date,
            dose1: eachData.dose_1,
            dose2: eachData.dose_2,
          }),
        ),
        vaccinationByAge: fetchedData.vaccination_by_age.map(eachData => ({
          age: eachData.age,
          count: eachData.count,
        })),
        vaccinationByGender: fetchedData.vaccination_by_gender.map(
          eachData => ({count: eachData.count, gender: eachData.gender}),
        ),
      }
      this.setState({
        vaccinationData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoadingView data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </LoadingView>
  )

  renderVaccinationStats = () => {
    const {vaccinationData} = this.state

    return (
      <>
        <VaccinationCoverage
          vaccinationCoverageDetails={vaccinationData.last7DaysVaccination}
        />
        <VaccinationByGender
          vaccinationGenderDetails={vaccinationData.vaccinationByGender}
        />
        <VaccinationByAge
          vaccinationAgeDetails={vaccinationData.vaccinationByAge}
        />
      </>
    )
  }

  renderFailureView = () => (
    <FailureView>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <FailureText>Something Went Wrong</FailureText>
    </FailureView>
  )

  statusBasedView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVaccinationStats()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <CowinContainer>
        <LogoContainer>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <LogoHeading>Co-WIN</LogoHeading>
        </LogoContainer>
        <CowinParagraph>CoWIN Vaccination in India</CowinParagraph>
        {this.statusBasedView()}
      </CowinContainer>
    )
  }
}

export default CowinDashboard
