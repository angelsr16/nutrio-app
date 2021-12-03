import React from 'react'

const ProceedingInfo = ({title, content}) => {
    return (
        <>
            <p className="subTitle">{title}<span className="subTitle-info">{content}</span></p>   
        </>
    )
}

export default ProceedingInfo
