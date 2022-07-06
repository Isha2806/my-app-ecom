import React from "react";
import "./product.css";
import {useFilter}from "../../Contexts/filterContext";
import {filterAction} from "../../Reducer/reducerActions";


function Filters() {
	const { state, dispatch } = useFilter();

	const { sortByPrice, priceRange, filterByCategory, ratings } = state;

	const categories = [
        "Newest",
        "FastDelievery",
		"Watch",
		"WatchBand",
		"Phone",
		"AirPods"
	];

	const ratingsValue = [4, 3, 2, 1];

	return (
		<div>
             <side className = "side-left">
        <aside className="product-filter-section">
       <div className="product-filter-heading">
           <p className="fw-7">Filters</p>
			
					<h3 onClick={() => dispatch({ type: "Clear" })}> All Clear</h3></div>
                    <div className="price-range-container">
           <p className="fw-7">Price Range</p>
           <div>
               <div className="price-range-values">
                   <p>0</p>
                   <p>9,00,000</p>
                   
               </div>
				
					<input
						value={priceRange || 100}
						type="range"
						min="100"
						max="90000"
						onChange={(e) =>
							dispatch({
								type: filterAction.PRICE_RANGE,
								payload: e.target.value,
							})
						}
					/>
			</div>

                        
       <div className="input-filter-container">
           <p className="fw-7">Category</p>
           <ul className="check-lists">
         
			
				
					{categories.map((category) => (
				 		<li key={category}>
							<input
								checked={filterByCategory[category]}
								type="checkbox"
								id={category}
								onChange={() =>
									dispatch({
										type: filterAction.FILTER_BY_CATEGORY,
										payload: category,
									})
								}
							/>
							<label htmlFor={category}>{category}</label>
						</li>
					))}
				</ul>
                </div>
				<ul className="aside__list">
					<h1 className="filter__heading">Rating</h1>
					{ratingsValue.map((rating) => (
						<li key={rating}>
							<input
								type="radio"
								checked={ratings === rating}
								id={rating + "star"}
								name="ratings"
								onChange={() =>
									dispatch({
										type: filterAction.FILTER_BY_RATINGS,
										payload: rating,
									})
								}
							/>
							<label htmlFor={rating}>{rating} Stars</label>
						</li>
					))}
				</ul>
				 <div className="input-filter-container">
           <p className="fw-7">Sort by</p>
           <ul className="check-lists">
           <li>
						<input
							type="radio"
							id="lowtoHigh"
							name="sortby"
							checked={sortByPrice === "LOW_TO_HIGH"}
							onChange={() =>
								dispatch({
									type: filterAction.SORT_BY_PRICE,
									payload: "LOW_TO_HIGH",
								})
							}
						/>
						<label htmlFor="lowtoHigh">Price- Low to High</label>
					</li>
					<li>
						<input
							type="radio"
							id="hightoLow"
							name="sortby"
							checked={sortByPrice === "HIGH_TO_LOW"}
							onChange={() =>
								dispatch({
									type: filterAction.SORT_BY_PRICE,
									payload: "HIGH_TO_LOW",
								})
							}
						/>
						<label htmlFor="hightoLow">Price- High to Low</label>
					</li>
				</ul>
                </div></div></aside>
			</side>
		</div>
	);
}
export {Filters};