import React ,{ useEffect } from "react";
import "../smDetailPage/SmDetailPage.css";
import {  useDispatch } from "react-redux";
import{fetchDetailSizeSlice } from "../../redux/detailSizeSlice/fetchDetailSizeSlice"
import {  useParams } from "react-router-dom";

export interface ifProps { 
    // goodsId: number,
    color: String,
    size: String,
    material:String,
    weight:String,
    warrantyYear:String,
    setDate:String,
    wrapSize:String,
    }
  
//   interface pIf {
//     data: ifProps;
//   }

  interface MatchParams {
    goodsId: string;
  }
  
export const DetailSize: React.FC <ifProps> = ({color,size,material,weight,warrantyYear,setDate,wrapSize}) => {
   
    // console.log("aaaaaaaaaa",data);
    const { goodsId } = useParams<MatchParams>();
    const dispatch = useDispatch()
    useEffect(() => {
        //console.log("in shoppngMall.tsx file ");
        dispatch(fetchDetailSizeSlice (goodsId));
      }, []);

      
   
    return (
            <section className="g-block-sm p-spec" id="js-product-spec">
                <h2 className="g-h-2 g-h-i p-hd"><i className="g-s g-s-size" aria-hidden="true"></i><span>仕様・サイズ</span></h2>
                <div id="p-specMore" aria-hidden="false" data-accordion-more="">
                    <ul className="g-flow-lg g-flow-half g-unit js-sku-manuals p-sku-manuals">
                    </ul>
                    <table className="g-table-a js-sku-specs">
                        <tbody>
                            <tr>
                                <th>商品コード</th>
                                <td>{goodsId}</td>
                            </tr>
                            <tr>
                                <th>カラー</th>
                                <td>{color}</td>
                            </tr>
                            <tr>
                                <th>サイズ</th>
                                <td>{size}</td>
                            </tr>
                            <tr>
                                <th>素材</th>
                                <td>{material}</td>
                            </tr>
                            <tr>
                                <th>重量</th>
                                <td>{weight}</td>
                            </tr>
                            <tr>
                                <th>保証年数</th>
                                <td>{warrantyYear}</td>
                            </tr>
                            <tr>
                                <th>組立時間</th>
                                <td>{setDate}</td>
                            </tr>
                            <tr>
                                <th>梱包サイズ</th>
                                <td>{wrapSize}</td>
                            </tr>
                            {/* hidden="hidden" */}
                            <tr>
                                <th>原産国</th>
                                <td>中国</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
    );
  };
  