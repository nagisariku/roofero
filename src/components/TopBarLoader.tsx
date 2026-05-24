import * as React from 'react'
import LoadingBar from 'react-top-loading-bar'
import { useStore } from '../store/useStore'

export default function TopBarLoader() {
  const { loadingProgress, setLoadingProgress } = useStore()
  
  React.useEffect(() => {
    // Simulate loading progress on mount
    setLoadingProgress(20)
    const t1 = setTimeout(() => setLoadingProgress(60), 200)
    const t2 = setTimeout(() => setLoadingProgress(100), 500)
    
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [setLoadingProgress])
  
  return (
    <LoadingBar
      color="#CDF660" /* Electric Lime */
      progress={loadingProgress}
      onLoaderFinished={() => setLoadingProgress(0)}
      height={3}
      shadow={true}
    />
  )
}
