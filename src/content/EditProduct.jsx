import React, { useState, useEffect } from "react";
import { Button, Form, Card, Row, Col, InputGroup} from "react-bootstrap";
import { ArrowLeft, Minus, Plus, Save } from "lucide-react";

const EditProduct = ({ data, onBack }) => {
    const [formData, setFormData] = useState(data || {});

    useEffect(() => {
        setFormData(data);
    }, [data]);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleNumberChange = (field, step) => {
        setFormData((prev) => ({
        ...prev,
        [field]: Math.max(0, parseFloat(prev[field] || 0) + step),
        }));
    };

    const handleCheckboxChange = (field, value) => {
        const current = formData[field] || [];
        const exists = current.some((item) => item.value === value);
        const updated = exists
            ? current.filter((item) => item.value !== value)
            : [...current, { value }];
        setFormData({ ...formData, [field]: updated });
    };

    return (
    <>
        <div className="bg-white p-4 border-bottom">
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
                <h5 className="mb-0">Edit Product</h5>
            </div>
        </div>
        <div className="p-4">
            <Card className="shadow-sm p-4">
                <Form>
                    <Row>
                        {/* KOLOM KIRI */}
                        <Col md={6}>
                            <Form.Group className="mb-4">
                                <Form.Label className="fw-bold me-3 mb-2" style={{ width: "120px" }}>
                                    Bank
                                </Form.Label>
                                <Form.Select
                                    name="bank"
                                    value={formData.bank || ""}
                                    onChange={handleChange}
                                >
                                    <option>Mandiri</option>
                                    <option>BNI</option>
                                    <option>BCA</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Label className="fw-bold me-3 mb-2" style={{ width: "120px" }}>
                                    Jenis Product
                                </Form.Label>
                                <Form.Select
                                    name="name"
                                    value={formData.name || ""}
                                    onChange={handleChange}
                                >
                                    <option>Kredit Pemilikan Rumah Secondary (KPR Secondary)</option>
                                    <option>KPR Primary</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Check
                                    type="checkbox"
                                    label="Promotional Product"
                                    checked={formData.promo || false}
                                    onChange={(e) => setFormData({ ...formData, promo: e.target.checked })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold">Jaminan</Form.Label>
                                <Row>
                                    {["Ruko", "Rumah", "Kendaraan Pribadi", "Slip Gaji", "Rukan", "Apartemen", "Sertifikat Perusahaan"].map((item) => (
                                    <Col xs={6} key={item}>
                                        <Form.Check
                                            type="checkbox"
                                            label={item}
                                            checked={formData.jaminan?.some((j) => j.value === item) || false}
                                            onChange={() => handleCheckboxChange("jaminan", item)}
                                        />
                                    </Col>
                                    ))}
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold">Target Market</Form.Label>
                                <Row>
                                    {["Pengusaha", "Profesional", "ASN", "TNI", "Karyawan", "Milienial", "POLRI", "Lainnya"].map((item) => (
                                    <Col xs={6} key={item}>
                                        <Form.Check
                                        type="checkbox"
                                        label={item}
                                        checked={formData.target?.some((t) => t.value === item) || false}
                                        onChange={() => handleCheckboxChange("target", item)}
                                        />
                                    </Col>
                                    ))}
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold">Komisi</Form.Label>
                                <InputGroup>
                                    <Button
                                        style={{backgroundColor: '#17A9E2', border: 'none'}}
                                        onClick={() => handleNumberChange("komisi", -1)}
                                    >
                                        <Minus size={16} />
                                    </Button>
                                    <Form.Control
                                        type="text"
                                        name="komisi"
                                        value={`${formData.komisi || 0}%`}
                                        readOnly
                                        className="text-center"
                                    />
                                    <Button
                                        style={{backgroundColor: '#17A9E2', border: 'none'}}
                                        onClick={() => handleNumberChange("komisi", 1)}
                                    >
                                        <Plus size={16} />
                                    </Button>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold">Appraisal</Form.Label>
                                <InputGroup>
                                    <Button
                                        style={{backgroundColor: '#17A9E2', border: 'none'}}
                                        onClick={() => handleNumberChange("appraisal", -1)}
                                    >
                                        <Minus size={16} />
                                    </Button>
                                    <Form.Control
                                        type="text"
                                        name="appraisal"
                                        value={`${formData.appraisal || 0}%`}
                                        readOnly
                                        className="text-center"
                                    />
                                    <Button
                                        style={{backgroundColor: '#17A9E2', border: 'none'}}
                                        onClick={() => handleNumberChange("appraisal", 1)}
                                    >
                                        <Plus size={16} />
                                    </Button>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold">Floating</Form.Label>
                                <InputGroup>
                                    <Button
                                        style={{backgroundColor: '#17A9E2', border: 'none'}}
                                        onClick={() => handleNumberChange("floating", -1)}
                                    >
                                        <Minus size={16} />
                                    </Button>
                                    <Form.Control
                                        type="text"
                                        name="floating"
                                        value={`${formData.floating || 0}%`}
                                        readOnly
                                        className="text-center"
                                    />
                                    <Button
                                        style={{backgroundColor: '#17A9E2', border: 'none'}}
                                        onClick={() => handleNumberChange("floating", 1)}
                                    >
                                        <Plus size={16} />
                                    </Button>
                                </InputGroup>
                            </Form.Group>
                        </Col>

                        {/* KOLOM KANAN */}
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold">Loan to Value</Form.Label>
                                <InputGroup>
                                    <Button
                                        style={{backgroundColor: '#17A9E2', border: 'none'}}
                                        onClick={() => handleNumberChange("loanToValue", -1)}
                                    >
                                        <Minus size={16} />
                                    </Button>
                                    <Form.Control
                                        type="text"
                                        name="loanToValue"
                                        value={`${formData.loanToValue || 0}%`}
                                        readOnly
                                        className="text-center"
                                    />
                                    <Button
                                        style={{backgroundColor: '#17A9E2', border: 'none'}}
                                        onClick={() => handleNumberChange("loanToValue", 1)}
                                    >
                                        <Plus size={16} />
                                    </Button>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold">Penalty Fee</Form.Label>
                                <InputGroup>
                                    <Button
                                        style={{backgroundColor: '#17A9E2', border: 'none'}}
                                        onClick={() => handleNumberChange("penalty", -1)}
                                    >
                                        <Minus size={16} />
                                    </Button>
                                    <Form.Control
                                        type="text"
                                        name="penalty"
                                        value={`${formData.penalty || 0}%`}
                                        readOnly
                                        className="text-center"
                                    />
                                    <Button
                                        style={{backgroundColor: '#17A9E2', border: 'none'}}
                                        onClick={() => handleNumberChange("penalty", 1)}
                                    >
                                        <Plus size={16} />
                                    </Button>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold">Interest Rate</Form.Label>
                                <InputGroup>
                                    <Button
                                        style={{backgroundColor: '#17A9E2', border: 'none'}}
                                        onClick={() => handleNumberChange("interestRate", -1)}
                                    >
                                        <Minus size={16} />
                                    </Button>
                                    <Form.Control
                                        type="text"
                                        name="interestRate"
                                        value={`${formData.interestRate || 0}%`}
                                        readOnly
                                        className="text-center"
                                    />
                                    <Button
                                        style={{backgroundColor: '#17A9E2', border: 'none'}}
                                        onClick={() => handleNumberChange("interestRate", 1)}
                                    >
                                        <Plus size={16} />
                                    </Button>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold">Fix Rate</Form.Label>
                                <InputGroup>
                                    <Button
                                        style={{backgroundColor: '#17A9E2', border: 'none'}}
                                        onClick={() => handleNumberChange("fixRatePercent", -1)}
                                    >
                                        <Minus size={16} />
                                    </Button>
                                    <Form.Control
                                        type="text"
                                        name="fixRatePercent"
                                        value={`${formData.fixRatePercent || 0}%`}
                                        readOnly
                                        className="text-center"
                                    />
                                    <Button
                                        style={{backgroundColor: '#17A9E2', border: 'none'}}
                                        onClick={() => handleNumberChange("fixRatePercent", 1)}
                                    >
                                        <Plus size={16} />
                                    </Button>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold">Fix Rate (Year)</Form.Label>
                                <InputGroup>
                                    <Button
                                        style={{backgroundColor: '#17A9E2', border: 'none'}}
                                        onClick={() => handleNumberChange("fixRateYear", -1)}
                                    >
                                        <Minus size={16} />
                                    </Button>
                                    <Form.Control
                                        type="text"
                                        name="fixRateYear"
                                        value={`${formData.fixRateYear || 0}`}
                                        readOnly
                                        className="text-center"
                                    />
                                    <Button
                                        style={{backgroundColor: '#17A9E2', border: 'none'}}
                                        onClick={() => handleNumberChange("fixRateYear", 1)}
                                    >
                                        <Plus size={16} />
                                    </Button>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold">Max Tenor (Year)</Form.Label>
                                <InputGroup>
                                    <Button
                                        style={{backgroundColor: '#17A9E2', border: 'none'}}
                                        onClick={() => handleNumberChange("maxTenor", -1)}
                                    >
                                        <Minus size={16} />
                                    </Button>
                                    <Form.Control
                                        type="text"
                                        name="maxTenor"
                                        value={`${formData.maxTenor || 0}`}
                                        readOnly
                                        className="text-center"
                                    />
                                    <Button
                                        style={{backgroundColor: '#17A9E2', border: 'none'}}
                                        onClick={() => handleNumberChange("maxTenor", 1)}
                                    >
                                        <Plus size={16} />
                                    </Button>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold">Keterangan</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="keterangan"
                                    value={formData.keterangan || ""}
                                    onChange={handleChange}
                                    style={{ minHeight: "100%", padding: 10, resize: 'none'}}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold">URL</Form.Label>
                                <Form.Control
                                    name="url"
                                    value={formData.url || ""}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
                <div className="ms-auto">
                    <Button
                        className="text-light d-flex align-items-center gap-2"
                        style={{ backgroundColor: '#005274' }}
                    >
                        <Save size={18} /> UPDATE
                    </Button>
                </div>
            </Card>
        </div>
    </>
  );
};

export default EditProduct;
