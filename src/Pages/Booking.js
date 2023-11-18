import {View,Text} from  'react-native';
import { FlatList, TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import logo from '../images/steering.png'
import icon from '../images/seat.png'
import icon1 from '../images/seat1.png'
let selectedSeats=[];
const Booking=() => {
  const[row1,setRow1]=useState([
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:false,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:false,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:false,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:false,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    
  ]);
  const[row2,setRow2]=useState([
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:false,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:false,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:false,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:false,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
  ]);
  const[row3,setRow3]=useState([
    {empty:false,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:false,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
  ]);
  const onSelectRow1=(index)=>{
    let tempRow=[];
    tempRow=row1;
    tempRow.map((item,ind)=>{
      if(index==ind){
        if(item.selected==true){
          item.selected=false;
          item.empty=true;
        }
        else{
          item.selected=true;
          item.empty=false;
        }
      }
    });
    let tempSeats=[];
    tempRow.map(item=>{
      tempSeats.push(item);
    });
    setRow1(tempSeats);
  };
  const onSelectRow2=(index)=>{
    let tempRow=[];
    tempRow=row2;
    tempRow.map((item,ind)=>{
      if(index==ind){
        if(item.selected==true){
          item.selected=false;
          item.empty=true;
        }
        else{
          item.selected=true;
          item.empty=false;
        }
      }
    });
    let tempSeats=[];
    tempRow.map(item=>{
      tempSeats.push(item);
    });
    setRow2(tempSeats);
  };
  const onSelectRow3=(index)=>{
    let tempRow=[];
    tempRow=row3;
    tempRow.map((item,ind)=>{
      if(index==ind){
        if(item.selected==true){
          item.selected=false;
          item.empty=true;
        }
        else{
          item.selected=true;
          item.empty=false;
        }
      }
    });
    let tempSeats=[];
    tempRow.map(item=>{
      tempSeats.push(item);
    });
    setRow3(tempSeats);
  };
  const getAllseats=()=>{
    selectedSeats=[];
    row1.map(item=>{
      if(item.selected==true){
        selectedSeats.push(1);
      }
    });
    row2.map(item=>{
      if(item.selected==true){
        selectedSeats.push(1);
      }
    });
    row3.map(item=>{
      if(item.selected==true){
        selectedSeats.push(1);
      }
    });
  return selectedSeats.length;
  };
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <View style={{margin:'60px',width:'375px',height:'500px',borderWidth:1,borderRadius:5,borderColor:'#8e8e8e'}}>
       <img src={logo} style={{width:'60px',height:'60px',alignSelf:'flex-end'}} alt='image' />
        {/* style={{width:24,height:24,alignSelf:'flex-end',margin:10, opacity:.5}}/>  */}
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <View>
        <FlatList data={row1} numColumns={2} renderItem={({item,index})=>{
          return(
            <TouchableOpacity style={{margin:7}} onPress={()=>{
              if(item.selected==false && item.empty==false){
                alert("already booked");
              }
              else{
                 onSelectRow1(index);                        
              }
            }}>
              {
                item.empty==false && item.selected==true?(<img src={icon1} style={{width:'25px',height:'25px',tintColor:'green',margin:'2px',marginRight:'25px'}}></img>):
                item.empty==true && item.selected==false?(<img src={icon} style={{width:'25px',height:'25px',margin:'2px',marginRight:'25px'}}></img>):
                item.empty==false && item.selected==false?(<img src={icon1} style={{width:'25px',height:'25px',tintColor:'#8e8e8e',margin:'2px',marginRight:'25px'}}></img>): null
              }
            </TouchableOpacity>
          );
        }}
        />
      </View>
      <View>
        <FlatList data={row2} numColumns={2} renderItem={({item,index})=>{
          return(
            <TouchableOpacity style={{margin:7}} onPress={()=>{
              if(item.selected==false && item.empty==false){
                alert("already booked");
              }
              else{
                 onSelectRow2(index);                        
              }
            }}>
              {
                item.empty==false && item.selected==true?(<img src={icon1} style={{width:'25px',height:'25px',tintColor:'green',margin:'2px',marginRight:'25px'}}></img>):
                item.empty==true && item.selected==false?(<img src={icon} style={{width:'25px',height:'25px',margin:'2px',marginRight:'25px'}}></img>):
                item.empty==false && item.selected==false?(<img src={icon1} style={{width:'25px',height:'25px',tintColor:'#8e8e8e',margin:'2px',marginRight:'25px'}}></img>): null
              }
            </TouchableOpacity>
          );
        }}
        />
      </View>    
      </View>
      <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
      <FlatList data={row3} horizontal renderItem={({item,index})=>{
          return(
            <TouchableOpacity style={{margin:7}} onPress={()=>{
              if(item.selected==false && item.empty==false){
                alert("already booked");
              }
              else{
                 onSelectRow3(index);                        
              }
            }}>
              {
                item.empty==false && item.selected==true?(<img src={icon1} style={{width:'25px',height:'25px',tintColor:'green',margin:'1.5px',marginRight:'25px'}}></img>):
                item.empty==true && item.selected==false?(<img src={icon} style={{width:'25px',height:'25px',margin:'1.5px',marginRight:'25px'}}></img>):
                item.empty==false && item.selected==false?(<img src={icon1} style={{width:'25px',height:'25px',tintColor:'#8e8e8e',margin:'1.5px',marginRight:'25px'}}></img>): null
              }
            </TouchableOpacity>
          );
        }}
        />
      </View>    
      </View>
      <View style={{position:'absolute',bottom:0,backgroundcolor:'#fff',height:60,width:'100%',elevation:2,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={{color:'#000',marginLeft:'600px'}}>{'selected Seats('+getAllseats()+')'}</Text>
        <TouchableOpacity style={{width:'30px',height:'10px',backgroundcolor:'green',justifyContent:'center',alignItems:'center',marginRight:'600px'}}>
        <Text style={{color:'green'}}>Book Now</Text></TouchableOpacity>
      </View>
    </View>
  )
}
export default Booking;
