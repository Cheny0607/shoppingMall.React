import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { RouteComponentProps, useParams } from "react-router-dom";
import { fetchGenreSlice } from "../../redux/tabelog/fetchGenreSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface MatchParams {
    id: string;
  }

export const GenreList: React.FC = () => {
    const { id } = useParams<MatchParams>();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchGenreSlice({id:id}));
      }, []);

    const genreList = useSelector((state:RootState) => state.genreSlice.data);

    return genreList === null ? (
        <h2>loading</h2>
      ) : (
        <dl className="rdheader-subinfo__item">
        <dt className="rdheader-subinfo__item-title">ジャンル：</dt>
        <dd className="rdheader-subinfo__item-text">
          
  <div className="linktree">
      {/* onmouseover="this.classNameName='linktree is-selected';" onmouseout="this.classNameName='linktree';" */}
    <div className="linktree__parent">
      <a href="https://tabelog.com/rstLst/RC040101/" className="linktree__parent-target">
        <span className="linktree__parent-target-text">{genreList[0].name1}</span>
      </a>
    </div>
    <div className="linktree__childbox">
      <div className="c-balloon c-balloon--top linktree__childbaloon">
        <ul className="linktree__childlist"><li className="linktree__childlist-item">
            <a href="https://tabelog.com/tokyo/A1302/A130201/rstLst/RC040101/">韓国料理×丸の内・大手町</a></li>
            <li className="linktree__childlist-item"><a href="https://tabelog.com/tokyo/A1302/rstLst/RC040101/">韓国料理×東京・日本橋</a></li>
            <li className="linktree__childlist-item"><a href="https://tabelog.com/tokyo/rstLst/RC040101/">韓国料理×東京</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="linktree">
      {/* onmouseover="this.classNameName='linktree is-selected';" onmouseout="this.classNameName='linktree';" */}
    <div className="linktree__parent">
      <a href="https://tabelog.com/rstLst/yakiniku/" className="linktree__parent-target">
        <span className="linktree__parent-target-text">{genreList[0].name2}</span>
      </a>
    </div>
    <div className="linktree__childbox">
      <div className="c-balloon c-balloon--top linktree__childbaloon">
        <ul className="linktree__childlist"><li className="linktree__childlist-item">
            <a href="https://tabelog.com/tokyo/A1302/A130201/rstLst/yakiniku/">焼肉×丸の内・大手町</a></li>
            <li className="linktree__childlist-item"><a href="https://tabelog.com/tokyo/A1302/rstLst/yakiniku/">焼肉×東京・日本橋</a></li>
            <li className="linktree__childlist-item"><a href="https://tabelog.com/tokyo/rstLst/yakiniku/">焼肉×東京</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="linktree">
      {/* onmouseover="this.classNameName='linktree is-selected';" onmouseout="this.classNameName='linktree';" */}
    <div className="linktree__parent">
      <a href="https://tabelog.com/rstLst/izakaya/" className="linktree__parent-target">
        <span className="linktree__parent-target-text">{genreList[0].name3}</span>
      </a>
    </div>
    <div className="linktree__childbox">
      <div className="c-balloon c-balloon--top linktree__childbaloon">
        <ul className="linktree__childlist"><li className="linktree__childlist-item">
            <a href="https://tabelog.com/tokyo/A1302/A130201/rstLst/izakaya/">居酒屋×丸の内・大手町</a></li>
            <li className="linktree__childlist-item"><a href="https://tabelog.com/tokyo/A1302/rstLst/izakaya/">居酒屋×東京・日本橋</a></li>
            <li className="linktree__childlist-item"><a href="https://tabelog.com/tokyo/rstLst/izakaya/">居酒屋×東京</a></li>
        </ul>
      </div>
    </div>
  </div>
        </dd>
      </dl>
    );
};