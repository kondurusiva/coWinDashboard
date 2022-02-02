// Style your elements here
import styled from 'styled-components'

export const CowinContainer = styled.div`
  background-color: #161625;
  min-height: 100vh;
  padding-left: 50px;
  padding-top: 10px;
  padding-right: 50px;
  padding-bottom: 50px;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 5px;
`

export const LogoHeading = styled.h1`
  color: #2cc6c6;
`

export const CowinParagraph = styled.h1`
  color: #cbd5e1;
`

export const LoadingView = styled.div``

export const FailureView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FailureImage = styled.img`
  width: 30%;
`

export const FailureText = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
`
