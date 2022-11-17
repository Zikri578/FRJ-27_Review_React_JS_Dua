import React from 'react'

// Soal 1
// Buatlah sebuah component dengan nama Card yang mempunyai 2 properti yaitu : title dan content, dimana component boleh dibuat dengan class dan function

// Jawab :
// Component merupakan class atau function yang merender element JSX

// =========================================================== Cara 1 ===========================================================
// berikut membuat class component yang bernama Card1
// export default class Card1 extends React.Component {

//     membuat sebuah constructor yang dimasukkan kedalam props
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         // merupakan JSX
//         return (
//             <div className='App'>
//                 {/* bagian {} merupakan template literals untuk melakukan pergantian / perwakilan dari seluruh isi image */}
//                 <h1>{this.props.title}</h1>
//                 <img src={this.props.img} alt='Muzik' />
//                 <p>{this.props.content}</p>
//             </div>
//         )
//     }
// } =========================================================== Cara 1 ===========================================================


// =========================================================== Cara 2 =========================================================== 
// berikut membuat function yang bernama Card yang dimasukkan kedalam properti
export default function Card(properti) {
    return (
        <div>
            <h1>{properti.title}</h1>
            <img src={properti.img} alt={properti.title} />
            <p>{properti.content}</p>
        </div>
    )
}
// =========================================================== Cara 2 ===========================================================


// =========================================================== Cara 3 ===========================================================
// atau bisa menggunakan seperti dibawah ini
// berikut membuat function yang bernama Card yang didalamnya terdapat beberapa objek yaitu : img, title, dan content
// export default function Card1({title, img, content}) {
//     return (
//         <div>
//             <h1>{title}</h1>
//             <img src={img} alt={title} />
//             <p>{content}</p>
//         </div>
//     )
// }
// =========================================================== Cara 3 =========================================================== 