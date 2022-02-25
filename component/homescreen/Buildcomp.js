import React from 'react'
import styled from 'styled-components'

const Buildcomp = ({date, course, cost, button, dir}) => {
    // const year = new Date.getFullyear()
    // const month = new Date.getMonth("en-lang")
    // const day = new Date.getDay()
    return (
      <Container>
          <Holder>
            <Wrapper dir={dir}>
                <Year>
                    <p>{date}</p>
                </Year>
                <Course>
                    <h3>{course}</h3>
                </Course>
                <Amount>
                    <p>{cost}</p>
                </Amount>
            </Wrapper>
            <Button>{button}</Button>
          </Holder>
      </Container>
    )
}

export default Buildcomp

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: red;
`;

const Holder = styled.div`
    width: 600px;
    height: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: black;
    border-radius: 5px;
    margin: 10px;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 200px;
    background-color: white;
    width: 500px;
    justify-content: space-between;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    flex-direction: ${({dir})=>dir}
`;

const Year = styled.div`
    width: 80px;
    border-radius: 5px;
    background-color: black;
    color: white;
    :hover{
        background-color: white;
        color: black;
        border: 1px solid black;    
        transition: all 1s;
    }
    p{
        text-align: center;
    }
`;

const Button = styled.button`
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 5px;
    transition: all 1s;
    :hover{
        background-colo: green;
        transform: scaleY(1.3)
    }
`

const Course = styled.div`

`;

const Amount = styled.div`

`;