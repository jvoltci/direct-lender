import React from "react"
import './HouseCard.css'
import { property } from '../../utils/property'
import { useNavigate } from 'react-router-dom'

interface HouseCardType {
    BedsTotal: string
    BathsFull: string
    ListPrice: string
    BuildingAreaTotal: string
    UnparsedFirstLineAddress: string
    StateOrProvince: string
    index: number
}
export const HouseCard: React.FC<HouseCardType> = ({
    BedsTotal,
    BathsFull,
    ListPrice,
    BuildingAreaTotal,
    UnparsedFirstLineAddress,
    StateOrProvince,
    index }) => {
    const navigate = useNavigate()
    const imageUrl = property[index % property.length]['url']
    
    return (
        <div style={{ cursor: 'pointer' }} onClick={() => navigate(`/detail?idx=${index}`, {state: {index, url: imageUrl}})}>
            <div className="image" style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                position: 'relative'
            }} />
            <div className="placeHolder" style={{ backgroundColor: '#002451' }}>
                {UnparsedFirstLineAddress}
            </div>
            <div className="placeHolder" style={{ backgroundColor: '#223e61' }}>
                {StateOrProvince}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100px', width: '200px', backgroundColor: '#eaedf2', color: 'black', fontWeight: 'initial' }}>
                <div>Price: ${ListPrice}</div>
                <div>Bedrooms: {BedsTotal}</div>
                <div>Bathrooms: {BathsFull}</div>
                <div>Square Ft: {BuildingAreaTotal}</div>
            </div>
        </div>
    )
}