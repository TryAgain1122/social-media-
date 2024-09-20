import Feed from "./components/Feed"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Widgets from "./components/Widgets"


function App() {


  return (
    <div>
      <Header />
      <div className="flex flex-grow bg-gray-100">
        <Sidebar className=""/>
        <Feed className=""/>
        <Widgets className=""/>
      </div>
      <Footer />
    </div>
  )
}

export default App
