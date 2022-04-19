import styles from './Footer.module.scss'

function Footer() {
    return (
        <div className={styles.Footer}>
            <div className={styles.Adress}>
                <h3>Our address</h3>
                <h4>Sweden</h4>
                <h4>Stockholm</h4>
                
            </div>
           
            <div className={styles.Logo}></div>
            <div className={styles.NewsLetter}>
                <h3>Contact us</h3>
                <p>
                    Do you have a quaestion
                   
                    Feel free to contact us via mail!
                </p>
                <input type="text" placeholder="Your Message" />
                <button className="primary-btn">Contact us</button>
            </div>
        </div>
    )
}

export default Footer
