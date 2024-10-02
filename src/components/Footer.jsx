import "../index.css";
const Footer = () => {
    return (
      <div className="w-full h-[200px] bg-emerald-400 flex flex-col lg:flex-row justify-evenly items-center  pl-10 pr-10">
        <p className="text-xl">You can get information by contacting!</p>
       
        <div>
          <span class="material-icons">gmail</span>
          <h5>TqY1X@example.com</h5>
        </div>
        <div>
          <span class="material-icons">call</span>
          <h5>8747-795-97-63</h5>
        </div>
        <div>
          <span class="material-icons">location_on</span>
          <h5>Kazakhstan,Almaty</h5>
        </div>
      </div>
    );
}

export default Footer ;