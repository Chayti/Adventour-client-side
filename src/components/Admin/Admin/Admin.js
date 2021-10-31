import React, { useState } from "react";
import AddService from "../../AddService/AddService";
import ManageServices from "../ManageServices/ManageServices";
import "./Admin.css";

const Admin = () => {
  const [control, setControl] = useState("addService");
  return (
    <div className="admin-container">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row admin-container">
            <div className="col-md-2 ">
              <div className="admin-area p-1">
                <h6>Your Dashboard</h6>
                <div className="all-menu mt-5">
                  <li
                    onClick={() => setControl("addService")}
                    className="admin-menu p-2"
                  >
                    Add Service
                  </li>
                  <li
                    onClick={() => setControl("manageServices")}
                    className="admin-menu p-2"
                  >
                    Manage Services
                  </li>
                </div>
              </div>
            </div>
            <div className="col-md-10 text-center  text-center">
              {control === "addService" && <AddService></AddService>}
              {control === "manageServices" && <ManageServices></ManageServices>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
