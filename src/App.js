import React, { Component } from "react"
import Header from "./Header/Header"
import Products from "./Products/Products"
import ShoppingCart from "./ShoppingCart/ShoppingCart"

class App extends Component {
  state = {
    products: [
      {
        id: "1",
        productid: "100",
        goodsName: "iPad 4 Mini",
        price: 500.01,
        inventory: 2
      },
      {
        id: "2",
        productid: "200",
        goodsName: "T-shirt",
        price: 100.55,
        inventory: 4
      },
      {
        id: "3",
        productid: "300",
        goodsName: "iPhone",
        price: 200.01,
        inventory: 2
      }
    ],
    carts: []
  }
  addToCart = id => {
    const { products, carts } = this.state
    const newCarts = carts.find(ele => ele.productid === id)
      ? carts.map(ele => {
          if (ele.productid === id) {
            ele.num = ele.num + 1
          }
          return ele
        })
      : [...carts, { ...products.find(ele => ele.productid === id), num: 1 }]
    this.setState({
      products: products.map(ele => {
        if (ele.productid === id) {
          ele.inventory = ele.inventory > 0 ? ele.inventory - 1 : 0
        }
        return ele
      }),

      carts: newCarts
    })
  }
  clearCarts = () => {
    this.setState({
      carts: []
    })
  }
  render() {
    const { products, carts } = this.state

    return (
      <div>
        <Header />
        <hr />
        <Products products={products} addToCart={this.addToCart} />
        <hr />
        <ShoppingCart carts={carts} clearCarts={this.clearCarts} />
      </div>
    )
  }
}

export default App
