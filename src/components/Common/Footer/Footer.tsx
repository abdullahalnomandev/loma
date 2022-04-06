import { AiOutlineMail } from 'react-icons/ai';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import './Footer.css';
const Footer = () => {
  return (
    <div className="py-5" style={{ background: "#000000", color: "#ffff" }}>
      <div className="container pt-5 pb-3">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <img
              src="https://res.cloudinary.com/dzghsspe7/image/upload/v1649194979/Grocery/loma_zmeogn.png"
              alt=""
            />
            <p className="text-secondary  pt-5" style={{fontSize:'13px'}}>
              {" "}
              © {new Date().getFullYear()} Loma Technologies Ltd.{" "}
            </p>
          </div>
          <div className="col-md-4 col-sm-6 ">
              <p> <a href="#" className="text-white">About Us</a> </p>
              <p> <a href="#" className="text-white">Work with Us</a> </p>
              <p> <a href="#" className="text-white">Are we messing a site ?</a> </p>
        
          </div>
          <div className="col-md-4 col-sm-6 mt-xs-5 mt-sm-5">
              <p className="ms-md-3">Keep up with us:</p>
              <ul className='p-0 '>
                  <li> <a href="#"> <FiInstagram /></a> </li>
                  <li> <a href="#"> <FiFacebook /></a> </li>
                  <li> <a href="#"> <FiTwitter /></a> </li>
                  <li> <a href="#"> <AiOutlineMail /></a> </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
