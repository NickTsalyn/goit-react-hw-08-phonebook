import { FilterInput, FilterLabel, FilterWrapper } from "./Filter.styled"
import { useDispatch, useSelector } from 'react-redux';
import { setContactFilter } from "redux/contacts/filterSlice";


export const Filter = () => {

  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)

    return (
        <FilterWrapper>
      <FilterLabel htmlFor="Filter">Find contacts by name</FilterLabel>
      <FilterInput type="text" name="Filter" value={filter}  onChange={e => dispatch(setContactFilter(e.currentTarget.value))}/>
      </FilterWrapper>
    )
}