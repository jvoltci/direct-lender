import React from 'react'
import { useListingStore } from '../../store/listingStore'
import './HouseDetail.css'
import { useLocation, useParams } from 'react-router-dom'

export const HouseDetail: React.FC = () => {
    const { state } = useLocation()
    let { index, url } = state

    const listings = useListingStore(state => (state as any).listings)
    const getInititalFeaturedListing = useListingStore(state => (state as any).getInititalFeaturedListing)

    const { idx } = useParams()
    React.useEffect(() => {
        getInititalFeaturedListing()
        index = idx
    }, [])
    return (
        <div>
            {
                listings.length > 0 && <div className='detailContainer'>
                    <div>
                        <div className="detailImage" style={{
                            backgroundImage: `url(${url})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            position: 'relative',
                        }} />
                    </div>
                    <div className='detail'>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f5f5f5', padding: '10px' }}>
                                {`Listing ID: ${listings[index]?.StandardFields.ListingId}`}
                            </div>
                            <div className='detailPlace'>
                                <b>Price:</b>{` $${listings[index]?.StandardFields.ListPrice}`}
                            </div>
                            <div className='detailPlace'>
                                <b>Status:</b>{` ${listings[index]?.StandardFields.MlsStatus}`}
                            </div>
                            <div className='detailPlace'>
                                <b>Bedrooms:</b>{` ${listings[index]?.StandardFields.BedsTotal}`}
                            </div>
                            <div className='detailPlace'>
                                <b>Full Baths:</b>{` ${listings[index]?.StandardFields.BathsFull}`}
                            </div>
                            <div className='detailPlace'>
                                <b>SqFt:</b>{` ${listings[index]?.StandardFields.BuildingAreaTotal}`}
                            </div>
                            <div className='detailPlace'>
                                <b>Year Built:</b>{` ${listings[index]?.StandardFields.YearBuilt}`}
                            </div>
                            <div className='detailPlace'>
                                <b>City:</b>{` ${listings[index]?.StandardFields.City}`}
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', fontWeight: 'bold', color: '#005a98' }}>
                            {listings[index]?.StandardFields.UnparsedAddress}
                        </div>
                    </div>
                </div>
            }
            {
                !listings.length && <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <div className='loader'></div>
                </div>
            }
        </div>
    )
}