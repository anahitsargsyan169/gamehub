import React from "react";

import {ICON_TYPES} from "../constants/constants"

const Square = ({turn, className}) => {
    return (
        <>
            <svg className={className} height="92" width="92">{turn === "X" ? ICON_TYPES.X : turn === "O" ? ICON_TYPES.O : null}</svg>
        </>
    )
}
export default Square;