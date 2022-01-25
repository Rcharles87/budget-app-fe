import { PieChart, Pie} from 'recharts'
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

function HomePageDetails() {
    const [transactions, setTransactions] = useState([]);
    const [data , setData] = useState([])

    const API= process.env.REACT_APP_API_URL

   
    useEffect(()=>{
        axios.get(`${API}/transactions`)
        .then((res)=>{
            setTransactions(res.data);
            handleGraphData(res.data)
        }).catch((err)=>{
            throw err;
        })
    },[])
    
    const handleGraphData = (dataArr) =>{
        let newData = dataArr.map((transaction)=>{
            return {name:transaction.itemName, amounts:Number(transaction.amount)}
        })
        setData(newData)
    } 
    console.log(data)
    // const data =
    // [
    //     {name: 'Geeksforgeeks', students: 400},
    //     {name: 'Technical scripter', students: 700},
    //     {name: 'Geek-i-knack', students: 200},
    //     {name: 'Geek-o-mania', students: 1000}
    //   ];
// console.log(dataGraph)
    return (
        <div>
            <Link to={"/transactions"}>
            <PieChart width={700} height={700}>
          <Pie data={data} dataKey="amounts" outerRadius={250} fill="green" />
        </PieChart>

      </Link>
        </div>
    )
}

export default HomePageDetails


// setData([...data, {name:transaction.itemName, amount:transaction.amount}] )
