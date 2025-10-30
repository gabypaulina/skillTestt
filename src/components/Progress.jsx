import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PieChart, Pie, Cell } from "recharts";
import "../App.css";

const Progress = ({ dataCards }) => {
  const getChartSize = () => {
    if (window.innerWidth < 576) return 90; // HP kecil
    if (window.innerWidth < 992) return 110; // tablet
    return 130; // desktop
  };

  return (
    <div className="card shadow-sm mb-4 p-4">
      <Container fluid>
        <Row className="g-4 text-center justify-content-center align-items-stretch">
          {dataCards.map((item, i) => {
            const percentage = Math.round((item.value / item.total) * 100);
            const chartSize = getChartSize();

            return (
              <Col
                key={i}
                xs={12}
                md={6}
                className={`d-flex flex-column align-items-center position-relative ${
                  i === 0 ? "progress-left" : "progress-right"
                }`}
              >
                <span className="fs-5 text-uppercase">{item.title}</span>
                <div className="my-3">
                  <PieChart width={chartSize} height={chartSize}>
                    <Pie
                      data={[{ name: "progress", value: percentage }]}
                      cx="50%"
                      cy="50%"
                      innerRadius={chartSize / 2 - 25}
                      outerRadius={chartSize / 2 - 15}
                      startAngle={90}
                      endAngle={90 - 3.6 * percentage}
                      cornerRadius={50}
                      dataKey="value"
                      stroke="none"
                    >
                      <Cell fill="#17A9E2" />
                    </Pie>
                    <Pie
                      data={[{ name: "remaining", value: 100 - percentage }]}
                      cx="50%"
                      cy="50%"
                      innerRadius={chartSize / 2 - 25}
                      outerRadius={chartSize / 2 - 15}
                      startAngle={90 - 3.6 * percentage}
                      endAngle={-270}
                      dataKey="value"
                      stroke="none"
                    >
                      <Cell fill="#D9D9D9" />
                    </Pie>
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      style={{ fontSize: "20px", fontWeight: "bold" }}
                    >
                      {percentage}%
                    </text>
                  </PieChart>
                </div>
                <span>
                  {item.currency
                    ? `${item.value.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })} / ${item.total.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}`
                    : `${item.value} / ${item.total} Pinjaman telah disetujui`}
                </span>
              </Col>
            );
          })}
        </Row>
      </Container>

      {/* Garis tengah (hanya muncul di tablet & desktop) */}
      <style>
        {`
          @media (min-width: 768px) {
            .progress-left::after {
              content: "";
              position: absolute;
              top: 0;
              right: 0;
              height: 100%;
              width: 1px;
              background-color: #D9D9D9;
            }
          }

          @media (max-width: 767px) {
            .progress-left::after {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Progress;
