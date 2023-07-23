import cls from "./ChangePassword.module.scss";
import garbage from "../../../../shared/assets/Vector (3).svg";
import close from "../../../../shared/assets/Group 10.svg";
import warning from '../../../../shared/assets/Vector (17).svg'
import reset from '../../../../shared/assets/Vector (18).svg'
import { useState } from "react";
import { colorsIcons } from "../../../../constants/colorIcons";

export const ChangePassword = () => {
    const [visibleDetails, setVisibleDetails] = useState(false);
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [comment, setComment] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const handleClick = () => { setVisibleDetails(!visibleDetails) };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const handleRepeatPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRepeatPassword(event.target.value);
    };

    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputText = event.target.value;
        setComment(inputText);

        if (inputText.length > 1200) {
            setShowMessage(true);
        } else {
            setShowMessage(false);
        }
    };

    const isWeakPassword = () => {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
        const hasNumber = /\d/.test(password);
        return password.length < minLength
            || repeatPassword.length < minLength
            || !hasUpperCase
            || !hasLowerCase
            || !hasSpecialChar
            || !hasNumber;
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
                            <input type="password" placeholder="Пароль" className={cls.chapterInput} onChange={handlePasswordChange} />
                        </div>
                        <div className={cls.partsDiv}>
                            <span className={cls.changeFolderTitle}>Повторите:</span>
                            <input type="password" placeholder="Повторите пароль" className={cls.chapterInput} onChange={handleRepeatPasswordChange} />
                        </div>
                        <div className={cls.partsDiv}>
                            <span className={cls.changeFolderTitle}>Сложность:</span>
                            {isWeakPassword() ? (
                                <div className={cls.Complexity}>
                                    <div className={cls.badPassword}>
                                        <img src={warning} alt="Warning" />
                                        <p>Слабый пароль</p>
                                    </div>
                                    <div className={cls.resetPassword}>
                                        <img src={reset} alt="reset" />
                                        <p>Придумать пароль</p>
                                    </div>
                                </div>

                            ) : (
                                <div className={cls.resetPassword}>
                                    <img src={reset} alt="reset" />
                                    <p>Придумать пароль</p>
                                </div>
                            )}
                        </div>
                        <div className={cls.partsDiv}>
                            <span className={cls.changeFolderTitle}>URL:</span>
                            <input type="text" placeholder="URL" className={cls.chapterInput} />
                        </div>

                        <div className={cls.partsDiv}>
                            <span className={cls.changeFolderTitle}>Комментарий:</span>
                            <div className={cls.comments}>
                                <textarea
                                    placeholder="Комментарий"
                                    className={cls.descriptionInput}
                                    value={comment}
                                    onChange={handleCommentChange}
                                    rows={4}
                                />
                                {showMessage && <div className={cls.moreThan}>Text exceeds 1200 characters!</div>}
                            </div>
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