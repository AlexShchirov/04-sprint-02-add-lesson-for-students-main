import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../store'
import { selectAppErrors } from '../app-selectors'
import { setAppError } from '../app-reducer'

export const GlobalError = () => {
  const errorMessage = useAppSelector(selectAppErrors)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(setAppError(null))
    }
  }, [errorMessage])

  return <ToastContainer theme="dark" autoClose={3000} />
}
