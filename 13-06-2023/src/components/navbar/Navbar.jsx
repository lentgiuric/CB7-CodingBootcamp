import "./index.css"

const Navbar = ({data}) => {

    return(
    
        <div className="navbar">
            <div className="navbar_logo"><h1>First React</h1></div>
            <ul className="navbar_items">
               
                {
                    data.map( (item) => (
                        <li className="navbar_item"><a href={item.perc}>{item.name}</a></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Navbar