import styles from './tags.module.scss'

export default function Tags({tags}) {

    

    return(
        <div className={`${styles.tags}`}>
            {
                tags.map((item, index) => {
                    return(
                        <span key={index} className={`${styles.tag}`}>{item.name}</span>
                    )
                })
            }
        </div>
    )
}