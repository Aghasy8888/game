'use client';

import { MutableRefObject, RefObject, useState } from 'react';
import {
  DEFAULT,
  ENGLISH,
  RUSSIAN,
  SHIFT,
  SHIFT_NAME,
} from '../../../constants';
import CustomKeyboard from '../CustomKeyboard';

interface IKeyBoardProps {
  setShowKeyboard: TSetBoolean;
  setSearchInput: TSetString;
  keyboardRef: MutableRefObject<{
    setSearchInput: (input: string) => void;
  } | null>;
  searchInputRef: RefObject<HTMLInputElement>;
  layoutInputProps: ILayoutInputProps;
}

const Keyboard = ({
  setSearchInput,
  keyboardRef,
  setShowKeyboard,
  searchInputRef,
  layoutInputProps,
}: IKeyBoardProps) => {
  const [layoutName, setLayoutName] = useState(DEFAULT);
  const [language, setLanguage] = useState(RUSSIAN);

  const onChange = (input: string) => {
    setSearchInput(input);
  };

  const handleShift = () => {
    let updatedlayoutName = layoutName;
    setLayoutName(updatedlayoutName === DEFAULT ? SHIFT : DEFAULT);
  };

  const onKeyPress = (button: string) => {
    if (button === SHIFT_NAME) handleShift();
  };

  const toggleLanguage = () => {
    setLanguage(language === ENGLISH ? RUSSIAN : ENGLISH);
    setLayoutName(DEFAULT);
  };

  return (
    <>
      <CustomKeyboard
        layoutInputProps={layoutInputProps}
        searchInputRef={searchInputRef}
        setLayoutName={setLayoutName}
        setShowKeyboard={setShowKeyboard}
        onToggleLanguage={toggleLanguage}
        language={language}
        keyboardRef={(r: TRef) => (keyboardRef.current = r)}
        layoutName={layoutName}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </>
  );
};

export default Keyboard;
