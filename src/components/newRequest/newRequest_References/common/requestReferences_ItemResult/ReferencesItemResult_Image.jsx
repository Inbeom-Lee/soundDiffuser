import React, { useState } from "react";
import styled from "styled-components";
import ErrorPicker from "ErrorPicker";

export const ReferencesItemResult_Image = ErrorPicker(
  ({ urlThumbnail, title }) => {
    const [loadImage, setLoadImage] = useState(false);

    const render = (
      <Container>
        {urlThumbnail && (
          <Image
            src={urlThumbnail}
            alt={title}
            $loadImage={loadImage}
            onLoad={() => setLoadImage(true)}
          />
        )}
      </Container>
    );
    return render;
  },
  ["ReferencesItemResult_Image"]
);

const Container = styled.div`
  flex-shrink: 0;
  width: 144px;
  height: 94px;
`;
const Image = styled.img`
  width: 144px;
  height: 94px;
  border-radius: 3px;
  object-fit: cover;
  opacity: ${(props) => (props.$loadImage ? 1 : 0)};
  transition: 0.5s;
`;
