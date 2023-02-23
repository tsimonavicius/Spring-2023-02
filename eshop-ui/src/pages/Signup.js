import {useState} from "react";
import {Button, TextField} from "@mui/material";
import Box from "@mui/material/Box";

const Signup = () => {

    const [product, setProduct] = useState({
        email: '',
        password: '',
        repeatedPassword: ''
    })

    return (
        <>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{
                    width: 300
                }}
            >
                <TextField
                    id="email"
                    label="Email"
                    variant="standard"
                    fullWidth
                />
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    variant="standard"
                    fullWidth
                />
                <TextField
                    id="repeatedPassword"
                    label="Repeated Password"
                    type="password"
                    variant="standard"
                    fullWidth
                />
                <Button sx={{
                    marginTop: 2
                }} variant="contained">Submit</Button>
            </Box>
        </>
    )
}

export default Signup