import { useState, useEffect } from 'react'
import MokeDatas from '../Moke/data'


 export function useDataProvider (query) {

    const httpApi = {
        components: {
            Home: ['http://localhost:3000/user/12', 'http://localhost:3000/user/18'],
            Dasboard: [`http://localhost:3000/user/${query?.id}`, 
                       `http://localhost:3000/user/${query?.id}/activity`, 
                       `http://localhost:3000/user/${query?.id}/average-sessions`, 
                       `http://localhost:3000/user/${query?.id}/performance`]
        }
    }

    const [dataFetch, setDataFetch] = useState([])
    const [error, setError] = useState(false)
    const [isLoading, setLoading] = useState(true)


    const getData = async (urls) => {
        try {
            const response = await Promise.all(urls.map(url => fetch(url)))
            const jsonResponse = await Promise.all(response.map(res => res.json()))
            setDataFetch(jsonResponse)

        } catch (err) {
            console.log(err)
            setError(true)
        } finally {
            setLoading(false)
        }
    } 


    useEffect(() => {

        if (query.source === "api" && query.component === "Home") {
            getData(httpApi.components.Home)
        }

        if(query.source === "api" && query.component === "Dashboard") {
            getData(httpApi.components.Dasboard)
        }

        if (query.source === "moke" && query.component === "Home") {
            setDataFetch(MokeDatas.USER_MAIN_DATA)
            setLoading(false)
        }

        if (query.source === "moke" && query.component === "Dashboard") {
            dataFetch.push(MokeDatas.USER_MAIN_DATA.find(user => user.id === Number(query.id)))
            dataFetch.push(MokeDatas.USER_ACTIVITY.find(user => user.userId === Number(query.id)))
            dataFetch.push(MokeDatas.USER_AVERAGE_SESSIONS.find(user => user.userId === Number(query.id)))
            dataFetch.push(MokeDatas.USER_PERFORMANCE.find(user => user.userId === Number(query.id)))
            setLoading(false)
        }

    }, [])

    if (error) {
        return {error: true}
    }

    if (!isLoading) {
        return dataFetch
    }
}