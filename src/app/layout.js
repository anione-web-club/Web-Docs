import './layout.css'

import Header from '@/components/Header/page'

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
