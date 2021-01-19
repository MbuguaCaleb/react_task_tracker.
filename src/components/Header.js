import PropTypes from 'prop-types'
import Button from './Button';


const Header = ({title}) => {

    const onClick = ()=>{
       console.log("CLICK")
    }
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
        </header>
    )

}


// //default props
Header.defaultProps ={
    title:"Task Tracker"
}


//Proptypes make your code more robust
//Its more like assigning types to typescript
Header.propTypes={
    title:PropTypes.string.isRequired
}


//css in js
// const headingStyle ={
//     color:'red', 
//     backgroundColor:'black'
// }


export default Header
