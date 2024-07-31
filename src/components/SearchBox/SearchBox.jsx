import { useSelector, useDispatch } from "react-redux";
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice.js'
import css from "./SearchBox.module.css"


export default function SearchBox() {

  const filterName = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input className={css.input} type="text" value={filterName} 
      onChange={handleFilterChange}></input>      
    </div>
  )
} 