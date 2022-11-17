import React from 'react'
import Card from '../components/Card.jsx' // memanggil atribut yang terdapat di file Card.jsx

// berikut membuat function yang bernama Card2 untuk menampilkan ke halaman browser
export default function Card2() {

    return (
        <div className='App'>

            <h1>Halaman Component</h1>

            {/* memanggil component card yang sudah ada di file Card1.jsx */}
            <Card img="http://picsum.photos/seed/muzik/200/200" title="Muhammad Zikri" content="SI-41-08" />
            <Card img="http://picsum.photos/seed/salsabila/200/200" title="Salsabilla Gusti" content="SI-41-08" />
            <Card img="http://picsum.photos/seed/khansa/200/200" title="Khansa Rabbaniah" content="SI-41-08" />
            <Card img="http://picsum.photos/seed/khanza/200/200" title="Salsabila al-khanza" content="SI-41-08" />
            <Card img={'http://picsum.photos/seed/syfa/200/200'} title={'Syfa Nur'} content={'SI-41-08'} />
            {/* memanggil component card yang ada di file Card1.jsx */}

        </div>
    )
}