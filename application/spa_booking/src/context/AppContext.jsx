
import React, { createContext, useState, useEffect } from 'react'


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
    }
    useEffect(() => {
        localStorage.setItem('booking', JSON.stringify(appointment))
    },[appointment])

    const bookingInfo = JSON.parse(localStorage.getItem('booking'))

    return ( 
        <myContext.Provider value={{appointment, setAppointment, data, setData, handleChange, handleSubmit, bookingInfo}}>
            {children}
        </myContext.Provider>
     );
}

export default AppContextProvider;
