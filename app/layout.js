import "./globals.css"

export const metadata = {
  title: "CRM Portfolio",
  description: "Strategic CRM solutions that drive growth and enhance customer satisfaction",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
