import React, {useState, useContext} from "react"
import {useNavigate} from "react-router-dom"
import { HeaderContainer } from "../containers/header"
import { FooterContainer } from "../containers/footer"
import { Form } from "../components"
import * as ConstantRoutes from "../constants/routes"
import { FirebaseContext } from "../context/firebase"

export default function Signup() {
    const navigate = useNavigate()
    const {firebase} = useContext(FirebaseContext)
    
    const [firstName, setFirstName] = useState('')
    const [error, setError] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')

    const isInvalid = firstName === '' || password === '' || emailAddress === ''

    const handleSignup = (event) => {
        event.preventDefault()

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) =>
                result.user
                .updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1,
                })
                .then(() => {
                    navigate.push(ConstantRoutes.BROWSE)
                })
            )
            .catch(() => {
                setEmailAddress('')
                setPassword('')
                setError("Invalid email. Please try again.")
            })
    }
    return (
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignup} method="POST">
                    <Form.Input 
                        placeholder = "First Name"
                        value = {firstName}
                        onChange = {({target}) => setFirstName(target.value)}
                    />
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
                        Sign Up
                    </Form.Submit>
                    <Form.Text>
                        Already a user? <Form.Link to = "/signin">Sign up now.</Form.Link>
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