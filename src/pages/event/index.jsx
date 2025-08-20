import EventList from '../../components/event/EventList';
import { EventStyle } from './style';

const Event = () => {
    return (
        <EventStyle>
            <div className="inner">
                <h1>EVENT</h1>
                <EventList />
            </div>
        </EventStyle>
    );
};

export default Event;
