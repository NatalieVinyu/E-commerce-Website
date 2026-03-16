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
    <div style={{ ...styles.page, background: "#f6f6f6", minHeight: "100vh", color: "#111" }}>
      <h1>Checkout</h1>

      <div style={styles.grid}>
        <form onSubmit={placeOrder} style={styles.card}>
          <h2>Shipping Info</h2>

          <label style={styles.label}>Full Name</label>
          <input style={styles.input} name="fullName" value={form.fullName} onChange={onChange} />

          <label style={styles.label}>Email</label>
          <input style={styles.input} name="email" type="email" value={form.email} onChange={onChange} />

          <label style={styles.label}>Address</label>
          <input style={styles.input} name="address" value={form.address} onChange={onChange} />

          <label style={styles.label}>City</label>
          <input style={styles.input} name="city" value={form.city} onChange={onChange} />

          <label style={styles.label}>ZIP</label>
          <input style={styles.input} name="zip" value={form.zip} onChange={onChange} />

          <button type="submit" style={styles.button}>
            Place Order
          </button>

          <div style={{ marginTop: 10 }}>
            <Link to="/">Back to Home</Link>
          </div>
        </form>

        <div style={styles.card}>
          <h2>Order Summary</h2>

          {cart.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {cart.map((item, idx) => (
                <div key={item.id ?? idx} style={{ display: "flex", justifyContent: "space-between" }}>
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

          <hr style={{ margin: "14px 0" }} />

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
    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: bold ? 800 : 400 }}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

const styles = {
  page: { maxWidth: 1000, margin: "0 auto", padding: 20 },
  grid: { display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 16 },
  card: { border: "1px solid #ddd", borderRadius: 10, padding: 16, background: "white" },
  label: { display: "block", marginTop: 10 },
  input: { width: "100%", padding: "10px 12px", marginTop: 6, borderRadius: 8, border: "1px solid #ccc" },
  button: { width: "100%", marginTop: 14, padding: "12px 14px", borderRadius: 10, border: "none", background: "#111", color: "#fff", fontWeight: 700, cursor: "pointer" },
};