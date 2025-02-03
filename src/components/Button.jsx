import React from 'react'
import PropTypes from 'prop-types'

// PRIMARY BUTTON
const ButtonPrimary = ({
    href,
    target = self,
    label,
    icon,
    classes
}) => {
    if(href){
        return(
            <a href={href} target={target} className={"btn btn-primary " + classes}>
                {label}
                {icon ? <span className='material-symbols-rounded' aria-hidden="true">{icon}</span> : undefined }
            </a>
        ) 
    }
    else{
        return(
            <button className={"btn btn-primary " + classes}>
                {label}
                {icon ? <span className='material-symbols-rounded' aria-hidden="true">{icon}</span> : undefined }
            </button>
        )
    }
}

ButtonPrimary.PropTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    class: PropTypes.string
}

// OUTLINE BUTTON
const ButtonOutline = ({
    href,
    target = self,
    label,
    icon,
    classes
}) => {
    if(href){
        return(
            <a href={href} target={target} className={"btn btn-outline " + classes}>
                {label}
                {icon ? <span className='material-symbols-rounded' aria-hidden="true">{icon}</span> : undefined }
            </a>
        ) 
    }
    else{
        return(
            <button className={"btn btn-outline " + classes}>
                {label}
                {icon ? <span className='material-symbols-rounded' aria-hidden="true">{icon}</span> : undefined }
            </button>
        )
    }
}

ButtonOutline.PropTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    class: PropTypes.string
}

export {ButtonPrimary, ButtonOutline}