import { useState } from 'react';
import EventList from '../../components/event/EventList';
import ScrollBtns from '../../components/scrolltotop/ScrollBtns';
import { EventStyle } from './style';
import EndedEventList from '../../components/event/EndedEventList';

const onEvent = {
    ongoing: '진행중 이벤트',
    ended: '종료된 이벤트',
};

const Event = () => {
    const [activeTab, setActiveTab] = useState('ongoing');
    return (
        <>
            <ScrollBtns />
            <EventStyle>
                <div className="inner">
                    <h1 className="engTitle">EVENT</h1>
                    <div className="product-tabs on">
                        {Object.entries(onEvent).map(([key, label]) => (
                            <div
                                key={key}
                                className={activeTab === key ? 'active-tab' : ''}
                                onClick={() => setActiveTab(key)}
                            >
                                {label}
                            </div>
                        ))}
                    </div>
                    <p className="line"></p>
                    {/* <ProductList eventStatus={activeTab} /> */}
                    {activeTab === 'ongoing' ? <EventList /> : <EndedEventList />}
                </div>
            </EventStyle>
        </>
    );
};

export default Event;
