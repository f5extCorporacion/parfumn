
import siluetafrank from'./assets/siluetafrank.png'
import './App.css'
const Home = ({tema , setTheme}) => {

  const handlerthemeSwitch = ()=>{
    if(tema === false)
      setTheme(true)
    else
    setTheme(false)
  }
  return(
    <>     
    <div className="mascara flex flex-wrap justify-center items-center p-2  rounded-2xl  ">
     
    </div>
    </>
  )
}
/*1 junio*/
export default Home;
