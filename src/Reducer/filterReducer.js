
import {filterAction} from "./reducerActions";
const filterReducer = (state, action) => {
	switch (action.type) {
		case filterAction.SORT_BY_PRICE:
			return { ...state, sortByPrice: action.payload };
		case filterAction.PRICE_RANGE:
			return { ...state, priceRange: action.payload };
		case filterAction.FILTER_BY_RATINGS:
			return { ...state, ratings: action.payload };
		case filterAction.FILTER_BY_CATEGORY:
		
			if (action.payload === "Newest")
				return {
					...state,
					filterByCategory: {
						...state.filterByCategory,
						Newest: !state.filterByCategory.Newest,
					},
				};
			if (action.payload === "Watch")
				return {
					...state,
					filterByCategory: {
						...state.filterByCategory,
						Watch: !state.filterByCategory.Watch,
					},
				};
				if (action.payload === "WatchBand")
				return {
					...state,
					filterByCategory: {
						...state.filterByCategory,
						WatchBand: !state.filterByCategory.WatchBand,
					},
				};
				if (action.payload === "Phone")
				return {
					...state,
					filterByCategory: {
						...state.filterByCategory,
						Phone: !state.filterByCategory.Phone,
					},
				};
				if (action.payload === "AirPods")
				return {
					...state,
					filterByCategory: {
						...state.filterByCategory,
						AirPods: !state.filterByCategory.AirPods,
					},
				};
				if (action.payload === "FastDelievery")
				return {
					...state,
					filterByCategory: {
						...state.filterByCategory,
						FastDelievery: !state.filterByCategory.FastDelievery,
					},
				};
			

		default:
			return {
				sortByPrice: null,
				priceRange: null,
				filterByCategory: {
					 Newest:false,
                    FastDelievery:false,
				},
				ratings: null,
			};
	}
};

export { filterReducer };
