import React, { useState } from "react"
import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../UI/CommonSection"
import { Container, Row, Col } from "reactstrap"
import "./Shop.css"
import productData from "../assets/data/productData"
import ProductList from "../UI/ProductList"

const Shop = () => {

  const [products, SetProducts] = useState(productData)
  const handleFilter = e => {
    const filterValue = e.target.value
    if (filterValue === "laptop") {
      const filterProducts = productData.filter(
        (item) => item.category === "Laptop")
      SetProducts(filterProducts)
    }

    if (filterValue === "hDD") {
      const filterProducts = productData.filter(
        (item) => item.category === "HDD")
      SetProducts(filterProducts)
    }

    if (filterValue === "headphone") {
      const filterProducts = productData.filter(
        (item) => item.category === "Headphone")
      SetProducts(filterProducts)
    }

    if (filterValue === "mouse") {
      const filterProducts = productData.filter(
        (item) => item.category === "Mouse")
      SetProducts(filterProducts)
    }
    if (filterValue === "popular") {
      const filterProducts = productData.filter(
        (item) => item.category === "Popular")
      SetProducts(filterProducts)
    }
  }

  const handleSearch = e => {
    const searchItem = e.target.value
    const searchProduct = productData.filter(
      (item => item.productName.toLowerCase().includes(searchItem.toLowerCase()))
      &&
      (item => item.category.toLowerCase().includes(searchItem.toLowerCase()))
    )
    SetProducts(searchProduct)
  }
  return (
    <Helmet title={"Shop"}>
      <CommonSection title="Sản phẩm" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter_widget">
                <select onChange={handleFilter} >
                  <option>Lọc theo thể loại</option>
                  <option value="laptop">Laptop</option>
                  <option value="hDD">HDD</option>
                  <option value="headphone">Headphone</option>
                  <option value="mouse">Mouse</option>
                  <option value="popular">Popular</option>
                </select>
              </div>
            </Col>

            <Col lg="3" md="6" className='text-end'>
              <div className="filter_widget">
                <select >
                  <option>Sắp xếp theo giá</option>
                  <option value="ascd">Tăng dần</option>
                  <option value="desd">Giảm dần</option>
                </select>
              </div>
            </Col>

            <Col lg="6" md="12">
              <div className="search_box">
                <input type="text" placeholder="Tìm kiếm..." onChange={handleSearch} />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {
              products.length === 0 ?
                <h1 className="text-center fs-4">Không có sản phẩm</h1> :
                <ProductList data={products} />
            }
          </Row>
        </Container>
      </section>
    </Helmet>)
}

export default Shop
