const Footer = () => {
    return (
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p class="col-md-4 mb-0 text-muted">© 2025 Looma</p>

                <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
                </a>

                <ul class="nav col-md-4 justify-content-end">
                {/* <li className="nav-item">
                        <Link className="nav-link active" to="/docs" aria-current="page" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Documentação</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/forum" aria-current="page" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Fórum</Link>
                    </li>*/ }    
                </ul>
            </footer>
        </div>
    )
}

export default Footer