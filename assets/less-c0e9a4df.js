import{p as t}from"./standalone-f84b9aa1.js";import{p as r}from"./parser-postcss-86202697.js";import{B as s}from"./base-f0edccdd.js";import"./tool-79977430.js";import"./modulepreload-polyfill-3cfb730f.js";const m=new class extends s{async beautify(){return t.format(this.code,{plugins:[r],parser:"less",tabWidth:this.getOptionValue("tab",4)})}};export{m as formatter};