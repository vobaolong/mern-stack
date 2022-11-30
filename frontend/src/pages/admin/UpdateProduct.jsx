import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getProductDetails,
  updateProduct,
} from "../../actions/productAction";
import { useAlert } from "react-alert";
import Button from "../../components/user/Button";
import MetaData from "../../components/layout/MetaData";
import {
  AccountTree,
  Description,
  Storage,
  Spellcheck,
  AttachMoney,
} from "@material-ui/icons";
import SideBar from "../../components/admin/Sidebar";
import { UPDATE_PRODUCT_RESET } from "../../constants/productConstants";
import InputField from "../../components/user/InputField";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const params = useParams();

  const { error, product } = useSelector((state) => state.productDetails);
  const productId = params.id;

  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.product);

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const categories = [
    "Laptop",
    "PC",
    "Chuột",
    "Bàn phím",
    "Tai nghe",
    "SSD",
    "Case PC",
  ];

  useEffect(() => {
    if (product && product._id !== productId) {
      dispatch(getProductDetails(productId));
    } else {
      setProductName(product.name);
      setPrice(product.price);
      setDescription(product.description);
      setCategory(product.category);
      setStock(product.stock);
      setOldImages(product.images);
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Cập nhật sản phẩm thành công");
      navigate("/admin/products");

      dispatch({ type: UPDATE_PRODUCT_RESET });
    }
  }, [
    alert,
    dispatch,
    updateError,
    navigate,
    isUpdated,
    error,
    productId,
    product,
  ]);

  const updateProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", productName);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("stock", Stock);

    images.forEach((image) => {
      myForm.append("images", image);
    });

    dispatch(updateProduct(productId, myForm));
  };

  const updateProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);
    setOldImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <MetaData title={`Sản phẩm - Admin`} />

      {/* dashboard */}
      <div className="dashboardStyle">
        <div className="sidebarStyle">
          <SideBar />
        </div>

        <div className="dashboardRightBoxStyle">
          <div className="mb-5">
            <p className="upper text-center text-2xl font-bold text-gray-400">
              CẬP NHẬT SẢN PHẨM
            </p>
          </div>

          <form
            className="w-[90%]  md:w-[50%] mx-auto shadow-lg bg-white p-10 rounded-md"
            encType="multipart/form-data"
            onSubmit={updateProductSubmitHandler}
          >
            <div className="w-full mb-2">
              <div className="flex gap-2 justify-evenly flex-col h-full ">
                <InputField
                  type="text"
                  name="productName"
                  placeholder="Vui lòng nhập tên sản phẩm"
                  Icon={Spellcheck}
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
                <InputField
                  type="number"
                  name="price"
                  placeholder="Vui lòng nhập giá sản phẩm"
                  Icon={AttachMoney}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <div className="bg-primaryBlue rounded-lg overflow-hidden w-full flex justify-start items-center">
                  <Description className="text-xl text-white mx-2" />

                  <textarea
                    className="px-3 py-2 outline-none border-2 w-full"
                    placeholder="Vui lòng nhập mô tả sản phẩm"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    cols="30"
                    rows="1"
                  ></textarea>
                </div>
                <div className="bg-primaryBlue rounded-lg overflow-hidden w-full flex justify-start items-center">
                  <AccountTree className="text-xl text-white mx-2" />
                  <select
                    value={category}
                    className="px-3 py-2 outline-none border-2 w-full"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Vui lòng chọn danh mục</option>
                    {categories?.map((category, index) => {
                      return (
                        <option key={index} value={category}>
                          {category}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <InputField
                  type="number"
                  name="stock"
                  placeholder="Vui lòng nhập số lượng sản phẩm"
                  Icon={Storage}
                  value={Stock}
                  onChange={(e) => setStock(e.target.value)}
                  min={0}
                />
                <div className="w-full flex items-center gap-5">
                  <input
                    className="avatarChoose w-full border-2 rounded-lg "
                    type="file"
                    name="avatar"
                    accept="image/*"
                    multiple
                    onChange={updateProductImagesChange}
                  />
                </div>
                <div className="text-center">
                  <p className="font-medium text-gray-400 mt-5">
                    Hình ảnh trước đó
                  </p>
                </div>
                <div className="w-full flex justify-center items-center my-5 gap-5 overflow-auto ">
                  {oldImages?.map((image, index) => (
                    <img
                      key={index}
                      className="shadow-lg w-[10vmax] h-[10vmax] tall:w-[5vmax] tall:h-[5vmax]"
                      src={image.url}
                      alt="Product Preview"
                    />
                  ))}
                </div>

                <div className="text-center">
                  <p className="font-medium text-gray-400 mt-5">
                    Cập nhật hình ảnh
                  </p>
                </div>
                <div className="w-full flex justify-center items-center my-5 gap-5 overflow-auto ">
                  {imagesPreview.map((image, index) => (
                    <img
                      key={index}
                      className="shadow-lg w-[10vmax] h-[10vmax] tall:w-[5vmax] tall:h-[5vmax]"
                      src={image}
                      alt="Product Preview"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="w-fit mx-auto">
              <Button disabled={loading ? true : false} label="Cập nhật" />
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateProduct;
