import { useState } from 'react'
import './App.css'
import { Demo, Demo1 } from './components/class1'
import './components/class2.css'
import styles from './components/sample.module.css'


function App() {
  
  return (
    <>
      <Demo />
      <Demo1 />
      <div style={{color:'red',fontSize:'40px',fontWeight:'bold'}}>R.D.J</div>
      {/* <div className={styles.div2}>MCU</div> */}
      {/* <div class="div1">MARVEL</div> */}
    </>
  )
}

export default App
