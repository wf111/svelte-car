<script>
 import store from './store/store'
 var list=[]
        store.update((res)=>{
          list=res
        })
        let checkall = false;
        var price = 0;
        var sumb = 0;
		let add=function (i) {
			list.map((v,index)=>{
				if(v.check){
                    if(index===i){
					list[i].count++

					price += list[index].currentPrice;
					sumb +=1 ;
					}
				}
			})
		}
		let del=function (i) {
            list.map((v,index)=>{
				if(v.check){
					if(index===i){
						if(list[i].count>0){
						list[i].count--
						price -= list[i].currentPrice;
						sumb -= 1;
						}
					}
				}
			})
        }
    const change = (id) =>{
		id.check=!id.check
		let falg = list.every(item =>{
			return item.check
		})
		price=0
		sumb=0
		list.forEach((res)=>{
			if(res.check){
				price+=res.currentPrice*res.count
				sumb+=res.count
			}
			
		})
		checkall = falg
		list = list
		
	}
	const allchange = () =>{
		let flag = list.every(item =>{
			return item.check
		})
		if(!flag){
			price=0
			sumb=0
			list.forEach(res=>{
				res.check = true;
				if(res.check){
					price+=res.currentPrice*res.count
					sumb+=res.count
				}
			})
		}else{
			list.forEach(item=>{
				item.check = false;
			})
			price=0
			sumb=0
			
		}
		list = list
	}
	const scdl=(i)=>{
		list.splice(i,1);
		list = list
	}
</script>
<style>
.bigs{
	display:flex;
	margin:10px 0;
}
.bigs img{
	width:50%;
}
.rights{
	padding:0 15px;
	box-sizing:border-box;
}
.car{
    width:100%;
	flex:1;
    overflow:auto;
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
.carbox{
	margin-top:50px
}
.allp{
	margin:0;
}
</style>
<div class='car'>
<div class='cartop'>购物车</div>
<div class='carbox'>
{#each list&&list as val,i}
<div class='bigs'>
    <input type="checkbox" checked='{val.check}' on:change={() => {
                    change(val)
                }}/>
    <img src='{val.littleImageUrl}' alt=''>
    <div class='rights'>
        <p>{val.spuName}</p>
        <p>{val.currentPrice}元</p>
        <p>
        <button on:click={()=>del(i)}>-</button>
        {val.count}
        <button on:click={()=>add(i)}>+</button>
        </p>
		
    </div>
	<b on:click={()=>scdl(i)}>删除</b>
</div>
{/each}
</div>
<div class='footer'>
<p class="allp"> 全选 <input type="checkbox" on:change={allchange} bind:checked={checkall} ></p>
 <p class="allp">共{sumb}分</p>
 <p class="allp">总价：{price}</p>
</div>
</div>