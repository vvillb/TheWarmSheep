//este archivo es js y no jsx porque no voy a regresar un fucntional component
//voy a regresar un objeto de js

import { createTheme } from "@mui/material";



export const NeutralTheme=createTheme({
    palette:{
        primary:{
            main:'#97A187'
        },
        secondary:{
            main:'#43594C'
        },
        error:{
            main: '#15231E'
        }
    }
})

