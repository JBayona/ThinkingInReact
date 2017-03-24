import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';

class ProductTable extends React.Component{
	render(){
		var rows = [];
		var lastCategory = null;

		this.props.products.forEach(product => {
			if(product.category != lastCategory){
				rows.push(<ProductCategoryRow product = {product} key = {product.category}/>);
				lastCategory = product.category;
			}
		});
		return (<h1>Hi</h1>);
	}
}

export default ProductTable; 