import { options } from '../../../constants/dropDownMenuItems';
import cls from './DropDownMenu.module.scss'

export const DropDownMenu = () => {
    return (
        <div className={cls.DropDownMenu}>
            {options.map((option) => (
                <p className={cls.DropDownOption}>{option}</p>
            ))}
        </div>
    );
}