import React, { useEffect } from "react";
import styled from "styled-components";

interface Props {
    description: string;
}

const ProductDescription = (props: Props) => {
    return (
        <span dangerouslySetInnerHTML={{__html: props.description}}/>
    )
}

export default ProductDescription;

