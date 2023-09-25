import {
    Container,
    Numbers,
    OneOne,
    OneTwo,
    ZeroOne,
    ZeroTwo,
    Days,
    Challenge
 } from "./Page1.styled";

const page1 = () => {
    return(
        <Container>
            <Numbers>
                <OneOne></OneOne>
                <OneTwo></OneTwo>
                <ZeroOne></ZeroOne>
                <ZeroTwo></ZeroTwo>
            </Numbers>
            <Days>DAYS</Days>
            <Challenge>CSS CHALLENGE</Challenge>
        </Container>
    )
}

export default page1;