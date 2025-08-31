import { Link } from 'react-router-dom';

const NoticeItem = ({ notice }) => {
    const { id, title, date } = notice;
    return (
        <tr>
            <td>{id}</td>
            <td>
                {/* <Link to={`/notice/${id}`}>{title}</Link> */}
                {title}
            </td>
            <td>{date}</td>
        </tr>
    );
};

export default NoticeItem;
