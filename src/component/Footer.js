import React from "react";
var d = new Date();
var currYear = d.getFullYear();

function Footer() {
  return (
    <React.StrictMode>
      <div className="copyright-details">
        <div className="about-social-icon text-center">
          <ul className="about-social">
            <li className="wow fadeIn" data-wow-delay=".8s">
              <a href="https://twitter.com/MustafaKavus" target="newtab">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            
            <li className="wow fadeIn" data-wow-delay=".2s">
              <a href="https://www.facebook.com/mustafakavuss" target="newtab">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li className="wow fadeIn" data-wow-delay=".4s">
              <a
                href="https://www.instagram.com/mustafakavuss/"
                target="newtab"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            
          </ul>
        </div>
        
       
        <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"></script>
      </div>
    </React.StrictMode>
  );
}

export default Footer;
