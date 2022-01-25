import { PieChart } from "react-minimal-pie-chart";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"


function HomePageDetails() {
    const [dataInfo , setDataInfo] = useState([])

    const API= process.env.REACT_APP_API_URL

   
    useEffect(()=>{
        axios.get(`${API}/transactions`)
        .then((res)=>{
            handleGraphData(res.data)
        }).catch((err)=>{
            throw err;
        })
    },[])
    
    const handleGraphData = (dataArr) =>{
        let newData = dataArr.map((transaction)=>{
            return {title:transaction.itemName, value: Math.abs(Number(transaction.amount)), color: transaction.amount >0 ?   "green": "red"}
        })
        setDataInfo(newData)
    } 
    console.log(dataInfo)
    // const data =
    // [
    //     {name: 'Geeksforgeeks', students: 400},
    //     {name: 'Technical scripter', students: 700},
    //     {name: 'Geek-i-knack', students: 200},
    //     {name: 'Geek-o-mania', students: 1000}
    //   ];
    return (
        <div>

            <h1> Account Snap Shot:</h1>
            <Link to={"/transactions"}>
            <PieChart 
                data = {dataInfo}
                lineWidth={30}
                radius={40}
                label={({ dataEntry }) => dataEntry.value}
                labelPosition={112}
                labelStyle={{fontSize:"3px"}}
                paddingAngle={5}
            />

      </Link>
        </div>
    )
}

export default HomePageDetails


// setData([...data, {name:transaction.itemName, amount:transaction.amount}] )
