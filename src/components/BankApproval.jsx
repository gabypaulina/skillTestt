import React from "react";
import { Container } from "react-bootstrap";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import "../App.css";

const BankApproval = ({ dataBank }) => {
  const isMobile = window.innerWidth <= 767;
  const isTablet = window.innerWidth > 767 && window.innerWidth < 992;

  return (
    <div
      className="card shadow-sm mb-5"
      style={{
        padding: isMobile ? "1rem" : "2rem 2.5rem",
      }}
    >
      <Container fluid className="text-center">
        <h5 className="fw-bold mb-4">Top 5 Bank Approval Tertinggi</h5>

        <div
          className="chart-wrapper mx-auto"
          style={{
            width: "100%",
            height: isMobile ? 270 : 420, // 🔹 kecilkan di HP
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={[...dataBank].sort((a, b) => b.value - a.value)}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                startAngle={90}
                endAngle={-270}
                innerRadius={isMobile ? "40%" : "50%"}
                outerRadius={isMobile ? "68%" : "85%"}
                paddingAngle={3}
                labelLine={false}
                label={({ cx, cy, midAngle, outerRadius, percent, name, payload }) => {
                  const RAD = Math.PI / 180;
                  const x1 = cx + (outerRadius + 8) * Math.cos(-midAngle * RAD);
                  const y1 = cy + (outerRadius + 8) * Math.sin(-midAngle * RAD);
                  const x2 = cx + (outerRadius + (isMobile ? 10 : 25)) * Math.cos(-midAngle * RAD);
                  const y2 = cy + (outerRadius + (isMobile ? 10 : 25)) * Math.sin(-midAngle * RAD);
                  const x3 = isMobile ? x2 : x2 + (x2 > cx ? 70 : -70);
                  const textAnchor = x2 > cx ? "start" : "end";
                  const color = payload.color;

                  return (
                    <g>
                      {/* 🔹 Garis penghubung */}
                      <path
                        d={
                          isMobile
                            ? `M${x1},${y1} L${x2},${y2}` // hanya 1 garis di HP
                            : `M${x1},${y1} L${x2},${y2} L${x3},${y2}` // dua garis di PC/tablet
                        }
                        stroke="#bbb"
                        strokeWidth={1}
                        fill="none"
                      />

                      {/* 🔹 Persentase */}
                      <text
                        x={(isMobile ? x2 : x3) + (x2 > cx ? 6 : -6)}
                        y={y2 - (isMobile ? 2 : 4)}
                        textAnchor={textAnchor}
                        fontWeight="700"
                        fontSize={isMobile ? 11 : 18}
                        fill={color}
                      >
                        {(percent * 100).toFixed(0)}%
                      </text>

                      {/* 🔹 Nama bank */}
                      <text
                        x={(isMobile ? x2 : x3) + (x2 > cx ? 6 : -6)}
                        y={y2 + (isMobile ? 10 : 14)}
                        textAnchor={textAnchor}
                        fontSize={isMobile ? 10 : 15}
                        fill="#666"
                      >
                        {name}
                      </text>
                    </g>
                  );
                }}
              >
                {dataBank.map((item, i) => (
                  <Cell key={`cell-${i}`} fill={item.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Container>

      <style>
        {`
          @media (max-width: 767px) {
            .recharts-surface {
              transform: scale(0.85);
              transform-origin: center;
            }
          }

          @media (min-width: 768px) and (max-width: 991px) {
            .recharts-surface {
              transform: scale(0.9);
              transform-origin: center;
            }
          }

          @media (min-width: 992px) {
            .recharts-surface {
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default BankApproval;
