import React from "react";
import { Card, Form } from "react-bootstrap";
import { Star } from "lucide-react";

const CardProduct = ({ bank }) => {
    const truncateText = (text, limit = 150) => {
        if (!text) return "";
        return text.length > limit ? text.substring(0, limit) + "..." : text;
    };

    return (
        <Card
            className="shadow-sm border-1 position-relative"
            style={{
                width: "240px",
                borderRadius: "10px",
                minHeight: "250px",
                fontSize: '0.8rem'
            }}
        >
        {/* Checkbox pojok kiri atas */}
            <Form.Check
                type="checkbox"
                className="position-absolute"
                style={{ top: "8px", left: "8px" }}
            />

            <Card.Body className="text-center">
                <div className="d-flex justify-content-center mb-2">
                    <img
                        src={bank.img}
                        alt={bank.name}
                        style={{
                            width: "120px",
                            height: "40px",
                            objectFit: "contain",
                            marginTop: "20px",
                            marginBottom: "10px",
                        }}
                    />
                </div>

                <div className="d-flex justify-content-center align-items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={18}
                            fill={i < bank.rating ? "#FFD700" : "none"}
                            stroke="#FFD700"
                        />
                    ))}
                </div>
                <small className="text-muted d-block mb-2">
                {bank.reviews.toLocaleString()} Reviews
                </small>

                <Card.Title
                    className="fw-bold text-start text-capitalize"
                    style={{ color: '#17A9E2', fontSize: '0.9rem'}}
                >
                    {bank.name}
                </Card.Title>

                <Card.Text className="text-start text-muted" style={{ fontSize: "0.7rem" }}>
                    {truncateText(bank.keterangan, 100)}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CardProduct;
