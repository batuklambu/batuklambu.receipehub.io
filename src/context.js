import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'www.themealdb.com/api/json/v1/1/search.php?s='

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const AppProvider = ({ children }) => {
        const [loading, setLoading] = useState(true)
        const [searchTerm, setSearchTerm] = useState('a')
        const [receipes, setReceipies] = useState([])
      






  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
