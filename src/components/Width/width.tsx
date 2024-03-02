'use client'
import React from 'react'
const Width = () => {
    const [clientWidth, setClientWidth] = React.useState(window.document.documentElement.clientWidth)


    React.useEffect(() => {

        const onResize = () => {
            setClientWidth(window.document.documentElement.clientWidth)
        }
        onResize()
        window.addEventListener('resize',onResize)
    }, [])
  return (
    <div>width: {clientWidth}</div>
  )
}

export default Width