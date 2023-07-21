import cls from './PasswordPart.module.scss'
import emptyStar from '../../../../shared/assets/Vector (13).svg'
import imgIcon from '../../../../shared/assets/Vector (12).svg'

interface PasswordPartProps {
    name: string;
    url?: string;
}

export const PasswordPart = ({ name, url}: PasswordPartProps) => {
    return (
        <div className={cls.passwordItem}>
            <div className={cls.namesPart}>
                <img src={imgIcon} alt="" className={cls.imgIcon} />
                <span>{name}</span>
            </div>
            <p>{url}</p>
            <img src={emptyStar} alt="" className={cls.emptyStar} />
        </div>
    );
};