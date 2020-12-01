<template>
    <div class="footer">
			<div class="footer-logo">
				<img src="/imgs/logo-footer.png" alt="">
				<p>小米商城</p>
			</div>
			<div class="footer-link">
				<a href="https://www.mi.com/index.html" target="_blank">4xi的小米主页</a><span>|</span>
				<a href="https://home.miui.com/" target="_blank">MIUIのVue全栈</a><span>|</span>
				<a href="https://home.mi.com/index.html" target="_blank">米家の我太爱读书了</a><span>|</span>
				<a href="http://www.miliao.com/" target="_blank">米聊の读书让我快乐555</a><span>|</span>
			</div>
			<div class="copyright">京ICP证110507号 © <span class="domain">mi.futurefecom</span> 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号</div>
    </div>
</template>

<script>
    export default{
        name:'nav-footer',
    }

</script>

<style lang="scss">
	.footer{
		height: 234px;
		border-top: 4px solid #FF6600;
		background-color: #333333;
		color: #999999;
		font-size: 16px;
		text-align: center;
		.footer-logo{
			margin-top:46px;
			margin-bottom:31px;
			img{
				width: 53px;
				height: 36px;
				margin-bottom:13px;
			}
		}
		.footer-link{
			a{
				color: #999999;
				display:inline-block;
			}
			span{
				margin:0 10px;				
			}
			margin-bottom:13px;
		}
		.copyright{
			.domain{
				color:#FF6600;
			}
		}
	}
</style>