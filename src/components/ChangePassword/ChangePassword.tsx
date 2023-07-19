import cls from "./ChangePassword.module.scss";
import garbage from "../../shared/assets/Vector (3).svg";
import close from "../../shared/assets/Group 10.svg";
import { ChangeEvent, useState } from "react";
import { DropDownMenu } from "../../shared/ui/DropDownMenu/DropDownMenu";
import { PopUp } from "../../shared/ui/Pop-Up/PopUp";
import { colorsIcons } from "../../constants/colorIcons";

export const ChangePassword = () => {
    const maxCommentLength = 1200;
    const [comment, setComment] = useState('');
    const [visibleDetails, setVisibleDetails] = useState(false);

    const handleClick = () => {
        setVisibleDetails(!visibleDetails);
    };

    const handleCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;
        if (value.length <= maxCommentLength) {
            setComment(value);
        }
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
      setIsOpen(false);
    };
    const handleOpen = () => {
      setIsOpen(true);
    };

    return (
        <>
            {!visibleDetails ? (
                <section className={cls.ChangePassword}>
                    <div className={cls.folderHeader}>
                        <p className={cls.changePasswordName}>Изменить Пароль</p>
                        <div className={cls.deleteDiv}>
                            <img src={garbage} alt="delete" />
                            <img src={close} alt="close" onClick={handleClick} />
                        </div>
                    </div>
                    <div className={cls.mainPart}>
                        <div className={cls.partsDiv}>
                            <span className={cls.changeFolderTitle}>Название:</span>
                            <input type="text" className={cls.nameInput} placeholder="Название проекта" />
                        </div>
                        <div className={cls.partsDiv}>
                            <span className={cls.changeFolderTitle}>Логин:</span>
                            <input type="text" placeholder="Логин" className={cls.chapterInput} />
                        </div>
                        <div className={cls.partsDiv}>
                            <span className={cls.changeFolderTitle}>Пароль:</span>
                            <input type="password" placeholder="Пароль" className={cls.chapterInput} />
                        </div>
                        <div className={cls.partsDiv}>
                            <span className={cls.changeFolderTitle}>Повторите:</span>
                            <input type="password" placeholder="Повторите пароль" className={cls.chapterInput} />
                        </div>
                        <div className={cls.partsDiv}>
                            <span className={cls.changeFolderTitle}>Сложность:</span>

                        </div>
                        <div className={cls.partsDiv}>
                            <span className={cls.changeFolderTitle}>URL:</span>
                            <input type="text" placeholder="URL" className={cls.chapterInput} />
                        </div>

                        <div className={cls.partsDiv}>
                            <span className={cls.changeFolderTitle}>Комментарий:</span>
                            <textarea
                                placeholder="Комментарий"
                                className={cls.descriptionInput}
                                value={comment}
                                onChange={handleCommentChange}
                                rows={4}
                            />
                            {comment.length > maxCommentLength &&
                                <PopUp
                                    isOpen={isOpen}
                                    onClose={handleClose} >
                                    <DropDownMenu />
                                </PopUp>
                            }
                        </div>

                        <div className={cls.partsDiv}>
                            <span className={cls.changeFolderTitle}>Цвет пароля:</span>
                            <div className={cls.colorsDiv}>
                                {colorsIcons.map((icon) => {
                                    const IconComponent = icon.component;
                                    return <IconComponent key={icon.id} />;
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={cls.buttonsDiv}>
                        <button className={cls.saveButton}> Сохранить</button>
                        <button className={cls.cancelButton}> Отменить</button>
                    </div>
                </section>
            ) : (
                <section></section>
            )}
        </>
    );
};