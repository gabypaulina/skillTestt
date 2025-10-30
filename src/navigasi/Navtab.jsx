import React, { useState } from "react";

const NavTabs = () => {
    const [activeTab, setActiveTab] = useState("bank");

    return (
        <div className="pt-4 pb-0 nav-option border-bottom bg-white">
            <ul className="nav nav-underline justify-content-center">
                <li className="nav-item">
                    <button
                        className={`nav-links ${activeTab === "bank" ? "active" : ""}`}
                        onClick={() => setActiveTab("bank")}
                    >
                        <div className="fs-5">Bank</div>
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-links ${activeTab === "developer" ? "active" : ""}`}
                        onClick={() => setActiveTab("developer")}
                    >
                        <div className="fs-5">Developer</div>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default NavTabs;
