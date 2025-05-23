import { MdDoubleArrow } from "react-icons/md";

const List: React.FC<{ data: Array<React.ReactNode> }> = ({ data }) => {
  return (
    <ul className="m-0 p-0">
      {data.map((i, k) => (
        <li key={k} className="list-unstyled mb-2 d-flex">
          <div className="icon mr-3">
            <MdDoubleArrow color="#008edb" size={22} />
          </div>
          {i}
        </li>
      ))}
    </ul>
  );
};

export default List;
