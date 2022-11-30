import React, { useState, useEffect , useContext } from "react";
import Toast from "./../LoadingError/Toast";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {Form} from 'react-bootstrap';


const EditCategory = (props) => {



  const [name, setName] = useState("");
 



  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form >
          <div className="content-header">
            <h2 className="content-title">Cập nhật loại sản phẩm</h2>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <>
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
                    </>
                   <div>
                    <button type="submit" className="btn btn-primary">
                        Cập nhật
                    </button>
                  </div>
               </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditCategory;
