import axios from "axios";
import { useState} from "react";
import React from "react"

const Add = () => {
    const [img, setImage] = useState("");
    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    function handleAdd() {
        var product = {
            img: img,
            type: type,
            name: name,
            price: price
        }

        axios.post("https://shoppt-2f8b2-default-rtdb.asia-southeast1.firebasedatabase.app/products.json", product)
            .then(response => { alert("amjilttai nemegdlee")
            localStorage.setItem('products', response.data.products) }
            ).catch(error => alert("error"))
    }


    return (
        <div className="add-product">
            <input type="text" alt="" className="add-input" value={img} onChange={(e) => setImage(e.target.value)} placeholder="image URL" />
            <select name="type" className="add-input" value={type} onChange={(e) => setType(e.target.value)}>
                <option >Төрөл сонгох</option>
                <option value="Ger">Гэрийн Тавилга</option>
                <option value="Woman">Эмэгтэй</option>
                <option value="Man">Эрэгтэй</option>
                <option value="Children">Хүүхдийн</option>
                <option value="Sport">Спорт</option>
                <option value="Tech">Технологи</option>
                <option value="Beauty">Гоо сайхан</option>
                <option value="Jewel">Үнэт эдлэл</option>
                <option value="Ticket">Тасалбар</option>
            </select>
            <input type="text" className="add-input" placeholder="Бүтээглэхүүний нэр" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" className="add-input" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <button onClick={handleAdd} className="add-btn">Add</button>



        </div>
    )
}
export default Add;