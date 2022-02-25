import React from 'react'
import styled from 'styled-components'
import Buildcomp from './Buildcomp'

const Homescreen = () => {
    // const date = new Date("2021 11, 12")
  return (
    <Wrapper>
        <Buildcomp date="2021 Novermber, 12" course="React js" cost="$50.00" button = "More FrameWorks"/>
        <Buildcomp dir="row-reverse" date="2020 july, 12" course="Python" cost="$80.00" button = "More Liberies"/> <Buildcomp date="2022 january, 12" course="Node js" cost="$100" button = "Install"/>
    </Wrapper>
  )
}

export default Homescreen

const Wrapper = styled.div`
    // background-color: blue;
`;