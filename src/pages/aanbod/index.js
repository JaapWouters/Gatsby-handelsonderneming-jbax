import React from 'react'
import Layout from '../../components/Layout'
import styles from '../../styles/aanbod.module.css'

const Aanbod = () => {

// state = {
//   products:[
//     {
//       "_id": "1",
//       "title": "Nike Shoes",
//       "src": [
//           "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
//           "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
//           "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
//           "https://www.upsieutoc.com/images/2020/06/27/img4.jpg"
//         ],
//       "description": "UI/UX designing, html css tutorials",
//       "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
//       "price": 23,
//       "colors":["red","black","crimson","teal"],
//       "count": 1
//     }
//   ]
// }
  
  return (
    <Layout>
      <div className={styles.voorraad}>
        <h2>Aanbod</h2>
        <h3>Voertuigen die tekoop staan</h3>
        {/* <div className='big-img'>
          <img src={item.src[0]}></img>
        </div> */}
      </div>
    </Layout>
  );
}
 
export default Aanbod