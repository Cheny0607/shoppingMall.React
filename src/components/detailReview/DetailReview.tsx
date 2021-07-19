import React , {useEffect, useState} from "react"
import "../smDetailPage/SmDetailPage.css"
import {  useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import{ fetchDetailReviewSlice } from "../../redux/detailReviewSlice/fetchDetailReviewSlice";
import{ fetchReviewMoreSlice } from "../../redux/detailReviewSlice/fetchMoreReviewsSlice";
//import { useSelector } from "react-redux";
import { RootState } from "../../redux/store"
import { useSelector } from "../../redux/hooks";
import { clearReviewMoreList } from "../../redux/detailReviewSlice/fetchMoreReviewsSlice"
import { fetchInsertHelpedNumSlice } from "../../redux/detailReviewSlice/fetchInsertHelpedNumSlice";

interface ifProps {
    id:number,
    star:number,
    reviewNum:number,
    commentDate:Date,
    title:string,
    content:string,
    picture: number ;
    nickName:string
    goodsName:string
}
  
  interface pIf {
    data: ifProps[];
  }

  interface MatchParams {
    goodsId: string;
  }

export const DetailReview: React.FC<pIf> = ({}) => {
    const initialReview = useSelector((state) => state.reviewMoreSlice.initialList);
    const showMoreReview = useSelector((state:RootState) => state.reviewMoreSlice.reviewMoreList);
    
    const { goodsId } = useParams<MatchParams>();
    const dispatch = useDispatch()
    useEffect(() => {
        //dispatch(fetchDetailReviewSlice (goodsId));
        dispatch(fetchReviewMoreSlice({goodsId}))
      }, []);

      let ids = initialReview.map(item => item.id);
      const showMoreReviewBtn = (e) => { 
        dispatch(fetchReviewMoreSlice({ids,goodsId}));
        if(ids!= null){
            const showList = document.getElementsByClassName("showMoreList")[0] as HTMLElement;
            showList.style.display = "none";
            const closeList = document.getElementsByClassName("closeList")[0] as HTMLElement;
            closeList.style.display = "block";
        }
      };
      const closeBtn = () => {
          dispatch(clearReviewMoreList(showMoreReview))
        if(ids!= null){
            const showList = document.getElementsByClassName("closeList")[0] as HTMLElement;
            showList.style.display = "none";
            const closeList = document.getElementsByClassName("showMoreList")[0] as HTMLElement;
            closeList.style.display = "block";
        }
      }
      const helpedNumBtn = (e) => {
        let reviewId:number = e.currentTarget.getAttribute("review-id"); 
        console.log("2222222",reviewId)
        debugger;
        let flag = false;
        for (let i = 0; i < ids.length; i++) {
          if (ids[i] === +reviewId) {
              flag=true;
            }
        }if(flag){
            dispatch(
                fetchInsertHelpedNumSlice({reviewId, goodsId})
            );
          } else {
            dispatch(
                fetchInsertHelpedNumSlice({ reviewId, goodsId, ids: ids })
            );
          }
        
            //dispatch(fetchInsertHelpedNumSlice({reviewId,ids:ids})); 
        
      }
 
    return initialReview === null ? (
        <h2>loading</h2>
      ) :(
     
        <section className="g-grid_item g-sm-block-sm" id="js-product-reviews" aria-hidden="false">
        <div id="js-replace"><input type="hidden" name="productCodePost" value=""/>

            <div id="normal-productreview">
                    <h2 className="g-h-2 g-h-i p-hd">
                        <i className="g-s g-s-comment" aria-hidden="true"></i>
                        <span>レビュー</span>
                    </h2>


                    <div className="p-reviewScore">
                                <p className="p-average">
                                    平均評価<span className="g-digit">4.7</span>
                                    <span data-score="4.7">
                                        <span className="g-clip">
                                            <img src="http://localhost:8081/goods-img/star.jpg" alt=""/>
                                            <img src="http://localhost:8081/goods-img/star.jpg" alt=""/>
                                            <img src="http://localhost:8081/goods-img/star.jpg" alt=""/>
                                            <img src="http://localhost:8081/goods-img/star.jpg" alt=""/>
                                            <img src="http://localhost:8081/goods-img/star.jpg" alt=""/>
                                        </span>

                                    </span>
                                </p>
                                <p className="g-score">
                                    <span data-score="4.7"></span>
                                    <span>(<span id="js-reviews">4</span>)</span>
                                </p>
                                <p className="g-label-brand g-reviewList_label">ピックアップレビュー</p>
                    </div>

                            <ul className="g-reviewListInitial">
                            {initialReview.map((detailReviewData,index)=> {
                                return (
                                    <li className="g-reviewList_item" key={index}>                                  
                                
                                    <div className="g-lg-flow-sm">
                                        <p className="g-score">
                                            <span data-score="5.0">
                                                    <span className="g-clip"></span>
                                                {/* <span className="g-clip">
                                                <img  src="/goods-img/star.jpg">
                                                <img  src="/goods-img/star.jpg">
                                                <img  src="/goods-img/star.jpg">
                                                <img  src="/goods-img/star.jpg">
                                                <img  src="/goods-img/star.jpg">	
                                                </span> */}
                                            </span>
                                        </p>
                                    </div>

                                    <p className="g-reviewList_user"><b>{detailReviewData.nickName}</b>さん<span className="g-clip">{detailReviewData.commentDate}</span></p>
                                        <p className="g-reviewList_info">{detailReviewData.title}</p>
                                        <p className="g-reviewList_h">{detailReviewData.title}</p>
                                        <p>{detailReviewData.content}</p>
                                        {/* <p className="g-reviewList_like"><a className="g-link reviewLike0" id="js-hitLike" data-count="0" data="5f157a91791f76004b000099" data-clickable=""><i className="g-s g-s-like-g" aria-hidden="true"></i><span>参考になった（125人）</span></a></p> */}
                                        <p className="g-reviewList_like">
                                                <a className="g-link reviewLike0" id="js-hitLike" data-count="0" data-clickable="">
                                                <i className="g-s g-s-like-g" aria-hidden="true">
                                                    <img className="thumUpImg" src="http://localhost:8081/goods-img/thumUp.jpg" alt="Italian Trulli" />
                                                </i><span className="initialHelpNumSpan"
                                                 review-id ={detailReviewData.id}
                                                 onClick={helpedNumBtn}
                                                >参考になった({detailReviewData.reviewNum})</span></a>
                                        </p>	
                                </li>	
                                );
                            })}

                            {showMoreReview.map((detailReviewData,index)=> {
                                return (
                                    <li className="g-reviewList_item" key={index}>                                  
                                
                                    <div className="g-lg-flow-sm">
                                        <p className="g-score">
                                            <span data-score="5.0">
                                                    <span className="g-clip"></span>
                                                {/* <span className="g-clip">
                                                <img  src="/goods-img/star.jpg">
                                                <img  src="/goods-img/star.jpg">
                                                <img  src="/goods-img/star.jpg">
                                                <img  src="/goods-img/star.jpg">
                                                <img  src="/goods-img/star.jpg">	
                                                </span> */}
                                            </span>
                                        </p>
                                    </div>

                                    <p className="g-reviewList_user"><b>{detailReviewData.nickName}</b>さん<span className="g-clip">{detailReviewData.commentDate}</span></p>
                                        <p className="g-reviewList_info">{detailReviewData.title}</p>
                                        <p className="g-reviewList_h">{detailReviewData.title}</p>
                                        <p>{detailReviewData.content}</p>
                                        {/* <p className="g-reviewList_like"><a className="g-link reviewLike0" id="js-hitLike" data-count="0" data="5f157a91791f76004b000099" data-clickable=""><i className="g-s g-s-like-g" aria-hidden="true"></i><span>参考になった（125人）</span></a></p> */}
                                        <p className="g-reviewList_like">
                                                <a className="g-link reviewLike0" id="js-hitLike" data-count="0" data-clickable="">
                                                <i className="g-s g-s-like-g" aria-hidden="true">
                                                    <img className="thumUpImg" src="http://localhost:8081/goods-img/thumUp.jpg" alt="Italian Trulli" />
                                                </i><span className="initialHelpNumSpan"
                                                review-id ={detailReviewData.id}
                                                onClick={helpedNumBtn}
                                                >参考になった({detailReviewData.reviewNum})</span></a>
                                        </p>	
                                </li>	
                                );
                            })}
                            
                                    
                            </ul>	
            </div>
        </div>
        <div className="g-foot-v g-foot-sm" id="js-review-more" aria-hidden="false">
            <p className="g-align-tc" id="showMoreReviewBtn">
                <a className="g-link displaymorereview" href="#p-reviewMore" role="button" aria-expanded="false" aria-controls="p-reviewMore" data-label="閉じる" data-accordion="{&quot;scroll&quot;:false}">
                    <i className="g-i g-i-arrow-d"></i><span id="showMoreLabel" 
                    onClick={showMoreReviewBtn} className="showMoreList"
                    > レビューをもっと見る（3/<span id="js-reviews-more">4</span>）</span></a>
            </p>
            <p className="g-align-tc" id="closeBtn">
                <a className="g-link displaymorereview" href="#p-reviewMore" role="button" aria-expanded="false" aria-controls="p-reviewMore" data-label="閉じる" data-accordion="{&quot;scroll&quot;:false}">
                    <i className="g-i g-i-arrow-d"></i>
                    <span id="closeLabel" onClick={closeBtn} className="closeList" style={{display:"none"}}>閉じる</span>
                </a>
            </p>
        </div>
    </section>
    
    );
  };