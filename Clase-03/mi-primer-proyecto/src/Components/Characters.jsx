let Characters = (props) => {

    return(

        <ul>
            {props.arrayData.map(item => <li key={item.id}>{item.name}</li>)}

        </ul>

    
    )

}


export default Characters;