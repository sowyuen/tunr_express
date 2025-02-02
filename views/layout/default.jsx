var React = require('react');

class DefaultLayout extends React.Component {
    render() {

        return(
            <html>
            <head>
            <title>{this.props.title}</title>
            <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
            </head>
            <body>


            <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/artist">
            <img src="https://png.pngtree.com/element_our/png/20181022/music-and-live-music-logo-with-neon-light-effect-vector-png_199406.jpg" width="30" height="30" alt=""/> Tunr Music
            </a>


            <div class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/artist">Home</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            </div>

            <div class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/register">Register</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            </div>

            <div class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/login">Login</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            </div>

            <div class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            More
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/artist">Home</a>
            <a class="dropdown-item" href="/artist/new">Add more artists</a>
            </div>
            </div>

            </nav>

            <div className="container-fluid" style={{display:"flex-wrap"}}>
            {this.props.children}
            </div>

            <footer className="page-footer font-small cyan darken-3">
            <div className="footer-copyright text-center py-3">© 2018 Copyright:
            <a href="/recipes"> Brought to you by Tunr Music</a>
            </div>
            </footer>

            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
            </script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
            </script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
            </script>
            </body>
            </html>

            )
    }
}

module.exports = DefaultLayout;