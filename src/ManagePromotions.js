import React, {useEffect, useState} from "react";
import AdminNavBar from './Components/Admin/AdminNavBar';
import './style.css';
import { Button, Paper } from '@mui/material';

/*const PROMOS =[
    {
        id: 0,
        name: "Spring Discount",
        discount: 20,
        code: "SPRING2023",
        status: 0
    }
];*/

export default function ManagePromotions() {

    //const[promotion, setPromotion]=useState('');
    const[name, setName]=useState('');
    const[discount, setDiscount]=useState('');
    const[promoCode, setPromoCode]=useState('');
    const[promos, setPromos]=useState([]);

    //const handlePromo = (event) => {
    //    setSelectPromo(event.target.value);
    //}

    const handleClick=(e)=>{
            e.preventDefault()
            const promotion={name, discount, promoCode}
            console.log(promotion)
            fetch("http://localhost:8080/promotion/add", {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(promotion)
            }).then(()=>{
                console.log("New Promotion Added")
            })

        }

    useEffect(()=>{
        fetch("http://localhost:8080/promotion/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setPromos(result);
        })
    },[])

    return (
        <React.Fragment>
            {/* Admin Nav Bar */}
            <AdminNavBar/>
            <div className="manage-promos">
                <div className="admin-view">
                    <div className="promo-options">
                        <h1>Current Promotions</h1>
                        {promos.map(promotion=>(
                            <Paper elevation={6} style={{margin:"10px", textAlign:"left"}} key={promotion.promoID}>
                                Name: {promotion.name},
                                Discount: {promotion.discount},
                                Promo: {promotion.promoCode}
                            </Paper>
                            ))
                        }
                        <button>Edit</button><button>Delete</button>
                    </div>
                </div>
                <div className="admin-view">
                    <div className="promo-options">
                        {/* Adds a new Promotion */}
                        <h1>Add a Promotion</h1>
                        <div className="add-promo">
                            <form className="form">
                                <div className="input-group">
                                    <label htmlFor="name">Promo Name</label>
                                    <input type="text" name="name" placeholder="Promo Name" value={name} onChange={(e)=>setName(e.target.value)} required/>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="discount">Promo Discount</label>
                                    <input type="number" min="0" max="1" step="0.01" name="discount" placeholder="e.g 0.25" value={discount} onChange={(e)=>setDiscount(e.target.value)} required/>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="code">Promo Code</label>
                                    <input type="text" name="promoCode" placeholder="PROMOCODE" value={promoCode} onChange={(e)=>setPromoCode(e.target.value)} required/>
                                </div>
                                <p></p>
                                <Button variant="contained" color="secondary" onClick={handleClick}>Submit</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

/*
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Amount</th>
                                    <th>Code</th>
                                    <th>Status</th>
                                    <th>Options</th>
                                    </tr>
                                    </thead>
                                    {selectPromos.map(selectPromo=>
                                    <tr key={selectPromo.promoID}>
                                        <th>{selectPromo.name}</th>
                                        <th>{selectPromo.discount}</th>
                                        <th>{selectPromo.promoCode}</th>
                                        {selectPromo.status === 0 && (
                                        <th>Not Sent</th>
                                        )}
                                        {selectPromo.status === 1 && (
                                        <th>Sent</th>
                                        )
                                        <th><button>Edit</button><button>Delete</button></th>
                                    </tr>                                
                                    )}    
                                </table> 

*/