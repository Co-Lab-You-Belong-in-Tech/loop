function Header() {

    // const today = date.toLocaleDateString('en')
    const date = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const today = date.toLocaleDateString(undefined, options);
    return (
        <div className="date">
            <h1>Today is {today}</h1>
        </div>
    );
}

export default Header;