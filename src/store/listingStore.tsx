import { create } from 'zustand'
import { featuredList } from '../services/commonApi'

export const useListingStore = create((set) => ({
  listings: [],
  addListings: (data: any) => set({ listings: data }),
  getInititalFeaturedListing: async () => {
    const lists = await featuredList()
    set({ listings: lists['D']['Results'] })
  }
}))