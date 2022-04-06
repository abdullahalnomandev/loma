import { FiSearch } from 'react-icons/fi';
import "./Banner.css";
const Banner = () => {
  return (
    <div
      className="container-fluid row px-0 mx-0 "
      style={{ background: "#FAF7F2" }}
    >
      <div className="col-md-6  header-right">
        <h1>SEARCH EVERY <br /> SECONDHAND AND <br /> RENTAL SITE</h1>

        <form action="" className='form mb-3'>
          <input type="text" name="" id="" placeholder="Search for anything" />{" "}
          <button><FiSearch /></button>
        </form>

        <div className="item">
          <h6 className="pt-2"> Try: </h6> <p>y2k crop top</p>{" "}
          <p>eames chair</p> <p>normal people sally rooney</p> <p>ipad mini</p>{" "}
          <p>patagonia</p> <p>kitchenaid</p> <p>carhartt </p>
        </div>
      </div>
      <div className="col-md-6 px-0 mx-0">
        <img
          className="img-fluid"
          src="https://res.cloudinary.com/dzghsspe7/image/upload/v1649202301/Grocery/43b5c888cd9cf127bb548a981d4fb52f1_nezxfd.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
