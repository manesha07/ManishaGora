import React from 'react';
const Footer = () => {
    return (
<footer class="footer-main container">
            <div class="footer-info clearfix">
                <div class="footer-1">
                    <span class="footer-heading large-content">
                        <span class="highlight-color">All</span>one
                    </span>
                    <p class="footer-content small-content">Clothing company dedicated to spreading positivity through clothing.  <span class="footer-hide-text"> clothing brand with the message of positivity and happiness.</span>
                    </p>
                    {/* <ul class="social-media clearfix">
                        <li><img src="images/fbmob.png" class="fb large-icon" alt="facebook"/></li>
                        <li><img src="images/instagram-fill.png" class="insta large-icon" alt="facebook"/></li>
                        <li><img src="images/twitter-fill.png" class="twitter large-icon" alt="facebook"/></li>
                        <li><img src="images/skype-fill.png" class="skype large-icon" alt="facebook"/></li>
                    </ul> */}
                </div>
                <div class="footer-2">
                    <span class="footer-head large-content">Company</span>
                    <ul class="company small-content">
                        <li>About Us</li>
                        <li>Our Work</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div class="footer-3">
                    <span class="footer-head large-content">Categories</span>
                    <ul class="services small-content">
                        <li>Men's Clothing</li>
                        <li>Women's Clothing</li>
                        <li>Jewellery</li>
                        <li>Electronics</li>
                    </ul>
                </div>
            </div>
            <div class="copyright small-content">
                <img src="images/copyright-fill.png" alt="copyright" class="copyright-icon large-icon"/>
                <span class="copy">Copyright 2021. All Right Reserved </span>
            </div>
        </footer>
    );
}
export default Footer;