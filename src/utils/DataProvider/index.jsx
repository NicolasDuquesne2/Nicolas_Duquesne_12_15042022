import { useState, useEffect } from 'react'
//import { useFetch } from './../fetch'

function fetchData(url) {

    let data = {}
    let error = false;
    let isLoading = true
  
    if (!url) return

    async function getData() {
        try {
            const response = await fetch(url)

            data = await response.json()

        } catch (err) {
            console.log(err)
            error = true
        } finally {
            isLoading = false
        }
    }

    getData()

    return { isLoading, data, error }
  }



 export function useDataProvider (query) {

    const users = fetchData('http://localhost:3000/user/12')


    return users


}