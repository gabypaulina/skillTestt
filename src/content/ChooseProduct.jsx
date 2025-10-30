import React, { useState } from "react";
import { Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { Search, ArrowDownZA } from "lucide-react";
import dataBank from "../dummy/dataBank";
import CardProduct from "../components/CardProduct";

const ChooseProduct = () => {
    const [search, setSearch] = useState("");
    const [sortAsc, setSortAsc] = useState(true);

    const filteredData = dataBank
        .filter((bank) =>
            bank.name.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) =>
            sortAsc
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name)
        );

    return (
        <div className="py-4 px-3">
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                <div className="position-relative mb-2 mb-md-0" style={{ flex: "1 1 auto", maxWidth: "100%" }}>
                    <Form.Control
                        type="text"
                        placeholder="Cari Nama Bank"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="rounded-3 ps-3 pe-5"
                        style={{ boxShadow: "none" }}
                    />
                    <Search
                        size={18}
                        color="#17A9E2"
                        className="position-absolute"
                        style={{
                            right: "15px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            pointerEvents: "none",
                        }}
                    />
                </div>

                <Button
                    variant="transparent"
                    onClick={() => setSortAsc(!sortAsc)}
                    className="d-flex align-items-center ms-md-3 mt-2 mt-md-0 border rounded-3 shadow-sm"
                    style={{ height: "40px", padding: "0 15px" }}
                >
                    <ArrowDownZA size={18} className="me-2" />
                    <span>Sort</span>
                </Button>
            </div>

            <Row className="g-3 justify-content-start">
                {filteredData.map((bank, index) => (
                    <Col
                        key={index}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        className="d-flex justify-content-between"
                    >
                        <CardProduct bank={bank} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ChooseProduct;
