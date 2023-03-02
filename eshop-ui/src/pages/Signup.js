import {Button, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {Field, Form, Formik} from "formik";
import * as React from "react";
import * as Yup from 'yup'

const signupValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required(),
    password: Yup.string()
        .min(5)
        .required(),
    repeatedPassword: Yup.string()
        .min(5)
        .required()
        .oneOf([Yup.ref('password')], "Must be the same as password value")
})

const Signup = () => (
    <>
        <Box
            noValidate
            autoComplete="off"
            sx={{
                width: 300
            }}
        >
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    repeatedPassword: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={signupValidationSchema}>
                {({errors, touched}) => (
                    <Form>
                        <Field id="email"
                               name="email"
                               label="Email"
                               variant="standard"
                               fullWidth
                               error={!!errors.email && touched.email}
                               helperText={touched.email && errors.email}
                               as={TextField}
                        />
                        <Field id="password"
                               name="password"
                               label="Password"
                               type="password"
                               variant="standard"
                               fullWidth
                               error={!!errors.password && touched.password}
                               helperText={touched.password && errors.password}
                               as={TextField}
                        />
                        <Field id="repeatedPassword"
                               name="repeatedPassword"
                               label="Repeated Password"
                               type="password"
                               variant="standard"
                               fullWidth
                               error={!!errors.repeatedPassword && touched.repeatedPassword}
                               helperText={touched.repeatedPassword && errors.repeatedPassword}
                               as={TextField}
                        />
                        <Button type="submit" sx={{
                            marginTop: 2
                        }} variant="contained">Submit</Button>
                    </Form>
                )}
            </Formik>
        </Box>
    </>
)


export default Signup