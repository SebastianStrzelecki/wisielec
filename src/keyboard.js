import React from 'react'

const Keyboard = (props) => (
    <div className = 'keyboard-container'>
        <input className="key" type="button" onClick = {props.onClickkeys} disabled={props.isDisabled} value="a"/>
        <input className="key" type="button" onClick = {props.onClickkeys} disabled={props.isDisabled} value="b"/>
        <input className="key" type="button" onClick = {props.onClickkeys} disabled={props.isDisabled} value="c"/>
        <input className="key" type="button" onClick = {props.onClickkeys} disabled={props.isDisabled} value="d"/>
        <input className="key" type="button" onClick = {props.onClickkeys} disabled={props.isDisabled} value="e"/>
        <input className="key" type="button" onClick = {props.onClickkeys} disabled={props.isDisabled} value="f"/>
        <input className="key" type="button" onClick = {props.onClickkeys} disabled={props.isDisabled} value="g"/>
        <input className="key" type="button" onClick = {props.onClickkeys} disabled={props.isDisabled} value="h"/>
        <input className="key" type="button" onClick = {props.onClickkeys} disabled={props.isDisabled} value="i"/>
        <input className="key" type="button" onClick = {props.onClickkeys} disabled={props.isDisabled} value="j"/>
        <input className="key" type="button" onClick = {props.onClickkeys} disabled={props.isDisabled} value="k"/>
        <input className="key" type="button" onClick = {props.onClickkeys} disabled={props.isDisabled} value="l"/>
        <input className="key" type="button" onClick = {props.onClickkeys} disabled={props.isDisabled} value="m"/>
        <input className="key" type="button" onClick = {props.onClickkeys} disabled={props.isDisabled} value="n"/>
        <input className="key" type="button" onClick = {props.onClickkeys} disabled={props.isDisabled} value="o"/>
        <input className="key" type="button" onClick = {props.onClickkeys} disabled={props.isDisabled} value="p"/>
        <input className="key" type="button" onClick = {props.onClickkeys} disabled={props.isDisabled} value="r"/>
        <input className="key" type="button" onClick = {props.onClickkeys} disabled={props.isDisabled} value="s"/>
        <input className="key" type="button" onClick = {props.onClickkeys} disabled={props.isDisabled} value="t"/>
        <input className="key" type="button" onClick = {props.onClickkeys} disabled={props.isDisabled} value="u"/>
        <input className="key" type="button" onClick = {props.onClickkeys} disabled={props.isDisabled} value="w"/>
        <input className="key" type="button" onClick = {props.onClickkeys} disabled={props.isDisabled} value="y"/>
        <input className="key" type="button" onClick = {props.onClickkeys} disabled={props.isDisabled} value="z"/>
      
        
    </div>
);
export default Keyboard