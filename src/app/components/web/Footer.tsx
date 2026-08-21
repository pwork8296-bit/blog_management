import { siteConfig } from "../../config/site";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
        <div className="container py-5">
          {/* Top Row: Brand, Newsletter, Socials */}
          <div className="pb-4 mb-4" style={{ borderBottom: "1px solid rgba(226, 175, 24, 0.5)" }}>
            <div className="row g-4 align-items-center">
              <div className="col-lg-3">
                <a href="#">
                  <h1 className="text-primary mb-0">{siteConfig.name}</h1>
                  <p className="text-secondary mb-0">High Quality Gardening Tools</p>
                </a>
              </div>
              <div className="col-lg-6">
                <div className="position-relative mx-auto">
                  <input
                    className="form-control border-0 w-100 py-3 px-4 rounded-pill"
                    type="email"
                    placeholder="Enter your Email for Tool Offers"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white"
                    style={{ top: 0, right: 0 }}
                  >
                    Subscribe Now
                  </button>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="d-flex justify-content-end pt-3">
                  <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href="#" target="_blank" rel="noreferrer">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="btn btn-outline-secondary btn-md-square rounded-circle" href="#">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
                <h4 className="text-light mb-3">Why Choose Us?</h4>
                <p className="mb-4">
                  We supply high-performance, durable alloy steel gardening tools, socket wrench sets, pruning shears, and water spray guns with fast shipping across India.
                </p>
                <a href="/shop" className="btn border-secondary py-2 px-4 rounded-pill text-primary">Explore Tools</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex flex-column text-start footer-item">
                <h4 className="text-light mb-3">Tool Categories</h4>
                {["Tool Kits & Combos", "Cutters & Pruners", "Water Spray Guns", "Socket & Wrench Sets", "Watering Cans & Hose", "Gardening Accessories"].map((l) => (
                  <a key={l} className="btn-link" href="/shop">{l}</a>
                ))}
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex flex-column text-start footer-item">
                <h4 className="text-light mb-3">Quick Links</h4>
                {["About Us", "Contact Us", "Privacy Policy", "Terms of Service", "Tool Guide", "Shipping Policy"].map((l) => (
                  <a key={l} className="btn-link" href="#">{l}</a>
                ))}
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
                <h4 className="text-light mb-3">Contact Us</h4>
                <p><i className="fas fa-map-marker-alt text-primary me-2"></i>{siteConfig.address}</p>
                <p><i className="fas fa-envelope text-primary me-2"></i>{siteConfig.email}</p>
                <p><i className="fas fa-phone-alt text-primary me-2"></i>{siteConfig.phone1}</p>
                <p><i className="fas fa-phone-alt text-primary me-2"></i>{siteConfig.phone2}</p>
                <p className="mt-2 text-light">100% Secure Payment Options</p>
                <img src="/assets/img/payment.png" className="img-fluid" alt="Payment methods" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container-fluid copyright bg-dark py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <span className="text-light">
                <a href="#">
                  <i className="fas fa-copyright text-light me-2"></i>{siteConfig.name}
                </a>
                , All rights reserved.
              </span>
            </div>
            <div className="col-md-6 my-auto text-center text-md-end text-white">
              High Quality Gardening Tools &amp; Power Equipment
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
