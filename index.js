
function Header() {
    return(<header>Hello World
            <nav className='nav'>
                <img src='./1024px-Tokyo_Stabbing.jpg' className='img'></img>
                <ul className='nav-items'>
                    <li>
                        Pricing
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </nav>
        </header>
)}

function Footer(){
    return(
        <footer className='footer'>Hoofard Code</footer>
    )
}

function Body (){
    return(
        <div>
        <h1>lorem ipsum</h1>
        <ol className='list-items'>
            <li>Carpe Diem</li>
            <li>Vini Vidi Vici</li>
            <li>Arcane</li>
            <li>Covid-19</li>
            <li>Elden RING OH ELDEN RING</li>
        </ol>
        </div>
    )
}

function Page() {
    return( <div>
        <Header/>
        <Body/>
        <Footer/>
        </div>
)}
// document.getElementById('root').append(page)
ReactDOM.render(<Page/>, document.getElementById('root'))

//a function that returns react elements, not capitalizing the my in my component
//calling header as a function instead of a <html>