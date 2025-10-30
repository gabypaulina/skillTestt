import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const CatBankProduct = ({ dataCategory }) => {
  return (
    <div className="mb-4">
      <Row className="g-3 justify-content-center justify-content-md-between">
        {dataCategory.map((item, i) => (
          <Col
            key={i}
            xs={6}
            sm={4}
            md={2}
            className="d-flex justify-content-center justify-content-md-start"
          >
            <Card
              className="text-center shadow-sm border-0 w-100"
              style={{
                minHeight: "130px",
                borderRadius: "12px",
                transition: "all 0.2s ease",
              }}
            >
              <Card.Body
                className="d-flex flex-column align-items-center justify-content-between"
                style={{
                  color: "#777",
                  paddingTop: "20px",
                  paddingBottom: "15px",
                }}
              >
                {/* Icon */}
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    height: "45px",
                    fontSize: "28px",
                    color: "#17A9E2",
                  }}
                >
                  {item.icon}
                </div>

                {/* Label */}
                <div
                  className="text-center fw-semibold"
                  style={{
                    fontSize: "13px",
                    minHeight: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 5px",
                  }}
                >
                  {item.name}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CatBankProduct;
