import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

axios.defaults.baseURL =
'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
    const response = await axios.get("/contacts")
    return response.data
})

export const addContacts = createAsyncThunk('contacts/addContacts', async (newContact) => {
    const response = await axios.post("/contacts", newContact)
    return response.data
})

export const deleteContacts = createAsyncThunk('contacts/deleteContacts', async (contactId) => {
    const response = await axios.delete(`/contacts/${contactId}`)
    return response.data
})

// 'https://connections-api.herokuapp.com'