import { Box, Divider, Typography } from "@mui/material";
import logo from "../../../assets/images/logo.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import payment from '../../../assets/footerImages/bank-logo.a775fd7b.webp';
import basis from '../../../assets/footerImages/basis.webp';
import duns from '../../../assets/footerImages/duns.webp';
import iata from '../../../assets/footerImages/iata.webp';
import google from '../../../assets/footerImages/google-logo.svg';

const Footer = () => {
  return (
    <>
      <Box className="pt-36 pb-16 px-10 lg:px-0">
        <Box className="w-full mb-10">
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
            <div className="w-[80%] lg:w-[20%]">
              <img className="w-[60%]" src={logo} alt="" />
              <Typography variant="body1">
                <p className="mt-2 text-red-600 text-justify">
                  Flight Expert Dhaka (Main branch) 90/1 Motijheel City Centre
                  Level 25-B-1, Lift 26 Dhaka 1000, Bangladesh
                </p>
              </Typography>

              <div className="mt-5 flex gap-5">
                <FaFacebookF className="text-2xl text-red-600" />
                <FaInstagram className="text-2xl text-red-600" />
                <FaXTwitter className="text-2xl text-red-600" />
                <FaLinkedinIn className="text-2xl text-red-600" />
                <FaPinterestP className="text-2xl text-red-600" />
              </div>
            </div>
            <div>
              <Typography variant="h6">
                <p className="font-sembold">About</p>
              </Typography>

              <div className="mt-5">
                <a href="#">
                  <Typography variant="body1">
                    <p className="text-gray-400 hover:text-red-600 duration-500">
                      About Flight Expert
                    </p>
                  </Typography>
                </a>
                <a href="#">
                  <Typography variant="body1">
                    <p className="text-gray-400 hover:text-red-600 duration-500">
                      Best Price Guarantee
                    </p>
                  </Typography>
                </a>
                <a href="#">
                  <Typography variant="body1">
                    <p className="text-gray-400 hover:text-red-600 duration-500">
                      Terms and Conditions
                    </p>
                  </Typography>
                </a>
                <a href="#">
                  <Typography variant="body1">
                    <p className="text-gray-400 hover:text-red-600 duration-500">
                      Privacy Policy
                    </p>
                  </Typography>
                </a>
                <a href="#">
                  <Typography variant="body1">
                    <p className="text-gray-400 hover:text-red-600 duration-500">
                      Cookie Policy
                    </p>
                  </Typography>
                </a>
                <a href="#">
                  <Typography variant="body1">
                    <p className="text-gray-400 hover:text-red-600 duration-500">
                      Blog
                    </p>
                  </Typography>
                </a>
              </div>
            </div>
            <div>
              <Typography variant="h6">
                <p className="font-sembold">Help</p>
              </Typography>

              <div className="mt-5">
                <a href="#">
                  <Typography variant="body1">
                    <p className="text-gray-400 hover:text-red-600 duration-500">
                      FAQS
                    </p>
                  </Typography>
                </a>
                <a href="#">
                  <Typography variant="body1">
                    <p className="text-gray-400 hover:text-red-600 duration-500">
                      Easy EMI
                    </p>
                  </Typography>
                </a>
                <a href="#">
                  <Typography variant="body1">
                    <p className="text-gray-400 hover:text-red-600 duration-500">
                      Payment Methods
                    </p>
                  </Typography>
                </a>
                <a href="#">
                  <Typography variant="body1">
                    <p className="text-gray-400 hover:text-red-600 duration-500">
                      Contact Us
                    </p>
                  </Typography>
                </a>
              </div>
            </div>
            <div>
              <Typography variant="h6">
                <p className="font-sembold">Have Question?</p>
              </Typography>

              <div className="mt-5">
                <Typography variant="body1">
                  <p className="text-red-600 duration-500">+88-09617-111-888</p>
                </Typography>
                <Typography variant="body1">
                  <p className="text-gray-400 hover:text-red-600 duration-500">
                    sales@flightexpert.com
                  </p>
                </Typography>
                <Typography variant="body1">
                  <p className="font-semibold">Dedicated Customer Support</p>
                </Typography>
                <Typography variant="body1">
                  <p className="text-gray-400 text-xs">
                    Sat-Thurs: 9AM-9PM <br />
                    Friday/Govt. Holidays: 10AM-6PM
                  </p>
                </Typography>
              </div>
            </div>
            <div className="w-[80%] lg:w-[20%]">
              <Typography variant="h6">
                <p className="font-sembold">Accepted Payments</p>
              </Typography>

              <div className="mt-5">
                <img src={payment} alt="" />
              </div>
            </div>
          </div>
        </Box>

        <Divider variant="middle" />
        <Box className="flex flex-wrap justify-center gap-36 my-10">
            <div className="w-fit">
                <Typography variant="body1">
                    <p className="font-semibold text-center mb-2">Accredited Member</p>
                </Typography>
                <img src={basis} alt="" />
            </div>
            <div className="w-fit">
                <Typography variant="body1">
                    <p className="font-semibold text-center mb-2">Registered at</p>
                </Typography>
                <img src={duns} alt="" />
            </div>
            <div className="w-fit">
                <Typography variant="body1">
                    <p className="font-semibold text-center mb-2">Authorised by</p>
                </Typography>
                <img src={iata} alt="" />
            </div>
            <div className="w-fit">
                <Typography variant="body1">
                    <p className="font-semibold text-center mb-2">Our Partners</p>
                </Typography>
                <img src={google} alt="" />
            </div>
        </Box>
        <Divider variant="middle" />

        <Box>
            <Typography variant="body1">
                <p className="font-semibold text-gray-500 mt-20 text-center">Copyright @2024 FEBD Ltd. All rights reserved by Flight Expert</p>
            </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
