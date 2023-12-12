import react from 'react'
import '../stylesheets/ClearButton.css'

const ClearButton = (props) => {
    return (
    <div className='clearButton' 
    onClick={props.handleClick}>
        {props.children}
    </div>
    )
}

export default ClearButton