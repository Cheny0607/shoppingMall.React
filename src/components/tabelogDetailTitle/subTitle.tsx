import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { GenreList } from "../../components/tabelogDetailTitle/genreList";

export const SubTitle: React.FC = () => {
  const subTitle = useSelector((state:RootState) => state.subTitleSlice.data);
  return subTitle === null ? (
    <h2>loading</h2>
  ) : (
    <div className="rdheader-info-data">
      <div className="rdheader-data">
        <div className="rdheader-info-box">
          <div className="rdheader-subinfo">
              <dl className="rdheader-subinfo__item rdheader-subinfo__item--station">
                <dt className="rdheader-subinfo__item-title">最寄り駅：</dt>
                <dd className="rdheader-subinfo__item-text">
                  
        <div className="linktree">
            {/* onmouseover="this.classNameName='linktree is-selected';" onmouseout="this.classNameName='linktree';" */}
          <div className="linktree__parent">
            <a href="https://tabelog.com/tokyo/A1302/A130201/R6586/rstLst/" className="linktree__parent-target">
              <span className="linktree__parent-target-text">{subTitle.nearbyStation}</span>
            </a>
          </div>
          <div className="linktree__childbox">
            <div className="c-balloon c-balloon--top linktree__childbaloon">
              <ul className="linktree__childlist"><li className="linktree__childlist-item">
                  <a href="https://tabelog.com/tokyo/A1302/A130201/R6586/rstLst/RC040101/">東京駅×韓国料理</a></li>
                  <li className="linktree__childlist-item"><a href="https://tabelog.com/tokyo/A1302/A130201/R6586/rstLst/yakiniku/">東京駅×焼肉</a></li>
                  <li className="linktree__childlist-item"><a href="https://tabelog.com/tokyo/A1302/A130201/R6586/rstLst/izakaya/">東京駅×居酒屋</a></li>
              </ul>
            </div>
          </div>
        </div>
                </dd>
              </dl>
            <div className="rdheader-subinfo__item">
              
      <div className="linktree">
          {/* onmouseover="this.classNameName='linktree is-selected';" onmouseout="this.classNameName='linktree';" */}
        <div className="linktree__parent">
          [<a href="https://tabelog.com/tokyo/" className="linktree__parent-target">
            <span className="linktree__parent-target-text">東京</span>
          </a>]
        </div> 
        <div className="linktree__childbox">
          <div className="c-balloon c-balloon--top linktree__childbaloon">
            <ul className="linktree__childlist"><li className="linktree__childlist-item">
                <a href="https://tabelog.com/tokyo/rstLst/RC040101/">東京×韓国料理</a></li>
                <li className="linktree__childlist-item"><a href="https://tabelog.com/tokyo/rstLst/yakiniku/">東京×焼肉</a></li>
                <li className="linktree__childlist-item"><a href="https://tabelog.com/tokyo/rstLst/izakaya/">東京×居酒屋</a></li>
            </ul>
          </div>
        </div>
      </div>
            </div>
           <GenreList></GenreList>
          </div>
          <div className="rdheader-subinfo">
            <dl className="rdheader-subinfo__item">
              <dt className="rdheader-subinfo__item-title">予算：</dt>
              <dd className="rdheader-subinfo__item-text">
                <div className="rdheader-budget">
                  <p className="rdheader-budget__icon rdheader-budget__icon--dinner">
                    <i>夜の予算</i>
                    <span className="rdheader-budget__price">
                      <a href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlratings/#price-range" className="rdheader-budget__price-target">{subTitle.nightBudget}</a>
                    </span>
                  </p>
                  <p className="rdheader-budget__icon rdheader-budget__icon--lunch">
                    <i>昼の予算</i>
                    <span className="rdheader-budget__price">
                      <a href="https://tabelog.com/tokyo/A1302/A130201/13019285/dtlratings/#price-range" className="rdheader-budget__price-target">{subTitle.dayBudget}</a>
                    </span>
                  </p>
                </div>
              </dd>
            </dl>
              <dl className="rdheader-subinfo__item">
                <dt id="js-closed-label" className="rdheader-subinfo__item-title">
                    定休日：
                </dt>
                <dd id="short-comment" className="rdheader-subinfo__closed-text">
                {subTitle.restDay}                </dd>
              </dl>
          </div>

          <div className="rdheader-subinfo">
              <div className="rdheader-gte">
                <a target="_blank" rel="noopener" className="js-analytics rdheader-gte__target" data-analytics-btn=":gotoeat_icon" data-analytics-add-page-prefix="true" href="https://tabelog.com/go-to-eat/">                  
                <img alt="Go To Eat" width="47" height="12" className="rdheader-gte__img loading" src="https://tblg.k-img.com/images/restaurant/icon/badge_gotoeat_logo.png" data-was-processed="true"/>
                  <span className="rdheader-gte__txt">ポイント使える</span>
                </a>              
                </div>
          </div>

            <div className="rdheader-go-rstinfo">
              <a className="js-go-rstinfo" href="#title-rstdata">店舗情報（詳細）</a>
            </div>
        </div>
      </div>
    </div>
    )
}