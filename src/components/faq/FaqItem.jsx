const FaqItem = ({ faq, onClick }) => {
    const { id, title, answer, isOpen } = faq;
    return (
        <dl className={isOpen ? 'on' : ''} onClick={onClick}>
            <dt>
                <div className="question">
                    <span>Q.</span>
                    <p>{title}</p>
                </div>
                <img src="./images/Notice/Faq_arrow_off.png" alt="" />
            </dt>
            {isOpen && (
                <dd>
                    <p>{answer}</p>
                </dd>
            )}
        </dl>
    );
};

export default FaqItem;
