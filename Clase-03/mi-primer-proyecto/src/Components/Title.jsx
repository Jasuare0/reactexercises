let MainTitle = (props) => {

    return(

        <h1>{props.mainTitle}</h1>
    
    )

}

MainTitle.defaultProps = {
    mainTitle: "Title value is missing!"
}

export default MainTitle;
        
