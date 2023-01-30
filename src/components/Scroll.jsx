import React from 'react'

const Scroll = ({ children }) => {
    const styles = {
        overflowY: 'scroll',
        border: '5px solid black',
        height: '550px',
        borderRadius: '10px'
    }
  return (
    <div style={styles} className='scrollbar'>
        { children }
    </div>
  )
}

export default Scroll