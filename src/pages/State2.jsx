import React from 'react'
import { useState } from 'react'

// Soal 3 
// Buatlah sebuah element h1 dan input setiap input di isi dengan value (di ubah) maka konten pada h1 juga ikut berubah

// berikut membuat function State2
export default function State2() {

    // membuat state
    const [text, setText] = useState();

    // membuat sebuah function yang menangkap value dari element input
    const handleChangeText = (event) => {
        // console.info(event);

        // menangkap state serta value yang diinput
        setText(event.target.value);
    }

    return (
        <div>
            <h1>Halaman State</h1>
            {/* menampilkan hasil setelah diinput */}
            <h3>{text}</h3>

            {/* memasukkan text yang diinginkan */}
            <input type="text" onChange={handleChangeText} />
        </div>
    )
}
