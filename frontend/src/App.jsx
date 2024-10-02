import Feed from "./components/Feed"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Widgets from "./components/Widgets"
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from '@nextui-org/react'
function App() {
  return (
    <div>
      <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Header />
        <div className="flex flex-grow">
          <Sidebar/>
          <Feed/>
          <Widgets/>
        </div>
        <Footer />
        </NextThemesProvider>
        </NextUIProvider>
    </div>
  )
}

export default App
