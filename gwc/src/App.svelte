<script>
	import { Router, Link, Route } from "svelte-routing";
	import Car from './Car.svelte'
	import Home from './home.svelte'
	import { onMount } from 'svelte';
	   let arr=[];
	   let list=[];
	    var price = 0;
        var sumb = 0;
        onMount(async function() {
           let data= await fetch('http://169.254.213.13:7002/user')
           let result = await data.json()
		   arr=result
		   arr.map((v,index)=>{
                price += arr[index].count * arr[index].currentPrice;
                sumb += arr[index].count;
			})
		});
		
	

</script>

<style>
.box{
	width:100%;
	overflow:auto;
}
.big{
	display:flex;
	margin:10px 0;
}
.big img{
	width:50%;
}
.right{
	padding:0 15px;
	box-sizing:border-box;
}
.footer{
	width:100%;
	height:100px;
	background:#ccc;
	position:fixed;
	bottom:0;
	left:0;
	padding:0 15px;
	box-sizing:border-box;
}
</style>

<div class='box'>
	<Router>
		<Route path="Car" component={Car}></Route>
		<Route path="/"><Home arr = {arr}/></Route>
	</Router>
</div>
