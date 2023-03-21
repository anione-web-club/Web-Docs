import './layout.css'

import Header from '@/components/Header/page'
import Sidebar from '@/components/Sidebar/page'

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head />
      <body>
        <Header />
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
