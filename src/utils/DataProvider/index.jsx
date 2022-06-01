import { useState, useEffect } from 'react'
import MokeDatas from '../Moke/data'
//import { useFetch } from './../fetch'


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


    const getData = async (url) => {
        try {
            const response = await fetch(url)
            const jsonResponse = await response.json()

            dataFetch.push(jsonResponse.data)

        } catch (err) {
            console.log(err)
            setError(true)
        } finally {
            setLoading(false)
        }
    } 


    useEffect(() => {

        if (query.source === "api" && query.component === "Home") {
            httpApi.components.Home.forEach((http) => {
                getData(http)
            })
        }

        if(query.source === "api" && query.component === "Dashboard") {
            httpApi.components.Dasboard.forEach((http) => {
                getData(http)
            })
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