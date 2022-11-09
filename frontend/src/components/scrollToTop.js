import React from 'react'
import { useLocation } from 'react-router-dom'

const scrollToTop = ({ children }) => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return <>{children}</>
}

export default scrollToTop
