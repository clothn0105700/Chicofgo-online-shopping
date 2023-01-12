import Navbar from './component/navbar/navbar'
import Member from './routes/member/member'
import ChangePassword from './component/member/changePassword'
import Sidebar from './component/sidebar/sidebar'
// import Navbaro from './component/navbar-or'
// import Carousel from './component/carousel'

function App() {
  return (
    <>
      <Navbar />
      <Member />
      <ChangePassword />
      {/* <Sidebar /> */}
    </>
  )
}

export default App
