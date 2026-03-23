import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function loadCart() {
  try {
    const raw = localStorage.getItem("cart");
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function Checkout() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  useEffect(() => {
    setCart(loadCart());
  }, []);

  const subtotal = useMemo(() => {
    return cart.reduce((sum, item) => {
      const price = Number(item.price ?? 0);
      const qty = Number(item.quantity ?? 1);
      return sum + price * qty;
    }, 0);
  }, [cart]);

  const shipping = cart.length ? 5.99 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  function onChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function placeOrder(e) {
    e.preventDefault();

    if (!cart.length) return alert("Your cart is empty.");

    for (const key of ["fullName", "email", "address", "city", "zip"]) {
      if (!form[key].trim()) return alert("Please fill in all shipping fields.");
    }

    const order = { items: cart, totals: { subtotal, shipping, tax, total }, customer: form };
    localStorage.setItem("lastOrder", JSON.stringify(order));
    localStorage.removeItem("cart");

    alert(`Order placed! Total: $${total.toFixed(2)}`);
    navigate("/");
  }

  return (
    <div className="bg-gray-400">
      <h1 className="text-4xl font-thin">Checkout</h1>

      <div >
        <form onSubmit={placeOrder}>
          <h2>Shipping Info</h2>

          <label>Full Name</label>
          <input name="fullName" value={form.fullName} onChange={onChange} />

          <label>Email</label>
          <input name="email" type="email" value={form.email} onChange={onChange} />

          <label>Address</label>
          <input name="address" value={form.address} onChange={onChange} />

          <label>City</label>
          <input name="city" value={form.city} onChange={onChange} />

          <label>ZIP</label>
          <input name="zip" value={form.zip} onChange={onChange} />

          <button type="submit">
            Place Order
          </button>

          <div>
            <Link to="/">Back to Home</Link>
          </div>
        </form>

        <div>
          <h2>Order Summary</h2>

          {cart.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <div>
              {cart.map((item, idx) => (
                <div key={item.id ?? idx}>
                  <span>
                    {(item.name ?? item.title ?? "Item")} x{item.quantity ?? 1}
                  </span>
                  <span>
                    ${(Number(item.price ?? 0) * Number(item.quantity ?? 1)).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          )}

          <hr />

          <Row label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
          <Row label="Shipping" value={`$${shipping.toFixed(2)}`} />
          <Row label="Tax" value={`$${tax.toFixed(2)}`} />
          <Row label="Total" value={`$${total.toFixed(2)}`} bold />
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, bold }) {
  return (
    <div >
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}