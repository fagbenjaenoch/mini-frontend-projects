import { useRouteError } from 'react-router-dom'

export default function ErrorPage () {
  const error = useRouteError()
  console.error(error)

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h1 className='font-bold text-3xl'>Oops!</h1>
      <p className='mb-3'>Sorry, an unexpected error has occurred</p>
      <code className='bg-gray-200 rounded-md px-2'>{error.statusText || error.message}</code>
    </div>
  )
}