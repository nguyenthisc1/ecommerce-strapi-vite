import { useEffect, useReducer, useRef } from "react"

export function useFetch(url, options) {
  const cache = useRef({})

  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef(false)

  const initialState = {
    error: undefined,
    data: undefined,
    loading: true
  }

  // Keep state logic separated
  const fetchReducer = (state, action) => {
    switch (action.type) {
      case "loading":
        return { ...initialState, loading: action.loading }
      case "fetched":
        return { ...initialState, data: action.payload, loading: action.loading }
      case "error":
        return { ...initialState, error: action.payload , loading: action.loading}
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    // Do nothing if the url is not given
    if (!url) return

    cancelRequest.current = false

    const fetchData = async () => {
      dispatch({ type: "loading", loading: true})

      // If a cache exists for this url, return it
      if (cache.current[url]) {
        dispatch({ type: "fetched", payload: cache.current[url], loading: false })
        return
      }

      try {
        const response = await fetch(url, options)
        if (!response.ok) {
          throw new Error(response.statusText)
        }

        const data = await response.json()
        cache.current[url] = data
        if (cancelRequest.current) return

        dispatch({ type: "fetched", payload: data, loading: false })
      } catch (error) {
        if (cancelRequest.current) return

        dispatch({ type: "error", payload: error, loading: false  })
      }
    }

    void fetchData()

    // Use the cleanup function for avoiding a possibly...
    // ...state update after the component was unmounted
    return () => {
      cancelRequest.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return state
}
