import cls from './DoneWrongWarn.module.scss'
import Done from '../../shared/assets/Vector(5).svg'
import Close from '../../shared/assets/Vector(6).svg'
import Warn from '../../shared/assets/Vector(7).svg'
import close from '../../shared/assets/Group 28.svg'
import close1 from '../../shared/assets/Group 28(1).svg'
import close2 from '../../shared/assets/Group 28(2).svg'
// import { warningItems } from '../constants/warningItems'

export const DoneWrongWarn = () => {
    return (
        <section className={cls.DoneWrongWarn}>
            {/* 
            {
                warningItems.map((warningItem) => (
                    <div className={warningItem.className} key={warningItem.id}>
                        <div className={warningItem.textClass}>
                            <img src={warningItem.icon} alt={warningItem.alt} />
                            <span> {warningItem.text} </span>
                        </div>
                        <img src={warningItem.close} alt="close" className={cls.close} />
                    </div>
                ))
            } 
            */}
            <div className={cls.donePart} id='1'>
                <div className={cls.textPart}>
                    <img src={Done} alt="done" />
                    <span> Успешно скопировано </span>
                </div>
                <img src={close} alt="close" className={cls.close} />
            </div>
            <div className={cls.closePart} id='2'>
                <div className={cls.text1Part}>
                    <img src={Close} alt="close" />
                    <span> Ошибка сохранения </span>
                </div>
                <img src={close1} alt="close" className={cls.close} />
            </div>
            <div className={cls.warnPart} id='3'> 
                <div className={cls.text2Part}>
                    <img src={Warn} alt="warn" />
                    <span> Предупреждение </span>
                </div>
                <img src={close2} alt="close" className={cls.close} />
            </div>
        </section>
    );
}