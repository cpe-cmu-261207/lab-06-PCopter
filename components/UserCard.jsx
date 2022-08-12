import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import React, { useState } from "react";
import UserCardDetail from "../components/UserCardDetail";

export default function UserCard(props) {
  const [isTap, setIsTap] = useState(false);
  const onClickHandler = () => {
    {
      isTap === false ? setIsTap(true) : setIsTap(false);
    }
  };
  return (
    <div>
      {/* Example of folded UserCard */}
      <div className="border-bottom">
        {/* main section */}
        <div className="d-flex align-items-center p-3" onClick={onClickHandler}>
          <img src={props.imgUrl} width="90px" class="rounded-circle me-4" />
          <span className="text-center display-6 me-auto">{props.name}</span>
          {isTap === false ? <IconChevronDown /> : <IconChevronUp />}
        </div>
      </div>
      {/* UserCardDetail is hidden */}
      {isTap === false ? null : (
        <UserCardDetail email={props.name} address={props.address} />
      )}

      {/* details */}
    </div>
  );
}
