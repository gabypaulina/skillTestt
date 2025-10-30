import React from "react";
import { Bell, IdCard, File, Handbag, Landmark } from "lucide-react";
import UserCard from "../components/UserCard";
import Category from "../components/Category";
import Progress from "../components/Progress";
import BankApproval from "../components/BankApproval";
import Notification from "../components/Notification";
import userImg from "../assets/users.png";
import "../App.css";

const Dashboard = () => {
  const user = {
    name: "yohannes affandy (jojo)",
    office: "loan market office dev",
    id: "lm9990001",
    email: "it@loanmarket.co.id",
    phone: "62812345567890",
    image: userImg,
  };

  const data = [
    { title: "contact", value: 51, icon: <IdCard size={27} className="icons-detail" /> },
    { title: "loan", value: 56, icon: <File size={27} className="icons-detail" /> },
    { title: "product", value: 80, icon: <Handbag size={27} className="icons-detail" /> },
    { title: "bank", value: 30, icon: <Landmark size={27} className="icons-detail" /> },
  ];

  const dataCards = [
    { title: "pinjaman disetujui", value: 2, total: 5, currency: false },
    { title: "target", value: 14000000000, total: 5000000000, currency: true },
  ];

  const dataBank = [
    { name: "BRI", value: 30, color: "#4A3764" },
    { name: "Artha Graha", value: 25, color: "#1FFFE1" },
    { name: "BTN", value: 20, color: "#51C4E9" },
    { name: "Mandiri", value: 15, color: "#146C94" },
    { name: "KEB Hana Bank", value: 10, color: "#6150C1" },
  ];

  const notifications = [
    { time: "2 hrs", title: "admin_branch has update", desc: "Harry Handoko - Contract | MYCRM", active: true },
    { time: "2 hrs", title: "admin_branch has update", desc: "Harry Handoko - Application | MYCRM", active: false },
    { time: "4 hrs", title: "admin_branch has update", desc: "Harry Handoko - Application | MYCRM", active: true },
    { time: "4 hrs", title: "admin_branch has update", desc: "Harry Handoko - Contract | MYCRM", active: false },
  ];

  return (
    <div className="dashboard">
      {/* HEADER */}
      <header className="bg-white border-bottom pb-2">
        <div className="bg-white ps-4 pe-3 pt-3 d-flex flex-wrap align-items-center justify-content-between border-bottom">
                                <p className="fs-2 me-auto mb-2 mb-md-3">Dashboard</p>
                                <div className="dropdown-toggle border-start border-end ps-3 pe-3">
                                    <Bell size={25} className="me-2"  />
                                </div>
                                <div className="dropdown-toggle border-end ps-3 pe-3 text-uppercase">
                                    YOHANNES AFFANDY
                                </div>
                            </div>

        <div className="line border mb-4"></div>
        <UserCard user={user} />
      </header>

      {/* MAIN CONTENT */}
      <main className="p-4">
        <div className="row">
          <div className="col-12 col-lg-8 d-flex flex-column">
            <Category data={data} />
            <Progress dataCards={dataCards} />
            <BankApproval dataBank={dataBank} />
          </div>

          <div className="col-12 col-lg-4 mt-4 mt-lg-0">
            <Notification notifications={notifications} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
