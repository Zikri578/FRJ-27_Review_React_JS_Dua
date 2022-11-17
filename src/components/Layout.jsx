import React from 'react'

// Soal 2 
// Buatlah sebuah component layout, dimana komponent tersebut bisa di isi dengan komponent lainnya
// Jawab

// berikut membuat function Layout yang dimasukkan kedalam objek yaitu : children
export default function Layout({ children }) {
    return (

        <div>
            {/* {membuat component layout yang disimpan kedalam children} */}
            {children}
            {/* {membuat component layout yang disimpan kedalam children} */}
        </div>
    )
}
