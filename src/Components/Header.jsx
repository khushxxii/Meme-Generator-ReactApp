import logo from "/images/logo.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={logo} 
            />
            <h1>Meme Generator</h1>
        </header>
    )
}