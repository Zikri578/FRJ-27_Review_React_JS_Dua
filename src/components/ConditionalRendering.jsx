import React from 'react'


// Soal 4
// ketika sudah membuat props img, yang berisi source gambar, apa yang terjadi ketika programmer tersebut lupa mengisi props img. selesaikan bug tersebut menggunakan conditional rendering 
// yang artinya element img hanya akan ter-render ketika ada data di props img

// berikut membuat function conditional rendering yang dimasukkan kedalam properti atau props
export default function ConditionalRendering(props) {
    return (
        <div>
            <h3>{props.judul}</h3>

            {/* ketika value gambar tersebut maka akan di render, kalau tidak maka tidak muncul */}
            {img ? <img src={props.gambar} alt={props.judul} /> : null}
            {/* ketika value gambar tersebut maka akan di render, kalau tidak maka tidak muncul */}

            <p>{props.isi}</p>
        </div>
    )
}
