import Done from '../shared/assets/Vector (5).svg'
import Close from '../shared/assets/Vector (6).svg'
import Warn from '../shared/assets/Vector (7).svg'
import close from '../shared/assets/Group 28.svg'
import close1 from '../shared/assets/Group 28 (1).svg'
import close2 from '../shared/assets/Group 28 (2).svg'
import cls from "./DoneWrongWarn.module.scss";

export const warningItems = [
    {
      id: 1,
      className:cls.donePart,
      textClass: cls.textPart,
      icon: Done,
      alt: "done",
      text: "Успешно скопировано",
      close: close,
    },
    {
      id: 2,
      className: cls.closePart,
      textClass: cls.text1Part,
      icon: Close,
      alt: "close",
      text: "Ошибка сохранения",
      close: close1,
    },
    {
      id: 3,
      className: cls.warnPart,
      textClass: cls.text2Part,
      icon: Warn,
      alt: "warn",
      text: "Предупреждение",
      close: close2,
    },
  ];
  