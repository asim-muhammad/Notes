import ListItem from "./ListItem/ListItem";

export default function MainList({ onItemClick = () => { }, values = [] }) {

    return (
        <ul className="
            grid h-full grid-cols-1 content-start gap-2 md:grid-cols-1 xm:grid-cols-2">

            {
                values.map((note, index) => <ListItem onClick={() => onItemClick(index)} key={index} value={note} />)
            }
        </ul>
    );
}