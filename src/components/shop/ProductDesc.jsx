// import { ProductDescStyle } from './style';
// import { allProductData } from '../../assets/api/productData';

// const ProductDesc = ({ product }) => {
//     const {
//         title,
//         price,
//         imgUrl,
//         salePercent,
//         salePrice,
//         nowLine,
//         colorDark,
//         colorSale,
//         colorLight,
//         desc,
//     } = product;
//     return (
//         <ProductDescStyle style={{ background: { colorLight } }}>
//             <div className="inner">
//                 <div className="contentWrap">
//                     <ul className="left">
//                         <li>
//                             <p className="icon">
//                                 <img src="/images/mi_drop.png" alt="" />
//                             </p>
//                             <strong>3중 히알루론 산으로</strong>
//                         </li>
//                         <li>
//                             <p className="icon">
//                                 <img src="/images/mi_drop.png" alt="" />
//                             </p>
//                             <strong>3중 히알루론 산으로</strong>
//                         </li>
//                         <li>
//                             <p className="icon">
//                                 <img src="/images/mi_drop.png" alt="" />
//                             </p>
//                             <strong>3중 히알루론 산으로</strong>
//                         </li>
//                     </ul>
//                     <ul className="right">
//                         <li>
//                             <p className="icon">
//                                 <img src="/images/mi_drop.png" alt="" />
//                             </p>
//                             <strong>3중 히알루론 산으로</strong>
//                         </li>
//                         <li>
//                             <p className="icon">
//                                 <img src="/images/mi_drop.png" alt="" />
//                             </p>
//                             <strong>3중 히알루론 산으로</strong>
//                         </li>
//                         <li>
//                             <p className="icon">
//                                 <img src="/images/mi_drop.png" alt="" />
//                             </p>
//                             <strong>3중 히알루론 산으로</strong>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </ProductDescStyle>
//     );
// };

// export default ProductDesc;

import { ProductDescStyle } from './style';

const ProductDesc = ({ product }) => {
    const { colorDark, colorLight, desc = [] } = product;

    // 좌/우 3개씩 나누기
    const leftDesc = desc.slice(0, 3);
    const rightDesc = desc.slice(3, 6);

    return (
        <ProductDescStyle style={{ backgroundColor: colorLight }}>
            <div className="inner">
                <div className="contentWrap">
                    <ul className="left">
                        {leftDesc.map((text, idx) => (
                            <li key={`left-${idx}`}>
                                <p className="icon" style={{ backgroundColor: colorDark }}>
                                    <img src="/images/mi_drop.png" alt="" />
                                </p>
                                <strong>{text}</strong>
                            </li>
                        ))}
                    </ul>
                    <ul className="right">
                        {rightDesc.map((text, idx) => (
                            <li key={`right-${idx}`}>
                                <p className="icon" style={{ backgroundColor: colorDark }}>
                                    <img src="/images/mi_drop.png" alt="" />
                                </p>
                                <strong>{text}</strong>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </ProductDescStyle>
    );
};

export default ProductDesc;
