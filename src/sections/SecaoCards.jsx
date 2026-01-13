import styles from './SecaoCard.module.css'

import CardMed from "./components/CardMed";
import fotoPersoal from './images/personal.png'
import fotoNutri from './images/nutri.png'
import fotoTerapia from './images/therapist.png'
import logo from './images/logoTrainwell.png'

export default function SecaoCards() {
    return (
        <div className={styles.SecaoCard}>
            <CardMed cargo="Personal Trainer" fotos={fotoPersoal} />
            <CardMed cargo="Nutricionist" fotos={fotoNutri}/>
            <CardMed cargo="THERAPIST" fotos={fotoTerapia} />

            <div className={styles.LogoArea}>
                <img src={logo} alt="TrainWell Logo" className={styles.LogoImg} />
                <h2 className={styles.LogoTexto}>TrainWell</h2>
            </div>

        </div>
    )
}