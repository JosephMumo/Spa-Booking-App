
import React, { createContext, useState } from 'react'


export const myContext = createContext()

function AppContextProvider({children}) {
    const [appointment, setAppointment] = useState([])
    const [data, setData] = useState({
        fname:'',
        phone:'',
        date:'',
        time:'',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setData( (prev) => {
            return(
                { ...prev,
                    [name]: value
                }
            )
        })
        console.log(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setAppointment(data)
        alert('Your Booking has been successfully updated')
        setData({
            fname:'',
            phone:'',
            date:'',
            time:'',
            message: ''
        })
        console.log(appointment)
    }

    return ( 
        <myContext.Provider value={{appointment, setAppointment, data, setData, handleChange, handleSubmit}}>
            {children}
        </myContext.Provider>
     );
}

export default AppContextProvider;
