import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { ArrowLeft, ArrowRight, Bell } from "lucide-react";
import Address from "./Address";
import UploadDoc from "./UploadDoc";
import ChooseProduct from "./ChooseProduct";

const EditApplication = () => {
  const steps = [
    {name: 'Pinjaman', desc: ''},
    {name: 'Pekerjaan', desc: ''},
    {name: 'Alamat', desc: ''},
    {name: 'Informasi Asset', desc: ''},
    {name: 'Informasi Tambahan', desc: ''},
    {name: 'Upload Dokumen', desc: 'Silahkan upload dokumen yang dibutuhkan'},
    {name: 'Review', desc: ''},
    {name: 'Pilihan Produk & Bank', desc: 'Silahkan pilih produk bank yang sesuai'},
    {name: 'Bank Officer', desc: ''},
    {name: 'Surat Keterangan', desc: ''},
    {name: 'PDF CPA', desc: ''},
    {name: 'Summary', desc: ''},
  ];

  const [currentStep, setCurrentStep] = useState(2); // mulai di "Alamat"
  const allowedSteps = [2, 5, 7]; // hanya ini yang bisa dilihat

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const getStepColor = (index) => {
    if (index < currentStep) return "navy";
    if (index === currentStep) return "#17A9E2";
    return "#ebebeb";
  };

  const renderContent = () => {
    if (!allowedSteps.includes(currentStep)) {
      return (
        <h5 className="text-center text-muted mb-0">
          Halaman ini tidak dapat diakses.
        </h5>
      );
    }
    switch (currentStep) {
      case 2:
        return <h4 className="text-center mb-0"><Address/></h4>;
      case 5:
        return <h4 className="text-center mb-0"><UploadDoc/></h4>;
      case 7:
        return <h4 className="text-center mb-0"><ChooseProduct/></h4>;
      default:
        return null;
    }
  };

  return (
    <div className="">
        <div className="bg-white boder-bottom">
            <div className="ps-4 pe-3 pt-3 d-flex flex-wrap align-items-center justify-content-between border-bottom pb-3">
                <p className="fs-2 me-auto mb-2 mb-md-3">Edit Application</p>
                <div className="dropdown-toggle border-start border-end ps-3 pe-3">
                    <Bell size={25} className="me-2" />
                </div>
                <div className="dropdown-toggle border-end ps-3 pe-3 text-uppercase">
                    YOHANNES AFFANDY
                </div>
            </div>
        </div>

        {/* Timeline */}
        <div className="bg-white p-4" style={{height: '110px'}}>
            <div className="d-flex justify-content-between align-items-center">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="text-center flex-grow-1 position-relative"
                        style={{}}
                    >
                        <div
                            className="mx-auto rounded-circle"
                            style={{
                                position: "absolute",
                                left: '50%',
                                width: 15,
                                height: 15,
                                backgroundColor: getStepColor(index),
                                zIndex: 3,
                            }}
                        ></div>

                        <p
                            className="mt-5 mb-0 d-none d-md-block"
                            style={{
                                position: 'absolute',
                                left: '60%',
                                fontSize: "0.75rem",
                                color: index === currentStep ? "#17A9E2" : "#9e9e9e",
                                transform: "translate(-50%, -50%)",
                                width: "80px", 
                                whiteSpace: "normal", 
                                wordWrap: "break-word", 
                            }}
                        >
                            {step.name}
                        </p>

                        {index < steps.length - 1 && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: 6,
                                    left: "50%",
                                    width: "100%",
                                    height: 3,
                                    backgroundColor: getStepColor(index + 1),
                                    zIndex: 1,
                                }}
                            ></div>
                        )}
                    </div>
                ))}
            </div>
        </div>

        <div className="p-4">
            {/* JUDUL CONTENT */}
            <div className="mb-4 d-flex align-items-center justify-content-between">
                <Button
                    onClick={handleBack}
                    variant="light"
                    className="border-0 rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#17A9E2",
                        color: "white",
                    }}
                >
                    <ArrowLeft size={25} />
                </Button>
                <div className="flex-column">
                    <h5 className="mb-0 flex-grow-1 text-center">{steps[currentStep]?.name}</h5>
                    {steps[currentStep]?.desc && (
                        <p className="text-muted mt-2 mb-0 text-center" style={{ fontSize: "0.9rem" }}>
                            {steps[currentStep].desc}
                        </p>
                    )}
                </div>
                <Button
                    onClick={handleNext}
                    variant="light"
                    className="border-0 rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#17A9E2",
                        color: "white",
                    }}
                >
                    <ArrowRight size={25} />
                </Button>
            </div>

            {/* CONTENT */}
            <div className="card bg-white p-4">
                {renderContent()}
            </div>
        </div>
    </div>
  );
};

export default EditApplication;

