import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function loadCart() {
  try {
    const raw = localStorage.getItem("cart");
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function money(n) {
  return `$ ${Number(n || 0).toFixed(2)}`;
}

function getItemTitle(item) {
  return item.name ?? item.title ?? "Product";
}

function getItemColor(item) {
  return item.color ?? item.variant ?? item.option ?? "";
}

function getItemDescription(item) {
  return item.description ?? "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam";
}

function getItemImage(item) {
  return item.image ?? item.img ?? item.thumbnail ?? "";
}

function getItemRating(item) {
  // supports: {rating: {rate}} or {rating: 4.5}
  const r = item?.rating?.rate ?? item?.rating;
  const num = Number(r);
  return Number.isFinite(num) ? num : 4.5;
}

export default function Checkout() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [billingSame, setBillingSame] = useState(true);

  useEffect(() => {
    setCart(loadCart());
  }, []);

  // Figma shows $6.99 shipping + “Estimated GST”
  const shipping = cart.length ? 6.99 : 0;
  const gstRate = 0.13; // adjust if your course uses a different tax rate
  const subtotal = useMemo(
    () =>
      cart.reduce((sum, item) => {
        const price = Number(item.price ?? 0);
        const qty = Number(item.quantity ?? 1);
        return sum + price * qty;
      }, 0),
    [cart]
  );
  const estimatedGst = subtotal * gstRate;
  const giftCard = 0;

  const total = subtotal + shipping + estimatedGst - giftCard;

  function incQty(index) {
    setCart((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], quantity: Number(next[index].quantity ?? 1) + 1 };
      saveCart(next);
      return next;
    });
  }

  function decQty(index) {
    setCart((prev) => {
      const next = [...prev];
      const currentQty = Number(next[index].quantity ?? 1);
      const newQty = currentQty - 1;

      if (newQty <= 0) {
        next.splice(index, 1);
      } else {
        next[index] = { ...next[index], quantity: newQty };
      }

      saveCart(next);
      return next;
    });
  }

  function placeOrder() {
    if (!cart.length) return alert("Your cart is empty.");

    const order = {
      createdAt: new Date().toISOString(),
      items: cart,
      totals: { subtotal, shipping, estimatedGst, giftCard, total },
      billingSame,
    };

    localStorage.setItem("lastOrder", JSON.stringify(order));
    localStorage.removeItem("cart");

    alert("Order placed!");
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-[#efefef]">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-6">
            {/* SHIPPING ADDRESS */}
            <section className="rounded-2xl bg-white px-10 py-8 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl font-light tracking-[0.35em] text-neutral-900">
                  SHIPPING ADDRESS
                </h2>

                <button
                  type="button"
                  className="mt-1 rounded-lg border border-neutral-400 px-5 py-1.5 text-xs font-medium text-neutral-800 hover:bg-neutral-50"
                  onClick={() => alert("Hook this to an address form later")}
                >
                  Change
                </button>
              </div>

              {/* Placeholder address (match your Figma look) */}
              <div className="mt-6 space-y-1 text-sm text-neutral-800">
                <p>John Maker</p>
                <p>123 Plae Grond Stret</p>
                <p>Vermont, California</p>
                <p>United States of America</p>
              </div>
            </section>

            {/* PAYMENT METHOD */}
            <section className="rounded-2xl bg-white px-10 py-8 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl font-light tracking-[0.35em] text-neutral-900">
                  PAYMENT METHOD
                </h2>

                <button
                  type="button"
                  className="mt-1 rounded-lg border border-neutral-400 px-5 py-1.5 text-xs font-medium text-neutral-800 hover:bg-neutral-50"
                  onClick={() => alert("Hook this to payment selection later")}
                >
                  Change
                </button>
              </div>

              <div className="mt-6 space-y-3 text-sm text-neutral-800">
                <div className="flex items-center gap-2">
                  <CardIcon />
                  <span>Mastercard ending in 1252</span>
                </div>

                <div className="flex items-center gap-2">
                  <GiftIcon />
                  <span>$ 53.21 gift card balance</span>
                </div>

                <label className="mt-2 flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={billingSame}
                    onChange={(e) => setBillingSame(e.target.checked)}
                    className="h-4 w-4 accent-neutral-900"
                  />
                  <span>Billing address same as Shipping Address</span>
                </label>
              </div>
            </section>

            {/* REVIEW YOUR BAG */}
            <section className="rounded-2xl bg-white px-10 py-8 shadow-sm">
              <h2 className="text-2xl font-light tracking-[0.35em] text-neutral-900">
                REVIEW YOUR BAG
              </h2>

              <div className="mt-8 divide-y divide-neutral-200">
                {cart.length === 0 ? (
                  <div className="py-10 text-sm text-neutral-600">
                    Your bag is empty.
                  </div>
                ) : (
                  cart.map((item, idx) => {
                    const title = getItemTitle(item);
                    const color = getItemColor(item);
                    const desc = getItemDescription(item);
                    const img = getItemImage(item);
                    const rating = getItemRating(item);
                    const price = Number(item.price ?? 0);
                    const qty = Number(item.quantity ?? 1);

                    return (
                      <div key={item.id ?? `${title}-${idx}`} className="py-8">
                        <div className="flex gap-6">
                          {/* image */}
                          <div className="h-24 w-28 shrink-0 overflow-hidden rounded-xl bg-neutral-100">
                            {img ? (
                              <img
                                src={img}
                                alt={title}
                                className="h-full w-full object-contain"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center text-xs text-neutral-500">
                                No image
                              </div>
                            )}
                          </div>

                          {/* details */}
                          <div className="min-w-0 flex-1">
                            <h3 className="text-xl font-medium text-neutral-900">
                              {title}
                            </h3>

                            {color ? (
                              <p className="mt-1 text-sm text-neutral-600">{color}</p>
                            ) : null}

                            <p className="mt-3 text-sm text-neutral-700">
                              {desc}
                            </p>

                            <div className="mt-4 flex items-center gap-3">
                              <Stars value={rating} />
                              <span className="text-sm text-emerald-700">
                                {rating.toFixed(1)} / 5
                              </span>
                            </div>

                            <p className="mt-4 text-sm text-neutral-900">
                              {money(price)}&nbsp; x &nbsp;{qty}
                            </p>
                          </div>

                          {/* qty controls */}
                          <div className="flex w-24 items-end justify-end gap-3">
                            <button
                              type="button"
                              className="text-lg font-semibold text-red-500 hover:text-red-600"
                              onClick={() => decQty(idx)}
                              aria-label="Decrease quantity"
                            >
                              –
                            </button>
                            <span className="text-sm text-neutral-900">{qty}</span>
                            <button
                              type="button"
                              className="text-lg font-semibold text-emerald-600 hover:text-emerald-700"
                              onClick={() => incQty(idx)}
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: ORDER SUMMARY */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-sm font-semibold text-neutral-900">
                Order Summary
              </h2>

              <div className="mt-4 space-y-2 text-xs text-neutral-700">
                <SummaryRow label="Items:" value={money(subtotal)} />
                <SummaryRow label="Shipping:" value={money(shipping)} />
                <SummaryRow label="Estimated GST:" value={money(estimatedGst)} />
                <SummaryRow label="Gift Card:" value={money(giftCard)} />
              </div>

              <div className="my-4 h-px bg-neutral-200" />

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-red-600">Order Total:</span>
                <span className="text-sm font-semibold text-red-600">
                  {money(total)}
                </span>
              </div>

              <button
                type="button"
                onClick={placeOrder}
                className="mt-4 w-full rounded-lg bg-neutral-900 py-2.5 text-xs font-medium text-white hover:bg-neutral-800"
              >
                Place your order
              </button>
            </div>

            {/* Back button under the card (as in Figma) */}
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-400 bg-[#efefef] px-8 py-2 text-xs font-medium text-neutral-900 hover:bg-neutral-200"
              >
                <span className="text-base leading-none">‹</span>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- small UI helpers ---------- */

function SummaryRow({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function Stars({ value }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;

  return (
    <div className="flex items-center gap-1 text-emerald-700">
      {Array.from({ length: 5 }).map((_, i) => {
        const isFull = i < full;
        const isHalf = i === full && half;

        if (isFull) return <Star key={i} fill />;
        if (isHalf) return <StarHalf key={i} />;
        return <Star key={i} />;
      })}
    </div>
  );
}

function Star({ fill }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={fill ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
      <path d="M12 2l3 7 7 .5-5.5 4.6L18 22l-6-3.6L6 22l1.5-7.9L2 9.5 9 9z" />
    </svg>
  );
}

function StarHalf() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <defs>
        <linearGradient id="half">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        d="M12 2l3 7 7 .5-5.5 4.6L18 22l-6-3.6L6 22l1.5-7.9L2 9.5 9 9z"
        fill="url(#half)"
      />
      <path d="M12 2l3 7 7 .5-5.5 4.6L18 22l-6-3.6L6 22l1.5-7.9L2 9.5 9 9z" />
    </svg>
  );
}

function CardIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 12v10H4V12" />
      <path d="M2 7h20v5H2z" />
      <path d="M12 22V7" />
      <path d="M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}