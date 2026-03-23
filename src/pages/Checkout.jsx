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

function titleOf(item) {
  return item.name ?? item.title ?? "Product";
}
function colorOf(item) {
  return item.color ?? item.variant ?? item.option ?? "";
}
function descOf(item) {
  return item.description ?? "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam";
}
function imgOf(item) {
  return item.image ?? item.img ?? item.thumbnail ?? "";
}
function ratingOf(item) {
  const r = item?.rating?.rate ?? item?.rating;
  const num = Number(r);
  return Number.isFinite(num) ? num : 4.5;
}

const SECTION_TITLE =
  "text-[28px] font-light tracking-[0.55em] uppercase text-neutral-900";

export default function Checkout() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [billingSame, setBillingSame] = useState(true);

  useEffect(() => {
    setCart(loadCart());
  }, []);

  // Match Figma summary structure
  const shipping = cart.length ? 6.99 : 0;
  const gstRate = 0.13; // “Estimated GST” look from Figma
  const giftCard = 0;

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

      if (newQty <= 0) next.splice(index, 1);
      else next[index] = { ...next[index], quantity: newQty };

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
    <div className="min-h-screen bg-[#ECECEC]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">
            {/* SHIPPING ADDRESS */}
            <section className="rounded-2xl bg-white px-12 py-10 shadow-sm">
              <div className="flex items-start justify-between gap-6">
                <h2 className={SECTION_TITLE}>SHIPPING ADDRESS</h2>
                <button
                  type="button"
                  className="mt-2 rounded-xl border border-neutral-700 px-8 py-2 text-sm text-neutral-900 hover:bg-neutral-50"
                >
                  Change
                </button>
              </div>

              <div className="mt-7 space-y-2 text-lg text-neutral-900">
                <p>John Maker</p>
                <p>123 Long Street</p>
                <p>Cape Town, Western Cape</p>
                <p>8001</p>
                <p>South Africa</p>
              </div>
            </section>

            {/* PAYMENT METHOD */}
            <section className="rounded-2xl bg-white px-12 py-10 shadow-sm">
              <div className="flex items-start justify-between gap-6">
                <h2 className={SECTION_TITLE}>PAYMENT METHOD</h2>
                <button
                  type="button"
                  className="mt-2 rounded-xl border border-neutral-700 px-8 py-2 text-sm text-neutral-900 hover:bg-neutral-50"
                >
                  Change
                </button>
              </div>

              <div className="mt-7 space-y-4 text-lg text-neutral-900">
                <div className="flex items-center gap-3">
                  <CardIcon />
                  <span>
                    Mastercard <span className="text-neutral-600">ending in 1252</span>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <GiftIcon />
                  <span>
                    $ 53.21 <span className="text-neutral-600">gift card balance</span>
                  </span>
                </div>

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={billingSame}
                    onChange={(e) => setBillingSame(e.target.checked)}
                    className="h-5 w-5 accent-emerald-700"
                  />
                  <span>Billing address same as Shipping Address</span>
                </label>
              </div>
            </section>

            {/* REVIEW YOUR BAG */}
            <section className="rounded-2xl bg-white px-12 py-10 shadow-sm">
              <h2 className={SECTION_TITLE}>REVIEW YOUR BAG</h2>

              <div className="mt-10 divide-y divide-neutral-300/80">
                {cart.length === 0 ? (
                  <div className="py-16 text-lg text-neutral-600">Your bag is empty.</div>
                ) : (
                  cart.map((item, idx) => {
                    const title = titleOf(item);
                    const color = colorOf(item);
                    const desc = descOf(item);
                    const img = imgOf(item);
                    const rating = ratingOf(item);

                    const price = Number(item.price ?? 0);
                    const qty = Number(item.quantity ?? 1);

                    return (
                      <div key={item.id ?? idx} className="py-10">
                        <div className="flex items-center gap-10">
                          {/* image */}
                          <div className="h-36 w-44 shrink-0 overflow-hidden rounded-xl bg-transparent">
                            {img ? (
                              <img src={img} alt={title} className="h-full w-full object-contain" />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center text-sm text-neutral-500">
                                No image
                              </div>
                            )}
                          </div>

                          {/* details */}
                          <div className="flex-1">
                            <h3 className="text-[34px] font-medium text-neutral-900 leading-tight">
                              {title}
                            </h3>

                            <p className="mt-2 text-[22px] text-neutral-600">{color || " "}</p>

                            <p className="mt-5 max-w-xl text-[18px] leading-relaxed text-neutral-900 line-clamp-2">
                              {desc}
                            </p>

                            <div className="mt-6 flex items-center gap-8">
                              <Stars value={rating} />
                              <span className="text-[18px] font-medium text-emerald-700">
                                {rating.toFixed(1)} / 5
                              </span>
                            </div>

                            <div className="mt-8 text-[22px] text-neutral-900">
                              {money(price)} <span className="mx-2">x</span> {qty}
                            </div>
                          </div>

                          {/* qty controls */}
                          <div className="flex items-center gap-8 pr-3">
                            <button
                              type="button"
                              onClick={() => decQty(idx)}
                              className="text-[28px] font-semibold text-red-500 hover:text-red-600"
                              aria-label="Decrease quantity"
                            >
                              –
                            </button>

                            <span className="text-[18px] text-neutral-900">{qty}</span>

                            <button
                              type="button"
                              onClick={() => incQty(idx)}
                              className="text-[28px] font-semibold text-emerald-600 hover:text-emerald-700"
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

          {/* RIGHT */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h2 className="text-xl font-semibold text-neutral-900">Order Summary</h2>

              <div className="mt-6 space-y-4 text-[16px] text-neutral-600">
                <SummaryRow label="Items:" value={money(subtotal)} />
                <SummaryRow label="Shipping:" value={money(shipping)} />
                <SummaryRow label="Estimated GST:" value={money(estimatedGst)} />
                <SummaryRow label="Gift Card:" value={money(giftCard)} />
              </div>

              <div className="my-6 h-px bg-blue-200" />

              <div className="flex items-center justify-between">
                <span className="text-[20px] font-medium text-red-600">Order Total:</span>
                <span className="text-[20px] font-semibold text-red-600">{money(total)}</span>
              </div>

              <div className="my-6 h-px bg-blue-200" />

              <button
                type="button"
                onClick={placeOrder}
                className="mt-1 w-full rounded-xl bg-[#0F1A10] py-3 text-sm font-medium text-white hover:bg-[#132315]"
              >
                Place your order
              </button>
            </div>

            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-3 rounded-full border border-neutral-700 bg-[#ECECEC] px-10 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-200"
              >
                <span className="text-2xl leading-none">‹</span>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span>{label}</span>
      <span className="text-neutral-700">{value}</span>
    </div>
  );
}

function Stars({ value }) {
  // Figma looks like: 4 filled + 1 outline for 4.5
  const filled = Math.floor(Number(value) || 0);

  return (
    <div className="flex items-center gap-2 text-emerald-700">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} fill={i < filled} />
      ))}
    </div>
  );
}

function Star({ fill }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill={fill ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 2l3 7 7 .5-5.5 4.6L18 22l-6-3.6L6 22l1.5-7.9L2 9.5 9 9z" />
    </svg>
  );
}

function CardIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 12v10H4V12" />
      <path d="M2 7h20v5H2z" />
      <path d="M12 22V7" />
      <path d="M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}