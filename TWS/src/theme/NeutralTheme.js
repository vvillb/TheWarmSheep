//este archivo es js y no jsx porque no voy a regresar un fucntional component
//voy a regresar un objeto de js

import { createTheme } from "@mui/material";



export const NeutralTheme=createTheme({
    palette:{
        primary:{
            main:'#c4d5c4',
            lighter:'#F4F5F7'
        },
        secondary:{
            main:'#9bbabd'
        },
        error:{
            main: '#51777c'
        },
        background:{
            main:'#EAEAE1'
        }
    },
    typography:{
        h1:{
            fontFamily: 'Cormorant Garamond'
        },
        h2:{
            fontFamily: 'Cormorant Garamond'
        },
        h3:{
            fontFamily: 'Cormorant Garamond'
        },h4:{
            fontFamily: 'Fira Sans'
        },
        h5:{
            fontFamily: 'Fira Sans'   
        },     
        h6:{
            fontFamily: 'Fira Sans'        
        },
        subtitle1:{
            fontFamily: 'Fira Sans'  
        },
        subtitle2:{
            fontFamily: 'Fira Sans'  
        },
        body1:{
            fontFamily: 'Fira Sans'          },
        body2:{
            fontFamily: 'Fira Sans'  
        },
        button:{
            fontFamily: 'Fira Sans'  
        },
        caption:{
            fontFamily: 'Fira Sans'  
        },
        overline:{
            fontFamily: 'Fira Sans'  
        },        
    }
})

