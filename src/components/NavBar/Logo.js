import brandLogo from "../../assets/LOGO 3.png"
import { Link } from "react-router-dom"

const Logo = () => {
    return(
        <Link to="/"><img src={brandLogo} alt="Guitar Star" title="Guitar Star"></img></Link>
    )
}

export default Logo