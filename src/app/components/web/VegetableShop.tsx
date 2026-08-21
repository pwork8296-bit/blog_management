const toolItems = [
  { img: "WhatsAppImage2025-12-05at17.28.04.jpg", name: "PS RiccaSharpCut Flower Pruner", category: "Pruner", price: "₹450.00" },
  { img: "WhatsAppImage2025-12-04at11.24.48.jpg", name: "PS RiccaSteel Edge Garden Cutter", category: "Plant Scissor", price: "₹750.00" },
  { img: "1_903dec75-73f2-4527-9df6-9297a92c1d81.jpg", name: "PS Ricca5 Piece Garden Tool Set", category: "Tool Set", price: "₹499.00" },
  { img: "1_7ad34c06-3605-4894-aa97-d7846c70107f.png", name: "PS Ricca47 Garden Tool Kit", category: "Tool Kit", price: "₹599.00" },
  { img: "2_eb6f7285-8e38-4868-80f5-799d552a3b9b.jpg", name: "PS RiccaGardening Hoe (Phawda)", category: "Hand Tool", price: "₹499.00" },
  { img: "2_ee1030d4-a33f-4e99-8c90-f3d267767c56.jpg", name: "PS RiccaGardening Secateur Pruner", category: "Flower Cutter", price: "₹520.00" },
  { img: "2_73b805f3-d1b7-4f44-aac5-9f7e3142d0a9.jpg", name: "PS RiccaShears German Cutter", category: "Garden Scissor", price: "₹449.00" },
  { img: "2_3.jpg", name: "PS RiccaHedge Shear 10 Inch", category: "Hedge Trimmer", price: "₹499.00" },
];

export default function VegetableShop() {
  return (
    <div className="container-fluid vesitable py-5">
      <div className="container py-5">
        <h1 className="mb-0">Trending Gardening Tools</h1>
        <p className="text-secondary mb-4">Popular choices for home gardening, branch pruning, landscaping &amp; tool combos.</p>
        <div className="owl-carousel vegetable-carousel justify-content-center">
          {toolItems.map((v, i) => (
            <div className="border border-primary rounded position-relative vesitable-item" key={i}>
              <div className="vesitable-img" style={{ height: "300px", overflow: "hidden" }}>
                <img
                  src={`/assets/img/agttools/${v.img}`}
                  className="img-fluid w-100 h-100 rounded-top"
                  style={{ objectFit: "contain" }}
                  alt={v.name}
                />
              </div>
              <div
                className="text-white bg-primary px-3 py-1 rounded position-absolute"
                style={{ top: "10px", right: "10px" }}
              >
                {v.category}
              </div>
              <div className="p-4 rounded-bottom text-start">
                <h4 className="text-truncate fs-6" title={v.name}>{v.name}</h4>
                {/* <p className="text-truncate">Precision-engineered high durability garden tool.</p> */}
                <div className="d-flex justify-content-between flex-lg-wrap align-items-center">
                  <p className="text-dark fs-5 fw-bold mb-0">{v.price}</p>
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
