import { ProductDescStyle } from './style';

const ProductDesc = ({ product }) => {
    const { colorDark, colorLight, desc = [] } = product;

    // 좌/우 3개씩 나누기
    const leftDesc = desc.slice(0, 3);
    const rightDesc = desc.slice(3, 6);

    return (
        <>
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
        </>
    );
};

export default ProductDesc;
