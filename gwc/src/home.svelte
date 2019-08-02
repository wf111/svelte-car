<script>
    export let arr
    let list = []
    import { Router, Link, Route } from "svelte-routing";
    import store from './store/store'
    let addcar=function (val) {
        let vd=list.indexOf(val)
            if(vd==-1){
                list.push(val)
                store.set(list)
            }
		}
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
.syfoot{
	width:100%;
	height:50px;
	background:#ccc;
	position:fixed;
	bottom:0;
	left:0;
	padding:0 15px;
	box-sizing:border-box;
}
.cartop{
	width:100%;
	height:50px;
	background:#ccc;
	position:fixed;
	top:0;
	left:0;
	padding:0 15px;
	box-sizing:border-box;
	text-align:center;
	line-height:50px
}
.bodybox{
	margin-top:50px
}
</style>

<div class='box'>
<div class='cartop'>首页</div>
<div class='bodybox'>
	{#each arr as val,i}
		<div class='big'>
			<img src='{val.littleImageUrl}' alt=''>
			<div class='right'>
			    <p>{val.spuName}</p>
				<p>{val.currentPrice}元</p>
               <button on:click={()=>addcar(val)}>加入购物车</button>
            </div>
		</div>
	{/each}
	</div>
<div class='syfoot'>
    <Link to='/'></Link>
    <Link to='Car'>去购物车</Link>
</div>
</div>
