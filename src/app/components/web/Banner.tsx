export default function Banner() {
  return (
    <div className="container-fluid banner bg-secondary my-5">
      <div className="container py-5">
        <div className="row g-4 align-items-center">
          {/* Left: Text */}
          <div className="col-lg-6">
            <div className="py-4">
              <h1 className="display-3 text-white">PS Ricca3-Piece Gardening Set</h1>
              <p className="fw-normal display-4 text-dark mb-4">Pruner, Harvest Scissors &amp; Saw</p>
              <p className="mb-4 text-dark fs-5">
                Essential carbon alloy steel gardening tool kit for plant pruning, branch cutting, harvesting, and lawn maintenance.
              </p>
              <a href="#" className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5 fw-bold">
                SHOP NOW
              </a>
            </div>
          </div>

          {/* Right: Image with price badge */}
          <div className="col-lg-6">
            <div className="position-relative">
              <img src="/assets/img/agttools/3pcs-gardening-scissors-pruner-and-mini-folding-hand-saw-alloy-steel-construction-b0fkbf9534-1000x1000.webp" className="img-fluid w-100 rounded" style={{ objectFit: "cover" }} alt="PS Ricca3-Piece Gardening Tool Set" />
              <div
                className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute"
                style={{ width: "140px", height: "140px", top: 0, left: 0 }}
              >
                <div className="d-flex flex-column text-center">
                  <span className="h4 mb-0 fw-bold text-primary">₹800</span>
                  <span className="h6 text-muted mb-0">3 Tools Set</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
