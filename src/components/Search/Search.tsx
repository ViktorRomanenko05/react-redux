/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import Input from "../Input/Input"
import { ContainerSearch } from "./styles"
import type { ChangeEvent } from "react"
import { useEffect, useState } from "react"
import type { UserDate } from "./types"

function Search() {
  const [search, setSearch] = useState<string>("")
  const [objects, setObjects] = useState<UserDate[]>([])

  const DATA = `https://randomuser.me/api/?results=10&name=${search}`

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const filterDataArray = (usersArray: any) => {
    return usersArray.map((user: any) => ({
      name: user.name,
      email: user.email,
      country: user.location.country,
      fotoURL: user.picture.medium,
    }))
  }

  const fetchDate = async () => {
    try {
      const respons = await axios.get(DATA)
      console.log(respons)
      setObjects(filterDataArray(respons.data.results))
      console.log(objects);

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDate()
  }, [search])

  return (
    <ContainerSearch>
      <Input
        name="userSearch"
        placeholder="search"
        id="user"
        label="User search"
        onChange={handleInputChange}
        value={search}
      />
    </ContainerSearch>
  )
}

export default Search;