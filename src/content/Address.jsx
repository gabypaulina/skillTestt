import { Save } from "lucide-react";
import React from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";

const Address = () => {
  return (
    <div className="text-start" style={{fontSize: '0.9rem'}}>
        {/* DATA KTP */}
        <Card className="">
            <Card.Header className="text-white fw-bold" style={{backgroundColor: '#005274'}}>
                Data KTP
            </Card.Header>
            <Card.Body>
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Label>Alamat Lengkap (Jalan, Komplek, RT/RW)</Form.Label>
                        <Form.Control type="text" placeholder="--Isi Alamat Lengkap--" />
                    </Col>
                    <Col md={6}>
                        <Form.Label>Kode POS</Form.Label>
                        <Form.Control type="text" placeholder="--Isi Kode POS--" />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Label>Provinsi</Form.Label>
                        <Form.Select>
                            <option>--Pilih Provinsi--</option>
                        </Form.Select>
                    </Col>
                    <Col md={6}>
                        <Form.Label>Kabupaten / Kota</Form.Label>
                        <Form.Select>
                            <option>--Pilih Kota--</option>
                        </Form.Select>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Label>Kecamatan</Form.Label>
                        <Form.Select>
                            <option>--Pilih Kecamatan--</option>
                        </Form.Select>
                    </Col>
                    <Col md={6}>
                        <Form.Label>Kelurahan</Form.Label>
                        <Form.Select>
                            <option>--Pilih Kelurahan--</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Card.Body>
        </Card>

        <div className="d-flex justify-content-between align-items-center mt-3 mb-3">
            <Form.Check
                label="Domisili Sesuai KTP"
                id="sameAsKTP"
            />
            <Button variant="danger" className="px-4">CLEAR</Button>
        </div>

        {/* DATA DOMISILI */}
        <Card className="">
            <Card.Header className="text-white fw-bold"  style={{backgroundColor: '#005274'}}>
                Data Domisili
            </Card.Header>
            <Card.Body>
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Label>Alamat Lengkap (Jalan, Komplek, RT/RW)</Form.Label>
                        <Form.Control type="text" placeholder="--Isi Alamat Lengkap--" />
                    </Col>
                    <Col md={6}>
                        <Form.Label>Kode POS</Form.Label>
                        <Form.Control type="text" placeholder="--Isi Kode POS--" />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Label>Provinsi</Form.Label>
                        <Form.Select>
                            <option>--Pilih Provinsi--</option>
                        </Form.Select>
                    </Col>
                    <Col md={6}>
                        <Form.Label>Kabupaten / Kota</Form.Label>
                        <Form.Select>
                            <option>--Pilih Kota--</option>
                        </Form.Select>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Label>Kecamatan</Form.Label>
                        <Form.Select>
                            <option>--Pilih Kecamatan--</option>
                        </Form.Select>
                    </Col>
                    <Col md={6}>
                        <Form.Label>Kelurahan</Form.Label>
                        <Form.Select>
                            <option>--Pilih Kelurahan--</option>
                        </Form.Select>
                    </Col>
                </Row>                
            </Card.Body>
        </Card>
        <div className="d-flex justify-content-between align-items-center mt-3 mb-3">
            <Form.Check
                label="Alamat tempat Bekerja / perusahaan Sesuai KTP"
                id="sameAsWork"
            />
            <Button variant="danger" className="px-4">CLEAR</Button>
        </div>
        
        {/* DATA TEMPAT BEKERJA */}
        <Card className="mb-4">
            <Card.Header className="text-white fw-bold" style={{backgroundColor: '#005274'}}>
                Data Alamat Tempat Bekerja
            </Card.Header>
            <Card.Body>
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Label>Alamat Lengkap (Jalan, Komplek, RT/RW)</Form.Label>
                        <Form.Control type="text" placeholder="--Isi Alamat Lengkap--" />
                    </Col>
                    <Col md={6}>
                        <Form.Label>Kode POS</Form.Label>
                        <Form.Control type="text" placeholder="--Isi Kode POS--" />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Label>Provinsi</Form.Label>
                        <Form.Select>
                            <option>--Pilih Provinsi--</option>
                        </Form.Select>
                    </Col>
                    <Col md={6}>
                        <Form.Label>Kabupaten / Kota</Form.Label>
                        <Form.Select>
                            <option>--Pilih Kota--</option>
                        </Form.Select>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Label>Kecamatan</Form.Label>
                        <Form.Select>
                            <option>--Pilih Kecamatan--</option>
                        </Form.Select>
                    </Col>
                    <Col md={6}>
                        <Form.Label>Kelurahan</Form.Label>
                        <Form.Select>
                            <option>--Pilih Kelurahan--</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        <div className="d-flex justify-content-end mt-3">
            <Button
                className="text-light d-flex align-items-center gap-2"
                style={{ backgroundColor: '#005274' }}
            >
                <Save size={18} /> UPDATE
            </Button>        
        </div>
    </div>
  );
};

export default Address;
