import React, { useEffect, useRef, useState } from "react";
import { DetailTitle } from "../../components/tabelogDetailTitle/detailTitle";
import { SubTitle } from "../../components/tabelogDetailTitle/subTitle";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { fetchDetailTitleSlice } from "../../redux/tabelog/fetchDetailTitleSlice";
import { RouteComponentProps, useParams } from "react-router-dom";
import { fetchSubTitleSlice } from "../../redux/tabelog/fetchSubTitleSlice";

interface MatchParams {
    id: string;
  }

export const TabeLog: React.FC<RouteComponentProps<MatchParams>> = () => {
    const { id } = useParams<MatchParams>();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDetailTitleSlice({id:id}));
        dispatch(fetchSubTitleSlice({id:id}));
      }, []);


    return (
        <body className="rst" id="rstdtl_top">
            <section className="rdheader-info-wrap pillow-header">
            <DetailTitle></DetailTitle>
            <SubTitle></SubTitle>
            </section>
        </body>
    )
};