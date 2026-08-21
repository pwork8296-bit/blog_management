const categories = [
  { label: "Garden Tool Kits & Sets", count: 28 },
  { label: "Pruners, Shears & Cutters", count: 20 },
  { label: "Garden Khurpis & Trowels", count: 15 },
  { label: "Watering Cans & Sprayers", count: 12 },
  { label: "Weeders & Hand Rakes", count: 10 },
];

const featuredProducts = [
  { img: "/assets/img/agttools/3pcs-gardening-scissors-pruner-and-mini-folding-hand-saw-alloy-steel-construction-b0fkbf9534-1000x1000.webp", name: "PS Ricca3-Piece Tool Set", price: "₹800.00", oldPrice: "₹999.00", stars: 5 },
  { img: "/assets/img/agttools/WhatsAppImage2025-12-05at18.45.12.jpg", name: "PS RiccaGarden 3 Cutter Set", price: "₹1,349.00", oldPrice: "₹1,500.00", stars: 5 },
  { img: "/assets/img/agttools/03_9bad78c5-c6a4-4aa0-af94-6b2f456da850.jpg", name: "PS Ricca5L Green Watering Can", price: "₹359.00", oldPrice: "₹450.00", stars: 5 },
];

function StarRating({ filled }: { filled: number }) {
  return (
    <div className="d-flex mb-2">
      {[1, 2, 3, 4, 5].map((n) => (
        <i
          key={n}
          className={`fa fa-star${n <= filled ? " text-secondary" : ""}`}
        />
      ))}
    </div>
  );
}

export default function ShopSidebar() {
  return (
    <div className="col-lg-3">
      <div className="row g-4">

        {/* Categories */}
        <div className="col-lg-12">
          <div className="mb-3">
            <h4>Garden Tool Categories</h4>
            <ul className="list-unstyled fruite-categorie">
              {categories.map((cat) => (
                <li key={cat.label}>
                  <div className="d-flex justify-content-between fruite-name">
                    <a href="#">
                      <i className="fas fa-tools me-2 text-primary" />
                      {cat.label}
                    </a>
                    <span>({cat.count})</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Price Range */}
        <div className="col-lg-12">
          <div className="mb-3">
            <h4 className="mb-2">Price (₹)</h4>
            <input
              type="range"
              className="form-range w-100"
              id="rangeInput"
              name="rangeInput"
              min={100}
              max={3000}
              defaultValue={800}
            />
            <output id="amount" htmlFor="rangeInput">₹800</output>
          </div>
        </div>

        {/* Additional Filters */}
        <div className="col-lg-12">
          <div className="mb-3">
            <h4>Garden Tool Features</h4>
            {["High-Grade Carbon Steel", "Ergonomic Anti-Slip Grip", "Rust-Resistant Blade Coating", "Multi-Tool Combos", "Lightweight & Portable"].map(
              (label, i) => (
                <div className="mb-2" key={label}>
                  <input
                    type="radio"
                    className="me-2"
                    id={`Categories-${i + 1}`}
                    name="Categories-1"
                    value={label}
                  />
                  <label htmlFor={`Categories-${i + 1}`}> {label}</label>
                </div>
              )
            )}
          </div>
        </div>

        {/* Featured Products */}
        <div className="col-lg-12">
          <h4 className="mb-3">Featured Garden Tools</h4>
          {featuredProducts.map((p, i) => (
            <div
              key={i}
              className="d-flex align-items-center justify-content-start mb-3"
            >
              <div className="rounded me-4" style={{ width: 80, height: 80, overflow: "hidden" }}>
                <img
                  src={p.img}
                  className="img-fluid rounded w-100 h-100"
                  style={{ objectFit: "cover" }}
                  alt={p.name}
                />
              </div>
              <div>
                <h6 className="mb-2 text-truncate" style={{ maxWidth: "150px" }} title={p.name}>{p.name}</h6>
                <StarRating filled={p.stars} />
                <div className="d-flex mb-2">
                  <h5 className="fw-bold me-2">{p.price}</h5>
                  <h5 className="text-danger text-decoration-line-through">
                    {p.oldPrice}
                  </h5>
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-center my-4">
            <a
              href="#"
              className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100"
            >
              View All Garden Tools
            </a>
          </div>
        </div>

        {/* Sidebar Banner */}
        <div className="col-lg-12">
          <div className="position-relative rounded overflow-hidden">
            <img
              src="/assets/img/agttools/3pcs-gardening-scissors-pruner-and-mini-folding-hand-saw-alloy-steel-construction-b0fkbf9534-1000x1000.webp"
              className="img-fluid w-100 rounded"
              style={{ height: "250px", objectFit: "cover" }}
              alt="Heavy Duty Tools Banner"
            />
            <div
              className="position-absolute p-3 rounded"
              style={{ top: "50%", left: 10, transform: "translateY(-50%)", backgroundColor: "rgba(255,255,255,0.85)" }}
            >
              <h4 className="text-primary fw-bold mb-0">
                Heavy <br /> Duty <br /> Tool Kits
              </h4>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
