"use client";
import { useState } from "react";

interface Product {
  img: string;
  category: string;
  name: string;
  price: string;
  tab: string[];
}

const products: Product[] = [
  { img: "3pcs-gardening-scissors-pruner-and-mini-folding-hand-saw-alloy-steel-construction-b0fkbf9534-1000x1000.webp", category: "Garden Tool Kits", name: "PS Ricca3-Piece Gardening Tool Set with Pruner & Saw", price: "₹800.00", tab: ["all", "kits"] },
  { img: "WhatsAppImage2025-12-05at18.45.12.jpg", category: "Cutters & Pruners", name: "PS RiccaGarden 3 Cutter Tool Set | Plant Pruning Scissor", price: "₹1,349.00", tab: ["all", "cutters"] },
  { img: "WhatsAppImage2025-12-04at12.54.20.jpg", category: "Garden Tool Kits", name: "PS RiccaGarden Tool Kit | Heavy-Duty Pruning Scissor & Gloves", price: "₹550.00", tab: ["all", "kits"] },
  { img: "WhatsAppImage2025-12-04at11.05.43.jpg", category: "Cutters & Pruners", name: "PS RiccaFolding Hand Saw Pruner Tree Branch Cutter", price: "₹420.00", tab: ["all", "cutters"] },
  { img: "41bBiubDuCL._SL1080.jpg", category: "Cutters & Pruners", name: "PS RiccaHeavy Duty Hedge Shears 29 Inch for Garden Trimming", price: "₹999.00", tab: ["all", "cutters"] },
  { img: "03_9bad78c5-c6a4-4aa0-af94-6b2f456da850.jpg", category: "Watering Cans", name: "AGT® 5 Litre Green Plastic Long Spout Watering Can", price: "₹359.00", tab: ["all", "watering"] },
  { img: "01_13c53828-22eb-42a8-b023-fff4c95e8c00.jpg", category: "Garden Tool Kits", name: "AGT® Gardening Tool Combo – Pruning Shear & Hand Weeder", price: "₹620.00", tab: ["all", "kits"] },
  { img: "1_26e58c45-6f41-4b67-a829-b6e4805ecd63.png", category: "Hand Tools", name: "AGT® Garden Tool Set - 5 Tools (Weeder, Shovel, Cultivator)", price: "₹820.00", tab: ["all", "hand"] },
  { img: "1_b8dde6dc-821f-429f-a29d-e415145aa249.jpg", category: "Hand Tools", name: "AGT® Garden Khurpi Agriculture Tool", price: "₹299.00", tab: ["all", "hand"] },
  { img: "1_719e74bf-70de-4a93-bdb1-171aacb84775.jpg", category: "Hand Tools", name: "AGT® Garden Tool Set - Cultivator, Garden Fork, Trowel", price: "₹499.00", tab: ["all", "hand"] },
  { img: "WhatsAppImage2026-01-09at12.23.54.jpg", category: "Watering Cans", name: "PS RiccaHeavy Duty Brass Water Spray Gun for Garden", price: "₹499.50", tab: ["all", "watering"] },
  { img: "ChatGPTImageJan9_2026_02_47_46PM_a2acc59d-a2a5-4991-9780-e7ebca023020.png", category: "Cutters & Pruners", name: "PS RiccaHeavy Duty Gardening Axe 400g – Fibreglass Handle", price: "₹799.00", tab: ["all", "cutters"] },
];

const tabs = [
  { id: "all", label: "All Garden Tools" },
  { id: "kits", label: "Tool Kits" },
  { id: "cutters", label: "Pruners & Cutters" },
  { id: "hand", label: "Khurpi & Trowels" },
  { id: "watering", label: "Watering & Spray" },
];

export default function FruitShop() {
  const [activeTab, setActiveTab] = useState("all");
  const filtered = products.filter((p) => p.tab.includes(activeTab));

  return (
    <div className="container-fluid fruite py-5">
      <div className="container py-5">
        <div className="tab-class text-center">
          {/* Header Row */}
          <div className="row g-4">
            <div className="col-lg-4 text-start">
              <h1>Gardening Tools Collection</h1>
            </div>
            <div className="col-lg-8 text-end">
              <ul className="nav nav-pills d-inline-flex text-center mb-5">
                {tabs.map((t) => (
                  <li className="nav-item" key={t.id}>
                    <a
                      href="#"
                      className={`d-flex m-2 py-2 bg-light rounded-pill${activeTab === t.id ? " active" : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab(t.id);
                      }}
                    >
                      <span className={activeTab === t.id ? "text-white" : "text-dark"} style={{ width: "150px" }}>
                        {t.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Products Grid */}
          <div className="tab-content">
            <div className="tab-pane fade show p-0 active">
              <div className="row g-4">
                {filtered.map((p, i) => (
                  <div className="col-md-6 col-lg-4 col-xl-3" key={i}>
                    <div className="rounded position-relative fruite-item">
                      <div className="fruite-img" style={{ height: "300px", overflow: "hidden" }}>
                        <img
                          src={`/assets/img/agttools/${p.img}`}
                          className="img-fluid w-100 h-100 rounded-top"
                          style={{ objectFit: "contain" }}
                          alt={p.name}
                        />
                      </div>
                      <div
                        className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                        style={{ top: "10px", left: "10px" }}
                      >
                        {p.category}
                      </div>
                      <div className="p-4 border border-secondary border-top-0 rounded-bottom text-start">
                        <h4 className="fs-6" title={p.name}>{p.name}</h4>
                        {/* <p className="text-truncate">Durable alloy steel construction for home gardening &amp; landscaping.</p> */}
                        <div className="d-flex justify-content-between flex-lg-wrap align-items-center">
                          <p className="text-dark fs-5 fw-bold mb-0">{p.price}</p>
                          <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                            <i className="fa fa-shopping-bag me-2 text-primary"></i>Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
