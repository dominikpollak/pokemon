import '../styles/globals.css'

export default function RootLayout({ children }) {

  return (
    <html className='bg-slate-50 '>
      <head></head>
      <body>
        {children}
      </body>
    </html>
  )
}
