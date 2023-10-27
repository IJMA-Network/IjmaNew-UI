import React, { useState, useEffect } from 'react'

const Pagination = () => {
    const [data, setData] = useState([])


    useEffect(() => {
        fetch("/TermSheetState.json").then((res) => {
            console.log("ali response====>",res?.json())
        }).catch((err) => {
            console.log("Some Error here...", err)
        })
    }, [])
    return (
        <div>
            <h1>Pagination here</h1>
        </div>
    )
}

export default Pagination
