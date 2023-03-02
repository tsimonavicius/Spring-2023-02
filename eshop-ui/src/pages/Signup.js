import {Button, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {Field, Form, Formik} from "formik";
import * as React from "react";

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
                }}>
                <Form>
                    <Field id="email"
                           name="email"
                           label="Email"
                           variant="standard"
                           fullWidth
                           as={TextField}
                    />
                    <Field id="password"
                           name="password"
                           label="Password"
                           type="password"
                           variant="standard"
                           fullWidth
                           as={TextField}
                    />
                    <Field id="repeatedPassword"
                           name="repeatedPassword"
                           label="Repeated Password"
                           type="password"
                           variant="standard"
                           fullWidth
                           as={TextField}
                    />
                    <Button type="submit" sx={{
                        marginTop: 2
                    }} variant="contained">Submit</Button>
                </Form>
            </Formik>
        </Box>
    </>
)


export default Signup