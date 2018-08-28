import React, { Component } from "react"

class ShoppingCart extends Component {
  clearCarts = () => {
    const { clearCarts } = this.props
    clearCarts()
  }
  render() {
    const { carts } = this.props
    const total = this.props.carts.reduce(
      (total, ele) => total + ele.num * ele.price,
      0
    )

    const cartlist =
      carts.length === 0 ? (
        <span>请添加商品到购物车</span>
      ) : (
        carts.map(ele => (
          <li key={ele.id}>{`${ele.goodsName} - $${ele.price}x${ele.num}`}</li>
        ))
      )

    return (
      <div>
        <h2>YourCart</h2>
        <ul>{cartlist}</ul>
        {carts.length ? (
          <span>
            total:$
            {total.toFixed(2)}
          </span>
        ) : (
          ""
        )}
        <br />
        <button onClick={this.clearCarts} disabled={!carts.length}>
          check out
        </button>
      </div>
    )
  }
}

export default ShoppingCart
