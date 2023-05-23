import React, {useState, useContext} from "react"
import {useNavigate} from "react-router-dom"
import * as ConstantRoutes from "../constants/routes"
import { FirebaseContext } from "../context/firebase"
import { HeaderContainer } from "../containers/header"
import {FooterContainer} from "../containers/footer"
import { Form } from "../components"

export default function Signin() {
    const navigate = useNavigate()
    const {firebase} = useContext(FirebaseContext)
    
    const [error, setError] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')

    const isInvalid = password === '' || emailAddress === ''

    const handleSignin = (event) => {
        event.preventDefault()

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                navigate.push(ConstantRoutes.BROWSE)
            })
            .catch((error) => {
                setEmailAddress('')
                setPassword('')
                setError(error.message)
            })

    }
    return (
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignin} method="POST">
                    <Form.Input 
                        placeholder = "Email Address"
                        value = {emailAddress}
                        onChange = {({target}) => setEmailAddress(target.value)}
                    />
                    <Form.Input
                        placeholder = "Password"
                        type = "password"
                        value = {password}
                        autoComplet = "off"
                        onChange = {({target}) => setPassword(target.value)}
                    />
                    <Form.Submit disabled = {isInvalid} type = "submit">
                        Sign In
                    </Form.Submit>
                    <Form.Text>
                        New to Netflix? <Form.Link to = "/signup">Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA.
                    </Form.TextSmall>
                </Form.Base>
            </Form>
        </HeaderContainer>
        <FooterContainer />
        </>
        
    )
}