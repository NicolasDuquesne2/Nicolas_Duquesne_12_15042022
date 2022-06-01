import { useState, useEffect } from 'react'
import MokeDatas from '../Moke/data'

/**
 * 
 * @module useDataProvider
 */


/**
 * useDataProvider function returns datas from api or moke datas
 * @returns {(Array|boolean)} datas array or an error boolean
 */
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


    /**
     * fetchDataFromAPI function returns datas from api and takes over multi url fetch
     * @returns {(Array)} datas array from json
     */
    const fetchDataFromAPI = async (urls) => {
        try {
            const response = await Promise.all(urls.map(url => fetch(url)))
            const jsonResponse = await Promise.all(response.map(res => res.json()))
            setDataFetch(jsonResponse.map(jsonRes => (jsonRes.data)))

        } catch (err) {
            console.log(err)
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {

        if (query.source === "api" && query.component === "Home") {
            fetchDataFromAPI(httpApi.components.Home)
        }

        if(query.source === "api" && query.component === "Dashboard") {
            fetchDataFromAPI(httpApi.components.Dasboard)
        }

        if (query.source === "moke" && query.component === "Home") {
            setDataFetch(MokeDatas.USER_MAIN_DATA)
            setLoading(false)
        }

        if (query.source === "moke" && query.component === "Dashboard") {
            setDataFetch([MokeDatas.USER_MAIN_DATA.find(user => user.id === Number(query.id)), 
                        MokeDatas.USER_ACTIVITY.find(user => user.userId === Number(query.id)), 
                        MokeDatas.USER_AVERAGE_SESSIONS.find(user => user.userId === Number(query.id)), 
                        MokeDatas.USER_PERFORMANCE.find(user => user.userId === Number(query.id))])
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