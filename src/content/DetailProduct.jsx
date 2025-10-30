// DetailProduct.jsx
import React, { useRef, useEffect } from 'react';
import { Button, Card, Form, Row, Col } from 'react-bootstrap';
import { ArrowLeft, SquarePen, Trash2 } from 'lucide-react';

const DetailProduct = ({ data, onBack, onEdit }) => {
    const textareaRef = useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [data]);

    if (!data) return null;

    const fieldStyle = {
        backgroundColor: '#EBEBEB',
        textTransform: 'capitalize',
    };

    return (
        <>
            <div className="bg-white p-4 border-bottom align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <Button
                            onClick={onBack}
                            variant="light"
                            className="me-3 border-0 rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                            width: '40px',
                            height: '40px',
                            backgroundColor: '#17A9E2',
                            color: 'white',
                            }}
                        >
                            <ArrowLeft size={25} />
                        </Button>
                        <h5 className="mb-0">Bank Product Detail</h5>
                    </div>
                    <div className="d-flex gap-2">
                        <Button
                            className="text-light d-flex align-items-center gap-2"
                            style={{ backgroundColor: '#005274' }}
                            onClick={onEdit}
                        >
                            <SquarePen size={18} /> Edit Produk
                        </Button>
                        <Button variant="danger" className="d-flex align-items-center gap-2">
                            <Trash2 size={18} /> Delete Product
                        </Button>
                    </div>
                </div>
            </div>

            <div className="p-4">
                <Card className="shadow-sm p-4">
                    <Form>
                    {[
                        { label: 'Bank', value: data.bank },
                        { label: 'Nama Product', value: data.name },
                        {
                        label: 'Jaminan',
                        value:
                            data.jaminan?.length > 0
                            ? data.jaminan.map((j) => j.value).join(', ')
                            : 'Tidak ada jaminan',
                        },
                        {
                        label: 'Target Market',
                        value:
                            data.target?.length > 0
                            ? data.target.map((tar) => tar.value).join(', ')
                            : 'Tidak ada target',
                        },
                        { label: 'Komisi', value: `${data.komisi}%` },
                        { label: 'Appraisal', value: `${data.appraisal}%` },
                        { label: 'Floating', value: `${data.floating}%` },
                        { label: 'Loan to Value', value: `${data.loanToValue}%` },
                        { label: 'Penalty Fee', value: `${data.penalty}%` },
                        { label: 'Interest Rate', value: `${data.interestRate}%` },
                        { label: 'Fix Rate %', value: `${data.fixRatePercent}%` },
                        { label: 'Fix Rate (Year)', value: data.fixRateYear },
                        { label: 'Max Tenor (Year)', value: data.maxTenor },
                    ].map((item, idx) => (
                        <Row className="mb-3 align-items-center" key={idx}>
                            <Col md={3}>
                                <Form.Label className="fw-bold mb-0">{item.label}</Form.Label>
                            </Col>
                            <Col md={9}>
                                <Form.Control readOnly value={item.value} style={fieldStyle} />
                            </Col>
                        </Row>
                    ))}

                        <Row className="mb-3">
                            <Col md={3}>
                                <Form.Label className="fw-bold mb-0">Keterangan</Form.Label>
                            </Col>
                            <Col md={9}>
                                <Form.Control
                                    as="textarea"
                                    readOnly
                                    ref={textareaRef}
                                    value={
                                    data.keterangan ||
                                        'Belum ada keterangan tambahan untuk produk ini.'
                                    }
                                    style={{
                                        backgroundColor: '#EBEBEB',
                                        resize: 'none',
                                        overflow: 'hidden',
                                        minHeight: '100px',
                                    }}
                                />
                            </Col>
                        </Row>

                        <Row className="mb-2">
                            <Col md={3}>
                                <Form.Label className="fw-bold mb-0">URL</Form.Label>
                            </Col>
                            <Col md={9}>
                                <Form.Control readOnly value={data.url} style={fieldStyle} />
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </div>
        </>
    );
};

export default DetailProduct;
