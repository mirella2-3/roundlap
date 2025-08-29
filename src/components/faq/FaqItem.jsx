import React from 'react';

const FaqItem = ({ faq, onClick }) => {
    const { id, title, answer, isOpen } = faq;
    return (
        <dl className={isOpen ? 'on' : ''} onClick={onClick}>
            <dt>
                <div className="question">
                    <span>Q.</span>
                    <p>
                        {title.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                </div>
                {isOpen ? (
                    <img src="./images/Notice/Faq_arrow_on.png" alt="" />
                ) : (
                    <img src="./images/Notice/Faq_arrow_off.png" alt="" />
                )}
            </dt>
            {isOpen && (
                <dd>
                    <p>
                        {answer.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                </dd>
            )}
        </dl>
    );
};

export default FaqItem;
