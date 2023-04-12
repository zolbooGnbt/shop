import { Cart2, EyeFill, HeartFill, Person, Plus, Wallet, MenuButton } from "react-bootstrap-icons"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react";
import SearchBar from "./search/searchBar";
import logo from './shoppy.svg'
import Login from "./login/login"
import Product from "./product";
import Home from "./home";
import Add from "./add";
import Search from "./search/search";
import UserInfo from "./userInfo";
import Cart from "./cart";
import axios from "axios";

const Navbar = ({ products }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [userData, setUserData] = useState([]);
    const [cart, setCart] = useState(JSON.parse(
        localStorage.getItem(
            "products"
        )
    ) || []);

    useEffect(() => {
        setLoading(true)
        axios.get("https://shoppt-2f8b2-default-rtdb.asia-southeast1.firebasedatabase.app/products.json").then(response => {
            var x = Object.values(response.data)
            setData(x)
            JSON.parse(localStorage.getItem('products'))
        }).catch(error => (alert("Error"))).finally(() => setLoading(false));;
    }, [])

    useEffect(() => {
        axios.get("https://shoppt-2f8b2-default-rtdb.asia-southeast1.firebasedatabase.app/users.json").then(response => {
            var x = Object.values(response.data)
            setUserData(x)
        })
    }, [])

    const SearchHandler = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const handleLogOut = () => {
        localStorage.clear();
        document.location.pathname = "../home.js"
    };

    useEffect(() => {
		localStorage.setItem(
			"products",
			JSON.stringify(cart)
		);
	}, [cart]);
    
	const addHandler = (products) => {
		const newProduct = {
			...products,
			count: 1,
		};
		setCart([
			...cart,
			newProduct ,
		]);
	};

    return (
            
        <BrowserRouter>

            
            <div className="navbar1">
                <a href="/home"><img className="logo" src={logo} alt="logo" /></a>
                <SearchBar data={data} wordEntered={wordEntered} SearchHandler={SearchHandler} />
                <div className="nav-icons">
                    <button href="/wallet" className="label"><Wallet className="icon"></Wallet>Хэтэвч</button>
                    <button href="/watched" className="label"><EyeFill className="icon"></EyeFill>Үзсэн</button>
                    <button href="/saved" className="label"><HeartFill className="icon"></HeartFill>Хадгалсан</button>
                    <a type="button" href="/basket" className="label"><Cart2 className="icon"></Cart2>Сагс
                        {' '} {cart ? (

                            <button className="badge">{(cart.length)}</button>
                        ) : (
                            ' '
                        )}{' '}
                    </a>
                    {localStorage.getItem('admin') ?
                        <div>
                            {
                                localStorage.getItem('admin') ?
                                    <div className="logout ">
                                        <a href="/Add" className="label"><Plus className="icon"></Plus>Add</a>
                                        <a type="button" href="/userInfo" className="label"><Person className="icon"></Person>Admin</a>
                                        <a type="button" href="/login" className="label" onClick={handleLogOut}><MenuButton className="icon"></MenuButton>logout</a>
                                    </div>
                                    :
                                    <div>
                                        <a type="button" href="/login" className="label"><Person className="icon"></Person>Нэвтрэх</a>
                                    </div>
                            }</div>
                        : <div>{
                            localStorage.getItem('currentUser') ?
                                <div className="logout ">
                                    <a type="button" href="/userInfo" className="label"><Person className="icon"></Person>user</a>
                                    <a type="button" href="/login" className="label" onClick={handleLogOut}><MenuButton className="icon"></MenuButton>logout</a>
                                </div>
                                :
                                <div>
                                    <a type="button" href="/login" className="label"><Person className="icon"></Person>Нэвтрэх</a>
                                </div>
                        }</div>
                    }

                </div>
            </div>
            <div className="navbar2">
                <a href="/home" className="nav-name" >Home</a>
                <a href="/Furniture" className="nav-name"  >Гэрийн Тавилга</a>
                <a href="/Woman" className="nav-name"  >Эмэгтэй</a>
                <a href="/Man" className="nav-name"  >Эрэгтэй</a>
                <a href="/Children" className="nav-name" >Хүүхдийн</a>
                <a href="/Sport" className="nav-name"  >Спорт</a>
                <a href="/Tech" className="nav-name" >Технологи</a>
                <a href="/Beauty" className="nav-name" >Гоо сайхан</a>
                <a href="/Jewel" className="nav-name" >Үнэт эдлэл</a>
                <a href="/Ticket" className="nav-name" >Тасалбар</a>
            </div>


            <Search filteredData={filteredData} />
            <Routes>
                <Route expect path="/home"
                    element={<Home loading={loading} cart={cart} addHandler={addHandler} data={data} />}>
                </Route>
                <Route expect path="/login"
                    element={<Login data={userData} />}>
                </Route>
                <Route expect path="/userInfo"
                    element={<UserInfo />}>
                </Route>
                <Route expect path="/basket"
                    element={<Cart cart={cart} products={products} />}>
                </Route>
                <Route expect path="/Furniture"
                    element={<Product loading={loading} cart={cart} addHandler={addHandler} data={data.filter((products) => products.type === 'Ger')} />} >
                </Route>
                <Route expect path="/Woman"
                    element={<Product loading={loading} cart={cart} addHandler={addHandler} data={data.filter((products) => products.type === 'Woman')} />}>
                </Route>
                <Route expect path="/Man"
                    element={<Product loading={loading} cart={cart} addHandler={addHandler} data={data.filter((products) => products.type === 'Man')} />} >
                </Route>
                <Route expect path="/Children"
                    element={<Product loading={loading} cart={cart} addHandler={addHandler} data={data.filter((products) => products.type === 'Children')} />} >
                </Route>
                <Route expect path="/Sport"
                    element={<Product loading={loading} cart={cart} addHandler={addHandler} data={data.filter((products) => products.type === 'Sport')} />}>
                </Route>
                <Route expect path="/Tech"
                    element={<Product loading={loading} cart={cart} addHandler={addHandler} data={data.filter((products) => products.type === 'Tech')} />}>
                </Route>
                <Route expect path="/Beauty"
                    element={<Product loading={loading} cart={cart} addHandler={addHandler} data={data.filter((products) => products.type === 'Beauty')} />}>
                </Route>
                <Route expect path="/Jewel"
                    element={<Product loading={loading} cart={cart} addHandler={addHandler} data={data.filter((products) => products.type === 'Jewel')} />}>
                </Route>
                <Route expect path="/Ticket"
                    element={<Product loading={loading} cart={cart} addHandler={addHandler} data={data.filter((products) => products.type === 'Ticket')} />}>
                </Route>
                <Route expect path="/Add"
                    element={<Add />}>
                </Route>
            </Routes>
   
        </BrowserRouter >
    )
}

export default Navbar;