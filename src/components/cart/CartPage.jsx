// Bag.jsx
// This is the SHOPPING CART page
// It shows all the items the user added to their bag
// Users can remove items or proceed to checkout

import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

// Props:
// - cartItems: array of products in the cart (from App.jsx state)
// - onRemoveFromCart: function to remove an item from cart
// - onClearCart: function to empty the whole cart
function Bag({ cartItems, onRemoveFromCart, onClearCart }) {

  const navigate = useNavigate()

  // Calculate the total price of all items
  // .reduce() goes through every item and adds up the prices
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0)
  const shipping = subtotal > 50 ? 0 : 9.99   // free shipping over $50
  const total = subtotal + shipping

  // If cart is empty, show a friendly message
  if (cartItems.length === 0) {
    return (
      <div className="page-container text-center py-5">
        <div style={{ fontSize: '60px' }}>🛒</div>
        <h3 className="fw-bold mt-3">Your bag is empty</h3>
        <p className="text-muted mb-4">Add some products to get started</p>
        <Button onClick={() => navigate('/')}>Continue Shopping</Button>
      </div>
    )
  }

  return (
    <div className="page-container">

      {/* Page header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold mb-0">Your Bag ({cartItems.length} items)</h2>
        <button
          className="btn btn-link text-danger text-decoration-none"
          onClick={onClearCart}
          style={{ fontSize: '13px' }}
        >
          Clear all
        </button>
      </div>

      <div className="row g-4">

        {/* LEFT - Cart items list */}
        <div className="col-lg-8">
          <div className="bg-white rounded-3 shadow-sm p-4">

            {/* Loop through each item in the cart and show it */}
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item d-flex align-items-center gap-3">

                {/* Product image thumbnail */}
                <div
                  className="bg-light rounded-2 flex-shrink-0"
                  style={{ width: '80px', height: '80px', padding: '8px' }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>

                {/* Product info */}
                <div className="flex-grow-1">
                  <h6 className="mb-0 fw-semibold">{item.name}</h6>
                  <small className="text-muted">
                    {item.selectedColor && `Color: ${item.selectedColor}`}
                  </small>
                  <div className="fw-bold mt-1">${item.price.toFixed(2)}</div>
                </div>

                {/* Remove button */}
                <button
                  className="btn btn-link text-danger text-decoration-none p-0"
                  onClick={() => onRemoveFromCart(index)}
                  style={{ fontSize: '13px' }}
                >
                  Remove
                </button>

              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - Order summary */}
        <div className="col-lg-4">
          <div className="bg-white rounded-3 shadow-sm p-4">
            <h5 className="fw-bold mb-4">Order Summary</h5>

            {/* Price breakdown */}
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Shipping</span>
              <span className={shipping === 0 ? 'text-success' : ''}>
                {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
              </span>
            </div>

            {/* Divider line */}
            <hr />

            {/* Total */}
            <div className="d-flex justify-content-between mb-4">
              <span className="fw-bold fs-5">Total</span>
              <span className="fw-bold fs-5">${total.toFixed(2)}</span>
            </div>

            {/* Checkout button */}
            <Button fullWidth onClick={() => navigate('/checkout')}>
              Proceed to Checkout
            </Button>

            {/* Continue shopping link */}
            <button
              className="btn btn-link w-100 text-muted text-decoration-none mt-2"
              onClick={() => navigate('/')}
              style={{ fontSize: '13px' }}
            >
              ← Continue Shopping
            </button>

          </div>

          {/* Free shipping notice */}
          {subtotal < 50 && (
            <div className="alert alert-info mt-3" style={{ fontSize: '13px' }}>
              Add ${(50 - subtotal).toFixed(2)} more for free shipping! 🚚
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default Bag
