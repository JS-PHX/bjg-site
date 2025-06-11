export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">
            <footer>
                <p>{currentYear} BJG. All Rights Reserved</p>
            </footer>
        </div>
    )
}