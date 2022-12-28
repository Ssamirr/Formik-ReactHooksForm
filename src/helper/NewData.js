import { toast } from 'react-toastify';

export const putData = (values) => {
    fetch("https://northwind.vercel.app/api/products", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast("Item added")
        })
}