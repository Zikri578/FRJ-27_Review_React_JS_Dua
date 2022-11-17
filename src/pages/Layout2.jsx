import React from 'react'
import Card from '../components/Card.jsx' // emanggil atribut yang terdapat di file Card.jsx
import Layout from '../components/Layout.jsx' // emanggil atribut yang terdapat di file Layout.jsx

// berikut membuat function yang bernama Layout2 untuk menampilkan ke halaman browser
export default function Layout2() {
    return (
        // memanggil component layout yang sudah ada di file Layout.jsx
        <Layout>

            <h1>Halaman Layout</h1>

            {/* {memanggil component card yang sudah ada di file Card1.jsx} */}
            <Card img="http://picsum.photos/seed/fatur/200/200" title="Afif Fatur" content="SI-41-08" />
            <Card img="http://picsum.photos/seed/andika/200/200" title="andika Siddiq" content="SI-41-08" />
            <Card img="http://picsum.photos/seed/arrizal/200/200" title="Arrizal Fauzan" content="SI-41-08" />
            <Card img="http://picsum.photos/seed/aji/200/200" title="Setya Aji" content="SI-41-08" />
            <Card img={'http://picsum.photos/seed/abdul/200/200'} title={'Abdullah Ali'} content={'SI-41-08'} />
            {/* {memanggil component card yang sudah ada di file Card1.jsx} */}

        </Layout>
        // memanggil component layout yang sudah ada di file Layout.jsx

    )
}
