import React, { useEffect, useState , useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { PRODUCT_CREATE_RESET } from "../../Redux/Constants/ProductConstants";
import { createProduct } from "./../../Redux/Actions/ProductActions";
import Toast from "../LoadingError/Toast";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import {Form} from 'react-bootstrap';
import {CategoryContext} from "../../Redux/Context/CategoryContext";
import axios from "axios";

const AddProductMain = () => {
  const {
    categoryState: {categories , categoryLoading},
    getCategories
  } = useContext(CategoryContext)

  useEffect(() => getCategories() , []);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const onChangeFile = e => {
    setImg(e.target.files[0]);
  }


  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("price", price);
    formData.append("conutInStock", countInStock);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("img", img);

    setName("");
    setDescription("");
    setCountInStock(0);
    setPrice(0);
    setCategory("");

    axios
      .post("http://localhost:4000/api/products", formData)
      .catch((err) => {
        console.log(err);
      });

  };

  // const dispatch = useDispatch();

  // const productCreate = useSelector((state) => state.productCreate);
  // const { loading, error, product } = productCreate;

  // useEffect(() => {
  //   if (product) {
  //     toast.success("Product Added", ToastObjects);
  //     dispatch({ type: PRODUCT_CREATE_RESET });
  //     setName("");
  //     setDescription("");
  //     setCountInStock(0);
  //     setImage("");
  //     setPrice(0);
  //     setCategory("");
  //   }
  // }, [product, dispatch]);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(createProduct(name, price, description, image, countInStock, category));
  // };


  

  return (
    <>
      <Toast />
      
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={changeOnClick}>
          <div className="content-header">
            <h2 className="content-title">Thêm sản phẩm</h2>
          </div>
        
          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <div className="mb-4">
                    <label htmlFor="product_title" className="form-label">
                      Tên sản phẩm
                    </label>
                    <input
                      type="text"
                      placeholder="Nhập vào đây"
                      className="form-control"
                      id="product_title"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Giá
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="product_price"
                      required
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Số lượng trong kho
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="form-control"
                      id="product_price"
                      required
                      value={countInStock}
                      onChange={(e) => setCountInStock(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Mô tả</label>
                    <textarea
                      placeholder="Nhập vào đây"
                      className="form-control"
                      rows="7"
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                  <Form.Select aria-label="Default select example" type="text" id="product_category" onChange={(e) => setCategory(e.target.value)}>
                       <option>Chọn loại sản phẩm</option>
                     {categories.map(category =>
                           <option value={category._id}>{category.name}</option>
                     )}
                  </Form.Select>
                  <div className="mb-4">
                    <label className="form-label">Ảnh</label>
                    <input
                      className="form-control-file"
                      type="file"
                      onChange={onChangeFile}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                   Thêm 
                </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddProductMain;
