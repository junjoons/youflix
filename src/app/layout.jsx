import NavigationBar from "./components/Navigation"

export const metadata = {
  title: 'Next.Js Web App'
}

export default function RootLayout({children}) {
  return (
    <html>
      <body>
        <NavigationBar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
