import throttle from "lodash.throttle";
import { FC, useLayoutEffect as useLayoutE, useRef, useState } from "react";
import styled, { css } from "styled-components";

interface Props {
  ratio: number;
  width: string;
  defaultHeight?: number;
  extraStyles?: ReturnType<typeof css>;
  children: React.ReactNode | never;
}

type ContainerProps = Readonly<{
  width: string;
  height: number;
  extraStyles?: ReturnType<typeof css>;
}>;

const Container = styled.div<ContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height}px;
  ${({ extraStyles }) => extraStyles || ""}
`;

const useLayoutEffect = typeof window === "undefined" ? () => {} : useLayoutE;

const AspectRatio: FC<Props> = ({
  defaultHeight = 300,
  ratio,
  width,
  children,
  extraStyles,
}) => {
  const [height, setHeight] = useState(defaultHeight);
  const ref = useRef(null);
  useLayoutEffect(() => {
    if (!ref.current) return;
    const resizeObserver = new ResizeObserver(
      throttle((entries) => {
        setHeight(entries[0].contentRect.width / ratio);
      }, 200)
    );
    resizeObserver.observe(ref.current);
    return () => resizeObserver.disconnect();
  }, [ref, setHeight, ratio]);
  return (
    <Container
      className="aspectRatio"
      ref={ref}
      {...{ width, ratio, height, extraStyles }}
    >
      {children}
    </Container>
  );
};

export default AspectRatio;
