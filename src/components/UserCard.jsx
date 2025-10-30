import React from "react";
import { Mail, Building, Phone } from "lucide-react";
import "../App.css";

const UserCard = ({ user }) => (
  <div className="user-card d-flex flex-wrap align-items-center mb-4 px-4">
    <img
      src={user.image}
      alt="Profile"
      className="rounded-circle me-3 mb-3 mb-md-0"
      style={{ width: "150px", height: "auto" }}
    />

    <div className="flex-grow-1">
      <h3 className="text-uppercase" style={{color: '#17A9E2'}}>{user.name}</h3>

      <div className="d-flex flex-column flex-md-row mt-3">
        {/* Kolom kiri */}
        <div className="d-flex flex-column pe-md-5 mb-3 mb-md-0 left-col">
          <div className="d-flex align-items-center mb-3">
            <div className="icons me-3 p-1 rounded-circle">
              <Building size={25} className="icons-detail" />
            </div>
            <span className="text-capitalize">{user.office}</span>
          </div>
          <div className="d-flex align-items-center">
            <div className="icons me-3 p-1 rounded-circle">
              <span className="icons-detail fw-bold">ID:</span>
            </div>
            <span className="text-uppercase">{user.id}</span>
          </div>
        </div>

        {/* Kolom kanan */}
        <div className="d-flex flex-column ps-md-5">
          <div className="d-flex align-items-center mb-3">
            <div className="icons me-3 p-1 rounded-circle">
              <Mail size={25} className="icons-detail" />
            </div>
            <span>{user.email}</span>
          </div>
          <div className="d-flex align-items-center">
            <div className="icons me-3 p-1 rounded-circle">
              <Phone size={25} className="icons-detail" />
            </div>
            <span>{user.phone}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default UserCard;
