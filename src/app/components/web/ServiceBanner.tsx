const services = [
  {
    img: "3pcs-gardening-scissors-pruner-and-mini-folding-hand-saw-alloy-steel-construction-b0fkbf9534-1000x1000.webp",
    bgClass: "bg-secondary",
    contentBg: "bg-primary",
    titleClass: "text-white",
    title: "Gardening Tool Kits",
    offer: "Special Combo Deals",
  },
  {
    img: "ChatGPTImageJan9_2026_05_24_30PM.png",
    bgClass: "bg-dark",
    contentBg: "bg-light",
    titleClass: "text-primary",
    title: "Car Wash Spray Guns",
    offer: "Up to 30% OFF",
  },
  {
    img: "41bBiubDuCL._SL1080.jpg",
    bgClass: "bg-primary",
    contentBg: "bg-secondary",
    titleClass: "text-white",
    title: "Hedge Shears & Cutters",
    offer: "Flat ₹200 OFF",
  },
];

export default function ServiceBanner() {
  return (
    <div className="container-fluid service py-5">
      <div className="container py-5">
        <div className="row g-4 justify-content-center">
          {services.map((s, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <a href="#">
                <div className={`service-item ${s.bgClass} rounded border border-${s.bgClass.replace("bg-", "")}`}>
                  <img src={`/assets/img/agttools/${s.img}`} className="img-fluid rounded-top w-100" style={{ height: "220px", objectFit: "cover" }} alt={s.title} />
                  <div className="px-4 rounded-bottom">
                    <div className={`service-content ${s.contentBg} text-center p-4 rounded`}>
                      <h5 className={s.titleClass}>{s.title}</h5>
                      <h3 className="mb-0">{s.offer}</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
