import NavigationBar from "./components/Navigation"
import "./global.css"
import "./components/navigation.css"

export const metadata = {
  title: 'Next.Js Web App'
}

export default function RootLayout({children}) {
  return (
    <html>
      <body>
        <NavigationBar />
        <main>
          <div className="main__container">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
