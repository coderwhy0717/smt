import styled from 'styled-components'

export const HomeWrapper = styled.div`
	position: relative;
    font-family:'微软雅黑';
	color:#fff;
	font-size:2.5rem;
	border: 1px solid #fff;
	
	.title {
		height:10rem;
		line-height:10rem;
		border-bottom:0.07142857142857142rem solid #fff;
		text-align:center;
		font-size:3.2142857142857144rem;
	}
	/* 遮罩层 */
	.cover {
		position: absolute;
		top: 0;
		z-index: 9999;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		height: 100%;
		background-color: rgba(65, 109, 165,.5);
	}
.conent {
	.line {
        display:flex;
        align-items:center;
        border-bottom:0.07142857142857142rem solid #fff;
	.line-a {
        width:19rem;
		padding-left: .5rem;
        margin-right:1rem;
        color:#f9f9f9;
	    .line-name {
            display:inline-block;
            color:#000;
            background-color:#fff;
            border:1px solid #ccc;
            padding:0 0.7142857142857143rem;
        }
    }
    .text_top {
        flex:1;
        border-right:0.07142857142857142rem solid #fff;
        border-left:0.07142857142857142rem solid #fff;
        padding:0.8333333333333334rem 0 0.8333333333333334rem 1.25rem;
		line-height: 3.5rem;
	.conent-a {
        display:flex;
        font-size:2rem;
	.gongdan {
        span {
         border-bottom:0.14285714285714285rem solid #fff;
        }
    }
    .daima {
        margin:0 3rem;
        span {
            border-bottom:0.14285714285714285rem solid #fff;
        }
    }
    .number {
        span {
            border-bottom:0.14285714285714285rem solid #fff;
        }
    }
}
.text-name {
        font-size:1.8571428571428572rem;
	div {
	    margin:0.35714285714285715rem 0;
    }
span {
	border-bottom:0.14285714285714285rem solid #fff;
}
}}.time {
	padding:0 0.35714285714285715rem;
	.time-fz {
	font-size:2rem;
	text-align:center;
	.hhmm {
	font-size:2.142857142857143rem;
}
}}}.message {
	display:flex;
	justify-content:space-between;
	align-items:center;
	height:9rem;
	border-bottom:0.07142857142857142rem solid #fff;
	padding:0 .5rem;
	span {
	background-color:#fff;
    border-radius: 1px;
	color:#000;
	padding:0 0.35714285714285715rem;
}
}.footer {
	margin:1.4285714285714286rem 0;
.Status {
	display:flex;
	align-items:center;
	justify-content:space-around;
	font-size:1.8rem;
	.aocv {
	    text-align:center;
	img {
        width:12rem;
        height:9rem;
        margin:0.7142857142857143rem 0;
    }
}.tiepian {
	text-align:center;
	.img {
	img {
	width:8rem;
	height:8rem;
	margin:0.8571428571428571rem 0.7142857142857143rem 0.7142857142857143rem 0;
}
}}.huilu {
	text-align:center;
	img {
	width:18rem;
	height:9rem;
	margin:0.7142857142857143rem 2.142857142857143rem 0.7142857142857143rem 0;
}
}
.aio {
	text-align:center;
	.aio-img {
		width:12rem;
		height:9rem;
		margin:0.7142857142857143rem 0;
}
}
}
}
}
        .div-fff {
            opacity:0;
        }
        .run {
            color: #00FF01;
        }
        .imgaas {
            width: 100px;
            height: 100px;
        }
		/* .red {
			color: red !important;
		} */
`