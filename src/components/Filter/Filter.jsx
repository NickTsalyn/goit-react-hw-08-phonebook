import { useTranslation } from "react-i18next";
import { FilterInput, FilterLabel, FilterWrapper } from "./Filter.styled"
import { useDispatch, useSelector } from 'react-redux';
import { setContactFilter } from "redux/contacts/filterSlice";


export const Filter = () => {
  const {t} = useTranslation('global')
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)

    return (
        <FilterWrapper>
      <FilterLabel htmlFor="Filter">{t('contacts.list.filter')}</FilterLabel>
      <FilterInput type="text" name="Filter" value={filter}  onChange={e => dispatch(setContactFilter(e.currentTarget.value))}/>
      </FilterWrapper>
    )
}