import { Save, Upload, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";

const UploadDoc = () => {
    const [openCard, setOpenCard] = useState(null);

    const toggleCard = (cardName) => {
        setOpenCard(openCard === cardName ? null : cardName);
    };

    const uploadField = (id, labelText, placeholderText) => (
        <Row className="align-items-center mb-3">
            <Col xs={12} md={7} className="mb-2 mb-md-0">
                <Form.Label className="fw-bold mb-0">{labelText}</Form.Label>
            </Col>
            <Col xs={12} md={5}>
                <div className="position-relative w-100">
                <Form.Control
                    type="file"
                    id={id}
                    className="custom-upload-input"
                    title=""
                />
                <Form.Label htmlFor={id} className="custom-upload-label text-muted">
                    {placeholderText}
                </Form.Label>
                <Upload
                    size={18}
                    className="position-absolute end-0 top-50 translate-middle-y me-3 text-secondary"
                />
                </div>
            </Col>
        </Row>
    );

    return (
        <div className="text-start" style={{ fontSize: "0.9rem" }}>
            {[
                {
                    title: "Data Pribadi",
                    name: "pribadi",
                    content: (
                        <>
                            {uploadField(
                                "ktpPemohon",
                                "Fotokopi KTP Pemohon",
                                "--Upload Fotokopi KTP Pemohon--"
                            )}
                            {uploadField(
                                "ktpPasangan",
                                "Fotokopi KTP Suami / Istri",
                                "--Upload Fotokopi KTP Suami / Istri--"
                            )}
                            {uploadField(
                                "kk",
                                "Fotokopi Kartu Keluarga",
                                "--Upload Fotokopi Kartu Keluarga--"
                            )}
                            {uploadField(
                                "akteNikah",
                                "Fotokopi Akte Nikah / Cerai",
                                "--Upload Fotokopi Akte Nikah / Cerai--"
                            )}
                            {uploadField(
                                "npwp",
                                "Fotokopi NPWP Pemohon",
                                "--Upload Fotokopi NPWP Pemohon--"
                            )}
                            {uploadField(
                                "aktaPisah",
                                "Akta Pisah Harga Notaril dan didaftarkan ke KUA atau catatan sipil (Jika Ada)",
                                "--Upload Akta Pisah Harga Notaril--"
                            )}
                        </>
                    ),
                },
                {
                    title: "Data Jaminan",
                    name: "jaminan",
                    content: (
                        <>
                            {uploadField(
                                "dokJaminan",
                                "Fotokopi Dokumen Jaminan: SHM/SHGB, IMB, dan PBB tahun terakhir",
                                "--Upload Fotokopi Dokumen Jaminan--"
                            )}
                            {uploadField(
                                "suratBank",
                                "Scan Signed PDF Surat Pengajuan Bank yang Dituju, CPA, & Keterangan",
                                "--Upload PDF Surat Pengajuan--"
                            )}
                            {uploadField(
                                "perjanjianKredit",
                                "Fotokopi Perjanjian Kredit (Jika over Kredit)",
                                "--Upload Fotokopi Perjanjian Kredit--"
                            )}
                            {uploadField(
                                "ppjb",
                                "Dokumen PPJB (Jika Developer)",
                                "--Upload Dokumen PPJB--"
                            )}
                        </>
                    ),
                },
                {
                    title: "Data Keuangan",
                    name: "keuangan",
                    content: (
                        <>
                            {uploadField(
                                "spt",
                                "Fotokopi SPT / PPh21",
                                "--Upload Fotokopi SPT / PPh21--"
                            )}
                            {uploadField(
                                "slipGaji",
                                "Asli Slip Gaji / Surat Keterangan Penghasilan 1 Bulan Terakhir",
                                "--Upload Asli Slip Gaji 1 Bulan Terakhir--"
                            )}
                            {uploadField(
                                "rekening",
                                "Fotokopi R/K atau tabungan 6 bulan terakhir",
                                "--Upload Fotokopi R/K 6 bulan terakhir--"
                            )}
                            {uploadField(
                                "rekomendasi",
                                "Surat Keterangan / Rekomendasi Perusahaan",
                                "--Upload Surat Keterangan / Rekomendasi Perusahaan--"
                            )}
                        </>
                    ),
                },
                {
                    title: "Data Tambahan",
                    name: "tambahan",
                    content: (
                        <>
                            {uploadField(
                                "file1",
                                "File Kekurangan 1",
                                "--Upload File Kekurangan 1--"
                            )}
                            {uploadField(
                                "file2",
                                "File Kekurangan 2",
                                "--Upload File Kekurangan 2--"
                            )}
                        </>
                    ),
                },
            ].map((card) => (
                <Card className="mb-3" key={card.name}>
                <Card.Header
                    onClick={() => toggleCard(card.name)}
                    className="gap-2 text-white fw-bold d-flex align-items-center"
                    style={{
                        backgroundColor: "#005274",
                        cursor: "pointer",
                    }}
                >
                    {openCard === card.name ? <ChevronUp /> : <ChevronDown />}
                    {card.title}
                    
                </Card.Header>
                {openCard === card.name && (
                    <Card.Body className="pt-3 pb-2 px-3">{card.content}</Card.Body>
                )}
                </Card>
            ))}

            {/* ==== BUTTON UPDATE ==== */}
            <div className="d-flex justify-content-end mt-3 mb-4">
                <Button
                    className="text-light d-flex align-items-center gap-2 px-4 py-2"
                    style={{ backgroundColor: "#005274" }}
                >
                    <Save size={18} /> UPDATE
                </Button>
            </div>        
        </div>
    );
};

export default UploadDoc;
