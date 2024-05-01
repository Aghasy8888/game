import { Dispatch, RefObject, SetStateAction, useEffect } from 'react';

const useSetStateByElementHeight = (
  setState: Dispatch<SetStateAction<any>>,
  ref: RefObject<HTMLHeadingElement>
) => {
  useEffect(() => {
    if (ref.current) {
      const titleHeight = ref.current.clientHeight;
      const lineHeight = parseFloat(
        window.getComputedStyle(ref.current).lineHeight
      );

      if (titleHeight > lineHeight * 1.1) {
        setState(59);
      } else {
        setState(82);
      }
    }
  }, []);
};

export default useSetStateByElementHeight;
