const products = [
  { img: "/assets/img/agttools/3pcs-gardening-scissors-pruner-and-mini-folding-hand-saw-alloy-steel-construction-b0fkbf9534-1000x1000.webp", category: "Garden Tool Kits", name: "PS Ricca3-Piece Gardening Tool Set", price: "₹800.00" },
  { img: "/assets/img/agttools/WhatsAppImage2025-12-05at18.45.12.jpg", category: "Pruners & Cutters", name: "PS RiccaGarden 3 Cutter Tool Set", price: "₹1,349.00" },
  { img: "/assets/img/agttools/WhatsAppImage2025-12-04at12.54.20.jpg", category: "Garden Tool Kits", name: "PS RiccaPruning Scissor & Gloves Combo", price: "₹550.00" },
  { img: "/assets/img/agttools/WhatsAppImage2025-12-04at11.05.43.jpg", category: "Pruners & Cutters", name: "PS RiccaFolding Hand Saw Pruner", price: "₹420.00" },
  { img: "/assets/img/agttools/41bBiubDuCL._SL1080.jpg", category: "Pruners & Cutters", name: "PS RiccaHeavy Duty Hedge Shears 29 Inch", price: "₹999.00" },
  { img: "/assets/img/agttools/03_9bad78c5-c6a4-4aa0-af94-6b2f456da850.jpg", category: "Watering Cans", name: "PS Ricca5 Litre Green Watering Can", price: "₹359.00" },
  { img: "/assets/img/agttools/1_26e58c45-6f41-4b67-a829-b6e4805ecd63.png", category: "Hand Tools", name: "PS Ricca5-Piece Garden Tool Set", price: "₹820.00" },
  { img: "/assets/img/agttools/1_b8dde6dc-821f-429f-a29d-e415145aa249.jpg", category: "Hand Tools", name: "PS RiccaGarden Agriculture Khurpi", price: "₹299.00" },
  { img: "/assets/img/agttools/ChatGPTImageJan9_2026_02_47_46PM_a2acc59d-a2a5-4991-9780-e7ebca023020.png", category: "Cutters & Axes", name: "PS RiccaHeavy Duty Gardening Axe 400g", price: "₹799.00" },
];

export default function ShopProducts() {
  return (
    <div className="col-lg-9">
      <div className="row g-4 justify-content-center">

        {products.map((product, i) => (
          <div key={i} className="col-md-6 col-lg-6 col-xl-4">
            <div className="rounded position-relative fruite-item">
              <div className="fruite-img" style={{ height: "230px", overflow: "hidden" }}>
                <img
                  src={product.img}
                  className="img-fluid w-100 h-100 rounded-top"
                  style={{ objectFit: "cover" }}
                  alt={product.name}
                />
              </div>
              <div
                className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                style={{ top: 10, left: 10 }}
              >
                {product.category}
              </div>
              <div className="p-4 border border-secondary border-top-0 rounded-bottom text-start">
                <h4 className="text-truncate" title={product.name}>{product.name}</h4>
                <p className="text-truncate">
                  Durable high-grade alloy steel gardening &amp; landscaping tool.
                </p>
                <div className="d-flex justify-content-between flex-lg-wrap align-items-center">
                  <p className="text-dark fs-5 fw-bold mb-0">{product.price}</p>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary" />
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="col-12">
          <div className="pagination d-flex justify-content-center mt-5">
            <a href="#" className="rounded">&laquo;</a>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <a key={n} href="#" className={`rounded${n === 1 ? " active" : ""}`}>
                {n}
              </a>
            ))}
            <a href="#" className="rounded">&raquo;</a>
          </div>
        </div>

      </div>
    </div>
  );
}
