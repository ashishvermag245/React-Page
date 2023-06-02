import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footer py-5 bg-dark text-light">
        <div className="top-footer">
          <div className="container">
            <div className="row">
                 <div className="col-12 col-md-6"></div>
              <div className="col-12 col-md-6">
                <div className="app-store">
                    <div className="heading">
                        <h4>Sign up and never miss another deal again...</h4>
                    </div>
                    <div className="email-group">
                       <div class="input-group">
                            <input type="email" class="form-control rounded-pill" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                            <button class="btn btn-outline-secondary rounded-pill" type="button" id="inputGroupFileAddon04">Button</button>
                       </div>
                    </div>
                </div>
              </div>
            </div>
         <hr />
          </div>
        </div>
         <div className="bottom-footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3 ">
                        <div className="footer-logo">
                            <a className="f-logo fw-bold text-secondary" href="#">
                                <h3>MINI HUB</h3>
                            </a>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam aut iure repellat tenetur odio laudantium blanditiis consequatur dignissimos velit perferendis.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 ">
                        <div className="footer-logo">
                            <ul>
                                <li className="fw-bold fs-6 text-light">Shopping</li>
                                <li className="text-secondary">Shopping</li>
                                <li className="text-secondary">Shopping</li>
                                <li className="text-secondary">Shopping</li>
                                <li className="text-secondary">Shopping</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 ">
                        <div className="footer-logo">
                            <ul>
                                <li className="fw-bold fs-6 text-light">Accessories</li>
                                <li className="text-secondary">Accessories</li>
                                <li className="text-secondary">Accessories</li>
                                <li className="text-secondary">Accessories</li>
                                <li className="text-secondary">Accessories</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 ">
                        <div className="footer-logo">
                            <ul>
                                <li className="fw-bold fs-6 text-light">Connect with Social</li>
                                <li className="text-secondary">Connect with Social</li>
                                <li className="text-secondary">Connect with Social</li>
                                <li className="text-secondary">Connect with Social</li>
                                <li className="text-secondary">Connect with Social</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Footer;
