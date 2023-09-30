import React from 'react'
import './App.css'
import { HouseCard } from './component/HouseCard/HouseCard'
import { useListingStore } from './store/listingStore'

function App() {
  const listings = useListingStore(state => (state as any).listings)
  const getInititalFeaturedListing = useListingStore(state => (state as any).getInititalFeaturedListing)
  React.useEffect(() => {
    getInititalFeaturedListing()
  }, [])
  return (
    <>
      {
        listings.length > 0 && <div style={{ display: "flex", flexWrap: 'wrap', gap: 10, padding: '5px' }}>
          {listings.map((data: any, index: number) => (<HouseCard key={index}
            BedsTotal={(data as any)?.StandardFields.BedsTotal}
            BathsFull={(data as any)?.StandardFields.BathsFull}
            ListPrice={(data as any)?.StandardFields.ListPrice}
            BuildingAreaTotal={(data as any)?.StandardFields.BuildingAreaTotal}
            UnparsedFirstLineAddress={(data as any)?.StandardFields.UnparsedFirstLineAddress}
            StateOrProvince={(data as any)?.StandardFields.StateOrProvince}
            index={index}
          />))
          }
        </div>
      }
      {
        !listings.length && <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
          <div className='loader'></div>
        </div>
      }
    </>
  )
}

export default App
