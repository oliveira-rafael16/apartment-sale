import styles from './Apartment.module.scss';

export default function Apartment() {
    return (
        <main>
            <nav className={styles.sale}>Apartment Sale</nav>
        </main>
        // the follow comment should be inside of nav for the logo asset
        // <img src="/assets/logo.svg" alt="Logo do Apartment Sale"
    );
}