import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../Reducer/filterReducer";

const filterContext = createContext(null);

const useFilter = () => useContext(filterContext);

const FilterProvider = ({ children }) => {
	const [state, dispatch] = useReducer(filterReducer, {
		sortByPrice: null,
		priceRange: null,
		filterByCategory: {
			Newest: false,
			FastDelievery: false,
			
		},
		ratings: null,
	});

	return (
		<filterContext.Provider value={{ state, dispatch }}>
			{children}
		</filterContext.Provider>
	);
};

export { FilterProvider, useFilter };