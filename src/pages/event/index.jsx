import EventList from '../../components/event/EventList';
import ScrollBtns from '../../components/scrolltotop/ScrollBtns';
import { EventStyle } from './style';

const Event = () => {
    return (
        <>
            <ScrollBtns />
            <EventStyle>
                <div className="inner">
                    <h1 className="engTitle">EVENT</h1>
                    <EventList />
                </div>
            </EventStyle>
        </>
    );
};

export default Event;
