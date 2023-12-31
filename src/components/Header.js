function Header() {

    const today = Date();
    console.log(today)
    return (
        <div className="date">
            <h1>{today}</h1>
        </div>
    );
}

export default Header;