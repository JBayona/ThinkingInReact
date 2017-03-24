import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component{
	constructor(){
		super();
		this.state = {
			products : PRODUCTS,
			filterText: '',
			inStockOnly: false
		};
	}
	handleFilterTextInput(filterText){
		this.setState({
			filterText: filterText
		});
		//console.log(this.state.filterText);
	}
	handleInStockInput(inStockOnly){
		this.setState({
			inStockOnly: inStockOnly
		});
	}
	render(){
		return(<div>
			<SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}
				onFilterTextInput = {this.handleFilterTextInput.bind(this)}
				onInStockInput = {this.handleInStockInput.bind(this)} />
			<ProductTable products = {this.state.products} filterText = {this.state.filterText} 
			inStockOnly = {this.state.inStockOnly} />
		</div>);
	}
}

export default FilterableProductTable

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];