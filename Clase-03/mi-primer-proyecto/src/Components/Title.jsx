import PropTypes from 'prop-types';


let MainTitle = (props) => {

    return(

        <h1>{props.mainTitle}</h1>
    
    )

}

MainTitle.defaultProps = {
    mainTitle: "Title value is missing!"
}

MainTitle.propTypes = {
    mainTitle: PropTypes.string.isRequired
}

export default MainTitle;
        
