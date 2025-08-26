import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import { ProductListWrap } from './style';
import Pagination2 from '../pagination/Shopindex';
import { productActions } from '../../store/modules/productSlice';
import { Pagination1Style } from '../pagination/style';

const ProductList = () => {
    const dispatch = useDispatch();
    const {
        filtered = [],
        currentPage = 1,
        itemsPerPage = 16,
    } = useSelector((state) => state.product);

    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentProducts = filtered.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.max(Math.ceil(filtered.length / itemsPerPage), 1);

    const handlePrev = () => {
        if (currentPage > 1) dispatch(productActions.setCurrentPage(currentPage - 1));
    };

    const handleNext = () => {
        if (currentPage < totalPages) dispatch(productActions.setCurrentPage(currentPage + 1));
    };

    const handlePageClick = (page) => {
        dispatch(productActions.setCurrentPage(page));
    };

    return (
        <ProductListWrap className="product-box">
            {currentProducts.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}{' '}
            <Pagination1Style>
                <div className="paginations">
                    <Pagination2
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPrev={handlePrev}
                        onNext={handleNext}
                        onPageClick={handlePageClick}
                    />
                </div>
            </Pagination1Style>
        </ProductListWrap>
    );
};

export default ProductList;
