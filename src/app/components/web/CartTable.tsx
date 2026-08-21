const cartItems = [
  {
    img: "/assets/img/agttools/3pcs-gardening-scissors-pruner-and-mini-folding-hand-saw-alloy-steel-construction-b0fkbf9534-1000x1000.webp",
    name: "PS Ricca3-Piece Gardening Tool Set",
    price: "₹800.00",
    total: "₹800.00",
  },
  {
    img: "/assets/img/agttools/WhatsAppImage2025-12-05at18.45.12.jpg",
    name: "PS RiccaGarden 3 Cutter Tool Set",
    price: "₹1,349.00",
    total: "₹1,349.00",
  },
  {
    img: "/assets/img/agttools/03_9bad78c5-c6a4-4aa0-af94-6b2f456da850.jpg",
    name: "PS Ricca5 Litre Green Watering Can",
    price: "₹359.00",
    total: "₹359.00",
  },
];

function QuantityStepper() {
  return (
    <div className="input-group quantity mt-4" style={{ width: 100 }}>
      <div className="input-group-btn">
        <button className="btn btn-sm btn-minus rounded-circle bg-light border">
          <i className="fa fa-minus" />
        </button>
      </div>
      <input
        type="text"
        className="form-control form-control-sm text-center border-0"
        defaultValue="1"
      />
      <div className="input-group-btn">
        <button className="btn btn-sm btn-plus rounded-circle bg-light border">
          <i className="fa fa-plus" />
        </button>
      </div>
    </div>
  );
}

export default function CartTable() {
  return (
    <>
      {/* Cart Items Table */}
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Products</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, i) => (
              <tr key={i}>
                <th scope="row">
                  <div className="d-flex align-items-center">
                    <img
                      src={item.img}
                      className="img-fluid me-5 rounded-circle"
                      style={{ width: 80, height: 80, objectFit: "cover" }}
                      alt={item.name}
                    />
                  </div>
                </th>
                <td>
                  <p className="mb-0 mt-4">{item.name}</p>
                </td>
                <td>
                  <p className="mb-0 mt-4">{item.price}</p>
                </td>
                <td>
                  <QuantityStepper />
                </td>
                <td>
                  <p className="mb-0 mt-4">{item.total}</p>
                </td>
                <td>
                  <button className="btn btn-md rounded-circle bg-light border mt-4">
                    <i className="fa fa-times text-danger" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Coupon Row */}
      <div className="mt-5">
        <input
          type="text"
          className="border-0 border-bottom rounded me-5 py-3 mb-4"
          placeholder="Coupon Code"
        />
        <button
          className="btn border-secondary rounded-pill px-4 py-3 text-primary"
          type="button"
        >
          Apply Coupon
        </button>
      </div>
    </>
  );
}
