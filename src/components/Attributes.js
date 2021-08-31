import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Options from '../Options';

export default class Attributes extends Component {
  constructor(props) {
    super(props);

    this.startMapping = this.startMapping.bind(this);
    this.textMap = this.textMap.bind(this);
   this.swatchMap =  this.swatchMap.bind(this);
   this.textMapper = this.textMapper.bind(this);
  }

  
  startMapping() {
    const { item } = this.props;
    if(item !== undefined){
    return (
      <div>
        <span>{item.brand}</span>
        <span>{item.name}</span>
        {this.textMap()}
      </div>
    );}
  }


  textMap() {
    const { item } = this.props;
    if(item.attributes){
   return item.attributes.map((item)=><div>
     {item.name}
     {item.type ==='swatch'?this.swatchMap(item):this.textMapper(item)}
 </div>)
  }}

 swatchMap(item){
  return item.items.map(item=> <Options style={item.value}/>)
}

textMapper(item){
  return item.items.map(item=><span>{item.value}</span>)
}


  render() {
    return <div>{this.props.item && this.startMapping()}</div>;
  }
}
