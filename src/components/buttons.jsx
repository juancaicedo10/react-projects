import react from 'react';
import '../stylesheets/button.css' 


const isOperator = (e) => {
  return isNaN(e) && (e != '.') && (e != '=');
};

function Button (props) {
  return (
    <div className={`button-container ${isOperator(props.children)? 'operador' : null}`}
    onClick={() => props.handleClick(props.children)}>
      {props.children}
    </div>
  )
}

export default Button