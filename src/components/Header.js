import React from 'react'
import PropTypes from 'prop-types';


const Header = ({title}) => {
  return (
    <div className = "container">
    <h1>{title}</h1>  
      
    </div>
  )
}


Header.defaultProps= {
  title: "Task Tracker" ,
}



export default Header

