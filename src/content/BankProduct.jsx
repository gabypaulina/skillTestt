import React, { useState } from 'react'
import {Bell, UserRound, House, CreditCard, PiggyBank, Landmark} from "lucide-react";
import NavTabs from '../navigasi/Navtab';
import CatBankProduct from '../components/CatBankProduct';
import SearchBar from '../components/SearchBar';
import CardBankProduct from '../components/CardBankProduct';
import DetailProduct from './DetailProduct';
import EditProduct from './EditProduct';

const BankProduct = () => {
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [isEditing, setIsEditing] = useState(false);

   

    const dataCategory = [
        {name: "KPR dan Multiguna", icon: <House size={45}/>},
        {name: "Refinancing", icon: <UserRound size={45}/>},
        {name: "Kredit Modal Usaha dan Investasi", icon: <CreditCard size={45}/>},
        {name: "Deposito", icon: <PiggyBank size={45}/>},
        {name: "Take Over dan Bridging Loan", icon: <Landmark size={45}/>}
    ]

    return(
        <>
            <div className="">
                    {/* NAVBAR */}
                    <div className="bg-white ps-4 pe-3 pt-3 d-flex flex-wrap align-items-center justify-content-between border-bottom">
                        <p className="fs-2 me-auto mb-2 mb-md-3">Product</p>
                        <div className="dropdown-toggle border-start border-end ps-3 pe-3">
                            <Bell size={25} className="me-2"  />
                        </div>
                        <div className="dropdown-toggle border-end ps-3 pe-3 text-uppercase">
                            YOHANNES AFFANDY
                        </div>
                    </div>

                    <div className="content">
                        {selectedProduct ? (
                            isEditing ? (
                                <EditProduct
                                    data={selectedProduct}
                                    onBack={() => {
                                        setIsEditing(false);
                                        setSelectedProduct(null);
                                    }}
                                />
                            ) : (
                                <DetailProduct
                                    data={selectedProduct}
                                    onBack={() => setSelectedProduct(null)}
                                    onEdit={() => setIsEditing(true)}
                                />
                            )
                        ) : (
                            <>
                                <NavTabs />
                                <div className="p-4">
                                    <CatBankProduct dataCategory={dataCategory} />
                                    <SearchBar />
                                    <CardBankProduct onDetailClick={(product) => setSelectedProduct(product)} />
                                </div>
                            </>
                        )}

                    </div>
            </div>
        </>
    )
}

export default BankProduct