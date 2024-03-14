import Crousal from "../component/crousal";
import Navber from "../component/navber";
import "../pagescss/home.css";
import img1 from "../assets/sale1.jpg";
import img2 from "../assets/sale2.jpg";
import img3 from "../assets/footvalue.jpg";
import ecoflex from "../assets/eco flex.jpg";
import pipe from "../assets/pipe.jpeg";
import balti from "../assets/balti.png";
import bucket3 from "../assets/bucket3.jpg";
import telfish from "../assets/telfish.png";
export default function Home() {
  return (
    <div>
      <Navber />
      <Crousal />
      <div id="catagory">
        <div id="catagoryheading">
                    <h2>TOP SELLING PRODUCT</h2> 
         </div> 
        <ul id="ul1">
          <li>
            <img
              onClick={() => switchonclick("man")}
              src={pipe}
              alt="loading"
            ></img>
            <div onClick={() => switchonclick("man")} className="seedetails">
              <h3>Pankaj Super Sakti </h3>
              <ul>
                <li>2 inch super sakti pipe</li>
                <li>2.5 inch super sakti pipe</li>
                <li>3 inch super sakti pipe</li>
              </ul>
            </div>
          </li>
          <li>
            <img
              onClick={() => switchonclick("woman")}
              src={bucket3}
              alt="loading"
            ></img>
            <div onClick={() => switchonclick("woman")} className="seedetails">
              <h3>Plastic Chupri</h3>
              <ul>
                <li>2 inch super sakti pipe</li>
                <li>2.5 inch super sakti pipe</li>
                <li>3 inch super sakti pipe</li>
              </ul>
            </div>
          </li>
          <li>
            <img
              onClick={() => switchonclick("style")}
              src={bucket3}
              alt="loading"
            ></img>
            <div onClick={() => switchonclick("style")} className="seedetails">
              <h3>Plastic Bucket</h3>
              <ul>
                <li>Taj 14 inch bucket</li>
                <li>14 inch local bucket</li>
                <li>16 inch local bucket</li>
              </ul>
            </div>
          </li>
        
          <li>
            <img
              onClick={() => switchonclick("man")}
              src={ecoflex}
              alt="loading"
            ></img>
            <div onClick={() => switchonclick("man")} className="seedetails">
              <h3>Pankaj Eco flex Pipe</h3>
              <ul>
                <li>2 inch super sakti pipe</li>
                <li>2.5 inch super sakti pipe</li>
                <li>3 inch super sakti pipe</li>
              </ul>
            </div>
          </li>
          <li>
            <img
              onClick={() => switchonclick("woman")}
              src={telfish}
              alt="loading"
            ></img>
            <div onClick={() => switchonclick("woman")} className="seedetails">
              <h3>Footvalve & Telfish</h3>
              <ul>
                <li>2 inch Footvalve</li>
                <li>2 inch Telfish</li>
                <li>2.5 inch Footvalve & telfish</li>
                {/* <li>2.5 inch Telfish</li> */}
               
              </ul>
            </div>
          </li>
          <li>
            <img
              onClick={() => switchonclick("style")}
              src={balti}
              alt="loading"
            ></img>
            <div onClick={() => switchonclick("style")} className="seedetails">
              <h3>plastic bin</h3>
              <ul>
                <li>height 25cm</li>
                <li>width 22cm</li>
                <li>5Ltr capacity</li>
               
               
              </ul>
            </div>
          </li>
          <li>
            <img
              onClick={() => switchonclick("style")}
              src={balti}
              alt="loading"
            ></img>
            <div onClick={() => switchonclick("style")} className="seedetails">
              <h3>Salt </h3>
              <ul>
               
                <li>25 kg Bag</li>
                <li>1 kg packet</li>
                <li>500g packet</li>
               
              </ul>
            </div>
          </li>
          <li>
            <img
              onClick={() => switchonclick("style")}
              src={balti}
              alt="loading"
            ></img>
            <div onClick={() => switchonclick("style")} className="seedetails">
              <h3>Chapa</h3>
              <ul>
                <li>single size</li>
                {/* <li>1kg packet</li>
                <li>500g packet</li> */}
               
               
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
