import React, { Component } from "react"
import "./products.css"
class Products extends Component {
  addToCart = id => {
    const { addToCart } = this.props
    addToCart(id)
  }
  render() {
    const { products } = this.props
    const productlist = (
      <ul>
        {products.map(ele => {
          if (ele.inventory === 0) {
            ele.inventory = ""
          }
          return (
            <li key={ele.id}>
              {ele.goodsName}- ${ele.price.toFixed(2)}{" "}
              {ele.inventory ? `x ${ele.inventory}` : ""}
              <br />
              <button
                disabled={!ele.inventory}
                onClick={() => {
                  this.addToCart(ele.productid)
                }}
              >
                {ele.inventory ? "Add to cart" : "Sold Out"}
              </button>
            </li>
          )
        })}
      </ul>
    )
    return (
      <div>
        <h2>Products</h2>
        {productlist}
      </div>
    )
  }
}

export default Products
