const testimonials = [
  {
    text: "Ordered the 108-piece socket set and PS Ricca3-piece gardening tool set. Outstanding build quality, robust steel, and super fast delivery within 2 days!",
    img: "avatar-1.jpg",
    name: "Pooja Sharma",
    profession: "Home & Garden Owner",
    stars: 5,
  },
  {
    text: "PS RiccaTools pruning shears and car washing spray gun are top-notch. Sharp blades, comfortable grip, and fantastic value for money.",
    img: "avatar-1.jpg",
    name: "Rohan Verma",
    profession: "Landscaping Enthusiast",
    stars: 5,
  },
  {
    text: "Great experience buying heavy duty hedge shears and watering can. The alloy steel construction feels extremely durable.",
    img: "avatar-1.jpg",
    name: "Ananya Gupta",
    profession: "Professional Workshop Owner",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="container-fluid testimonial py-5">
      <div className="container py-5">
        <div className="testimonial-header text-center">
          <h4 className="text-primary">Our Testimonial</h4>
          <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
        </div>

        {/* Owl Carousel — items are rendered; carousel init happens via main.js */}
        <div className="owl-carousel testimonial-carousel">
          {testimonials.map((t, i) => (
            <div className="testimonial-item img-border-radius bg-light rounded p-4" key={i}>
              <div className="position-relative">
                <i
                  className="fa fa-quote-right fa-2x text-secondary position-absolute"
                  style={{ bottom: "30px", right: 0 }}
                ></i>
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">{t.text}</p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  {/* <div className="bg-secondary rounded">
                    <img
                      src={`/assets/img/${t.img}`}
                      className="img-fluid rounded"
                      style={{ width: "100px", height: "100px" }}
                      alt={t.name}
                    />
                  </div> */}
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">{t.name}</h4>
                    <p className="m-0 pb-3">{t.profession}</p>
                    <div className="d-flex pe-5">
                      {Array.from({ length: 5 }, (_, j) => (
                        <i key={j} className={`fas fa-star${j < t.stars ? " text-primary" : ""}`}></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
