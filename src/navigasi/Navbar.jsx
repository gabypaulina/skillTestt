import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { House, IdCard, File, Handbag, Landmark, Gauge, CircleQuestionMark, Layers, Archive, Phone, Menu, ChevronDown, ChevronUp } from "lucide-react";
import logo from "../assets/logoLoan.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const handleDropdown = () => setDropdownOpen(!dropdownOpen)
  const closeSidebar = () => setIsOpen(false)

  const isActive = (path) => location.pathname === path;

  return (
    <>
        {/* SIDEBAR */}
        <div className={`sidebar-desktop sidebar-mobile ${isOpen ? "open" : ""}`}>
            <div className="sidebar-header justify-content-between align-items-center p-3">
                {/* Logo hanya tampil di layar besar */}
                <div className="text-center align-items-center mb-2">
                    <img src={logo} alt="Logo" style={{ width: "110px" }} />
                </div>
            </div>

            <ul className="nav flex-column p-3">
            <li className="nav-item mb-2">
                <Link
                    className={`nav-link ${isActive("/") ? "active" : "text-dark"}`}
                    to="/"
                    onClick={closeSidebar}
                >
                    <House size={22} className="me-2" /> Dashboard
                </Link>
            </li>
            <li className="nav-item mb-2">
                <Link
                    className={`nav-link ${isActive("/contact") ? "active" : "text-dark"}`}
                    to="/contact"
                    onClick={closeSidebar}
                >
                    <IdCard size={22} className="me-2" /> Contact
                </Link>
            </li>
            <li className="nav-item mb-2">
                <Link
                    className={`nav-link ${isActive("/loan") ? "active" : "text-dark"}`}
                    to="/loan"
                    onClick={closeSidebar}
                >
                    <File size={22} className="me-2" /> Loan
                </Link>
            </li>
            <li className="nav-item mb-2">
            <button
                className={`nav-link w-100 text-start ${
                    dropdownOpen ? "dropdown-active" : "text-dark"
                }`}
                onClick={handleDropdown}
            >
                <Handbag size={22} className="me-2" /> Product

                {dropdownOpen ? (
                    <ChevronUp size={18} className="float-end mt-1" />
                ) : (
                    <ChevronDown size={18} className="float-end mt-1" />
                )}
            </button>

            {dropdownOpen && (
                <ul className="list-unstyled ps-4 mt-2 dropdown-menu-custom">
                    <li className="mb-2">
                        <Link
                            className={`dropdown-item-custom ${
                            isActive("/bank-product") ? "active" : ""
                            }`}
                            to="/bank-product"
                            onClick={closeSidebar}
                        >
                            Bank Product
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link
                            className={`dropdown-item-custom ${
                            isActive("/product") ? "active" : ""
                            }`}
                            to="/product"
                            onClick={closeSidebar}
                        >
                            Product
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`dropdown-item-custom ${
                            isActive("/category-product") ? "active" : ""
                            }`}
                            to="/category-product"
                            onClick={closeSidebar}
                        >
                            Category Product
                        </Link>
                    </li>
                </ul>
                )}
            </li>
            <li className="nav-item mb-2">
                <Link
                    className={`nav-link ${isActive("/bank") ? "active" : "text-dark"}`}
                    to="/bank"
                    onClick={closeSidebar}
                >
                    <Landmark size={22} className="me-2" /> Bank
                </Link>
            </li>
            <li className="nav-item mb-2">
                <Link
                    className={`nav-link ${isActive("/credit") ? "active" : "text-dark"}`}
                    to="/credit"
                    onClick={closeSidebar}
                >
                    <Gauge size={22} className="me-2" /> Credit Scoring
                </Link>
            </li>
            <li className="nav-item mb-2">
                <Link
                    className={`nav-link ${isActive("/faq") ? "active" : "text-dark"}`}
                    to="/faq"
                    onClick={closeSidebar}
                >
                    <CircleQuestionMark size={22} className="me-2" /> FAQ's
                </Link>
            </li>
            <li className="nav-item mb-2">
                <Link
                    className={`nav-link ${isActive("/pipeline") ? "active" : "text-dark"}`}
                    to="/pipeline"
                    onClick={closeSidebar}
                >
                    <Layers size={22} className="me-2" /> Pipeline
                </Link>
            </li>
            <li className="nav-item mb-2">
                <Link
                    className={`nav-link ${isActive("/pipeline-dev") ? "active" : "text-dark"}`}
                    to="/pipeline-dev"
                    onClick={closeSidebar}
                >
                    <Layers size={22} className="me-2" /> Pipeline Developer
                </Link>
            </li>
            <li className="nav-item mb-2">
                <Link
                    className={`nav-link ${isActive("/marketing") ? "active" : "text-dark"}`}
                    to="/marketing"
                    onClick={closeSidebar}
                >
                    <Archive size={22} className="me-2" /> Marketing Tools
                </Link>
            </li>
            <li className="nav-item mb-2">
                <Link
                    className={`nav-link ${isActive("/whatsapp") ? "active" : "text-dark"}`}
                    to="/whatsapp"
                    onClick={closeSidebar}
                >
                    <Phone size={22} className="me-2" /> Whatsapp
                </Link>
            </li>
            </ul>
        </div>

        {/* Overlay (gelap di belakang sidebar mobile) */}
        {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>}

        {/* ===== TOP NAVBAR UNTUK MOBILE ===== */}
        <div className="mobile-navbar d-lg-none d-flex justify-content-between align-items-center px-3 border-bottom bg-white position-fixed top-0 start-0 w-100">
            <img src={logo} alt="Logo" style={{ width: "50px" }} />
            <button className="btn btn-link text-dark" onClick={() => setIsOpen(true)}>
                <Menu size={28} />
            </button>
        </div>
    </>
  );
};

export default Navbar;
