import { useState } from "react";
import { IconWrap, ListWrapper } from "./List.styled";
import { HiPencilAlt, HiTrash, HiOutlineStar, HiStar } from "react-icons/hi";

function List() {
  const [favorite, setFavorite] = useState(false);
  return (
    <ListWrapper>
      <p>ID</p>
      <p>Adinda Pramudya Ramadhan</p>
      <p>084545484554878</p>
      <IconWrap>
        <HiPencilAlt />
        <HiTrash />
        {favorite == false ? (
          <HiOutlineStar
            onClick={() => {
              setFavorite(true);
            }}
          />
        ) : (
          <HiStar
            onClick={() => {
              setFavorite(false);
            }}
          />
        )}
      </IconWrap>
    </ListWrapper>
  );
}

export default List;
