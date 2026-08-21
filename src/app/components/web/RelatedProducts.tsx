const relatedProducts = [
  { img: "/assets/img/agttools/WhatsAppImage2025-12-05at18.45.12.jpg", name: "PS RiccaGarden 3 Cutter Set", category: "Cutters", price: "₹1,349.00" },
  { img: "/assets/img/agttools/WhatsAppImage2025-12-04at12.54.20.jpg", name: "PS RiccaPruning Scissor & Gloves", category: "Tool Kit", price: "₹550.00" },
  { img: "/assets/img/agttools/WhatsAppImage2026-01-09at12.23.54.jpg", name: "PS RiccaHeavy Duty Brass Spray Gun", category: "Spray Gun", price: "₹499.50" },
  { img: "/assets/img/agttools/ChatGPTImageJan9_2026_02_47_46PM_a2acc59d-a2a5-4991-9780-e7ebca023020.png", name: "PS RiccaHeavy Duty Gardening Axe", category: "Axe", price: "₹799.00" },
  { img: "/assets/img/agttools/41bBiubDuCL._SL1080.jpg", name: "PS RiccaHeavy Duty Hedge Shears", category: "Shears", price: "₹999.00" },
  { img: "/assets/img/agttools/03_9bad78c5-c6a4-4aa0-af94-6b2f456da850.jpg", name: "PS Ricca5L Green Watering Can", category: "Watering Can", price: "₹359.00" },
];

export default function RelatedProducts() {
  return (
    <>
      <h1 className="fw-bold mb-4">Related Tools You May Like</h1>
      <div className="vesitable">
        <div className="owl-carousel vegetable-carousel justify-content-center">
          {relatedProducts.map((p, i) => (
            <div
              key={i}
              className="border border-primary rounded position-relative vesitable-item"
            >
              <div className="vesitable-img" style={{ height: "200px", overflow: "hidden" }}>
                <img
                  src={p.img}
                  className="img-fluid w-100 h-100 rounded-top"
                  style={{ objectFit: "cover" }}
                  alt={p.name}
                />
              </div>
              <div
                className="text-white bg-primary px-3 py-1 rounded position-absolute"
                style={{ top: 10, right: 10 }}
              >
                {p.category}
              </div>
              <div className="p-4 pb-0 rounded-bottom text-start">
                <h4 className="text-truncate" title={p.name}>{p.name}</h4>
                <p className="text-truncate">
                  Durable high quality alloy steel construction.
                </p>
                <div className="d-flex justify-content-between flex-lg-wrap align-items-center">
                  <p className="text-dark fs-5 fw-bold mb-4">{p.price}</p>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary" />
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
