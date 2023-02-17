import React, { useState } from "react";
import EisService from "../service/EisService";
import Swal from "sweetalert2";

const PayementGateway = () => {

  

  const [data, setData] = useState({
    billerCategory: "Telcom",
    billerName: "Globe Telecom",
    phone: "",
    transferFrom: "",
    amount: "",
    paymentDate: "",
  });

  const handleDropDownBillerCategory = (e) => {

    setData({ ...data, billerCategory: e.target.value });
  };

  const handleDropDownBillerName = (e) => {
    setData({ ...data, billerName: e.target.value });
  };

  const handleChangePhone = (e) => {
    setData({ ...data, phone: e.target.value });
  };

  const handleTransferFrom = (e) => {
    setData({ ...data, transferFrom: e.target.value });
  };

  const handleAmount = (e) => {
    setData({ ...data, amount: e.target.value });
  };

  const handlePaymentDate = (e) => {
    setData({ ...data, paymentDate: e.target.value });
  };

  

  const handleButton = (e) => {
    const newData = {
      billerCategory: data.billerCategory,
      billerName: data.billerName,
      phone: data.phone,
      transferFrom: data.transferFrom,
      amount: data.amount,
      paymentDate: data.paymentDate,
    };
    console.log(newData);
    EisService.createData(newData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Details have been saved successfully",
    });
  };

  return (
    <section className="bg-dark">
      <div className="container py-5 h-100 box">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-8">
              <h2
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                  fontFamily: "monospace",
                  fontSize: "40px",
                }}
              >
                Payment-Gateway
              </h2>
              <hr></hr>

              <div id="textbox">
                <h4 className="alignleft" style={{ marginLeft: "50px" }}>
                  Biller details
                </h4>
                <h4 className="alignright" style={{ marginRight: "50px" }}>
                  BILLPAY
                </h4>
              </div>
              <hr></hr>

              <div className="row">
                <div className="col " style={{ marginLeft: "50px" }}>
                  <label htmlFor="">Biller Category:</label>
                  <select
                    value={data.billerCategory}
                    onChange={handleDropDownBillerCategory}
                    className="select"
                    style={{ marginLeft: "15px" }}
                  >
                    
                    {/* <option value={"Choose Category"}>Choose Category</option> */}
                    <option value={"Telecom"}>Telecom</option>
                    
                    <option value={"Information Technology"}>
                      Information Technology
                    </option>
                    
                    <option value={"Pharma"}>Pharma</option>
                    <option value={"Internet Service Provider"}>
                      Internet Service Provider
                    </option>



                  </select>
                </div>
                <div className="col" style={{ marginLeft: "50px" }}>
                  <label htmlFor="">Biller Name:</label>
                  <select
                    value={data.billerName}
                    onChange={handleDropDownBillerName}
                    className="select"
                    style={{ marginLeft: "15px" }}
                  >
                    
                    
                    {/* <option value={"Choose Name"}>Choose Name</option> */}
                    
                    <option value={"Globe Telecom"}>Globe Telecom</option>
                    <option value={"Smart"}>Smart</option>
                    

                    <option value={"PLTD"}>PLTD</option>
                    


                  </select>
                </div>
              </div>
          
              <div className="container">
                <div className="row">
                  <div className="col">
                    <label className="alignleft" style={{marginLeft:"25px", marginTop:"17px", marginRight:"13px"}}>Phone Number:</label>
                    <input
                  value={data.phone}
                  onChange={handleChangePhone}
                  style={{marginTop: "15px", marginLeft:"30px" }}
                  type="text"
                  id="form3Example1cg"
                  placeholder="xxxxxxxxxx"
                  className="form-control form-control-sm input"
                />
                   

                  </div>
                </div>
              </div>

              <hr></hr>

              <div style={{ marginLeft: "50px" }}>
                <h4 className="alignleft">Enter Transaction Details</h4>
              </div>
              <hr></hr>

              <div className="row">
                <div className="col" style={{ marginLeft: "50px" }}>
                  <label>Transfer From:</label>
                </div>
                <div className="col">
                  <label>Amount:</label>
                </div>
                <div className="w-100"></div>
                <div
                  className="col"
                  style={{ marginLeft: "47px", marginTop: "10px" }}
                >
                  <input
                    value={data.transferFrom}
                    onChange={handleTransferFrom}
                    type="text"
                    id="form3Example1cg"
                    placeholder="22289"
                    className="form-control form-control-sm input"
                  />
                </div>
                <div className="col" style={{ marginTop: "10px" }}>
                  <input
                    value={data.amount}
                    onChange={handleAmount}
                    type="text"
                    id="form3Example1cg"
                    placeholder="Enter Here"
                    className="form-control form-control-sm input"
                  />
                </div>
              </div>

              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-6 col-sm-3" style={{ marginLeft: "50px" }}>
                  <label>Payment Date:</label>
                </div>

                <div className="w-100"></div>

                <div
                  className="col-6 col-sm-3"
                  style={{ marginLeft: "47px", marginTop: "10px" }}
                >
                  <input
                    value={data.paymentDate}
                    onChange={handlePaymentDate}
                    type="date"
                    id="form3Example1cg"
                    placeholder="Enter Name"
                    className="form-control form-control-sm input"
                  />
                </div>
              </div>

              <hr></hr>

              <div
                className="row"
                style={{ justifyContent: "center", marginRight: "50px" }}
              >
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleButton}
                >
                  Pay →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayementGateway;
