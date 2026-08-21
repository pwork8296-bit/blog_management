const features = [
  {
    icon: "fas fa-truck",
    title: "Fast Shipping Across India",
    desc: "Quick delivery to home & workshops",
  },
  {
    icon: "fas fa-tools",
    title: "100% Alloy Steel Tools",
    desc: "Heavy-duty, rust-resistant, durable build",
  },
  {
    icon: "fas fa-user-shield",
    title: "Secure Payment Options",
    desc: "COD & 100% safe online payment modes",
  },
  {
    icon: "fa fa-phone-alt",
    title: "Expert Customer Support",
    desc: "Support & guidance for tool selection",
  },
];

export default function Features() {
  return (
    <div className="container-fluid featurs py-5">
      <div className="container py-5">
        <div className="row g-4">
          {features.map((f, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className={`${f.icon} fa-3x text-white`}></i>
                </div>
                <div className="featurs-content text-center">
                  <h5>{f.title}</h5>
                  <p className="mb-0">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
