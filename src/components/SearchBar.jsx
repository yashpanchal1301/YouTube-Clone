import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Paper, IconButton} from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
  const[searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate();


const handleSubmit = (e) => {
  e.preventDefault();

  if(searchTerm) {
    navigate(`/search/${searchTerm}`)
  }

}

  return (
   <Paper component="form"
   onSubmit={handleSubmit}
   sx={{borderRadius: 50,
   height:'30px',
   border:'1px solid #e3e3e3',
   pl: 3, display: 'flex',
   boxShadow:'none', mr: { sm: 5}   
   }}
   >
   <input 
   className='search-bar'
   placeholder='Search.....'
   value={searchTerm}
   onChange={(e) => setSearchTerm(e.target.value)}
    />
    <IconButton type='submit' sx={{ p: '10px'}}>
        <Search />
    </IconButton>
   </Paper>
  )
}

export default SearchBar