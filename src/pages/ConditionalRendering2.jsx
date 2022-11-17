import React from 'react'
import Card from '../components/Card.jsx'

export default function ConditionalRendering2() {
    return (
        <div>
            <h1>Conditional Rendering 2</h1>

            <h1>-</h1>
            {/* {img = { "http://picsum.photos/seed/noah/200/200"} } -> bagian ini gak muncul di browser, bagaimana caranya supaya tidak error? */}
            <Card judul={"ada apa denganmu"} isi={"lagu ciptaan noah"} />
        </div>
    )
}
