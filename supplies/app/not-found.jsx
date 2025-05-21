import Link from 'next/link'

export default function notFound404page() {
  return (
    <div className='flex flex-col justify-center align-middle items-center min-h-screen text-2xl'>
    <h1 className='text-red-400'> page not found | 404</h1>
    <Link href="/" className='btn btn-ghost'>Back to home</Link>
    </div>
  )
}
