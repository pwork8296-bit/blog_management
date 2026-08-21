const bestsellerCards = [
  { img: "3pcs-gardening-scissors-pruner-and-mini-folding-hand-saw-alloy-steel-construction-b0fkbf9534-1000x1000.webp", name: "PS Ricca3-Piece Gardening Tool Set", price: "₹800.00", stars: 5 },
  { img: "WhatsAppImage2025-12-05at18.45.12.jpg", name: "PS RiccaGarden 3 Cutter Tool Set", price: "₹1,349.00", stars: 5 },
  { img: "WhatsAppImage2025-12-04at12.54.20.jpg", name: "PS RiccaPruning Scissor & Gloves Kit", price: "₹550.00", stars: 5 },
  { img: "WhatsAppImage2025-12-04at11.05.43.jpg", name: "PS RiccaFolding Hand Saw Pruner", price: "₹420.00", stars: 5 },
  { img: "41bBiubDuCL._SL1080.jpg", name: "PS RiccaHeavy Duty Hedge Shears", price: "₹999.00", stars: 5 },
  { img: "03_9bad78c5-c6a4-4aa0-af94-6b2f456da850.jpg", name: "PS Ricca5L Green Watering Can", price: "₹359.00", stars: 5 },
];

const featuredItems = [
  { img: "1_26e58c45-6f41-4b67-a829-b6e4805ecd63.png", name: "PS Ricca5-Piece Garden Tool Set", price: "₹820.00", stars: 5 },
  { img: "1_b8dde6dc-821f-429f-a29d-e415145aa249.jpg", name: "PS RiccaAgriculture Khurpi Tool", price: "₹299.00", stars: 5 },
  { img: "WhatsAppImage2026-01-09at12.23.54.jpg", name: "PS RiccaBrass Water Spray Gun", price: "₹499.50", stars: 5 },
  { img: "ChatGPTImageJan9_2026_02_47_46PM_a2acc59d-a2a5-4991-9780-e7ebca023020.png", name: "PS RiccaHeavy Duty Gardening Axe", price: "₹799.00", stars: 5 },
];

function StarRating({ count, total = 5 }: { count: number; total?: number }) {
  return (
    <div className="d-flex my-3">
      {Array.from({ length: total }, (_, i) => (
        <i key={i} className={`fas fa-star${i < count ? " text-primary" : ""}`}></i>
      ))}
    </div>
  );
}

export default function Bestsellers() {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        {/* Section Header */}
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
          <h1 className="display-4">Bestseller Gardening Tools</h1>
          <p className="text-secondary fs-5">
            Our most popular hand pruners, garden cutters, khurpis, trowel sets, and watering tools delivered to your doorstep.
          </p>
        </div>

        <div className="row g-4">
          {/* Horizontal bestseller cards */}
          {bestsellerCards.map((p, i) => (
            <div className="col-lg-6 col-xl-4" key={i}>
              <div className="p-4 rounded bg-light">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img src={`/assets/img/agttools/${p.img}`} className="img-fluid rounded-circle w-100" style={{ height: "130px", objectFit: "cover" }} alt={p.name} />
                  </div>
                  <div className="col-6 text-start">
                    <a href="#" className="h5 d-block text-truncate" title={p.name}>{p.name}</a>
                    <StarRating count={p.stars} />
                    <h4 className="mb-3">{p.price}</h4>
                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Featured item cards */}
          {featuredItems.map((p, i) => (
            <div className="col-md-6 col-lg-6 col-xl-3" key={`feat-${i}`}>
              <div className="text-center p-3 rounded bg-light">
                <img src={`/assets/img/agttools/${p.img}`} className="img-fluid rounded w-100" style={{ height: "300px", objectFit: "contain" }} alt={p.name} />
                <div className="py-4">
                  <a href="#" className="h5 d-block text-truncate" title={p.name}>{p.name}</a>
                  <div className="d-flex my-3 justify-content-center">
                    {Array.from({ length: 5 }, (_, j) => (
                      <i key={j} className={`fas fa-star${j < p.stars ? " text-primary" : ""}`}></i>
                    ))}
                  </div>
                  <h4 className="mb-3">{p.price}</h4>
                  <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                    <i className="fa fa-shopping-bag me-2 text-primary"></i>Add to cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
