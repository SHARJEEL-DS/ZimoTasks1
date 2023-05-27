import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Narbar from '../components/Narbar'
import Header from '../components/Header'
import Header2 from '../components/Header2'
import Header3 from '../components/Header3'
import Header4 from '../components/Header4'
import Footer from '../components/Footer'
import Theader from '../components/Theader'
import Thr from '../components/Thr'
import Theader2 from '../components/Theader2'
import Maipag from '../components/Maipag'
// import Theader2 from '../components/Theader2'
export default function Home() {
  return (
   <div>
     {/* <Narbar/> */}
     {/* <Maipag/> */}
     <Theader2/>
     {/* <Header/> */}
     <Header2/>
     <Header3/>
     <Header4/>
     <Footer/>
   </div>
  )
}
