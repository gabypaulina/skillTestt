import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import {
  ChartColumn,
  Clock,
  ClockPlus,
  ShieldCheck,
  User,
  CircleDollarSign,
} from "lucide-react";
import { FaStar, FaRegStar } from "react-icons/fa";
import dataBank from "../dummy/dataBank.js";

const CardBankProduct = ({ onDetailClick }) => {
  return (
    <>
      {dataBank.map((data) => (
        <Card
          key={data.id}
          className="shadow-sm border-0 p-4 mb-3"
          style={{ borderRadius: "12px" }}
        >
          <Row className="align-items-center">
            {/* LEFT SECTION */}
            <Col
              md={3}
              sm={12}
              className="d-flex flex-column align-items-center text-center border-end mb-3 mb-md-0"
            >
              <img
                src={data.img}
                alt={data.bank}
                style={{ width: "90px", height: "auto" }}
                className="mb-3"
              />

              <div className="d-flex align-items-center justify-content-center w-100">
                {/* Rating */}
                <div className="flex-fill border-end">
                  <div className="text-warning">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
                  <small className="text-secondary">{data.reviews} Reviews</small>
                </div>

                {/* Users */}
                <div className="flex-fill">
                  <div className="text-secondary small">
                    {data.users} Users / Year
                  </div>
                </div>
              </div>
            </Col>

            {/* MIDDLE SECTION */}
            <Col md={7} sm={12} className="text-secondary small ps-md-4">
              <h5 className="fw-bold mb-2 text-capitalize">
                {data.bank}{" "}
                <span className="text-primary">{data.name}</span>
              </h5>

              <Row className="gy-2">
                <Col xs={12} md={6}>
                  <ChartColumn className="me-1" /> Fix Rate (Year):{" "}
                  <strong>{data.fixRateYear}</strong>
                </Col>
                <Col xs={12} md={6}>
                  <Clock className="me-1" /> Max Tenor:{" "}
                  <strong>{data.maxTenor}</strong>
                </Col>
                <Col xs={12} md={6}>
                  <ClockPlus className="me-1" /> Loan to Value:{" "}
                  <strong>{data.loanToValue}</strong>
                </Col>
                <Col xs={12} md={6}>
                  <ShieldCheck className="me-1" /> Jaminan:{" "}
                  {data.jaminan.length > 0 ? (
                    <span className="text-dark">
                      {data.jaminan.map((j) => j.value).join(", ")}
                    </span>
                  ) : (
                    "Tidak ada"
                  )}
                </Col>
                <Col xs={12} md={6}>
                  <User className="me-1" /> Target:{" "}
                  {data.target.length > 0 ? (
                    <span className="text-dark">
                      {data.target.map((t) => t.value).join(", ")}
                    </span>
                  ) : (
                    "Tidak ada"
                  )}
                </Col>
                <Col xs={12} md={6}>
                  <CircleDollarSign className="me-1" /> Komisi:{" "}
                  <strong>{data.komisi}</strong>
                </Col>
              </Row>
            </Col>

            {/* RIGHT SECTION */}
            <Col
              md={2}
              sm={12}
              className="d-flex justify-content-center align-items-center mt-3 mt-md-0"
            >
              <Button
                variant="outline-primary"
                size="sm"
                className="px-4 py-2"
                onClick={() => onDetailClick(data)}
              >
                Detail
              </Button>
            </Col>
          </Row>
        </Card>
      ))}
    </>
  );
};

export default CardBankProduct;
