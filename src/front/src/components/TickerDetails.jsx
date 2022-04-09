import {useEffect} from 'react'
import axios from 'axios'

export default function TickerDetail(){
    useEffect(() => {
        async function getTicker() {
          const res = await axios.get("/api/ticker/petr4");
          console.log(res.data)
        }
        getTicker();
      }, [])
    return (
        <h1></h1>
    )
}