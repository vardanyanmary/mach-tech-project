import { useState } from "react";
import cls from "./AddAccess.module.scss";
import Select, { StylesConfig } from "react-select";
import { ReactComponent as Add } from "../../shared/assets/добавление.svg";
import { ReactComponent as Check } from "../../shared/assets/Rectangle 3980.svg";
import { ReactComponent as Checked } from "../../shared/assets/Property 1=Variant2.svg";
import { addUserItems } from "../../constants/addUserItems";

const options = [
    { label: "Полный" },
    { label: "Чтение" },
    { label: "Пусто" }
];

export const AddAccess = () => {
    const [visibleDetails, setVisibleDetails] = useState(false);
    const [closeDetails, setCloseDetails] = useState(false);

    const handleClick = () => {
        setVisibleDetails(!visibleDetails);
    };

    const handleClose = () => {
        setCloseDetails(!closeDetails);
    };

    const CustomStyles: StylesConfig = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isFocused ? "white" : "#E8F0FF",
            borderRadius: "100px",
            border: 'none',
            gap: "10px",
            '&:hover': {
                backgroundColor: "white",
            }
        }),
        placeholder: (provided) => ({
            ...provided,
            color: "#000",
            fontSize: "14px"
        }),
    };



    return (
        <>
            {!closeDetails ? (
                <section>
                    <div className={cls.AddAccess}>
                        <input type="text" className={cls.inputAddUser} placeholder="Поиск" />
                        {addUserItems.map((addUserItem) => (
                            <div className={cls.hover}>
                                <div className={cls.userItemDiv}>
                                    <div className={cls.userItem}>
                                        <Add className={cls.add} />
                                        {!visibleDetails ? (
                                            <Check className={cls.check} onClick={handleClick} />
                                        ) : (
                                            <Checked className={cls.checked} />
                                        )}
                                        {addUserItem.name}
                                    </div>
                                    <Select
                                        options={options}
                                        placeholder={"Права"}
                                        styles={CustomStyles}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={cls.buttonsDiv}>
                        <button className={cls.saveButton}> Сохранить </button>
                        <button className={cls.cancelButton}> Отменить </button>
                    </div>
                </section>
            ) :
                null
            }
        </>
    );
};