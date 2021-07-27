import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchDetailTitleSlice } from "../../redux/tabelog/fetchDetailTitleSlice";
import "./detailTitle.css";
import "./detaiTitleSec.css"
import "./star.css"
//import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
//@import 'https://fonts.googleapis.com/css?family=Roboto';

export const DetailTitle: React.FC = () => {
    const detailTitle = useSelector((state:RootState) => state.detailTitleSlice.data);
    console.log("abbbbbbbbbb",detailTitle)
    useEffect(() => {
      if(detailTitle != null){
        const ratings = {
          hotel_a : detailTitle.star,
        }
        // total number of stars
        const starTotal = 5;
        for(const rating in ratings) {  
          const starPercentage = (ratings[rating] / starTotal) * 100;
          const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
          const showStar = document.querySelector(`.${rating} .stars-inner`) as HTMLElement;
          showStar.style.width = starPercentageRounded; 
        }
      }
    }, [detailTitle]);
    
      return detailTitle === null ? (
        <h2>loading</h2>
      ) : (
    <div className="rdheader-title-data">
      <div className="rdheader-rstname-wrap">
        <div className="rdheader-rstname">
            <a href="https://tabelog.com/tokyo/A1302/A130201/13019285/" property=""><span className="pillow-word">{detailTitle.style}</span></a>
          <h2 className="display-name">
              <span>
                  {detailTitle.name}
              </span>
          </h2>
          <span className="alias">（オジョリ）</span>
          <div className="rdheader-official-info">
              <div id="js-rdhead-group" className="group-badge">
                {/* <p className="group-badge__icon">関連店舗</p> */}
                <div id="js-group_search" className="group-badge__search" style={{display:'none'}}>
                  <div className="c-balloon c-balloon--top group-badge__search-box">
                    <dl className="rdhead-grouplink">
                        <dt className="rdhead-grouplink__title">東京駅　改札外内の他の店舗を探す</dt>
                        <dd className="rdhead-grouplink__item">
                          <ul className="rdhead-grouplink__item-list">
                            <li className="rdhead-grouplink__item-link">
                              <a href="/tokyo/P055549/premiseLst/">
                                東京駅　改札外内のレストラン一覧
                              </a>
                            </li>
                          </ul>
                        </dd>
                        <dt className="rdhead-grouplink__title">吾照里の他の店舗を探す</dt>
                        <dd className="rdhead-grouplink__item">
                          <ul className="rdhead-grouplink__item-list">
                            <li className="rdhead-grouplink__item-link">
                              <a href="/grouplst/G00470/">
                                全国の吾照里
                              </a>
                            </li>
                            <li className="rdhead-grouplink__item-link">
                              <a href="/grouplst/G00470/tokyo/">
                                東京の吾照里
                              </a>
                            </li>
                          </ul>
                        </dd>
                    </dl>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div id="js-header-rating" className="rdheader-counts-wrap">
        <ul className="rdheader-counts">
          <li className="rdheader-counts__item">
            <div className="rdheader-rating__score" id="js-detail-score-open">
              <p className="c-rating c-rating--val30 c-rating--xxl">
              
                <i>
                    <tr className="hotel_a">
                      <td>
                        <div className="stars-outer">
                          <div className="stars-inner"></div>
                        </div>
                      </td>
                    </tr>

                    {/* <b className="c-rating__val rdheader-rating__score-val"> */}
                    <span className="rdheader-rating__score-val-dtl">
                    {detailTitle.star}
                      </span>
                    {/* </b> */}
             
                <a className="attribution" href="http://fontawesome.io/">
                  <i className="fa fa-font-awesome"></i></a>
                </i>

              </p>
            </div>
          </li>
          <li className="rdheader-counts__item">
            <span className="rdheader-rating__review">
              <span className="rdheader-rating__review-target">
                <a property="" href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlrvwlst/"><i>口コミ</i> <em className="num">{detailTitle.commentNum}</em> <span className="unit">件</span></a>              </span>
            </span>
          </li>
          <li className="rdheader-counts__item">
            <span className="rdheader-rating__hozon">
              <span className="rdheader-rating__hozon-target">
                <i>保存</i> <em className="num">4440</em> <span className="unit">件</span>              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
    );
};