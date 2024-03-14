import Navber from "../component/navber";
import phonepe from "../assets/phonepe.jpg";
import "../pagescss/payment.css";
export default function Payment(){
    return(
<div>
    <Navber/>
    <img className="scan"src={phonepe}></img>
</div>
    )
}