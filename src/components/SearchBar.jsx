import React from "react";
import { Form, InputGroup, Button, Dropdown, Row, Col } from "react-bootstrap";
import { Search, ArrowDownZA, ChevronDown, ArrowDownUp, Plus } from "lucide-react";

const SearchBar = () => {
    return (
        <>
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                <div className="position-relative mb-2 mb-md-0" style={{ flex: "1 1 auto", maxWidth: "100%" }}>
                    <Form.Control
                        type="text"
                        placeholder="Cari berdasarkan nama"
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
                <Dropdown>
                    <Dropdown.Toggle
                        variant="light"
                        className=" ms-md-3 mt-2 mt-md-0 rounded-3 border fw-semibold text-dark px-3 py-2  text-start"
                    >
                        Kredit Pemilikan...
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>KPR</Dropdown.Item>
                        <Dropdown.Item>Refinancing</Dropdown.Item>
                        <Dropdown.Item>Modal Usaha</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Button
                    variant="transparent"
                    className="d-flex align-items-center ms-md-3 mt-2 mt-md-0 border rounded-3 shadow-sm"
                    style={{ height: "40px", padding: "0 15px" }}
                >
                    <ArrowDownZA size={18} className="me-2" />
                    <span>Sort</span>
                </Button>
                <Button
                    variant="info"
                    className=" ms-md-3 mt-2 mt-md-0 text-white fw-semibold rounded-3 px-3 py-2  d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: "#17A9E2", border: "none" }}
                >
                    <Plus size={18} className="me-2" />
                    Tambah Product
                </Button>               
            </div>
        </>
        // <div className="bg-white py-3 px-2 rounded-3">
        //     <Row className="g-2 align-items-center">
        //         {/* Kolom Search */}
        //         <Col xs={12} md={4}>
        //             <InputGroup>
        //                 <Form.Control
        //                     placeholder="Cari berdasarkan nama produk..."
        //                     className="rounded-start-3 p-3 border-end-0"
        //                 />
        //                 <Button
        //                     variant="light"
        //                     className="border-start-0 bg-white rounded-end-3"
        //                 >
        //                     <Search size={18} />
        //                 </Button>
        //             </InputGroup>
        //         </Col>

        //         {/* Dropdown Filter */}
        //         <Col xs={12} sm={6} md="auto">
                    // <Dropdown>
                    //     <Dropdown.Toggle
                    //         variant="light"
                    //         className="rounded-3 border fw-semibold text-dark px-3 py-3 w-100 text-start"
                    //     >
                    //         Kredit Pemilikan...
                    //         <ChevronDown size={16} className="ms-2" />
                    //     </Dropdown.Toggle>

                    //     <Dropdown.Menu>
                    //         <Dropdown.Item>KPR</Dropdown.Item>
                    //         <Dropdown.Item>Refinancing</Dropdown.Item>
                    //         <Dropdown.Item>Modal Usaha</Dropdown.Item>
                    //     </Dropdown.Menu>
                    // </Dropdown>
        //         </Col>

        //         {/* Sort Button */}
        //         <Col xs={6} sm={3} md="auto">
        //             <Button
        //                 variant="light"
        //                 className="rounded-3 p-3 border fw-semibold text-dark d-flex align-items-center justify-content-center w-100"
        //             >
        //                 <ArrowDownUp size={18} className="me-2" />
        //                 Sort
        //             </Button>
        //         </Col>

        //         {/* Tambah Product Button */}
        //         <Col xs={6} sm={3} md="auto">
                    // <Button
                    //     variant="info"
                    //     className="text-white fw-semibold rounded-3 p-3 d-flex align-items-center justify-content-center w-100"
                    //     style={{ backgroundColor: "#17A9E2", border: "none" }}
                    // >
                    //     <Plus size={18} className="me-2" />
                    //     Tambah Product
                    // </Button>
        //         </Col>
        //     </Row>
        // </div>
    );
};

export default SearchBar;
