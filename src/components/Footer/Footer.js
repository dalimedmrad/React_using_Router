import React from 'react';
import FooterWrapper from "./footerWrapper";

const Footer = () => {
    return (
        <div className="footer">
             <FooterWrapper>
              <div className="footerHead">
                <img src="data:image/jpeg;base64,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"/>
              </div>
              <div className="footerFoot">
                <h5>&copy; Any reproduction is prohibited -- 2021 -- Powred By DALI</h5>
              </div>
            </FooterWrapper>
        </div>
  );
       
   
}

export default Footer;
