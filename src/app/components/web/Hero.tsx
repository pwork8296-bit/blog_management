import { siteConfig } from "../../config/site";

export default function Hero() {
  return (
    <div className="container-fluid py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          {/* Left: Heading & Search */}
          <div className="col-md-12 col-lg-7">
            <h4 className="mb-3 text-secondary">High Quality Gardening Tools &amp; Equipment</h4>
            <h1 className="mb-5 display-3 text-primary">Heavy-Duty Gardening Tools &amp; Pruners Delivered</h1>
            <div className="position-relative mx-auto">
              <input
                className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill"
                type="text"
                placeholder="Search Garden Khurpi, Pruning Shears, Trowel Set, Watering Can..."
              />
              <button
                type="submit"
                className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100"
                style={{ top: 0, right: "25%" }}
              >
                Search Now
              </button>
            </div>
          </div>

          {/* Right: Carousel */}
          <div className="col-md-12 col-lg-5">
            <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active rounded">
                  <img
                    src="/assets/img/agttools/3pcs-gardening-scissors-pruner-and-mini-folding-hand-saw-alloy-steel-construction-b0fkbf9534-1000x1000.webp"
                    className="img-fluid w-100 h-100 bg-secondary rounded"
                    style={{ height: "350px", objectFit: "cover" }}
                    alt="PS Ricca3-Piece Gardening Tool Set"
                  />
                  <a href="#" className="btn px-4 py-2 text-white rounded">Garden Tool Sets</a>
                </div>
                <div className="carousel-item rounded">
                  <img
                    src="/assets/img/agttools/WhatsAppImage2025-12-05at18.45.12.jpg"
                    className="img-fluid w-100 h-100 rounded"
                    style={{ height: "350px", objectFit: "cover" }}
                    alt="PS RiccaGarden 3 Cutter Set"
                  />
                  <a href="#" className="btn px-4 py-2 text-white rounded">Pruners &amp; Cutters</a>
                </div>
                <div className="carousel-item rounded">
                  <img
                    src="/assets/img/agttools/03_9bad78c5-c6a4-4aa0-af94-6b2f456da850.jpg"
                    className="img-fluid w-100 h-100 rounded"
                    style={{ height: "350px", objectFit: "cover" }}
                    alt="PS Ricca5L Green Watering Can"
                  />
                  <a href="#" className="btn px-4 py-2 text-white rounded">Watering Cans &amp; Hose</a>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
